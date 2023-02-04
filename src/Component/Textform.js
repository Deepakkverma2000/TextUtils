import React, { useState } from 'react'


export default function Textform(props) {
    
    const [text, setText] = useState('');
    
    // text ="New text"//wronge way to change the state
    // setText("New text");// Correct way
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted in Upper case","Success");
    }
    const handleonChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    const clearText = () => {
        
        setText("");
        props.showAlert("Clear TExt","Success");

    }
    const handleCopy =()=>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied!","Success");


    }
    const handleSpaces =()=>{
        let spacetext = text.split(/[ ]+/);
        setText(spacetext.join(" "));
        props.showAlert("All spaces removed","Success");

    }
    // const fetchEmail = () => {
    //     // console.log("On change");
    //     const fetchEmail = () => {
    //         let email = [];
    //         if(text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi))
    //         {
    //             email =  text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
    //         }
       
    // }
// }


    return (<>
        <div className="container "  style={{backgroundColor:props.mode === 'dark'?'#1b1347':'white',color:props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className=" mb-3">
                <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleonChange} placeholder="Enter text here" style={{backgroundColor:props.mode === 'dark'?'gray':'white',color:props.mode === 'dark'?'white':'black'}}></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Upper case</button>
            <button className="btn btn-primary" onClick={clearText}>Clear taxt</button>
            {/* <button className="btn btn-primary" onClick={fetchEmail}>Fetch Email if exist</button> */}
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleSpaces}>Remove Extra spaces </button>

        </div>
        <div className="container  my-3"  style={{backgroundColor:props.mode === 'dark'?'#1b1347':'white',color:props.mode === 'dark'?'white':'black'}}>
            <h1>your text Suymmery is Here:</h1>
            <p>No of Worlds= {text.split(" ").length} <br></br> character = {text.length} 
            time to resd worlds ={0.08 *text.split(" ").length }
            
            </p>
        </div>
    </>  
    )
}
