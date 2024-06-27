import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom'

export function Page11(props) {
   const naviate=useNavigate()
   const [backgroundcheck,setbackgroundcheck]=React.useState(localStorage.getItem('backgroundcheck')?localStorage.getItem('backgroundcheck'):'');
   const [drugtest,setdrugtest]=React.useState(localStorage.getItem('drugtest')?localStorage.getItem('drugtest'):'');
   const [criminalrecord,setcriminalrecord]=React.useState(localStorage.getItem('criminalrecord')?localStorage.getItem('criminalrecord'):'');
   const [criminalrecorddetails,setcriminalrecorddetails]=React.useState(localStorage.getItem('criminalrecorddetails')?localStorage.getItem('criminalrecorddetails'):'');
   const [confirmdis,setconfirmdis]=React.useState(localStorage.getItem('confirmdis')?localStorage.getItem('confirmdis'):'');

   const backgroundcheckHandler=(e)=>{
    setbackgroundcheck(e.target.value)
   }
   const drugtestHandler=(e)=>{
    setdrugtest(e.target.value)
   }
   const criminalrecordHandler=(e)=>{
    setcriminalrecord(e.target.value)
   }
   const criminalrecorddetailsHandler=(e)=>{
    setcriminalrecorddetails(e.target.value)
   }
   const confirmdisHandler=(e)=>{
    setconfirmdis(e.target.value)
   }
   const handlesubmit=(e)=>{
    e.preventDefault()
    localStorage.setItem('backgroundcheck',backgroundcheck)
    localStorage.setItem('drugtest', drugtest)
    localStorage.setItem('criminalrecord', criminalrecord)
    localStorage.setItem('criminalrecorddetails', criminalrecorddetails)
    localStorage.setItem('confirmdis', confirmdis)
       
    if (localStorage.getItem('backgroundcheck') && localStorage.getItem('drugtest') && localStorage.getItem('criminalrecord') && localStorage.getItem('criminalrecorddetails') && localStorage.getItem('confirmdis')) {
        const URI='http://localhost:5001/api/add'
        const data={
            "name":localStorage.getItem('fname'),
            "lname":localStorage.getItem('lname'),
            "mname":localStorage.getItem('mname'),
            "dob":localStorage.getItem('dob'),
            "gender":localStorage.getItem('gender'),
            "contact":localStorage.getItem('contact'),
            "altcontact":localStorage.getItem('altcontact'),
            "email":localStorage.getItem('email'),
            "age":localStorage.getItem('age'),
            "mstatus":localStorage.getItem('mstatus'),
            "nationality":localStorage.getItem('nationality'),
            "bgroup":localStorage.getItem('bgroup'),
            "resaddr":localStorage.getItem('resaddr'),
            "peraddr":localStorage.getItem('peraddr'),
            "currloc":localStorage.getItem('currloc'),
            "prefloc":localStorage.getItem('prefloc'),
            "passport":localStorage.getItem('passport'),
            "passno":localStorage.getItem('passno'),
            "aadhar":localStorage.getItem('aadhar'),
            "pan":localStorage.getItem('pan'),
            "driving":localStorage.getItem('driving'),
            "voter":localStorage.getItem('voter'),
            "work":localStorage.getItem('work'),
            "link":localStorage.getItem('link'),
            "portfolio":localStorage.getItem('portfolio'),
            "skills":localStorage.getItem('skills'),
            "languages":localStorage.getItem('languages'),
            "course":localStorage.getItem('course'),
            "specialization":localStorage.getItem('specialization'),
            "institution":localStorage.getItem('institution'),
            "completion":localStorage.getItem('completion'),
            "percentage":localStorage.getItem('percentage'),
            "certificate":localStorage.getItem('certificate'),
            "anycert":localStorage.getItem('anycert'),
            "certname":localStorage.getItem('certname'),
            "auth":localStorage.getItem('auth'),
            "compdate":localStorage.getItem('compdate'),
            "cerdate":localStorage.getItem('cerdate'),
            "fresher":localStorage.getItem('fresher'),
            "totalexp":localStorage.getItem('totalexp'),
            "organization":localStorage.getItem('organization'),
            "designation":localStorage.getItem('designation'),
            "startdate":localStorage.getItem('startdate'),
            "enddate":localStorage.getItem('enddate'),
            "roles":localStorage.getItem('roles'),
            "leaving":localStorage.getItem('leaving'),
            "ctc":localStorage.getItem('ctc'),
            "notice":localStorage.getItem('notice'),
            "expctc":localStorage.getItem('expctc'),
            "lastworkingdate":localStorage.getItem('lastworkingdate'),
            "offer":localStorage.getItem('offer'),
            "offername":localStorage.getItem('offername'),
            "accept":localStorage.getItem('accept'),
            "acceptdate":localStorage.getItem('acceptdate'),
            "proposedctc":localStorage.getItem('proposedctc'),
            "person":localStorage.getItem('person'),
            "refdesignation":localStorage.getItem('refdesignation'),
            "refcontactno":localStorage.getItem('refcontactno'),
            "refemail":localStorage.getItem('refemail'),
            "refrelationship":localStorage.getItem('refrelationship'),
            "refcheck":localStorage.getItem('refcheck'),
            "empverif":localStorage.getItem('empverif'),
            "prevemp":localStorage.getItem('prevemp'),
            "backgroundcheck":localStorage.getItem('backgroundcheck'),
            "drugtest":localStorage.getItem('drugtest'),
            "criminalrecord":localStorage.getItem('criminalrecord'),
            "criminalrecorddetails":localStorage.getItem('criminalrecorddetails'),
            "confirmdis": localStorage.getItem('confirmdis'),
            "passcopy":localStorage.getItem('passcopy'),
            "aadharcopy":localStorage.getItem('aadharcopy'),
            "pancopy":localStorage.getItem('pancopy'),
            "drivingcopy":localStorage.getItem('drivingcopy'),
            "votercopy": localStorage.getItem('votercopy'),
            "photo":localStorage.getItem('photo'),
            "resume": localStorage.getItem('resume'),
            "proof":localStorage.getItem('proof'),
            "cerproff": localStorage.getItem('cerproff'),
            "salslip":localStorage.getItem('salslip'),
            "bank":localStorage.getItem('bank'),
            "increment":localStorage.getItem('increment'),
            "resign": localStorage.getItem('resign'),
            "offerletter": localStorage.getItem('offerletter'),
            
        }
        axios.post(URI, data).then((response) => {
            console.log(response.data);
            naviate('/')
          }); 
       }
    else {
        naviate('/page11')
       } 
   } 
   const back=(e)=>{
    e.preventDefault()
   }
   const clearhandler=(e)=>{
    e.preventDefault()
    localStorage.clear();
    naviate('/')
   }
    return (
        <>
            <form>
            <div className="main2">
                <div className="name">
                    <h4>Consent to conduct background checks  <span style={{ color: 'red' }}>*</span></h4>
                    <input type="radio" value="yes" onChange={backgroundcheckHandler}  name="checks" id required />&nbsp; YES<br></br>
                    <input type="radio" value="no" onChange={backgroundcheckHandler} name="checks" id required />&nbsp; NO<br></br>
                    <input type="radio" value="may be" onChange={backgroundcheckHandler} name="checks" id required />&nbsp; MAYBE<br></br> 
                    {(backgroundcheck!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Please Enter Details </span></>)}
                    </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h4>Consent to Drug/Alcohol Testing Consent<span style={{ color: 'red' }}>*</span></h4>
                    <input type="radio" value="yes" onChange={drugtestHandler} name="test" id required />&nbsp; YES<br></br>
                    <input type="radio" value="no" onChange={drugtestHandler} name="test" id required />&nbsp; NO<br></br>
                    <input type="radio" value="may be" onChange={drugtestHandler} name="test" id required />&nbsp; MAYBE<br></br> 
                    {(drugtest!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Please Enter Details </span></>)}
                    </div>
            </div>
            <br></br>
           <div className="main3">
                <div className="name">
                    <h4>Disclosure of any Criminal Convictions or Pending Criminal Cases
                        Description: Select 'Yes' if you have any criminal convictions or pending criminal cases, otherwise select 'No'.<span style={{ color: 'red' }}>*</span></h4>
                    <input type="radio" value="yes" onChange={criminalrecordHandler} name="crime" id required />&nbsp; YES<br></br>
                    <input type="radio" value="no" onChange={criminalrecordHandler} name="crime" id required />&nbsp; NO<br></br> 
                    {(criminalrecord!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Please Enter Details </span></>)}
                    </div>
            </div>
            <br></br>
            <div className="main3">
                <div className="name">
                    <h4>Details of any Criminal Convictions or Pending Criminal Cases
                        Description: If you selected 'Yes' above, please provide details of your criminal convictions or pending criminal cases, including charges, dates, and outcomes.<span style={{ color: 'red' }}>*</span></h4>
                        <input type="text" value={criminalrecorddetails} onChange={criminalrecorddetailsHandler}  id required />
                        {(criminalrecord!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Please Enter Details </span></>)}

                    </div>
            </div>
            <br></br>
            <div className="main3">
                <div className="name">
                    <h4>By submitting this form, I acknowledge that all the information provided is true and accurate to the best of my knowledge.<span style={{ color: 'red' }}>*</span></h4>
                    <input type="radio" value="yes" onChange={confirmdisHandler}  name="submit" id required />&nbsp; YES<br></br>
                    <input type="radio" value="no" onChange={confirmdisHandler}  name="submit" id required />&nbsp; NO<br></br> 
                    {(confirmdis!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Please Enter Details </span></>)}

                    </div>
            </div>
                <br></br>
            <div className="submit1">
                    <button onClick={back}>Back</button>
                    <button onClick={handlesubmit}>submit</button>                    
            </div>
            <div className='submit2'>
                    <button onClick={clearhandler}>Clear Form</button>
            </div>

            </form>
            
        </>
    )
}
