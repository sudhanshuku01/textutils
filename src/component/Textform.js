import React, { useState } from 'react'

export default function Textform(props){
 const handleupclick=()=>{
    console.log('upper case was :-'+ text);
    let newtext=text.toUpperCase();
    stext(newtext);
    props.showAlert("Converted to Uppercase","success");
 }
 const handleloclick=()=>{
    console.log('lower case was :-'+ text);
    let newtext=text.toLowerCase();
    stext(newtext);
    props.showAlert("Converted to Lowercase","success");
 }
 const handleonchange=(e)=>{
    stext(e.target.value);
 }
 const handleClear=()=>{
    stext('')
    props.showAlert("Text is Cleared","success");
   }

let alltext=document.getElementById('mybox')
 const Italicfont=()=>{
   alltext.style.fontFamily='Sedgwick Ave Display'
   props.showAlert("Converted in Italic Text","success");
 }
 const normalFont=()=>{
   alltext.style.fontStyle="normal"
   alltext.style.fontFamily="Arial, Helvetica, sans-serif"
   props.showAlert("Converted in Normal Text","success");
 }
 const removeExtraSpace=()=>{
   let newtext=text.split(/[ ]+/);
  stext(newtext.join(" "));
  props.showAlert("Extra Space Removed","success");
 }

 const [text,stext]=useState(' ')
    return(
        <>
        <div className="container"  style={{color:props.mode==='dark'?'white':''}} >
        <h3 >{props.heading}</h3>
        <div className="mb-3">
        <textarea rows="5" value={text} onChange={handleonchange} className="form-control" id='mybox'  style={{color:props.mode==='dark'?'white':'',backgroundColor:props.mode==='dark'?'black':'white'}}></textarea>
        <button type="submit" onClick={handleupclick} className="btn btn-primary btn-sm my-2">ConvertToUpperCase</button>
        <button  type="submit" onClick={handleloclick} className="btn btn-secondary btn-sm my-2 mx-3">ConvertLowerCase</button>
        <button  type="submit" onClick={handleClear} className="btn btn-warning btn-sm my-2 mx-2">Clear</button>
        <button  type="submit" onClick={Italicfont} className="btn btn-warning btn-sm my-2 mx-2">Italic Font</button>
        <button  type="submit" onClick={normalFont} className="btn btn-warning btn-sm my-2 mx-2">Normal Font</button>
        <button  type="submit" onClick={removeExtraSpace} className="btn btn-warning btn-sm my-2 mx-2">Extra Space Remove</button>
        </div>
         <div className='container my-2'>
            <h2>Your Text Summary</h2>
            <p>{text.split(' ').length} Words And {text.length} Characters</p>
            <p>{text.length} Minutes Reading Time</p>
            <h3>Preview</h3>
            <p>{text}</p>
         </div>
        </div>
        </>
    )
}