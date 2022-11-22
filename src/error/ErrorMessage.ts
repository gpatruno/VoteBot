const VBotErrorCodes = require('./ErrorCode');

module.exports = {
    [VBotErrorCodes.ClientInvalidOption]: (prop: any, must: any) => `The ${prop} option must be ${must}`,
    [VBotErrorCodes.ClientInvalidProvidedShards]: 'None of the provided shards were valid.',
    [VBotErrorCodes.ClientMissingIntents]: 'Valid intents must be provided for the Client.',
    [VBotErrorCodes.ClientNotReady]: (action: any) => `The client needs to be logged in to ${action}.`,

    [VBotErrorCodes.TokenInvalid]: 'An invalid token was provided.',
    [VBotErrorCodes.TokenMissing]: 'Request to use token, but token was unavailable to the client.',
    [VBotErrorCodes.ApplicationCommandPermissionsTokenMissing]:
        'Editing application command permissions requires an OAuth2 bearer token, but none was provided.',

    [VBotErrorCodes.WSCloseRequested]: 'WebSocket closed due to user request.',
    [VBotErrorCodes.WSConnectionExists]: 'There is already an existing WebSocket connection.',
    [VBotErrorCodes.WSNotOpen]: (data = 'data') => `WebSocket not open to send ${data}`,
    [VBotErrorCodes.ManagerDestroyed]: 'Manager was destroyed.',

    [VBotErrorCodes.BitFieldInvalid]: (bit: any) => `Invalid bitfield flag or number: ${bit}.`,

    [VBotErrorCodes.ShardingInvalid]: 'Invalid shard settings were provided.',
    [VBotErrorCodes.ShardingRequired]: 'This session would have handled too many guilds - Sharding is required.',
    [VBotErrorCodes.InvalidIntents]: 'Invalid intent provided for WebSocket intents.',
    [VBotErrorCodes.DisallowedIntents]: 'Privileged intent provided is not enabled or whitelisted.',
    [VBotErrorCodes.ShardingNoShards]: 'No shards have been spawned.',
    [VBotErrorCodes.ShardingInProcess]: 'Shards are still being spawned.',
    [VBotErrorCodes.ShardingInvalidEvalBroadcast]: 'Script to evaluate must be a function',
    [VBotErrorCodes.ShardingShardNotFound]: (id: any) => `Shard ${id} could not be found.`,
    [VBotErrorCodes.ShardingAlreadySpawned]: (count: any) => `Already spawned ${count} shards.`,
    [VBotErrorCodes.ShardingProcessExists]: (id: any) => `Shard ${id} already has an active process.`,
    [VBotErrorCodes.ShardingWorkerExists]: (id: any) => `Shard ${id} already has an active worker.`,
    [VBotErrorCodes.ShardingReadyTimeout]: (id: any) => `Shard ${id}'s Client took too long to become ready.`,
    [VBotErrorCodes.ShardingReadyDisconnected]: (id: any) => `Shard ${id}'s Client disconnected before becoming ready.`,
    [VBotErrorCodes.ShardingReadyDied]: (id: any) => `Shard ${id}'s process exited before its Client became ready.`,
    [VBotErrorCodes.ShardingNoChildExists]: (id: any) => `Shard ${id} has no active process or worker.`,
    [VBotErrorCodes.ShardingShardMiscalculation]: (shard: any, guild: any, count: any) =>
        `Calculated invalid shard ${shard} for guild ${guild} with ${count} shards.`,

    [VBotErrorCodes.InteractionCollectorError]: (reason: any) =>
        `Collector received no interactions before ending with reason: ${reason}`,

    [VBotErrorCodes.FileNotFound]: (file: any) => `File could not be found: ${file}`,

    [VBotErrorCodes.UserBannerNotFetched]: "You must fetch this user's banner before trying to generate its URL!",
    [VBotErrorCodes.UserNoDMChannel]: 'No DM Channel exists!',

    [VBotErrorCodes.VoiceNotStageChannel]: 'You are only allowed to do this in stage channels.',

    [VBotErrorCodes.VoiceStateNotOwn]:
        'You cannot self-deafen/mute/request to speak on VoiceStates that do not belong to the ClientUser.',
    [VBotErrorCodes.VoiceStateInvalidType]: (name: any) => `${name} must be a boolean.`,

    [VBotErrorCodes.ReqResourceType]: 'The resource must be a string, Buffer or a valid file stream.',

    [VBotErrorCodes.GuildChannelResolve]: 'Could not resolve channel to a guild channel.',
    [VBotErrorCodes.GuildVoiceChannelResolve]: 'Could not resolve channel to a guild voice channel.',
    [VBotErrorCodes.GuildChannelOrphan]: 'Could not find a parent to this guild channel.',
    [VBotErrorCodes.GuildChannelUnowned]: "The fetched channel does not belong to this manager's guild.",
    [VBotErrorCodes.GuildOwned]: 'Guild is owned by the client.',
    [VBotErrorCodes.GuildMembersTimeout]: "Members didn't arrive in time.",
    [VBotErrorCodes.GuildUncachedMe]: 'The client user as a member of this guild is uncached.',
    [VBotErrorCodes.ChannelNotCached]: 'Could not find the channel where this message came from in the cache!',
    [VBotErrorCodes.StageChannelResolve]: 'Could not resolve channel to a stage channel.',
    [VBotErrorCodes.GuildScheduledEventResolve]: 'Could not resolve the guild scheduled event.',
    [VBotErrorCodes.FetchOwnerId]: "Couldn't resolve the guild ownerId to fetch the member.",

    [VBotErrorCodes.WebhookMessage]: 'The message was not sent by a webhook.',
    [VBotErrorCodes.WebhookTokenUnavailable]: 'This action requires a webhook token, but none is available.',
    [VBotErrorCodes.WebhookURLInvalid]: 'The provided webhook URL is not valid.',
    [VBotErrorCodes.WebhookApplication]: 'This message webhook belongs to an application and cannot be fetched.',
    [VBotErrorCodes.MessageReferenceMissing]: 'The message does not reference another message',

    [VBotErrorCodes.EmojiType]: 'Emoji must be a string or GuildEmoji/ReactionEmoji',
    [VBotErrorCodes.EmojiManaged]: 'Emoji is managed and has no Author.',
    [VBotErrorCodes.MissingManageEmojisAndStickersPermission]: (guild: any) =>
        `Client must have Manage Emojis and Stickers permission in guild ${guild} to see emoji authors.`,
    [VBotErrorCodes.NotGuildSticker]: 'Sticker is a standard (non-guild) sticker and has no author.',

    [VBotErrorCodes.ReactionResolveUser]: "Couldn't resolve the user id to remove from the reaction.",

    [VBotErrorCodes.VanityURL]: 'This guild does not have the vanity URL feature enabled.',

    [VBotErrorCodes.InviteResolveCode]: 'Could not resolve the code to fetch the invite.',

    [VBotErrorCodes.InviteNotFound]: 'Could not find the requested invite.',

    [VBotErrorCodes.DeleteGroupDMChannel]: "Bots don't have access to Group DM Channels and cannot delete them",
    [VBotErrorCodes.FetchGroupDMChannel]: "Bots don't have access to Group DM Channels and cannot fetch them",

    [VBotErrorCodes.MemberFetchNonceLength]: 'Nonce length must not exceed 32 characters.',

    [VBotErrorCodes.GlobalCommandPermissions]:
        'Permissions for global commands may only be fetched or modified by providing a GuildResolvable ' +
        "or from a guild's application command manager.",
    [VBotErrorCodes.GuildUncachedEntityResolve]: (type: any) =>
        `Cannot resolve ${type} from an arbitrary guild, provide an id instead`,

    [VBotErrorCodes.InteractionAlreadyReplied]: 'The reply to this interaction has already been sent or deferred.',
    [VBotErrorCodes.InteractionNotReplied]: 'The reply to this interaction has not been sent or deferred.',
    [VBotErrorCodes.InteractionEphemeralReplied]: 'Ephemeral responses cannot be deleted.',

    [VBotErrorCodes.InvalidMissingScopes]: 'At least one valid scope must be provided for the invite',

    [VBotErrorCodes.NotImplemented]: (what: any, name: any) => `Method ${what} not implemented on ${name}.`,

    [VBotErrorCodes.SweepFilterReturn]: 'The return value of the sweepFilter function was not false or a Function',

    [VBotErrorCodes.GuildForumMessageRequired]: 'You must provide a message to create a guild forum thread',
};