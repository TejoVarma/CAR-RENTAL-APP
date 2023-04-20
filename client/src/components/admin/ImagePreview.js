import React, { useContext } from "react";
import { CarList } from "../../contexts/AdminContexts";

export default function ImagePreview() {

    const {preview} = useContext(CarList);

    return <>
        <div id="preview-img-container">
            <img src={preview} alt="preview" />
        </div>
    </>
    
}