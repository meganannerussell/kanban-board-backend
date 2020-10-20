import { v4 as uuidv4 } from 'uuid';
import { db } from '../../shared/db/db';
import { Board } from '../board';

export const repoCreateBoard = async ({ name }: { name: string }) => {
  const board: Board = { id: uuidv4(), name };
  await db('boards').insert({ id: board.id, name: board.name });
  return board;
};
