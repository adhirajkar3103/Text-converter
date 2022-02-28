import About from "./components/About";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import {useState} from 'react'

function App() {
  
  const [styles, setStyles] = useState({
    backgroundColor:"white",
    color:"black"
  })
  const [textBoxStyle, settextBoxStyle] = useState({
    backgroundColor:"white",
    color:"black"
  })
  const [closeBtn, setcloseBtn] = useState("btn-close text-reset")
  const [navbarStyle, setnavbarStyle] = useState({class:"navbar navbar-expand-lg navbar-light bg-light container",
    text:"Dark mode",
    btnClass:"btn btn-dark p-1 mx-1"
  })

  const [modeKey, setmodeKey] = useState(0)
  const darkMode=()=>{
    if(modeKey===0){
      setStyles({ color:"white",backgroundColor:"#212529", height:"100vh"})
      settextBoxStyle({ color:"white", backgroundColor:"#212529"})
      setcloseBtn("btn-close text-reset btn-close-white")
      setnavbarStyle({class:"navbar navbar-expand-lg navbar-dark bg-dark container",text:"Light mode",btnClass:"btn btn-light p-1 mx-1"})
      setmodeKey(1)
      document.title="TextConverter - Dark mode"
    }else{
      setStyles({ color:"black",backgroundColor:"white", height:"100vh"})
      settextBoxStyle({ color:"black", backgroundColor:"white"})
      setcloseBtn("btn-close text-reset")
      setnavbarStyle({class:"navbar navbar-expand-lg navbar-light bg-light container",text:"Dark mode",btnClass:"btn btn-dark p-1 mx-1"})
      setmodeKey(0)
      document.title="TextConverter - Light mode"
    }  
  }

  return (
    <div style={styles}>
      <About style={styles} btnColor={closeBtn}/>
    <Navbar darkMode={darkMode} navbarStyle={navbarStyle}/>
    <TextArea style={textBoxStyle}/>
    </div>
    
  );
}

export default App;
