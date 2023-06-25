import { rm as rmAsync, access } from 'fs/promises';
import path from 'path';

const rm = async (pathTo) => {
  const pathToFile = path.join(process.cwd(), pathTo);

  try {
    await access(pathToFile);
  } catch (error) {
    console.log('Invalid input');
    return;
  }

  try {
    await rmAsync(pathToFile);
  } catch (error) {
    console.log('Operation failed');
  }
};

export { rm };
