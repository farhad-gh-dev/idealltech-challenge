import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { selectTableData } from "./itemsTableSlice";
import { StyledTableCell } from "./ItemTable.styled";
import { SingleRow } from "./components/SingleRow";
import { fetchTableDataAsync } from "./itemsTableSlice";

export const ItemsTable: React.FC = () => {
  const tableData = useAppSelector(selectTableData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTableDataAsync("cryptocurrencies"));
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Currency</StyledTableCell>
            <StyledTableCell>Spread</StyledTableCell>
            <StyledTableCell>Sell</StyledTableCell>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell>Buy</StyledTableCell>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell>Chg%</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tableData.map((item) => (
            <SingleRow rowInfo={item} key={item.itemTitle} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
