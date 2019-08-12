const {
    find,
    ObjectId
} = require('./db');

(async () => {
    let data = await find('user', {
        name: 'yueyue'
    });
    console.log(data);
})();