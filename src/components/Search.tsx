import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { NATIONALITIES, LOCATIONS, QUERIES } from "../utils/constants";
import Modellist from "./ModelsList";
import { fetchSearch } from "../utils/contentfulUtils";
import styled from "styled-components";
import Button from "./Button";

const Search = () => {
  const [requestParams, setRequestParams] = useState({
    nationality: "",
    location: "",
  });
  const results = useQuery(["search", requestParams], fetchSearch);
  const models = results?.data ?? [];

  return (
    <Wrapper>
      <SearchForm
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const object = {
            location: formData.get("location")?.toString() ?? "",
            nationality: formData.get("nationality")?.toString() ?? "",
          };
          setRequestParams(object);
        }}
      >
        <SelectWrapper>
          <label htmlFor="location" className="">
            Location
          </label>

          <Select id="location" name="location">
            <option />
            {LOCATIONS.map((location) => (
              <option key={location}>{location}</option>
            ))}
          </Select>
        </SelectWrapper>

        <SelectWrapper>
          <label htmlFor="nationality" className="">
            Nationality
          </label>

          <Select id="nationality" name="nationality">
            <option />
            {NATIONALITIES.map((nationality) => (
              <option key={nationality}>{nationality}</option>
            ))}
          </Select>
        </SelectWrapper>

        <Button>Filter Models</Button>
      </SearchForm>
      <Modellist models={models} />
    </Wrapper>
  );
};

export default Search;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;
const Select = styled.select`
  appearance: none;
  border: none;
`;

const SelectWrapper = styled.div`
  display: flex;
  gap: 5px;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
    gap: 0px;
  }
`;

const SearchForm = styled.form`
  margin: 1rem;
  align-self: center;
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
  align-items: center;
  @media ${QUERIES.tabletAndSmaller} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 80%;
  }
`;
