 import React, {useState} from 'react'
 
 export default function TextForm(props) {
    const handleUPC = ()=>{
        // console.log("Upper Case was Clicked" + text);
        let newText = text.toUpperCase();
       settext(newText)
    }
    const handleLWC = ()=>{
        let newText = text.toLowerCase();
        settext(newText)
    }
    const handleonchange = (event)=>{
        // console.log("On chnage");
        settext(event.target.value);
    }
    const [text, settext] = useState('Enter Text Here');
    
   return (
    <>
     <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleonchange} rows="8"></textarea>
        <button className='btn btn-primary' onClick={handleUPC}>Convert to Uppercase</button>  
        <button className='btn btn-secondry' onClick={handleLWC}>Convert to Lower case</button> 
        </div>
    </div>
    <div className='container'>
        <h1>Your Summary</h1>
        <p>{text.split(" ").length}words and {text.length} characters</p>
        <h3>Time Reuired to read words</h3>
        <p>{0.008*text.split(" ").length}</p>
        <h3>Time required to read characters</h3>
        <p>{0.000008*text.length}</p>
        <h2>Preivew</h2>
        <p>{text}</p>


    </div>
    </>
   )
 }
 
