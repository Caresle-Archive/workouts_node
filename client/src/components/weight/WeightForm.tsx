import { FC } from "react";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from "@nextui-org/react";

interface IWeightForm {
	title?: string;
	isOpen: boolean;
	onOpenChange: () => void;
}

const WeightForm : FC<IWeightForm> = (props: IWeightForm) => {
	const { isOpen, onOpenChange, title } = props;

	return (
		<>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
				<ModalContent>
					<ModalHeader>{ title }</ModalHeader>
					<ModalBody>Body of the modal</ModalBody>
					<ModalFooter>Modal footer</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default WeightForm;
