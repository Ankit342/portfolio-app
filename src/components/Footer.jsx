import styles from "./Footer.module.css";

export const Footer = () => {
    return (
        <footer className={styles.wrapper}>
            <h1 className={styles.title}>Ankit Poddar</h1>
            <p>Kolkata, West Bengal, INDIA</p>
            <p><a href="tel:+91-62898-77123" onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});" color="#85819f">+91 62898 77123</a> | info@domain.com</p>
            <div className={styles.socials}>
                <img
                    src="/assets/socials/twitter.png"
                    alt="social-icon"
                    className={styles.icon}
                />
                <img
                    src="/assets/socials/linkedin.png"
                    alt="social-icon"
                    className={styles.icon}
                />
                <a href="https://github.com/Ankit342">
                    <img src="/assets/socials/github.png" alt="social-icon" className={styles.icon} />
                </a>
            </div>
        </footer>
    );
};