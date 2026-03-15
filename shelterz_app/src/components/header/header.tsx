'use client';

import Image from "next/image"
import Link from "next/link"
import styles from "./header.module.scss"
import { useRef } from "react";



export default function Header() {
    const containerRef = useRef<HTMLDivElement | null>(null)

    function openMenu() {
        if (!containerRef.current) return

        containerRef.current.style.left = '-2%'
        document.body.style.overflow = 'hidden' 
    }

    function closeMenu() {
        if (!containerRef.current) return

        containerRef.current.style.left = '-107%'
        document.body.style.overflow = '' 
    }

    return (
        <>
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__image}>
                    <Image height={0} width={0}  src={"/images/logo.svg"} alt="image"></Image>
                </div>
                <div className={styles.header__links}>
                    <Link href={"/"} className={styles.header__link}>Где потратить баллы</Link>
                    <Link href={"/"} className={styles.header__link}>Где заработать баллы</Link>
                    <Link href={"/"} className={styles.header__link}>Кешбек-программа</Link>
                    <Link href={"/"} className={styles.header__link}>Реферальная программа</Link>
                    <Link href={"/"} className={styles.header__link}>История</Link>
                </div>
                <div className={styles.header__user}>
                    <div className={styles.header__title}>Фамилия ИО</div>
                    <div  className={styles.header__image2}>
                        <Image src={"/images/user.svg"} alt="image" fill></Image>
                    </div>
                </div>
                <button onClick={openMenu} className={styles.header__burger}>
                    <Image src={"/images/burger.svg"} alt="" width={0} height={0}></Image>
                </button>
                <div ref={containerRef} className={styles.header__mobcontainer}>
                    <div className={styles.header__element}>
                        <div className={styles.header__moblogo}>
                            <Image src={"/images/logo.svg"} alt="" width={50} height={50}></Image>
                        </div>
                        <button onClick={closeMenu} className={styles.header__back}>
                            <Image src={"/images/back.svg"} alt="" width={0} height={0}></Image>
                        </button>  
                    </div>
                    <div className={styles.header__line}>
                        <Image src={"/images/line.png"} alt="" width={100} height={1}></Image>
                    </div>
                    <Link href={"/"} className={styles.header__link}>О нас</Link>
                    <Link href={"/"} className={styles.header__link}>Поддержка</Link>
                    <Link href={"/"} className={styles.header__link}>Политика Конфиденциальности</Link>
                    <Link href={"/"} className={styles.header__link}>Пользовательское Соглашение</Link>
                    <button onClick={closeMenu} className={styles.header__button}>Выйти</button>
                </div>
                {/* <button className={styles.button}>Войти</button> */}
            </div>
        </header>
        </>
    )
}