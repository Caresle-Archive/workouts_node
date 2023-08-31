import { FC } from 'react';
import {
	WeightActions,
	WeightTable,
} from '../components/weight/weight';
const WeightView : FC = () => {
	return (
		<div className='p-10 max-w-5xl mx-auto'>
			<WeightActions />
			<div className='my-5'></div>
			<WeightTable />
		</div>
	);
};

export default WeightView;
