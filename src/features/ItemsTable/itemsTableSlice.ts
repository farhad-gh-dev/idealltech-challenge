import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";
import { fetchTableData } from "./api/itemsTableAPI";
import type { RowInfo } from "./types";

export interface ItemsTableState {
  status: "idle" | "loading" | "failed";
  tableData: RowInfo[];
}

const initialState: ItemsTableState = {
  status: "idle",
  tableData: [],
};

export const fetchTableDataAsync = createAsyncThunk(
  "statistics/fetchTableData",
  async (targetData: string) => {
    const response = await fetchTableData(targetData);
    return response.data;
  }
);

export const itemsTableSlice = createSlice({
  name: "itemsTable",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTableDataAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTableDataAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.tableData = action.payload;
      })
      .addCase(fetchTableDataAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectTableData = (state: RootState) => state.itemsTable.tableData;

export default itemsTableSlice.reducer;
