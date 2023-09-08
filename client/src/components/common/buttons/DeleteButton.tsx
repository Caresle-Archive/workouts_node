import { FC } from "react";
import {
	Tooltip,
	Button,
} from '@nextui-org/react';
import Icon from "@mdi/react";
import { mdiTrashCan } from '@mdi/js';

interface IDeleteButton {
	onOpen: () => void;
}

const DeleteButton : FC<IDeleteButton> = (props: IDeleteButton) => {
	const { onOpen } = props;

	return (
		<Tooltip color="danger" content="Delete Weight" delay={500}>
			<Button color="danger" isIconOnly className="mx-2" variant="ghost"
				radius="full" onPress={onOpen}
				>
				<Icon path={mdiTrashCan} size={1}/>
			</Button>
		</Tooltip>
	);
};

export default DeleteButton;
