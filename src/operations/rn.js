import { rename as asyncRename, access } from 'fs/promises';
import path from 'path';

const rn = async (oldPathTo = '', newPathTo = '') => {
  const oldPathToFile = path.join(process.cwd(), oldPathTo);
  const newPathToFile = path.join(process.cwd(), newPathTo);
  if (!(oldPathTo && newPathTo) && !path.extname(newPathToFile)) {
    console.log('Invalid input');
    return;
  }

  try {
    await access(oldPathToFile);
  } catch (error) {
    console.log('Invalid input');
    return;
  }

  try {
    await asyncRename(oldPathToFile, newPathToFile);
  } catch (error) {
    console.log('Operation failed');
  }
};

export { rn };
