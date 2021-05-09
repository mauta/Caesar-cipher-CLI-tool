#!/usr/bin/env node
import { Command } from 'commander';
import validation from "../src/validation.js";
import streaming from "../src/streaming.js";
import printing from '../src/printing.js';

const commander = new Command();

commander
   .option('-s, --shift <number>', 'add shift caesar')
   .option('-i, --input <name>', 'add file input')
   .option('-o, --output <name>', "add file output")
   .option('-a, --action <type>', 'add type action: encode/decode')

commander.parse();
const options = commander.opts();

validation(options);

if (options.input === undefined || options.output === undefined) {
   printing(+options.shift, options.action);
} else {
   streaming(options.input, options.output, +options.shift, options.action);
}