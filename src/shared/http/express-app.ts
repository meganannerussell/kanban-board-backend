import express from 'express';
import { createBoardEndpoint } from '../../boards/http/create-board';
import { getBoardsEndpoint } from '../../boards/http/get-boards';

export const expressApp = express();

expressApp.use(express.json());

getBoardsEndpoint(expressApp);
createBoardEndpoint(expressApp);
