import React from 'react';
import { Link } from 'react-router-dom';
import server from '../../Server/Server.json';
import TopNav2 from '../Navs/TopNav2';
import Footer2 from '../Pages/Footer2';
import { Helmet } from 'react-helmet';


const Shirt = () => {
    
    const saving=(image,title,price,off,offPrice)=>{
        localStorage.setItem("imageItem",image);
        localStorage.setItem("titleItem",title);
        localStorage.setItem("priceItem",price);
        localStorage.setItem("offItem",off);
        localStorage.setItem("offPriceItem",offPrice);
        
    }
    return ( 
        <div className="shirt">
            <Helmet>
                <title>پیراهن</title>
            </Helmet>
           <TopNav2/>
            <div className="container-product">
                    {server.products.map(z=>(
                        <div className="box" onClick={()=>saving(z.image,z.title,z.price,z.off,z.offPrice)}>
                            <Link to="single" style={{textDecoration:"none",color:"#616161"}}>
                                <img src={z.image} alt="تصویر محصول"/>
                                <p className="title">{z.title}</p>
                                <div className="off text-end w-100"><del className="px-2">{z.price}</del><span className="badge ml-2">{z.off}</span></div>
                                <div className="price text-end w-100 mt-2 px-2">{z.offPrice}</div>
                            </Link>
                        </div>
                    ))}
                </div>
           <Footer2/>
        </div>
     );
}
 
export default Shirt;