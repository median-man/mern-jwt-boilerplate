import axios from "axios";
import React, { useContext, createContext, useReducer, useEffect } from "react";

const initialEmployState = [
];
const defaultEmployValue = {
    ...initialEmployState
}
const EmployContext = createContext(defaultEmployValue);

const employeeReducer = (state, action) => {
    const employee = action.map(employee => ({
        name: `${employee.firstName} ${employee.lastName}`,
        email: employee.email,
        phone: employee.phoneNumber
    }))
   return {
       ...state,
       employee
       }
   }


 const allemployees = () => {

    return axios.get('/api/allemployees').then(res => {
        let employees = res.data;
        return employees
    })
};
 export const EmployeeProvider = props => {
     const [state, dispatch] = useReducer(employeeReducer, initialEmployState);

     const gatheremployee = () => {
         allemployees().then(employees =>{
            dispatch(employees)

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