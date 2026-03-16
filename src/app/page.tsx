"use client"

import Image from "next/image";
import Link from "next/link";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Information from "../components/information/information";
import styles from "./page.module.scss"
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
  if (isModalOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (isTransferModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isTransferModalOpen]);

  return (
    <>
      <Header />
     <main className={styles.main}>
      {/* <div className={styles.main__container}>
       <div className={styles.main__titles}>
            <div className={styles.main__title}>Единый аккаунт для всех сервисов</div>
            <button onClick={() => setIsModalOpen(true)} className={styles.main__button}>Войти</button>
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
             <button onClick={() => setIsModalOpen(true) } className={styles.main__login}>Войти</button>
          </div>
        </div>  

         {isModalOpen && (
          <div
            className={styles.modalOverlay}
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className={styles.modal}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.mobcontainer2}>
                 <div className={styles.moblogo2}>
                  <Image src={"/images/logo.svg"} alt="" width={0} height={0}></Image>
                </div>

                <button
                  className={styles.modalClose}
                  onClick={() => setIsModalOpen(false)}
                >
                  <Image src={"/images/back.svg"} alt="" width={40} height={40}></Image>
                </button>
              </div>
              <h2 className={styles.modalTitle}>Авторизация</h2>
             

                <div className={styles.mobline1}>
                <Image src={"/images/line.png"} alt="" width={0} height={1}></Image>
              </div>

              <div className={styles.modalField}>
                <label className={styles.modalLabel}>Почта</label>
                <div className={styles.gmail}>
                  <Image src={"/images/user3.svg"} alt="" height={0} width={0}></Image>
                </div>
                <input
                  type="email"
                  placeholder="login@mail.ru"
                  autoComplete="off"
                  className={styles.modalInput}
                />
              </div>

              <div className={styles.modalField}>
                <label className={styles.modalLabel}>Пароль</label>
                <div className={styles.password}>
                  <Image src={"/images/password.svg"} alt="" height={0} width={0}></Image>
                </div>
                <input
                  autoComplete="off"
                  type="password"
                  placeholder="••••••••"
                  className={styles.modalInput}
                />
              </div>

              <a href="#" className={styles.modalForgot}>
                Не помню пароль
              </a>

              <button className={styles.modalSubmit}>Войти</button>
            </div>
          </div>
        )}
    */}

        <div className={styles.main__container2}>
        <div className={styles.main__card}>
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
              <button onClick={() => setIsTransferModalOpen(true)}  className={styles.main__translation}>Переводы</button>
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
        </div> 

        {isTransferModalOpen && (
          <div
            className={styles.transferOverlay}
            onClick={() => setIsTransferModalOpen(false)}
          >
            <div
              className={styles.transferModal}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.transferClose}
                onClick={() => setIsTransferModalOpen(false)}
                aria-label="Закрыть"
                type="button"
              >
                <Image src={"/images/back.svg"} alt="" width={0} height={0}></Image>
              </button>
        
              <div className={styles.transferHeader}>
                <div className={styles.transferTitle}>Перевод баллов</div>
                <div className={styles.transferSubtitle}>
                  Переведите баллы на карту другого пользователя
                </div>
              </div>
        
              <div className={styles.transferGrid}>
                <div className={styles.transferField}>
                  <div className={styles.transferLabel}>Номер карты получателя</div>
                  <div className={styles.transferInputWrap}>
                    <span className={styles.transferIcon}>
                      <Image src="/images/card.svg" alt="" width={20} height={20} />
                    </span>
                    <input
                      autoComplete="off"
                      type="password"
                      className={styles.transferInput}
                      placeholder="•  •  •  •ㅤ   •  •  •  •ㅤ   •  •  •  •"
                    />
                  </div>
                </div>
        
                <div className={styles.transferField}>
                  <div className={styles.transferLabel}>Получатель</div>
                  <div className={styles.transferInputWrap}>
                    <span className={styles.transferIcon}>
                      <Image src="/images/user3.svg" alt="" width={20} height={20} />
                    </span>
                    
                    <input autoComplete="off" className={styles.transferInput2} placeholder="ID" />
                  </div>
                </div>
        
                <div className={styles.transferField}>
                  <div className={styles.transferLabel}>Сумма перевода (баллы)</div>
                  <div className={styles.transferInputWrap}>
                    <span className={styles.transferIcon}>
                      <Image src="/images/money2.svg" alt="" width={20} height={20} />
                    </span>
                    <input autoComplete="off" type="number" className={styles.transferInput} placeholder="00.00" />
                  </div>
                </div>
        
                <div className={styles.transferField}>
                  <div className={styles.transferLabel}>Комментарий (необязательно)</div>
                  <div className={styles.transferInputWrap}>
                    <span className={styles.transferIcon}>
                      <Image src="/images/comment.svg" alt="" width={20} height={20} />
                    </span>
                    <input
                      autoComplete="off"
                      className={styles.transferInput2}
                      placeholder="Сообщение получателю"
                    />
                  </div>
                </div>
              </div>
        
              <div className={styles.transferInfoBox}>
                <div className={styles.transferInfoRow}>
                  <div className={styles.transferInfoKey}>Доступно для перевода:</div>
                  <div className={styles.transferInfoVal}>
                    1000
                    <span className={styles.transferCoin1}>
                      <Image src="/images/logo2.svg" alt="" width={0} height={0} />
                    </span>
                  </div>
                </div>
        
                <div className={styles.transferInfoRow}>
                  <div className={styles.transferInfoKey}>Комиссия:</div>
                  <div className={styles.transferInfoValSmall}>Бесплатно</div>
                </div>
                <div className={styles.mobline2}>
                  <Image src={"/images/line.png"} alt="" width={0} height={1}></Image>
                </div>
                <div className={styles.transferInfoRow}>
                  <div className={styles.transferInfoKey3}>Баланс после перевода:</div>
                  <div className={styles.transferInfoVal3}>
                    500
                    <span className={styles.transferCoin}>
                      <Image src="/images/logo2.svg" alt="" width={0} height={0} />
                    </span>
                  </div>
                </div>
              </div>
        
              <button className={styles.transferSubmit} type="button">
                Перевести баллы
              </button>
        
              <Link className={styles.transferRules} href={"/"}>Условия перевода</Link>
            </div>
          </div>
        )}

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
