import { Button } from "@nextui-org/react";
import { FC } from "react";

interface IWeightActions {
	onOpen: () => void;
}

const WeightActions : FC<IWeightActions> = (props: IWeightActions) => {
	const { onOpen } = props;
	return (
		<>
			<Button color="primary" onPress={onOpen}>Add Weight</Button>
		</>
	);
};

export default WeightActions;
