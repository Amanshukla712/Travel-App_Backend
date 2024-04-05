const express = require('express');
const mongoose = require('mongoose')
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config()


const hotelDataAddedToDBRouter = require("./routes/dataimport.router")
const categoriesAddedToDBRouter = require("./routes/categoryimport.router")
const hotelRouter = require('./routes/hotel.router')
const categoryRouter = require('./routes/category.router')
const singleHotelRouter = require('./routes/singlehotel.router')
const authRouter = require("./routes/auth.router")
const wishlistRouter = require("./routes/wishlist.router")

const connectDB = require('./config/dbconfig')

const app = express();
app.use(cors());

app.use(express.json())
connectDB()

const PORT = 3900;

app.get("/", (req,res) => {
    res.send("Ahoi!! mates")
})

app.use("/api/hoteldata", hotelDataAddedToDBRouter);
app.use("/api/categorydata", categoriesAddedToDBRouter)
app.use("/api/hotels", hotelRouter)
app.use("/api/category", categoryRouter)
app.use("/api/hotels", singleHotelRouter)
app.use("/api/auth", authRouter)
app.use("/api/wishlist", wishlistRouter)

mongoose.connection.once("open",()=> {
    console.log("Connection to DB successful");
    app.listen(process.env.PORT || PORT, () => {
        console.log("Its all good and running")
    })
    
})




