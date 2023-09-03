import { FC, useState } from 'react';
import {
	WeightActions,
	WeightTable,
	WeightForm,
} from '../components/weight/weight';
import {
	onOpenModal,
	onCloseModal,
	onOpenChangeModal,
} from '../helpers/modalControls.helpers';

const WeightView : FC = () => {
	const [ isOpenEdit, setIsOpenEdit ] = useState(false);
	const [ isOpenCreate, setIsOpenCreate ] = useState(false);

	return (
		<div className='p-10 max-w-5xl mx-auto'>
			<WeightActions onOpen={() => onOpenModal(setIsOpenCreate)}/>

			{/* Add weight */}
			<WeightForm
				isOpen={isOpenCreate} onOpenChange={() => onOpenChangeModal(isOpenCreate, setIsOpenCreate)} title='New Weight'
				onClose={() => onCloseModal(setIsOpenCreate)} onSave={() => console.log('save')}
			/>

			{/* Edit Weight */}
			<WeightForm
				isOpen={isOpenEdit} onOpenChange={() => onOpenChangeModal(isOpenEdit, setIsOpenEdit)} title='Edit Weight'
				onClose={() => onCloseModal(setIsOpenEdit)} onUpdate={() => console.log('update')} isEdit
			/>

			<div className='my-5'></div>
			<WeightTable openEdit={() => onOpenModal(setIsOpenEdit)} />
		</div>
	);
};

export default WeightView;
