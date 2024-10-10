const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user_name',
    password: 'password',
    database: 'regist'
});

//회원가입 정보 입력
exports.insert = (data, cb) => {
    var sql = `INSERT INTO tb_user VALUES ('${ data.id }', '${ data.password } ', ' ${ data.name } ', '${ data.email} ');`;

    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        cb(data.id);
    });
}

//로그인 정보 읽기 
exports.select = (id, passowrd, cb) => {
    var sql = `SELECT * FROM tb_user WHERE id = '${id}' limit 1;`;

    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        cb(rows[0]);
    });
}

//회원정보 
exports.get_user = (id, cb) => {
    var sql = `SELECT * FROM tb_user WHERE id = '${id}' limit 1;`;

    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        cb(rows);
    });
}

//회원 정보 수정
exports.update = (data, cb) => {
    var sql = `UPDATE user SET name='${data.name}', email='${data.email}', password='${data.password}' WHERE id='${data.id}';`;

    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        cb(rows);
    });
}

//회원 탈퇴
exports.delete = (id, cb) => {
    var sql = `DELETE * FROM tb_user WHERE id = '${id}';`;

    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        cb(rows);
    });
}