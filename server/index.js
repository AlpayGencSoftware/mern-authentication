const express= require("express");
const cors= require("cors");
const { default: mongoose } = require("mongoose");
 const { MongoClient, ServerApiVersion } = require('mongodb');
const authRoutes = require("./Routes/AuthRoutes");
const cookieParser= require("cookie-parser");


const app= express();

app.listen(4000, ()=>{
    console.log("Server Started on PORT 4000");
});

/* const  mongoAtlasUri =
        "mongodb+srv://alpaygenc:K7qn3fAUqGe0aV2c@cluster0.6aqtja7.mongodb.net/?retryWrites=true&w=majority";
try {
    // Connect to the MongoDB cluster
     mongoose.connect(
      mongoAtlasUri,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected")
    );

  } catch (e) {
    console.log("could not connect");
  }
  */
  mongoose.connect("mongodb://localhost:27017/jwt",{
    useNewUrlparser:true, useUnifiedTopology:true
}).then(
    ()=>{
        console.log("DB Connection Successfull")
    }
).catch(
    (err)=>{
        console.log(err.message);
    }
);  

app.use(cors({
    origin:["http://localhost:3000"],
    method:["GET", "POST"],
    credentials:true,
}));
app.use(cookieParser());
app.use(express.json());
app.use("/", authRoutes);

