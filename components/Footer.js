import Link from "next/link";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; Event Managment {new Date().getFullYear()}</p>
      <p>
        <Link href="/about">About Our Company</Link>
      </p>
    </footer>
  );
}
