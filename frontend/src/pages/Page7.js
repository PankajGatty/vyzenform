import React from 'react'
import { useNavigate } from 'react-router-dom';

export function Page7(props) {
    const [salslip, setSalslip] = React.useState(localStorage.getItem('salslip')?localStorage.getItem('salslip'):'');
    const [bank, setBank] = React.useState(localStorage.getItem('bank')?localStorage.getItem('bank'):'');
    const [offer, setOffer] = React.useState(localStorage.getItem('offer')?localStorage.getItem('offer'):'');
    const [increment, setIncrement] = React.useState(localStorage.getItem('increment')?localStorage.getItem('increment'):'');
    const [resign, setResign] = React.useState(localStorage.getItem('resign')?localStorage.getItem('resign'):'');
    const navigate=useNavigate()
    const handlesalslip=(e)=>{
        setSalslip(e.target.file[0].name);
    }
    const handlebank=(e)=>{
        setBank(e.target.file[0].name);
    }
    const handleoffer=(e)=>{
        setOffer(e.target.file[0].name);
    }
    const handleincrement=(e)=>{
        setIncrement(e.target.file[0].name);
    }
    const handleresign=(e)=>{
        setResign(e.target.file[0].name);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        localStorage.setItem('salslip',salslip);
        localStorage.setItem('bank', bank);
        localStorage.setItem('offer', offer);
        localStorage.setItem('increment', increment);
        localStorage.setItem('resign', resign);

        if (localStorage.getItem('salslip') && localStorage.getItem('bank') && localStorage.getItem('offer') && localStorage.getItem('increment') && localStorage.getItem('resign')) {
            navigate('/page8')
        } else {
            navigate('/page7')
        }
    }
    const back=(e)=>{
        e.preventDefault()
        navigate('/page6')
    }
    const clearhandler=(e)=>{
        e.preventDefault()
        localStorage.clear();
        navigate('/')
       }
    return (
        <>
            <form>
            <div className="main3">
                <div className="name">
                    <h3>Please upload your Salary Slips/Payslips (Last 3 Months) for your total experience <span style={{ color: 'red' }}>*</span></h3>
                    <h6>Description: Enter the number of days in your notice period. , Example : 60 Days</h6>
                    <input type="file"  onChange={handlesalslip} id required />
                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h3>Please upload your Bank Statements (Last 3 Months) for your total experience <span style={{ color: 'red' }}>*</span></h3>
                    <input type="file"   onChange={handlebank}  id required />
                </div>
            </div>
            <br></br>
            <div className="main3">
                <div className="name">
                    <h3>Upload Offer Letter/Joining Letter/Employment Agreement from organization(s) for your total experience <span style={{ color: 'red' }}>*</span></h3>
                    <input type="file"  onChange={handleoffer}  id required />
                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h3>Upload increment letter from from organization(s) for your total experience <span style={{ color: 'red' }}>*</span></h3>
                    <input type="file"  onChange={handleincrement} id required />
                </div>
            </div>
            <br></br>
            <div className="main3">
                <div className="name">
                    <h3>Upload Relieving Letter/Experience Certificates / Acceptance of resignation from present employment <span style={{ color: 'red' }}>*</span></h3>
                    <input type="file"  onChange={handleresign}  id required />
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
