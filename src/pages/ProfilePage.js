import ProfileCard from "../components/ProfileCard";

export default function ProfilePage() {
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
      <ProfileCard />
    </div>
  );
}
