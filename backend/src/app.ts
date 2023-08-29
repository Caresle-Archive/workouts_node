import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'reflect-metadata';

import routesUser from './routes/user.routes';
import routesWeight from './routes/weight.routes';
import routesDeck from './routes/deck.routes';
import routesWorkouts from './routes/workouts.routes';
import routesWorkoutsLog from './routes/workoutsLog.routes';
import routesWorkoutsType from './routes/workoutsType.routes';

const app : Application = express();

// config
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.get('/', (req, res) => res.json({success: 'workouts_node api'}));

app.use(routesUser);
app.use(routesWeight);
app.use(routesDeck);
app.use(routesWorkouts);
app.use(routesWorkoutsLog);
app.use(routesWorkoutsType);

export default app;
