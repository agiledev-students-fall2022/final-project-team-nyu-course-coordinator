import React, {useMemo}  from 'react'
import { useTable, useFilters } from 'react-table'

function FilterCart(props){ 
  // filter cart component

    const ColumnFilter= ({column})=>{ 
      // column filter component
        const {filterValue, setFilter} = column 
        // filterValue is the value of the filter, setFilter is the function to set the filter value
        return ( // return the filter input
            <span>
                Search:{' '}
                <input
                    value={filterValue || ""}
                    onChange={(e)=> setFilter(e.target.value)}
                />
            </span>
        )
    }



// removed unnessary mockaroo data

    


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
      } = useTable(
        {
          columns,
          data
        },
        useFilters
      )


    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                        {column.render("Header")}
                        <div>
                        {column.canFilter ? column.render("Filter") : null}
                        </div>
                    </th>
                    ))}
                </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                            return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                        })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}


export default FilterCart