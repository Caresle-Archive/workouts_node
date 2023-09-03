import { FC } from 'react';
import {
	WeightActions,
	WeightTable,
	WeightForm,
} from '../components/weight/weight';
import { useDisclosure } from '@nextui-org/react';
const WeightView : FC = () => {
	const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

	return (
		<div className='p-10 max-w-5xl mx-auto'>
			<WeightActions onOpen={onOpen}/>

			{/* Add weight */}
			<WeightForm
				isOpen={isOpen} onOpenChange={onOpenChange} title='New Weight'
				onClose={onClose}
			/>

			<div className='my-5'></div>
			<WeightTable />
		</div>
	);
};

export default WeightView;
