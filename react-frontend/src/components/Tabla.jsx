import React, { useEffect } from "react";
import { deleteUser ,fetchData , editarUser} from "../controllers/controller";

export const Tabla = ({setUser , user ,form ,setForm}) => {


const hanldeDelete = (id ,setUser) =>{
    deleteUser(id , setUser)
}
const hanldeEdit = (id , form,setForm) =>{
 editarUser(id ,form,setForm)
}

useEffect(() => {
  fetchData(setUser);
}, []);

  return (
    <>
      <div className="tabla">
        <table className="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">Codigo</th>
              <th scope="col">Nombre</th>
              <th scope="col">Edad</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
                user.map((data) => (
                    <tr key={data.id}>
                    <th scope="row">{data.id}</th>
                    <td>{data.nombre}</td>
                    <td>{data.edad}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        onClick={()=>hanldeEdit(data.id ,form,setForm)}
                      >
                        editar
                      </button>
                      <button className="btn btn-warning m-1" onClick={()=>hanldeDelete(data.id , setUser)}>eliminar</button>
                    </td>
                  </tr>

                ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
};
