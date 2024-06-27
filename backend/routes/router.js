const express=require('express');
const { default:mongoose }= require('mongoose');
const router=express.Router();
const uri = "mongodb+srv://pankajgatty:ORaRfnjpNY6DNhPr@cluster0.vfsgdo2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationError: true } };
//use database test 1

mongoose.connect (uri,clientOptions).then(()=>{
    console.log('Connect to mongoDB');
}).catch(err => console.log(err));

const userSchema =new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    file:String,
     fname:String,
     lname:String,
     mname:String,
     dob:String,
     gender:String,
     contact:String,
     altcontact:String,
     email:String,
     age:String,
     mstatus:String,
     nationality:String,
     bgroup:String,
     resaddr:String,
     peraddr:String,
     currloc:String,
     prefloc:String,
     passport:String,
     passno:String,
     aadhar:String,
     pan:String,
     driving:String,
     voter:String,
     work:String,
     link:String,
     portfolio:String,
     skills:String,
     languages:String,
     course:String,
     specialization:String,
     institution:String,
     completion:String,
     percentage:String,
     certificate:String,
     anycert:String,
     certname:String,
     auth:String,
     compdate:String,
     cerdate:String,
     fresher:String,
     totalexp:String,
     organization:String,
     designation:String,
     startdate:String,
     enddate:String,
     roles:String,
     leaving:String,
     ctc:String,
     notice:String,
     expctc:String,
     notice:String,
     lastworkingdate:String,
     offer:String,
     offername:String,
     accept:String,
     acceptdate:String,
     proposedctc:String,
     person:String,
     refdesignation:String,
     refcontactno:String,
     refemail:String,
     refrelationship:String,
     refcheck:String,
     empverif:String,
     prevemp:String,
     backgroundcheck:String,
     drugtest:String,
     criminalrecord:String,
     criminalrecorddetails:String,
     confirmdis: String,
     passcopy:String,
     aadharcopy:String,
     pancopy:String,
     drivingcopy:String,
     votercopy:String,
     photo:String,
     resume:String,
     proof:String,
     cerproff:String,
     salslip:String,
     bank:String,
     increment:String,
     resign:String,
     offerletter:String
});

const User =mongoose.model('User',userSchema);

router.post('/add',(req,res) =>{
    console.log("first")
    const{ name, email,lname,mname,dob,gender,contact,altcontact, age,mstatus,nationality,bgroup,resaddr,peraddr,currloc,prefloc,passport,passno,aadhar,pan,
        driving,voter,work,link,portfolio,skills,languages,course,specialization,institution,completion,percentage,certificate,anycert,certname,auth,compdate,
        cerdate,fresher,totalexp,organization,designation,startdate,enddate,roles,leaving,ctc,notice,lastworkingdate,offer,offername,accept,acceptdate,proposedctc,
        person, refdesignation, refcontactno, refemail, refrelationship, refcheck, empverif, prevemp, backgroundcheck, drugtest, criminalrecord, criminalrecorddetails, confirmdis,
        passcopy,aadharcopy,pancopy,drivingcopy,votercopy,photo,resume,proof,cerproff,salslip,bank,increment,resign,offerletter}=req.body;

    const newUser= new User({
        name,
        email,lname,mname,dob,gender,contact,altcontact, age,mstatus,nationality,bgroup,resaddr,peraddr,currloc,prefloc,passport,passno,aadhar,pan,
        driving,voter,work,link,portfolio,skills,languages,course,specialization,institution,completion,percentage,certificate,anycert,certname,auth,compdate,
        cerdate,fresher,totalexp,organization,designation,startdate,enddate,roles,leaving,ctc,notice,lastworkingdate,offer,offername,accept,acceptdate,proposedctc,
        person, refdesignation, refcontactno, refemail, refrelationship, refcheck, empverif, prevemp, backgroundcheck, drugtest, criminalrecord, criminalrecorddetails, confirmdis,
        passcopy,aadharcopy,pancopy,drivingcopy,votercopy,photo,resume,proof,cerproff,salslip,bank,increment,resign,offerletter
    });
    newUser.save().then(()=>{
    res.send('User Registered');
    }).catch(err=>{
        res.status(500).send('Server Error');
    });
})

module.exports = router;