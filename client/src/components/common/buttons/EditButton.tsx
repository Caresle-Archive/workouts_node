import { FC } from "react";
import {
	Tooltip,
	Button,
} from '@nextui-org/react';
import Icon from "@mdi/react";
import { mdiPencil } from '@mdi/js';

interface IEditButton {
	openEdit: () => void;
}

const EditButton : FC<IEditButton> = (props: IEditButton) => {
	const { openEdit } = props;

	return (
		<Tooltip color="secondary" content="Edit Weight" delay={500}>
			<Button color="default" isIconOnly radius="full" variant="ghost" onPress={openEdit}>
				<Icon path={mdiPencil} size={1}/>
			</Button>
		</Tooltip>
	);
};

export default EditButton;
