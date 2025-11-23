import React from 'react'
import kid from '../Components/Assets/kid.jpg'
export const Kids = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'> 
      <h2 className='text-200xl font-bold mb-4'>KIDS COLLECTION</h2>
      <img src={kid} alt=""  className="w-1000 h-auto rounded-lg shadow-lg" />
    </div>
  )
}
export default Kids
