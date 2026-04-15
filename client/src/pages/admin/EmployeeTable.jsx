import DataTable from 'react-data-table-component'
import {useState,useEffect} from 'react'


function EmployeeTable() {
    const [response,setResponse] = useState([])
    const [records,setRecords] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch("/admin/api/getEmployees", { credentials: 'include' })
            .then(res => res.json())
            .then(data => { setResponse(data); setRecords(data); })
            .catch(err => console.error("Failed to load employees", err))
            .finally(() => setLoading(false))
    }, [])
    
    const columns = [
        {
            name: "First Name",
            selector: (row) => row.FirstName,
            sortable: true
        },
        {
            name: "Last Name",
            selector: (row) => row.LastName,
            sortable: true
        },
        {
            name: "Email",
            selector: (row) => row.Email,
        },
        {
            name: "Phone Number",
            selector: (row) => row.PhoneNumber,
        },
        {
            name: "Address",
            selector: (row) => row.Address,
        },
        {
            name: "Edit",
            button: true,
            cell: (row) => {
                <button onClick={EditRow(row)}>
                    Edit
                </button>
            }
        },
        {
            name: "Deactivate",
            button: true,
            cell: (row) => {
                <button onClick={DeactivateRow(row)}>
                    Deactivate
                </button>
            }
        }
    ];

    function EditRow(row) { //NEED TO IMPLIMENT
        
        const [editted,setEditted] = useState({
            FirstName:"",
            LastName:"",
            Email:"",
            PhoneNumber:"",
            Address:""
        })

        const handleChange = (e) => {
            setEditted(prev=>({...prev,[e.target.name]:e.target.value}));
        }

        const handleClick = async e => {
            const r = [
                editted.FirstName,
                editted.LarstName,
                editted.Address,
                editted.PhoneNumber,
                editted.Email,
                row.EmployeeID
            ]
            await fetch('/admin/api/updateemployee',r)
        }
        return (
            <div>
                <form>
                <label>First Name:
                <input type="text" name="FirstName" onChange={handleChange} maxlength="30" defaultValue={row.FirstName} required/>
                </label>
                <label>Last Name:
                    <input type="text" name="LastName" onChange={handleChange} maxlength="30" defaultValue={row.LastName} required/>
                </label>
                <label>Address:
                <input type="text" name="Address" onChange={handleChange} maxlength="100" defaultValue={row.Address} required/>
                </label>
                <label>Phone Number:
                    <input type="tel" placeholder="1234567890" name="PhoneNumber" onChange={handleChange} pattern="[0-9]{10}" defaultValue={row.PhoneNumber} required/>
                </label><br />
                <label>Email*:
                    <input type="email" placeholder="example@example.com" name="Email" onChange={handleChange} defaultValue={row.Email} required/>
                </label>
                <button onClick={handleClick}>Submit</button>
                </form>
            </div>
        )
    };

    function DeactivateRow(row) { //NEED TO IMPLIMENT
        //Deactivate(row.id)
    };

    function handleFilterF(event) {
        const newData = response.filter(row => {
            return row.FirstName.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
    };

    function handleFilterL(event) {
        const newData = response.filter(row => {
            return row.LastName.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
    };
    return (
        <div className="report-table">
            <div>
                <label>First Name: 
                    <input type="text" onChange={handleFilterF}/>
                </label>
                <label>Last Name: 
                    <input type="text" onChange={handleFilterL}/>
                </label>
            </div>
            <DataTable 
                title="Report" 
                columns={columns} 
                data={records} 
                progressPending={loading}
                fixedHeader/>
        </div>
    );
};

export default EmployeeTable;