import React from "react";
import { Title } from "./style";
import { useContent } from "@content/ContentContext";

const ResumeBlock = () => {
  const { resume } = useContent("blocks");
  return <Title>{resume.title}</Title>;
};

export default ResumeBlock;
