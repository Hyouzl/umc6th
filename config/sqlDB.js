import mysql from 'mysql';

const dbConfig = {
  init: function () {
    return mysql.createConnection({
      host: "umc6th-db.cpfbsdb5c83r.ap-northeast-2.rds.amazonaws.com",
      port: "3306",
      user: "hyouzl",
      password: "opjkl9090",
    });
  },
  connect: function (conn) {
    conn.connect(function (err) {
      if (err) {
        console.error('mysql connection error : ' + err);
      } else {
        console.log('mysql is connected successfully.');
      }
    });
  },
};

export default dbConfig;