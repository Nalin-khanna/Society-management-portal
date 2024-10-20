import User from "./Models/User.js";
import bcrypt from "bcrypt";
import connectToDatabase from "./db/db.js";
const userRegister = async() => {
    connectToDatabase()
    try{
        const hashPassword = await bcrypt.hash("admin", 10);
        const user = new User({
            name: "edcellmait",
            email: "edcellmait@gmail.com",
            password: hashPassword,
            role: "admin"
        });
        await user.save();
        console.log("User registered successfully");
    }
    catch(err){
        console.log(err);
    }
}
userRegister();

