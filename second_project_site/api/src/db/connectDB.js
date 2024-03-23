import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            process.env.DATABASE_LINK
        );
        console.log(`\n MongoDB Connected !! DB: ${process.env.DATABASE_LINK[0]}`);
        console.log(` MongoDB connected !! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(`\n MongoDB Connection Failed !!! `, error);
        process.exit(1);
    }
};

export default connectDB;
