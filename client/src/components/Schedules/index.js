import React from "react";
import "../../styles/style.css"
import { useGather } from "../../utils/getemploy";

const Schedule = () => {
    const { name, email, phone } = useGather();
    return (
<div>
    <h1>Employee Schedules:</h1>
    <h3>{name}</h3>
    <h5>Email:</h5>
    <p>{email}</p>
    <h5>Phone Number:</h5>
    <p>{phone}</p>
</div>
)}



export default Schedule;
