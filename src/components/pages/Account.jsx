import React from 'react'
import SavedShows from '../SavedShows'

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img className='w-full h-[350px] object-cover' src="https://static.standard.co.uk/2022/11/16/10/netflix-s.jpg?width=1200" alt="/" />
      <div className="fixed bg-black/60 top-0 left-0 w-full h-[450px]">
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className='text-3xl '>My Shows</h1>
        </div>
      </div>
      </div>
      <SavedShows/>
    </>
  )
}

export default Account