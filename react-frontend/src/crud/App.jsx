import React, { useEffect, useRef, useState } from "react";
import { Formulario } from "../components/Formulario";
import { Tabla } from "../components/Tabla";
import { Navbar } from "../components/Navbar";
import { fetchData } from "../controllers/controller";

export const App = () => {
  const [user, setUser] = useState([]);
  const [form, setForm] = useState({ id: "", nombre: "", edad: "" });
  const formRef = useRef(null);

  return (
    <>
      <Navbar />
      <Formulario setUser = {setUser} form={form} setForm={setForm} formRef={formRef} />
      <Tabla user={user} setUser={setUser}  form={form} setForm={setForm} />
    </>
  );
};
