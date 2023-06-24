import React, { useRef, useState } from "react";
import { PostUser, PutUser } from "../controllers/controller";

export const Formulario = ({ setUser ,form,setForm,formRef }) => {
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, edad ,id} = form;
    const newUser = { nombre, edad };

    if (id === "") {
      PostUser(newUser, setUser);
       setForm({id:"",nombre:"",edad:""})
      formRef.current.reset();
    }else{

      console.log(newUser)

      PutUser(id , newUser ,setUser )
      setForm({id:"",nombre:"",edad:""})

      formRef.current.reset();
    }
   
  };

  return (
    <>
      <div className="formulario">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
         Nuevo usuario
        </button>

        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  { (form.id) ? "Editar Usuario" : "Agregar Usuario" }
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {/* INICIO DE FORMULARIO */}
                <form onSubmit={handleSubmit} ref={formRef}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      className="form-control"
                      aria-describedby="emailHelp"
                      onChange={handleChange}
                      value={form.nombre}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Edad
                    </label>
                    <input
                      type="text"
                      name="edad"
                      className="form-control"
                      onChange={handleChange}
                      value={form.edad}
                    />
                  </div>
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                </form>
                {/* FIN DEL FORMULARIO */}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
