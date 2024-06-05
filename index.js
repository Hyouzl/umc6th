// const express = require('express')   // common JS
import express from 'express'  // ES6
import { tempRouter } from './src/routes/temp.route.js';
import { BaseError } from './config/error.js';
import { response } from './config/response.js';
import dotenv from 'dotenv';
import { specs } from './swagger/swagger.config.js';
import SwaggerUi from 'swagger-ui-express';
import { userRouter } from './src/routes/user.route.js';
import { status } from './config/response.status.js';
import { missionRouter } from './src/routes/mission.route.js';
import YAML from 'yamljs';


// Use the path functions to get the directory name
const app = express()
const port = 3000;

dotenv.config();

app.use(express.urlencoded({extended: false})); // 단순 객체 문자열 형태로 본문 데이터 해석

const swaggerDocument = YAML.load('./swagger/swagger.yml');
// swagger
app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(swaggerDocument));


// router setting
app.use('/temp', tempRouter);
app.use('/user', userRouter);
app.use('/mission', missionRouter);

// error handling
app.use((req, res, next) => {
    const err = new BaseError(status.NOT_FOUND);
    next(err);
});

app.use((err, req, res, next) => {
    // 템플릿 엔진 변수 설정
    res.locals.message = err.message;   
    // 개발환경이면 에러를 출력하고 아니면 출력하지 않기
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {}; 
    res.status(err.data.status).send(response(err.data));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})