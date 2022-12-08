import {useState,useEffect} from 'react';
import {NATIONALITIES,LOCATIONS} from '../utils/constants';
const contentful =require("contentful");



const Search = () => {

    const [name,setName]=useState("");
    const [nationality,setNationality]=useState("");
    const [location,setLocation]=useState("");

    const contentfulclient=contentful.createClient({
        space:process.env.REACT_APP_contentfulspaceid,
        accessToken:process.env.REACT_APP_contentfulaccesstoken
    });

    useEffect(()=>{
        contentfulclient.getEntries({content_type:"supermodels"}).then((res)=>{
            console.log(res.items)
        })
    },[])






    return <div className="">
        <form>
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
           <button className="">Submit</button>
        </form>

    </div>;
}
 
export default Search;