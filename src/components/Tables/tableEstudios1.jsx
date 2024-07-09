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


// Métodos POST usados en la página
const token = import.meta.env.VITE_TOKEN;

const columns = [
  { id: "nombre", label: "Nombre", minWidth: 170 },
  { id: "clave", label: "Clave de estudios", minWidth: 170 },
  { id: "descripcion", label: "Descripción", minWidth: 170 },
  { id: "precio", label: "Precio", minWidth: 170 },
  { id: "actions", label: "Acciones", minWidth: 100 },
];

/*const deleteCita = async (id_cita) => {
  const options = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await fetchData(
    `http://localhost:3000/anylisis/add/${id_cita}`,
    options
  );
  return res;
};*/


export default function TableEstudios1(params) {
  const { id_categoria } = params;

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  
  const fetchDataForDate = async () => {
    const response = await fetch(
      `http://localhost:3000/analysis/allCategory/${parseInt(id_categoria)}`,
      options
    );
    const data = await response.json();
    return data;
  };
  
  const [rows, setRows] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchDataForDate();
        console.log("Fetched data:", data); // Log the fetched data for debugging
        if (Array.isArray(data)) {
          setRows(data);
        } else {
          console.error("Data fetched is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  /*const handleDelete = async () => {
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
  };*/

  //modificar boton de agregar cotización 
  const handleOpenAddModal = (id_cita) => {
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
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((analisis) => {
              return (
                
                <TableRow hover role="checkbox" tabIndex={-1} key={analisis.id_analisis}>
                  <TableCell>{analisis.nombre}</TableCell>
                  <TableCell>{analisis.clave_estudios}</TableCell>
                  <TableCell>{analisis.descripcion}</TableCell>
                  <TableCell>${analisis.precio}</TableCell>
                  <TableCell>
                    <Button> {/*onClick={() => handleOpenAModal(analisis.id_analisis)}*/}
                      Agregar
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
            ¿Estás seguro que deseas quitar el estudio?
          </p>
          <Button > {/*onClick={handleDelete} variant="contained" color="error"*/}
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