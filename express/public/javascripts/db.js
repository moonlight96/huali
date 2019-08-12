const {
    MongoClient,
    ObjectId
} = require('mongodb');
const url = 'mongodb://localhost:27017';
//Database name
const dbName = 'test';
//connect
const connect = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, {
            useNewUrlParser: true
        }, function (err, client) {
            if (err) {
                reject(err);
                throw err;
            } else {
                resolve(client);
            }
        });
    })
}
//查询
const find = (col, params) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.find(params).toArray(function (err, docs) {
            if (err) {
                reject(err);
            } else {
                resolve(docs);
            }
        });
        //关闭连接
        client.close();
    })
}

//删除
const sub = (col, params) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.deleteOne(params,(function (err, obj) {
            if (err) {
                reject(err);
                throw err;
                console.log('文档删除了');
            } else {
                resolve(obj);
            }
        }));
        //关闭连接
        client.close();
    })
}
//改
const updateOne = (col, params,whereurl) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        // params查询条件
        // whereurl更新条件
        collection.updateOne(params,whereurl,function (err, obj) {
            if (err) {
                reject(err);
                throw err;
            } else {
                resolve(obj);
               console.log('更新文档成功'); 
            }
        });
        //关闭连接
        client.close();
    })
}

//增
const insertOne = (col, params) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.insertOne(params,(function(err, res) {
            if (err) {
                reject(err);
                throw err;
            } else {
                resolve(res);
                console.log("文档插入成功");
            }
        }));
        //关闭连接
        client.close();
    })
}
module.exports = {
    connect,
    find,
    sub,
    updateOne,
    insertOne,
    ObjectId
}