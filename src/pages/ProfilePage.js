import Foodprofile from "../components/foodprofile";

export default function ProfilePage() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "auto",
      }}
    >
      <Foodprofile />
    </div>
  );
}
