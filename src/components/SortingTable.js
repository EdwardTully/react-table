import React, {useMemo} from 'react'
import {useTable, useSortBy} from 'react-table'
import MOCKDATA from './MOCKDATA'
import COLUMNS from './columns'
import './table.css'



export const SortingTable = () => {

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCKDATA, []);

//to enable sorting, import useSortBy hook, and add as the second parameter of the useTable.  in the th tag, pass in (...column.getHeaderProps(column.getSortByToggleProps())).  The span with the terniery tests available conditions and is used to provide icon flags for the sort status.  Also, all columns are sortable...

  const {getTableProps,getTableBodyProps, headerGroups, rows,prepareRow} = useTable({
    columns: columns,
    data: data,
  }, useSortBy);


  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getHeaderProps(column.getSortByToggleProps()))}>{column.render("Header")}
              <span>{column.isSorted ? (column.isSortedDesc ? '-': '^'): ''}</span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
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
