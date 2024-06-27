// const express = require('express')   // common JS
import express from 'express'  // ES6
import { tempRouter } from './src/routes/temp.route.js';
import { BaseError } from './config/error.js';
import { response } from './config/response.js';
import dotenv from 'dotenv';
import { specs } from './config/swagger.config.js';
import SwaggerUi from 'swagger-ui-express';
import { memberRouter } from './src/routes/member.route.js';
import { status } from './config/response.status.js';
import { storeRouter } from './src/routes/store.route.js';
import cors from 'cors'
import { missionRouter } from './src/routes/mission.route.js';
import { healthRoute } from './src/routes/health.route.js';

// Use the path functions to get the directory name
const app = express()
const port = process.env.PORT || 3000;

dotenv.config();

app.use(cors());                            // cors 방식 허용
app.use(express.json());                    // request의 본문을 json으로 해석할 수 있도록 함
app.use(express.urlencoded({extended: false})); // 단순 객체 문자열 형태로 본문 데이터 해석

// swagger
app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(specs));

app.use('/health', healthRoute);

app.get('/', (req, res, next) => {
    res.send(response(status.SUCCESS, "루트 페이지!"));
}) 

app.use((req, res, next) => {
    const err = new BaseError(status.NOT_FOUND);
    next(err);
});

// router setting
app.use('/temp', tempRouter);
app.use('/user', memberRouter);
// 가게에 미션 작성
app.use('/store', storeRouter);
app.use('/:storeId', storeRouter);
app.use('/mission', missionRouter);

// error handling
app.use((req, res, next) => {
    const err = new BaseError(status.BAD_REQUEST);
    console.log(err);
    next(err);
});

app.use((err, req, res, next) => {
    console.log(err);
    // 템플릿 엔진 변수 설정
    res.locals.message = err.message;   
    // 개발환경이면 에러를 출력하고 아니면 출력하지 않기
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {}; 
    res.status(err.data?.status).send(response(err.data));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})