import { FC } from "react";
import {
	AddButton,
} from '../common/common';
import {
	IAddAction,
} from '../../helpers/modalControls.helpers';


const WeightActions : FC<IAddAction> = (props: IAddAction) => {
	const { onOpen } = props;
	return (
		<AddButton onOpen={onOpen} title="Add Weight" />
	);
};

export default WeightActions;
