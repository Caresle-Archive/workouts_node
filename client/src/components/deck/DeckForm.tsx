import { FC } from "react";
import {
	IFormDetails,
} from '../../helpers/modalControls.helpers';
import {
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
} from "@nextui-org/react";
import { FooterModal } from "../common/common";

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
				<FooterModal isEdit={isEdit} onClose={onClose} onSave={onSave} onUpdate={onUpdate} />
			</ModalContent>
		</Modal>
	);
};

export default DeckForm;
