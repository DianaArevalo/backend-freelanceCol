const mongoose = require("mongoose");


const conectarDB = async () => {
    try {
        const connection = mongoose.connect(
            "mongodb+srv://FreelanceCol:grupo5@freelancecol.pzdp53s.mongodb.net/?retryWrites=true&w=majority", {
                useNewUrlParser: true,
                useUnifiedTopology: true

            });
            const url = `${connection.connection.host}:${connection.connection.port}`;
            console.log(`MongoDB Conectado en :${url}`);

    } catch (error) {
        console.log(`error:${error.message}`);
        process.exit(1);
    }
}
module.exports = conectarDB;

