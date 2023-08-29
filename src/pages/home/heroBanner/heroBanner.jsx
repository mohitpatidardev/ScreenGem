import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import './heroBanner.scss'

const heroBanner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const searchQueryHandle =(event)=>{
        if(event.key === "Enter" && query.length > 0){
            navigate(`/search/${query}`);
        }
    }

    return (
        <div className='heroBanner'>
             <div className="wrapper">
                <div className='heroBannerContent'>
                    <span className="title">ScreenZaa</span>
                    <span className="subTitle">Discover millions of movies, TV shows, and people. Your entertainment journey starts here. Explore today!</span>
                    <div className="searchInput">
                        <input 
                            type="text" 
                            placeholder='Looking for a specific movie or TV show? Start typing...'
                            onChange={(e)=> setQuery(e.target.value)}
                            onKeyUp={searchQueryHandle}
                        />
                        <button>Search</button>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default heroBanner
