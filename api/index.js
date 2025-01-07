const express = require('express');
const dotenv = require('dotenv');
const packageJson = require('../package.json');
const companyRoutes = require('./server/routes/companyRoutes');

// Initialize environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/company', companyRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT} and version: ${packageJson.version}`);
});


app.get("*", (req, res) =>
	res.status(200).send({
		message: `Welcome to Neure API up and running and version : ${packageJson.version}`,
	}),
);