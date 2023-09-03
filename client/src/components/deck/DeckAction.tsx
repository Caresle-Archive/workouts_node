import { FC } from 'react';
import {
	AddButton
} from '../common/common';
import { IAddAction } from '../../helpers/modalControls.helpers';

const DeckAction : FC<IAddAction> = (props: IAddAction) => {
	const { onOpen } = props;
	return (
		<AddButton onOpen={onOpen} title='Add deck' />
	);
}

export default DeckAction;
