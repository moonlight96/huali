const{
    sub,
    ObjectId
} =require('./db');
;(async()=>{
    let data =await sub('user',{name:'lili'});
    console.log(data);
})();