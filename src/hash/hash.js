import path from 'path';
import { readFile, access } from 'fs/promises';
import { createHash } from 'crypto';

const hash = async (pathTo) => {
  const pathToFile = path.join(process.cwd(), pathTo);

  try {
    await access(pathToFile);
  } catch (error) {
    console.log('Invalid input');
    return;
  }

  try {
    const content = await readFile(pathToFile, 'utf-8');
    const hash = createHash('sha256')
      .update(content)
      .digest('hex');
    console.log(hash);
  } catch (error) {
    console.log('Operation failed');
  }
};

export { hash };
