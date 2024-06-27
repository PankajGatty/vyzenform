import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function Page1(props) {
    const navigate=useNavigate()
    const [fname,setFname]=useState(localStorage.getItem('fname')?localStorage.getItem('fname'):'')
    const [lname,setLname]=useState(localStorage.getItem('lname')?localStorage.getItem('lname'):'')
    const [mname,setMname]=useState(localStorage.getItem('mname')?localStorage.getItem('mname'):'')
    const [dob,setDob]=useState(localStorage.getItem('dob')?localStorage.getItem('dob'):'')
    const [gender,setGender]=useState(localStorage.getItem('gender')?localStorage.getItem('gender'):'')
    const [contact,setContact]=useState(localStorage.getItem('contact')?localStorage.getItem('contact'):'')
    const [altcontact,setAltcontact]=useState(localStorage.getItem('altcontact')?localStorage.getItem('altcontact'):'')
    const [email,setEmail]=useState(localStorage.getItem('email')?localStorage.getItem('email'):'')
    const [age,setAge]=useState(localStorage.getItem('age')?localStorage.getItem('age'):'')
    const [mstatus,setMstatus]=useState(localStorage.getItem('mstatus')?localStorage.getItem('mstatus'):'')
    const [nationality,setNationality]=useState(localStorage.getItem('nationality')?localStorage.getItem('nationality'):'')
    const [bgroup, setBgroup] = useState(localStorage.getItem('bgroup') ? localStorage.getItem('bgroup') : '')
    


    const fnameHandler=(e)=>{
        setFname(e.target.value)
    }
    const lnameHandler=(e)=>{
        setLname(e.target.value)
    }
    const mnameHandler=(e)=>{
        setMname(e.target.value)
    }
    const dobHandler=(e)=>{
        setDob(e.target.value)
    }
    const genderHandler=(e)=>{
        setGender(e.target.value)
    }
    const contactHandler=(e)=>{
        setContact(e.target.value)
    }
    const altcontactHandler=(e)=>{
        setAltcontact(e.target.value)
    }
    const emailHandler=(e)=>{
        setEmail(e.target.value)
    }
    const ageHandler=(e)=>{
        setAge(e.target.value)
    }
    const mstatusHandler=(e)=>{
        setMstatus(e.target.value)
    }
    const nationalityHandler=(e)=>{
        setNationality(e.target.value)
    }
    const bgroupHandler=(e)=>{
        setBgroup(e.target.value)
    }
    const submit = (e) => {
        e.preventDefault()
        localStorage.setItem('fname', fname)
        localStorage.setItem('lname', lname)
        localStorage.setItem('mname', mname)
        localStorage.setItem('dob', dob)
        localStorage.setItem('gender', gender)
        localStorage.setItem('contact', contact)
        localStorage.setItem('altcontact', altcontact)
        localStorage.setItem('email', email)
        localStorage.setItem('age', age)
        localStorage.setItem('mstatus', mstatus)
        localStorage.setItem('nationality', nationality)
        localStorage.setItem('bgroup', bgroup)
        // navigate to page2
        if (localStorage.getItem('bgroup') && localStorage.getItem('fname') && localStorage.getItem('lname') && localStorage.getItem('mname') && localStorage.getItem('dob') && localStorage.getItem('gender') && localStorage.getItem('contact') && localStorage.getItem('altcontact') && localStorage.getItem('email') && localStorage.getItem('age') && localStorage.getItem('mstatus') && localStorage.getItem('nationality') && localStorage.getItem('bgroup')) {
            navigate('/page2')
        } else {
            navigate('/')
        }
    }
    const back=(e)=>{
        e.preventDefault()
        navigate('/')
    }
    const clearhandler=(e)=>{
        e.preventDefault()
        localStorage.clear();
        navigate('/')
       }
    return (
        <div>
            <form>
                <div className="main2" style={{border:'1px solid red'}}>
                    <div className="name">
                        <h3>First Name <span style={{ color: 'red' }}>*</span></h3>
                        <h6>Description: Enter your first name.</h6>
                        <input type="text" onChange={fnameHandler} value={fname} id required />
                        {(fname!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Enter First Name</span></>)}
                    </div>
                </div>
                <br></br>
                <div className="main2">
                    <div className="name">
                        <h3>Middle Name </h3>
                        <h6>Description: Enter your middle name.</h6>
                        <input type="text" onChange={mnameHandler} value={mname} id required />
                        {(mname!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Enter Middle Name</span></>)}
                    </div>
                </div>
                <br></br>
                <div className="main2">
                    <div className="name">
                        <h4>Last Name <span style={{ color: 'red' }}>*</span></h4>
                        <h6>Description: Enter your last name.</h6>
                        <input type="text" onChange={lnameHandler} value={lname} id required />
                        {(lname!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Enter Last Name</span></>)}
                    </div>
                </div>
                <br></br>
                <div className="main2">
                    <div className="name">
                        <h4> Contact Number <span style={{ color: 'red' }}>*</span></h4>
                        <h6>Description: Enter your primary contact number. Format: +(Country Code) [Number]</h6>
                        <input type="number" onChange={contactHandler} value={contact} id required />
                        {(contact!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Enter Contact</span></>)}
                    </div>
                </div>
                <br></br>
                <div className="main2">
                    <div className="name">
                        <h4>Alternate  Contact Number <span style={{ color: 'red' }}>*</span></h4>
                        <h6>Description: Enter your Alternate  contact number. Format: +(Country Code) [Number]</h6>
                        <input type="number" onChange={altcontactHandler} value={altcontact} id required />
                        {(altcontact!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Enter Alternate  contact number</span></>)}
                    </div>
                </div>
                <br></br>
                <div className="main2">
                    <div className="name">
                        <h4> Email Id <span style={{ color: 'red' }}>*</span></h4>
                        <h6>Description: Enter your email address. Format: example@example.com.</h6>
                        <input type="email" onChange={emailHandler} value={email} id required />
                        {(email!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Enter email address</span></>)}

                    </div>
                </div>
                <br></br>
                <div className="main2">
                    <div className="name">
                        <h4> Date of Birth <span style={{ color: 'red' }}>*</span></h4>
                        <h6>Description: Enter your date of birth.</h6>
                        <input type="date" onChange={dobHandler} value={dob} id required />
                        {(dob!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Enter DOB</span></>)}

                    </div>
                </div>
                <br></br>
                <div className="main2">
                    <div className="name">
                        <h4> Gender <span style={{ color: 'red' }}>*</span></h4>
                        <h6>Description: Select your gender.</h6>
                        <input type="radio" name="gender" value="Male" onChange={genderHandler}   required />&nbsp; Male<br></br>
                        <input type="radio" name="gender" value="Female" onChange={genderHandler}   required />&nbsp; Female<br></br> 
                        <input type="radio" name="gender" value="Prefer not to say" onChange={genderHandler}   required />&nbsp; Prefer not to say<br></br>
                    </div>
                </div>
                <br></br>
                <div className="main2">
                    <div className="name">
                        <h4> Age <span style={{ color: 'red' }}>*</span></h4>
                        <h6>Description: Enter your age.</h6>
                        <input type="text" onChange={ageHandler} value={age} id required />
                        {(age!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Enter Age</span></>)}

                    </div>

                </div>
                <br></br>
                <div className="main2">
                    <div className="name">
                        <h4> Marital Status <span style={{ color: 'red' }}>*</span></h4>
                        <h6>Description: Select your marital status.</h6>
                        <input type="radio" name="status" value="single" onChange={mstatusHandler}   required />&nbsp; Single<br></br>
                        <input type="radio" name="status" value="married" onChange={mstatusHandler}   required />&nbsp; Married<br></br> 
                        <input type="radio" name="status" value="divorced" onChange={mstatusHandler}   required />&nbsp; Divorced<br></br>
                        <input type="radio" name="status" value="widowed" onChange={mstatusHandler}   required />&nbsp; widowed<br></br>
                           
                    </div>
                </div>
                <br></br>
                <div className="main2">
                    <div className="name">
                        <h4> Nationality <span style={{ color: 'red' }}>*</span></h4>
                        <h6>Description: Enter your nationality.</h6>
                        <input type="text" onChange={nationalityHandler} value={nationality} id required />
                        {(nationality!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Enter your nationality</span></>)}

                    </div>
                    </div>
                    <br></br>
                    <div className="main2">
                    <div className="name">
                        <h4> Blood Group <span style={{ color: 'red' }}>*</span></h4>
                        <h6>Description: Select your blood group.</h6>
                        
                        <input type="radio" name="option" value="option" onChange={bgroupHandler}   required />&nbsp; Option 1<br></br>
                        
                    </div>
                </div>
                <br></br>
                <div className="submit1">
                    <button onClick={submit}>Next</button>                    
            </div>
            <div className='submit2'>
                    <button onClick={clearhandler}>Clear Form</button>
            </div>
            </form>
        </div>
    )

}
