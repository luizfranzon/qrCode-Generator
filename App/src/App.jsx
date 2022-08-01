import styles from "./App.module.scss"

import QRCode from "react-qr-code";
import { useState } from "react";
import ReactDOM from "react-dom";

export function App() {

    const [inputValue, setInputValue] = useState("message")

    function handleInputValueChange() {
        setInputValue(event.target.value)
    }

    return (
        <div>
            <header className={styles.header}>
                <h1>QR Code Generator</h1>
            </header>
            <main className={styles.main}>
                <input onChange={handleInputValueChange} type="text" placeholder="Enter your message"/>
                <QRCode value={inputValue} />
            </main>

        </div>
    )
}

