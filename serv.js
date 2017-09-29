/**
 * Des
 * Created by duqichao on 2017/9/20.
 * E-mail duqichao@jd.com
 * Update 2017/9/20
 */
let express = require('express');
let app = express();

let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'dqc@1990',
    database: 'foodhao',
    port: 3306
});

connection.connect();

// 获取商品数据
app.get('/getProducts', function (req, res) {
    let sql = 'SELECT * FROM products';
    connection.query(sql, function (err, result) {
        if(!err){
            result.forEach(item => {
                item.isSelect = false
            });
            res.send(result)
        }
    });
});

app.use('/static', express.static('static'));
app.listen('80');