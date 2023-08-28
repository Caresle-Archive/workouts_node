import { NextUIProvider} from "@nextui-org/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./router";
import { NavBar } from './components/common/common';

const App = () => {
  return (
    <NextUIProvider>
      <main className="dark text-foreground bg-background h-[100vh]">
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
    </NextUIProvider>
  );
};

export default App;
