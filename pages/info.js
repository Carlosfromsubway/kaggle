import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import record from '../data/Yugioh.json'

import { useState } from 'react'
import React from 'react'
import Cards from '@/comps/cards'
import styled from 'styled-components'
export default function InfoPage() {
    const [burger, setBurger] = useState("burger-bar unclicked")
    const [menu, setMenu] = useState("menu hidden")
    const [Clicked, setClicked] = useState(false)
  
   
    const updateMenu = () => {
        if(!Clicked) {
            setBurger("burger-bar clicked")
            setMenu("menu visible")
        }
        else {
            setBurger("burger-bar unclicked")
            setMenu("menu hidden")
        }
        setClicked(!Clicked)
    }



    return (
        <main> 
        
        <div >
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger} ></div>
                    <div className={burger} ></div>
                    <div className={burger} ></div>
                </div>
                
            </nav>

            <div className={menu}>
            <a href="/">Home</a>
            <a href="/info">Info</a>
            </div>
        </div>

    <div className={styles.info}> 
    <div className={styles.Infocard}> 
    <div className={styles.spacing} >
        <h1>What do the card stats mean?</h1>
        <div className={styles.lefty}> 
        <p> Stars represent a Monsters level and will dictate if they can be used for certain XYZ summon or how many tributes are required for a tribute summon. </p>

        </div>
        <div className={styles.righty}>
            <img src='/Yugioh star.png' width={200}></img>

        </div>
        <a href="/">
          <span>
          <img src="/yugioharrow.png" width={200}></img>
          </span>
          </a>
    </div>
    </div>
</div>
        </main>
    )
}