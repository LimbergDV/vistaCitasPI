import React from "react";
import '../styles/title.css'

function Title(props){
    const {title} = props;

    return(
        <>
        <h1 className="titleH1">{title}</h1>
        </>
    )
}

export default Title