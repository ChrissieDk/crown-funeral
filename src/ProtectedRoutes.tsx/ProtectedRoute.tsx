// First, create a new component ProtectedRoute.tsx
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  // Check if member info exists in session storage
  const memberInfo = sessionStorage.getItem("memberInfo");

  // If not authenticated, redirect to sign-in
  if (!memberInfo) {
    return <Navigate to="/sign-in" />;
  }

  // If authenticated, render the protected content
  return <>{children}</>;
};

export default ProtectedRoute;
