// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Product from "@/models/Product"
import connectDb from "@/middleware/mongoose"

const handler =  async(req,res)=>{
    if(req.method == 'POST'){
      try{
        for(let i=0;i<req.body.length;i++){

            let p = new Product({
                title: req.body[i].title,
                slug: req.body[i].slug, 
                desc: req.body[i].desc, 
                img: req.body[i].img, 
                category: req.body[i].category,
                size: req.body[i].size, 
                color: req.body[i].color, 
                price: req.body[i].price, 
                availableQty: req.body[i].availableQty, 
            })
            await p.save();
        }
        res.status(200).json({success:"success"});
      }catch(e){
        console.log(e);
      }
    }
    else{
        res.status(400).json({error:"This method is not allowed"});
    }

}

export default connectDb(handler);
  
// import Product from "@/models/Product";
// import connectDb from "@/middleware/mongoose";

// const handler = async (req, res) => {
//   await connectDb(); // Ensure that the MongoDB connection is established

//   if (req.method === "POST") {
//     try {
//       const products = req.body;

//       // Validate the incoming request data
//       if (!Array.isArray(products)) {
//         return res.status(400).json({ error: "Invalid product data format" });
//       }

//       const validatedProducts = [];
//       for (let i = 0; i < products.length; i++) {
//         const productData = products[i];

//         // Perform validation on the product properties
//         if (!productData.title || !productData.price) {
//           return res.status(400).json({ error: "Missing required product properties" });
//         }

//         // Additional validation logic...

//         validatedProducts.push(productData);
//       }

//       // Save each validated product to the database
//       for (let i = 0; i < validatedProducts.length; i++) {
//         const productData = validatedProducts[i];
//         const product = new Product(productData);
//         await product.save();
//       }

//       res.status(200).json({ success: "Products saved successfully" });
//     } catch (error) {
//       console.error("Error saving products:", error);
//       res.status(500).json({ error: "An error occurred while saving products", details: error.message });
//     }
//   } else {
//     res.status(400).json({ error: "This method is not allowed" });
//   }
// };

// export default handler;

