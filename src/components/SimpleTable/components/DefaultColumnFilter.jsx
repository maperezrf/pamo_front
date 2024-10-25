import { Form } from "react-bootstrap";

export const DefaultColumnFilter = ({ column }) => {
    const { filterValue, setFilterValue } = column;
    return (
        <Form.Control
            className="filter-text"
            value={(filterValue)}
            onChange={(e) => setFilterValue(e.target.value) }
            placeholder={'Filtrar'}
        />
    );
};