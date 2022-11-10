import TypeModel from "../models/Type"

export const getTypes= async (req:any,res:any)=>{
    try {
        const types = await TypeModel.find()
        return res.status(200).json(types)
    }
    catch(error) {
        return res.status(404).json({error:error})
    }
}
