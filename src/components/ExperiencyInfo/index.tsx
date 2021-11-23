import Skills from "components/Skill";

import * as S from "./styles";

const ExperiencyInfo = () => {
  return (
    <>
      <S.Info>
        <div className="company-info">
          <h4>gwcloud.company</h4>
          <p>
            Responsável por desenvolver a interface de aplicações usando
            técnicas de UX/UI Design e replicar o protótipo usando HTML5,
            CSS/SASS, JavaScript e AngularJs ou Reactjs.
          </p>
        </div>
        <div className="skills">
          <h4>Front-end Developer</h4>
          <Skills
            skills={[
              "HTML",
              "CSS",
              "JavaScript",
              "UI Design",
              "AngularJS",
              "ReactJS",
              "NextJS"
            ]}
          />
        </div>
        <div className="company-time">2018</div>
      </S.Info>
      <S.Info>
        <div className="company-info">
          <h4>Globalweb Corp.</h4>
          <p>
            Acompanhamento de desempenho dos colaboradores, aplicação de
            treinamentos a fim de garantir a melhoria contínua do fluxo
            operacional, Administração das atividades diárias da operação,
            monitoração de desenvolvimento do serviço e indicadores.
          </p>
        </div>
        <div className="skills">
          <h4>Ponto focal - Field Service</h4>
          <Skills
            skills={[
              "SLA",
              "OLA",
              "TMA",
              "TME",
              "Suporte",
              "Qualidade",
              "Organização"
            ]}
          />
        </div>
        <div className="company-time">2014 - 2018</div>
      </S.Info>
    </>
  );
};

export default ExperiencyInfo;
