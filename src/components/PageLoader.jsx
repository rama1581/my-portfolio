import React, { useEffect, useState } from "react";
import styles from "./PageLoader.module.css";

const lines = [
  "[INIT] Rama's Portfolio v1.0.0 starting...",
  "[SYS] Loading all modules...",
  "[NET] Connecting to server...",
  "[DB] Fetching projects and skills...",
  "[OK] System ready. Welcome!"
];

export default function PageLoader({ minDuration = 2000 }) {
  const [visible, setVisible] = useState(true);
  const [typedLines, setTypedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    // 🚫 Matikan scroll saat loader muncul
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [visible]);

  useEffect(() => {
    let charIndex = 0;

    const typeChar = () => {
      if (currentLine < lines.length) {
        if (charIndex < lines[currentLine].length) {
          setCurrentText((prev) => prev + lines[currentLine][charIndex]);
          charIndex++;
        } else {
          setTypedLines((prev) => [...prev, lines[currentLine]]);
          setCurrentLine((prev) => prev + 1);
          setCurrentText("");
          charIndex = 0;
        }
      } else {
        clearInterval(interval);
        setTimeout(() => setVisible(false), minDuration);
      }
    };

    const interval = setInterval(typeChar, 40);
    return () => clearInterval(interval);
  }, [currentLine, minDuration]);

  if (!visible) return null;

  return (
    <div className={styles.backdrop}>
      <pre className={styles.terminal}>
        {typedLines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
        <div>
          {currentText}
          <span className={styles.cursor}></span>
        </div>
      </pre>
    </div>
  );
}
