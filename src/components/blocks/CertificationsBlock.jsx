import React from "react";
import { Title } from "./style";
import { useContent } from "@content/ContentContext";

const CertificationsBlock = () => {
  const { certifications } = useContent("blocks");
  return <Title>{certifications.title}</Title>;
};

export default CertificationsBlock;
