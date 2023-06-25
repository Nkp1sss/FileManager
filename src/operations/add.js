import { access, writeFile } from 'fs/promises';
import path from 'path';

const add = async (pathTo) => {
  const pathToFile = path.join(process.cwd(), pathTo);

  if (path.extname(pathToFile) === '') {
    console.log('Invalid Input');
    return;
  }

  try {
    await access(pathToFile);
    throw new Error('FS operation failed');
  } catch (error) {
    if (error.code === 'ENOENT') {
      await writeFile(pathToFile, '');
    } else {
      console.log('Operation failed');
    }
  }
};

export { add };
