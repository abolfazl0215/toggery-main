import React, { useRef, useState } from 'react'
import TopNav2 from '../Navs/TopNav2';
import Footer2 from '../Pages/Footer2';
import { Link } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import { toast } from 'react-toastify';

const Login = ({history}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [,forceUpdate] = useState()
    const validator = useRef(new SimpleReactValidator({
        messages:{
            required:"پر کزدن این فیلد الزامی است" ,
            min :"مقدار وارد شده کمتر از حد مجاز است",
            email:"ایمبل وارد شده صحیح نمیباشد"
        },
        element: message=> <div style={{color:"red"}}>{message}</div>
    }))

    const handleSubmit = e =>{
        e.preventDefault();
        if(validator.current.allValid()){
            history.replace("/")
            toast.success("ورود موفقیت آمیز بود",{position:"top-right"})
        }else{
           //shock for start validator
            forceUpdate(1)
        }
    }

    return ( 
        <div className="login">
            <TopNav2/>
                <div className="form-login">
                    <h4>ورود به سایت</h4><br/>
                    <form className="form-group" onSubmit={handleSubmit}>
                        
                        <label>ایمیل :</label>
                        <input 
                            type="email" 
                            name="email"
                            className="form-control"
                            value={email}
                            onChange={e=>{
                                setEmail(e.target.value);
                                validator.current.showMessageFor("email")
                            }}
                        />
                        {validator.current.message("email",email,"required|email")}
                        <br/>
                        <label>رمز عبور :</label>
                        <input 
                            type="password"
                            name="password" 
                            className="form-control"
                            value={password}
                            onChange={e=>{
                                setPassword(e.target.value);
                                validator.current.showMessageFor("password")
                            }}
                        />
                        {validator.current.message("password",password,"required|min:5")}
                        <br/>
                        <button type="submit" className="btn w-100">ورود</button><br/><br/>
                        {/* class cp = cursor:pointer */}
                        <p className="cp"><Link to="/register" style={{textDecoration:"none",color:"#616161"}}>هنوز ثبت نام نکردی ؟ کلیک کن !</Link></p>
                        <p className="cp">ررمز عبور خود را فراموش کرده ام !</p>
                    </form>
                </div>
            <Footer2/>
        </div>
     );
}
 
export default Login;