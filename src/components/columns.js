
//to prepare table data for use with the react-table toolkit, create this file which will accociate each column header with the correct database key.
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