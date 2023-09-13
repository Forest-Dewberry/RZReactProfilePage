import React from 'react';

const Skill = ({ skillName, skillValue }) => {
  return (
    <div className="progress">
      <span className="skill">{skillName}<i className="val">{skillValue}%</i></span>
      <div className="progress-bar-wrap">
        <div className="progress-bar" role="progressbar" aria-valuenow={skillValue} aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
  );
};

export default Skill;