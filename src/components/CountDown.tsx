"use client"
import React from 'react'
import Countdown from 'react-countdown'

interface Props {
    
}
const endDate=new Date("2023-08-21")

const CountDown = (props: Props) => {
    return (
        <div>
           <Countdown date={endDate} className='font-bold text-5xl text-yellow-300'/> 
        </div>
    )
}

export default CountDown
