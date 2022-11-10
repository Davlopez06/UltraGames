"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typegoose_1 = require("@typegoose/typegoose");
class VideoGame {
}
__decorate([
    (0, typegoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], VideoGame.prototype, "id", void 0);
__decorate([
    (0, typegoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], VideoGame.prototype, "name", void 0);
__decorate([
    (0, typegoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], VideoGame.prototype, "description", void 0);
__decorate([
    (0, typegoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], VideoGame.prototype, "fecha", void 0);
__decorate([
    (0, typegoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], VideoGame.prototype, "rating", void 0);
__decorate([
    (0, typegoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], VideoGame.prototype, "plataformas", void 0);
__decorate([
    (0, typegoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], VideoGame.prototype, "generos", void 0);
__decorate([
    (0, typegoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], VideoGame.prototype, "img", void 0);
const VideoGameModel = (0, typegoose_1.getModelForClass)(VideoGame);
exports.default = VideoGameModel;
