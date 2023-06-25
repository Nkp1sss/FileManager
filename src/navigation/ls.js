import { readdir } from 'fs/promises'

const ls = async () => {
  try {
    const files = await readdir(process.cwd(), { withFileTypes: true });

    const folder = [];
    for (const file of files) {
      if (file.isDirectory() || file.isFile()) {
        folder.push({ Name: file.name, Type: file.isFile() ? 'file' : 'directory' });
      }
    }

    folder.sort((a, b) => a.Type > b.Type ? 1 : -1);
    console.table(folder);
  } catch (error) {
    console.log('Operation failed');
  }
};

export { ls };
