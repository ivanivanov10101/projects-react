import {useContext, useEffect} from "react";
import MovieContext from "../context/MovieContext";
import {useParams} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import {CITES, DETAILS} from "../context/types/MovieTypes";
import Header from "../components/Header";
import MovieInfo from "../components/MovieInfo";
import MovieRecEntry from "../components/cities/MovieRecEntry";
import Footer from "../components/footer/Footer";

const MovieEntry = () => {
    const {moviesData, dispatch} = useContext(MovieContext);
    const {details, filteredCities} = moviesData;
    const {id} = useParams();
    useEffect(()=>{
        dispatch({type: DETAILS, payload: id});
        dispatch({type: CITES, payload: id });
        window.scrollTo(0, 0);
    },[dispatch, id]);


    return <>
        <Helmet>
            <title>{details.name}</title>
        </Helmet>
        <Header
            image={details.bigImage}>
        </Header>
        <MovieInfo details={details}/>
        <MovieRecEntry cities={filteredCities} name={details.name}/>
        <Footer/>
    </>
}

export default MovieEntry;
