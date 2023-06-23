import path from 'path';

import { readFileAsync } from '../utils/readFileAsync.js';

const cat = async (pathTo) => {
  const pathToFile = path.join(process.cwd(), pathTo);

  try {
    const data = await readFileAsync(pathToFile);
    console.log(data);
  } catch (error) {
    console.log('Operation failed');
  }
};

export { cat };
