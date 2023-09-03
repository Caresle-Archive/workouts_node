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
	isEdit?: boolean;
	onOpenChange: () => void;
	onClose: () => void;
	onSave?: () => void;
	onUpdate?: () => void;
}

const WeightForm : FC<IWeightForm> = (props: IWeightForm) => {
	const { isOpen, onOpenChange, title, onClose, onSave, onUpdate } = props;
	let { isEdit } = props;

	if (isEdit === undefined || isEdit === null)
		isEdit = false;

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
					{
						isEdit ? <Button color="primary" onPress={onUpdate}>Update</Button>
						: <Button color="primary" onPress={onSave}>Add</Button>
					}
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default WeightForm;
