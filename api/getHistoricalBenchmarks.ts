import { VercelRequest, VercelResponse } from '@vercel/node';
import dotenv from 'dotenv';

dotenv.config();

export default (req: VercelRequest, res: VercelResponse): void => {
	res.status(200).send('Hello, World!');
};
