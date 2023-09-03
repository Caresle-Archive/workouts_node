import { FC, useState } from 'react';
import {
	DeckAction
} from '../components/deck/deck';
import {
	onOpenModal,
	onCloseModal,
	onOpenChangeModal,
} from '../helpers/modalControls.helpers'

const DeckView : FC = () => {
	const [ showCreate, setShowCreate ] = useState(false);

	return (
		<div className='p-10 max-w-5xl mx-auto'>
			<DeckAction onOpen={() => onOpenModal(setShowCreate)} />


		</div>
	);
};

export default DeckView;
