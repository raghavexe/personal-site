// app/lib/steam.server.ts
interface Achievement {
  achieved: number;
}

async function fetchAchievements(appid: number, steamid: string, apiKey: string) {
  const url =
    `https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/` +
    `?appid=${appid}&key=${apiKey}&steamid=${steamid}`;

  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    const achievements: Achievement[] = data.playerstats?.achievements ?? [];
    if (achievements.length === 0) return null;
    const unlocked = achievements.filter((a) => a.achieved === 1).length;
    return { total: achievements.length, unlocked };
  } catch {
    return null;
  }
}

export async function getOwnedGames() {
  const apiKey = process.env.STEAM_API_KEY!;
  const steamid = process.env.STEAM_ID!;

  const url =
    `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/` +
    `?key=${apiKey}` +
    `&steamid=${steamid}` +
    `&include_appinfo=true` +
    `&include_played_free_games=true` +
    `&format=json`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Response("Failed to fetch Steam games", { status: 500 });
  }

  const data = await res.json();
  const games = data.response.games ?? [];

  const topGames = [...games]
    .sort((a: any, b: any) => b.playtime_forever - a.playtime_forever)
    .slice(0, 31);

  const withAchievements = await Promise.all(
    topGames.map(async (game: any) => ({
      ...game,
      achievements: await fetchAchievements(game.appid, steamid, apiKey),
    }))
  );

  const rest = games.filter(
    (g: any) => !topGames.find((t: any) => t.appid === g.appid)
  );

  return [...withAchievements, ...rest];
}