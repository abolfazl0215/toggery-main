import React, { useContext } from 'react';
import { SimpleContext } from '../../Context/Context';
import { Link } from 'react-router-dom';
import TopNav2 from '../Navs/TopNav2';
import Footer2 from './../Pages/Footer2';
import { Helmet } from 'react-helmet';

const Single = () => {
    const context=useContext(SimpleContext);
        
        localStorage.setItem("sizeValue","md")
        localStorage.setItem("colorValue","زرد")
        localStorage.setItem("totalValue","1")

    
    return ( 

        <div className="single">
            <Helmet>
                <title>محصول </title>
            </Helmet>
            <TopNav2/>
                <div className="box">   
                    <img src={localStorage.getItem("imageItem")} alt="تصویر محصول"/>
                    <div className="box2 p-2">  
                        <p className="title">{localStorage.getItem("titleItem")}</p>
                        <p className="off"><del className="px-2">{localStorage.getItem("priceItem")}</del><span className="badge ml-2">{localStorage.getItem("offItem")}</span></p>
                        <p className="price mt-2 px-2">{localStorage.getItem("offPriceItem")}</p>
                        سایز: <select className="form-control w-100" onChange={context.onchangeSize}>
                            <option value="md" id="size">md</option>
                            <option value="lg">lg</option>
                            <option value="xl">xl</option>
                        </select><br />
                        رنگ: <select className="form-control w-100" onChange={context.onchangeColor}>
                            <option id="color">زرد</option>
                            <option>سبز</option>
                            <option>قرمز</option>
                        </select><br />
                        تعداد: <input type="number" className="form-control w-100" id="total" onChange={context.onchangeTotal} />
                        <button className="btn w-100"><Link  onClick={context.addPerson}>افزودن به سبد خرید</Link></button>
                    </div>
                </div>
            <Footer2/>
        </div>
        
     );
}
 
export default Single;