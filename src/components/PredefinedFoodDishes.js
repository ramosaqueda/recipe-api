import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { predefinedFoodDishes } from "../constants";
import ToggleButton from "@material-ui/lab/ToggleButton";

const PredefinedFoodDishes = ({ getData, setHits }) => {
  
    const getFoods = (title) => {
       console.log(title);
        predefinedFoodDishes.map((foodDish) => {
          foodDish.selected = foodDish.title === title ? !foodDish.selected : false;
          return !foodDish.selected
            ? setHits()
            : getData(
                document.querySelector(`#${title}`).value.toLowerCase().trim()
              );
        });
      };



  return (
    <Grid item xs={ 12 }>
      <Paper className="paper">
        {predefinedFoodDishes.map((foodDish) => {
          const { title, selected } = foodDish;
          return (
            <ToggleButton
              key={title}
              id={title}
              value={title}
              selected={selected}
              onClick={() => getFoods()}
             
            >
              {title}
            </ToggleButton>
          );
        })}
      </Paper>
    </Grid>
  );
};

export default PredefinedFoodDishes;