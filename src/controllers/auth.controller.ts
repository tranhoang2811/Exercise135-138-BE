import { Request, Response } from "express";
import User from "../models/user.model";

// *INFO: These function are used for exercise 135

export function createCookie(request: Request, response: Response): Response {
  response.cookie("email", "example@gmail.com");
  response.cookie("password", "123456");
  const account = {
    email: "example@gmail.com",
    password: "123456",
  };
  response.cookie("account", JSON.stringify(account));
  return response.send("Cookie created");
}

export function getCookie(request: Request, response: Response): Response {
  const email: string = request.cookies.email;
  const password: string = request.cookies.password;
  let information: string = "email = " + email + "<br/>";
  information += "password = " + password + "<br/>";
  if (request.cookies.account != null) {
    const account: Record<string, string> = JSON.parse(request.cookies.account);
    information += "account.email = " + account.email + "<br/>";
    information += "account.password = " + account.password + "<br/>";
  }
  return response.send(information);
}

export function clearCookie(request: Request, response: Response): Response {
  response.clearCookie("email");
  response.clearCookie("password");
  response.clearCookie("account");
  return response.send("Cookie cleared");
}

// *INFO: These function is used for exercise 136
export async function login(
  request: Request,
  response: Response
): Promise<Response> {
  const { username, password } = request.body;
  const user = await User.findOne({ username });
  if (!user) {
    return response.status(404).json("User not found");
  }

  if (user.password !== password) {
    return response.status(400).json("Wrong password");
  }

  response.cookie("userId", user.id);
  return response.status(200).json("Login successful");
}

export async function getLoginInformation(
  request: Request,
  response: Response
): Promise<Response> {
  const { userId } = request.cookies;
  if (userId) {
    const user = await User.findById(userId);
    return response.status(200).json({
      username: user?.username,
      password: user?.password,
    });
  }
  return response.status(200).json({
    username: "",
    password: "",
  });
}

// export function logout(request: Request, response: Response): Promise<void> {
//   response.clearCookie("userId");
//   response.send("Logout successful");
// }

// *INFO: This function is used for exercise 137
export function visitPage(request: Request, response: Response): Response {
  if ((request.session as any).visited) {
    (request.session as any).visited++;
    return response.send(
      "Visited " + (request.session as any).visited + " times"
    );
  }
  (request.session as any).visited = 1;
  return response.send("Welcome to this page for the first time!");
}
