import React, { Fragment } from 'react';
import MainLayout from './../Components/Layouts/MainLayout';
import Section1 from '../Components/Pages/Section1';
import Section3 from '../Components/Pages/Section3';
import Section4 from '../Components/Pages/Section4';
import Footer from '../Components/Pages/Footer';
import TopNav from '../Components/Navs/TopNav';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import Shoes from './../Components/Product/Shoes';
import Pants from '../Components/Product/Pants';
import Shirt from '../Components/Product/Shirt';
import Bag from '../Components/Product/bag';
import Single from '../Components/SingleProduct/Single';
import { Route, Switch } from 'react-router';
import ShoppingCart from '../Components/ShoppingCart/ShoppingCart';



const Plus = () => {
   
    return ( 
        <Fragment>
            

            <Switch>
             
                    <Route  path="/register" component={Register} />   
                    <Route  path="/login" component={Login} />   

                    <Route  path="/shirt" component={Shirt}/>
                    <Route  path="/shoes" component={Shoes}/>
                    <Route  path="/pants" component={Pants}/>
                    <Route  path="/bag" component={Bag}/>

                    <Route path="/single" component={Single}/>
                    <Route path="/shoppingcart" component={ShoppingCart}/>
               
                <Route exact path="/">
                    <MainLayout>
                        <TopNav/>
                        <Section1/>
                        <Section3/>
                        <Section4/>
                        <Footer/>
                    </MainLayout>
                </Route>
            </Switch>
            


        </Fragment>
     );
}
 
export default Plus;
