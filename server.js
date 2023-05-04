const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./MealRoutes');
const cors = require('cors');

require('dotenv').config();

mongoose.set("strictQuery", false)

const PORT = 8000 || process.env.port;

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('WE WERE CONNECTED TO MONGO'))
.catch((err) => console.log(err))

app.use(routes);

app.listen(PORT, () => {
	console.log(`SERVER IS LISTENING ON PORT ${PORT}`)
})

// Username: mamizheva85   Password: V9T3bSJJ2jylO13C
