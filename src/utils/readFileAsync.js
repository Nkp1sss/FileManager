import { createReadStream } from 'fs'; 

const  readFileAsync = (pathToFile) => {
  return new Promise((resolve, reject) => {
    const readableStream = createReadStream(pathToFile, 'utf-8');

    let fileData = '';

    readableStream.on('data', (data) => {
      fileData += data;
    });

    readableStream.on('end', () => {
      resolve(fileData);
    });

    readableStream.on('error', (error) => {
      reject(error);
    });
  });
}

export { readFileAsync };
