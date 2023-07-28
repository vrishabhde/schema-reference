import express from "express"; 
import { add, addproduct } from "../controllers/user_controller.js";

const router = express.Router();


router.post("/add",add);
router.post("/addproduct", addproduct);



export default router;
