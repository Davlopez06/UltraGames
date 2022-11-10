import { Prop, getModelForClass } from "@typegoose/typegoose";

class Type{
    @Prop({required: true})
    id: number

    @Prop({required: true})
    name: string
}
const TypeModel= getModelForClass(Type)
export default TypeModel