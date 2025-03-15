"use client";
import React from 'react'
import { Button } from "@/components/ui/button";
import * as Yup from 'yup'
import { Formik, useFormik } from 'formik';
// import Logo from './../Logo Icon.png'
import Image from 'next/image';
import { useRouter } from "next/navigation"; 
import Link from 'next/link';


export default function Signup() {
 const router = useRouter();
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

  const validationSchema = Yup.object({
    name:Yup.string().required('Name is required').min(3,'Name must be at least 3 characters').max(8,'Name must be at most 8 characters'),
    email:Yup.string().required('Email is required ').email('Email is not valid'),
    password:Yup.string().required('Password is required').matches(passwordRegex,'Password should start with uppercase letter followed by combination of letters and numbers between 8 and 15')
  })

  const formik = useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
    },
    validationSchema,
    onSubmit:(values ,{setStatus})=> {
       try{
      setStatus({success:"singup successfully" })
      setTimeout(()=>{router.push('/login') },2000)
       }catch(error){
        setStatus({error:"singup failed" })
       }

    }
  })

  console.log(formik.status);
  

  return (
   <>
<div className= 'sm:w-100 sm:m-5 md:w-[90%] lg:w-[66%] md:mx-auto shadow-2xl md:mt-16'>
   <div className='grid grid-cols-12  mx-auto '>

      <div className='sm:col-span-12 lg:col-span-6 sm:px-4 md:px-8 lg:px-12 py-16'>
        <h1 className='flex items-center gap-3'>
          <img  src="https://i.ibb.co/gMwxF7xR/Logo-Icon.png" alt="Logo-Icon" />
          <p className='mb-8 pt-6'>Chatplugify</p>
        </h1>
        <h2 className='mb-3'>Sign Up</h2>
        <p className='text-[#7B7A7A] mb-2'>Join us now and enjoy instant</p>
        {formik.status && formik.status.success && (
          <p> {formik.status.success}</p>
        )}

       {formik.status && formik.status.error && (
          <p> {formik.status.error}</p>

        )}

        <form action="" className='text-[#7B7A7A] mt-6' onSubmit={formik.handleSubmit}>
           <div>
             <input 
             value={formik.values.name}
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             className='border-1 border-gray-300 rounded-md px-2 py-1 w-full' 
             type="text" placeholder='Full name' name='name' />
             
             {formik.errors.name && formik.touched.name?( 
                     <div className='text-red-600 font-semibold mt-2'>
                    *{formik.errors.name}</div>):("")
                
            }
           </div>

            <br /> 
           <div>
             <input
              value={formik.values.email}
              onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             className='border-1 border-gray-300 rounded-md px-2 py-1 w-full' type="email" placeholder='Email' name='email' />
           {formik.errors.email && formik.touched.email?( 
                     <div className='text-red-600 font-semibold mt-2'>
                    *{formik.errors.email}</div>):("")
                
            }
           </div>
            <br />
           <div>
             <input 
             value={formik.values.password}
             onChange={formik.handleChange}
            onBlur={formik.handleBlur}
             className='border-1 border-gray-300 rounded-md px-2 py-1 w-full' type="password" placeholder='Password' name='password' />
           
           {formik.errors.password && formik.touched.password?( 
                     <div className='text-red-600 font-semibold mt-2'>
                    *{formik.errors.password}</div>):("")
                
            }
           </div>
            <br /> 

            <input type="checkbox" name='agree' id='agree' required />
            <label htmlFor="agree" className='ml-2'>I agree to the terms & Privacy policy</label><br />
   

 
           <Button type='submit' className='mt-6 bg-[#005B63] text-white w-full'>Button</Button>
          

            
        </form>
        <div className='mt-3 relative '>
            <p className=' before:w-[70px] before:h-[1px] before:bg-gray-200 before:absolute before:left-[11%] before:top-[10px] text-center text-[0.8rem] after:w-[70px] after:h-[1px] after:bg-gray-300 after:absolute after:right-[11%] after:top-[10px] '>Or Select Method To Sign Up</p>
        </div>
        <div className='flex gap-6 mt-2 items-center justify-between lg:px-8'>
            <Link href="" className='text-center flex items-center   w-[49%] gap-2 border-2 border-[#005B63] justify-center font-semibold py-2 rounded-md text-[#30313E]'>
             <img src="https://i.ibb.co/Jw8KhhZ3/bi-facebook.png" alt="" />
             <span> Geogle</span>
            </Link >

        <Link href="" className='flex items-center  w-[49%] gap-2 border-2 border-[#005B63] justify-center px-10 font-semibold py-2 rounded-md text-[#30313E]'>
        <img src="https://i.ibb.co/TMy85Jym/devicon-google.png" alt="" />
            <span>Facebook</span>
        </Link ></div>
      </div>
      
      <div className='sm:col-span-12 lg:col-span-6 bg-[#005B63] flex justify-center items-center'>

        <div className='w-[350px] h-[350px] rounded-full bg-gradient-to-br from-[#005B63] via-white/30 to-transparent] relative px-8 py-14'>
        <div className=' ml-2 mt-4'>
        <p className='text-white bg-[#FFFFFF4D] rounded-full py-2 px-1.5 w-fit text-[12px] mb-4'>
          Ready for faster, closer support ?</p>
          <p className='bg-[#FFFFFF4D] rounded-full h-[15px] w-[150px] mb-3'></p>
          <p className='bg-[#FFFFFF4D] rounded-full h-[15px] w-[120px]'></p>
          </div>
        <div className='absolute -right-[34%] top-[12%] w-[300px] h-[321px]'><img src="https://s3-alpha-sig.figma.com/img/c4fc/2613/fb11f5a1c6efdebec576aa2b1b255855?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HWv1rX-M8B0HW6Gc05CzIWIvNNNlzoQsOHgTvfJ-oS7fgyvNhYDP41o6XRx0l8yhrwyUe1mo1OTsoJgnrzwRai2OALjo0VZp6~4CsDViuOTDtnQXSK0oUIgctM7~BDtBUHQwak5Za2kX0BfP~w~BGv2PVZjQoukLfNd9pqZQ4juUj37BYUOtEzY5ZFLV1HSNrf4kYGHUV29vZ-XXlXMB9ShGYn3YizV88-jAXnW0Q~dIZDFG5rgqg6HjUSZvPwPr~cwh4dx0Bz1XJulifGq7Exab8RHfgNvNn4XIILvC9mz5vfWdf~AI8H3TBqpktTij3nbs8TYSgs6ryIVMNVQVaA__" alt="" /></div>
        </div>
        </div>
   </div>
 </div>
   </>
  )
}
