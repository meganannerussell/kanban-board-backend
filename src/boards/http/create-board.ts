import express from 'express';
import { createBoard } from '../actions/create-board';

export const createBoardEndpoint = (expressApp: express.Application) => {
  expressApp.post('/boards', async (req, res) => {
    const board = await createBoard({ name: req.body.name });
    res.json(board);
  });
};
