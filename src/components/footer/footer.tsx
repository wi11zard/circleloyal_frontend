'use client';

import Image from "next/image"
import Link from "next/link"
import styles from "./footer.module.scss"


export default function Footer() {
  return (
    <>
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__logo}>
          <Image src={"/images/logo.svg"} alt="" width={10} height={10}></Image>
        </div>
        <div className={styles.footer__links}>
          <Link className={styles.footer__link} href={"/"}>История</Link>
          <Link className={styles.footer__link} href={"/"}>Где потратить баллы</Link>
          <Link className={styles.footer__link} href={"/"}>Кешбек-программа</Link>
          <Link className={styles.footer__link} href={"/"}>О нас</Link>
          <Link className={styles.footer__link} href={"/"}>Политика Конфиденциальности</Link>
          <Link className={styles.footer__link} href={"/"}>Личный кабинет</Link>
          <Link className={styles.footer__link} href={"/"}>Где заработать баллы</Link>
          <Link className={styles.footer__link} href={"/"}>Реферальная программа</Link>
          <Link className={styles.footer__link} href={"/"}>Поддержка</Link>
          <Link className={styles.footer__link} href={"/"}>Пользовательское Соглашение</Link>
        </div>
      </div>
      <div className={styles.footer__image1}>
        <Image src={"/images/line.png"} alt="" width={0} height={1}></Image>
      </div>
      <div className={styles.footer__subtitle}>2026 CircleLoyal. Все права защищены</div>
    </footer>
     <footer className={styles.footer__sections}>
        <div className={styles.footer__section}>
          <button className={styles.footer__image}>
            <Image src={"/images/home.svg"} alt="" width={50} height={50}></Image>
          </button>
          <div className={styles.footer__title}>Главная</div>
        </div> 
        <div className={styles.footer__section}>
          <button className={styles.footer__image2}>
            <Image src={"/images/user2.svg"} alt="" width={50} height={50}></Image>
          </button>
          <div className={styles.footer__title}>Личный кабинет</div>
        </div>
         <div className={styles.footer__section}>
          <button className={styles.footer__image3}>
            <Image src={"/images/history.svg"} alt="" width={50} height={50}></Image>
          </button>
          <div className={styles.footer__title}>История</div>
        </div>
    </footer>
    </>
  )
}