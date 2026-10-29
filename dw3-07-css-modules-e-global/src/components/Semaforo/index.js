//Componente Semaforo
import { useState } from 'react';
import styles from './Semaforo.module.css';

const Semaforo = () => {
    //Criando o estado do semaforo
    const [luz, setLuz] = useState('cinza');

    return(
        <>
        <div 
        style ={{
            height: '100vh',
            display: 'flex',
            backgroundColor: 'white',
            flexDirection: 'column',
            alignItems: 'center'
        }

 }>
        <h3>Semaforo com React</h3>
        <br/>
        <div className={`${styles.luz} ${luz === 'vermelho' ? styles.vermelho : styles.cinza}`}>1</div>
        <div className={`${styles.luz} ${luz === 'amarelo' ? styles.amarelo : styles.cinza}`}>2</div>
        <div className={`${styles.luz} ${luz === 'verde' ? styles.verde : styles.cinza}`}>3</div>
        <div className={`${styles.luz} ${luz === 'laranja' ? styles.laranja : styles.cinza}`}>4</div>
        <br/>
        <div>
            <button className='button' onClick={() => setLuz("vermelho")}>Pare!</button>
            <button className='button' onClick={() => setLuz('amarelo')}>Atencao!</button>
            <button className='button' onClick={() => setLuz('verde')}>Siga!</button>  
            <button className='button' onClick={() => setLuz('laranja')}>TDAH</button>
        </div>
        </div>
        </>
    );
};

export default Semaforo;