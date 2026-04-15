import React from 'react'


function AdminProfile({First,Last,Role,Depart,Birth,Gender,Race,Ethnic,Address,Phone}) {
    const [info, setInfo] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
    fetch('/admin/api/profile', { credentials: 'include' })
        .then(res => {
        if (res.status === 401) { navigate('/patient/login'); return null; }
        return res.json();
        })
        .then(data => { if (data) setInfo(data); })
        .catch(() => setError('Failed to load profile.'));
    }, [navigate]);

    if (error) return <p style={{ padding: '20px', color: 'red' }}>{error}</p>;
    if (!info) return <p style={{ padding: '20px' }}>Loading...</p>;
    
    const [updated,setUpdated] = useState({
        FirstName: info.First,
        LastName: info.Last,
        GenderCode: null,
        RaceCode: null,
        EthnicityCode: null,
        Department: null,
        Address: info.Address,
        PhoneNumber: info.Phone,
        Email: info.Email,
        Password: info.Pass,
    });

    const [passes,setPasses] = useState({
        OldPassword: "",
        NewPassword: ""
    })
    
    
    
    return (
        <div>
            <button><a href="/admin/home" style="text-decoration: none; color: black;">Home</a></button>
            <h1> Name: {info.First} {info.Last}</h1>
            <h1>Role: {info.Role}</h1>
            <h1>Department: {info.Depart}</h1>
            <h1>Birth Date: {info.Birth}</h1>
            <h1>Gender: {info.Gender}</h1>
            <h1>Race: {info.Race}</h1>
            <h1>Ethnicity: {info.Ethnic}</h1>
            <h1>Address: {info.Address}</h1>
            <h1>Phone Number: {info.Phone}</h1>
            <h1>Email: {info.Email}</h1>
            <br /><br />
            <form>Update Profile
                <label>First Name*:
                <input type="text" name="FirstName" onChange={handleChange} maxlength="30" required/>
                </label>
                <label>Last Name*:
                    <input type="text" name="LastName" onChange={handleChange} maxlength="30" required/>
                </label>
                <label>Birth Date*:
                    <input type="date" name="Birthdate" onChange={handleChange} required/>
                </label><br /><br />
                <label>Gender:
                    <select name="GenderCode" onChange={handleChange}>
                        <option value="">Select Gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">Other</option>
                    </select>
                </label>
                <label>Race:
                    <select name="RaceCode" onChange={handleChange}>
                        <option value="">Select Race</option>
                        <option value="1">White</option>
                        <option value="3">African</option>
                        <option value="2">Asian</option>
                        <option value="5">Other</option>
                    </select>
                </label>
                <label>Ethnicity:
                    <select name="EthnicityCode" onChange={handleChange}>
                        <option value="">Select Ethnicity</option>
                        <option value="1">Hispanic</option>
                        <option value="2">Latin American</option>
                        <option value="3">African</option>
                        <option value="4">Caribbean</option>
                        <option value="5">Indian</option>
                        <option value="6">Melanesian</option>
                        <option value="7">Chinese</option>
                        <option value="8">Japanese</option>
                        <option value="9">Korean</option>
                        <option value="10">Arabic</option>
                        <option value="11">European</option>
                        <option value="12">Other</option>
                    </select>
                </label><br /><br />
                <label>Department*:
                    <select name="DepartmentID" onChange={handleChange} required>
                        <option value="">Select Department</option>
                        <option value="1">General</option>
                        <option value="2">Optometry</option>
                        <option value="3">Cardiology</option>
                        <option value="4">Orthopedics</option>
                    </select>
                </label><br />
                <label>Address:
                    <input type="text" name="Address" onChange={handleChange} maxlength="100"/>
                </label>
                <label>Phone Number:
                    <input type="tel" placeholder="1234567890" name="PhoneNumber" onChange={handleChange} pattern="[0-9]{10}"/>
                </label><br />
                <label>Email:
                    <input type="email" placeholder="example@example.com" name="Email" onChange={handleChange} required/>
                </label>
            </form>
            <form>
                <label>Old Password:
                    <input type="text" placeholder="Password" name="OldPassword" onChange={handleChange} required/>
                </label>
                <label>New Password:
                    <input type="text" placeholder="Password" name="NewPassword" onChange={handleChange} required/>
                </label>
            </form>
        </div>

    );
};