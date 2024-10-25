import { useReactTable, getCoreRowModel, flexRender, getPaginationRowModel, getSortedRowModel, getFilteredRowModel, filterFns } from "@tanstack/react-table"
import { useState } from "react";
import '../SimpleTable/styles.css'
import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap";
import { DefaultColumnFilter } from "./components/DefaultColumnFilter";

export const SimpleTable = ({ data, columns, columnsWithoutFilter }) => {

    const [sorting, setSorting] = useState([]);
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting,
        },
        initialState: {
            pagination: {
                pageSize: 10
            }
        },
        onSortingChange: setSorting,
        getFilteredRowModel: getFilteredRowModel()
    })

    const cleanFilters = () => {
        table.resetColumnFilters()
        columns.forEach((column) => {
            // console.log(column.setFilterValue)
            const { filterValue, setFilterValue } = column;
            setFilterValue('')
        }
        );
    }

    return (
        <>
            <div className="d-flex justify-content-center m-5">
                <h5>Productos</h5>
                {/* <Button variant="primary" onClick={() => cleanFilters()}>Limpiar Filtros </Button> */}
            </div>
            <Table striped bordered responsive>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {
                                headerGroup.headers.map(header => (
                                    <th key={header.id} >
                                        <div onClick={header.column.getToggleSortingHandler()}>
                                            <div className="text-filter"> {header.column.columnDef.header}</div>
                                        </div>
                                        <div className="text-filter">{!columnsWithoutFilter.includes(header.column.columnDef.header) && <DefaultColumnFilter column={header.column} />}
                                        </div>
                                    </th>
                                ))
                            }
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        Página{' '}
                        <strong>
                            {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}
                        </strong>
                    </div>
                    <div className="col-10 text-end">
                        <strong>{data.length} registros</strong>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <button className="btn btn-primary col-1" onClick={() => table.setPageIndex(0)}>
                        {'<<'}
                    </button>
                    <button className="btn btn-primary col-1" disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>
                        {'<'}
                    </button>
                    <button className="btn btn-primary col-1" disabled={table.getState().pagination.pageIndex - 1 == table.getPageCount() - 2} onClick={() => table.nextPage()}>
                        {'>'}
                    </button>
                    <button className="btn btn-primary col-1" onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
                        {'>>'}
                    </button>
                </div>
            </div>
        </>
    )
}
