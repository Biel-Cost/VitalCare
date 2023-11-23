import styled from "./Footer.module.css";

export const Footer = () => {
  return (
    <div>
      <footer className={styled.footerContainer}>
        <div>
          <p> - Felipe Moraes - RM98455 - 1TDSPL - Desenvolvedor Java e AI </p>
          <p> - Gabriel Costa - RM551727 - 1TDSPM - Desevolvedor Web</p>
          <p>
            - Gustavo Moreira - RM97999 - 1TDSPL - Desenvolvedor de AI e
            Database
          </p>
          <p> - Helena Cristina - RM551873 - 1TDSPM - Designer de Software</p>
          <p>
            - Vinicius Chagas - RM550167 - 1TDSPL - Desenvolvedor Python e
            Database
          </p>
        </div>
      </footer>
    </div>
  );
};
