import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react'
import React from 'react'

export default function InfoPage() {
    const [burger, setBurger] = useState("burger-bar unclicked")
    const [menu, setMenu] = useState("menu hidden")
    const [Clicked, setClicked] = useState(false)

    const names = ["Blue Eyes White Dragon, Pot of Greed, Mirror Force"]
    const [number, setNumber] = useState();


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




    useEffect(() => {
        setNumber(Math.floor(Math.random() * 2 ))
    }, [])
    
   if(names[number] === "Blue Eyes White Dragon"){

    return (
        <>
        
        <main> 
        
        <div id="burger">
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
        <p>Stars represent a Monsters level and will dictate if they can be used for certain XYZ summon or how many tributes are required for a tribute summon. A monster with 5 to 6 stars requires 1 tribute, a monster with 7 to 8 stars requires 2 tributes. An XYZ monster will require monsters with the same levels to be materials.</p>
        <p>The words contained in the brackets are the monsters types; it indicates what race it can fall into, if it has an effect or can be used on the pendulum scale.</p>

        </div>
        <div className={styles.righty}>
            <img src='/Yugioh star.png' width={200}></img>
            <img src='/stats.jpg' width={400}></img>

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
        </>
    )
   } else {
    return (
        <>
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
        <h1>Card stats and info</h1>
        <div className={styles.lefty}> 
        <p>Stars represent a Monsters level and will dictate if they can be used for certain XYZ summon or how many tributes are required for a tribute summon. A monster with 5 to 6 stars requires 1 tribute, a monster with 7 to 8 stars requires 2 tributes. An XYZ monster will require monsters with the same levels to be materials.</p>
        <p>The words contained in the brackets are the monsters types; it indicates what race it can fall into, if it has an effect or can be used on the pendulum scale.</p>

        </div>
        <div className={styles.righty}>
            <img src='/Yugioh star.png' width={200}></img>
            <img src='/stats.jpg' width={400}></img>

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
        </>
    )
   }





}