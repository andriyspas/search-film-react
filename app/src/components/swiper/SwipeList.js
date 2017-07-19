import React from 'react'
import Swiper from 'react-id-swiper'
import Film from '../film/Film'

export class SwipeList extends React.Component {
    render() {
        const params = {
            loop: true,
            autoplay: 2500,
            autoplayDisableOnInteraction: false,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            slidesPerView: 4,
            spaceBetween: 30,
            breakpoints: {
                1023: {
                    slidesPerView: 2,
                    spaceBetween: 40
                },
                767: {
                    slidesPerView: 1,
                    spaceBetween: 30
                }
            }
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