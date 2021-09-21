var db = require('../config/connection')
var collection = require('../config/collection')
module.exports = {

    addData : (meow, callback)=>{

        
        db.get().collection('meow').insertOne(meow).then((data)=>{
            callback(data)

        })
    },
    getData : (callback)=>{
        return new Promise(async(resolve, reject)=>{
            let data = await db.get().collection(collection.USER_COLLECTION).find().toArray()
            resolve(data)
        })
    }
}