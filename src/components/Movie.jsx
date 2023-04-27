import React, { useState } from 'react' 
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'

const Movie = ({item}) => {
    const [like, setLike] = useState(false)
    const [saved, setSaved] = useState(false)
    const { user } = UserAuth()

    const savedShow = async () => {
      if(user?.email) {
        setLike(!like)
        setSaved(true)
        await updateDoc(movieID, {
          savedShow: arrayUnion({
            id:item.id,
            title: item.title,
            img: item.backdrop_path
          })
        })
      } else {
        alert('please log in to save a movie')
      }
    }
     
    const movieID = doc(db, 'users', `${user?.email}`)
  return (
    <div className='w-[160px] sm:w-200px] md:[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
    <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} className='w-full h-auto block' />
    <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 hover:opacity-100 opacity-0 text-white">
        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
        <p onClick={savedShow}>
         {like ? <FaHeart className='absolute top-4 left-4 text-gray-300'/> : <FaRegHeart className='absolute top-4 left-4 text-gray-300'/>}
         </p>
        </div>
        
</div>
  )
}

export default Movie