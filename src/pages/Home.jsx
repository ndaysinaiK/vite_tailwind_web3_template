import React from 'react'
import Navbar from '../components/Navbar'
import styles from '../style'

export default function Home() {
  return (
    <div className={`${styles.paddingX} ${styles.flexCenter} z-50 relative `}>
        <div className={`${styles.boxWidth}`}>
            <Navbar />
        </div>   
    </div>

  )
}
