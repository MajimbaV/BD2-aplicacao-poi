import Poi from "../model/Poi.js"

export async function getPois(req, res){
    const pois = await Poi.findAll();
    res.json(pois);
}

export async function createPoi(req, res) {
    const newPoi = await Poi.create(req.body);
    res.status(201).json(newPoi);
}