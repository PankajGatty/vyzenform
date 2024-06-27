import React from 'react'
import { useNavigate } from 'react-router-dom';

export function Page3(props) {
    const [passport, setPassport] = React.useState(localStorage.getItem('passport')?localStorage.getItem('passport'):'');
    const [passno, setPassno] = React.useState(localStorage.getItem('passno')?localStorage.getItem('passno'):'');
    const [passcopy, setPasscopy] = React.useState(localStorage.getItem('passcopy')?localStorage.getItem('passcopy'):'');
    const [aadhar, setAadhar] = React.useState(localStorage.getItem('aadhar')?localStorage.getItem('aadhar'):'');
    const [aadharcopy, setAadharcopy] = React.useState(localStorage.getItem('aadharcopy')?localStorage.getItem('aadharcopy'):'');
    const [pan, setPan] = React.useState(localStorage.getItem('pan')?localStorage.getItem('pan'):'');
    const [pancopy, setPancopy] = React.useState(localStorage.getItem('pancopy')?localStorage.getItem('pancopy'):'');
    const [driving, setDriving] = React.useState(localStorage.getItem('driving')?localStorage.getItem('driving'):'');
    const [drivingcopy, setDrivingcopy] = React.useState(localStorage.getItem('drivingcopy')?localStorage.getItem('drivingcopy'):'');
    const [voter, setVoter] = React.useState(localStorage.getItem('voter')?localStorage.getItem('voter'):'');
    const [votercopy, setVotercopy] = React.useState(localStorage.getItem('voter')?localStorage.getItem('voter'):'');
    const naviate=useNavigate()
    // upload passport copy
    const handlepassport=(e)=>{
        setPassport(e.target.value);
    }
    const handlepassno=(e)=>{
        setPassno(e.target.value);
    }
    const handlePassportCopy = (event) => {
        setPasscopy(event.target.files[0].name);
        // console.log(event.target.files[0].name);
    }
    const handleaadhar=(e)=>{
        setAadhar(e.target.value);
    }
    const handleAadharCopy = (event) => {
        setAadharcopy(event.target.files[0].name);
        // console.log(event.target.files[0]);
    }
    const handlepan=(e)=>{
        setPan(e.target.value);
    }
    const handlePanCopy = (event) => {
        setPancopy(event.target.files[0].name);
        console.log(event.target.files[0]);
    }
    const handledriving=(e)=>{
        setDriving(e.target.value);
    }
    const handleDrivingCopy = (event) => {
        setDrivingcopy(event.target.files[0].name);
        console.log(event.target.files[0]);
    }
    const handlevoter=(e)=>{
        setVoter(e.target.value);
    }
    const handleVoterCopy = (event) => {
        setVotercopy(event.target.files[0].name);
        console.log(event.target.files[0]);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Data:', {
            passport: passport,
            passno: passno,
            passcopy: passcopy,
            aadhar: aadhar,
            aadharcopy: aadharcopy,
            pan: pan,
            pancopy: pancopy,
            driving: driving,
            drivingcopy: drivingcopy,
            voter: voter,
            votercopy: votercopy,
        });
        localStorage.setItem('passport', passport);
        localStorage.setItem('passno', passno);
        localStorage.setItem('passcopy', passcopy);
        localStorage.setItem('aadhar', aadhar);
        localStorage.setItem('aadharcopy', aadharcopy);
        localStorage.setItem('pan', pan);
        localStorage.setItem('pancopy', pancopy);
        localStorage.setItem('driving', driving);
        localStorage.setItem('drivingcopy', drivingcopy);
        localStorage.setItem('voter', voter);
        localStorage.setItem('votercopy', votercopy);
        if (localStorage.getItem('passport') &&   localStorage.getItem('aadhar') &&  localStorage.getItem('pan')){
            naviate('/page4')
        } else {
            naviate('/page3')
        }
    };
    const back=(e)=>{
        e.preventDefault()
        naviate('/page2')
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
                    <h3>Do you have a passport? <span style={{ color: 'red' }}>*</span></h3>
                    <h6>Description: Select 'Yes' if you have a passport, otherwise select 'No'.</h6>
                    <input type="radio" name="name" value="Yes" onChange={handlepassport}   required />&nbsp; yes<br></br>
                    <input type="radio" name="name" value="No" onChange={handlepassport}   required />&nbsp; No<br></br>  
                </div>
            </div>
            <br></br>  
            <div className="main2">
                <div className="name">
                    <h3>Passport Number</h3>
                    <h6>Description: If you selected 'Yes' above, enter your passport number.</h6>
                        <input type="text" name="name" value={passno} onChange={handlepassno}   required />
                        {(passno!=='')?(''):(<><br></br></>)}

                </div>
            </div>
            <br></br>   
            <div className="main2">
                <div className="name">
                    <h3>Upload your Passport Copy</h3>
                    <h6>Description: If you selected 'Yes' above, Upload a copy of  your passport.</h6>
                        <input type="file" onChange={handlePassportCopy}  required />
                </div>
            </div>
            <br></br>  
            <div className="main2">
                <div className="name">
                    <h3>Aadhaar Card Number<span style={{ color: 'red' }}>*</span></h3>
                    <h6>Description: Enter your Aadhaar card number.</h6>
                        <input type="text" value={aadhar} onChange={handleaadhar}  required />
                        {(aadhar!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Please Enter Details </span></>)}

                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h3>Upload your Aadhaar Card Copy</h3>
                    <h6>Description: If you selected 'Yes' above, Upload a copy of  your Aadhaar Card.</h6>
                    <input type="file"  onChange={handleAadharCopy}  required />
                </div>
            </div>
            <br></br>   
            <div className="main2">
                <div className="name">
                    <h3>PAN Card Number<span style={{ color: 'red' }}>*</span></h3>
                    <h6>Description: Enter your PAN card number.</h6>
                        <input type="text" value={pan} onChange={handlepan}  required />
                        {(pan!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Please Enter Details </span></>)}

                </div>
            </div>
            <br></br> 
            <div className="main2">
                <div className="name">
                    <h3>Upload your PAN Card Copy</h3>
                    <h6>Description: If you selected 'Yes' above, Upload a copy of  your PAN Card.</h6>
                    <input type="file"  onChange={handlePanCopy}  required />
                </div>
            </div>
            <br></br> 
            <div className="main2">
                <div className="name">
                    <h3>Driving License Details (if applicable) </h3>
                    <h6>Description: Enter your driving license number if applicable.</h6>
                    <input type="text" value={driving} onChange={handledriving}  required />&nbsp;<br></br>
                    {(driving!=='')?(''):(<><br></br></>)}

                    </div>
            </div>
            <br></br> 
            <div className="main2">
                <div className="name">
                    <h3>Upload your Driving License Copy</h3>
                    <h6>Description: If you selected 'Yes' above, Upload a copy of  your Driving License Card.</h6>
                    <input type="file"  onChange={handleDrivingCopy}  required />
                </div>
            </div>
            <br></br> 
            <div className="main2">
                <div className="name">
                    <h3>Voter ID Card Details (if applicable) </h3>
                    <h6>Description: Enter your Voter ID card number if applicable.</h6>
                    <input type="text" value={voter} onChange={handlevoter}   required />&nbsp; <br></br>
                    {(voter!=='')?(''):(<><br></br></>)}
                    </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h3>Upload your Voter ID Copy</h3>
                    <h6>Description: If you selected 'Yes' above, Upload a copy of  your Voter ID Card.</h6>
                    <input type="file"   onChange={handleVoterCopy}   required />
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
