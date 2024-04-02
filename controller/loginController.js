const cryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken")

const User = require('../model/user.model')

const loginHandler = async (req,res)=> {
    try{
        const user = await User.findOne({email: req.body.email})
        !user && res.status(401).json({message: "Invalid Email Number"})

        const decodedPassword = cryptoJs.AES.decrypt(user.password, process.env.PASSWORD_SECRET_KEY).toString(cryptoJs.enc.Utf8);
        decodedPassword !== req.body.password && res.status(401).json({message: "Wrong password entered"})

        const {password, ...rest} = user._doc
        const accessToken = jwt.sign({username: user.username}, process.env.ACCESS_TOKEN)

        res.json({...rest, accessToken});
    }catch(err){
        console.log(err)
    }
    
}

module.exports = loginHandler;