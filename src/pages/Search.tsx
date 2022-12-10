import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { NATIONALITIES, LOCATIONS, SPECIES } from "../utils/constants";
import {SubspeciesAPIResponse,Species} from '../utils/APIResponsesTypes';
import Modellist from "../components/ModelsList";
import useSubspecies from "../utils/useSubspecies";
import { fetchSearch } from "../utils/contentfulUtils";


const Search = () => {
  const [requestParams, setRequestParams] = useState({
    name: "",
    nationality: "",
    location: "",
  });
  const [species, setSpecies] = useState("" as Species);
  const [subspeciesList] = useSubspecies(species);
  const [subspecies, setSubspecies] = useState("");
  const results = useQuery(["search", requestParams], fetchSearch);
  const models = results?.data ?? [];



  return (
    <div className="">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const object = {
            name: formData.get("name")?.toString()?? "",
            nationality: formData.get("nationality")?.toString() ?? "",
            location: formData.get("location")?.toString() ?? "",
          };
          setRequestParams(object); 
        }}
      >
        <label htmlFor="name" className="">
          <input id="name" name="name" placeholder="Name" />
        </label>

        <label htmlFor="nationality" className="">
          Nationality
        </label>
        <select id="nationality" name="nationality">
          <option />
          {NATIONALITIES.map((nationality) => (
            <option key={nationality}>{nationality}</option>
          ))}
        </select>

        <label htmlFor="location" className="">
          Location
        </label>
        <select id="location" value="location">
          <option />
          {LOCATIONS.map((nationality) => (
            <option key={nationality}>{nationality}</option>
          ))}
        </select>

        <label htmlFor="species" className="">
          Species
        </label>
        <select
          id="species"
          onChange={(e) => {
            setSpecies(e.target.value as Species);
          }}
        >
          <option />
          {SPECIES.map((species) => (
            <option key={species}>{species}</option>
          ))}
        </select>

        <label htmlFor="subspecies" className="">
          Subspecies
        </label>
        <select
          disabled={!subspeciesList.length}
          id="subspecies"
          value={subspecies}
          onChange={(e) => {
            setSubspecies(e.target.value);
          }}
        >
          <option />
          {subspeciesList.map((subspecies) => (
            <option key={subspecies}>{subspecies}</option>
          ))}
        </select>

        <Modellist models={models} />

        <button className="">Submit</button>
      </form>
    </div>
  );
};

export default Search;
