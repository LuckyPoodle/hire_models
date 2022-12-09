import {useParams} from "react-router-dom";

//details of each supermodel
const Details = () => {

  const {id} =useParams();

  return (
   <div className=""><h1>Hi!!! {id}</h1></div>
  );
};

export default Details;