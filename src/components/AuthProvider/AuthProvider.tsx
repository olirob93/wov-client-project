import { AuthError, signInWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

type PromiseObjectNullString = Promise<{ error: null | string }>

export type AuthContextProps = {
  isAuthenticated: boolean;
  loginUser: (
    email: string,
    password: string
  ) => PromiseObjectNullString;
  logoutUser: () => void;
  userUID: string | null;
};

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/error" replace />;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userUID, setUserUID] = useState<string | null>(null);

  useEffect(() => {
    if (localStorage.getItem("userUID")) {
      setIsAuthenticated(true);
      setUserUID(localStorage.getItem("userUID"));
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const loginUser = async (
    email: string,
    password: string
  ): PromiseObjectNullString => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const accessToken = await userCredential.user.getIdToken();
      const userID = userCredential.user.uid;
      setUserUID(userID);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userUID", userID);
      setIsAuthenticated(true);
      navigate("/");
    } catch (error) {
      const errorCode = (error as AuthError).code;
      if (errorCode === "auth/invalid-credential") {
        return { error: "Invalid email/password" };
      } else {
        return {
          error: "Oops, something went wrong. Try again in a few minutes",
        };
      }
    }
    return { error: null };
  };
  const logoutUser = () => {
    // TODO: Remove when implemented
    console.log("log out");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, loginUser, logoutUser, userUID }}
    >
      {children}
    </AuthContext.Provider>
  );
};
