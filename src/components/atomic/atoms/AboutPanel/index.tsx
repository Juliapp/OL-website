import React from 'react';
import { close } from '../../../../assets';
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
        <h3 className="about-text-title">Title</h3>
        <h3 className="about-text-content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
          obcaecati eos vitae fuga hic odio, ad illum natus sunt nam ipsam quia
          qui tempora cumque, exercitationem iusto, reprehenderit aspernatur
          molestiae consequuntur ipsum ea nesciunt ratione. Voluptatem sit harum
          cum doloribus repudiandae voluptatibus mollitia. Dolore, incidunt
          asperiores numquam doloribus, corrupti fugiat aut reprehenderit
          dignissimos cumque doloremque velit quas, voluptate voluptatibus!
          Impedit minus deserunt aliquid illum autem dolores eaque molestias
          aperiam ea ex quam hic commodi neque, quibusdam esse nam.
          Exercitationem consectetur aliquid dolorum. Minus fugiat odit nisi
          voluptatibus id incidunt, excepturi laudantium rerum suscipit voluptas
          expedita quo deserunt inventore minima perferendis dicta repellendus
          quia temporibus a, iusto rem delectus. Nemo expedita, officiis eveniet
          repellendus eius facilis distinctio. Nesciunt voluptas magnam porro.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
          obcaecati eos vitae fuga hic odio, ad illum natus sunt nam ipsam quia
          qui tempora cumque, exercitationem iusto, reprehenderit aspernatur
          molestiae consequuntur ipsum ea nesciunt ratione. Voluptatem sit harum
          cum doloribus repudiandae voluptatibus mollitia. Dolore, incidunt
          asperiores numquam doloribus, corrupti fugiat aut reprehenderit
          dignissimos cumque doloremque velit quas, voluptate voluptatibus!
          Impedit minus deserunt aliquid illum autem dolores eaque molestias
          aperiam ea ex quam hic commodi neque, quibusdam esse nam.
          Exercitationem consectetur aliquid dolorum. Minus fugiat odit nisi
          voluptatibus id incidunt, excepturi laudantium rerum suscipit voluptas
          expedita quo deserunt inventore minima perferendis dicta repellendus
          quia temporibus a, iusto rem delectus. Nemo expedita, officiis eveniet
          repellendus eius facilis distinctio. Nesciunt voluptas magnam porro.
        </h3>
      </div>
    </div>
  );
};

export default AboutPanel;
