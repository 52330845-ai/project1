import React from 'react'
import images from '../Components/Assets/images.jpg'
export const ShopCategory = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
       <h2 className='text-200xl font-bold mb-4'>MEN COLLECTION</h2>
  <img src={images} alt=""  className="w-1000 h-auto rounded-lg shadow-lg" />
    </div>
  )
}
export default ShopCategory