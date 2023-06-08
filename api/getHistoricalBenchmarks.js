import dotenv from 'dotenv';
dotenv.config();

module.exports = (req, res) => {
	res.status(200).send('Hello, World!');
};
