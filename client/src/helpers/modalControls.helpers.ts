import React from "react";

export type modalActionDispatch = React.Dispatch<React.SetStateAction<boolean>>;

export interface IAddAction {
	onOpen: () => void;
}

export interface IFormDetails {
	title?: string;
	isOpen: boolean;
	isEdit?: boolean;
	onOpenChange: () => void;
	onClose: () => void;
	onSave?: () => void;
	onUpdate?: () => void;
}

export const onOpenModal = (state: modalActionDispatch) => state(true);
export const onCloseModal = (state: modalActionDispatch) => state(false);
export const onOpenChangeModal = (value: boolean, state: modalActionDispatch) => state(!value);
