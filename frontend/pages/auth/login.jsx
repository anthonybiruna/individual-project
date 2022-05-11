import React, { useState } from 'react'
import jsCookie from 'js-cookie'
import api from '../../lib/api'
import { useFormik } from 'formik'
import * as Yup from "yup"
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { auth_types } from '../../redux/types'
import { userLogin } from '../../redux/actions/auth'

function Login() {

    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()

    const router = useRouter()

    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema: Yup.object().shape({
            username: Yup.string().required("This field is required"),
            password: Yup.string().required("This field is required")
        }),
        validateOnChange: false,
        onSubmit: async (values) => {
            setLoading(true)

            try {
                dispatch(userLogin(values))

                router.push("/")
            } catch (err) {
                console.log(err);
                setLoading(false)
            }
        }
    })

  return (
      
    <div className='flex h-screen justify-center item-center'>
        <div className='m-auto bg-blue-300 rounded-xl shadow-lg '>
            <div className='m-5'>

                <p className='flex justify-center font-bold text-xl text-white'> Sign In Yuk</p>

                <div className='mt-5'>
                    <input onChange={(event) => formik.setFieldValue("username", event.target.value)} className='rounded-full' type="text" placeholder='username' />
                    <p className='text-xs text-red-500'>{formik.errors.username}</p>
                </div>

                <div className='mt-5'>
                    <input onChange={(event) => formik.setFieldValue("password", event.target.value)} className='rounded-full' type="password" placeholder='password' />
                    <p className='text-xs text-red-500'>{formik.errors.password}</p>
                </div>

                <button onClick={formik.handleSubmit} className='bg-blue-500 hover:bg-blue-600 text-white rounded-full mt-5 p-2 w-full' type='submit' disabled={loading}>Sign In</button>
            
            </div>
          
        </div>
    </div>
  )
}

export default Login