import { Router } from 'express'
const router = Router()

router.get("/", (req,res)=>{
    res.send("Hellow")
} )


export default router 