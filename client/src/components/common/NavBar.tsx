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
import Icon from '@mdi/react';
import {
	mdiArrowDown,
} from '@mdi/js';
import UserMenu from "./UserMenu";

const NavBar : FC = () => {
	return (
		<NavNext>
			<NavbarContent>
				<NavbarBrand>
					Workouts
				</NavbarBrand>
				<Dropdown>
					<NavbarItem>
						<DropdownTrigger>
							<Button
								disableRipple endContent={
									<Icon path={mdiArrowDown} />
								}
								radius="sm"
								variant="faded"
							>
								Test
							</Button>
						</DropdownTrigger>
					</NavbarItem>
					<DropdownMenu>
						<DropdownItem>
							Test
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>

				<UserMenu />
			</NavbarContent>
		</NavNext>
	);
};

export default NavBar;
