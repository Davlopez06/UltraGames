import { Prop, getModelForClass } from "@typegoose/typegoose";

class VideoGame{
    @Prop()
    id: number

    @Prop()
    name: string

    @Prop()
    description: string

    @Prop()
    fecha: string

    @Prop()
    rating: number

    @Prop()
    plataformas : string[] 
}
const VideoGameModel= getModelForClass(VideoGame)
export default VideoGameModel