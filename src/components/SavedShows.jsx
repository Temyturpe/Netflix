import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { db } from '../firebase'
import { updateDoc, doc, onSnapshot } from 'firebase/firestore'

const SavedShows = () => {
    const [movies, setMovies] = useState([])
    const { user } = UserAuth()
    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
          setMovies(doc.data()?.savedShow) 
        })
    }, [user?.email])
  return (
    <>
     <h2 className="text-white font-bold md:text-xl p-4">My Shows</h2>
    <div className="relative flex items-center group">
        <MdChevronLeft onClick={slideLeft} className='bg-white rounded-full absolute left-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
        <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'> 
            {movies.map((item, id) => (
                 <div key={id} className='w-[160px] sm:w-200px] md:[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                 <img src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title} className='w-full h-auto block' />
                 <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 hover:opacity-100 opacity-0 text-white">
                     <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
                     </div>
                     
             </div>
            ) )}
        </div>
        <MdChevronRight onClick={slideRight} className='bg-white rounded-full absolute right-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
    </div></>
  )
}

export default SavedShows