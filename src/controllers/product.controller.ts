import { Request, Response } from "express";
import { Session, SessionData } from "express-session";
import Product from "../models/product.model";
import { checkValidArray, getValidArray } from "../utils";

export async function list(
  request: Request,
  response: Response
): Promise<Response> {
  try {
    const products = await Product.find();
    return response.status(200).json(products);
  } catch (error) {
    return response.status(500).json(error);
  }
}

export async function create(
  request: Request,
  response: Response
): Promise<Response> {
  try {
    const payload = request.body;
    const product = await Product.create(payload);
    return response.status(200).json(product);
  } catch (error) {
    return response.status(500).json(error);
  }
}

export function addToCart(request: Request, response: Response): Response {
  const product = request.body;
  const { cart } = request.session;

  if (checkValidArray(cart)) {
    const existProduct = getValidArray(cart).find((item) => item.id === product.id);

    if (existProduct) {
      existProduct.quantity += 1;
      return response.end();
    } else {
      request.session.cart?.push({
        ...product,
        quantity: 1,
      });
      return response.end();
    }
  }
  request.session.cart = [
    {
      ...product,
      quantity: 1,
    },
  ];
  return response.end();
}

export function getCart(request: Request, response: Response): Response {
  const { cart } = request.session;
  return response.status(200).json(cart);
}

export function updateCart(request: Request, response: Response): Response {
  const cart = request.body;
  request.session.cart = cart;
  return response.end();
}
