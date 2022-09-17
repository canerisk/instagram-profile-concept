import Head from 'next/head'
import Img from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'
import Header from './panel/_header'

import Link from 'next/link'
import { Dialog, Menu, Listbox, Switch, Popover, Tab, Transition, Disclosure } from '@headlessui/react'
import React, { useRef,useEffect,useState } from "react";
export default function Home() {
  return (

    <div>
      
        <Header/>

        <div className='px-56 py-24'>
          <div>
          <div className='flex justify-between w-full items-center '>
          <div className='flex items-center gap-12'>
          <div><img className='rounded-full w-40' src='https://cdn.discordapp.com/avatars/811888718758805504/56686eef1632caa913732c8c8299adb9.png?size=256'></img></div>
          <div>
            <div className='flex items-center'>
              <h1 className='text-3xl font-bold'>Rakzid</h1>
              <div><img className='w-9 shadow-xl' src='https://parspng.com/wp-content/uploads/2022/07/tickpng.parspng.com-4.png'></img></div>
            </div>
            <div className='flex items-center bg-[#1D1D1D] px-3 rounded py-1 mt-2 gap-8'>
              <div className='flex items-center text-sm gap-1 '>
                <h1 className='font-semibold'>93</h1>
                <h4 className='font-light'>Gönderi</h4>
              </div>
              <div className='flex items-center text-sm gap-1 '>
                <h1 className='font-semibold'>1,066</h1>
                <h4 className='font-light'>Takipçi</h4>
              </div>
              <div className='flex items-center text-sm gap-1 '>
                <h1 className='font-semibold'>32</h1>
                <h4 className='font-light'>Takip</h4>
              </div>
            </div>
            <div>
              <div className='bg-transparent flex flex-col text-sm font-light gap-y-1 mt-2'>
              <span>It's not how long you live, it's how you live.</span>
              <span>🌟 FrontEnd Developer</span>
              <span>⭐️ RabeL Code @ CEO</span>
              </div>
            </div>
            </div>


          </div>
          <div className='flex justify-end gap-3 flex-col'>
              <div><Link href=''><button className='bg-blue-500 w-full px-20 text-sm py-2 rounded'>Takip Et</button></Link></div>
              <div><Link href=''><button className='bg-[#1D1D1D] w-full px-20 text-sm py-2 rounded'>Mesaj Gönder</button></Link></div>
            </div>
          </div>
          </div>
          <div className='flex items-center  h-[23rem] justify-center'>
            <div className='flex flex-col items-center gap-5'>
            <div><div className='border-2 border-red-400 rounded-full p-2'><svg class="w-8 h-8 fill-current text-red-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg></div></div>
            <h4 className='font-light'>Bu hesabın fotoğraf görüntülemesi kapalı</h4>
            </div>
          </div>
        </div>
    </div>
  

  )

}

