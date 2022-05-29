
import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';


let gameImg = 'https://www.psu.com/wp/wp-content/uploads/2019/12/Spellbreak-ps4-news-reviews-videos-768x432.jpg';


let NewLaunches = () => {
    return (
        <section className="RecomendedForYouSection">

            <h3 className="sectionHeading">New Launches</h3>

            <Splide 
                className="recomendedForYouSlider"
                options={{
                    rewind: true,
                    width: '100%',
                    gap: '350px',
                    type: 'loop',
                    perPage: 10,
                    perMove: 2,
                    pagination: false,
                }}
            >
                
                <SplideSlide>
                    <div className="sliderItem gameCard" >
                        <div className="gameImage" style={{ background: `url( ${gameImg} )` }}/>
                        <div className="gameFooter">
                            <div className="gameInfo">
                                <p className="gameTitle">Spell Break</p>
                                <p className="gamePublisher">Riot Games</p>
                            </div>
                            <div className="gameViews">85,652 Views</div>
                        </div>
                    </div>
                </SplideSlide>

            </Splide>

        </section>
    );
};

export default NewLaunches;
