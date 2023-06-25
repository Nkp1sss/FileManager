import path from 'path';
import { access } from 'fs/promises';

import { readFileAsync } from '../utils/readFileAsync.js';

const cat = async (pathTo = '') => {
  const pathToFile = path.join(process.cwd(), pathTo);

  try {
    if (path.extname(pathToFile) === '') throw new Error('Not File');
    await access(pathToFile);
  } catch (error) {
    console.log('Invalid input');
    return;
  }

  try {
    const data = await readFileAsync(pathToFile);
    console.log(data);
  } catch (error) {
    console.log('Operation failed');
  }
};

export { cat };
