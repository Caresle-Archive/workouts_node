import { Router, Request, Response, NextFunction } from 'express';

export enum ERouterActions {
	GET,
	POST,
	PUT,
	PATCH,
	DELETE,
	ALL,
}

type TRouteFunction = (req: Request, res: Response) => unknown;
type TRouteFunctionNext = (req: Request, res: Response, next: NextFunction) => unknown;

interface IRouterElement {
	path: string;
	actions: ERouterActions[],
	functions: Array<TRouteFunction>;
	middlewares?: Array<TRouteFunctionNext>;
}

type IRouterElementAll = Omit<IRouterElement, 'actions'>;

export class RouterGenerator {
	static resourceApi(res: IRouterElementAll) : Router {
		const routes = Router();

		if (res.functions.length !== 4) return routes;

		if (res.middlewares !== undefined)
			routes.use(res.path, ...res.middlewares);

		routes.get(res.path, res.functions[0]);
		routes.post(res.path, res.functions[1]);
		routes.put(`${res.path}/:id`, res.functions[2]);
		routes.delete(`${res.path}/:id`, res.functions[3]);

		return routes;
	}
}
