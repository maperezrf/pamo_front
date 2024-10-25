import MUIDataTable from "mui-datatables";
import React from 'react'

export const TableComponent = ({ data, columns, options }) => {
    return (
        <MUIDataTable
            title={"Productos Shopify"}
            data={data}
            columns={columns}
            options={options}
        />
    )
}
