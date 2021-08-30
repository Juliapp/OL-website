import React from 'react';
import { close } from '@assets';
import './styles.css';

export interface IAboutPanel {
  onClick?: React.MouseEventHandler<HTMLImageElement>;
}
const AboutPanel: React.FC<IAboutPanel> = ({ onClick }) => {
  return (
    <div className="about-container default-shadow">
      <div className="about-header">
        <h1>Sobre o projeto</h1>
        <img src={close} alt="" onClick={onClick} />
      </div>
      <div className="about-text">
        <h3 className="about-text-super-title">
          Hub Point: local ideal para instalar um novo Hub
        </h3>
        <h3 className="about-text-title">Resumo</h3>
        <h3 className="about-text-content">
          A localização de um novo Hub (nodal point) tem impacto sobre os custos
          e a qualidade das entregas, além de possibilitar aproveitar melhor as
          características de um Transporte Multimodal. Ao adicionar um novo Hub
          existem vários objetivos que podem ser perseguidos como: 1) balancear
          o número de pacotes a serem entregues por cada Hub ou 2) balancear o
          deslocamento total necessário por cada Hub para entregar os pacotes. O
          objetivo deste projeto é investigar e implementar consultas que
          permitam fornecer informações sobre a localização de um novo Hub,
          dando suporte à tomada de decisão. Os algoritmos e testes
          implementados para processar as consultas serão disponibilizados no
          Loggi Bud.
        </h3>

        <h3 className="about-text-title">Financiador</h3>
        <h3 className="about-text-content">Loggi (PBP-LOGGI)</h3>

        <h3 className="about-text-title">Vigência do projeto</h3>
        <h3 className="about-text-content">01/05/2021 a 31/01/2022</h3>

        <h3 className="about-text-title">Bolsista</h3>
        <h3 className="about-text-content">
          Juliana Aragão Pinto | Contato: aragaopintojuli@gmail.com
        </h3>

        <h3 className="about-text-title">Orientador</h3>
        <h3 className="about-text-content">
          João B. Rocha-Junior | Contato: joao.rocha.jr@gmail.com
        </h3>
      </div>
    </div>
  );
};

export default React.memo(AboutPanel);
