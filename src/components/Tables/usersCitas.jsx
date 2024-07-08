import { configDotenv } from "dotenv";
import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { useFetch } from "../../useFetch";

const currentDate = new Date();

// Obtener componentes específicos
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Los meses empiezan desde 0
const day = currentDate.getDate();
const fecha_actual = `${year}-${month}-${day}`;

const columns = [
  { id: "nombre", label: "Paciente", minWidth: 170 },
  { id: "telefono", label: "Teléfono", minWidth: 170 },
  { id: "fecha", label: "Fecha de la cita", minWidth: 170 },
  { id: "hora", label: "Hora", minWidth: 170 },
  { id: "actions", label: "Acciones", minWidth: 100 },
];

const initialRows = [];

//Métodos GET usados en la página
const token = import.meta.env.VITE_TOKEN;

const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export default function StickyHeadTable() {

  const { data: citas } = useFetch(
    `http://localhost:3000/appointments/getAll/${fecha_actual}`,
    options
  );
  
  console.log(citas);
  
  let i = 1;
  citas.map((cita) => {
    initialRows.push({
      id: i,
      paciente: `${cita.nombre} ${cita.apellidoP} ${cita.apellidoM}`,
      telefono: `${cita.telefono}`,
      fecha: `${cita.fecha}`,
      hora: `${cita.horario_inicio}`,
    });
    i++;
  });

  const [rows, setRows] = useState(initialRows);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleDelete = () => {
    const updatedRows = rows.filter((row) => row.id !== selectedRow.id);
    setRows(updatedRows);
    setDeleteModalOpen(false);
  };

  const handleEdit = () => {
    // Implement logic to update the row in the state or backend
    setEditModalOpen(false);
  };

  const handleOpenDeleteModal = (row) => {
    setSelectedRow(row);
    setDeleteModalOpen(true);
  };

  const handleOpenEditModal = (row) => {
    setSelectedRow(row);
    setEditModalOpen(true);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
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
                    <TableCell>{row.paciente}</TableCell>
                    <TableCell>{row.telefono}</TableCell>
                    <TableCell>{row.fecha}</TableCell>
                    <TableCell>{row.hora}</TableCell>
                    <TableCell>
                      <Button onClick={() => handleOpenEditModal(row)}>
                        Actualizar
                      </Button>
                      <Button onClick={() => handleOpenDeleteModal(row)}>
                        Eliminar
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      

      {/* Delete Confirmation Modal */}
      <Modal
        open={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        aria-labelledby="delete-modal-title"
        aria-describedby="delete-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2 id="delete-modal-title">Confirmación de Eliminación</h2>
          <p id="delete-modal-description">
            ¿Estás seguro que deseas eliminar este registro?
          </p>
          <Button onClick={handleDelete} variant="contained" color="error">
            Eliminar
          </Button>
          <Button onClick={() => setDeleteModalOpen(false)} variant="contained">
            Cancelar
          </Button>
        </Box>
      </Modal>

      {/* Edit Modal */}
      <Modal
        open={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        aria-labelledby="edit-modal-title"
        aria-describedby="edit-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2 id="edit-modal-title">Editar Registro</h2>
          <TextField
            id="edit-name"
            label="Nombre"
            defaultValue={selectedRow ? selectedRow.name : ""}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            id="edit-email"
            label="Correo Electrónico"
            defaultValue={selectedRow ? selectedRow.email : ""}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            id="edit-registration-date"
            label="Fecha de Registro"
            defaultValue={selectedRow ? selectedRow.registrationDate : ""}
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button onClick={handleEdit} variant="contained">
            Guardar Cambios
          </Button>
          <Button onClick={() => setEditModalOpen(false)} variant="contained">
            Cancelar
          </Button>
        </Box>
      </Modal>
    </Paper>
  );
}
