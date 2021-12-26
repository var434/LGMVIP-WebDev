// MAIN BACKEND FILE
require('dotenv').config();
const RegistrationsModel = require("./database/Registrations");
const AddMarksModel = require("./database/AddMarks");
const ContactModel = require("./database/Contact");

const bcrypt = require('bcrypt');
const express = require("express");
const jwt = require('jsonwebtoken');

var cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

var mongoose = require('mongoose');
var mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>console.log("CONNECTION ESTABLISHED"));


//http://localhost:4000
app.get("/", (req, res) =>{
    return res.json({"WELCOME": `to my Backend software for the Student-Result-Management`});
});


//--------------------------Contact-----------------

//http://localhost:4000/contacts
app.post("/contacts", async (req, res) => {
  try {
    //create new user
    const newUser = new ContactModel({
      Name: req.body.Name,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message
    });
 
    //save message and respond
    const user = await newUser.save();
    console.log(user);
    res.status(200).json(user._id);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


//------------------------Register------------------

//http://localhost:4000/register
app.post("/register", async (req, res) => {
    try {
      //generate new password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
  
      //create new user
      const newUser = new RegistrationsModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        password: hashedPassword,
        address: req.body.address,
        Roll: req.body.Roll,
        semester: req.body.semester
      });
   
      //save user and respond
      const user = await newUser.save();
      console.log(user);
      res.status(200).json(user._id);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

//-----------------------All Registrations-----------------

//http://localhost:4000/registrations          
app.get('/registrations', (req, res) => {
  RegistrationsModel.find()
      .then(users => {
          res.json({ users })
      })
      .catch(err => {
          console.log(err)
      })
});

//-----------------------All Marksheets-----------------

//http://localhost:4000/results         
app.get('/results', (req, res) => {
  AddMarksModel.find()
      .then(users => {
          res.json({ users })
      })
      .catch(err => {
          console.log(err)
      })
});

//---------------------ADD Marksheet---------------

//http://localhost:4000/addmarks              
app.post("/addmarks", async (req, res) => {
  try {
    const newUser = new AddMarksModel({
      Roll: req.body.Roll,
      email:req.body.email,
      subject1: req.body.subject1,
      subject2: req.body.subject2,
      subject3: req.body.subject3,
      subject4: req.body.subject4,
      subject5: req.body.subject5,
      subject6: req.body.subject6,
    });
 
    //save user and respond
    const user = await newUser.save();
    console.log(user);
    res.status(200).json(user._id);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//------------------------Student login-------------------

//http://localhost:4000/st-login
app.post("/st-login", async (req, res) => {   
  try {
    //find user
    const user = await RegistrationsModel.findOne({ email: req.body.email });
    !user && res.status(400).json("Wrong username or password");

    //validate password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (validPassword) {
      // res.json({message:"successfully signed in"})
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)

      res.status(200).json({ token,  _id: user._id, email: user.email  })
  }
  else {
      res.status(422).json({ error: "Invalid Email or password" })
  }

  } catch (err) {
    res.status(500).json(err);
  }
});


//------------------------View profile by email-------------------

//http://localhost:4000/registrations/xyz@gmail.com                         
app.get("/registrations/:email", async (req, res) => {
  const {email} = req.params;
  const getSpecificStudent = await RegistrationsModel.findOne({email: email});
  if(getSpecificStudent === null){
      return res.json({"error": `No Student found for email ${email}`});
  }
  return res.json(getSpecificStudent);
});


//-------------------------View marks by email---------------------

//http://localhost:4000/addmarks/xyz@gmail.com                     
app.get("/addmarks/:email", async (req, res) => {
  const {email} = req.params;
  const getSpecificStudentMarks = await AddMarksModel.findOne({email: email});
  if(getSpecificStudentMarks === null){
      return res.json({"error": `No Student found for email ${email}`});
  }
  return res.json(getSpecificStudentMarks);
});


//-------------------------------Update Profile--------------------

//http://localhost:4000/update-profile/xyz@gmail.com                         
// app.put("/update-profile/:email", async (req, res) => {
//   const {email} = req.params;
//   const UpdateProfile = await RegistrationsModel.findOneAndUpdate({email: email}, req.body,{ new: true });
//   return res.json({ ProfileUpdated: UpdateProfile, message: "Profile was updated!!!" });
// });

app.put('/update-profile/:userId',async (req, res) => { 
   
//   const salt=await bcrypt.genSalt(10)

// const hashedpassword=await bcrypt.hash(req.body.password,salt)
// req.body.password=hashedpassword;

  RegistrationsModel.findByIdAndUpdate({_id: req.params.userId},req.body,{ useFindAndModify: false })
  .then(data => {
      
      if (!data) {
        res.status(404).send({
          message: `Update Unsuccessful`
        });
      } else {
          res.status(200).send({firstName:req.body.firstName,lastName:req.body.lastName,
            email:req.body.email,_id:req.params.userId,phone:req.body.phone,address:req.body.address,
            Roll:req.body.Roll,semester:req.body.semester})
      }   
    })
    .catch(err => {
      res.status(500).send({
        message: "Error in updating" 
      });
    }); 
});

//-------------------------------Update Marksheet--------------------

//http://localhost:4000/update-marksheet/xyz@gmail.com                         
app.put("/update-marksheet/:email", async (req, res) => {
  const {email} = req.params;
  const UpdateMarksheet = await AddMarksModel.findOneAndUpdate({email: email}, req.body,{ new: true });
  return res.json({ MarksheetUpdated: UpdateMarksheet, message: "Marksheet was updated!!!" });
});



app.listen(process.env.PORT || 4000, () => {
    console.log("MY EXPRESS APP IS RUNNING.....");
})