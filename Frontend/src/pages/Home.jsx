import React, { useEffect } from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import Topdoctor from '../components/TopDoctor'
import Banner from '../components/Banner'

const Home = () => {
    return (
        <div>
            <Header />
            <SpecialityMenu />
            <Topdoctor />
            <Banner />
        </div>
    )
}

export default Home
