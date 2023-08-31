import { FC } from "react";
import {
	Navbar as NavNext,
	NavbarContent,
	NavbarItem,
	NavbarBrand,
	Dropdown,
	DropdownMenu,
	DropdownItem,
	DropdownTrigger,
} from '@nextui-org/react';
import UserMenu from "./UserMenu";
import routes, { IGeneralRoute, IRouteItem } from "../../router";
import { Link } from "react-router-dom";

const generateSubRoutes = (subRoute: IGeneralRoute) => {
	return (
		<DropdownItem key={subRoute.path}
			aria-label={subRoute.name}
		>
			{/* <div style={{ backgroundColor: 'blue'}}> */}

			<Link to={subRoute.path} className="block">
				{subRoute.name}
			</Link>
			{/* </div> */}
		</DropdownItem>
	);
}

const generateRoutes = (route: IRouteItem) => {
	const { subRoutes } = route;

	if (subRoutes === undefined || subRoutes?.length <= 0) {
		return (
			<NavbarItem key={route.path} aria-label={route.name}>
				<Link to={route.path}>
					{route.name}
				</Link>
			</NavbarItem>

		)
	}

	return (
		<NavbarItem key={route.path} aria-label={route.name}>
			<Dropdown>
				<DropdownTrigger className="cursor-pointer">
					{ route.name }
				</DropdownTrigger>

				{/* SubRoutes menu */}
				<DropdownMenu aria-label={`menu-${route.name}`}>
					{
						subRoutes.map(subRoute => generateSubRoutes(subRoute))
					}
				</DropdownMenu>
			</Dropdown>
		</NavbarItem>
	);
};

const NavBar : FC = () => {
	return (
		<NavNext isBordered={true} className="shadow-sm shadow-gray-600">
			{/* Brand */}
			<NavbarBrand>
				Workouts
			</NavbarBrand>

			{/* Content */}
			<NavbarContent>
				{
					routes.map(route => (
						generateRoutes(route)
					))
				}
				{/* User profile */}
				<UserMenu />
			</NavbarContent>
		</NavNext>
	);
};

export default NavBar;
