const express = require('express')
const userRouter = require('./user')
const adminRouter = require('./admin')
const router = express.Router();

router.use('/user',userRouter)
router.use('/admin',adminRouter)

router.get('/', (req, res)=>{
    let products = [
        {
          name:'Iphone 11',
          category:'Mobile',
          description:'Phone with best features.',
          image:"https://cdn.vox-cdn.com/thumbor/VJYsG_x6_561Tw2B_5tsgaNUeh0=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21973361/akrales_201018_4238_0531.0.jpg"
    
        },
        {
          name:'Samsung Note 20',
          category:'Mobile',
          description:'Phone with best features.',
          image:"https://cdn.vox-cdn.com/thumbor/VJYsG_x6_561Tw2B_5tsgaNUeh0=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21973361/akrales_201018_4238_0531.0.jpg"
    
        },
        {
          name:'Iphone 12',
          category:'Mobile',
          description:'Phone with best features.',
          image:"https://cdn.vox-cdn.com/thumbor/VJYsG_x6_561Tw2B_5tsgaNUeh0=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21973361/akrales_201018_4238_0531.0.jpg"
    
        },
        {
          name:'Redmi note 8 pro',
          category:'Mobile',
          description:'Phone with best features.',
          image:"https://cdn.vox-cdn.com/thumbor/VJYsG_x6_561Tw2B_5tsgaNUeh0=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21973361/akrales_201018_4238_0531.0.jpg"
    
        }
      ]
    let user = req.session.user
    res.render('homepage',{products, user});

});

module.exports = router;