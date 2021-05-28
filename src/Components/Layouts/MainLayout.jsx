import React from 'react';
import { Helmet } from 'react-helmet';

const MainLayout = (props) => {

  const scroll3=()=>{
    const top=document.querySelector(".section3").offsetTop;
    window.scrollTo(0, top)
  }

    const scroll12=()=>{
      const top=document.querySelector(".containerPage").offsetTop;
        window.scrollTo(0, top);
        
    }
    const scroll4=()=>{
      const top=document.querySelector(".section-4").offsetTop;
        window.scrollTo(0, top)
    }
    const scroll5=()=>{
      const top=document.querySelector(".footer").offsetTop;
        window.scrollTo(0, top)
    }

    
    return ( 
            <div style={{overflow:"hidden",width:"100%",height:"100%"}}>

              <Helmet>
                <title>صفخه اصلی</title>
              </Helmet>

              <input type="radio" name="pages" id="radio2"/>
              <input type="radio" name="pages" id="radio1"/>
              <input type="radio" name="pages" id="radio3"/>
              <input type="radio" name="pages" id="radio4"/>
              <input type="radio" name="pages" id="radio5"/>
              
              <div className="container-page">{props.children}</div>

              <div className="labels">
                    <label htmlFor="radio1" id="dot1" onClick={scroll12}></label><br/>
                    <label htmlFor="radio2" id="dot2" onClick={scroll12}></label><br/>
                    <label htmlFor="radio3" id="dot3" onClick={scroll3}></label><br/>
                    <label htmlFor="radio4" id="dot4" onClick={scroll4}></label><br/>
                    <label htmlFor="radio5" id="dot5" onClick={scroll5}></label>
              </div>

            </div>
     );
}
 
export default MainLayout;
