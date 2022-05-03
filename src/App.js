import "./App.css";

import { useState, useEffect } from "react";

import axios from "axios";

import Hero from "./components/Hero";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/restaurant");
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return isLoading === true ? (
    <div>En cours de chargement...</div>
  ) : (
    <div className="App">
      <header>
        <img
          className="logo"
          src="https://livraison-domicile.com/wp-content/uploads/2020/01/deliveroo.png"
          alt="logo"
        ></img>
      </header>
      <div className="resto">
        <Hero restaurant={data.restaurant} />
      </div>
      <div>Infos sur les plats du restaurant</div>
      {data.categories.map((categorie) => {
        const AtLeastOneMeal = categorie.meals.length > 0;
        //true si au moins 1 meal
        //false si 0 meal
        return (
          AtLeastOneMeal && (
            <div className="section" key={categorie.name}>
              <h2 className="title">{categorie.name}</h2>
              {categorie.meals.map((meal) => {
                return (
                  <div
                    className="meal"
                    key={meal.id}
                    onClick={() => {
                      console.log(meal);
                    }}
                  >
                    <p>{meal.title}</p>
                    <p>{meal.price}</p>

                    <img className="mealPic" src={meal.picture} alt="" />
                  </div>
                );
              })}
            </div>
          )
        );
      })}
    </div>
  );
}
export default App;
