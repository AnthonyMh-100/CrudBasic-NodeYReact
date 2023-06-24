//import {setUser} from "../crud/App";


 //GET USERS
 export const fetchData = async (setUser) => {
  try {
    const data = await fetch("http://localhost:3000/api/usuarios");
    const res = await data.json();
    setUser(res);
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
  }
};


  //POST USER
export const PostUser = async( user ,setUser  ) =>{
  await fetch(`http://localhost:3000/api/usuarioPost`, {
  headers: { "Content-Type": "application/json" },
  method: "POST",
  body: JSON.stringify(user)
});
//alert("Usurario Registrado!!")
 fetchData(setUser);
} 
 // DELETE USERS
 export const deleteUser = async(id ,setUser)=>{
   await fetch(`http://localhost:3000/api/UsuarioDelete/${id}`,{method:"DELETE"});
  // const res = await data.json();
      //alert("Usurario Eliminado!!")

  fetchData(setUser);
}


//PUT USER
export const PutUser = async( id , user ,setUser) =>{
await fetch(`http://localhost:3000/api/usuarioPut/${id}`, {
   headers: { "Content-Type": "application/json" },
   method: "PUT",
   body: JSON.stringify(user)
 });
     alert("Usurario Actualizado!!")

 fetchData(setUser);
}
//GET USER
export const editarUser = async (id ,form,setForm) =>{
const data = await fetch(`http://localhost:3000/api/usuario/${ id }`);
const [ res ] = await data.json();
setForm({...form,
  id: res.id,
  nombre:res.nombre,
  edad : res.edad
})
}


