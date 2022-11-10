"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const VideoGames_1 = require("../controllers/VideoGames");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.send("Hellow");
});
router.get("/games", VideoGames_1.getGames);
router.get("/games/:id", VideoGames_1.getGameDetail);
router.post("/games", VideoGames_1.postGame);
exports.default = router;
