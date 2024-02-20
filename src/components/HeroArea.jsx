import styles from "./HeroArea.module.css";
import { Typewriter } from 'react-simple-typewriter'
export const HeroArea = () => {
    // const handleType = (count) => {
    //     console.log(count)
    //   }
    
    //   const handleDone = () => {
    //     console.log(`Done after 5 loops!`);
    //   }
    return (
        <section className={styles.wrapper}>
            <div className={styles.heroarea}>
                <div className={styles.profile}></div>
            {/* <img className={styles.profile} src="/assets/profile.png" alt="profile" /> */}
            <h2 className="title">Hi, I'm{' '}
            <span className={styles.typer}>
          <Typewriter
            words={['Ankit!', 'a Web Developer', 'a Flutter App Dev', 'a Code Enthusiast']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
            </h2></div>
            <p className="description">
                An aspiring web and flutter app developer looking for a new role in tech
            </p>
            <div className={styles.buttonBox}>
                <button
                    className={`${styles.button} ${styles.project}`}
                    onClick={() => {
                        document
                            .getElementById("projects")
                            .scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    My projects
                </button>
                <button
                    className={`${styles.button} ${styles.hire}`}
                    onClick={() => {
                        document
                            .getElementById("contact")
                            .scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    Hire me
                </button>
            </div>
        </section>
    );
};