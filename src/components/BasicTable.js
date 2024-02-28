import React, {useMemo} from 'react'
import {useTable} from 'react-table'
import MOCKDATA from './MOCKDATA'
import COLUMNS from './columns'
import './table.css'

//for the component part, import useTable, the data, and the Columns association file.  Then take the useTable hook. In this hook we specify the number of columns and rows by adding in an object with columns: COLUMNS, data: MOCKDATA.  This will flesh out the table for us. But, react recommends using useMemo to assign data to variables before using in useTable. This is done so that all the data is not re-rendered on every render. So we import useMemo and use that hook as below:
//Next step is to create a table instance from the hook called tableInstance
//now create a basic table in jsx <table><thead><tr><th>, etc

export const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCKDATA, []);
  const tableInstance = useTable({
    columns: columns,
    data: data,
  });

  //next is to destructure the tableInstance to get the functions and arrays needed to make the table.  Note the destructuring can happen directly from the useTable instance, no need to create the tableInstance variable, if desired.(see below)

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  /*const{
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,prepareRow
    }=useTable({
        columns: columns,
        data:data
    })*/

  //add getTablePros as a destructure function to table with spread operator
  //add getTableBodyProps as a destructured function to body with spread operator
  //headerGroups is an array which will use map to generate rows and headers. the tr tag will destrucure ...headerGroup.getHeaderGroupProps() for a headerGroup.headers array.
  //this array will use map to provide for each column a table header text, provided by the destructuring of the getHeaderProps() function.
  //the rows portion of the table body follows a similar approach with some difference as can be seen below.
  //the final step is to provide styling css

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
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
