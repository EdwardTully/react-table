Follow along with codevolution tutorial on React Table.

//to prepare table data for use with the react-table toolkit, create this file which will associate each column header with the correct database key.
//the footer key:value is added for lesson to include a footer in the table

const COLUMNS = [
  { Header: "id", Footer: "id",accessor: "id" },
  { Header: "First Name", Footer: "First Name",accessor: "first_name" },
  { Header: "Last Name", Footer: "Last Name",accessor: "last_name" },
  { Header: "Date of Birth",Footer: "Date of Birth", accessor: "date_of_birth" },
  { Header: "Country", Footer: "Country", accessor: "country" },
  { Header: "Phone",Footer: "Phone", accessor: "phone" },
];
export default COLUMNS

//for the component part, import useTable, the data, and the Columns association file.  Then take the useTable hook. In this hook we specify the number of columns and rows by adding in an object with columns: COLUMNS, data: MOCKDATA.  This will flesh out the table for us. But, react recommends using useMemo to assign data to variables before using in useTable. This is done so that all the data is not re-rendered on every render. So we import useMemo and use that hook as below:
//Next step is to create a table instance from the hook called tableInstance
//now create a basic table in jsx <table><thead><tr><th>, etc

 //next is to destructure the tableInstance to get the functions and arrays needed to make the table.  Note the destructuring can happen directly from the useTable instance, no need to create the tableInstance variable, if desired.(see below)

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

  //to enable sorting, import useSortBy hook, and add as the second parameter of the useTable.  in the th tag, pass in (...column.getHeaderProps(column.getSortByToggleProps())).  The span with the terniery tests available conditions and is used to provide icon flags for the sort status.  Also, all columns are sortable...