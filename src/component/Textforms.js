import React, {useState} from 'react'

export default function Textforms(props) {
   

    const[text, setText] = useState('');
    
    const handleUP =()=> {
        setText(text.toUpperCase());
        props.showAlert("converted to up", "success");
    }

    const handleclear =()=> {
        let newtext = '';
        setText(newtext);
    }

     const handleOn = (event) =>{
        setText(event.target.value);
     }



  return (
<>  
    <div className="container">
    <h1>{props.heading}</h1>
    <div class="mb-3">
    <label for="mybox" class="form-label"></label>
    <textarea class="form-control" value={text} onChange={handleOn} id="mybox" rows="1"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUP}>clickUp</button>
    <button className="btn btn-primary mx-3" onClick={handleclear}>clear text</button>
    </div>

    <div className="container">
      <h1>your text summary </h1>
      <p>{text.split(" ").length} words and {text.length} charachters</p>
      <p>{0.008*text.split(" ").length} minutes read</p>
      
    </div>
</>
  )
}
