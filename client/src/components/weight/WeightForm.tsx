import { FC } from "react";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	Input,
} from "@nextui-org/react";

interface IWeightForm {
	title?: string;
	isOpen: boolean;
	onOpenChange: () => void;
	onClose: () => void;
}

const WeightForm : FC<IWeightForm> = (props: IWeightForm) => {
	const { isOpen, onOpenChange, title, onClose } = props;

	return (
		<Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl">
			<ModalContent>
				<ModalHeader>{ title }</ModalHeader>
				<ModalBody>
					<div className="flex">
						<Input placeholder="Weight" type="number" variant="faded" label="Weight" className="mx-1" />
						<Input placeholder="Date" type="date" variant="faded" label="Date" className="mx-1" />
					</div>
				</ModalBody>
				<ModalFooter>
					<Button color="default" variant="bordered" onPress={onClose}>Cancel</Button>
					<Button color="primary">Add</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default WeightForm;
