const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express();
require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.use(cookieParser())


const patientRoutes = require('./routes/patient');
const homeRoutes = require("./routes/home")

app.use('/patient', patientRoutes);
app.use('/', homeRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));  