import { FC } from 'react';
import {
	Button,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
	Tooltip,
	useDisclosure,
} from '@nextui-org/react';
import {
	ActionModal,
} from '../common/common';

interface IDeckRow {
	key: string;
}

const rows : IDeckRow[] = [];

const DeckTable : FC = () => {
	const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure();
	return (
		<>
			<ActionModal title='Delete Deck' text='Do you wish to delete the deck?'
				isOpen={isOpen} onOpenChange={onOpenChange} onClose={onClose}
				onPress={() => console.log('delete')}
			/>

			<Table aria-label='Deck table'>
				<TableHeader></TableHeader>
				<TableBody items={rows}>
					{
						(item) => (
							<TableRow key={item.key}>
								{
									(columnKey) => (
										<TableCell className='text-center'>
											{columnKey}
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
