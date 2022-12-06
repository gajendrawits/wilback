// Normalize a port into a number, string, or false.
exports.normalizePort = (val) => {
  const PORT = parseInt(val, 10);
    console.log('PORT ', PORT);
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(PORT)) {
    // named pipe
    return val;
  }

  if (PORT >= 0) {
    // port number
    return PORT;
  }

  return false;
};

// Event listener for HTTP server "error" event.
exports.onError = (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  // const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
};
