var express = require('express');
var router = express.Router();
var UserModel = require('../Models/UserModel'); 
var orpModel=require('../Models/orphange')
var ReportModel=require('../Models/ReportModels') // Corrected path

/* GET users listing. */
// router.get('/', function(req, res) {
//     res.send('respond with a resource');
// });

// // Signup Route
router.post('/signup', async (req, res) => {
     try {
         let user = new UserModel({
            username:req.body.username,
            email:req.body.email,
            password:req.body.password,
            // degree:req.body.degree

        });

        let savedUser = await user.save();
        res.status(200).json({ message: "User registered successfully", user: savedUser });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
router.get('/signupdata', async (req, res) => {
    UserModel.find()
    .then(response=>res.send(response))
    .catch(err=>res.send(err))
});


router.post('/orp', async (req, res) => {
    try {
        let orp = new orpModel({
            name:req.body.name,
            address:req.body.address,
            categories:req.body.categories,
            image:req.body.image

                  });
       let savedorp= await orp.save();
       res.status(200).json({ message: "User registered successfully", orp: savedorp });
   } catch (err) {
       res.status(400).json({ message: err.message });
   }
});
router.get('/orpdata', async (req,res) => {
    orpModel.find()
    .then(response=>res.send(response))
    .catch(err=>res.send(err))
});
router.put('/orpupdata/:name', async (req, res) => {
    nameparams=req.params,{name:req.body.name}
    .then(response=>res.send(response))
    .catch(err=>res.send(err))
});
router.post('/report', async (req, res) => {
    try {
        let rep = new ReportModel({
        image:req.body.image,
        location:req.body.location,
        category:req.body.category,
        description:req.body.description
                  });
       let savedrep= await rep.save();
       res.status(200).json({ message: "User registered successfully", rep: savedrep});
   } catch (err) {
       res.status(400).json({ message: err.message });
   }
});
router.get('/reportdata', async (req,res) => {
    ReportModel.find()
    .then(response=>res.send(response))
    .catch(err=>res.send(err))
});
//router.get('/signupdata', async (req, res) => {
//    UserModel.find()
//    .then(response=>res.send(response))
//    .catch(err=>res.send(err))
// });

module.exports = router;
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const multer = require("multer");
// const path = require("path");

// const app = express.Router();
// const upload = multer({ storage: storage });


// app.post("/reports", upload.single("image"), async (req, res) => {
//     try {
//       const { location, category, description } = req.body;
//       const imagePath = req.file ? req.file.path : "No image uploaded";
//       const newReport = new Report({
//         image: imagePath,
//         location,
//         category,
//         description,
//         date: new Date().toLocaleString(),
//       });
//       await newReport.save();
//       res.status(201).json({ message: "Report submitted successfully", report: newReport });
//     } catch (error) {
//       res.status(500).json({ error: "Error submitting report" });
//     }
//   });
  
//   // API Endpoint to Get All Reports
//   app.get("/reports", async (req, res) => {
//     try {
//       const reports = await Report.find();
//       res.json(reports);
//     } catch (error) {
//       res.status(500).json({ error: "Error fetching reports" });
//     }
//   });
  
//   app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
//   });
//   module.exports=router;