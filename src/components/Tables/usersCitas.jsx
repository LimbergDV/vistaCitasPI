import React, { useState, useEffect } from "react";
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
import Swal from "sweetalert2";

import { fetchData } from "../../fetchData";

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Los meses empiezan desde 0
const day = currentDate.getDate();
const fecha_actual = `${year}-${month}-${day}`;

// Métodos GET usados en la página
const token = import.meta.env.VITE_TOKEN;

const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

const fetchDataForDate = async () => {
  const response = await fetch(
    `http://localhost:3000/appointments/getAll/${fecha_actual}`,
    options
  );
  const data = await response.json();
  return data;
};

const columns = [
  { id: "nombre", label: "Paciente", minWidth: 170 },
  { id: "telefono", label: "Teléfono", minWidth: 170 },
  { id: "fecha", label: "Fecha de la cita", minWidth: 170 },
  { id: "hora", label: "Hora", minWidth: 170 },
  { id: "file", label: "Solicitud de Estudios", minWidth: 170 },
  { id: "actions", label: "Acciones", minWidth: 100 },
];

const deleteCita = async (id_cita) => {
  const options = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await fetchData(
    `http://localhost:3000/appointments/delete/${id_cita}`,
    options
  );
  return res;
};

const fecha = (dateString) => {
  // Parsear la fecha
  const date = new Date(dateString);

  // Extraer componentes de la fecha
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Los meses son de 0 a 11
  const year = date.getUTCFullYear();

  // Formatear la fecha
  return `${day} / ${month} / ${year}`;
}

const descargar = async (id_cita) => {
  try {
    const response = await fetch(`http://localhost:3000/appointments/getSolicitud/${id_cita}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`, // Si necesitas autenticación
      },
    });

    if (!response.ok) {
      throw new Error('Error fetching PDF');
    }


  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Solicitud.pdf';
  document.body.appendChild(a);
  a.click();
  a.remove();

  } catch (e) {
    console.log(e);
  }
}

export default function StickyHeadTable() {
  const [rows, setRows] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchDataForDate();
        console.log("Fetched data:", data); // Log the fetched data for debugging
        if (Array.isArray(data)) {
          setRows(data);
          setRowsPerPage(data.length);
        } else {
          console.error("Data fetched is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  const handleDelete = async () => {
    if (selectedUserId) {
      await deleteCita(selectedUserId);
      setRows((prevRows) => prevRows.filter((row) => row.id_cita !== selectedUserId));
      setDeleteModalOpen(false);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Cita cancelada",
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  const handleOpenDeleteModal = (id_cita) => {
    setSelectedUserId(id_cita);
    setDeleteModalOpen(true);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", height: "100vh", overflow: "hidden" }}>
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
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((cita) => {
              return (
                
                <TableRow hover role="checkbox" tabIndex={-1} key={cita.id_cita}>
                  <TableCell>{`${cita.nombre} ${cita.apellidoP} ${cita.apellidoM}`}</TableCell>
                  <TableCell>{cita.telefono}</TableCell>
                  <TableCell>{fecha(cita.fecha)}</TableCell>
                  <TableCell>{cita.horario_inicio}</TableCell>
                  <TableCell>
                    <Button onClick={() => descargar(cita.id_cita)}>
                      Descargar
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => handleOpenDeleteModal(cita.id_cita)}>
                      Cancelar
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

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
            width: 600,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2 id="delete-modal-title">Confirmación de Cancelación</h2>
          <p id="delete-modal-description">
            ¿Estás seguro que deseas cancelar la cita?
          </p>
          <Button onClick={handleDelete} variant="contained" color="error">
            Sí
          </Button>
          <Button onClick={() => setDeleteModalOpen(false)} variant="contained">
            No
          </Button>
        </Box>
      </Modal>
    </Paper>
  );
}