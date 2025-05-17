// import User from '../models/userModel.js';

// export const registerUser = async (req, res) => {
//   const { name, email, password } = req.body;

//   const userExists = await User.findOne({ email });
//   if (userExists) {
//     res.status(400).json({ message: 'User already exists' });
//     return;
//   }

//   const user = await User.create({ name, email, password });
//   res.status(201).json(user);
// };

