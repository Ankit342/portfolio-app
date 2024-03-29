import styles from "./About.module.css";
import { about } from "../content/about";

export const About = () => {
    return (
        <section className={styles.wrapper}>
            {about.map((item, index) => {
                return (
                    <div className={styles.card} key={index}>
                        <div className={styles.info}>
                            <h2 className={styles.title}>{item.title}</h2>
                            <p className={styles.name}>{item.name} | {item.loc}</p>
                            <p className={styles.description}>{item.duration}</p>
                        </div>
                        <div className={styles.info}>
                            <img className={styles.icon} src={item.icon} alt="" />
                        </div>
                    </div>
                );
            })}
        </section>
    );
};