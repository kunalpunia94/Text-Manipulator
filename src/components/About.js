import React ,{useState, useSyncExternalStore} from 'react'

export default function About() {

//javascript object
const [myStyle,SetmyStyle]=useState({
  color: 'black',
  backgroundColor: 'white'
})

const [btntext,setbtntext]=useState('Enable Dark Mode')


const toogleStyle=()=>{
  if(myStyle.color==='black'){
    SetmyStyle({
      //invert it from above
      color: 'white',
      backgroundColor: 'black',
      border: '1px solid white'
    })
    setbtntext('Enable Light Mode')
  }else{
    SetmyStyle({
      //here same
      color: 'black',
      backgroundColor: 'white'
    })
    setbtntext('Enable Dark Mode')
  }
}

  return (
    <div className='container' style={myStyle}>  {/*here we aree passing that style for giving the css property ans we have give in buttons also*/}
      <h1 className='my-3'>About Us</h1>
      <div class="accordion" id="accordionExample"> 
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body" style={myStyle}>
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body" style={myStyle}>
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body" style={myStyle}>
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>

      <div className="container my-3">
        <button type="button" onClick={toogleStyle} className="btn btn-success">{btntext}</button>
      </div>
    </div>
  )
}
