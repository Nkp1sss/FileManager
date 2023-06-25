import path from 'path';
import { access, stat } from 'fs/promises';

const cd = async (pathTo = '') => {
  const pathToDirectory = path.join(process.cwd(), pathTo);
  try {
    if (path.isAbsolute(pathTo)) {
      await access(pathTo);
    } else {
      await access(pathToDirectory);
      const stats = await stat(pathToDirectory);
      if (!stats.isDirectory()) {
        throw new Error('Not Directory');
      }
    }
  } catch (error) {
    console.log('Invalid input');
    return;
  }

  try {
    if (path.isAbsolute(pathTo)) {
      process.chdir(pathTo);
    } else {
      process.chdir(pathToDirectory);
    }
  } catch (error) {
    console.log('Operation failed');
  }
};

export { cd };
