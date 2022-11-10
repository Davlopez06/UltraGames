import { Router } from 'express'
import { getTypes } from '../controllers/Types'
import { deleteGames, getGameDetail, getGames, postGame} from '../controllers/VideoGames'
const router = Router()

router.get("/", (req,res)=>{
    res.send("Hellow")
} )

router.get("/games", getGames)
router.get("/games/:id", getGameDetail )
router.post("/games", postGame)
router.delete("/games/:id", deleteGames )
router.get("/types", getTypes )


export default router 