import React from "react";
import { Title } from "./style";
import { useContent } from "@content/ContentContext";

const SkillsBlock = () => {
  const { skills } = useContent("blocks");
  return <Title>{skills.title}</Title>;
};

export default SkillsBlock;
