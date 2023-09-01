import React from 'react'
import './home.scss'
import HeroBanner from './heroBanner/heroBanner'
import Trending from './trending/trending'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'



const home = () => {
    return (
        <div className='homePage'>
            <HeroBanner/>
            <Trending/>
            <Popular/>
            <TopRated/>
        </div>
    )
}

export default home
