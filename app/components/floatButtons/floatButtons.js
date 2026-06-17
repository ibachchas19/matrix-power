import styles from "./floatButtons.module.css";

export default function FloatingButtons() {
  return (
    <div className={styles.floatingButtons}>
      <a
        href="https://wa.me/9991298974?text=Hello"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsapp}
        aria-label="WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>

      <a
        href="tel:+919991298974"
        className={styles.call}
        aria-label="Call"
      >
        <i className="bi bi-telephone-fill"></i>
      </a>
    </div>
  );
}