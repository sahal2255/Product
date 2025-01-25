const Menu = require("../model/items");



const menuListing = async (req, res) => {
    console.log('hitting to the menu list controller');
    const menuLists=await Menu.find()
    console.log('menulist ',menuLists)
  
    res.status(200).json({ success: true, menuLists });
  };

const addMenuItems=async(req,res)=>{
    console.log('hitting the add menuitems route')
    // console.log(req.body)
    const {data}=req.body
    console.log('data',data)
    try {
        const newMenu=new Menu({
           name:data.name,
           description:data.description,
           items:data.items 
        })

        const savedMenu=await newMenu.save()
        console.log('saved menu',savedMenu)
        res.status(201).json({message:'New Menu Item Added Successfully',savedMenu})
    } catch (error) {
        console.log('error in the Item Add route',error)
    }
}

const selectedMenuItems=async(req,res)=>{
    console.log('hitting the selected menu items controller')
    const {id}=req.params;
    console.log('itemId',id)
    try {
        const menuItems=await Menu.findById(id)
        console.log('founded menu items',menuItems)
        if(!menuItems){
            return res.status(404).json({ message: "Item not found" });
        }
        res.status(200).json(menuItems)
    } catch (error) {
        console.log('error in the selected menu item controlller',error)   
    }
}

module.exports={
    menuListing,
    addMenuItems,
    selectedMenuItems
}