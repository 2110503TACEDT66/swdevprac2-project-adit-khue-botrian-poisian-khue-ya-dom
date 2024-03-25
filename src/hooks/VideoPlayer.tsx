'use client'
import {useRef,useEffect,useState} from 'react'
import  useWindowListener  from './useWindowListener'
export default function VideoPlayer(
    {vdoSrc, isPlaying}: {vdoSrc:string,isPlaying:boolean}) {
        const vdoRef = useRef<HTMLVideoElement>(null)
        useWindowListener('resize',
        (e)=>alert('window width is'+(e.target as Window).innerWidth))
       useEffect(()=> {
            //alert('width is' + vdoRef.current?.videoWidth)
        if(isPlaying) {
            vdoRef.current?.play()
        }
        else {
            vdoRef.current?.pause()
        }
    })
    return (
        <video className='w-[40%]' src={vdoSrc} ref ={vdoRef} muted
        loop controls/>
    )
    }