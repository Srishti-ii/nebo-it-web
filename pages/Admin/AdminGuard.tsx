import { Navigate } from "react-router-dom";

export default function AdminGuard({
  children,
}: {
  children: JSX.Element;
}) {
  const auth = localStorage.getItem("admin");

  if (auth !== "authenticated") {
    return <Navigate to="/login" replace />;
  }

  return children;
}