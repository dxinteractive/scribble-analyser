import React from "react";

export type ExperimentDefinition = {
  id: string;
  filename: string;
  name: string;
  description: string;
  Component: React.FC;
};
