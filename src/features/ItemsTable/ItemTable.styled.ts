import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#181818",
    color: theme.palette.common.white,
    fontWeight: "bold",
    width: "12.5%",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
