import React, { useState } from 'react'
import { Page1 } from './pages/Page1'
import { Page2 } from './pages/Page2'
import { Page3 } from './pages/Page3'
import { Page4 } from './pages/Page4'
import { Page5 } from './pages/Page5'
import { Page6 } from './pages/Page6'
import { Page7 } from './pages/Page7'
import { Page8 } from './pages/Page8'
import { Page9 } from './pages/Page9'
import { Page10 } from './pages/Page10'
import { Page11 } from './pages/Page11'

export function MainPages(props) {
    // const [next,setNext]=useState(1)
    // console.log(next)
    // const nextPage=(e)=>{
    //     e.preventDefault()
    //     setNext(next+1)
    // }
    // const backPage=(e)=>{
    //     e.preventDefault()
    //     setNext(next-1)
    // }
    return (
        <form action>
            <img src='./vyzen.png' alt="Neeraj Meka" />
            <div className="main">
                <h1>Candidate Application Form - VYZEN</h1>
                <hr />
                <h6> <p>
                <i><strong>
                Please fill out the following details accurately to apply for the position..
                 Ensure you upload necessary documents where required. Fields marked with an asterisk (*) are mandatory.
                </strong></i>
             </p></h6>  
            <h6 style={{ color: 'red' }}>* Indicates required question</h6>
            </div><br></br>
            {/* {
                (next===1)?(
                <>
                <Page1/>
                <div className="submit">
                    <button onClick={nextPage}>next</button>
                </div>
                </>
                ):(
                    (next===2)?(
                        <>
                        <Page2/>
                        <div className="submit">
                            <button onClick={backPage}>back</button>
                      &nbsp;
                            <button onClick={nextPage}>next</button>
                        </div>
                        </>
                    ):(
                        (next===3)?(
                        <>
                        <Page3/>
                     <div className="submit">
                            <button onClick={backPage}>back</button>
                      &nbsp;
                            <button onClick={nextPage}>next</button>
                        </div>
                        </>
                        ):(
                            (next===4)?(
                          <>
                            <Page4/>
                         <div className="submit">
                            <button onClick={backPage}>back</button>
                      &nbsp;
                            <button onClick={nextPage}>next</button>
                        </div>
                        </>
                        ):(
                                (next===5)?(
                          <>    
                                <Page5/>
                             <div className="submit">
                            <button onClick={backPage}>back</button>
                      &nbsp;
                            <button onClick={nextPage}>next</button>
                        </div>
                        </>
                        ):(
                                    (next===6)?(
                            <>   
                                    <Page6/>
                                 <div className="submit">
                            <button onClick={backPage}>back</button>
                      &nbsp;
                            <button onClick={nextPage}>next</button>
                        </div>
                        </>
                        ):(
                                        (next===7)?(
                            <>       
                                        <Page7/>
                                     <div className="submit">
                            <button onClick={backPage}>back</button>
                      &nbsp;
                            <button onClick={nextPage}>next</button>
                        </div>
                        </>
                        ):(
                                            (next===8)?(
                             <>
                                            <Page8/>
                                         <div className="submit">
                            <button onClick={backPage}>back</button>
                      &nbsp;
                            <button onClick={nextPage}>next</button>
                        </div>
                        </>
                        ):(
                                                (next===9)?(
                             <>            
                                                <Page9/>
                                             <div className="submit">
                            <button onClick={backPage}>back</button>
                      &nbsp;
                            <button onClick={nextPage}>next</button>
                        </div>
                        </>
                        ):(
                                                    (next===10)?(
                                <>  
                                                    <Page10/>
                                                 <div className="submit">
                            <button onClick={backPage}>back</button>
                      &nbsp;
                            <button onClick={nextPage}>next</button>
                        </div>
                        </>
                        ):(
                                                        (next===11)?(
                             <>
                                                        
                                                        <Page11/>
                        <div className="submit">
                            <button onClick={backPage}>back</button>
                      &nbsp;
                            <button onClick={nextPage}>next</button>
                        </div>
                        </>
                        ):null
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            } */}
            
        </form>
    )
}
