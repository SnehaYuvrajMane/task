"use client"

import React from 'react'
import { useState,useEffect } from 'react'




function Card({first,last,gender,Image,phone}) {
   
  



    return (
        <>
            <div className="w-screen h-screen flex justify-center items-center gap-20">
        <div className="relative p-5 w-96 h-56 rounded-xl  dark:backdrop-blur-md flex items-center gap-8 shadow-2xl bg-teal-50">
         
        <div className=" hover:w-48 ">
                <img src={Image}width={200} height={200} className=" rounded-full" />
            </div>
            <div className="flex flex-col gap-5">
              <div className='flex gap-2 font-semibold text-xl'>
                <p className=" ">{first}</p>
                <p>{last}</p>
              </div>
              <div className=' text-xl'>
                <p>{gender}</p>
              </div>
              <div>{phone}</div>
            </div>
        

       
      </div>
      </div>
        </>
    )
}
export default Card