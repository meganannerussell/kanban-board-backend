import { db } from '../../shared/db/db';
import { Board } from '../board';

export const repoGetBoards = async () => {
  const boards: Board[] = await db
    .select('id', 'name', 'description')
    .from('boards');
  return boards;
};
