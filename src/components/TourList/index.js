import React, { Component } from 'react';
import './TourList.scss';
import Tour from '../Tour/Tour';
import {tourData} from '../tourData'

export default class TourList extends Component {
    state={
        tours: tourData,
    }

    removeTours = (id) => {
        const{tours} = this.state;
        const sortedTours = tours.filter((tour) => tour.id !== id);
        this.setState({
            tours: sortedTours
        })
    }


    render() {
        const {tours} = this.state

    return (
        <section className="tourlist">
            {tours.map(tour => {
                return(
                    <Tour key={tour.id} tour={tour} removeTour={this.removeTours}/>
                )
            })}
        </section>
        )
    }
}
