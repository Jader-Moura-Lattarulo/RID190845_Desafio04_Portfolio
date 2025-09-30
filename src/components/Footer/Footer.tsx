import styles from './Footer.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import logoTexto from '../../assets/logo-texto.png';

const linkedinUrl = "https://www.linkedin.com/in/dev-jader/";
const githubUrl = "https://github.com/Jader-Moura-Lattarulo"

export function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.mainContent}>
        <div className={styles.contactInfo}>
          <div className={styles.contactBlock}>
            <p>Meu contato:</p>
            <strong>+55 11 99177-9858</strong>
          </div>
          <div className={styles.contactBlock}>
            <p>Email:</p>
            <strong>jader.dev.moura@gmail.com</strong>
          </div>
        </div>
        <div className={styles.socialGroup}>
          <img src={logoTexto} alt="Logo JMDEV" className={styles.footerLogo} />
          <div className={styles.socialIcons}>
            <a href={linkedinUrl} target="_blank" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={githubUrl} target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>

      </div>
      
      <div className={styles.copyright}>
        <p>© 2025 Jader Moura Lattarulo. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}