import { useUserState } from "../../Context/UserContext";
import RecipeReviewCard from "../../components/card/index";
import React from "react";

export default function FoodItemPage(props) {
  const { isAuthenticated } = useUserState();
  const [data, setData] = React.useState([]);

  const textSearch = React.useCallback((query) => {
    const request = require("request");
    request.get(
      {
        url: "https://api.calorieninjas.com/v1/nutrition?query=" + query,
        headers: {
          "X-Api-Key": "abP0Rcr8oo8uivQCa01/XQ==glWmr5wyMWy5Zsad",
        },
      },

      (error, response, body) => {
        if (error) return console.error("Request failed:", error);
        else if (response.statusCode !== 200)
          return console.error(
            "Error:",
            response.statusCode,
            body.toString("utf8")
          );
        else {
          var obj = JSON.parse(body).items;

          let tempArr = [];
          for (let i = 0; i < obj.length; i++) {
            var obj1 = {};
            obj1["cal"] = obj[i]["calories"];
            obj1["fat"] = obj[i]["fat_total_g"];
            obj1["sod"] = obj[i]["sodium_mg"];
            obj1["carbo"] = obj[i]["carbohydrates_total_g"];
            obj1["fibre"] = obj[i]["fiber_g"];
            obj1["prot"] = obj[i]["protein_g"];
            obj1["name"] = obj[i]["name"];

            tempArr.push(obj1);
          }
          if (tempArr.length === 0) {
            alert("Wrong link");
          } else {
            setData(tempArr);
          }
        }
      }
    );
  }, []);

  React.useEffect(() => {
    textSearch(props.foodName);
  }, [props.foodName, textSearch]);

  return (
    <div
      style={{
        marginTop: "6rem",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <RecipeReviewCard addItem={isAuthenticated} data={data} />
    </div>
  );
}
