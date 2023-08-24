const mongoose = require("mongoose");

const connectDatabase = () =>{
    mongoose.connect(process.env.DB_URL ,{
        useNewUrlParser :true,
        useUnifiedTopology:true,
    }).then((data) =>{
        console.log(`DATABASE CONNECTION SUCCESSFUL WITH SERVER: ${data.connection.host}`);
    })
}
module.exports = connectDatabase;