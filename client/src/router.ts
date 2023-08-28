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
	}
];

export default routes;
