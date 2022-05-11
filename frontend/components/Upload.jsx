import { PhotographIcon } from '@heroicons/react/outline'
import { useFormik } from 'formik'
import React, { useRef, useState } from 'react'
import axiosInstance from '../lib/api'

function Upload() {

  const inputFileRef = useRef(null)

  const [selectedFile, setSelectedFile] = useState(null)

  const formik = useFormik({
    initialValues: {
      caption: "",
      location: ""
    }
  })

  const handleFile = (event) => {
    setSelectedFile(event.target.files[0])
    alert(event.target.files[0].name)
  }

  const uploadContentHendler = async () => {
    if (!selectedFile) {
      alert("anda belum pilih file")
      return
    }

    const formData = new FormData()
    const { caption } = formik.values

    formData.append("caption", caption)
    formData.append("user_id", 1)
    formData.append("post_image_file", selectedFile)

    try {
      await axiosInstance.post("/posts", formData)
      setSelectedFile(null)
      formik.setFieldValue("caption", "")
    } catch (err) {
      console.log(err);
    }

  }

  return (
      <div>
          <div className='flex justify-center items-center bg-white w-full mt-5 border rounded-sm'>
                <input value={formik.values.caption} onChange={e => formik.setFieldValue("caption", e.target.value)} className='w-10/12 m-2' type="text" placeholder='Sup' />
                <input onChange={handleFile} ref={inputFileRef} type="file" className='hidden' />
                <PhotographIcon onClick={() => inputFileRef.current.click()} className='h-10 cursor-pointer hover:scale-125 transition-all duration-150 ease-out text-slate-500'/>
                <button onClick={uploadContentHendler} className='bg-blue-400 hover:bg-blue-300 text-white rounded-full p-2' type='submit'>Post</button>
         </div>
      </div>
    
  )
}

export default Upload