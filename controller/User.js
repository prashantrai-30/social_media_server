const User = require('../models/User');
const { upload } = require('../config/cloudinary');

exports.addUser = async (req,res) => {
    try {
        const { name, socialMediaHandle } = req.body;
        const images = req.files.map(file => file.path);
        
        const user = new User({ name, socialMediaHandle, images });
        await user.save();
        
        res.status(201).json(user);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
}

exports.getUserData = async (req,res) => {
    try {
        const users = await User.find();
        res.json(users);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}