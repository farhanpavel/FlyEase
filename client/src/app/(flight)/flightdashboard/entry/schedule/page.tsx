"use client";
import React, { useEffect, useState } from "react";
import {
  ColumnDef,
  SortingState,
  flexRender,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Row } from "@tanstack/react-table";
import Link from "next/link";
import { Flight, columns } from "./_datatable/action";

import { Input } from "@/components/ui/input";

export default function Page() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [users, setUsers] = useState<Flight[]>([]);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/flight/getAll`);
      const json = await response.json();
      console.log(json.data.data);
      if (response.ok) {
        setUsers(json.data.data);
      }
    };
    fetchData();
  }, []);
  const fuzzyTextFilter = (
    row: Row<Flight>,
    columnId: string,
    value: string
  ) => {
    const cellValue = row.getValue(columnId) as string;
    return cellValue.toLowerCase().includes(value.toLowerCase());
  };
  const table = useReactTable({
    data: users,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),

    state: {
      sorting,
    },
    filterFns: {
      fuzzyText: fuzzyTextFilter,
    },
  });
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };
  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <div>
          <Input
            placeholder="Search by Flight Number"
            value={filter} // Bind filter state
            onChange={handleFilterChange} // Update filter value
            className="max-w-[20rem] text-xs"
          />
        </div>
        <div className="flex items-center">
          <Link
            className="bg-[#8B5FBF] hover:transition-all hover:delay-200 hover:bg-purple-500 py-2 px-4 rounded-[5px] text-white text-xs "
            href="/flightdashboard/entry/schedule/new"
          >
            Create Flight
          </Link>
        </div>
      </div>
      <div className="rounded-md border">
        <Table className="w-full  ">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="text-left ">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-[310px] text-center text-muted-foreground border-[1px] border-gray-300"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
