import { Command } from "./Command";
import { Hello } from "./commands/Hello";
import { Ping } from "./commands/Ping";
import { Help } from "./commands/Help";

export const Commands: Command[] = [Ping, Hello, Help];