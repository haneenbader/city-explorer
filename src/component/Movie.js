import React, { Component } from 'react'
// import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'



export class Movie extends Component {
    render() {

        return (

            this.props.movieData.map(element => {
                return (
                    <>
                        <h5>Movie details :</h5>
                       
                            <Card style={{ width: '500px' }} id='card'>
                                <Card.Body>
                                    <Card.Img variant="top" id='image' src={`https://image.tmdb.org/t/p/original/${element.poster_path}`} alt="image not provided" />
                                    <Card.Title>Movie title : {element.title}</Card.Title>
                                    <Card.Text>Movie overview : {element.overview}</Card.Text>
                                    <Card.Text>Movie vote_average : {element.vote_average}</Card.Text>
                                    <Card.Text>Movie release_date : {element.release_date}</Card.Text>
                                </Card.Body>
                            </Card>
                        
                    </>
                )
            })
        )
    }
}

export default Movie;