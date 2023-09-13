import React from 'react';
import Skill from './skill';

const SkillsSection = () => {
  const skillsLeft = [
    { name: 'Remote Rotorcraft Operations', value: 100 },
    { name: 'HTML', value: 10 },
    { name: 'CSS', value: 5 },
    { name: 'JavaScript', value: 1 },
    { name: '3d Design and Printing', value: 75 },
  ];

  const skillsRight = [
    { name: 'Fusion 360', value: 60 },
    { name: 'Ninjascript (C#)', value: 65 },
    { name: 'Autodesk CFD', value: 25 },
    { name: 'SAS Viya', value: 50 },
    { name: 'Aerial Gunnery', value: 100 },
  ];

  return (
    <section id='skills' className='skills section-bg'>
      <div className='container'>
        <div className='section-title'>
          <h2>Skills</h2>
          <p className='d-lg-inline-flex'>
            Sections highlighting overalls skills using the{' '}
            <pre className='d-inline-flex'> progress-bar </pre>is a nice touch
            to visually display competencies.
          </p>
        </div>

        <div className='row skills-content'>
          <div className='col-lg-6' data-aos='fade-up'>
            {skillsLeft.map((skill) => (
              <Skill
                key={skill.name}
                skillName={skill.name}
                skillValue={skill.value}
              />
            ))}
          </div>

          <div className='col-lg-6' data-aos='fade-up' data-aos-delay='100'>
            {skillsRight.map((skill) => (
              <Skill
                key={skill.name}
                skillName={skill.name}
                skillValue={skill.value}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
