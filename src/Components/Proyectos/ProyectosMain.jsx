import { AllFotter } from "../General/AllFotter";
import { AllHeaders } from "../General/AllHeaders";
import { ProyectosDescrip } from "./ProyectosDescrip";
import { useEffect } from "react";

export const ProyectosMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
      <ProyectosDescrip />
    </>
  );
};
