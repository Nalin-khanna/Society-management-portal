import  mongoose  from "mongoose";

const connectToDatabase = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to database: ${connection.connection.host}");
    } catch (error) {
        console.error(`Error connecting to database: ${error.message}`);
        process.exit(1);
    }
}
export default connectToDatabase;  
