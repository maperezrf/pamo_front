import React, { useState, useEffect } from 'react'
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import { FaFileUpload } from "react-icons/fa";
import { GetSheetNames } from '../../api/ProductsApi';
import { GiConsoleController } from 'react-icons/gi';


export const ModalConnectSheets = (idFileSheet) => {

    const [idFile, setIdFile] = useState();
    const [show, setShow] = useState(false);
    const [selectedSheet, setSelectedSheet] = useState(null);
    const [SheetsNames, setSheetsNames] = useState([]);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const handleSheetNames = async (idFileSheet) => {
        const response = await GetSheetNames(idFileSheet)
        setSheetsNames(JSON.parse(response.data))
    }

    useEffect(() => {
        if (show) {
            setIdFile(idFileSheet.idFileSheet)
            handleSheetNames(idFileSheet.idFileSheet)
        }
    }, [show, idFileSheet]);



    return (
        <>

            <FaFileUpload />
        </>
    );
}