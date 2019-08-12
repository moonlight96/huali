const{
    insertOne,
    ObjectId
} =require('./db');
;(async()=>{
    let data =await insertOne('user',{name:'huahua',age:'66',hobby:'owe'});
    console.log(data);
})();