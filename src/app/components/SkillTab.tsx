import React from 'react';

interface ISkillProps {
  isHighlightedSkill?: boolean;
  skillName: string;
}

const SkillTab = ({ isHighlightedSkill = false, skillName }: ISkillProps) => {
  return (
    <div className={`${isHighlightedSkill ? 'font-bold' : 'font-normal'} bg-white w-max px-4 py-4 rounded-3xl mb-4`}>
      <div>{skillName}</div>
    </div>
  );
};

export default SkillTab;