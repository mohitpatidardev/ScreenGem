import React from 'react'
import './home.scss'
import HeroBanner from './heroBanner/heroBanner'
import Trending from './trending/trending'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'
import Upcoming from './upcoming/Upcoming'



const home = () => {
    return (
        <div className='homePage'>
            <HeroBanner/>
            <Trending/>
            <Popular/>
            <TopRated/>
            <Upcoming/>
        </div>
    )
}

export default home
