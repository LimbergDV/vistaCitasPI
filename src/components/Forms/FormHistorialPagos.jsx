import React from "react";
import TableHistorialPagos from "../Tables/tableHistorialPagos";
import "../styles/formHistorialPagos.css";
import { MdLocalPrintshop } from "react-icons/md";

function FormHistorialPagos(){
    return(
        <>
        <div className="principal-Container">
        <TableHistorialPagos/>
        <div className="unique-btn">
            <button className="print-btn">
                <MdLocalPrintshop className="icon-print"/>
            </button>
        </div>
        </div>
        </>
    )
}
export default FormHistorialPagos