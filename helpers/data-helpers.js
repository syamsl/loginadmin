var db = require('../config/connection')
var collection = require('../config/collection')
var ObjectId = require('mongodb').ObjectID
const bcrypt = require('bcryptjs')

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
    },

    deleteData : (dataId)=>{
        return new Promise((resolve, reject)=>{
            db.get().collection(collection.USER_COLLECTION).deleteOne({_id:ObjectId(dataId)}).then((response)=>{
                console.log(dataId);
                console.log(response);
                resolve(response)
            })
        })
    },

    editData : (userData, dataId)=>{
        return new Promise ((resolve, reject)=>{
            db.get().collection(collection.USER_COLLECTION).updateOne({_id:(dataId)},{userData}).then((response)=>{
                resolve(response)
            })
        })
    },

    getOneData : (dataId)=>{
        return new Promise((resolve, reject)=>{
            db.get().collection(collection.USER_COLLECTION).findOne({_id:ObjectId(dataId)}).then((data)=>{
                resolve(data)
            })
        })
    },

    updateData : (dataId, data)=>{
        return new Promise((resolve, reject)=>{
            db.get().collection(collection.USER_COLLECTION).updateOne({_id:ObjectId(dataId)},{
                $set:{
                    name:data.name,
                    mobile:data.mobile,
                    email:data.email
                }

            }).then(()=>{
                resolve();
            })
        })
    },
    addUser : (userData)=>{
        return new Promise(async(resolve, reject)=>{
        let response={}
        let user = await db.get().collection(collection.USER_COLLECTION).findOne({$or: [{email:userData.email},{mobile:userData.mobile}]})
        if(user){
            response.status = true
            resolve(response)
        }else{
            response.status = false;
            userData.pass = await bcrypt.hash(userData.pass, 10)
            db.get().collection(collection.USER_COLLECTION).insertOne(userData).then((response)=>{
                resolve(response)
            })
            }
        })
    }
}