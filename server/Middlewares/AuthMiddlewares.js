const User= require("../Models/UserModel");
const jwt= require("jsonwebtoken");

module.exports.checkUser=(req, res, next)=>{
  const token= req.cookies.jwt;
  if (token) {
    jwt.verify(token, "alpay_genc_super_secret_key", async(err, deccodedToken)=>{
        if (err) {
            res.json({status:false}); 
            next();
        }  else{
            const user=await User.findById(deccodedToken.id);
            if (user) res.json({status:true, user:user.email})
            else res.json({status:false});
            next();
        }
    })
  }else{
    res.json({status:false});
    next();
  }
}