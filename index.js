require('dotenv').config();
const { 
  Client, 
  GatewayIntentBits, 
  ActionRowBuilder, 
  ButtonBuilder, 
  ButtonStyle, 
  Events, 
  EmbedBuilder,
  REST, 
  Routes, 
  SlashCommandBuilder
} = require('discord.js');
const schedule = require('node-schedule');
const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});
client.login(process.env.TOKEN);
