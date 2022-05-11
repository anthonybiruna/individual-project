import React from 'react'
import { HeartIcon, DotsHorizontalIcon, ChatIcon, ExternalLinkIcon } from '@heroicons/react/outline'

function Post({id, username, imageUrl, caption, User}) {
  return (
    <div className='bg-white my-3 border rounded-sm'>
        <div className='flex items-center px-1'>
            <img src="https://cdn0-production-images-kly.akamaized.net/YrZafZSTHAlDQvg2JBbBoaU-wyk=/1200x1200/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1747946/original/002640400_1539937802-066235400_1508744892-800px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg" 
            className='rounded-xl h-12 w-12 object-contain border p-1 mr-3'
            alt='toni'/>
            <p className='flex-1 font-bold'>{User?.username}</p>
            <DotsHorizontalIcon className='h-5 text-blue-500'/>
        </div>

        <p className='p-3 truncate'>
          {caption}
        </p>

        <img src={imageUrl} className='object-cover w-full' alt="image"/>

        <div>
          <div className='flex justify-between px-4 pt-4'>
        <div className='flex space-x-4'>
          <HeartIcon className='btn'/>
          <ChatIcon className='btn'/>
        </div>

        <ExternalLinkIcon className='btn'/>
        </div>

        <form className='flex items-center p-4'>
          <input type='text' placeholder='komen yuk' className='border-none flex-1 focus:ring-0 outline-none'/>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Post</button>
        </form>

        </div>


    </div>
  )
}

export default Post