import {Request, Response} from 'express';

export const home = async (req: Request, res: Response) => {
  res.send("home");
}

export const login = async (req: Request, res: Response) => {
  res.send("login");
}

export const logout = async (req: Request, res: Response) => {
  res.send("logout");
}

export const register = async (req: Request, res: Response) => {
  res.send("register");
}

export const resetPassword = async (req: Request, res: Response) => {
  res.send("reset password");
}