import React, {useState} from 'react'

export default function (props) {

    // const [myStyle, setmyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
       
    // });

    // const [btnText, setbtnText] = useState("Enable dark mode");

    // let toggleMode = ()=>{
    //  if(myStyle.color === 'black' ){
    //     setmyStyle({
    //         color: 'white',
    //         backgroundColor: 'black'
    //     })
    //     setbtnText("Enable light mode");
    //  } 
    //  else{
    //     setmyStyle({
    //         color: 'black',
    //     backgroundColor: 'white',

    //     })
    //     setbtnText("Enable dark mode")
    //  }
    // }


    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="accordion" id="accordionExample" >
                    <div className="accordion-item" >
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ backgroundColor: props.mode === 'light' ? "white" : "#2a3036", color: props.mode === 'light' ? "black" : "white" }}>
                           <strong>Your Text Transformation Companion</strong> 
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={{ backgroundColor: props.mode === 'light' ? "white" : "#2a3036", color: props.mode === 'light' ? "black" : "white" }}>
                            <div className="accordion-body">
                               <p className='text-start'>Text Utili is a powerful web application designed to simplify your text manipulation tasks. With Text Utili, you can effortlessly convert your text into uppercase or lowercase, remove extra spaces, count the number of words and characters, calculate the estimated reading time, and even preview and copy your text with just a click.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" >
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ backgroundColor: props.mode === 'light' ? "white" : "#2a3036", color: props.mode === 'light' ? "black" : "white" }}>
                               <strong>Key Features</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={{ backgroundColor: props.mode === 'light' ? "white" : "#2a3036", color: props.mode === 'light' ? "black" : "white" }}>
                            <div className="accordion-body">
                                <p className='text-start'>
                                    1) Text Transformation &nbsp; &nbsp; &nbsp; 2) Clear Text &nbsp; &nbsp; &nbsp;  3) Remove Extra Spaces&nbsp; &nbsp; &nbsp; 4) Word and Character Count &nbsp; &nbsp; &nbsp; 
                                    5) Estimated Reading Time &nbsp; &nbsp; &nbsp;  6) Text Preview &nbsp; &nbsp; &nbsp; <br></br>
                                    7) Copy to Clipboard
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ backgroundColor: props.mode === 'light' ? "white" : "#2a3036", color: props.mode === 'light' ? "black" : "white" }}>
                               <strong>Why to Use?</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={{ backgroundColor: props.mode === 'light' ? "white" : "#2a3036", color: props.mode === 'light' ? "black" : "white" }}>
                            <div className="accordion-body">
                              <p className='text-start'>
                              Text Utili is the ultimate companion for writers, students, professionals, and anyone who deals with text manipulation on a regular basis. Whether you need to convert text cases, analyze word counts, or simply refine your content, Text Utili has got you covered.
                              </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* <button className='btn-primary mt-5 px-4 py-2' onClick={toggleMode}>{btnText}</button> */}
            </div>
        </>
    )
}
