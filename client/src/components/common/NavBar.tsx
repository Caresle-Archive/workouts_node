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
	Button,
} from '@nextui-org/react';
import UserMenu from "./UserMenu";
import routes, { IGeneralRoute, IRouteItem } from "../../router";
import NavBarButton from "./NavBarButton";
import Icon from '@mdi/react';
import {
	mdiArrowDown,
} from '@mdi/js';

const generateSubRoutes = (subRoute: IGeneralRoute) => {
	return <DropdownItem key={subRoute.path}>{subRoute.name}</DropdownItem>;
}

const generateRoutes = (route: IRouteItem) => {
	const { subRoutes } = route;

	if (subRoutes === undefined || subRoutes?.length <= 0) {
		return (
			<NavbarItem key={route.path}>
				<NavBarButton text={route.name} />
			</NavbarItem>
		)
	}

	return (
		<NavbarItem key={route.path}>
			<Dropdown>
				<DropdownTrigger>
					<Button
						disableRipple endContent={
							<Icon path={mdiArrowDown} />
						}
						radius="sm"
						variant="faded"
					>
						{ route.name }
					</Button>
				</DropdownTrigger>
				{/* SubRoutes menu */}
				<DropdownMenu>
					{
						...subRoutes.map(subRoute => generateSubRoutes(subRoute))
					}
				</DropdownMenu>
			</Dropdown>
		</NavbarItem>
	);
};

const NavBar : FC = () => {
	return (
		<NavNext>
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
