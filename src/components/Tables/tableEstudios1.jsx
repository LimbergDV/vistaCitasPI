import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const columns = [
  { id: 'nombre', label: 'Nombre', minWidth: 170 },
  { id: 'condiciones', label: 'Condiciones del paciente', minWidth: 170 },
  { id: 'precio', label: 'Precio', minWidth: 170 },
  { id: 'actions', label: 'Acciones', minWidth: 100 },
];

const initialRows = [
  { id: 1, nombre: '17 ALFA HIDROXIPROGESTERONA', condiciones: 'AYUNO DE 8 HORAS', precio: '$459' },
  { id: 2, nombre: '17 ALFA HIDROXIPROGESTERONA  (NEONATAL)', condiciones: 'TOMAR DESPUES DE LA SEGUNDA TOMA DE LECHE A LAS 48 HRS DE NACIMIENTO', precio: '$432' },
  { id: 3, nombre: '17 CETOSTEROIDES', condiciones: 'TOMAR DESPUES DE LA SEGUNDA TOMA DE LECHE A LAS 48 HRS DE NACIMIENTO', precio: '$840' },
  { id: 4, nombre: '17 HIDROXICORTICOESTEROIDES', condiciones: 'SIN INDICACIONES ESPECIALES', precio: '$872' },
  { id: 5, nombre: 'ACETAMINOFEN', condiciones: 'AYUNO DE 8 HORAS', precio: '$915' },
  { id: 6, nombre: 'ACIDO DELTA AMINOLEVULINICO', condiciones: 'SIN INDICACIONES ESPECIALES', precio: '$1,083' },
  { id: 7, nombre: 'ACIDO FOLICO', condiciones: 'AYUNO DE 8 HORAS', precio: '$441' },
  { id: 8, nombre: 'ACIDO LACTICO', condiciones: 'AYUNO DE 8 HORAS', precio: '$328' },
  { id: 9, nombre: 'ACIDO URICO SERICO', condiciones: 'AYUNO DE 8 HORAS', precio: '$62' },
  { id: 10, nombre: 'ACIDO URICO URINARIO', condiciones: 'SIN INDICACIONES ESPECIALES', precio: '$125' },
  { id: 11, nombre: 'ACIDO VANILMANDELICO', condiciones: 'NO CONSUMIR CHOCOLATE Y PRODUCTOS CON VAINILLA MINIMO 3 DIAS', precio: '$973' },
  { id: 12, nombre: 'ACIDO VALPROICO', condiciones: 'AYUNO DE 8 HORAS Y ANTES DE LA SIGUIENTE DOSIS', precio: '$484' },
  { id: 13, nombre: 'ACIOS GRASOS LIBRES', condiciones: 'AYUNO DE 12 HRS.', precio: '$988' },
  { id: 14, nombre: 'ACTIVIDAD TRIPTICA EN HECES', condiciones: 'SIN INDICACIONES ESPECIALES', precio: '$316' },
  { id: 15, nombre: 'ADENOSIN DEAMINASA', condiciones: 'SIN INDICACIONES ESPECIALES', precio: '$1,113' },
  { id: 16, nombre: 'ADENOVIRUS (BUSQUEDA DE ANTIGENO)', condiciones: 'SIN INDICACIONES ESPECIALES', precio: '$439' },
  { id: 17, nombre: 'ALANINA AMINO TRANSFERASA (ALAT)(TGP) ', condiciones: 'AYUNO DE 8 HORAS', precio: '$175' },
  { id: 18, nombre: 'ALBUMINA SERICA', condiciones: 'AYUNO DE 8 HORAS', precio: '$85' },
  { id: 19, nombre: 'ALCOHOL ETILICO EN ORINA', condiciones: 'ORINA ESPONTANEA', precio: '$495' },
  { id: 20, nombre: 'ALCOHOL ETILICO EN SANGRE', condiciones: 'AYUNO 8 HORAS', precio: '$495' },


];

export default function TableEstudios1() {
  const [rows, setRows] = useState(initialRows);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleAdd = () => {
    setSnackbarMessage('Estudio agregado');
    setSnackbarOpen(true);
    setAddModalOpen(false);
  };

  const handleDelete = () => {
    const updatedRows = rows.filter(row => row.id !== selectedRow.id);
    setRows(updatedRows);
    setSnackbarMessage('Estudio eliminado');
    setSnackbarOpen(true);
    setDeleteModalOpen(false);
  };

  const handleOpenAddModal = (row) => {
    setSelectedRow(row);
    setAddModalOpen(true);
  };

  const handleOpenDeleteModal = (row) => {
    setSelectedRow(row);
    setDeleteModalOpen(true);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Paper sx={{ width: "100%", height: "100vh",overflow: "hidden" }}>
      <TableContainer sx={{ width: "100%", height: "100vh" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    <TableCell>{row.nombre}</TableCell>
                    <TableCell>{row.condiciones}</TableCell>
                    <TableCell>{row.precio}</TableCell>
                    <TableCell>
                      <Button onClick={() => handleOpenAddModal(row)}>Agregar</Button>
                      <Button onClick={() => handleOpenDeleteModal(row)}>Eliminar</Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add Confirmation Modal */}
      <Modal
        open={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        aria-labelledby="add-modal-title"
        aria-describedby="add-modal-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <h2 id="add-modal-title">Confirmación de Agregar</h2>
          <p id="add-modal-description">¿Seguro que quieres agregar este estudio?</p>
          <Button onClick={handleAdd} variant="contained" color="primary">Sí</Button>
          <Button onClick={() => setAddModalOpen(false)} variant="contained">No</Button>
        </Box>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        open={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        aria-labelledby="delete-modal-title"
        aria-describedby="delete-modal-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <h2 id="delete-modal-title">Confirmación de Eliminación</h2>
          <p id="delete-modal-description">¿Estás seguro que deseas eliminar este estudio?</p>
          <Button onClick={handleDelete} variant="contained" color="error">Eliminar</Button>
          <Button onClick={() => setDeleteModalOpen(false)} variant="contained">Cancelar</Button>
        </Box>
      </Modal>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Paper>
  );
}
