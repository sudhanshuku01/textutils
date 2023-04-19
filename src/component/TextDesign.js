import React,{useState} from 'react'
export default function TextDesign(){
     const [text,settext]=useState('')
     const handleChange=()=>{
        let newtext=document.getElementById('mybox').value;
        settext(newtext)
     }
     const handleuppercase=()=>{
        let newtext=text.toUpperCase();
        settext(newtext);
     }
     const handlelowercase=()=>{
        // let newtext=text.toLowerCase(); // you can do directly as well haha..
        settext(text.toLowerCase());
     }
     const handlecleartext=()=>{
        settext(' ')
     }
    const handlecopytext=()=>{
        let newtext=document.getElementById('mybox');//or,e.target.value
         newtext.select()
         navigator.clipboard.writeText(newtext.value)
         settext(newtext.value)
     }
     const alltext=document.getElementsByClassName('ta')
     const copystylishfont=(e)=>{
        console.log(e.target)
        let ind=(e.target.id).split('-')[1]
         console.log(ind)
         console.log(alltext[ind])

         let newtext=alltext[ind];//or,e.target.value
         newtext.select()
         navigator.clipboard.writeText(newtext.value)
         settext(newtext.value)

     }
     const showlist=()=>{
      let dop=document.getElementsByClassName('topiclist')[0];
      if(dop.style.opacity==0){
        dop.style.opacity=1
        document.getElementsByClassName('navbar')[0].style.height='10vw'
    }else{
          dop.style.opacity=0
          document.getElementsByClassName('navbar')[0].style.height='3vw'
      }
     }
    return(
        <>
        <nav className="navbar">
            <div id='appname'>Font World</div>
            <div className='topiclist'>
                <li className='topic'>Docs</li>
                <li className='topic'>Top 10</li>
                <li className='topic'>Social</li>
                <li className='topic'>Premium</li>
            </div>
        </nav>
            <div onClick={showlist} className='hdlist'>
                <li className='hdlistele'></li>
                <li className='hdlistele'></li>
            </div>
        <div className='container'>
        <div className="textinput">
            <div className='tttt'>Input Text Here</div>
        <textarea value={text} name="" id="mybox" onChange={handleChange}  cols="70" rows="10"></textarea>        
         <div>
        <button className='masterbtn' onClick={handleuppercase} id='uppercase'>UpperCase</button>
        <button className='masterbtn' onClick={handlelowercase} id='lowercase'>Lower Case</button>
        <button className='masterbtn' id='clear' onClick={handlecleartext}>Clear</button>
        <button  className='masterbtn' id='copy' onClick={handlecopytext}>Copy</button>
         </div>
        </div>
        <div className='section2'>
        <div className='magic'>Magic</div>
        <div className='fontstylelist'>
            <div className='font-items'>
            <textarea value={text} className='ta' id="font0" cols="50" rows="2"></textarea>
            <button className='btn' onClick={copystylishfont} type="submit" id='c-0'>Copy</button>
            </div>
            <div className="font-items">
            <textarea value={text}  className='ta' id="font1" cols="50" rows="2"></textarea>
            <button className='btn' onClick={copystylishfont} type="submit" id='c-1'>Copy</button>
            </div>
            <div className="font-items">

            <textarea value={text} className='ta'  id="font2" cols="50" rows="2"></textarea>
            <button className='btn' onClick={copystylishfont} type="submit" id='c-2'>Copy</button>
            </div>
            <div className="font-items">

            <textarea value={text} className='ta' id="font3" cols="50" rows="1"></textarea>
            <button className='btn' onClick={copystylishfont} type="submit" id='c-3'>Copy</button>
            </div>
            <div className="font-items">

            <textarea value={text} className='ta'  id="font4" cols="50" rows="1"></textarea>
            <button className='btn' onClick={copystylishfont} type="submit" id='c-4'>Copy</button>
            </div>
            <div className="font-items">
            <textarea value={text} className='ta'  id="font5" cols="50" rows="1"></textarea>
            <button className='btn' onClick={copystylishfont} type="submit" id='c-5'>Copy</button>
            </div>
            <div className="font-items">
            <textarea value={text} className='ta'  id="font6" cols="50" rows="1"></textarea>
            <button className='btn' onClick={copystylishfont} type="submit" id='c-6'>Copy</button>
            </div>
            <div className="font-items">
            <textarea value={text} className='ta'  id="font7" cols="50" rows="1"></textarea>
            <button className='btn' onClick={copystylishfont} type="submit" id='c-7'>Copy</button>
            </div>
            </div>
        </div>
        
        </div>
        </>
    )
}