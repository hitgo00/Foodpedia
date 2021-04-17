import { Link } from "@reach/router";

const pages = [
  {
    label: "Search Page",
    link: "/search",
  },
  {
    label: "Home Page",
    link: "/",
  },
  {
    label: "Profile",
    link: "/profile",
  },
];

function Navbar() {
  return (
    <div style={{
        width: "100%",
        backgroundColor:"blue",
        opacity:"1",
        height: "3rem",
        color: "white",
        position:"sticky",
        top:"0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    }}>
      {pages.map((page) => (
        <Link to={page.link} key={page.label}>
          <div style={{padding:"8px"}}> {page.label}</div>
        </Link>
      ))}
    </div>
  );
}

export default Navbar;




