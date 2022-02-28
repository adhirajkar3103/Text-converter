import React,{useState} from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard'

function TextArea(props) {
  const [text, setText] = useState("")
  const toUppercase = () =>{
    let newText = text.toUpperCase()
    setText(newText)
  }
  const changeValue=(e)=>{
    e.preventDefault()
    setText(e.target.value)
  }
  const toLowercase = () =>{
    let newText = text.toLowerCase()
    setText(newText)
  }
  const clearText = ()=>{
    setText("")
  }
  const removeSpace=()=>{ 
    var noSpacesString= text.replace(/ /g,'')
    setText(noSpacesString)
  }
  return (
      <div className="mb-3 container my-2">
        <label htmlFor="textArea" className="form-label">
          Enter your text here
        </label>
        <textarea
          className="form-control"
          id="textArea"
          rows="3"
          value={text}
          onChange={changeValue}
          style={props.style}
        ></textarea>
        <div className="my-2">
          <p>{text.split(/\s+/).filter((word)=>{return word.length!=0}).length} words and {text.length} characters</p>
        </div>
        <div className="my-2">
        <button className="btn btn-outline-primary btn-sm mx-2 my-1" onClick={toUppercase}>Uppercase</button>
        <buttom className="btn btn-outline-primary btn-sm mx-2 my-1" onClick={toLowercase}>Lowercase</buttom>
        <CopyToClipboard text={text}>
          <button className="btn btn-outline-primary mx-2 btn-sm my-1">Copy text</button>
        </CopyToClipboard>
        <button className="btn btn-outline-primary btn-sm mx-2 my-1" onClick={removeSpace}>Remove spaces</button>
        <button className="btn btn-sm btn-danger mx-2 my-1"  onClick={clearText}>Clear text</button>

        </div>
        
      </div>
    
  );
}

export default TextArea;
