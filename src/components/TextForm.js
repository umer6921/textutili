import React, { useState } from 'react'
import { BiCopy } from 'react-icons/bi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TextForm(props) {
    const [text, setText] = useState();
    let handleUpClick = () => {

        if (text) {
            // console.log("Uppercase is clicked"+text);
            let uppcaseText = text.toUpperCase();
            setText(uppcaseText);

        }


    }

    let handleLowerClick = () => {
        if(text){
            let lowerCase = text.toLowerCase();
            setText(lowerCase);
        }
       
    }

    let handleClearText = () => {
        setText('');

    }

    let handleOnChange = (e) => {
        // console.log("Onchnage triggered");
        setText(e.target.value);
    }

    let handlRemoveSpace = () => {
        if (text !== undefined) {
            let removeSpace = text.replace(/\s{2,}/g, ' ');
            setText(removeSpace);
        }
        else {
            setText(text);
        }

    }

    const handleCopyText = () => {
        navigator.clipboard.writeText(text)

            .then(() => {
                
                toast.success('Text copied');

            })
            .catch((err) => {
              
                toast.error('Failed to copy text');
            });
    }
    return (
        <>

            <div className="mb-3 mt-5">
                <label htmlFor="myBox" className="form-label fw-bold" style={{ color: props.mode === 'light' ? "black" : "white" }}>{props.heading}</label>
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} placeholder='Enter the text..' style={{ backgroundColor: props.mode === 'light' ? "white" : "#2a3036", color: props.mode === 'light' ? "black" : "white" }}></textarea>

            </div>
            <div className=' d-lg-flex' >
                <button className='btn-primary p-2 border-0 me-2 action-button' onClick={handleUpClick} style={{ backgroundColor: props.mode === 'light' ? "#0d6efd" : "#212529", color: "white" }}>Convert to Uppercase</button>
                <button className='btn-primary p-2 border-0 me-2 action-button' onClick={handleLowerClick} style={{ backgroundColor: props.mode === 'light' ? "#0d6efd" : "#212529", color: "white" }}>Convert to Lowercase</button>
                <button className='btn-primary p-2 border-0 me-2 action-button' onClick={handleClearText} style={{ backgroundColor: props.mode === 'light' ? "#0d6efd" : "#212529", color: "white" }}>Clear the text</button>
                <button className='btn-primary p-2 border-0 action-button' onClick={handlRemoveSpace} style={{ backgroundColor: props.mode === 'light' ? "#0d6efd" : "#212529", color: "white" }}>Remove extra spaces</button>

            </div>


            <div className='container my-3' style={{ color: props.mode === 'light' ? "black" : "white" }}>
                <h2>Your text summary</h2>
                {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
                {/* <p>{text ? text.split(" ").length : 0} words and {text ? text.length : 0} characters</p> */}
                <p>{text ? text.split(/\s+/).filter(Boolean).length : 0} words and {text ? text.replace(/\s/g, "").length : 0} characters</p>

                <p>{text ? 0.008 * text.length : 0} minutes to read</p>
                <div className='text-start'>
                    <div className='d-flex justify-content-between'>
                        <h3>Preview</h3>
                        <BiCopy onClick={handleCopyText}></BiCopy>


                    </div>
                    <ToastContainer autoClose={1000} />


                    <p>{text}</p>
                </div>


            </div>
        </>
    )
}
