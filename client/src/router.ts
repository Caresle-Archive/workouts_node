import { FC } from "react";
import Views from "./views/Views";

export interface IRouteItem {
	name: string;
	path: string;
	component: FC;
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
	}
];

export default routes;
