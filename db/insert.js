const client = require('./db');

const insert = async () => {
    const db = (await client).db('blackdow');
    const collection = db.collection('mongo');
    collection.insertOne({title: 'node'}, (err, result) => {
        if(err){
            throw err
            return
        }
        return result;
    })
};

module.exports = insert;