import Image from 'next/image';
import React, { FC, useContext } from 'react';
import expImgBlack from '../../assets/svg/experience/expImgBlack.svg';
import expImgWhite from '../../assets/svg/experience/expImgWhite.svg';
import { ThemeContext } from '../../contexts/theme-context';
import styles from '../../styles/experience.module.css';

interface ExperienceCardProps {
  id: string;
  company: string;
  jobtitle: string;
  startYear: string;
  endYear: string;
}

const ExperienceCard: FC<ExperienceCardProps> = ({
  id,
  company,
  jobtitle,
  startYear,
  endYear,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div key={id} className={`${styles.experienceCard} bg-[#1E2732]`}>
        <div className={styles.expcardImg} style={{ backgroundColor: theme.primary }}>
          <Image src={theme.type === 'light' ? expImgBlack : expImgWhite} alt="" />
        </div>
        <div className={styles.experienceDetails}>
          <h6 style={{ color: theme.primary }}>{startYear}-{endYear}</h6>
          <h4 style={{ color: theme.tertiary }}>{jobtitle}</h4>
          <h5 style={{ color: theme.tertiary }}>{company}</h5>
        </div>
      </div>
    </>
  );
};

export default ExperienceCard;