import React, {useMemo, useRowSelect} from 'react'
import {useTable} from 'react-table'
import MOCKDATA from './MOCKDATA'
import COLUMNS from './columns'
import { CheckBox } from './CheckBox'
import './table.css'



export const SelectRows = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCKDATA, []);
 
//to make the table smaller we will slice the rows to ten, firstPageRows.  The replace rows in body with firstPageRows. 1Create a checkbox component.2//Meh, this is complicated and I can't get it to work
  const{
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,prepareRow,
        selectedFlatRows,
        getToggleAllRowsSelectedProps,
        getToggleRowSelected,
    }=useTable({
        columns: columns,
        data:data,
        
    }, useRowSelect,
    (hooks)=>{
        hooks.visibleColumns.push((columns)=>{
            return [
                {
                    id: 'selection',
                    Header:({getToggleAllRowsSelectedProps})=>(
                        <CheckBox {...getToggleAllRowsSelectedProps()} />
                    ),
                    Cell:({row})=>(
                        <CheckBox {...row.getToggleRowSelected} />
                    )
                },
                ...columns
            ]
        })
    })

const firstPageRows = rows.slice(0,10)

  return <>
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
        {firstPageRows.map((row) => {
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
    <pre>
        <code>
            {JSON.stringify(
                {selectedFlatRows: selectedFlatRows.map((row)=> row.original),}, null, 2
            )}
        </code>
      </pre>
    </>
  
}
