import type { RowInfo } from "../types";

const cryptocurrencies = [
  {
    itemTitle: "Bitcoin",
    itemSymbol: "BTC",
    currencyTitle: "US Dollar",
    currencySymbol: "USD",
    streamURI: "wss://stream.binance.com:9443/ws/btcusdt@ticker",
  },
  {
    itemTitle: "Ethereum",
    itemSymbol: "ETH",
    currencyTitle: "US Dollar",
    currencySymbol: "USD",
    streamURI: "wss://stream.binance.com:9443/ws/ethusdt@ticker",
  },
  {
    itemTitle: "Dogecoin",
    itemSymbol: "DOGE",
    currencyTitle: "US Dollar",
    currencySymbol: "USD",
    streamURI: "wss://stream.binance.com:9443/ws/dogeusdt@ticker",
  },
  {
    itemTitle: "Litecoin",
    itemSymbol: "LTC",
    currencyTitle: "US Dollar",
    currencySymbol: "USD",
    streamURI: "wss://stream.binance.com:9443/ws/ltcusdt@ticker",
  },
  {
    itemTitle: "LINK",
    itemSymbol: "LINK",
    currencyTitle: "US Dollar",
    currencySymbol: "USD",
    streamURI: "wss://stream.binance.com:9443/ws/linkusdt@ticker",
  },
];

const markets = {
  cryptocurrencies,
};

export function fetchTableData(targetData: string) {
  return new Promise<{ data: RowInfo[] }>((resolve) =>
    resolve({ data: markets[targetData as keyof typeof markets] })
  );
}
