import { FC, useState } from 'react';
import {
	DeckAction, DeckForm
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

			<DeckForm title='open' isOpen={showCreate} onClose={() => onCloseModal(setShowCreate)}
				onOpenChange={() => onOpenChangeModal(showCreate, setShowCreate)}
			/>
		</div>
	);
};

export default DeckView;
