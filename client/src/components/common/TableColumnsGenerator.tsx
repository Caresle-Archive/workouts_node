import { FC } from "react";
import {
	TableColumn,
	TableHeader,
} from "@nextui-org/react";

interface ITableColumnsGenerator {
	columns: string[];
}

const TableColumnsGenerator : FC<ITableColumnsGenerator> = (props: ITableColumnsGenerator) => {
	const { columns } = props;
	return (
		<TableHeader>
			{
				...columns.map(column => (
					<TableColumn key={column}>{column}</TableColumn>
					))
			}
		</TableHeader>
	)
};

export default TableColumnsGenerator;
