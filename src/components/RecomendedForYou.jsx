
import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';


let gameImg = 'https://cdn1.dotesports.com/wp-content/uploads/2021/12/30092806/7up-v2-3840x2160-e11fc91a84d6-scaled.jpg';


let RecomendedForYou = () => {
    return (
        <section className="RecomendedForYouSection">

            <h3 className="sectionHeading">Recomended For You</h3>

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
                        <div className="gameImage" style={{ background: `url( ${gameImg} )` }} />
                        <div className="gameFooter">
                            <div className="gameInfo">
                                <p className="gameTitle">Fortnite</p>
                                <p className="gamePublisher">Epic Games</p>
                            </div>
                            <div className="gameViews">45,652 Views</div>
                        </div>
                    </div>
                </SplideSlide>

            </Splide>

        </section>
    );
};

export default RecomendedForYou;
