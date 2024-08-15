"use client"
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Radio, RadioGroup, toggle} from "@nextui-org/react";

const rows = [
  {
    key: "1",
    title: "Blog 1",
    date: "2024-01-01",
    tags: "Tag 1, Tag 2",
  },
  {
    key: "2",
    title: "Blog 2",
    date: "2024-01-02",
    tags: "Tag 3, Tag 4",
  },
  {
    key: "3",
    title: "Blog 3",
    date: "2024-01-03",
    tags: "Tag 5, Tag 6",
  },
];

const columns = [
  {
    key: "title",
    label: "TITLE",
  },
  {
    key: "date",
    label: "DATE",
  },
  {
    key: "tags",
    label: "TAGS",
  },
];

export default function BlogTable() {
  return (
    <div className="flex flex-col gap-3">
      <Table 
        aria-label="Selection behavior table example with dynamic content"
        selectionMode="multiple"
        selectionBehavior="replace"
      >
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

