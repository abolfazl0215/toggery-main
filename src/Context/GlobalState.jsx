import React, { useEffect, useState } from 'react';
import { SimpleContext } from './Context';

const GlobalState = (props) => {
    const [Persons, setPersons] = useState([]);
    const [Size, setSize] = useState("md");
    const [Color, setColor] = useState("سبز");
    const [Total, setTotal] = useState("1");

    

   const addPerson=()=>{

       const persons=[...Persons];
       const person={
           id:Math.floor(Math.random()*10000),
           image:localStorage.getItem("imageItem"),
           title:localStorage.getItem("titleItem"),
           price:localStorage.getItem("priceItem"),
           off:localStorage.getItem("offItem"),
           offPrice:localStorage.getItem("offPriceItem"),
           size:Size,
           color:Color,
           total:Total
        };
       persons.push(person);
       setPersons(persons)  
       console.log(persons);
    }

    const handleDelete=id=>{
        const persons=[...Persons];
        const filtered=persons.filter(p=>p.id !== id);
        setPersons(filtered)
    }



    const onchangeSize=(e)=>{
        const x = e.target.value;
        setSize(x)
    }
    const onchangeColor=(e)=>{
        const x = e.target.value;
        setColor(x)
    }
    const onchangeTotal=(e)=>{
        const x = e.target.value;
        setTotal(x)
    }
   useEffect(()=>{
    localStorage.setItem("size",Size);
   },[Size])
   useEffect(()=>{
    localStorage.setItem("color",Color);
   },[Color])
   useEffect(()=>{
    localStorage.setItem("total",Total);
   },[Total])

    return ( 
        <SimpleContext.Provider 
            value={{
                persons:Persons,
                handleDelete:handleDelete,
                addPerson:addPerson,
                onchangeSize:onchangeSize,
                onchangeColor:onchangeColor,
                onchangeTotal:onchangeTotal
                }}>
            {props.children}
        </SimpleContext.Provider>
     );
}
 
export default GlobalState;