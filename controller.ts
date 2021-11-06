const Property = require('./model/model');
import { Request, Response } from 'express';

async function getAll(req: Request, res: Response) {
  try {
    const properties = await Property.find();
    res.status(200).send(properties);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
}

async function postOne(req: Request, res: Response) {
  try {
    if (
      !req.body.name ||
      !req.body.imageURL ||
      !req.body.description ||
      !req.body.price ||
      !req.body.beds ||
      !req.body.baths ||
      !req.body.type
    ) {
      res.sendStatus(400);
    } else {
      const property = await new Property({
        name: req.body.name,
        imageURL: req.body.imageURL,
        description: req.body.description,
        price: req.body.price,
        beds: req.body.beds,
        baths: req.body.baths,
        type: req.body.type,
      }).save();

      res.status(201).send(property);
    }
  } catch (err) {
    console.log(err);
    res.status(500);
  }
}

async function updateOne(req: Request, res: Response) {
  try {
    const property = await Property.findById(req.params.id);
    Object.assign(property, req.body);
    property.save();
    res.status(200).send({ data: property });
  } catch (err) {
    console.log(err);
    res.status(500);
  }
}

module.exports = { getAll, postOne, updateOne };
