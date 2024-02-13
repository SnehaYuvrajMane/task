"use client"

// import Image from "next/image";
import Card from '@/components/card/Card'


import React, { useState,useEffect } from 'react'

export default 
function Home() {
   
  const [data,setData]=useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
      const Data = await response.json();
      setData(Data.results[0]);
      console.log(Data.results[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
  

    fetchData();
  }, []);


  return(
    <>
   {data && (
        <Card
          first={data.name.first}
          last={data.name.last}
          gender={data.gender}
          Image={data.picture.large}
          phone={data.phone}
        />
      )}

    </>
  );
}
