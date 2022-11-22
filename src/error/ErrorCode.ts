const keys = [
    'ClientInvalidOption',
    'ClientInvalidProvidedShards',
    'ClientMissingIntents',
    'ClientNotReady',

    'TokenInvalid',
    'TokenMissing',
    'ApplicationCommandPermissionsTokenMissing',

    'WSCloseRequested',
    'WSConnectionExists',
    'WSNotOpen',
    'ManagerDestroyed',

    'BitFieldInvalid',

    'ShardingInvalid',
    'ShardingRequired',
    'InvalidIntents',
    'DisallowedIntents',
    'ShardingNoShards',
    'ShardingInProcess',
    'ShardingInvalidEvalBroadcast',
    'ShardingShardNotFound',
    'ShardingAlreadySpawned',
    'ShardingProcessExists',
    'ShardingWorkerExists',
    'ShardingReadyTimeout',
    'ShardingReadyDisconnected',
    'ShardingReadyDied',
    'ShardingNoChildExists',
    'ShardingShardMiscalculation',

    'ColorRange',
    'ColorConvert',

    'InviteOptionsMissingChannel',

    'ButtonLabel',
    'ButtonURL',
    'ButtonCustomId',

    'SelectMenuCustomId',
    'SelectMenuPlaceholder',
    'SelectOptionLabel',
    'SelectOptionValue',
    'SelectOptionDescription',

    'InteractionCollectorError',

    'FileNotFound',

    'UserBannerNotFetched',
    'UserNoDMChannel',

    'VoiceNotStageChannel',

    'VoiceStateNotOwn',
    'VoiceStateInvalidType',

    'ReqResourceType',

    'ImageFormat',
    'ImageSize',

    'MessageBulkDeleteType',
    'MessageNonceType',
    'MessageContentType',

    'SplitMaxLen',

    'BanResolveId',
    'FetchBanResolveId',

    'PruneDaysType',

    'GuildChannelResolve',
    'GuildVoiceChannelResolve',
    'GuildChannelOrphan',
    'GuildChannelUnowned',
    'GuildOwned',
    'GuildMembersTimeout',
    'GuildUncachedMe',
    'ChannelNotCached',
    'StageChannelResolve',
    'GuildScheduledEventResolve',
    'FetchOwnerId',

    'InvalidType',
    'InvalidElement',

    'MessageThreadParent',
    'MessageExistingThread',
    'ThreadInvitableType',

    'WebhookMessage',
    'WebhookTokenUnavailable',
    'WebhookURLInvalid',
    'WebhookApplication',
    'MessageReferenceMissing',

    'EmojiType',
    'EmojiManaged',
    'MissingManageEmojisAndStickersPermission',
    'NotGuildSticker',

    'ReactionResolveUser',

    'VanityURL',

    'InviteResolveCode',

    'InviteNotFound',

    'DeleteGroupDMChannel',
    'FetchGroupDMChannel',

    'MemberFetchNonceLength',

    'GlobalCommandPermissions',
    'GuildUncachedEntityResolve',

    'InteractionAlreadyReplied',
    'InteractionNotReplied',
    'InteractionEphemeralReplied',

    'CommandInteractionOptionNotFound',
    'CommandInteractionOptionType',
    'CommandInteractionOptionEmpty',
    'CommandInteractionOptionNoSubcommand',
    'CommandInteractionOptionNoSubcommandGroup',
    'AutocompleteInteractionOptionNoFocusedOption',

    'ModalSubmitInteractionFieldNotFound',
    'ModalSubmitInteractionFieldType',

    'InvalidMissingScopes',

    'NotImplemented',

    'SweepFilterReturn',

    'GuildForumMessageRequired',
];

// JSDoc for IntelliSense purposes
/**
 * @type {VoteBotErrorCodes}
 * @ignore
 */
module.exports = Object.fromEntries(keys.map(key => [key, key]));