import ProfileCard from "../components/ProfileCard";
import FoodItemCard from "../components/card";
import { useUserState } from "../Context/UserContext";
import React from "react";
import axios from "axios";

export default function ProfilePage() {
  const { email } = useUserState();
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios.post("https://foodpedia2.herokuapp.com/getItems", { email }).then((response) => {
      const reversedArr = response.data.data.reverse();
      setData(reversedArr);
    });
  }, [email]);

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
      <ProfileCard itemsCount={data.length} />
      {data.length && <FoodItemCard data={data} />}
    </div>
  );
}
