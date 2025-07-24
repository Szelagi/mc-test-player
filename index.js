const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
    host: process.env.SERVER_HOST || 'localhost',
    port: parseInt(process.env.SERVER_PORT) || 25565,
    username: process.env.USERNAME || 'TesterBot',
    version: process.env.MC_VERSION || '1.20.1'
});

bot.once('spawn', () => {
    console.log('Bot spawned and connected!');
});

bot.on('error', (err) => {
    console.error('Bot error:', err);
});

bot.on('end', () => {
    console.log('Bot disconnected');
});