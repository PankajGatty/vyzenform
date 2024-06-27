import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function Page2(props) {
    const [resaddr,setResaddr]=useState(localStorage.getItem('resaddr')?localStorage.getItem('resaddr'):'')
    const [peraddr,setPeraddr]=useState(localStorage.getItem('peraddr')?localStorage.getItem('peraddr'):'')
    const [currloc,setCurrloc]=useState(localStorage.getItem('currloc')?localStorage.getItem('currloc'):'')
    const [prefloc,setPrefloc]=useState(localStorage.getItem('prefloc')?localStorage.getItem('prefloc'):'')
    const navigate=useNavigate()
    const resaddrHandler=(e)=>{
        setResaddr(e.target.value)
    }
    const peraddrHandler=(e)=>{
        setPeraddr(e.target.value)
    }
    const currlocHandler=(e)=>{
        setCurrloc(e.target.value)
    }
    const preflocHandler=(e)=>{
        setPrefloc(e.target.value)
    }
    const submit=()=>{
        localStorage.setItem('resaddr',resaddr) 
        localStorage.setItem('peraddr', peraddr)
        localStorage.setItem('currloc', currloc)
        localStorage.setItem('prefloc', prefloc)
        // navigate to page3
        if (localStorage.getItem('resaddr') && localStorage.getItem('peraddr') && localStorage.getItem('currloc') && localStorage.getItem('prefloc')) {   
            navigate('/Page3') 
        } else {
            navigate('/Page2')
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
        <>
        <form>
             <div className="main4">
                <div className="name">
                    <h3>Current Residential Address <span style={{ color: 'red' }}>*</span></h3>
                    <h6>Description: Enter your current residential address in Full along with</h6>
                     <h6>   City</h6><h6>  State</h6>
                       <h6> Postal Code</h6>
                    <input type="text" name="name" value={resaddr} onChange={resaddrHandler} id required />
                    {(resaddr!==''&& resaddr!==null)?(''):(<><br></br><span style={{ color: 'red' }}>Enter your current residential address </span></>)}

                    </div>
            </div>
            <br></br>
            <div className="main4">
                <div className="name">
                    <h3>Permanent Residential Address <span style={{ color: 'red' }}>*</span></h3>
                    <h6>Description: Enter your Permanent residential address in Full along with</h6>
                     <h6>   City</h6>
                      <h6>  State</h6>
                       <h6> Postal Code</h6>
                        <input type="text" value={peraddr} onChange={peraddrHandler} id required />
                        {(peraddr!==''&& peraddr)?(''):(<><br></br><span style={{ color: 'red' }}>Enter your Permanent residential address </span></>)}   
                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h3>Current Location <span style={{ color: 'red' }}>*</span></h3>
                    <h6>Description: Enter your current city of residence.</h6>
                        <input type="text" value={currloc} onChange={currlocHandler} id required />
                        {(currloc!=='' && currloc!=null)?(''):(<><br></br><span style={{ color: 'red' }}> Enter your current city of residence </span></>)}   

                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h3>Preferred Location <span style={{ color: 'red' }}>*</span></h3>
                    <h6>Description: Enter your preferred city of residence.</h6>
                        <input type="text" value={prefloc} onChange={preflocHandler} id required />
                        {(prefloc!=='' && prefloc!=null)?(''):(<><br></br><span style={{ color: 'red' }}>  Enter your preferred city of residence. </span></>)}   

                </div>
            </div>
            <br></br>
            <div className="submit1">
                    <button onClick={back}>Back</button>
                    <button onClick={submit}>Next</button>                    
            </div>
            <div className='submit2'>
                    <button onClick={clearhandler}>Clear Form</button>
            </div>
        </form>  

        </>
    )
}
