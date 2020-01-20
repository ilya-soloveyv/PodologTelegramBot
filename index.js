const express = require('express')
const app = express()
require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api')
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, {
  polling: true,
  request: {
    proxy: 'http://' + process.env.PROXY_LOGIN + ':' + process.env.PROXY_PASS + '@' + process.env.PROXY_IP + ':' + process.env.PROXY_PORT
  }
})

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  // console.log(msg)
  bot.sendMessage(chatId, 'Received your message');
});

app.listen(3009, () => console.log('Server PodologTelegramBot started'))