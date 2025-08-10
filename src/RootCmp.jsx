import React from 'react'
import { RealtyHeader } from './cmps/RealtyHeader'
import { RealtyHome } from './cmps/RealtyHome'
import { RealtyList } from './cmps/RealtyList'
import { RealtyVideo } from './cmps/RealtyVideo'
import { RealtyPodacst } from './cmps/RealtyPodcast'
import { RealtyFooter } from './cmps/RealtyFooter'



export function RootCmp() {
    return <div className='main-page'>
        <RealtyHeader />
        <RealtyHome />
        <RealtyList />
        <RealtyVideo />
        <RealtyPodacst />
        <RealtyFooter />
    </div>







}


