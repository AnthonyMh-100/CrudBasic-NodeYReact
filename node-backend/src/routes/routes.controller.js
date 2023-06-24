import { Router } from "express";
import { getPersona,postPersona,putPersona ,deletePersona,getOnePersona } from "../controller/controller.js";

const router = Router();

router.get('/usuarios',getPersona);
//router.get('/usuarios/:page',getPersona);
router.get('/usuario/:id',getOnePersona);
router.post('/usuarioPost',postPersona);
router.put('/usuarioPut/:id',putPersona);
router.delete('/UsuarioDelete/:id',deletePersona);

export default router;