import { pool } from "../conexion/db.js";

//CONTROLADOR DE PERSONA NODE API

export const getPersona = async (req,res)=>{
   const [usuarios] = await pool.query("SELECT *FROM usuarios");

//    const page = parseInt(req.params.page) || 1; // Número de página (por defecto 1)
//    const pageSize = parseInt(req.query.pageSize) || 3;

//      // Calcular los índices de inicio y fin de los elementos
//   const startIndex = (page - 1) * pageSize;
//   const endIndex = startIndex + pageSize;
   
//     // Obtener los elementos correspondientes a la página actual
//     const items = usuarios.slice(startIndex, endIndex);

//       // Calcular los metadatos de paginación
//   const totalItems = usuarios.length;
//   const totalPages = Math.ceil(totalItems / pageSize);


  
//    if(usuarios.length < 1) return res.status(404).json({msg:"NO FOUND USERS"})
   
//    res.json({
//     items,
//     metadata: {
//       page,
//       pageSize,
//       totalItems,
//       totalPages,
//     },
//   });

res.json(usuarios);


}

export const postPersona = async(req,res)=>{
    try {
        const { nombre, edad } = req.body;
        const  [AddUser] = await pool.query("INSERT INTO usuarios (nombre, edad) VALUES (?,?)",[nombre, edad]);
        if (AddUser.affectedRows>=1) {
            return res.status(200).json({msg:"USER ADD SUCCESSFULLY"})
        }
    } catch (error) {
        
    return res.status(500).json({msgs:error.message , code:error.code})
    }
  
}

export const putPersona = async(req,res)=>{
    const {nombre ,edad} = req.body;
    const id = req.params.id;
    try {
        const [actualizarUser] = await pool.query("UPDATE usuarios SET nombre = ? , edad = ? WHERE id = ?" , [nombre,edad,id])
        if (actualizarUser.affectedRows >=1 ) {
            return res.status(200).json({msg:"USER UPDATE SUCCESSFULLY"})
        }
    } catch (error) {
        return res.status(500).json({msgs:error.message , code:error.code})
    }
}



export const deletePersona = async(req,res)=>{
    try {
        const id = req.params.id;
        const [ DelUser ]  = await pool.query("DELETE FROM usuarios WHERE id = ?", [ id ])

        if (DelUser.affectedRows >=1) {
            return res.status(200).json({msg:"USER DELETE SUCCESSFULLY"})
        }

    } catch (error) {
        return res.status(500).json({msgs:error.message , code:error.code})

    }
}

export const getOnePersona =async (req,res)=>{
   try {
    const id = req.params.id;
    const [ OneUser ] =  await pool.query("SELECT *FROM usuarios WHERE id = ?" , [id])

    if (OneUser.length < 1) {
        return res.status(404).json({msg:"NO FOUND USER"})
    }
    res.json(OneUser)
 
} catch (error) {
    
   }
}