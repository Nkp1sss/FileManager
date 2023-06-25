import path from 'path';
import { access } from 'fs/promises';
import { createBrotliDecompress } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';

const decompress = async (pathFrom = '', pathTo = '') => {
  const pathFromFile = path.join(process.cwd(), pathFrom);
  const pathToFile = path.join(process.cwd(), pathTo);

  if (!(pathFromFile && pathToFile) && !path.extname(pathToFile)) {
    console.log('Invalid input');
    return;
  }

  try {
    await access(pathFromFile);
  } catch (error) {
    console.log('Invalid input');
    return;
  }

  try {
    const source = createReadStream(pathFromFile);
    const destination = createWriteStream(pathToFile);
    const brotli = createBrotliDecompress();
    pipeline(source, brotli, destination, (err) => {
      if (err) {
        console.error('An error occurred:', err);
        process.exitCode = 1;
      }
    });
  } catch (error) {
    console.log('Operation failed', error);
  }
};

export { decompress };
