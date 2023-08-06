import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { fetchAModelFromContentful } from "../utils/contentfulUtils";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import { Link, useNavigate } from "react-router-dom";
import {
  SuperModelContext,
  SuperModelContextType,
} from "../context/selectedModel";
import styled from "styled-components";
import { QUERIES } from "../utils/constants";

//details of each supermodel
const Details = () => {
  const { id } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { models, saveModel, removeModel } = useContext(
    SuperModelContext
  ) as SuperModelContextType;
  //const [_, setSelectedModel] = useContext(SelectedModelContext);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  if (!id) {
    throw new Error("No ID");
  }

  const results = useQuery(["modeldetails", id], fetchAModelFromContentful);
  //will fetch model details if its not in cache

  if (results.isLoading) {
    return (
     <SpinnerWrapper>
       <SpinnerImg
        className="spinner"
        alt="Loading…"
        src="https://courses.joshwcomeau.com/cfj-mats/loader.svg"
      />
     </SpinnerWrapper>
    );
  }

  if (results.isError) {
    return <SpinnerWrapper><h1>Sorry the model is not found!</h1></SpinnerWrapper>;
  }

  const model = results?.data;

  return (
    <DetailsWrapper>
      <Carousel
        name={results.data.name ? results.data.name.toString() : ""}
        images={results.data?.imagesUrls ?? []}
      />

      <InternalDetailsWrapper>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Description>
        {models.includes(results.data) ? (
          <ModelButton
            onClick={() =>
              removeModel(parseInt(model.id ? model.id.toString() : ""))
            }
          >
            I am no longer interested
          </ModelButton>
        ) : (
          <ModelButton onClick={() => saveModel(model)}>
            I am interested
          </ModelButton>
        )}
        <BackButton onClick={goBack}>Back</BackButton>
      </InternalDetailsWrapper>
    </DetailsWrapper>
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
      <Details />
    </ErrorBoundary>
  );
}

export default DetailsErrorBoundary;

const SpinnerWrapper=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`



const SpinnerImg = styled.img`
  @keyframes fancy-spin {
      0% {
        transform: rotate(0turn) scale(1);
      }
      25% {
        transform: rotate(1turn) scale(1);
      }
      50% {
        transform: rotate(1turn) scale(1.5);
      }
      75% {
        transform: rotate(0turn) scale(1.5);
      }
      100% {
        transform: rotate(0turn) scale(1);
      }
    }
  animation: fancy-spin 2000ms;
  animation-iteration-count: infinite;

`

const DetailsWrapper = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  place-content: center;
  margin: 20%;
  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
`;

const ModelButton = styled.button`
  align-self: center;
  width: 50%;
  padding: 20px;
  margin-top: 50px;
  cursor: pointer;
`;

const BackButton = styled.button`
  width: 30%;
  margin-top: 20px;
  align-self: center;
  cursor: pointer;
`;

const InternalDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Description = styled.div`
  padding: 20px;
  text-align: left;
`;
