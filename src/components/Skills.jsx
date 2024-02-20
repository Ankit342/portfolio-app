import styles from "./Skills.module.css";

import { skills } from "../content/skills";

export const Skills = () => {
    return (
        <section className={styles.wrapper}>
            {skills.map((skill, index) => {
                return (
                    <div className={styles.card} key={index}>
                        <img className={styles.icon} src={skill.icon} alt="icon" />
                        <h2 className={styles.title}>{skill.title}</h2>
                        <div className={styles.description}>{skill.description.map(s =>
                            <div className={styles.sitem} key={s.id} style={{ border: `2px solid ${s.color}` }}>
                            {s.name}
                            </div>)}
                        </div>
                    </div>
                );
            })}
        </section>
    );
};