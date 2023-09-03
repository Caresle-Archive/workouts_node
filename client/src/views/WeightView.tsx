import { FC, useState } from 'react';
import {
	WeightActions,
	WeightTable,
	WeightForm,
} from '../components/weight/weight';
import { useDisclosure } from '@nextui-org/react';
const WeightView : FC = () => {
	const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
	const [isOpenEdit, setIsOpenEdit] = useState(false);

	const openIsEdit = () => setIsOpenEdit(true);
	const openChangeEdit = (value : boolean) => {
		setIsOpenEdit(!value);
	}
	const closeIsEdit = () => setIsOpenEdit(false);

	return (
		<div className='p-10 max-w-5xl mx-auto'>
			<WeightActions onOpen={onOpen}/>

			{/* Add weight */}
			<WeightForm
				isOpen={isOpen} onOpenChange={onOpenChange} title='New Weight'
				onClose={onClose} onSave={() => console.log('save')}
			/>

			{/* Edit Weight */}
			<WeightForm
				isOpen={isOpenEdit} onOpenChange={() => openChangeEdit(isOpenEdit)} title='Edit Weight'
				onClose={closeIsEdit} onUpdate={() => console.log('update')} isEdit
			/>

			<div className='my-5'></div>
			<WeightTable openEdit={openIsEdit} />
		</div>
	);
};

export default WeightView;
