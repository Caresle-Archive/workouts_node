import { FC } from "react";
import Views from "./views/Views";

export interface IGeneralRoute {
	name: string;
	path: string;
	component: FC;
}

export interface IRouteItem extends IGeneralRoute {
	subRoutes?: IGeneralRoute[];
}

const routes : IRouteItem[] = [
	{
		path: '/',
		name: 'home',
		component: Views.home,
	},
	{
		path: '/weight',
		name: 'weight',
		component: Views.weight,
	},
	{
		path: '/decks',
		name: 'decks',
		component: Views.deck,
	},
	{
		path: '/workouts',
		name: 'workouts',
		component: Views.workouts,
		subRoutes: [
			{
				path: '/workouts',
				name: 'workouts',
				component: Views.workouts,
			},
			{
				path: '/workouts/list',
				name: 'list',
				component: Views.workoutsList,
			},
			{
				path: '/workouts/log',
				name: 'log',
				component: Views.workoutsLog,
			},
		],
	},
	{
		path: '/user',
		name: 'user',
		component: Views.user,
		subRoutes: [
			{
				path: '/user/name',
				name: 'user-name',
				component: Views.user,
			}
		]
	},
];

export default routes;
