import { styled } from "@mui/material/styles";
import { Button, TableRow, TableCell, tableCellClasses } from "@mui/material";

export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const StyledActionButton = styled(Button)(() => ({
  backgroundColor: "#00c46b",
  fontWeight: "bold",
  textTransform: "capitalize",
  minWidth: "auto",
  padding: "10px",
  paddingTop: "7px",
  paddingBottom: "6px",
  lineHeight: "1.2em",

  "&:hover": {
    backgroundColor: "rgba(83,185,135,.9)",
  },
}));
