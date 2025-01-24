const express=require('express')
const productController=require('../controllers/prodctController')
const router=express.Router()

router.get('/menulist' ,productController.menuListing)
router.post('/addmenuitems',productController.addMenuItems)
router.get('/selectedmenuitems/:id',productController.selectedMenuItems)

module.exports=router