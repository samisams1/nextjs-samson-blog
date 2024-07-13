import React, { FC, useContext } from 'react';
import experience from '../../assets/lottie/development.json';
import { ThemeContext } from '../../contexts/theme-context';
import { experienceData } from '../../data/experience-data';
import styles from '../../styles/experience.module.css';
import AnimationLottie from '../animation';
import ExperienceCard from './experience-card';
import Container from '@mui/material/Container';


const Experience: FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme.secondary }}>
      <Container className={styles.experience} id="experience">
        <div className={styles.experienceBody}>
          <div className={styles.experienceImage}>
            <AnimationLottie animationPath={experience} width="100%" />
          </div>
          <div className={styles.experienceDescription}>
            <h1 style={{ color: theme.primary }}>Experience</h1>
            {experienceData.map((exp: any) => (
              <ExperienceCard
                key={exp.id}
                id={exp.id}
                jobtitle={exp.jobtitle}
                company={exp.company}
                startYear={exp.startYear}
                endYear={exp.endYear}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Experience;