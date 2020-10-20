import { repoCreateBoard } from '../repo/repo-create-board';

export const createBoard = async ({ name }: { name: string }) => {
  const board = await repoCreateBoard({ name });
  return board;
};
