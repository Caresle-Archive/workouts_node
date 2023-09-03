import React from "react";

export type modalActionDispatch = React.Dispatch<React.SetStateAction<boolean>>;

export interface IAddAction {
	onOpen: () => void;
}

export const onOpenModal = (state: modalActionDispatch) => state(true);
export const onCloseModal = (state: modalActionDispatch) => state(false);
export const onOpenChangeModal = (value: boolean, state: modalActionDispatch) => state(!value);
