import React from 'react'
import { useNavigate } from 'react-router-dom'

export function Page8(props) {
    const [notice, setNotice] = React.useState(localStorage.getItem('notice')?localStorage.getItem('notice'):'');
    const [lastworkingdate, setLastworkingdate] = React.useState(localStorage.getItem('lastworkingdate')?localStorage.getItem('lastworkingdate'):'');
    const [offer, setOffer] = React.useState(localStorage.getItem('offer')?localStorage.getItem('offer'):'');
    const [offername, setOffername] = React.useState(localStorage.getItem('offername')?localStorage.getItem('offername'):'');
    const [offerletter, setOfferletter] = React.useState(localStorage.getItem('offerletter')?localStorage.getItem('offerletter'):'');
    const [accept, setAccept] = React.useState(localStorage.getItem('accept')?localStorage.getItem('accept'):'');
    const [acceptdate, setAcceptdate] = React.useState(localStorage.getItem('acceptdate')?localStorage.getItem('acceptdate'):'');
    const [proposedctc, setProposedctc] = React.useState(localStorage.getItem('proposedctc')?localStorage.getItem('proposedctc'):'');
    const naviate=useNavigate()
    const noticeHandle=(event)=>{
        setNotice(event.target.value);
    }
    const lastworkingdateHandle=(event)=>{
        setLastworkingdate(event.target.value);
    }
    const offerHandle=(event)=>{
        setOffer(event.target.value);
    }
    const offernameHandle=(event)=>{
        setOffername(event.target.value);
    }
    const offerletterHandle=(event)=>{
        setOfferletter(event.target.files[0].name);
        }
    const acceptHandle=(event)=>{
        setAccept(event.target.value);
    }
    const acceptdateHandle=(event)=>{
        setAcceptdate(event.target.value);
    }
    const proposedctcHandle=(event)=>{
        setProposedctc(event.target.value);
    }
    const submitHandle=(e)=>{
        e.preventDefault();
        localStorage.setItem('notice',notice);
        localStorage.setItem('lastworkingdate', lastworkingdate);
        localStorage.setItem('offer', offer);
        localStorage.setItem('offername', offername);
        localStorage.setItem('offerletter',offerletter);
        localStorage.setItem('accept', accept);
        localStorage.setItem('acceptdate', acceptdate);
        localStorage.setItem('proposedctc', proposedctc);

        if (localStorage.getItem('notice') && localStorage.getItem('lastworkingdate') && localStorage.getItem('offer') && localStorage.getItem('offername') && localStorage.getItem('offerletter') && localStorage.getItem('accept') && localStorage.getItem('acceptdate') && localStorage.getItem('proposedctc')) {
            naviate('/page9')
        } else {
            naviate('/page8')
        }
    }
    const back=(e)=>{
        e.preventDefault()
        naviate('/page7')
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
                    <h3>Are you Currently Serving your Notice Period <span style={{ color: 'red' }}>*</span></h3>
                    <input type="radio"  name="notice" value="yes" onChange={noticeHandle} id required  />&nbsp; YES<br></br>
                    <input type="radio"  name="notice" value="no" onChange={noticeHandle} id required />&nbsp; NO<br></br>
                    {(notice!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Please Enter Details </span></>)}
                    </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h3>Mention your Last working Date <span style={{ color: 'red' }}>*</span></h3>
                    <h6>Description: If you selected 'Yes' above, enter your last working date in the organization.</h6>
                        <input type="date" value={lastworkingdate} onChange={lastworkingdateHandle} id required />  
                        {(lastworkingdate!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Please Enter Details </span></>)}

                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h4>Do you hold any existing offers that we should be aware of?<span style={{ color: 'red' }}>*</span></h4>
                    <input type="radio" value="yes" onChange={offerHandle}  name="offer" id required />&nbsp; YES<br></br>
                    <input type="radio" value="no" onChange={offerHandle} name="offer" id required />&nbsp; NO<br></br>
                    <input type="radio" value="May be" onChange={offerHandle} name="offer" id required />&nbsp; MAY BE<br></br>
                    {(offer!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Please Enter Details </span></>)}

                    </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h3>If yes, enter the name of the organization you hold an offer from <span style={{ color: 'red' }}>*</span></h3>
                        <input type="text" value={offername} onChange={offernameHandle} id required /> 
                        {(offername!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Please Enter Details </span></>)}
    
                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h3>Please upload the offer letter or proof of offer you hold <span style={{ color: 'red' }}>*</span></h3>
                    <input type="file"  onChange={offerletterHandle}  id required />  
                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h4>Please confirm if you have accepted the offer you hold?<span style={{ color: 'red' }}>*</span></h4>
                    <input type="radio" vvalue="yes" onChange={acceptHandle}  name="hold" id required />&nbsp; YES<br></br>
                    <input type="radio" value="no" onChange={acceptHandle} name="hold" id required />&nbsp; NO<br></br>
                    <input type="radio" value="May be" onChange={acceptHandle}  name="hold" id required />&nbsp; MAYBE<br></br>
                    {(accept!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Please Enter Details </span></>)}

                    </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h4>Please mention the date you have to accept the Offer you hold or the date you have Accepted the Offer <span style={{ color: 'red' }}>*</span></h4>
                        <input type="date" value={acceptdate} onChange={acceptdateHandle} id required />  
                        {(acceptdate!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Please Enter Details </span></>)}

                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h4>If no, mention the expected/proposed CTC you are offered<span style={{ color: 'red' }}>*</span></h4>
                        <input type="text" value={proposedctc} onChange={proposedctcHandle} id required /> 
                        {(proposedctc!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Please Enter Details </span></>)}
    
                </div>
            </div>
            <br></br>
            <div className="submit1">
                    <button onClick={back}>Back</button>
                    <button onClick={submitHandle}>Next</button>
        </div>
            <div className='submit2'>
                    <button onClick={clearhandler}>Clear Form</button>
            </div>
        </form>
       
        </>
    )
}
