import Image from "next/image";
import Link from "next/link";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Information from "../components/information/information";
import styles from "./page.module.scss"

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.main__container}> {/*СТРАНИЦА ВХОДА*/}
          <div className={styles.main__titles}>
            <div className={styles.main__title}>Единый аккаунт для всех сервисов</div>
            <button className={styles.main__button}>Войти</button>
          </div>
          <div className={styles.main__image}>
            <Image src={"/images/blocked.png"} alt="" width={500} height={300}></Image>
          </div>
          <div className={styles.main__moblogin}>
            <div className={styles.main__mobunion}>
              <Image src={"/images/union.svg"} alt="" width={0} height={0}></Image>
            </div>
            <div className={styles.main__backgroundmob}>
              <Image src={"/images/background2.png"} alt="" width={300} height={300}></Image>
            </div>
            <button className={styles.main__login}>Войти</button>
          </div>
        </div>  

        {/* <div className={styles.main__container2}> */}
        {/* <div className={styles.main__card}>
            <div className={styles.main__union}>
              <Image src={"/images/union.svg"} alt="" width={0} height={0}></Image>
            </div>
             <div className={styles.main__background}>
              <Image src={"/images/background.png"} alt="" width={650} height={650}></Image>
            </div>
            <div className={styles.main__information}>
              <div className={styles.main__ID}>
                <div className={styles.main__title2}>ID</div>
                <div className={styles.main__subtitle}>123456789</div>
              </div>
              <div className={styles.main__ID}>
                <div className={styles.main__title2}>Уровень</div>
                <div className={styles.main__subtitle}>Start</div>
              </div>
            </div>
            <div className={styles.main__balance}>
              <div className={styles.main__balance_title}>Балланс</div>
              <div className={styles.main__number}>
                <div className={styles.main__item}>1 000</div>
                <div className={styles.main__coin}>
                  <Image src={"/images/logo2.svg"} alt="" width={200} height={200}></Image>
                </div>
              </div>
            </div>
            <div className={styles.main__name}>Иванов А.В.</div>
            <div className={styles.main__element}>
              <div className={styles.main__number2}><span>.  .  .  .ㅤ   .  .  .  .ㅤ   .  .  .  .ㅤ</span> 1 2 3 4</div>
              <div className={styles.main__icon}>
                <Image src={"/images/icon.svg"} alt="" width={0} height={0}></Image>
              </div>
            </div>
          </div>
          <div className={styles.main__options}>
            <div className={styles.main__item2}>
              <div className={styles.main__icon2}>
                <Image src={"/images/translation.svg"} alt="" width={50} height={50}></Image>
              </div>
              <Link className={styles.main__translation} href={"/"}>Перевод</Link>
            </div>
            <div className={styles.main__item2}>
              <div className={styles.main__icon2}>
                <Image src={"/images/refferals.svg"} alt="" width={50} height={50}></Image>
              </div>
              <Link className={styles.main__translation} href={"/"}>Рефералы</Link>
            </div>
            <div className={styles.main__item2}>
              <div className={styles.main__icon2}>
                <Image src={"/images/settings.svg"} alt="" width={50} height={50}></Image>
              </div>
               <Link className={styles.main__translation} href={"/"}>Настройки</Link>
            </div>
            <div className={styles.main__item2}>
              <div className={styles.main__icon2}>
                <Image src={"/images/cashback.svg"} alt="" width={50} height={50}></Image>
              </div>
              <Link className={styles.main__translation} href={"/"}>Кешбек</Link>
            </div>
          </div>
        </div>  */}

        {/* <div className={styles.main__container2}>
         <div className={styles.main__card}>
            <div className={styles.main__union}>
              <Image src={"/images/union.svg"} alt="" width={0} height={0}></Image>
            </div>
             <div className={styles.main__background}>
              <Image src={"/images/background.png"} alt="" width={650} height={650}></Image>
            </div>
            <div className={styles.main__qrtitle}>
              Отсканируйте qr-cod
            </div>
            <div className={styles.main__qrcod}>
              <Image src={"/images/qrcod.svg"} alt="" width={0} height={0}></Image>
            </div>
            <div className={styles.main__qrsubtitle}>
              Действует еще 60 сек
            </div>
          </div>
          <div className={styles.main__options}>
            <div className={styles.main__item2}>
              <div className={styles.main__icon2}>
                <Image src={"/images/translation.svg"} alt="" width={50} height={50}></Image>
              </div>
              <Link className={styles.main__translation} href={"/"}>Перевод</Link>
            </div>
            <div className={styles.main__item2}>
              <div className={styles.main__icon2}>
                <Image src={"/images/refferals.svg"} alt="" width={50} height={50}></Image>
              </div>
              <Link className={styles.main__translation} href={"/"}>Рефералы</Link>
            </div>
            <div className={styles.main__item2}>
              <div className={styles.main__icon2}>
                <Image src={"/images/settings.svg"} alt="" width={50} height={50}></Image>
              </div>
               <Link className={styles.main__translation} href={"/"}>Настройки</Link>
            </div>
            <div className={styles.main__item2}>
              <div className={styles.main__icon2}>
                <Image src={"/images/cashback.svg"} alt="" width={50} height={50}></Image>
              </div>
              <Link className={styles.main__translation} href={"/"}>Кешбек</Link>
            </div>
          </div>
        </div> */}

        <Information />
      </main>
      <Footer />
    </>
  );
}
