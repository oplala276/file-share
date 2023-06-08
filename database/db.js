import mongoose from "mongoose";
const DBConnection = async (username, password) => {
    const MONGODB_URI = `mongodb://${username}:${password}@ac-7rfkjtc-shard-00-00.7emfbys.mongodb.net:27017,ac-7rfkjtc-shard-00-01.7emfbys.mongodb.net:27017,ac-7rfkjtc-shard-00-02.7emfbys.mongodb.net:27017/?ssl=true&replicaSet=atlas-f1lsnm-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
        console.log('Database connected.')
    } catch (error) {
        console.error('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;
