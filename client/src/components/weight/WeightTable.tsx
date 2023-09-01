import { FC } from "react";
import {
	Button,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from "@nextui-org/react";
import React from "react";

enum ColumnKeys {
	WEIGHT = "weight",
	DATE = "date",
	ACTIONS = "actions",
}

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

interface IWeightRow {
	key: string;
	weight: string;
	date: number;
	actions: string;
}

const rows : IWeightRow[] = [
	{
		key: '1',
		weight: "333",
		date: Date.now(),
		actions: "",
	},
	{
		key: '2',
		weight: "353",
		date: Date.now(),
		actions: "",
	},
]

const WeightTable : FC = () => {
	const renderCell = React.useCallback((weight: IWeightRow, columnKey: React.Key) => {
		if (columnKey == ColumnKeys.ACTIONS) {
			return (
				<>
					<Button color="secondary" isIconOnly radius="full" variant="ghost"></Button>
					<Button color="danger" isIconOnly className="mx-2" variant="ghost"
						radius="full"
					></Button>
				</>
			)
		}
		return <span>{weight[columnKey as keyof typeof weight]}</span>
	}, []);

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
								{(columnKey) => (
									<TableCell className="text-center">
										{ renderCell(item, columnKey)}
									</TableCell>
								)}
							</TableRow>
						)
					}
				</TableBody>
			</Table>
		</>
	);
};

export default WeightTable;
