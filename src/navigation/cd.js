import path from 'path';
import { access, stat } from 'fs/promises';

const cd = async (pathTo) => {
  try {
    if (path.isAbsolute(pathTo)) {
      await access(pathTo);
      process.chdir(pathTo);
    } else {
      const pathToDirectory = path.join(process.cwd(), pathTo);
      await access(pathToDirectory);

      const stats = await stat(pathTo);
      if (stats.isDirectory()) {
        process.chdir(pathToDirectory);
      } else {
        throw new Error('Not Directory');
      }
    }
  } catch (error) {
    console.log('Operation failed');
  }
};

export { cd };
