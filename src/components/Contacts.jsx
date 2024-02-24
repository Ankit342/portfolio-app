import styles from "./Contacts.module.css";
import {useState} from 'react';

export const Contacts = () => {
    const [data, setData] = useState({
        name:"",
        email:"",
        message:"",
    });
    const {name,email,message}=data;
    const handleChange = (e)=>{
        setData({...data,[e.target.name]:e.target.value});
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const response = await fetch(
                "https://v1.nocodeapi.com/djack/google_sheets/zgzXvBciwvYdgjqK?tabId=Sheet1",
                {
                    method:"POST",
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify([[name,email,message, new Date().toLocaleString()]])
                }
            );
            await response.json();
            setData({...data, name : "",email:"",message:""});
        }catch(err){
            console.log(err);
        }
    }
    return (
        <form
            className={styles.wrapper}
            // id="form"
            // target="_blank"
            // action="https://formsubmit.co/ankits42057@gmail.com"
            // method="POST"
            onSubmit={handleSubmit}
        >
            <div className={styles.inputs}>
                <input
                    className={styles.input}
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={name}
                    onChange={handleChange}
                    required
                />
                <input
                    className={styles.input}
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className={styles.textareas}>
                <textarea
                    className={styles.textarea}
                    type="text"
                    name="message"
                    placeholder="Your message"
                    value={message}
                    onChange={handleChange}
                    required
                />
                <button className={styles.send} type="submit">
                    <img className={styles.icon} src="/assets/actions/send.png" alt="" />
                </button>
            </div>
        </form>
    );
};