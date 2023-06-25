import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { access } from 'fs/promises';

const cp = async (pathTo, pathToNew) => {
  const pathToFile = path.join(process.cwd(), pathTo);
  const pathToNewFile = path.join(process.cwd(), pathToNew);

  if (!(pathToFile && pathToNewFile) && !path.extname(pathToNewFile)) {
    console.log('Invalid input');
    return;
  }

  try {
    await access(pathToFile);
  } catch (error) {
    console.log('Invalid input');
    return;
  }

  try {
    const readableStream = createReadStream(pathToFile);
    const writableStream = createWriteStream(pathToNewFile);

    readableStream.pipe(writableStream);
  } catch (error) {
    console.log('Operation failed');
  }
};

export { cp };
