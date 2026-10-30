// src/components/PageLoader.jsx
import React, { useEffect, useState } from 'react';
import styles from './PageLoader.module.css';

const loadingSteps = [
  'Preparing the experience',
  'Loading selected projects',
  'Almost there',
];

export default function PageLoader({ minDuration = 2000 }) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    const startTime = Date.now();
    const duration = Math.max(0, minDuration);

    let animationFrame;
    let exitTimer;
    let finished = false;

    const unlockScroll = () => {
      document.body.style.overflow = previousOverflow;
    };

    const finishLoading = () => {
      if (finished) return;

      finished = true;

      setProgress(100);
      setActiveStep(loadingSteps.length - 1);
      setExiting(true);

      // Scroll kembali aktif begitu proses loading selesai.
      unlockScroll();

      exitTimer = window.setTimeout(() => {
        setVisible(false);
      }, 450);
    };

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const ratio =
        duration === 0 ? 1 : Math.min(elapsed / duration, 1);

      const nextProgress = Math.min(
        99,
        Math.floor((1 - Math.pow(1 - ratio, 2)) * 100)
      );

      setProgress(nextProgress);

      if (ratio >= 1) {
        finishLoading();
        return;
      }

      const nextStep = Math.min(
        loadingSteps.length - 1,
        Math.floor(ratio * loadingSteps.length)
      );

      setActiveStep(nextStep);

      animationFrame = window.requestAnimationFrame(updateProgress);
    };

    animationFrame = window.requestAnimationFrame(updateProgress);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(exitTimer);
      unlockScroll();
    };
  }, [minDuration]);

  if (!visible) return null;

  return (
    <div
      className={`${styles.backdrop} ${exiting ? styles.exiting : ''}`}
      role="status"
      aria-label="Loading portfolio"
      aria-live="polite"
    >
      <div className={styles.loader}>
        <div className={styles.loaderHeader}>
          <span className={styles.brandMark}>ZR.</span>
          <span className={styles.version}>PORTFOLIO / 2026</span>
        </div>

        <div className={styles.loaderMain}>
          <span className={styles.eyebrow}>
            A PERSONAL PORTFOLIO
          </span>

          <h1 className={styles.title}>
            Muhammad Zidan
            <br />
            <span>Ramadhan.</span>
          </h1>

          <p className={styles.description}>
            Designing and building digital experiences.
          </p>
        </div>

        <div className={styles.loaderFooter}>
          <div className={styles.statusRow}>
            <span className={styles.statusLabel}>
              {loadingSteps[activeStep]}
            </span>

            <span className={styles.percentage}>
              {String(progress).padStart(2, '0')}%
            </span>
          </div>

          <div
            className={styles.progressTrack}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Portfolio loading progress"
          >
            <div
              className={styles.progressBar}
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className={styles.bottomMeta}>
            <span>BANDUNG, INDONESIA</span>
            <span>EST. MMXXVI</span>
          </div>
        </div>
      </div>
    </div>
  );
}