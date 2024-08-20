import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';

const MUITable = ({ columns, rows, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 'none' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    sx={{ 
                      fontWeight: 'bold', 
                      backgroundColor: '#f3f4f7',  // Light gray header background
                      color: '#6b6b6b'
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.uuid}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} sx={{ backgroundColor: '#ffffff' }}>
                          {column.format
                            ? column.format(value)  // Directly apply the format function
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      {/* Move the pagination completely outside the Paper/TableContainer */}
      <Box sx={{ mt: 2, boxShadow: 'none', borderBottom: 'none' }}>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            borderTop: 'none', // Remove the border outline at the top
            boxShadow: 'none',  // Remove any shadow around pagination
            borderBottom: 'none', // Remove underline below the pagination section
            '.MuiTablePagination-selectLabel, .MuiTablePagination-input, .MuiTablePagination-displayedRows': {
              color: '#6b6b6b',  // Adjust the color of the text to match the gray color scheme
            },
            '.MuiTablePagination-actions button': {
              border: 'none',  // Remove border around pagination buttons
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default MUITable;
