import { useParams } from "react-router-dom";
import {  useQuery } from "@tanstack/react-query";
import {useContext} from "react";
import { fetchAModelFromContentful } from "../utils/contentfulUtils";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import { Link } from "react-router-dom";
import SelectedModelContext from "../context/selectedModel";
//details of each supermodel
const Details = () => {
  const { id } = useParams();
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const [_, setSelectedModel] = useContext(SelectedModelContext);

  if (!id){
    throw new Error('No ID');
  }

  const results = useQuery(["modeldetails", id], fetchAModelFromContentful);
  //will fetch model details if its not in cache

  if (results.isLoading) {
    return (
      <div className="loading">
        <h1>loader </h1>
      </div>
    );
  }

  if (results.isError) {
    return <h1>Sorry the model is unwell!</h1>;
  }

  const model=results?.data;



  return (
    <div className="model-details">
      <h1>Hi!!! {results.data.name}</h1>
      <Carousel images={results.data?.imagesUrls??[]} />
      
      <button onClick={()=>setSelectedModel(model)}>I am interested</button>
    </div>
  );
};

function DetailsErrorBoundary() {
  return (
    <ErrorBoundary
      errorComponent={
        <p>
          There is an error. Please return the the <Link to="/">home page</Link>
        </p>
      }
    >
      <Details  />
    </ErrorBoundary>
  );
}

export default DetailsErrorBoundary;
