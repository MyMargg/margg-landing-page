import React from "react";
import { Title } from "./style";
import { useContent } from "@content/ContentContext";

const JobBoardBlock = () => {
  const { jobBoard } = useContent("blocks");
  return <Title>{jobBoard.title}</Title>;
};

export default JobBoardBlock;
