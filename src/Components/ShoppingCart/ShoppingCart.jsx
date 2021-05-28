import React, { useContext } from 'react';
import { SimpleContext } from '../../Context/Context';
import TopNav2 from './../Navs/TopNav2';
import Footer2 from './../Pages/Footer2';
import { Helmet } from 'react-helmet';

const ShoppingCart = () => {
    const context=useContext(SimpleContext);
    const content=context.persons.length;
    
    
    //Total price
    const s=[];
    context.persons.map(person=>(
        s.push(person.offPrice)
    ))
    const sum = s.reduce((x, y) => {
        return parseInt(x) + parseInt(y);
    },0);
    
    return ( 
        <div>
            <Helmet>
                <title>سبد خرید</title>
            </Helmet>
            <TopNav2/>
            <div className="shopping-cart">
                        <table className="list-unstyled list-inline text-center w-100">
                            {content === 0 ? (<h1>سبد خرید شما خالی است</h1>) : (
                                <tr>
                                <td>عکس محصول</td>
                                <td>نام محصول</td>
                                <td>قیمت</td>
                                <td>تعداد</td>
                                <td>سایز</td>
                                <td>رنگ</td>
                                <td>حدف</td>
                            </tr>
                            )}
                    {context.persons.map(person=>(
                
                            <tr key={person.id}>
                                <td><img src={person.image} alt="تصویر محصول" id="img-product"/></td>
                                <td><p>{person.title}</p></td>
                                <td><p>{person.offPrice} تومان</p></td>
                                <td><p>{person.total}</p></td>
                                <td><p>{person.size}</p></td>
                                <td><p>{person.color}</p></td>
                                <td><img src="icon/trash.png" onClick={()=>context.handleDelete(person.id)} alt="حذف" id="trash"/></td>
                            </tr>
                    ))}
                            
                        </table>
                        {content !== 0 ? (<p className="text-center mt-5"> قیمت کل :{sum}</p>) : null}
                        
                    </div>
            <Footer2/>
        </div>
     );
}
 
export default ShoppingCart;
