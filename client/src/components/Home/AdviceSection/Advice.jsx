import { useState, useEffect } from 'react';
import styles from './Advice.module.css';

const AdviceComponent = () => {
    const [advice, setAdvice] = useState({
        advice: 'The sun always shines above the clouds.',
        id: '187'
    });

    useEffect(() => {
        const interval = setInterval(async () => {
            const response = await fetch('https://api.adviceslip.com/advice');
            const data = await response.json();
            setAdvice(data.slip);
        }, 5000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <>  
        <div className={styles.adviceContainer}>
            <h5>Advice #{advice.id}</h5>
            <p><i className="fa-solid fa-quote-left"></i>{advice.advice}<i className="fa-solid fa-quote-right"></i></p>
        </div>
        </>
    );
};

export default AdviceComponent;








