import React from "react";
import ReactDOM from "react-dom/client";
const handleChangeUrl =(url) =>
{
    window.location.href = url; 
}
function Images ({styles,source,url} ){
    return (
        <img style={styles} src={source} onClick={() => handleChangeUrl(url)} >

        </img>
    )
}
export default Images
