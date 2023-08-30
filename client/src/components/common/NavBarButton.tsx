import { FC } from 'react';
import {
	Button
} from '@nextui-org/react';

interface INavBarButton {
	text: string;
}

const NavBarButton : FC<INavBarButton> = (props: INavBarButton) => {
	const { text } = props;

	return (
		<Button
			disableRipple
			elementType={'button'}
			onPress={() => {}}
			radius="sm"
			variant="faded"
		>
			{ text }
		</Button>
	);
};

export default NavBarButton;
