const getNameByArg = (args) => args.find((arg) => arg.startsWith('--username')).split('=')[1];

export { getNameByArg };
