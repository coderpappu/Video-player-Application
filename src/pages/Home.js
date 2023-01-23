import React from 'react'
import VideoGrid from '../components/grid/Grid/VideoGrid'
import Tags from '../components/tags/Tags'
import Pagination from '../components/ui/Pagination'

const Home = () => {
  return (
    <>

        <Tags/>
        <VideoGrid/>
        <Pagination/>

    </>
  )
}

export default Home