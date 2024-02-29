import React, {useMemo} from 'react'
import {useTable, useGlobalFilter} from 'react-table'
import MOCKDATA from './MOCKDATA'
import COLUMNS from './columns'
import './table.css'
import GlobalFilter from './GlobalFilter'



export const FilterTable = () => {

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCKDATA, []);

//Create a component to input search term. GlobalFilter, which accepts props from here.  Import useGlobalFilter and add it as the second argument of useTable.  Destructure two additional things from useTable, state and setGlobalFilter. From state destructure globalFilter. Add the GlobalFilter component to the jsx and add in the filter, setFilter props as below.  This is pretty much it for global filtering spreadsheet.

  const {getTableProps,getTableBodyProps, headerGroups, rows,prepareRow, state, setGlobalFilter} = useTable({
    columns: columns,
    data: data,
  }, useGlobalFilter);

const {globalFilter} = state

  return (
    <>
    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getHeaderProps)}>{column.render("Header")}
              
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
    </>
  );
}
