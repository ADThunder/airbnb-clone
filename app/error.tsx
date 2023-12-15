"use client";

import { useEffect } from "react";

import EmtyState from "./components/EmtyState";

interface ErrorStateProps {
  error: Error;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <EmtyState title="Uh Oh" subTitle="Something went wrong!" />;
};

export default ErrorState;
