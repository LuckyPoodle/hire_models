import Supermodel from "./Supermodel";
import {TypeSupermodelsFields} from "../utils/APIResponsesTypes"

const Modellist = ({ models}:{models:TypeSupermodelsFields[]}) => {
  return (
    <div className="modellist">
      {!models.length ? (
        <h1>No models working yet</h1>
      ) : (
        models.map((model) => (
          <Supermodel
            name={model.name?.toString()?? ""}
            images={model.imagesUrls as string[]  }
            location={model.location?.toString()?? ""}
            nationality={model.nationality?.toString()?? ""}
            species={model.species?.toString()??""}
            subspecies={model.species?.toString()??""}
            height={model.height as number}
            key={model.id?.toString()?? ""}
            id={model.id as number}
          />
        ))
      )}
    </div>
  );
};

export default Modellist;
