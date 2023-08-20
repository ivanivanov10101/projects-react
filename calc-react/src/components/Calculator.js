import styles from "../components/Calculator.module.css"
import {useContext, useEffect, useState} from "react";
import {FiMoon, FiSun} from 'react-icons/fi'
import {LightModeContext} from './lightModeContext'

const Calculator = () => {

    const [inputNum, setInputNum] = useState(0);
    const [calculatedNum, setCalculatedNum] = useState(0);
    const [monitor, setMonitor] = useState(0);
    const [operator, setOperator] = useState('');
    const [decimal, setDecimal] = useState(false);
    const [decimalCount, setDecimalCount] = useState(1);

    const { lightMode, toggleLightMode } = useContext(LightModeContext);

    useEffect(() => {
        setMonitor(inputNum)
    }, [inputNum]);


    useEffect(() => {
        setMonitor(calculatedNum)
    }, [calculatedNum]);

    const clearAll = () => {
        setInputNum(0);
        setCalculatedNum(0);
        setMonitor(0);
        setOperator('');
    }

    const inputOperator = (operator) => {
        setOperator(operator);
        calculate();
        setInputNum(0);

    }

    const calculate = () => {
        setDecimal(false);
        setDecimalCount(1);

        if (operator === '/' && inputNum === 0) {
            setCalculatedNum(NaN);
            setInputNum(0)
            return
        }
        if (calculatedNum === 0 && inputNum === 0) {
            return
        }
        switch (operator) {
            case '+':
                setCalculatedNum(calculatedNum + inputNum);
                break;
            case '/':
                setCalculatedNum(calculatedNum / inputNum);
                break;
            case '*':
                setCalculatedNum(calculatedNum * inputNum);
                break;
            case '-':
                setCalculatedNum(calculatedNum - inputNum);
                break;
        }
        if (operator === '') {
            setCalculatedNum(inputNum);
        }
        else {
            setInputNum(0);
        }
        return;
    }

    const inputNumTotal = (number) => {
        if (decimal) {
            number = number / Math.pow(10, decimalCount);
            setDecimalCount(decimalCount + 1);
            setInputNum(parseFloat((inputNum + number).toFixed(decimalCount)))
        } else {
            setInputNum(inputNum * 10 + number)
        }
    }

    const equal = () => {
        calculate();
        setOperator('');
    };


    const handleClick = () => {
        toggleLightMode();
    };
    return <>
        <div className={lightMode ? styles.lightcalc : styles.calculator}>
            <section className={styles.theme} onClick={handleClick}>
                {lightMode ? <FiSun className={styles.lightcalc} /> : <FiMoon/>}
            </section>
            <section className={styles.monitor}>
                <p>{monitor}</p>
            </section>
            <section className={styles.buttonsContainer}>
                <button onClick={clearAll} className={lightMode ? styles.buttonNums : styles.buttonCalc}>AC</button>
                <button className={lightMode ? styles.buttonNums : styles.buttonCalc}>-/+</button>
                <button className={lightMode ? styles.buttonNums : styles.buttonCalc}>%</button>
                <button onClick={() => inputOperator('/')} className={lightMode ? styles.buttonNums : styles.buttonCalc}>/</button>
                <button onClick={() => inputNumTotal(7)} className={styles.buttonNums}>7</button>
                <button onClick={() => inputNumTotal(8)} className={styles.buttonNums}>8</button>
                <button onClick={() => inputNumTotal(9)} className={styles.buttonNums}>9</button>
                <button onClick={() => inputOperator('*')} className={lightMode ? styles.buttonNums : styles.buttonCalc}>*</button>
                <button onClick={() => inputNumTotal(4)} className={styles.buttonNums}>4</button>
                <button onClick={() => inputNumTotal(5)} className={styles.buttonNums}>5</button>
                <button onClick={() => inputNumTotal(6)} className={styles.buttonNums}>6</button>
                <button onClick={() => inputOperator('-')} className={lightMode ? styles.buttonNums : styles.buttonCalc}>-</button>
                <button onClick={() => inputNumTotal(1)} className={styles.buttonNums}>1</button>
                <button onClick={() => inputNumTotal(2)} className={styles.buttonNums}>2</button>
                <button onClick={() => inputNumTotal(3)} className={styles.buttonNums}>3</button>
                <button onClick={() => inputOperator('+')} className={lightMode ? styles.buttonNums : styles.buttonCalc}>+</button>
                <button onClick={() => inputNumTotal(0)} className={styles.buttonNums}>0</button>
                <button onClick={() => setDecimal(true)} className={lightMode ? styles.buttonNums : styles.buttonCalc}>.</button>
                <button onClick={equal} className={styles.buttonCalc}>=</button>
            </section>
        </div>
    </>

}

export default Calculator;
