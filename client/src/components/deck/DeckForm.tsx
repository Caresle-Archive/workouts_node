import { FC } from "react";
import {
	IFormDetails,
} from '../../helpers/modalControls.helpers';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";

const DeckForm : FC<IFormDetails> = (props: IFormDetails) => {
	const {
		isOpen, onClose, onOpenChange, onSave, onUpdate, title,
	} = props;

	let { isEdit } = props;

	if (isEdit === undefined || isEdit === null)
		isEdit = false;

	return (
		<Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl">
			<ModalContent>
				<ModalHeader>{title}</ModalHeader>
				<ModalBody>

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

export default DeckForm;
