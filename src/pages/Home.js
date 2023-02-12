import { useNavigate } from "react-router-dom";

export default function Home(props) {
  const { auth, setAuth } = props;
  const navigate = useNavigate();
  const handleClick = () => {
    setAuth({ IsValid: false });
    navigate("/");
  };
  return (
    <>
      <h1>welcome, {auth.firstName}</h1>
      <button onClick={handleClick}>Log out</button>
    </>
  );
}
