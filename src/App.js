// import logo from './logo.svg';
// import './App.css';
import Textform from './component/Textform';
import Alert from './component/Alert';
// import DarkMode from './component/DarkMode';
import Navbar from './component/Navbar';
  // import './TextDesign.css'
//  import TextDesign from "./component/TextDesign";
import React, {useState} from 'react'

function App() {
  const [alert,setalert]=useState(null)
  const [mode,setMode]=useState('light');
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type            //we'll change it lator
    })
    setTimeout(()=>{
      setalert(null)
    },1500)
  }
  const toggleMode=()=>{
     if(mode==='light'){
      setMode('dark');
      showAlert("Dark Mode is Enabled","success");
      document.body.style.backgroundColor='black';
    }else{
      setMode('light')
      showAlert("Light Mode is Enabled","success");
      document.body.style.backgroundColor='white';
     }
  }
  return( 
    <>
    <Navbar showAlert={showAlert} togglemode={toggleMode} mode={mode}/> 
    <Alert alert={alert} />
    {/* <div className='container my-3'> */}
    <Textform showAlert={showAlert}  mode={mode}  heading="Enter text to convert in Upper Case"/>
     {/* <DarkMode/> */}
    {/* </div> */}
     {/* <TextDesign/> */}
    </>
  );
}
export default App;
