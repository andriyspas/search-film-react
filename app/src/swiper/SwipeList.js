import React from 'react'
import Swiper from 'react-id-swiper'
import { Film } from '../film/Film'

export class SwipeList extends React.Component {
    render() {
        const params = {
            pagination: '.swiper-pagination',
            slidesPerView: 5,
            paginationClickable: true,
            spaceBetween: 1
        };

        return (
            <Swiper {...params}>
                {
                    this.props.films.map((item, index) => (
                        <div key={ index }>
                            <Film
                                film={ item }
                            />
                        </div>
                    ))
                }
            </Swiper>
        )
    }
}