const Menu = require("../model/items");



const menuListing = async (req, res) => {
    try {
      console.log("Hitting the menu list controller");
  
      // Fetch all menu items from the database
      const menuLists = await Menu.find();
  
    //   if (!menuLists || menuLists.length === 0) {
    //     console.log("No menus found");
    //     return res.status(404).json({ success: false, message: "No menus found" });
    //   }
  
      console.log("Menu list retrieved successfully:", menuLists);
  
      // Send a success response with the menu list
      res.status(200).json({ success: true, menuLists });
    } catch (error) {
      console.error("Error fetching menu list:", error.message);
  
      // Send an error response
      res.status(500).json({
        success: false,
        message: "An error occurred while fetching the menu list",
        error: error.message,
  });
}
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