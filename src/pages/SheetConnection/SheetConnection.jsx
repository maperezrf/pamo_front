import { Button, Card, Container, Table } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { GetListFilesApi, ReadFileApi } from '../../api/ProductsApi'
import { FaSearch, FaFileUpload } from "react-icons/fa";
import { Link } from 'react-router-dom';


export const SheetConnection = () => {
    const getFiles = async () => {
        const response = await GetListFilesApi()
        setFiles(JSON.parse(response.data))
    }

    const [files, setFiles] = useState([]);
    useEffect(() => {
        getFiles()
    }, []);


    return (
        <Container>
            <Card className='mt-5'>
                <Card.Header>
                    <h3 className='text-center'>Conexion Google Sheets</h3>
                </Card.Header>
                <Card.Body className='text-center'>
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Fecha Modificación</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {files.map((file, index) => (
                                <tr key={index}>
                                    <td> {file.title} </td>
                                    <td> {file.last_update_time} </td>
                                    <td className='p-2'>
                                        <div>
                                            <Button variant="link" href={file.url} className='mx-1 me-4' target="_blank" rel="noopener noreferrer">
                                                <FaSearch />
                                            </Button>
                                            <Link to={`/file/${file.id}`} ><FaFileUpload /></Link>
                                        </div>
                                    </td>
                                </tr>
                            )
                            )}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Container>
    )
}