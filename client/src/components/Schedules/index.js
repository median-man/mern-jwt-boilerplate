import React from "react";
import "../../styles/style.css"
import { useGather } from "../../utils/getemploy";

const Schedule = () => {
    const { employee } = useGather();
    return (
<div className="container">
    <h1 className="above-list">Employee Schedules:</h1>
    <ul className="list-group list-group-flush">
        {employee && employee.map(employ => (
        <li className="list-group-item" key={employ.name}>
            <h3>{employ.name}</h3>
            <h5>Email:</h5>
            <p>{employ.email}</p>
            <h5>Phone Number:</h5>
            <p>{employ.phone}</p>
        </li>
    ))}

    </ul>

</div>
)}



export default Schedule;
