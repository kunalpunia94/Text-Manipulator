// same shortcut rfc
import React, {useState} from 'react'


export default function TexrForm(props) {

    const handleUpclick=()=>{
        // console.log("Upparcase was clicked" +text)
        let newText=text.toLocaleUpperCase();
        setText(newText)
        props.showalert("Converted to uppercase","success")
    }

    const handleloclick=()=>{
        // console.log("Upparcase was clicked" +text)
        let newText=text.toLocaleLowerCase();
        setText(newText)
        props.showalert("Converted to lowercase","success")
    }

    const handleclear=()=>{
        // console.log("Upparcase was clicked" +text)
        let newText='';
        setText(newText)
        props.showalert("Text has cleared","success")
    }

    const handleonchange=(event)=>{
        // console.log("onchange")
        setText(event.target.value) //using this we will be able to type in that textarea
        
    }

    const handlecopy=()=>{
        var text=document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showalert("Text has been copied","success")
    }

    const [text, setText] = useState('Enter text here') //here text's default value is "Enter text here" and if we want to change we will change using setText
    // text='kunal' wrong way to change the text
    //correct way to change the text shown below
    // setText("Kunal");
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* inside textarea using value we have passed our default value and without onchange event we can not type there so that is must */}
                <textarea className="form-control" value={text} onChange={handleonchange} id="myBox" rows="8"></textarea> 
            </div>
            <button type="button" className="btn btn-success mx-1" onClick={handleUpclick}>Convert to UpperCase</button>
            <button type="button" className="btn btn-success mx-1" onClick={handleloclick}>Convert to Lowercase</button>
            <button type="button" className="btn btn-success mx-1" onClick={handleclear}>Clear text</button>
            <button type="button" className="btn btn-success mx-1" onClick={handlecopy}>Copy text</button>
        </div>
        <div className="conatiner my-3">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} character</p>
            <p>{0.008*text.split(" ").length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something to preview it here"}</p>
        </div>
        </>
    )
}
