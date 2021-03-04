import * as React from "react";
import { TableBuilder, TableBuilderColumn } from "baseui/table-semantic";
import { Pagination } from "baseui/pagination";
import { DatePicker } from "baseui/datepicker";
import { Block } from "baseui/block";

const ROW_LIMIT = 10;

const UsageTable = () => {
  const [date, setDate] = React.useState([new Date()]);
  const [sortColumn, setSortColumn] = React.useState("bar");
  const [sortAsc, setSortAsc] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [data] = React.useState([
    {
      name: "Sarah Brown",
      age: 31,
      address: "100 Broadway St., New York City, New York",
    },
    {
      name: "Jane Smith",
      age: 32,
      address: "100 Market St., San Francisco, California",
    },
    {
      name: "Joe Black",
      age: 33,
      address: "100 Macquarie St., Sydney, Australia",
    },
    {
      name: "Joe Black",
      age: 33,
      address: "100 Macquarie St., Sydney, Australia",
    },
    {
      name: "Joe Black",
      age: 33,
      address: "100 Macquarie St., Sydney, Australia",
    },
    {
      name: "Joe Black",
      age: 33,
      address: "100 Macquarie St., Sydney, Australia",
    },
    {
      name: "Joe Black",
      age: 33,
      address: "100 Macquarie St., Sydney, Australia",
    },
    {
      name: "Joe Black",
      age: 33,
      address: "100 Macquarie St., Sydney, Australia",
    },
    {
      name: "Joe Black",
      age: 33,
      address: "100 Macquarie St., Sydney, Australia",
    },
    {
      name: "Joe Black",
      age: 33,
      address: "100 Macquarie St., Sydney, Australia",
    },
    {
      name: "Joe Black",
      age: 33,
      address: "100 Macquarie St., Sydney, Australia",
    },
    {
      name: "Joe Black",
      age: 33,
      address: "100 Macquarie St., Sydney, Australia",
    },
    {
      name: "Joe Black",
      age: 33,
      address: "100 Macquarie St., Sydney, Australia",
    },
    {
      name: "Joe Black",
      age: 33,
      address: "100 Macquarie St., Sydney, Australia",
    },
    {
      name: "Joe Black",
      age: 33,
      address: "100 Macquarie St., Sydney, Australia",
    },
    {
      name: "Joe Black",
      age: 33,
      address: "100 Macquarie St., Sydney, Australia",
    },
    {
      name: "Joe Black",
      age: 33,
      address: "100 Macquarie St., Sydney, Australia",
    },
    {
      name: "Joe Black",
      age: 33,
      address: "100 Macquarie St., Sydney, Australia",
    },
  ]);

  const sortedData = React.useMemo(() => {
    return data.slice().sort((a: any, b: any) => {
      const left = sortAsc ? a : b;
      const right = sortAsc ? b : a;
      const leftValue = String(left[sortColumn]);
      const rightValue = String(right[sortColumn]);
      return leftValue.localeCompare(rightValue, "en", {
        numeric: true,
        sensitivity: "base",
      });
    });
  }, [sortColumn, sortAsc, data]);

  const handleSort = (id: string) => {
    if (id === sortColumn) {
      setSortAsc((asc) => !asc);
    } else {
      setSortColumn(id);
      setSortAsc(true);
    }
  };

  const sliceData = (data: any[]) => {
    const min = (page - 1) * ROW_LIMIT;
    return data.slice(min, min + ROW_LIMIT);
  };

  return (
    <Block margin="1rem auto" maxWidth="1000px">
      <DatePicker
        value={date}
        onChange={({ date }) => setDate(Array.isArray(date) ? date : [date])}
        quickSelect
        range
        clearable
      />
      <TableBuilder
        data={sliceData(sortedData)}
        sortColumn={sortColumn}
        sortOrder={sortAsc ? "ASC" : "DESC"}
        onSort={handleSort}
      >
        <TableBuilderColumn id="name" header="Name" sortable>
          {(row) => row.name}
        </TableBuilderColumn>
        <TableBuilderColumn id="age" header="Age" sortable>
          {(row) => row.age}
        </TableBuilderColumn>
        <TableBuilderColumn id="address" header="Address" sortable>
          {(row) => row.address}
        </TableBuilderColumn>
      </TableBuilder>
      <Pagination
        currentPage={page}
        numPages={Math.ceil(data.length / ROW_LIMIT)}
        onPageChange={({ nextPage }) => setPage(nextPage)}
      />
    </Block>
  );
};

export default UsageTable;
