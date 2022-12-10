import { useState } from "react";
import {SubspeciesAPIResponse,Species} from './APIResponsesTypes';
import {QueryStatus,useQuery,QueryFunction} from "@tanstack/react-query";


export default function useSubspecies(species: Species) {
  const results = useQuery(["breeds", species], fetchSubspeciesList);

  return [results?.data?.breeds ?? [], results.status] as [
    string[],
    QueryStatus
  ];
}





const fetchSubspeciesList: QueryFunction<
SubspeciesAPIResponse,
  ["breeds", Species]
> = async ({ queryKey }) => {
  const species = queryKey[1];

  if (!species) return [];

  const res = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${species}`
  );

  if (!res.ok) {
    throw new Error(`subspecies of ${species} fetch not ok`);
  }

  return res.json();
};

