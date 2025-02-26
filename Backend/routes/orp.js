// router.post('/signup', async (req, res) => {
//     try {
//         let user = new UserModel({
//            username:req.body.username,
//            email:req.body.email,
//            password:req.body.password,
//            // degree:req.body.degree

//        });

//        let savedUser = await user.save();
//        res.status(200).json({ message: "User registered successfully", user: savedUser });
//    } catch (err) {
//        res.status(400).json({ message: err.message });
//    }
// });
// router.get('/signupdata', async (req, res) => {
//    UserModel.find()
//    .then(response=>res.send(response))
//    .catch(err=>res.send(err))
// });

// module.exports = router;
