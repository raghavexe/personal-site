interface Achievements {
  total: number;
  unlocked: number;
}

interface SteamGame {
  appid: number;
  name: string;
  playtime_forever: number;
  img_icon_url: string;
  achievements?: Achievements | null;
}

export type { SteamGame };
