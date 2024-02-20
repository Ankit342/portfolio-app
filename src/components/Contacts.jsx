import styles from "./Contacts.module.css";
import {useRef} from 'react';

export const Contacts = () => {
    const nameRef = useRef(null);
    const emRef = useRef(null);
    const meRef = useRef(null);
    const handleSubmit = event =>{
        event.preventDefault();
        nameRef.current.value = '';
        emRef.current.value = '';
        meRef.current.value = '';
    };
    return (
        <form
            className={styles.wrapper}
            target="_blank"
            action="https://formsubmit.co/ankits42057@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
        >
            <div className={styles.inputs}>
                <input
                    ref={nameRef}
                    className={styles.input}
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                />
                <input
                    ref={emRef}
                    className={styles.input}
                    type="email"
                    name="email"
                    placeholder="Your email"
                    required
                />
            </div>
            <div className={styles.textareas}>
                <textarea
                    ref={meRef}
                    className={styles.textarea}
                    type="text"
                    name="message"
                    placeholder="Your message"
                    required
                />
                <button className={styles.send} type="submit">
                    <img className={styles.icon} src="/assets/actions/send.png" alt="" />
                </button>
            </div>
        </form>
    );
};