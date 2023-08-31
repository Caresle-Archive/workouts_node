import { FC } from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
	getKeyValue,
} from "@nextui-org/react";

const columns = [
	{
		key: 'weight',
		label: 'Weight',
	},
	{
		key: 'date',
		label: 'Date',
	},
	{
		key: 'actions',
		label: 'Actions',
	},
];

const rows = [
	{
		key: '1',
		weight: "333",
		date: Date.now(),
	},
	{
		key: '2',
		weight: "353",
		date: Date.now(),
	},
]

const WeightTable : FC = () => {

	return (
		<>
			<Table aria-label="Weight table">
				<TableHeader columns={columns}>
					{ (column => (
						<TableColumn key={column.key} className="text-center">
							{column.label}
						</TableColumn>
					))}
				</TableHeader>
				<TableBody items={rows}>
					{
						(item) => (
							<TableRow key={item.key}>
								{(columnKey) => <TableCell className="text-center">{getKeyValue(item, columnKey)}</TableCell>}
							</TableRow>
						)
					}
				</TableBody>
			</Table>
		</>
	);
};

export default WeightTable;
