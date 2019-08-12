var express = require('express');
var $ = require('jquery');
var router = express.Router();
var {
    find,
    insertOne
} = require('../public/javascripts/db');
// router.use((req, res, next) => {
//     res.append("Access-Control-Allow-Origin", "*");
//     next();
// });
router.post('/login', async (req, res) => {
    let {
        username,
        password
    } = req.body;
    let result1 = await find('user', {
        name: username,
        pwd: password
    });
    console.log(result1);
    if (result1.length > 0) {
        res.send("登录成功！");
    } else {
        res.send("用户名或密码错误！");
    }
})
router.post('/test', async (req, res) => {
    let {
        username,

    } = req.body;
    let result1 = await find('user', {
        name: username,
    });
    // console.log(result1);
    if (result1.length > 0) {
        res.send("用户已存在");
    } else {
        res.send("可以注册");
    }
})

router.post('/reg', async (req, res) => {
    let {
        username,
        password
    } = req.body;

    let result1 = await insertOne('user', {
        name: username,
        pwd: password
    });
    console.log(result1);
    res.send('注册成功');
})
module.exports = router;
console.log('启动服务器');