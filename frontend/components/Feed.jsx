
import React from 'react'
import Posts from './Posts'
import Upload from './Upload'

function Feed() {
  
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl mx-auto'>
        <section className='col-span-2'>
            <Upload/>
            <Posts/>
        </section>
    </main>
  )
}

export default Feed