import mongoose from 'mongoose';

export default {
    /**
     * Connects to mongodb server
     *
     * @returns {void}
     */
    connect: async () => {
        await mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);

        const db = mongoose.connection;

        db.on("error", console.error.bind(console, "connection error: "));

        db.once("open", function () {
            console.log("Connected successfully");
        });
    }
}