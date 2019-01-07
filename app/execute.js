module.exports = (command) => {
  switch (command) {
    case 'shutdown':
      process.exit();
    default:
      console.warn(`Unknown command: "${command}".`)
  }
}