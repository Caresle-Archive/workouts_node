import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from 'next-themes';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./router";
import { NavBar } from './components/common/common';

const App = () => {
  return (
    <NextUIProvider>
			<ThemeProvider attribute="class" defaultTheme="dark">
				<main>
					<BrowserRouter>
						<NavBar />
						<Routes>
							{
								routes.map(route => (
									<Route path={route.path} Component={route.component} key={route.path} />
									))
								}
						</Routes>
					</BrowserRouter>
				</main>
			</ThemeProvider>
    </NextUIProvider>
  );
};

export default App;
