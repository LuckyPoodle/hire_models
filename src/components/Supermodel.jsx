import { Link } from "react-router-dom";

const Supermodel = (props) => {
  const { name, height, nationality, images, location, id } = props;

  let hero = "https://images.pexels.com/photos/264907/pexels-photo-264907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  if (images.length) {
    hero = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="supermodel">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${nationality} — ${height} cm — ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Supermodel;