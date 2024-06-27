import React from 'react'
import { useNavigate } from 'react-router-dom'

export function Page5(props) {
    const navigate=useNavigate()
    const [course, setCourse] = React.useState(localStorage.getItem('course')?localStorage.getItem('course'):'');
    const [specialization, setSpecialization] = React.useState(localStorage.getItem('specialization')?localStorage.getItem('specialization'):'');
    const [institution, setInstitution] = React.useState(localStorage.getItem('institution')?localStorage.getItem('institution'):'');
    const [completion, setCompletion] = React.useState(localStorage.getItem('completion')?localStorage.getItem('completion'):'');
    const [percentage, setPercentage] = React.useState(localStorage.getItem('percentage')?localStorage.getItem('percentage'):'');
    const [proof, setProof] = React.useState(localStorage.getItem('proof')?localStorage.getItem('proof'):'');
    const [certificate, setCertificate] = React.useState(localStorage.getItem('certificate')?localStorage.getItem('certificate'):'');
    const [anycert, setAnycert] = React.useState(localStorage.getItem('anycert')?localStorage.getItem('anycert'):'');
    const [auth, setAuth] = React.useState(localStorage.getItem('auth')?localStorage.getItem('auth'):'');
    const [compdate, setCompdate] = React.useState(localStorage.getItem('compdate')?localStorage.getItem('compdate'):'');
    const [cerproff, setCerproff] = React.useState(localStorage.getItem('cerproff')?localStorage.getItem('cerproff'):'');
    const [cerdate, setCerdate] = React.useState(localStorage.getItem('cerdate')?localStorage.getItem('cerdate'):'');
    const [fresher, setFresher] = React.useState(localStorage.getItem('fresher')?localStorage.getItem('fresher'):'');

    const courseHandle=(event)=>{
        setCourse(event.target.value);
    }
    const specializationHandle=(event)=>{
        setSpecialization(event.target.value);
    }
    const institutionHandle=(event)=>{
        setInstitution(event.target.value);
    }
    const completionHandle=(event)=>{
        setCompletion(event.target.value);
    }
    const percentageHandle=(event)=>{
        setPercentage(event.target.value);
    }
    const proofHandle=(event)=>{
        setProof(event.target.files[0].name);
        console.log(event.target.files[0]);
    }
    const certificateHandle=(event)=>{
        setCertificate(event.target.value);
    }
    const anycertHandle=(event)=>{
        setAnycert(event.target.value);
    }
    const authHandle=(event)=>{
        setAuth(event.target.value);
    }
    const compdateHandle=(event)=>{
        setCompdate(event.target.value);
    }
    const cerproffHandle=(event)=>{
        setCerproff(event.target.files[0].name);
    }
    const cerdateHandle=(event)=>{
        setCerdate(event.target.value);
    }
    const fresherHandle=(event)=>{
        setFresher(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // Here, you can add your logic to submit the form data to a server
        localStorage.setItem('course', course)
        localStorage.setItem('specialization', specialization)
        localStorage.setItem('institution', institution)
        localStorage.setItem('completion', completion)
        localStorage.setItem('percentage', percentage)
        localStorage.setItem('proof', proof)
        localStorage.setItem('certificate', certificate)
        localStorage.setItem('anycert', anycert)
        localStorage.setItem('auth', auth)
        localStorage.setItem('compdate', compdate)
        localStorage.setItem('cerproff', cerproff)
        localStorage.setItem('cerdate', cerdate)
        localStorage.setItem('fresher', fresher)
        
        if (localStorage.getItem('course') && localStorage.getItem('specialization') ) {
            if(fresher==="yes"){
                navigate('/page11')
            }
            else{
            navigate('/page6')
            }
        } else {
            navigate('/page5')
        }

    }
    const back=(e)=>{
        e.preventDefault()
        navigate('/page4')
    }
    const clearhandler=(e)=>{
        e.preventDefault()
        localStorage.clear();
        navigate('/')
       }

    return (
        <>
            <form>
            <div className="main0">
                <div className="name">
                    <h4>Please share details of your highly qualification only </h4>
                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h3>Education: Course <span style={{ color: 'red' }}>*</span></h3>
                    <h6>Description: Enter the course you have completed.</h6>
                    <input type="text" value={course} onChange={courseHandle} id required />
                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h3>Education: Specialization <span style={{ color: 'red' }}>*</span></h3>
                    <h6>Description: Enter your area of specialization.</h6>
                    <input type="text" value={specialization} onChange={specializationHandle} id required />
                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h3>Education: Institution  <span style={{ color: 'red' }}>*</span></h3>
                    <h6>Description: Enter the name of the institution where you completed your course.</h6>
                    <input type="text" value={institution} onChange={institutionHandle} id required />
                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h3>Education: Year of Completion  <span style={{ color: 'red' }}>*</span></h3>
                    <h6>Description: Enter the date you completed your course.</h6>
                    <input type="date" value={completion} onChange={completionHandle} id required />
                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h3>Education: Pass Percentage  <span style={{ color: 'red' }}>*</span></h3>
                    <h6>Description: Enter the percentage you achieved in your course. Format: 85.6%.</h6>
                    <input type="text" value={percentage} onChange={percentageHandle}  id required />
                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h5>Upload Proof of Education Completion <span style={{ color: 'red' }}>*</span></h5>
                    <h6>Description: Upload the proof of your education completion. </h6>
                    <h6>Please upload your Consolidated MarkSheet or Semester Marksheet, Provisional Degree</h6>
                    <h6>Certificate, Degree Completion Cetificate.</h6>
                    <input type="file" onChange={proofHandle}  id required />
                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h3>Any Certifications  <span style={{ color: 'red' }}>*</span></h3>
                    <h6>Description: Select 'Yes' if you have any certifications, otherwise select 'No'</h6>
                    <input type="radio" value="yes" onChange={anycertHandle} name="cert" id required />&nbsp; Yes<br></br>
                    <input type="radio" value="no" onChange={anycertHandle} name="cert" id required />&nbsp; No<br></br>
                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h3>Certifications Obtained  <span style={{ color: 'red' }}>*</span></h3>
                    <h6>Description: List the certifications you have obtained.</h6>
                    <input type="text" value={certificate} onChange={certificateHandle} id required />
                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h3>Name of Certification Issuing Authority  <span style={{ color: 'red' }}>*</span></h3>
                    <h6>Description: Enter the name of the authority that issued the certification</h6>
                    <input type="text" value={auth} onChange={authHandle} id required />
                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h3>Certification Completion Date  <span style={{ color: 'red' }}>*</span></h3>
                    <h6>Description: Select the date when the certification was issued.</h6>
                    <input type="date" value={compdate} onChange={compdateHandle} id required />
                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h3>Upload Proof of Certification <span style={{ color: 'red' }}>*</span></h3>
                    <h6>Description: Upload the proof of your certification.</h6>
                    <input type="file"  onChange={cerproffHandle}  id required />
                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h3>Please Enter a Tentative  Date you are expected to join us incase you are shorlisted/selected <span style={{ color: 'red' }}>*</span></h3>
                    <input type="date" value={cerdate} onChange={cerdateHandle} id required />
                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h3>Are you a Fresher? <span style={{ color: 'red' }}>*</span></h3>
                    <input type="radio" onChange={fresherHandle} name="fresher" value="yes" id required />&nbsp; Yes<br></br>
                    <input type="radio" onChange={fresherHandle} name="fresher" value="no" id required />&nbsp; No<br></br>
                </div>
            </div>
            <br></br>
            <div className="submit1">
                    <button onClick={back}>Back</button>
                    <button onClick={handleSubmit}>Next</button>
        </div>
            <div className='submit2'>
                    <button onClick={clearhandler}>Clear Form</button>
            </div>
            </form>
            
        </>
    )
}

