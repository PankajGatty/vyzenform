import React from 'react'
import { useNavigate } from 'react-router-dom'

export function Page6(props) {
    const [totalexp, setTotalexp] = React.useState(localStorage.getItem('totalexp')?localStorage.getItem('totalexp'):'');
    const [organization, setOrganization] = React.useState(localStorage.getItem('organization')?localStorage.getItem('organization'):'');
    const [designation, setDesignation] = React.useState(localStorage.getItem('designation')?localStorage.getItem('designation'):'');
    const [startdate, setStartdate] = React.useState(localStorage.getItem('startdate')?localStorage.getItem('startdate'):'');
    const [enddate, setEnddate] = React.useState(localStorage.getItem('enddate')?localStorage.getItem('enddate'):'');
    const [roles, setRoles] = React.useState(localStorage.getItem('roles')?localStorage.getItem('roles'):'');
    const [leaving, setLeaving] = React.useState(localStorage.getItem('leaving')?localStorage.getItem('leaving'):'');
    const [ctc, setCtc]= React.useState(localStorage.getItem('ctc')?localStorage.getItem('ctc'):'');
    const [expctc, setExpctc]= React.useState(localStorage.getItem('expctc')?localStorage.getItem('expctc'):'');
    const [notice, setNotice] = React.useState(localStorage.getItem('notice')?localStorage.getItem('notice'):'');
    const naviate=useNavigate()
    const handletotalexp = (e) => {
        setTotalexp(e.target.value)
    }
    const handleorganization = (e) => {
        setOrganization(e.target.value)
    }
    const handledesignation = (e) => {
        setDesignation(e.target.value)
    }
    const handlestartdate = (e) => {
        setStartdate(e.target.value)
    }
    const handleenddate = (e) => {
        setEnddate(e.target.value)
    }
    const handleroles = (e) => {
        setRoles(e.target.value)
    }
    const handleexpctc = (e) => {
        setExpctc(e.target.value)
    }
    const handleleaving = (e) => {
        setLeaving(e.target.value)
    }
    const handlectc = (e) => {
        setCtc(e.target.value)
    }
    const handlenotice = (e) => {
        setNotice(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('user submitted')
        console.log('totalexp', totalexp)
        console.log('organization', organization)
        console.log('designation', designation)
        console.log('startdate', startdate)
        console.log('enddate', enddate)
        console.log('roles', roles)
        console.log('leaving', leaving)
        console.log('ctc', ctc)
        console.log('notice', notice)

        localStorage.setItem('totalexp', totalexp)
        localStorage.setItem('organization', organization)
        localStorage.setItem('designation', designation)
        localStorage.setItem('startdate', startdate)
        localStorage.setItem('enddate', enddate)
        localStorage.setItem('roles', roles)
        localStorage.setItem('leaving', leaving)
        localStorage.setItem('ctc', ctc)
        localStorage.setItem('notice', notice)
        localStorage.setItem('expctc', expctc)
        
        if (localStorage.getItem('totalexp') && localStorage.getItem('organization') && localStorage.getItem('designation') && localStorage.getItem('startdate') && localStorage.getItem('enddate') && localStorage.getItem('roles') && localStorage.getItem('leaving') && localStorage.getItem('ctc') && localStorage.getItem('notice') && localStorage.getItem('expctc')) {    
            naviate('/page7')
        } else {
            naviate('/page6')
        }
    }
    const back=(e)=>{
        e.preventDefault()
        naviate('/page5')
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
                    <h3>Total Experience <span style={{ color: 'red' }}>*</span></h3>
                    <h6>Description: Enter your total years & months of experience.</h6>
                        <input type="text" value={totalexp} onChange={handletotalexp} id required />
                        {(totalexp!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Please Enter Details </span></>)}

                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h3>Organization Name  <span style={{ color: 'red' }}>*</span></h3>
                    <h6>Description: Enter the name of the current organization you have worked for.</h6>
                        <input type="text" value={organization} onChange={handleorganization} id required />
                        {(organization!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Please Enter Details </span></>)}

                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h3>Designation/Job Title  <span style={{ color: 'red' }}>*</span></h3>
                    <h6>Description: Enter your current designation or job title.</h6>
                        <input type="text" value={designation} onChange={handledesignation} id required />
                        {(designation!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Please Enter Details </span></>)}

                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h3>Employment Start Date <span style={{ color: 'red' }}>*</span></h3>
                    <h6>Description: Select the start date of your employment.</h6>
                        <input type="date" value={startdate} onChange={handlestartdate} id required />
                        {(startdate!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Please Enter Details </span></>)}

                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h3>Employment End Date<span style={{ color: 'red' }}>*</span></h3>
                    <h6>Description: Select the end date of your employment (if applicable).</h6>
                        <input type="date" value={enddate} onChange={handleenddate} id required />
                        {(enddate!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Please Enter Details </span></>)}

                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h3>List down your Roles and Responsibilities<span style={{ color: 'red' }}>*</span></h3>
                    <h6>Description: Describe your roles and responsibilities in the organization.</h6>
                        <input type="text" value={roles} onChange={handleroles} id required />
                        {(roles!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Please Enter Details </span></>)}

                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h3>Reason for Leaving<span style={{ color: 'red' }}>*</span></h3>
                    <h6>Description: Provide the reason for leaving your previous or current job.</h6>
                        <input type="text" value={leaving} onChange={handleleaving} id required />
                        {(leaving!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Please Enter Details </span></>)}

                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h3>Current CTC <span style={{ color: 'red' }}>*</span></h3>
                    <h6>Description: Enter your current Cost to Company (CTC).Format : INR 100000 (Annual CTC)</h6>
                        <input type="text" value={ctc} onChange={handlectc} id required />
                        {(ctc!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Please Enter Details </span></>)}

                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h3>Expected CTC <span style={{ color: 'red' }}>*</span></h3>
                    <h6>Description: Enter your expected Cost to Company (CTC). Format : INR 100000 (Annual CTC)</h6>
                        <input type="text" value={expctc} onChange={handleexpctc} id required />
                        {(expctc!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Please Enter Details </span></>)}

                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h3>Notice Period  <span style={{ color: 'red' }}>*</span></h3>
                    <h6>Description: Enter the number of days in your notice period. , Example : 60 Days</h6>
                        <input type="text" value={notice} onChange={handlenotice} id required />
                        {(notice!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Please Enter Details </span></>)}
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
