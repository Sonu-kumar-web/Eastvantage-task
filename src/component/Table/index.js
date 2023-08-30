import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "S.No", width: 90, sortable: false },
  {
    field: "name",
    headerName: "Name",
    width: 600,
    sortable: false,
    valueGetter: (params) => {
      return `${params.row.name.title || ""} ${params.row.name.first || ""} ${
        params.row.name.last || ""
      }`;
    },
  },

  {
    field: "email",
    headerName: "Email",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 600,
  },
];

export default function DataGridDemo() {
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    setCurrentData(JSON.parse(localStorage.getItem("data")));
  }, [currentData]);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={currentData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        disableRowSelectionOnClick
        disableColumnMenu
      />
    </Box>
  );
}
