'use client';

import Image from "next/image"
import styles from "./infromation.module.scss"


export default function Information() {
    return (
        <div className={styles.container}>
            <div className={styles.container__spend}>
                <div className={styles.container__title}>
                    Где потратить баллы
                </div>
                <div className={styles.container__element}>
                    <div className={styles.container__item}>
                        <div className={styles.container__image}>
                            <Image src={"/images/shelterz.svg"} width={0} height={0} alt=""></Image>
                        </div>
                        <div className={styles.container__subtitle}>shelterz.ru</div>
                    </div>
                    <div className={styles.container__item}>
                        <div className={styles.container__image}>
                            <Image src={"/images/money.svg"} width={0} height={0} alt=""></Image>
                        </div>
                        <div className={styles.container__subtitle}>moneytasks.ru</div>
                    </div>
                    <div className={styles.container__item}>
                        <div className={styles.container__image}>
                            <Image src={"/images/star.svg"} width={0} height={0} alt=""></Image>
                        </div>
                        <div className={styles.container__subtitle}>otzyvshop.ru</div>
                    </div>
                </div>
            </div>
            <div className={styles.container__spend}>
                <div className={styles.container__title}>
                    Где заработать баллы
                </div>
                <div className={styles.container__element}>
                    <div className={styles.container__item}>
                        <div className={styles.container__image}>
                            <Image src={"/images/shelterz.svg"} width={0} height={0} alt=""></Image>
                        </div>
                        <div className={styles.container__subtitle}>shelterz.ru</div>
                    </div>
                    <div className={styles.container__item}>
                        <div className={styles.container__image}>
                            <Image src={"/images/money.svg"} width={0} height={0} alt=""></Image>
                        </div>
                        <div className={styles.container__subtitle}>moneytasks.ru</div>
                    </div>
                    <div className={styles.container__item}>
                        <div className={styles.container__image}>
                            <Image src={"/images/star.svg"} width={0} height={0} alt=""></Image>
                        </div>
                        <div className={styles.container__subtitle}>otzyvshop.ru</div>
                    </div>
                </div>
            </div>
            <div className={styles.container__information}>
                <div className={styles.container__title}>Кешбек-программа</div>
                <div className={styles.container__image2}>
                    <Image className={styles.container__img}  src={"/images/information.svg"} width={0} height={0} alt=""></Image>
                     <Image className={styles.container__img2} src={"/images/informationmob.svg"} width={0} height={0} alt=""></Image>

                    <div className={styles.container__lines}>
                        <Image src={"/images/lines2.png"} alt="" width={120} height={90}></Image>
                    </div>
                </div>
                <button className={styles.container__button}>Ознакомиться</button>
            </div>
            <div className={styles.container__information}>
                <div className={styles.container__title}>Реферальная программа</div>
                <div className={styles.container__image2}>
                    <Image className={styles.container__img} src={"/images/information2.svg"} width={0} height={0} alt=""></Image>
                    <Image className={styles.container__img2} src={"/images/informationmob-two.svg"} width={0} height={0} alt=""></Image>


                    <div className={styles.container__lines}>
                        <Image src={"/images/lines2.png"} alt="" width={120} height={90}></Image>
                    </div>
                </div>
                 
                <button className={styles.container__button}>Ознакомиться</button>
            </div>
        </div>
    )
}