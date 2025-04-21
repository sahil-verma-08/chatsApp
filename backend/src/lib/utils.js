  import jwt from "jsonwebtoken";

  export const generateToken =(userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn : "7d"
    });
    res.cookie("jwt",token,{
        maxAge:7*24*60*60*1000, //MS
        httpOnly:true,                                                             //browser ka JavaScript cookie ko read nahi kar sakta (security ke liye).
        sameSite: "strict",                                                       // cross-site request forgery se bachata hai
        secure : process.env.NODE_ENV !=="development",                           //true= sirf HTTPS me cookie jayegi (production me hi)(devlopermode ans production mode).
    });

    return token

  }
  export default generateToken;