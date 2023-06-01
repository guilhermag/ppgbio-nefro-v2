import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { COLUMNS, LOCALE_TEXT_PT } from 'shared/constants/table';
import { DataTable } from 'shared/interfaces/table';
import { convertToDataTable } from 'shared/util/table';
import { mockUser1, mockUser2, mockUser3, mockUser4 } from 'services/mock-data';

const columns: GridColDef[] = COLUMNS;
const rows: DataTable[] = [
  convertToDataTable(mockUser1, 1),
  convertToDataTable(mockUser2, 2),
  convertToDataTable(mockUser3, 3),
  convertToDataTable(mockUser1, 4),
  convertToDataTable(mockUser2, 5),
  convertToDataTable(mockUser3, 6),
  convertToDataTable(mockUser1, 7),
  convertToDataTable(mockUser2, 8),
  convertToDataTable(mockUser3, 9),
  convertToDataTable(mockUser1, 10),
  convertToDataTable(mockUser2, 11),
  convertToDataTable(mockUser3, 12),
  convertToDataTable(mockUser1, 13),
  convertToDataTable(mockUser2, 14),
  convertToDataTable(mockUser3, 15),
  convertToDataTable(mockUser1, 16),
  convertToDataTable(mockUser2, 17),
  convertToDataTable(mockUser3, 18),
  convertToDataTable(mockUser4, 19),
];

export default function TableView() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
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
