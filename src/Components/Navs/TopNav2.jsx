import React, { useContext, useState } from 'react';
import { NavLink,Link } from 'react-router-dom';
import { SimpleContext } from './../../Context/Context';

 
const TopNav2 = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showProduct, setShowProduct] = useState(false);

    const context=useContext(SimpleContext)

  const handleShowMenu=()=>{
    setShowMenu(!showMenu);
  }
  const handleShowProduct=()=>{
    setShowProduct(!showProduct);
  }



const showCollapse=()=> {
    document.querySelector(".list-product").style.display = "inherit"
}

const hideCollapse=()=> {
    document.querySelector(".list-product").style.display = "none"
}
document.body.style.overflowY="scroll"
    return ( 
        <div>
            
            <div className="navbar-main2 nav pt-3 pb-1 mb-5" style={showMenu ? {backgroundColor:"white"} : {}}>
                <ul className="col-6 list-unstyled list-inline ul-nav">
                    <li className="mr-5 mx-3 cp">
                        <NavLink to="/" style={{color:"#e1ba43"}} className="text-decoration-none">صفحه اصلی<i className="fa fa-car"></i></NavLink>
                    </li>

                    <li  className="mx-3 cp rty" style={{color:"#e1ba43",position:"absolute"}}>
                        <div className="products">
                            <div className="tit" onMouseMove={showCollapse}>محصولات &#9662;</div>
                            <div className="box-list" onMouseLeave={hideCollapse}>
                                <ul className="list-product list-unstyled">
                                    <li className="list-li" id="li1"><Link to="/shirt" style={{textDecoration:"none",color:"black"}}>پیراهن</Link></li><br/>
                                    <li className="list-li" id="li2"><Link to="/pants" style={{textDecoration:"none",color:"black"}}>شلوار</Link></li><br/>
                                    <li className="list-li" id="li3"><Link to="/shoes" style={{textDecoration:"none",color:"black"}}>کفش </Link></li><br/>
                                    <li className="list-li" id="li4"><Link to="/bag" style={{textDecoration:"none",color:"black"}}>کیف</Link></li><br/>
                                </ul>

                            </div>
                        </div>
                    </li>
                </ul>
                
                <div className="col-6 text-end link-nav ul-nav-left">
 
                <div className="box-login">
                            <NavLink to="/shoppingcart" style={{color:"#e1ba43"}} className="link ml-4"><img src="icon/shoppingcart.png"  alt="سبد خرید"/><span id="total-cart" className="badge">{context.persons.length}</span></NavLink>
                            <NavLink to="/login" style={{color:"#e1ba43"}}><img src="icon/login.png" alt="ورود به سایت"/></NavLink>
                            {" "}
                        </div>
                </div>
           </div>
           <div className="menu-mobile"><p onClick={handleShowMenu}>{showMenu ? <span>&times;</span> : "|||"}</p>
           <div className={showMenu ? "nav-mobile" : "hidden"}>
                <ul className="navbar-list">
                    <li><Link to="/" style={{color:"black"}} className="text-decoration-none text-black">خانه</Link></li>
                    <li><span onClick={handleShowProduct}>محصولات {showProduct ? "-" : "+"} </span>
                        <ul className={showProduct ? "" : "hidden"}>
                        <li><Link to="/shirt" style={{textDecoration:"none",color:"#916a00"}}>پیراهن</Link></li>
                            <li><Link to="/pants" style={{textDecoration:"none",color:"#916a00"}}>شلوار</Link></li>
                            <li><Link to="/shoes" style={{textDecoration:"none",color:"#916a00"}}>کفش </Link></li>
                            <li><Link to="/bag" style={{textDecoration:"none",color:"#916a00"}}>کیف</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
           </div>
           
        </div>
     );
}
 
export default TopNav2;
