import React from 'react'
import { useNavigate } from 'react-router-dom'

export function Page4(props) {
    const [photo, setPhoto] =  React.useState(localStorage.getItem('photo')?localStorage.getItem('photo'):'');
    const [work, setWork] = React.useState(localStorage.getItem('work')?localStorage.getItem('work'):'');
    const [resume, setResume] =React.useState(localStorage.getItem('resume')?localStorage.getItem('resume'):'');
    const [link, setLink] = React.useState(localStorage.getItem('link')?localStorage.getItem('link'):'');
    const [portfolio, setPortfolio] =React.useState(localStorage.getItem('portfolio')?localStorage.getItem('portfolio'):'');
    const [skills, setSkills] = React.useState(localStorage.getItem('skills')?localStorage.getItem('skills'):'');
    const [languages, setLanguages] = React.useState(localStorage.getItem('languages')?localStorage.getItem('languages'):'');
    const navigate=useNavigate()
    
    const photoHandle=(event)=>{
        setPhoto(event.target.files[0].name);
    }
    const workHandle=(event)=>{
        setWork(event.target.value);
    }
    const resumeHandle=(event)=>{
        setResume(event.target.files[0].name);
    }
    const linkHandle=(event)=>{
        setLink(event.target.value);
    }
    const portfolioHandle=(event)=>{
        setPortfolio(event.target.value);
    }
    const skillsHandle=(event)=>{
        setSkills(event.target.value);
    }
    const languagesHandle=(event)=>{
        setLanguages(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Data:', {
            photo: photo,
            work: work,
            resume: resume,
            link: link,
            portfolio: portfolio,
            skills: skills,
            languages: languages
        });
        localStorage.setItem('photo', photo);
        localStorage.setItem('work', work);
        localStorage.setItem('resume', resume);
        localStorage.setItem('link', link);
        localStorage.setItem('portfolio', portfolio);
        localStorage.setItem('skills', skills);
        localStorage.setItem('languages', languages);

        if (localStorage.getItem('photo') && localStorage.getItem('work') && localStorage.getItem('resume') && localStorage.getItem('link') && localStorage.getItem('portfolio') && localStorage.getItem('skills') && localStorage.getItem('languages')) {
            navigate('/page5')
        } else {
            navigate('/page4')
        }

    }
    const back=(e)=>{
        e.preventDefault()
        navigate('/page3')
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
                    <h3>Photograph<span style={{ color: 'red' }}>*</span></h3>
                    <h6>Description: Upload a recent passport-sized photograph.</h6>
                    <input type="file"  onChange={photoHandle} id required />
                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h3>Work Link/Portfolio (LinkedIn)<span style={{ color: 'red' }}>*</span></h3>
                    <h6>Description: Provide a link to your LinkedIn profile or online portfolio.</h6>
                        <input type="text" value={work} onChange={workHandle} id required />
                        {(work!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Please Enter Details </span></>)}

                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h3>Please attached your updated Resume/CV<span style={{ color: 'red' }}>*</span></h3>
                    <h6>Description: Upload your resume and portfolio.</h6>
                    <input type="file" onChange={resumeHandle} id required />
                </div>
            </div>
            <br></br>
            <div className="main3">
                <div className="name">
                    <h4>Please share the links of your Social Media Profiles (LinkedIn, Facebook, Instagram, etc.)<span style={{ color: 'red' }}>*</span></h4>
                    <h6>Description: Provide links to your social media profiles.</h6>
                        <input type="text" value={link} onChange={linkHandle} id required />
                        {(link!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Please Enter Details </span></>)}

                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h4>Please share the links of your Online Portfolio or Website (if applicable) (If none please mention NA)<span style={{ color: 'red' }}>*</span></h4>
                    <h6>Description: Provide the link to your online portfolio or personal website.</h6>
                        <input type="text" value={portfolio} onChange={portfolioHandle} id required />
                        {(portfolio!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Please Enter Details </span></>)}

                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h3>Skills<span style={{ color: 'red' }}>*</span></h3>
                    <h6>List down all the Skills you posses</h6>
                        <input type="text" value={skills} onChange={skillsHandle} id required />
                        {(skills!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Please Enter Details </span></>)}

                </div>
            </div>
            <br></br>
            <div className="main2">
                <div className="name">
                    <h3>Languages <span style={{ color: 'red' }}>*</span></h3>
                    <h6>List the Languages you are Proficient</h6>
                        <input type="text" value={languages} onChange={languagesHandle} id required />
                        {(languages!=='')?(''):(<><br></br><span style={{ color: 'red' }}>Please Enter Details </span></>)}

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
