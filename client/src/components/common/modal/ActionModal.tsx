import { FC } from 'react';
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	Button,
} from '@nextui-org/react';

interface IActionModal {
	isOpen: boolean;
	title: string;
	text: string;
	onClose: () => void;
	onOpenChange: () => void;
	onPress: () => void;
}

const ActionModal : FC<IActionModal> = (props: IActionModal) => {
	const { isOpen, onClose, onOpenChange, text, title, onPress } = props;
	return (
		<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
			<ModalContent>
				{/* title */}
				<ModalHeader>{ title }</ModalHeader>

				{/* Body */}
				<ModalBody>
					<p>
						{ text }
					</p>
				</ModalBody>

				<ModalFooter>
					<Button color='default' variant='bordered' onPress={onClose}>
						Cancel
					</Button>
					<Button color='primary' onPress={onPress}>Accept</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default ActionModal;
