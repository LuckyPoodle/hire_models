import { ReactNode, createContext, useState } from "react";
import { TypeSupermodelsFields } from "../utils/APIResponsesTypes";

import * as React from "react";

export type SuperModelContextType = {
  models: TypeSupermodelsFields[];
  saveModel: (model: TypeSupermodelsFields) => void;
  removeModel: (id: number) => void;
};

export const SuperModelContext =
  React.createContext<SuperModelContextType | null>(null);

interface SuperModelContextProviderProps {
  children: ReactNode;
}

const SuperModelProvider: React.FC<SuperModelContextProviderProps> = ({
  children,
}) => {
  const [models, setModels] = React.useState<TypeSupermodelsFields[]>([]);

  const saveModel = (model: TypeSupermodelsFields) => {
    setModels([...models, model]);
  };

  const removeModel = (id: number) => {
    setModels((prevSelectedmodels) =>
      prevSelectedmodels.filter((model) => model.id !== id)
    );
  };

  return (
    <SuperModelContext.Provider value={{ models, removeModel, saveModel }}>
      {children}
    </SuperModelContext.Provider>
  );
};

export default SuperModelProvider;

// const SelectedModelContext=createContext<[TypeSupermodelsFields[]|null,(selectedModels:TypeSupermodelsFields[])=>void]>([
//     [],
//     ()=>{}

// ]);

//export default SelectedModelContext;
