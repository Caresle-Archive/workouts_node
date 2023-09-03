import { FC } from "react";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	Input,
} from "@nextui-org/react";
import {
	IFormDetails,
} from '../../helpers/modalControls.helpers'
import { FooterModal } from "../common/common";

const WeightForm : FC<IFormDetails> = (props: IFormDetails) => {
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
				<FooterModal onClose={onClose} onSave={onSave} onUpdate={onUpdate} isEdit={isEdit} />
			</ModalContent>
		</Modal>
	);
};

export default WeightForm;
