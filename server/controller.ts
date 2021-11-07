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
  const { name, imageURL, description, price, beds, baths, type } =
    req.body.property;
  try {
    if (
      !name ||
      !imageURL ||
      !description ||
      !price ||
      !beds ||
      !baths ||
      !type
    ) {
      res.sendStatus(400);
    } else {
      const property = await new Property({
        name,
        imageURL,
        description,
        price,
        beds,
        baths,
        type,
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
