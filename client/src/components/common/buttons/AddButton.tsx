import { FC } from 'react';
import {
	Button,
} from '@nextui-org/react';
import Icon from '@mdi/react';
import {
	mdiPlusCircle
} from '@mdi/js';
import {
	IAddAction,
} from '../../../helpers/modalControls.helpers';

interface IAddButton extends IAddAction {
	title: string;
}

const AddButton : FC<IAddButton> = (props: IAddButton) => {
	const { onOpen, title } = props;
	return (
		<Button color='primary' onPress={onOpen}>
			<Icon path={mdiPlusCircle} size={1} />
			{ title }
		</Button>
	);
}

export default AddButton
