import React from 'react';
import Image from 'react-bootstrap/Image'
// import { Form, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';


class Img extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zoom: '10'
        }

    }
    changeZoom = (e) => {
        e.preventDefault();
        let value = Number(e.target.value);
        if (value === 3) {
            this.setState({
                zoom: '3'
            })
        }else if (value === 18) {
            this.setState({
                zoom: '18'
            }) 
        }
    }
    render() {
        return (
            <>
                <p>Welcome to {this.props.name} is located at {this.props.lat} by {this.props.lon}</p>
                <Col>
                <Image src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=${this.props.lat},${this.props.lon}&zoom=${this.state.zoom}`} alt='' thumbnail rounded    />
                </Col>
                <Form>
                <Form.Label>Select zoom size</Form.Label>
                    <Form.Control as="select" onChange={this.changeZoom}>
                    <option value='3'>Max zoom out</option>
                    <option value='18'>Max zoom in</option>
                    </Form.Control>
                </Form>
            </>
        );
    }
}

export default Img;