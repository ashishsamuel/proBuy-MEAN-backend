const wishlists = require('../Models/wishlistModel')

exports.addToWishlistController = async (req,res)=>{
    // get product id
    const {id,title,price,description,category,image,rating} = req.body
    
    // get userid
    const userId = req.payload

    try {
        const existingProduct = await wishlists.findOne({id,userId})
        if(existingProduct){
            res.status(406).json("Product already available in your wishlist !!!")
        }
        else{
            const newProduct = new wishlists({
                id,title,price,description,category,image,rating,userId
            })
            await newProduct.save()
            res.status(200).json(newProduct)
        }
    } catch (err) {
        res.status(401).json(err)
    }
}

// get wishlist products
exports.getWishlistController = async (req,res)=>{
    const userId = req.payload;
    try {
        const allProducts = await wishlists.find({userId})
        res.status(200).json(allProducts)
    } catch (err) {
        res.status(401).json(err)
    }
}

// remove product from wishlist
exports.removeWishlistItemController = async (req,res)=>{
    const {id} = req.params;
    try {
        const removeItem = await wishlists.findByIdAndDelete({_id:id})
        res.status(200).json(removeItem)
    } catch (err) {
        res.status(401).json(err)
    }
}