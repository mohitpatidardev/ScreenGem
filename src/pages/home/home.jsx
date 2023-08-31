import React from 'react'
import './home.scss'
import HeroBanner from './heroBanner/heroBanner'
import Trending from './trending/trending'

const home = () => {
    return (
        <div className='homePage'>
            <HeroBanner/>
            <Trending/>
            <div style={{height:1000}}></div>
        </div>
    )
}

export default home
