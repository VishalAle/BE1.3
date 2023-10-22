//FILENAME : db.js
const mongoose = require("mongoose");
//Replace this with MONGURI
const MONGURI = "mongodb://127/0.0.1:27017/author4";

const InitiateMongoServer = async()=>{
    try{
        await mongoose.connect(MONGURI,{
            useNewUrlParser : true
        });
        console.log("Connected to DB !!");
    }catch(e){
        console.log(e);
        throw e;
    }
};
module.exports = InitiateMongoServer;