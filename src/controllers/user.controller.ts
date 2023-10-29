import { Request, Response } from "express";
import User from "../models/user.model";

export async function create(
  request: Request,
  response: Response
): Promise<void> {
  const user = request.body;
  await User.create(user);
  response.send("User created");
}

export async function update(
  request: Request,
  response: Response
): Promise<void> {
  const { id } = request.params;
  const user = request.body;
  await User.findByIdAndUpdate(id, user);
  response.send("User updated");
}
