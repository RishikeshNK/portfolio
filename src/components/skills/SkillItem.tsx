interface SkillItemInterface {
  icon: JSX.Element;
  label: string;
}

const SkillItem = ({ icon, label }: SkillItemInterface) => {
  return (
    <div className="flex flex-col items-center text-center p-2 group">
      <div className="tech-icon mb-2">{icon}</div>
      <div className="tech-label">{label}</div>
    </div>
  );
};

export default SkillItem;
