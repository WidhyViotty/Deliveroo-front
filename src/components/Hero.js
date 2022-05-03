const Hero = ({ restaurant }) => {
  return (
    <div>
      <h1>{restaurant.name}</h1>
      <p>{restaurant.address}</p>
      <img className="restoPic" src={restaurant.picture} alt="" />
    </div>
  );
};

export default Hero;
