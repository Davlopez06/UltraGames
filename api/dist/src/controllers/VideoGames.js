"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postGame = exports.getGameDetail = exports.getGames = void 0;
const VideoGame_1 = __importDefault(require("../models/VideoGame"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const getGames = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.query;
        if (name) {
            const games = yield VideoGame_1.default.find();
            const game = games.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));
            if (game) {
                return res.status(200).json(game);
            }
            else {
                return res.status(404).json({ error: "Nombre invalido" });
            }
        }
        else {
            const games = yield VideoGame_1.default.find();
            return res.status(200).json(games);
        }
    }
    catch (error) {
        return res.status(404).json({ error: error });
    }
});
exports.getGames = getGames;
const getGameDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(404).json({ error: "No hay id" });
        }
        const game = yield VideoGame_1.default.find({ _id: id });
        return res.status(200).json(game);
    }
    catch (error) {
        return res.status(404).json({ error: error });
    }
});
exports.getGameDetail = getGameDetail;
const postGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, fecha, rating, plataformas, generos, img } = req.body;
        if (!name || !description || !fecha || !rating || !plataformas || !generos || !img) {
            return res.status(404).json({ error: "No hay suficientes datos" });
        }
        let id = Math.floor((Math.random() * (2000000000000000 - 10000000 + 1)) + 10000000);
        const game = new VideoGame_1.default({ id, name, description, fecha, rating, plataformas, generos, img });
        const createGame = yield game.save();
        return res.status(200).json(createGame);
    }
    catch (error) {
        return res.status(404).json({ error: error });
    }
});
exports.postGame = postGame;
