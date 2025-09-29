import styles from './Hero.module.css';

export function Hero() {
  const paragraph = `
    Com experiência em projetos PHP e uma base sólida em Java, JavaScript, MySQL e IA, 
    estou sempre em busca de novos desafios.  Atualmente, estou 
    aprimorando minhas habilidades na graduação em Engenharia de Software pela DNC, onde trabalho 
    com o ecossistema moderno de TypeScript, React e Node.js, e também em uma pós-graduação na UNG 
    para me especializar ainda mais.
  `;

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Olá, eu sou o Jader. Desenvolvedor Full-Stack.</h1>
        <p>
          {paragraph} 
        </p>
        <a href="#about" className={styles.button}>
          Saber mais
        </a>
      </div>
    </section>
  );
}