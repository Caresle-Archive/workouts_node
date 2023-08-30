import { FC } from "react";
import {
	Avatar,
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from '@nextui-org/react';

const UserMenu : FC = () => {
	return (
		<>
			<Dropdown>
				<DropdownTrigger>
					<Avatar
						color="primary"
						isBordered
						as="button"
						className="transition-transform"
					/>
				</DropdownTrigger>
				<DropdownMenu variant="flat" aria-label="menu-user">
					<DropdownItem color="danger" aria-label="menu-user-log-out">
						Log Out
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</>
	);
};

export default UserMenu;
