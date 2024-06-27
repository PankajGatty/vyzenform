import React from 'react'
import { useNavigate } from 'react-router-dom'

export function Page10(props) {
    const naviate=useNavigate()
    const [empverif,setEmpverif]=React.useState(localStorage.getItem('empverif')?localStorage.getItem('empverif'):"")
    const [prevemp,setPrevemp]=React.useState(localStorage.getItem('prevemp')?localStorage.getItem('prevemp'):'')

    const empverifHandle=(event)=>{
        setEmpverif(event.target.value)
    }
    const prevempHandle=(event)=>{
        setPrevemp(event.target.value)
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        localStorage.setItem('empverif',empverif)
        localStorage.setItem('prevemp',prevemp)
        if (localStorage.getItem('empverif') && localStorage.getItem('prevemp')) {
            naviate('/page11')  
        } else {
            naviate('/page10')
        }
    }
    const back=(e)=>{
        e.preventDefault()
        naviate('/page9')
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
                    <h4>Employment Verification Consent  <span style={{ color: 'red' }}>*</span></h4>
                    <input type="radio" value="yes" onChange={empverifHandle}  name="verify" id required />&nbsp; YES<br></br>
                    <input type="radio" value="no" onChange={empverifHandle}  name="verify" id required />&nbsp; NO<br></br>
                    <input type="radio" value="May be" onChange={empverifHandle}  name="verify" id required />&nbsp; MAYBE<br></br> 
                    {(empverif!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Please Enter Details </span></>)}

                    </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h4>Authorization to contact previous employers and references  <span style={{ color: 'red' }}>*</span></h4>
                    <input type="radio" value="yes" onChange={prevempHandle}  name="refer" id required />&nbsp; YES<br></br>
                    <input type="radio" value="no" onChange={prevempHandle} name="refer" id required />&nbsp; NO<br></br>
                    <input type="radio" value="May be" onChange={prevempHandle} name="refer" id required />&nbsp; MAYBE<br></br> 
                    {(prevemp!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Please Enter Details </span></>)}

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
