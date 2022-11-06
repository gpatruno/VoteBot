import { Command } from "./Command";
import { Hello } from "./commands/Hello";
import { Ping } from "./commands/Ping";
import { Help } from "./commands/Help";
import { Vote } from "./commands/Vote";

export const Commands: Command[] = [Ping, Hello, Help, Vote];