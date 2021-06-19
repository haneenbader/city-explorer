import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

class Weather extends React.Component {
    render() {
        return (
            this.props.weatherData.map(element => {
                console.log(this.props.weatherData)
                return (
                    <>
                    <h5>Forecast details for each date :</h5>
                        <ListGroup className='w-50 p-3'>
                            <ListGroup.Item ><p>{element.date}</p></ListGroup.Item>
                            <ListGroup.Item > <p>{element.description}</p></ListGroup.Item>
                            
                        </ListGroup>
                    </>)
            })
        )
    }
}

export default Weather;