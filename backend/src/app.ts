import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'reflect-metadata';

const app : Application = express();

// config
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


app.get('/', (req, res) => res.json({success: true}));

export default app;
