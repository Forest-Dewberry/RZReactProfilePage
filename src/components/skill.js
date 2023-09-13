import React, { useEffect, useRef } from 'react';

const Skill = ({ skillName, skillValue }) => {
  const progressBarRef = useRef(null);

  useEffect(() => {
    if (progressBarRef.current) {
      progressBarRef.current.style.width = `${skillValue}%`;
    }
  }, [skillValue]);

  return (
    <div className="progress">
      <span className="skill">{skillName}<i className="val">{skillValue}%</i></span>
      <div className="progress-bar-wrap">
        <div 
          className="progress-bar" 
          role="progressbar" 
          aria-valuenow={skillValue} 
          aria-valuemin="0" 
          aria-valuemax="100"
          ref={progressBarRef}
        ></div>
      </div>
    </div>
  );
};

export default Skill;