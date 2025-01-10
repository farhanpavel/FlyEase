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

import Link from "next/link";
import { Flight, columns } from "./_datatable/action";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export default function Page() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [users, setUsers] = useState<Flight[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [searchValue, setSearchValue] = useState("");
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
  });

  return (
    <div className="space-y-4">
      <div className="lg:flex lg:justify-between">
        <div className="lg:flex lg:justify-between gap-4 space-y-4 lg:space-y-0 sm:w-[70%]">
          <Input
            placeholder="Search by Flight Number"
            value={
              (table.getColumn("flightNumber")?.getFilterValue() as string) ??
              ""
            }
            onChange={(event) =>
              table
                .getColumn("flightNumber")
                ?.setFilterValue(event.target.value)
            }
            className=" text-xs sm:w-[42%]"
          />

          <Input
            placeholder="Search by Origin and Destination (e.g.,Mumbai-Bangalore)"
            value={searchValue}
            onChange={(event) => {
              const value = event.target.value;
              setSearchValue(value);

              const [origin, destination] = value.split("-");

              table.getColumn("origin")?.setFilterValue(origin?.trim() || "");
              table
                .getColumn("destination")
                ?.setFilterValue(destination?.trim() || "");
            }}
            className="text-xs"
          />
        </div>

        <div className="flex items-center ">
          <Link
            className="bg-[#8B5FBF] mx-auto lg:mx-0 mt-4 lg:mt-0  hover:transition-all hover:delay-200 hover:bg-purple-500 py-2 px-4 rounded-[5px] text-white text-xs "
            href="/flightdashboard/entry/schedule/new"
          >
            Create Flight
          </Link>
        </div>
      </div>
      <div className="rounded-md border">
        <Table className="w-full">
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
