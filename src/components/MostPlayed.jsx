
import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';


let gameImg = 'https://cdn.talkesport.com/wp-content/uploads/valorant-ranks.jpg.webp';


let MostPlayed = () => {
    return (
        <section className="RecomendedForYouSection">

            <h3 className="sectionHeading">Most Played</h3>

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
                                <p className="gameTitle">Valorant</p>
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

export default MostPlayed;
