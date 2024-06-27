import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export function Page9(props) {
    const navigate=useNavigate()
    const [person,setPerson]=useState(localStorage.getItem('person')?localStorage.getItem('person'):'')
    const [refdesignation,setRefdesignation]=useState(localStorage.getItem('refdesignation')?localStorage.getItem('refdesignation'):'')
    const [refcontactno,setRefcontactno]=useState(localStorage.getItem('refcontactno')?localStorage.getItem('refcontactno'):'')
    const [refemail,setRefemail]=useState(localStorage.getItem('refemail')?localStorage.getItem('refemail'):"")   
    const [refrelationship,setRefrelationship]=useState(localStorage.getItem('refrelationship')?localStorage.getItem('refrelationship'):'')
    const [refcheck,setRefcheck]=useState(localStorage.getItem('refcheck')?localStorage.getItem('refcheck'):'') 
    
    const personHandle=(event)=>{
        setPerson(event.target.value)
    }
    const refdesignationHandle=(event)=>{
        setRefdesignation(event.target.value)
    }
    const refcontactnoHandle=(event)=>{
        setRefcontactno(event.target.value)
    }
    const refemailHandle=(event)=>{
        setRefemail(event.target.value)
    }
    const refrelationshipHandle=(event)=>{
        setRefrelationship(event.target.value)
    }
    const refcheckHandle=(event)=>{
        setRefcheck(event.target.value)
    }

    const submitHandle=(event)=>{
        event.preventDefault();
        localStorage.setItem('person',person);
        localStorage.setItem('refdesignation',refdesignation);
        localStorage.setItem('refcontactno',refcontactno);
        localStorage.setItem('refemail',refemail);
        localStorage.setItem('refrelationship',refrelationship);
        localStorage.setItem('refcheck',refcheck);

        if (localStorage.getItem('person') && localStorage.getItem('refdesignation') && localStorage.getItem('refcontactno') && localStorage.getItem('refemail') && localStorage.getItem('refrelationship') && localStorage.getItem('refcheck')) {
            navigate('/page10')
        } else {
            navigate('/page9')
        }
    }
    const back=(e)=>{
        e.preventDefault()
        navigate('/page8')
    }
    const clearhandler=(e)=>{
        e.preventDefault()
        localStorage.clear();
        navigate('/')
       }
    return (
        <>
            <form>
            <div className="main2">
                <div className="name">
                    <h4>Please mention One reference contact person name from this organization <span style={{ color: 'red' }}>*</span></h4>
                        <input type="text" value={person} onChange={personHandle} id required /> 
                        {(person!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Please Enter Details </span></>)}
    
                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h4>One reference contact person's Designation from this organization <span style={{ color: 'red' }}>*</span></h4>
                        <input type="text" value={refdesignation} onChange={refdesignationHandle} id required /> 
                        {(refdesignation!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Please Enter Details </span></>)}
    
                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h4>One reference contact person's Contact No from this organization <span style={{ color: 'red' }}>*</span></h4>
                        <input type="text" value={refcontactno} onChange={refcontactnoHandle} id required /> 
                        {(refcontactno!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Please Enter Details </span></>)}
    
                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h4>One reference contact person's Email ID from this organization <span style={{ color: 'red' }}>*</span></h4>
                        <input type="text" value={refemail} onChange={refemailHandle} id required /> 
                        {(refemail!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Please Enter Details </span></>)}
    
                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h5>One reference contact person's - Pleasestate the Professional Relationship with the mentioned reference contact person's <span style={{ color: 'red' }}>*</span></h5>
                        <input type="text" value={refrelationship} onChange={refrelationshipHandle} id required />
                        {(refrelationship!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Please Enter Details </span></>)}
    
                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h4>Please mention the date we can Reference Check <span style={{ color: 'red' }}>*</span></h4>
                        <input type="date" value={refcheck} onChange={refcheckHandle} id required /> 
                        {(refcheck!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Please Enter Details </span></>)}
    
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
