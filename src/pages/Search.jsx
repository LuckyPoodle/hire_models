import {useState,useEffect} from 'react';
import {NATIONALITIES,LOCATIONS,SPECIES} from '../utils/constants';
import Modellist from '../components/ModelsList';
const contentful =require("contentful");
import useSubspecies from '../utils/useSubspecies';



const Search = () => {

    const [name,setName]=useState("");
    const [nationality,setNationality]=useState("");
    const [location,setLocation]=useState("");
    const [models,setModels]=useState([]);
    const [species,setSpecies]=useState("");
    const [subspeciesList]=useSubspecies(species);
    const [subspecies,setSubspecies]=useState("");

    const contentfulclient=contentful.createClient({
        space:process.env.REACT_APP_contentfulspaceid,
        accessToken:process.env.REACT_APP_contentfulaccesstoken
    });

    useEffect(()=>{
       fetchModels();
    },[]); 

    async function fetchModels(){
        if (name.length>0){
            contentfulclient.getEntries({
                content_type:"supermodels",
                'fields.name': name,
            }).then((res)=>{
                let temp=[];
                res.items.forEach((item)=>{
                    temp.push(item.fields)
                });
               setModels(temp);
            });

        }else if (nationality.length>0){
        
            contentfulclient.getEntries({
                content_type:"supermodels",
               
                'fields.nationality': nationality,
              
            }).then((res)=>{
                let temp=[];
                console.log('return from nationality');
                
                res.items.forEach((item)=>{
                    temp.push(item.fields)
                });
              
               setModels(temp);
            });

        }else if (location.length>0){
            contentfulclient.getEntries({
                content_type:"supermodels",
                'fields.location': location,
            }).then((res)=>{
                let temp=[];
                res.items.forEach((item)=>{
                    temp.push(item.fields)
                });
          
               setModels(temp);
            });
        }else{
       
            contentfulclient.getEntries({
                content_type:"supermodels"
            }).then((res)=>{
                let temp=[];
                res.items.forEach((item)=>{
                    
                    temp.push(item.fields)
                });
              
               setModels(temp);
            });
        }
    }






    return <div className="">
        <form onSubmit={(e)=>{e.preventDefault(); fetchModels();}}>
            <label htmlFor="name" className="">
            <input id="name" value={name} placeholder="Name" onChange={(e)=>{setName(e.target.value);setLocation("");setNationality("")}} />
            </label>

            <label htmlFor="nationality" className="">Nationality
            </label>
            <select id="nationality" value={nationality} onChange={(e)=>{setNationality(e.target.value);setLocation("")}}  >
                   <option />
                   {NATIONALITIES.map((nationality)=>(<option key={nationality}>{nationality}</option>))}
            </select>


            <label htmlFor="location" className="">Location
            </label>
            <select id="location" value={location} onChange={(e)=>{setLocation(e.target.value); setNationality("")}} >
                   <option />
                   {LOCATIONS.map((nationality)=>(<option key={nationality}>{nationality}</option>))}
            </select>


            <label htmlFor="species" className="">Species
            </label>
            <select id="species" onChange={(e)=>{setSpecies(e.target.value); setNationality("")}} >
                   <option />
                   {SPECIES.map((species)=>(<option key={species}>{species}</option>))}
            </select>


            <label htmlFor="subspecies" className="">Subspecies
            </label>
            <select disabled={!subspeciesList.length} id="subspecies" value={subspecies} onChange={(e)=>{setSubspecies(e.target.value); setNationality("")}} >
                   <option />
                   {subspeciesList.map((subspecies)=>(<option key={subspecies}>{subspecies}</option>))}
            </select>

            <Modellist models={models} />




           <button className="">Submit</button>
        </form>

    

    </div>;
}
 
export default Search;