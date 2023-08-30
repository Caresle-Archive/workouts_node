import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from 'next-themes';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes, { IRouteItem } from "./router";
import { NavBar } from './components/common/common';

const App = () => {
	const generateRouteForRouter = (route : IRouteItem) => {
		const { subRoutes } = route;

		if (subRoutes !== undefined && subRoutes?.length > 0) {
			return (
				<React.Fragment key={route.path}>
					{
						...subRoutes.map(subRoute => (
							<Route path={subRoute.path} Component={subRoute.component} key={subRoute.path} />
						))
					}
				</React.Fragment>
			);
		}

		return <Route path={route.path} Component={route.component} key={route.path} />;
	};

  return (
    <NextUIProvider>
			<ThemeProvider attribute="class" defaultTheme="dark">
				<main>
					<BrowserRouter>
						<NavBar />
						<Routes>
							{
								routes.map(generateRouteForRouter)
							}
						</Routes>
					</BrowserRouter>
				</main>
			</ThemeProvider>
    </NextUIProvider>
  );
};

export default App;
