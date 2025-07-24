# Minecraft Test Player

A Minecraft bot for end-to-end testing. It connects to non-premium servers and simulates a player's presence. The bot performs no in-game actions — it only maintains a connection for testing purposes.

## Docker Image
```
szelagi/mc-test-player
```

## Environment Variables
- `SERVER_HOST`	Address of the Minecraft server
- `SERVER_PORT`	Port of the Minecraft server
- `USERNAME`	Bot's username
- `MC_VERSION`	Minecraft version (e.g. 1.21.1)

## Example Usage

```
docker run --rm \
  -e SERVER_HOST=localhost \
  -e SERVER_PORT=25565 \
  -e USERNAME=TestBot \
  -e MC_VERSION=1.21.1 \
  szelagi/mc-test-player
```
