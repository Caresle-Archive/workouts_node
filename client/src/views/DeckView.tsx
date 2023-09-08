import { FC, useState } from 'react';
import {
	DeckAction, DeckForm, DeckTable
} from '../components/deck/deck';
import {
	onOpenModal,
	onCloseModal,
	onOpenChangeModal,
} from '../helpers/modalControls.helpers'

const DeckView : FC = () => {
	const [ showCreate, setShowCreate ] = useState(false);
	const [ showEdit, setShowEdit ] = useState(false);

	return (
		<div className='p-10 max-w-5xl mx-auto'>
			<DeckAction onOpen={() => onOpenModal(setShowCreate)} />

			<DeckForm title='open' isOpen={showCreate} onClose={() => onCloseModal(setShowCreate)}
				onOpenChange={() => onOpenChangeModal(showCreate, setShowCreate)}
			/>
			<DeckForm title='edit' isOpen={showEdit} onClose={() => onCloseModal(setShowEdit)}
				onOpenChange={() => onOpenChangeModal(showEdit, setShowEdit)} isEdit
			/>

			<div className='my-5'></div>
			<DeckTable openEdit={() => onOpenModal(setShowEdit)} />
		</div>
	);
};

export default DeckView;
