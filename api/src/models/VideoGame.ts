import { Prop, getModelForClass } from "@typegoose/typegoose";

class VideoGame{
    @Prop({required: true})
    id: number

    @Prop({required: true})
    name: string

    @Prop({required: true})
    description: string

    @Prop({required: true})
    fecha: string

    @Prop({required: true})
    rating: number

    @Prop({required: true})
    plataformas : string[] 

    @Prop({required: true})
    generos : string[] 

    @Prop({required: true})
    img : string 
}
const VideoGameModel= getModelForClass(VideoGame)
export default VideoGameModel