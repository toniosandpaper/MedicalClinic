import React from 'react'


function Profile({First,Last,Role,Depart,Birth,Gender,Race,Ethnic,Address,Phone}) {

    return (
        <div>
            <button><a href="/admin/home" style="text-decoration: none; color: black;">Home</a></button>
            <h1> Name: {First} {Last}</h1>
            <h1>Role: {Role}</h1>
            <h1>Department: {Depart}</h1>
            <h1>Birth Date: {Birth}</h1>
            <h1>Gender: {Gender}</h1>
            <h1>Race: {Race}</h1>
            <h1>Ethnicity: {Ethnic}</h1>
            <h1>Address: {Address}</h1>
            <h1>Phone Number: {Phone}</h1>
            <br /><br /><Link to="/admin/updateprofile"><button >Change Profile</button></Link>
        </div>

    );
};