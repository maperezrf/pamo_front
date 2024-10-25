import { Accordion, Table, Button, Container, Col, Row } from "react-bootstrap"
import '../SimpleTable/styeles_2.css'
import React from 'react'

export const SimpleTableTest = () => {
    return (
        <Table striped bordered responsive>
            <thead>
                <tr>
                    <th>
                        PRODUCTOS
                    </th>
                    {/* <th>

                        titulo
                    </th>
                    <th>
                        imagen
                    </th> */}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <Container>
                                    <Row>
                                        <Col>
                                            <img src="https://http2.mlstatic.com/D_NQ_NP_688948-MCO44107710450_112020-O.webp" width={'50px'} alt="image not found" />
                                        </Col>
                                        <Col>
                                            MERCUA8
                                        </Col>
                                        <Col>
                                            Regadera Cuadrada 8 Pulgadas
                                        </Col>
                                    </Row>
                                </Container>
                            </Accordion.Header>
                            <Accordion.Body>
                                <div class="nested-table-container">
                                    <table class="subtable nested-table">
                                        <thead>
                                            <tr>
                                                <th>Marketplace</th>
                                                <th>Costo</th>
                                                <th>Disponibilidad</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Shopify</td>
                                                <td>$25.00</td>
                                                <td>En stock</td>
                                            </tr>
                                            <tr>
                                                <td>Mercado libre</td>
                                                <td>$30.00</td>
                                                <td>En stock</td>
                                            </tr>
                                            <tr>
                                                <td>Sodimac</td>
                                                <td>$28.00</td>
                                                <td>En stock</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </tr>
            </tbody>
        </Table>
    )
}

