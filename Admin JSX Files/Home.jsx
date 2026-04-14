import React from 'react'

function Home() {

    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/admin/Profile"><button>View Profile</button></Link>
            <Link to="/admin/AddE"><button>Add employee</button></Link>
            <br /><br /><h1>Reports:</h1>
            <p>The General Appointment Report creates a report that sorts Departments by how many appointments each gets within a certain time period.</p>
            <p>The General Revenue Report creates a report that sorts Departments by how much revenue each makes within a certain time period.</p>
            <p>The Department Appointment Report creates a report that sorts Doctors within a specified Department by how many appointments each gets within a certain time period.</p>
            <Link to="/admin/RepGAR"><button>Start Report</button></Link><br />
        </div>
    );
};