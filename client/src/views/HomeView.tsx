import { Button } from "@nextui-org/react";
import { FC } from "react";

const HomeView : FC = () => {
	return (
		<div className="p-10 w-11/12 mx-auto">
			<h1 className="text-center uppercase font-bold">Welcome to Workouts</h1>
			<Button color="primary" className="mx-2">Primary</Button>
			<Button color="success" className="mx-2">Success</Button>
			<Button color="secondary" className="mx-2">Secondary</Button>
			<Button color="danger" className="mx-2">Danger</Button>
			<Button color="default" className="mx-2">Default</Button>
			<Button color="warning" className="mx-2">Warning</Button>
		</div>
	);
};

export default HomeView;
