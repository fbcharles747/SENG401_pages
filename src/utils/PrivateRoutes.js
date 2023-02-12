import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes(props) {
  const { auth } = props;
  console.log(auth);
  return <>{auth.IsValid ? <Outlet /> : <Navigate to="/login" />}</>;
}
