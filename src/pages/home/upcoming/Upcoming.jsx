import React, { useState, useEffect } from "react";
import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/contentWrapper";
import useFetch from "../../../hooks/useFetch";

const Upcoming = () => {
    const [filteredData, setFilteredData] = useState([]);
    const { data, loading } = useFetch("/movie/upcoming");

    useEffect(() => {
        if (data?.results) {
            const currentDate = new Date();
            const filteredMovies = data.results.filter((movie) => {
                const releaseDate = new Date(movie.release_date);
                return releaseDate > currentDate;
            });
            setFilteredData(filteredMovies);
        }
    }, [data]);

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Soon in Theaters</span>
            </ContentWrapper>
            <Carousel
                data={filteredData}
                loading={loading}
                endpoint="movie"
                showCircleRating={false}
            />
        </div>
    );
};

export default Upcoming;
