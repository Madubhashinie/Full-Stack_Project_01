import NotFoundError from "../domain/errors/not-found-error";
import Category from "../infrastructure/schemas/Category";
import { Request, Response, NextFunction } from "express";

export const getCategories = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const data = await Category.find();
    return res.status(200).json(data).send();
  } catch (error) {
    next(error);
  }
};

export const createCategory = async (req:Request, res:Response, next:NextFunction) => {
  try {
    await Category.create(req.body);
    return res.status(201).send();
  } catch (error) {
    next(error);
  }
};

export const getCategory = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const id = req.params.id;
    const category = await Category.findById(id);
    if (!category) {
      throw new NotFoundError("Product not found");
    }

    return res.status(200).json(category).send();
  } catch (error) {
    next(error);
  }
};

export const deleteCategory = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const id = req.params.id;
    const category = await Category.findByIdAndDelete(id);

    if (!category) {
      throw new NotFoundError("Product not found");
    }
    return res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export const updateCategory = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const id = req.params.id;
    const category = await Category.findByIdAndUpdate(id, req.body);

    if (!category) {
      throw new NotFoundError("Product not found");
    }

    return res.status(200).send(category);
  } catch (error) {
    next(error);
  }
};