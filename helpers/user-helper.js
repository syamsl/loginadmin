var db = require('../config/connection')
var collection = require('../config/collection')
const bcrypt = require('bcryptjs')
const { USER_COLLECTION } = require('../config/collection')
const { response } = require('express')

module.exports={
    doSignup:(userData)=>{
                return new Promise(async(resolve, reject)=>{
                let response={}
                let user = await db.get().collection(collection.USER_COLLECTION).findOne({$or: [{email:userData.email},{mobile:userData.mobile}]})
                if(user){
                    response.status = true;
                    resolve(response)

                }else{
                    response.status = false;
                    userData.pass = await bcrypt.hash(userData.pass, 10)
                    db.get().collection(collection.USER_COLLECTION).insertOne(userData).then((response)=>{
                        resolve(response)   
                    })
                }
                })

    },
    doLogin:(userData)=>{
        let loginStatus = false;
        let response = {}
        return new Promise(async(resolve, reject)=>{
            let user = await db.get().collection(collection.USER_COLLECTION).findOne({email:userData.email})
            if(user){
                bcrypt.compare(userData.pass,user.pass).then((status)=>{
                    console.log(status);
                    if(status){
                        console.log('Logged INNN');
                        response.user=user
                        response.status=true;
                        resolve(response);
                    }else{
                        console.log('Login FAILED');
                        resolve({status:false})
                    }
                })
            }else{
                console.log('Login Failed');
                resolve({status:false})
            }
        })
    }
}