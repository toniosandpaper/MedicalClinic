import React from 'react'

function Home() {

    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/admin/profile"><button>View Profile</button></Link>
            <Link to="/admin/adde"><button>Add employee</button></Link>
            <br /><br /><h1>Reports:</h1>
            <h3>General Appointment Report</h3>
            <p>The General Appointment Report creates a report that sorts Departments by how many appointments each gets within a certain time period.</p>
            <Link to="/admin/repgar"><button>Start Report</button></Link><br />

            <h3>General Revenue Report</h3>
            <p>The General Revenue Report creates a report that sorts Departments by how much revenue each makes within a certain time period.</p>
            <Link to="/admin/repgrr"><button>Start Report</button></Link>

            <h3>Department Appointment Report</h3>
            <p>The Department Appointment Report creates a report that sorts Doctors within a specified Department by how many appointments each gets within a certain time period.</p>
            <Link to="/admin/repdar"><button>Start Report</button></Link>
        </div>
    );
};