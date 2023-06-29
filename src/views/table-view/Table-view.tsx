import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { COLUMNS, LOCALE_TEXT_PT } from 'shared/constants/table';
import { DataTable } from 'shared/interfaces/table';
import { convertToDataTable } from 'shared/util/table';
import { getUsers } from 'services/firebase-config';
import { UserData } from 'shared/interfaces/firestore-db';

const columns: GridColDef[] = COLUMNS;
const rows: DataTable[] = [];

getUsers()
  .then((res) => {
    res.forEach((user, index) => {
      rows.push(convertToDataTable(user, index));
    });
  })
  .catch((e) => {
    console.error(e);
  });

export default function TableView() {
  return (
    <Box sx={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        sx={{ backgroundColor: 'white' }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        rowSelection={false}
        pageSizeOptions={[5]}
        localeText={LOCALE_TEXT_PT}
      />
    </Box>
  );
}
