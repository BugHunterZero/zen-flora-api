const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
require('dotenv').config();

const plantRoutes = require('./routes/plants');
const homeRoutes = require('./routes/home');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/plants', plantRoutes);
app.use('/api/home', homeRoutes);

sequelize.authenticate().then(() => {
    console.log('Database connected!');
}).catch(err => {
    console.error('DB Connection failed:', err);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
