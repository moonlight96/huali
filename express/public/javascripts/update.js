const{
    updateOne,
    ObjectId
} =require('./db');
;(async()=>{
    let data =await updateOne('user',{name:'lili'},{$set:{age:'30'}});
    console.log(data);
})();