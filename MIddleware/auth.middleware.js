import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../Models/userSchema.js';

dotenv.config()
const authMiddleware = async(req, res, next) => {
    const token = req.header('Authorization') //1st method
    if(!token) {
        return res.status(401).json({message:"token is missing"})
    }

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        console.log(decoded);
        req.user = decoded;
        console.log(req.user);
        const user = await User.findById(req.user._id);

        if(user.role != 'admin'){
            return res.status(401).json({message:"Access Denied"})
        }

        next()

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Invalid token , internal server error"})
    }
}

export default authMiddleware