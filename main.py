import discord

client = discord.Client()

@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith('hello'):
        await message.channel.send('Hello!')

    if message.content.startswith('씨발'):
        await message.channel.send('좆같네')

    if message.content.startswith('난 간다'):
        await message.channel.send('섹스섹스')

    if message.content.startswith('좆까'):
        await message.channel.send('안해')

    if message.content.startswith('아 몰라'):
        await message.channel.send('꺼져')

    if message.content.startswith('와;'):
        await message.channel.send('ㄹㅈㄷ;;')

    if message.content.startswith('히히'):
        await message.channel.send('섹스다 섹스')

client.run('NzgzNDkxNjk0MjcyMTg0MzYx.X8bhgA.iCvSBN181s4hL-eN94lu1B_KvzA')
