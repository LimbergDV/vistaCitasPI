import React from "react";
import TableHistorialPagos from "../Tables/tableHistorialPagos";
import "../styles/formHistorialPagos.css";
import { MdLocalPrintshop } from "react-icons/md";
import { useState } from "react";

function FormHistorialPagos(){
    const [flag, setFlag] = useState(false);

    const handleClick = () => {
        console.log("Click");
        setFlag(true);
    }

    return(
        <>
        <div className="principal-Container">
        <TableHistorialPagos active={flag} setActive={setFlag}/>
        <div className="unique-btn">
            <button className="print-btn" onClick={()=> handleClick()}>
                <MdLocalPrintshop className="icon-print"/>
            </button>
        </div>
        </div>
        </>
    )
}
export default FormHistorialPagos