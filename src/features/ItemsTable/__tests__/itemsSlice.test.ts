import itemsTableReducer, {
  fetchTableDataAsync,
  type ItemsTableState,
} from "../itemsTableSlice";

describe("itemsTable reducer", () => {
  const initialState: ItemsTableState = {
    status: "idle",
    tableData: [],
  };

  const dummyPayload = [
    {
      itemTitle: "Bitcoin",
      itemSymbol: "BTC",
      currencyTitle: "US Dollar",
      currencySymbol: "USD",
      streamURI: "wss://stream.binance.com:9443/ws/btcusdt@ticker",
    },
  ];

  it("should handle initial state", () => {
    expect(itemsTableReducer(undefined, { type: "unknown" })).toEqual({
      status: "idle",
      tableData: [],
    });
  });

  it('should set status to "loading"', async () => {
    const action = { type: fetchTableDataAsync.pending.type };
    const state = itemsTableReducer(undefined, action);
    expect(state).toEqual({
      ...initialState,
      status: "loading",
    });
  });

  it('should set status to "idle"', async () => {
    const action = {
      type: fetchTableDataAsync.fulfilled.type,
      payload: dummyPayload,
    };
    const state = itemsTableReducer(undefined, action);
    expect(state).toEqual({
      status: "idle",
      tableData: action.payload,
    });
  });

  it('should set status to "failed"', async () => {
    const action = { type: fetchTableDataAsync.rejected.type };
    const state = itemsTableReducer(undefined, action);
    expect(state).toEqual({
      ...initialState,
      status: "failed",
    });
  });
});
