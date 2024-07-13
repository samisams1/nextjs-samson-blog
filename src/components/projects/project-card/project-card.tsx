import Image from 'next/image';
import React from 'react';
import { FaCode, FaPlay } from 'react-icons/fa';
import 'animate.css';

import placeholder from '../../../assets/png/placeholder.png';
import styles from '../../../styles/singleProject.module.css';

interface SingleProjectProps {
  id: number;
  name: string;
  desc: string;
  tags: string[];
  code: string;
  demo: string;
  image?: string;
  theme: {
    quaternary: string;
    tertiary: string;
    secondary: string;
  };
}

const SingleProject: React.FC<SingleProjectProps> = ({
  id,
  name,
  desc,
  tags,
  code,
  demo,
  image,
  theme,
}) => {
  return (
    <>
      <div
        key={id}
        className={styles.singleProject}
        style={{ backgroundColor: theme.quaternary }}
      >
        <div className={styles.projectContent}>
          <h2
            id={name.replace(' ', '-').toLowerCase()}
            style={{ color: theme.tertiary }}
          >
            {name}
          </h2>
          <Image src={image ? image : placeholder} alt={name} />
          <div className={styles.projectShowcaseBtn}>
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-[40px] h-[40px] rounded-[50px] border-2 border-[#EFF3F4] hover:border-[#15202B] text-[#EFF3F4] hover:text-[#1D9BF0] transition hover:scale-[1.1]"
              aria-labelledby={`${name.replace(' ', '-').toLowerCase()} ${name.replace(' ', '-').toLowerCase()}-demo`}
            >
              <FaPlay
                id={`${name.replace(' ', '-').toLowerCase()}-demo`}
                className="text-[1.1rem] transition"
                aria-label="Demo"
              />
            </a>
            <a
              href={code}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-[40px] h-[40px] rounded-[50px] border-2 border-[#EFF3F4] hover:border-[#15202B] text-[#EFF3F4] hover:text-[#1D9BF0] transition hover:scale-[1.1]"
              aria-labelledby={`${name.replace(' ', '-').toLowerCase()} ${name.replace(' ', '-').toLowerCase()}-code`}
            >
              <FaCode
                id={`${name.replace(' ', '-').toLowerCase()}-code`}
                className="text-[1.1rem] transition"
                aria-label="Code"
              />
            </a>
          </div>
        </div>
        <p
          className={styles.projectDesc}
          style={{
            background: theme.secondary,
            color: theme.tertiary,
          }}
        >
          {desc}
        </p>
        <div
          className={styles.projectLang}
          style={{
            background: theme.secondary,
            color: theme.tertiary,
          }}
        >
          {tags.map((tag, id) => (
            <span key={id}>{tag}</span>
          ))}
        </div>
      </div>
    </>
  );
};

export default SingleProject;
