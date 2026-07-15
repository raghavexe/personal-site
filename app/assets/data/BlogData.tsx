type Post = {
  id: string;
  log: string;
  stardate: string;
  title: string;
  tags: string[];
  excerpt: string;
  body: string[];
  readTime: string;
};

const POSTS: Post[] = [
  {
    id: "01",
    log: "LOG.001",
    stardate: "2026.015.M7",
    title:
      "Why I Think Cyberpunk 2077: Phantom Liberty’s Ending Is the Ultimate Litmus Test of Human Empathy",
    tags: ["CYBERPUNK2077", "GAMING"],
    excerpt:
      "Many players see Songbird's betrayal as the reason to abandon her. But I believe Phantom Liberty asks a deeper question: can you still show empathy toward someone who has lied to you when you understand the desperation that drove them there?",
    body: [
      "Released as the major expansion for Cyberpunk 2077, Phantom Liberty takes players away from the familiar streets of Night City and into the dangerous world of Dogtown, a lawless district controlled by warlords, mercenaries, and those abandoned by society.",

      "But beneath the espionage, political conspiracies, and high-stakes missions, Phantom Liberty is ultimately a story about people. It is a story about broken promises, impossible choices, loyalty, survival, and the sacrifices people make when they are pushed into a corner.",

      "The expansion introduces Songbird, a brilliant netrunner working under the NUSA, and Reed, a loyal FIA (Federal Intelligence Agency) agent caught between his duty and his conscience. Through them, the game presents a conflict where there is no perfect choice and no easy answer.",

      "Unlike many games that present morality as a simple battle between good and evil, Phantom Liberty forces players to question their own judgments. It asks whether we value honesty over desperation, obedience over freedom, and justice over compassion.",

      "And perhaps the most difficult question it asks is this: When someone betrays you, do you judge their actions, or do you try to understand why they did it?",

      "The final call you make during the end of the DLC is whether to betray Songbird, an ailing netrunner who is in the same situation as you, slowly dying from Blackwall overuse and the resulting physical and mental fatigue. She is tired of being used as a tool by Rosalind Myers, the president of the NUSA, who sees her as nothing more than an asset — something expendable for her own ambitions of reaching deeper into the Blackwall, a space filled with rogue AIs that could end humanity if they ever entered the accessible net.",

      "If you have played both endings, you know that siding with Songbird leads to the revelation that she had been playing you all along. She knew the cure could only be used once, meaning that after saving herself, it would no longer be available for V.",

      "On the other hand, being completely loyal to the NUSA and returning Songbird back will cure V's condition, but at the cost of Songbird's freedom. Knowing she is a traitor, she will be placed under even higher scrutiny and forced to continue a miserable and painful existence under the NUSA's control.",

      "This is what I believe is the ultimate litmus test for human empathy.",

      'I have seen many angry comments online where people choose to betray Songbird because of a simple principle: "You betrayed me, so I betray you."',

      "And on the surface, I understand that argument. From V's perspective, it is easy to feel betrayed. You risk your life, fight through Dogtown, and put your trust in someone who promised you a way out, only to discover that she had been hiding the truth from you the entire time.",

      "But I believe many people stop at the betrayal itself and never ask the more important question: Why did Songbird feel like she had to betray you in the first place?",

      "Songbird had no friends. No allies. No safety net. Everyone around her was connected to Myers and the NUSA — the same people who had spent years treating her as a tool rather than a person. To Myers, Songbird was not a human being with fears, dreams, and a future. She was an asset. A weapon. A means to achieve her ambitions of reaching deeper into the Blackwall, regardless of the consequences it had on Songbird.",

      "Then, after years of being controlled and used, Songbird meets a complete stranger: V.",

      "And people expect her to immediately reveal everything? To blindly trust someone she barely knows with the most important secret of her life? Why would she?",

      "From Songbird's perspective, V is an unknown variable. She does not know whether V would understand, whether V would help her, or whether V would immediately turn around and hand her back to Myers. Trust is a luxury Songbird cannot afford.",

      "The difference between V and Songbird is that V still has options. V can search for another way out. V can go to Arasaka. V can ask the Aldecaldos for help. V can rely on Johnny and Rogue.",

      "Even though all of these options carry risks, V has people and possibilities to fall back on. Songbird does not. Songbird has nobody.",

      "Her entire world has been built around people using her, controlling her, and deciding her fate for her. When she looks at V, she is not looking at someone who can simply walk away and find another solution. She is looking at her only chance. And even then, that chance is uncertain, because she barely knows V.",

      "That is why I struggle with the idea that Songbird's betrayal alone justifies sending her back to the NUSA. Because doing so means judging her actions without considering the circumstances that created them.",

      'It means looking at someone who has spent years being exploited and saying: "You made one desperate choice, therefore you deserve to remain trapped."',

      "Songbird is not innocent. She manipulates V. She lies. She makes selfish decisions.",

      "But empathy is not reserved only for people who are perfect. The real test of empathy is whether you can still see someone as human when they have made mistakes.",

      "And that is what Phantom Liberty asks the player. When someone is trapped by the world around them and forced to make decisions that seem despicable, can you still see the person underneath?",

      "Can you still force yourself to do what is ultimately right, even if it costs your own chance at survival?",
    ],
    readTime: "8 MIN",
  },
];

export default POSTS;
