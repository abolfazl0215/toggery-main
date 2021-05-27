import React from 'react'
import Section2 from './Section2';

const Section1 = () => {

        // scroll to top width refresh
        window.onload=function(){
            window.scrollTo(0,0)
        }
        // delete scroll
        document.body.style.overflow="hidden"
        
        

    return ( 
        <div className="containerPage" id="top1">
          <div className="class-page-all" id="one">
              <div id="parallax">
                  <h1 id="brand" onClick>GOLDEN</h1>
              </div>
          </div>
         <Section2/>
        </div>
     );
}
 
export default Section1;