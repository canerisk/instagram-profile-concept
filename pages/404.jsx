import Header from './panel/_header'

import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect } from "react";

export default function error() {

    return (

        <div>
            <div className='h-[100vh] w-full flex justify-center items-center'>
            <h1 className=' text-sm'>Aradığınız Yol Çözümlenemedi.</h1>
            </div>
        </div>
    );
}