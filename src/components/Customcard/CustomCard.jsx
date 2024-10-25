import React from 'react'
import { Card } from 'react-bootstrap'

export const CustomCard = ({ children, title }) => {
    return (
        <Card className='mt-4' >
            {title &&
                (<Card.Header className='text-center'>
                    <h3>{title}</h3>
                </Card.Header>)
                }
            <Card.Body>
                {children}
            </Card.Body>
        </Card>
    )
}
