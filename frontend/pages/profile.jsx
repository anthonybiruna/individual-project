import React from 'react'

function Profile() {
  return (
    <div className='bg-slate-100 py-5 px-10 rounded-xl mx-auto md:max-w-xl'>
        <div className='flex'>
            <img src="https://cdn0-production-images-kly.akamaized.net/YrZafZSTHAlDQvg2JBbBoaU-wyk=/1200x1200/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1747946/original/002640400_1539937802-066235400_1508744892-800px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg" 
            className='rounded-xl h-28 w-28 object-contain border p-1 mr-3'
            alt='toni'/>
            <div className='px-10 md:px-20'>
                <p className='text-2xl font-bold text-blue-500'>Anthony Biruna</p>
                <p className='text-slate-600'>I Nyoman Anthony Biruna</p>
                <p className='text-slate-600'> anthony@email.com</p>
                <p className='text-slate-600'>Pabrik Pigure</p>
            </div>
        </div>
        
    </div>
  )
}

export default Profile