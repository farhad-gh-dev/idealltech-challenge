import React, { useEffect, useState } from "react";
import {
  StyledTableCell,
  StyledTableRow,
  StyledActionButton,
} from "./SingleRow.styled";
import { Typography } from "@mui/material";
import { formatNumber } from "../utils/helpers";
import type { RowInfo, StreamData } from "../types";

interface Props {
  rowInfo: RowInfo;
}

export const SingleRow: React.FC<Props> = ({ rowInfo }) => {
  const [streamData, setStreamData] = useState<StreamData | null>(null);

  useEffect(() => {
    if (rowInfo.streamURI) {
      const ws = new WebSocket(rowInfo.streamURI);
      ws.onmessage = (e) => {
        setStreamData(JSON.parse(e.data));
      };

      return function cleanup() {
        ws.close();
      };
    }
  }, [rowInfo.streamURI]);

  if (!streamData) return null;

  return (
    <StyledTableRow>
      {/* Title */}
      <StyledTableCell component="th" scope="row">
        <Typography component="span" display="block" fontWeight={"bold"}>
          {rowInfo.itemSymbol}/{rowInfo.currencySymbol}
        </Typography>

        <Typography variant="caption" display="block">
          {rowInfo.itemTitle} to {rowInfo.currencyTitle}
        </Typography>
      </StyledTableCell>

      {/* Spread */}
      <StyledTableCell align="left">
        {Math.abs(formatNumber(Number(streamData.c) - Number(streamData.b)))}
      </StyledTableCell>

      {/* Sell price*/}
      <StyledTableCell align="left">
        {formatNumber(streamData.c)}
      </StyledTableCell>

      {/* Sell action */}
      <StyledTableCell align="left">
        <StyledActionButton variant="contained">Sell</StyledActionButton>
      </StyledTableCell>

      {/* Buy price*/}
      <StyledTableCell align="left">
        {formatNumber(streamData.b)}
      </StyledTableCell>

      {/* Buy action */}
      <StyledTableCell align="left">
        <StyledActionButton variant="contained">Buy</StyledActionButton>
      </StyledTableCell>

      {/* Change log */}
      <StyledTableCell align="left">{streamData["P"]}%</StyledTableCell>
    </StyledTableRow>
  );
};
