import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ReadFileApi, SendDataShopiApi } from '../../api/ProductsApi';
import { Card, Table, Button } from 'react-bootstrap';


export const File = () => {

    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [table, setTable] = useState([]);
    const [columns, setColumns] = useState([]);

    const readFile = async () => {
        const response = await ReadFileApi(id)
        setTitle(response.data.title)
        setTable(response.data.table)
        setColumns(response.data.columns)
    }

    const SendDataShopi = async ()=>{
        const response = await SendDataShopiApi(id)
    }

    useEffect(() => {
        readFile()
    }, []);


    return (
        <Card className='m-5'>
            <Card.Header>
                <Card.Title>
                    <h3 className='text-center'>{title}</h3>
                </Card.Title>
                <Card.Body>
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                {columns.map(column => (
                                    <th>{column}</th>
                                ))}
                                {/* <th>action</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {table.map((row, index) => (
                                <tr key={index} >
                                    {columns.map(column => (
                                        <td>{row[column]}</td>
                                    ))}
                                    {/* <td> <Button> sincronizar </Button> </td> */}
                                </tr>
                            )
                            )}
                        </tbody>
                    </Table>
                    <div className="container text-center my-5">
                        <Button onClick={SendDataShopi}>
                            sincronizar
                        </Button>
                    </div>
                </Card.Body>
            </Card.Header>
        </Card>


    )
}
