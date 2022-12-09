import { useState,useEffect } from "react";

const localCache={};

export default function useSubspecies(species){
    const [subspeciesList,setSubspeciesList]=useState([]);
    const [status,setStatus]=useState("Not Loading");

    useEffect(()=>{
        if (!species){
            setSubspeciesList([])
        }else if(localCache[species]){
            setSubspeciesList(localCache[species]);
        }else {
            getSubSpecies();
        }


        async function getSubSpecies(){
            setSubspeciesList([]);
            setStatus("Loading");
            console.log('fetching subspecies of '+`http://pets-v2.dev-apis.com/breeds?animal=${species}`)
            const res=await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${species.toLowerCase()}`);
            if (!res.ok){
                throw new Error ('Error in fetching')
            }
            const json=await res.json();
            console.log(json)
            console.log(json.breeds)
            localCache[species]=json.breeds||[];
            setSubspeciesList(localCache[species]);
            setStatus("loaded");

        }


    },[species]);

    return [subspeciesList,status]
}