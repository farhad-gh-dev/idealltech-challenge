import React from "react";
import { Container, Typography } from "@mui/material";
import { ItemsTable } from "features/ItemsTable/ItemsTable";

function App() {
  return (
    <Container sx={{ my: 7 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Ideall Technology Coding Challenge
      </Typography>

      <ItemsTable />
    </Container>
  );
}

export default App;
