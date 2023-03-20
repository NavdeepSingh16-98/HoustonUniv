import React,{ useContext, useState, Fragment } from 'react';

export default function Header(){


   

    const [display,setDisplay] = useState(false);

    const showNav = ()=>{


setDisplay(!display)
console.log('display',display);
    }

    const givElement = ()=>{
        if(display){
            return (<h1>This</h1>)
        }else{

            return (<h1>That</h1>)
        }
    }
  
  return (
    <Fragment>
      <div className="top_bar">
        <div className="container">
            <div className="row">
                <div className="logo">
                    <img src={require('../assets/images/site-logo.png')} alt="" /> 
                </div>
                <div className="call">
                    <p>Call <a href="tel:713-221-8522">713-221-8522</a> to speak to an Admissions Counselor
                        or complete the form below to learn more!</p>
                </div>
            </div>
        </div>
    </div>
    <div className="nav_bar ">
         <div className="container">
             <div className="nav_menu">
                 <a href="#">Home</a>
                 <div className="dropdown_btn">
                 <a className="dropdown" href="#">
                     degree programs <i className="fa fa-caret-down" aria-hidden="true"></i>
                    </a>
                     <ul className="dropdown_nav">
                        <li><a href="#0">dropdown1</a></li>
                        <li><a href="#0">dropdown2</a></li>
                        <li><a href="#0">dropdown2</a></li>
                     </ul>
                 
                 </div>
             </div>
         </div>
    </div>

    <div className='hamburger'>
{/* <img src="../assets/images/hamburg.jpg" alt="hamburger" /> */}


{
    display ? (<button className='hamburg_button' style={{fontSize:'33px'}} onClick={()=> showNav()}>
{/* <i class="fa fa-times" ></i> */}
&times;
    </button>):(<button className='hamburg_button' onClick={()=> showNav()}>
    <i class="fa fa-bars"></i>
    </button>)
}





<div>

    {
        display ? (<div className="nav_menu">
        <a href="#">Home</a>
        <div className="dropdown_btn">
        <a className="dropdown" href="#">
            degree programs <i className="fa fa-caret-down" aria-hidden="true"></i>
           </a>
            <ul className="dropdown_nav">
               <li><a href="#0">dropdown1</a></li>
               <li><a href="#0">dropdown2</a></li>
               <li><a href="#0">dropdown2</a></li>
            </ul>
        
        </div>
    </div>):(<></>)
    }
</div>



    </div>
    </Fragment>
  );
}
