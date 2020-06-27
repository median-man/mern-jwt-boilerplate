import axios from "axios";
import React, { useContext, createContext, useReducer, useEffect } from "react";

const initialEmployState = {
    name: null,
    email: null,
    phone: null
  };
const defaultEmployValue = {
    ...initialEmployState
}
const EmployContext = createContext(defaultEmployValue);

const employeeReducer = (state, action) => {
   return {
       name: action.name,
       email: action.email,
       phone: action.phone
   }
}

 const allemployees = () => {

    return axios.get('/api/allemployees').then(res => {
        let employees = res.data;
        return employees
    })
};
 export const EmployeeProvider = props => {
     const [state, dispatch] =useReducer(employeeReducer, initialEmployState);

     const gatheremployee = () => {
         allemployees().then(employees =>{
             const employee = employees[0]
             const employName = `${employee.firstName} ${employee.lastName}`;
             const employEmail = employee.email;
             const employPhone = employee.phoneNumber;
             dispatch({
                 name: employName,
                 email: employEmail,
                 phone: employPhone
             });
         });

     };
     useEffect(gatheremployee, []);

     const value = {
         ...state,
         gatheremployee
     };
     return <EmployContext.Provider value={value} {...props} />;
 };

export const useGather = () => {
    return useContext(EmployContext);
  };