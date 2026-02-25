import React from "react";
import { Title } from "./style";
import { useContent } from "@content/ContentContext";

const ProjectsBlock = () => {
  const { projects } = useContent("blocks");
  return <Title>{projects.title}</Title>;
};

export default ProjectsBlock;
