import { Router } from 'express'
import { getGameDetail, getGames, postGame} from '../controllers/VideoGames'
const router = Router()

router.get("/", (req,res)=>{
    res.send("Hellow")
} )

router.get("/games", getGames)
router.get("/games/:id", getGameDetail )
router.post("/games", postGame)


export default router 