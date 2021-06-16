import React from 'react'
import { Form, Button, Col } from 'react-bootstrap';


class MyForm extends React.Component {
    render() {
        return (
            <div>
                <Form inline>
                    <Form.Group>
                        <Form.Label >Where would you like to explore?</Form.Label>
                        <Col ></Col>
                        <Form.Control type="text" placeholder="input location here…" onChange={this.props.locationEvent}/>
                       
                    </Form.Group>
                    <br></br>
                    <br></br>
                    </Form>
                    <Button type="submit" onClick={this.props.locationData}>Explore!</Button>
                
            </div>
        )
    }
}

export default MyForm;