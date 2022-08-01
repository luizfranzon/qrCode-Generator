import { useState } from "react";

import QRCode from "react-qr-code";
import { saveSvgAsPng } from "save-svg-as-png"

import styles from "./App.module.scss"

export function App() {

    const [inputValue, setInputValue] = useState("message")

    function handleInputValueChange() {
        setInputValue(event.target.value)
    }

    function handleDownloadGeneratedQRcode() {
        saveSvgAsPng(document.getElementById("qrcodesvg"), "qrcode.png", {scale: 4});
    }

    return (
        <div>
            <header className={styles.header}>
                <h1>QR Code Generator</h1>
            </header>
            <main className={styles.main}>
                <input onChange={handleInputValueChange} type="text" placeholder="Enter your message"/>
                <QRCode className={styles.qrcode} id="qrcodesvg" value={inputValue} title={inputValue} size="256"/>
                <button onClick={handleDownloadGeneratedQRcode}>Download</button>
            </main>
        </div>
    )
}

