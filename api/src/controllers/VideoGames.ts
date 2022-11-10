import VideoGameModel from "../models/VideoGame";
import axios from "axios";
import dotenv from "dotenv"
dotenv.config()

export const getGames= async (req: any,res: any) =>{
    try {
        const {name} = req.query

        if(name){
            const games = await VideoGameModel.find();
            const game= games.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))
            if(game){
                return res.status(200).json(game)
            }else{
                return res.status(404).json({error: "Nombre invalido"})
            }
        }else{
            const games = await VideoGameModel.find()
            return res.status(200).json(games)
        }
    } catch (error) {
        return res.status(404).json({error: error})
    }
}

export const getGameDetail = async(req: any,res: any) =>{
    try {
        const {id}= req.params;
        if(!id){
            return res.status(404).json({error: "No hay id"})
        }
        const game = await VideoGameModel.find({ _id: id });
        return res.status(200).json(game)
    } catch (error) {
        return res.status(404).json({error:error})
    }
}

export const postGame = async(req:any,res:any) =>{
    try {
        const {name,description,fecha,rating,plataformas,generos,img}= req.body;
        if( !name ||!description || !fecha || !rating ||!plataformas ||!generos ||!img){
            return res.status(404).json({error: "No hay suficientes datos"})
        }
        let id=Math.floor((Math.random() * (2000000000000000 - 10000000 + 1)) + 10000000)
        const game = new VideoGameModel({id,name,description,fecha,rating,plataformas,generos,img});
        const createGame = await game.save()

        return res.status(200).json(createGame)
        
    } catch (error) {
        return res.status(404).json({error:error})
    }
}

export const deleteGames= async(req:any,res:any)=>{
    const { id } = req.params;

    try {
        if(!id)return res.send("No ID was sent.")
        await VideoGameModel.findByIdAndDelete(id)
        return res.status(200).json({success:"Your pokemon was deleted successfully."})
    } catch (error) {
        return res.status(404).json({error:error})
    }
}