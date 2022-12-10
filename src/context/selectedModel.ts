import { createContext } from "react";
import { TypeSupermodelsFields } from "../utils/APIResponsesTypes";


const SelectedModelContext=createContext<[TypeSupermodelsFields,(selectedModel:TypeSupermodelsFields)=>void]>([
    {
        id:123,
        name:"Aegon",
        location:"West",
        nationality:"Wonder Land",
        height:190,
        species:"dog",
        subspecies:"Husky",
        imagesUrls:["https://www.pexels.com/photo/nature-animal-zoo-bear-34700/"]
    },
    ()=>{}

]);

export default SelectedModelContext;