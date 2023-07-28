import category from "../models/category.js";
import product from "../models/product.js";


export const add = async (req, res) => {
    try {
        const { categoryname } = req.body;

        const check = await category.findOne({}, {}, { sort: { categoryid: -1 } }).exec();
        let new_categoryid = 1;
        if (check) {
            new_categoryid = parseInt(check.categoryid) + 1;
        }
        console.log(new_categoryid);
        const newcategory = new category({
            categoryname, 
            categoryid: new_categoryid
        })
        await newcategory.save()
        return res.status(200).json({ status: 200, message: "success" })
    } catch (error) {
        return res.send(error)
    }
}

export const addproduct = async (req, res) => {
    try {
        const { pname, pprice, categoryname } = req.body;
        // const pcheck = await product.findOne({}, {}, {sort:{productid:-1}}).exec()
        // let new_productid = 1;
        // if(pcheck){
        //     new_productid = parseInt(pcheck.productid) +1;
        // }

        const findcategory = await category.findOne({ categoryname }).exec()
        console.log(findcategory);
        if (!findcategory) return res.send("category not found");

        const newProduct = new product({
            pname,
            pprice,
            refcategory: findcategory._id
        })
        await newProduct.save();
        return res.status(200).json({ status: 200, message: "success" })
    } catch (error) {
        return res.send(error);
    }
}