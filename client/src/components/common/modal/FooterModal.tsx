import { FC } from 'react';
import {
	ModalFooter,
	Button,
} from '@nextui-org/react';

interface IFooterProps {
	onClose: () => void;
	onUpdate?: () => void;
	onSave?: () => void;
	isEdit: boolean;
}

const FooterModal : FC<IFooterProps> = (props: IFooterProps) => {
	const { isEdit, onClose, onSave, onUpdate } = props;

	return (
		<ModalFooter>
			<Button color="default" variant="bordered" onPress={onClose}>Cancel</Button>
			{
					isEdit ? <Button color="primary" onPress={onUpdate}>Update</Button>
					: <Button color="primary" onPress={onSave}>Add</Button>
			}
		</ModalFooter>
	);
};

export default FooterModal;
