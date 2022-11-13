import React from "react";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "./test/test-utils";

import App from "./App";

test("renders app title", () => {
  renderWithProviders(<App />);

  expect(screen.getByText(/Ideall Technology/i)).toBeInTheDocument();
});
