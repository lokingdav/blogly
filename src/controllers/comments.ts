import {Request, Response} from 'express';

export const index = async (req: Request, res: Response) => {
  res.json([{id: 1, title: 'Comment 1'}, {id: 2, title: 'Comment 2'}]);
}

export const store = async (req: Request, res: Response) => {
  res.json({id: 1, title: 'Comment 1'});
}