import { Board } from '../board';
import { repoGetBoards } from '../repo/repo-get-boards';

export const getBoards = async () => {
  const boards = await repoGetBoards();
  return boards;
};
