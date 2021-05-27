import React, { useRef, useState } from 'react';
import Footer2 from '../Pages/Footer2';
import TopNav2 from './../Navs/TopNav2';
import { Link } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import { toast } from 'react-toastify';

const Register = ({history}) => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [, forceUpdate] = useState()
    const validator=useRef(new SimpleReactValidator({
        messages :{
            required:"پر کزدن این فیلد الزامی است" ,
            min :"مقدار وارد شده کمتر از حد مجاز است",
            email:"ایمبل وارد شده صحیح نمیباشد"
        },
        element : message=> <div style={{color:"red"}}>{message}</div>
    }));

    const onSubmit= event =>{
        event.preventDefault();
        if(validator.current.allValid()){
            history.replace("/");
            toast.success("ثبت نام موفقیت آمیز بود",{position:"top-right"})
        }else{
            forceUpdate(1);
        }
    }

    return ( 
        <div className="register">
            <TopNav2/>
            <div className="form-login">
                <h4>ثبت نام :</h4><br/>
                <form className="form-group" onSubmit={onSubmit}>
                <label>نام و نام خانوادگی :</label>
                        <input 
                            type="text" 
                            name="fullname"
                            className="form-control"
                            value={fullName}
                            onChange={e=>{ 
                                setFullName(e.target.value);
                                validator.current.showMessageFor("fullname")
                            }}
                        />
                        {validator.current.message("fullname",fullName,"required|min:2")}
                        <br/>
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
                        <p className="cp"><Link to="/login" style={{textDecoration:"none",color:"#616161"}}>قبلا ثبت نام کردی ؟ وارد شو !</Link></p>
                </form>
            </div>
            <Footer2/>
        </div>
     );
}
 
export default Register;