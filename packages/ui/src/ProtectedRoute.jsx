import styled from "styled-components";
import { useUser } from "@tis/auth/useUser";
import Spinner from "./Spinner";
import { useEffect } from "react";
import { portalUrl } from "@tis/config/urls";
// import { getAuthToken } from '../utils/auth';

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  // const token=getAuthToken();
  // console.log("token", token);
  // 1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2. If there is NO authenticated user, redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) {
        const returnUrl = window.location.href;
        window.location.assign(portalUrl(`/login?returnUrl=${encodeURIComponent(returnUrl)}`));
      }
    },
    [isAuthenticated, isLoading]
  );

  // 3. While loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4. If there IS a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
