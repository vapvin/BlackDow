const client = require('./db');

const many = async () => {
    const db = (await client).db('blackdow');
    const collection = db.collection('mongo');
    collection.insertMany([{type: 'JSON'}, {doc: 'docs'}], (err, result) => {
        if(err){
            throw err;
            return;
        }
        return result;
    })
};

module.exports = many;