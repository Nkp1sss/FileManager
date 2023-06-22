import { readdir, stat } from 'fs/promises'
import path from 'path';

const ls = async () => {
  try {
    const files = await readdir(process.cwd());

    const folder = [];
    for (const file of files) {
      const stats = await stat(path.join(process.cwd(), file));
      folder.push({ Name: file, Type: stats.isFile() ? 'file' : 'directory' });
    }

    folder.sort((a, b) => a.Type > b.Type ? 1 : -1);
    console.table(folder);
  } catch (error) {
    console.log('Operation failed');
  }
};

export { ls };
