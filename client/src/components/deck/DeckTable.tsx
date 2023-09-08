import { FC } from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
	useDisclosure,
} from '@nextui-org/react';
import {
	ActionModal,
	DeleteButton,
	EditButton,
} from '../common/common';
import React from 'react';

interface IDeckRow {
	key: string;
	name: string;
}

enum ColumnKeys {
	ACTIONS = 'actions',
}

const columns = [
	{
		key: 'name',
		label: 'name',
	},
	{
		key: 'actions',
		label: 'actions',
	}
];

const rows : IDeckRow[] = [
	{
		key: '1',
		name: 'Deck 1',
	},
	{
		key: '2',
		name: 'Deck 2',
	},
	{
		key: '3',
		name: 'Deck 3',
	},
];

interface IDeckTable {
	openEdit: () => void;
}

const DeckTable : FC<IDeckTable> = (props: IDeckTable) => {
	const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure();
	const { openEdit } = props;

	const renderCell = React.useCallback((deck: IDeckRow, columnKey: React.Key, onOpen: () => void) => {
		if (columnKey != ColumnKeys.ACTIONS)
			return <span>{deck[columnKey as keyof typeof deck]}</span>

		return (
			<>
				<EditButton openEdit={openEdit} />
				<DeleteButton onOpen={onOpen} />
			</>
		);
	}, [openEdit]);

	return (
		<>
			<ActionModal title='Delete Deck' text='Do you wish to delete the deck?'
				isOpen={isOpen} onOpenChange={onOpenChange} onClose={onClose}
				onPress={() => console.log('delete')}
			/>

			<Table aria-label='Deck table'>
				<TableHeader columns={columns}>
					{
						(column => (
							<TableColumn key={column.key} className='text-center'>
								{ column.label }
							</TableColumn>
						))
					}
				</TableHeader>
				<TableBody items={rows}>
					{
						(item) => (
							<TableRow key={item.key}>
								{
									(columnKey) => (
										<TableCell className='text-center'>
											{renderCell(item, columnKey, onOpen)}
										</TableCell>
									)
								}
							</TableRow>
						)
					}
				</TableBody>
			</Table>
		</>
	);
};

export default DeckTable;
