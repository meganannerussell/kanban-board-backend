import express from 'express';
import { getBoards } from '../actions/get-boards';

export const getBoardsEndpoint = (expressApp: express.Application) => {
  expressApp.get('/boards', async (req, res) => {
    const boards = await getBoards();
    res.json(boards);
  });
};
