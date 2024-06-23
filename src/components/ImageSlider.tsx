import styles from "@/styles/slider.module.css";
import { CSSProperties } from "react";

export default function ImageSlider() {
  const sliderStyle: CSSProperties = {
    "--quantity": 10,
  } as CSSProperties & { "--quantity": number };

  return (
    <div className={styles.banner}>
      <div style={sliderStyle} className={styles.slider}>
        <div className={styles.item}>
          <img src="/assets/nail_img.webp" />
        </div>
        <div className={styles.item}>
          <img src="/assets/nail_img.webp" />
        </div>
        <div className={styles.item}>
          <img src="/assets/nail_img.webp" />
        </div>
        <div className={styles.item}>
          <img src="/assets/nail_img.webp" />
        </div>
        <div className={styles.item}>
          <img src="/assets/nail_img.webp" />
        </div>
      </div>
    </div>
  );
}
