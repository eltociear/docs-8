---
id: ps-platforms-supported
title: Platforms supported
---

# `platform`s supported now

## Twitter

:::success ONLINE
- Staging
- Production
:::

| `platform` | `identity`                       | `proof_location`                       |
|------------|----------------------------------|----------------------------------------|
| `twitter`  | `twitter_username` (without `@`) | Proof tweet ID (`1415362679095635970`) |

## Keybase

:::success ONLINE
- Staging
- Production
:::

| `platform` | `identity`         | `proof_location` |
|------------|--------------------|------------------|
| `keybase`  | `keybase_username` | N/A              |

Proof post is located in
`https://your_identity.keybase.pub/NextID/COMPRESSED_PUBKEY_HEX.txt`,
so no `proof_location` needed.

## Ethereum

:::success ONLINE
- Staging
- Production
:::

| `platform` | `identity`                   | `proof_location` |
|------------|------------------------------|------------------|
| `ethereum` | Wallet address `0x123AbC...` | N/A              |

Two-way signatures are created from avatar sk and wallet sk, so no proof post needed.

## GitHub

:::success ONLINE
- Staging
- Production
:::

| `platform` | `identity`        | `proof_location`                              |
|------------|-------------------|-----------------------------------------------|
| `github`   | `github_username` | Public visible Gist ID `a6dddd2811af21b671fd` |

> Gist given should contains `0xPUBKEY_COMRESSED_HEX.json` file

## Discord

:::caution STAGING
- Staging
:::

| `platform` | `identity`      | `proof_location`                                                   |
|------------|-----------------|--------------------------------------------------------------------|
| `discord`  | `UserName#0000` | message link (`https://discord.com/channels/DIGITS/DIGITS/DIGITS`) |

> More info will be filled here when production is online (e.g. where to send proof post).

## DotBit

:::success ONLINE
- Production
- Staging
:::

| `platform` | `identity`      | `proof_location`                                                   |
|------------|-----------------|--------------------------------------------------------------------|
| `dotbit`   | `address.bit`   | N/A                                                                |

Create a Profile record with key `nextid` and value `${COMPRESSED_AVATAR_PUBKEY_IN_HEX}:${SIGNATURE_IN_BASE64}`.

## Solana

:::success ONLINE
- Production
- Staging
:::

| `platform` | `identity`                   | `proof_location` |
|------------|------------------------------|------------------|
| `solana`   | Wallet address `AbCdEfG12...`| N/A              |

Two-way signatures are created from avatar sk and wallet sk, so no proof post needed.

## Minds

:::success ONLINE
- Production
- Staging
:::

| `platform` | `identity`                | `proof_location`                                                                                          |
|------------|---------------------------|-----------------------------------------------------------------------------------------------------------|
| `minds`    | Minds username `username` | Post ID in permalink (e.g. `1421043369127186449` in `https://www.minds.com/newsfeed/1421043369127186449`) |

Guide user to send `post_content` as a public post.

## DNS

:::success ONLINE
- Production
- Staging
:::

| `platform` | `identity`                | `proof_location` |
|------------|---------------------------|------------------|
| `dns`      | Domain name `example.com` | N/A              |

Example: user want to bind `example.com` with his/her [avatar](../proof-service/glossary.md#glossary-avatar).

- Get `post_content` and `sign_payload` from [API](/rest-api/proofservice-api#proof-payload)
- Guide user to sign `sign_payload` using avatgar secret key.
- Inject signature into `post_content` in `base64` form.
- Guide user to add a `TXT` field for `example.com`
- Continue [Upload proof](/rest-api/proofservice-api#proof-add) procedure.

> Check `dig testcase.nextnext.id TXT` for what this record should be like.

## ActivityPub

:::success ONLINE
- Production
- Staging
:::

| `platform`    | `identity`                             | `proof_location`          |
|---------------|----------------------------------------|---------------------------|
| `activitypub` | Full username `username@ap-server.com` | Proof post ID (see below) |

### Supported server implementations

Following ActivityPub servers are supported:

- [Mastodon](https://joinmastodon.org)
- [Misskey](https://misskey-hub.net)
- [Pleroma](https://pleroma.social)

### About `proof_location`

Proof location should be an ID-ish thing in a "toot"'s detail page URL.

Examples:

- Misskey: `98wr1tkc82` for detail page `https://t.nyk.app/notes/98wr1tkc82`
- Mastodon: `109364595689133988` for detail page `https://mstdn.jp/web/@nykma/109364595689133988`
- Pleroma: `AQj3BoAIDiUOXgtVVw` for detail page `https://stereophonic.space/notice/AQj3BoAIDiUOXgtVVw`
