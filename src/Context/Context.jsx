import { createContext } from 'react';
 export const SimpleContext=createContext({
     persons:[],
     addPerson:()=> {},
     handleDelete:()=> {}
 })