interface Participant {
  id: string;
  resultText: string | null;
  isWinner: boolean;
  status: "PLAYED" | "NO_SHOW" | "WALK_OVER" | "NO_PARTY" | null;
  name: string;
}

interface MatchData {
  id: number;
  name: string;
  nextMatchId?: number | null;
  tournamentRoundText: string;
  startTime: string;
  state: "NO_SHOW" | "WALK_OVER" | "NO_PARTY" | "DONE" | "SCORE_DONE";
  participants: Participant[];
}

export const round1: MatchData[] = [
  {
    id: 260001,
    name: "Knockout 1",
    nextMatchId: null,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-27",
    state: "DONE",
    participants: [
      {
        id: "p1",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 1",
      },
      {
        id: "p2",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 2",
      },
    ],
  },
  {
    id: 260002,
    name: "Knockout 2",
    nextMatchId: null,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-27",
    state: "DONE",
    participants: [
      {
        id: "p3",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 3",
      },
      {
        id: "p4",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 4",
      },
    ],
  },
  {
    id: 260003,
    name: "Knockout 3",
    nextMatchId: null,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-28",
    state: "DONE",
    participants: [
      {
        id: "p5",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 5",
      },
      {
        id: "p6",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 6",
      },
    ],
  },
  {
    id: 260004,
    name: "Knockout 4",
    nextMatchId: null,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-28",
    state: "DONE",
    participants: [
      {
        id: "p7",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 7",
      },
      {
        id: "p8",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 8",
      },
    ],
  },
  {
    id: 260005,
    name: "Knockout 5",
    nextMatchId: null,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-27",
    state: "DONE",
    participants: [
      {
        id: "p9",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 9",
      },
      {
        id: "p10",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 10",
      },
    ],
  },
  {
    id: 260006,
    name: "Knockout 6",
    nextMatchId: null,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-27",
    state: "DONE",
    participants: [
      {
        id: "p11",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 11",
      },
      {
        id: "p12",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 12",
      },
    ],
  },
  {
    id: 260007,
    name: "Knockout 7",
    nextMatchId: null,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-28",
    state: "DONE",
    participants: [
      {
        id: "p13",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 13",
      },
      {
        id: "p14",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 14",
      },
    ],
  },
  {
    id: 260008,
    name: "Knockout 8",
    nextMatchId: null,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-28",
    state: "DONE",
    participants: [
      {
        id: "p15",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 15",
      },
      {
        id: "p16",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 16",
      },
    ],
  },
];
export const matches: MatchData[] = [
  {
    id: 260001,
    name: "Knockout 1",
    nextMatchId: 260009,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-27",
    state: "DONE",
    participants: [
      {
        id: "p1",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 1",
      },
      {
        id: "p2",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 2",
      },
    ],
  },
  {
    id: 260002,
    name: "Knockout 2",
    nextMatchId: 260009,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-27",
    state: "DONE",
    participants: [
      {
        id: "p3",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 3",
      },
      {
        id: "p4",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 4",
      },
    ],
  },
  {
    id: 260003,
    name: "Knockout 3",
    nextMatchId: 2600010,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-28",
    state: "DONE",
    participants: [
      {
        id: "p5",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 5",
      },
      {
        id: "p6",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 6",
      },
    ],
  },
  {
    id: 260004,
    name: "Knockout 4",
    nextMatchId: 2600010,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-28",
    state: "DONE",
    participants: [
      {
        id: "p7",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 7",
      },
      {
        id: "p8",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 8",
      },
    ],
  },
  {
    id: 260005,
    name: "Knockout 5",
    nextMatchId: 2600011,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-27",
    state: "DONE",
    participants: [
      {
        id: "p9",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 9",
      },
      {
        id: "p10",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 10",
      },
    ],
  },
  {
    id: 260006,
    name: "Knockout 6",
    nextMatchId: 2600011,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-27",
    state: "DONE",
    participants: [
      {
        id: "p11",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 11",
      },
      {
        id: "p12",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 12",
      },
    ],
  },
  {
    id: 260007,
    name: "Knockout 7",
    nextMatchId: 2600012,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-28",
    state: "DONE",
    participants: [
      {
        id: "p13",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 13",
      },
      {
        id: "p14",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 14",
      },
    ],
  },
  {
    id: 260008,
    name: "Knockout 8",
    nextMatchId: 2600012,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-28",
    state: "DONE",
    participants: [
      {
        id: "p15",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 15",
      },
      {
        id: "p16",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 16",
      },
    ],
  },
  {
    id: 260009,
    name: "Quarterfinal 1",
    nextMatchId: 2600013,
    tournamentRoundText: "Quarterfinal",
    startTime: "2021-05-29",
    state: "DONE",
    participants: [
      {
        id: "p1",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 1",
      },
      {
        id: "p3",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 3",
      },
    ],
  },
  {
    id: 2600010,
    name: "Quarterfinal 2",
    nextMatchId: 2600013,
    tournamentRoundText: "Quarterfinal",
    startTime: "2021-05-29",
    state: "DONE",
    participants: [
      {
        id: "p5",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 5",
      },
      {
        id: "p7",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 7",
      },
    ],
  },
  {
    id: 2600011,
    name: "Quarterfinal 3",
    nextMatchId: 2600014,
    tournamentRoundText: "Quarterfinal",
    startTime: "2021-05-29",
    state: "DONE",
    participants: [
      {
        id: "p9",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 9",
      },
      {
        id: "p11",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 11",
      },
    ],
  },
  {
    id: 2600012,
    name: "Quarterfinal 4",
    nextMatchId: 2600014,
    tournamentRoundText: "Quarterfinal",
    startTime: "2021-05-29",
    state: "DONE",
    participants: [
      {
        id: "p13",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 13",
      },
      {
        id: "p15",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 15",
      },
    ],
  },
  {
    id: 2600013,
    name: "Semifinal 1",
    nextMatchId: 2600015,
    tournamentRoundText: "Semifinal",
    startTime: "2021-05-30",
    state: "DONE",
    participants: [
      {
        id: "p1",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 1",
      },
      {
        id: "p5",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 5",
      },
    ],
  },
  {
    id: 2600014,
    name: "Semifinal 2",
    nextMatchId: 2600015,
    tournamentRoundText: "Semifinal",
    startTime: "2021-05-30",
    state: "DONE",
    participants: [
      {
        id: "p9",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 9",
      },
      {
        id: "p13",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 13",
      },
    ],
  },
  {
    id: 2600015,
    name: "Final - Match",
    nextMatchId: null,
    tournamentRoundText: "Final",
    startTime: "2021-05-31",
    state: "DONE",
    participants: [
      {
        id: "p1",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 1",
      },
      {
        id: "p9",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 9",
      },
    ],
  },
];

export const quarter: MatchData[] = [
  {
    id: 260001,
    name: "Knockout 1",
    nextMatchId: 260009,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-27",
    state: "DONE",
    participants: [
      {
        id: "p1",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 1",
      },
      {
        id: "p2",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 2",
      },
    ],
  },
  {
    id: 260002,
    name: "Knockout 2",
    nextMatchId: 260009,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-27",
    state: "DONE",
    participants: [
      {
        id: "p3",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 3",
      },
      {
        id: "p4",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 4",
      },
    ],
  },
  {
    id: 260003,
    name: "Knockout 3",
    nextMatchId: 2600010,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-28",
    state: "DONE",
    participants: [
      {
        id: "p5",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 5",
      },
      {
        id: "p6",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 6",
      },
    ],
  },
  {
    id: 260004,
    name: "Knockout 4",
    nextMatchId: 2600010,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-28",
    state: "DONE",
    participants: [
      {
        id: "p7",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 7",
      },
      {
        id: "p8",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 8",
      },
    ],
  },
  {
    id: 260005,
    name: "Knockout 5",
    nextMatchId: 2600011,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-27",
    state: "DONE",
    participants: [
      {
        id: "p9",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 9",
      },
      {
        id: "p10",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 10",
      },
    ],
  },
  {
    id: 260006,
    name: "Knockout 6",
    nextMatchId: 2600011,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-27",
    state: "DONE",
    participants: [
      {
        id: "p11",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 11",
      },
      {
        id: "p12",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 12",
      },
    ],
  },
  {
    id: 260007,
    name: "Knockout 7",
    nextMatchId: 2600012,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-28",
    state: "DONE",
    participants: [
      {
        id: "p13",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 13",
      },
      {
        id: "p14",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 14",
      },
    ],
  },
  {
    id: 260008,
    name: "Knockout 8",
    nextMatchId: 2600012,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-28",
    state: "DONE",
    participants: [
      {
        id: "p15",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 15",
      },
      {
        id: "p16",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 16",
      },
    ],
  },
  {
    id: 260009,
    name: "Quarterfinal 1",
    nextMatchId: 2600013,
    tournamentRoundText: "Quarterfinal",
    startTime: "2021-05-29",
    state: "DONE",
    participants: [
      {
        id: "p1",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 1",
      },
      {
        id: "p3",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 3",
      },
    ],
  },
  {
    id: 2600010,
    name: "Quarterfinal 2",
    nextMatchId: 2600013,
    tournamentRoundText: "Quarterfinal",
    startTime: "2021-05-29",
    state: "DONE",
    participants: [
      {
        id: "p5",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 5",
      },
      {
        id: "p7",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 7",
      },
    ],
  },
  {
    id: 2600011,
    name: "Quarterfinal 3",
    nextMatchId: 2600014,
    tournamentRoundText: "Quarterfinal",
    startTime: "2021-05-29",
    state: "DONE",
    participants: [
      {
        id: "p9",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 9",
      },
      {
        id: "p11",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 11",
      },
    ],
  },
  {
    id: 2600012,
    name: "Quarterfinal 4",
    nextMatchId: 2600014,
    tournamentRoundText: "Quarterfinal",
    startTime: "2021-05-29",
    state: "DONE",
    participants: [
      {
        id: "p13",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 13",
      },
      {
        id: "p15",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 15",
      },
    ],
  },
  {
    id: 2600013,
    name: "Semifinal 1",
    nextMatchId: 2600015,
    tournamentRoundText: "Semifinal",
    startTime: "2021-05-30",
    state: "DONE",
    participants: [
      {
        id: "p1",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 1",
      },
      {
        id: "p5",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 5",
      },
    ],
  },
  {
    id: 2600014,
    name: "Semifinal 2",
    nextMatchId: 2600015,
    tournamentRoundText: "Semifinal",
    startTime: "2021-05-30",
    state: "DONE",
    participants: [
      {
        id: "p9",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 9",
      },
      {
        id: "p13",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 13",
      },
    ],
  },
  {
    id: 2600015,
    name: "Final - Match",
    nextMatchId: null,
    tournamentRoundText: "Final",
    startTime: "2021-05-31",
    state: "DONE",
    participants: [
      {
        id: "p1",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 1",
      },
      {
        id: "p9",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 9",
      },
    ],
  },
];
export const semifinale: MatchData[] = [
  {
    id: 260001,
    name: "Knockout 1",
    nextMatchId: 260009,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-27",
    state: "DONE",
    participants: [
      {
        id: "p1",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 1",
      },
      {
        id: "p2",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 2",
      },
    ],
  },
  {
    id: 260002,
    name: "Knockout 2",
    nextMatchId: 260009,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-27",
    state: "DONE",
    participants: [
      {
        id: "p3",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 3",
      },
      {
        id: "p4",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 4",
      },
    ],
  },
  {
    id: 260003,
    name: "Knockout 3",
    nextMatchId: 2600010,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-28",
    state: "DONE",
    participants: [
      {
        id: "p5",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 5",
      },
      {
        id: "p6",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 6",
      },
    ],
  },
  {
    id: 260004,
    name: "Knockout 4",
    nextMatchId: 2600010,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-28",
    state: "DONE",
    participants: [
      {
        id: "p7",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 7",
      },
      {
        id: "p8",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 8",
      },
    ],
  },
  {
    id: 260005,
    name: "Knockout 5",
    nextMatchId: 2600011,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-27",
    state: "DONE",
    participants: [
      {
        id: "p9",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 9",
      },
      {
        id: "p10",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 10",
      },
    ],
  },
  {
    id: 260006,
    name: "Knockout 6",
    nextMatchId: 2600011,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-27",
    state: "DONE",
    participants: [
      {
        id: "p11",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 11",
      },
      {
        id: "p12",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 12",
      },
    ],
  },
  {
    id: 260007,
    name: "Knockout 7",
    nextMatchId: 2600012,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-28",
    state: "DONE",
    participants: [
      {
        id: "p13",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 13",
      },
      {
        id: "p14",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 14",
      },
    ],
  },
  {
    id: 260008,
    name: "Knockout 8",
    nextMatchId: 2600012,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-28",
    state: "DONE",
    participants: [
      {
        id: "p15",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 15",
      },
      {
        id: "p16",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 16",
      },
    ],
  },
  {
    id: 260009,
    name: "Quarterfinal 1",
    nextMatchId: 2600013,
    tournamentRoundText: "Quarterfinal",
    startTime: "2021-05-29",
    state: "DONE",
    participants: [
      {
        id: "p1",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 1",
      },
      {
        id: "p3",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 3",
      },
    ],
  },
  {
    id: 2600010,
    name: "Quarterfinal 2",
    nextMatchId: 2600013,
    tournamentRoundText: "Quarterfinal",
    startTime: "2021-05-29",
    state: "DONE",
    participants: [
      {
        id: "p5",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 5",
      },
      {
        id: "p7",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 7",
      },
    ],
  },
  {
    id: 2600011,
    name: "Quarterfinal 3",
    nextMatchId: 2600014,
    tournamentRoundText: "Quarterfinal",
    startTime: "2021-05-29",
    state: "DONE",
    participants: [
      {
        id: "p9",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 9",
      },
      {
        id: "p11",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 11",
      },
    ],
  },
  {
    id: 2600012,
    name: "Quarterfinal 4",
    nextMatchId: 2600014,
    tournamentRoundText: "Quarterfinal",
    startTime: "2021-05-29",
    state: "DONE",
    participants: [
      {
        id: "p13",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 13",
      },
      {
        id: "p15",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 15",
      },
    ],
  },
  {
    id: 2600013,
    name: "Semifinal 1",
    nextMatchId: 2600015,
    tournamentRoundText: "Semifinal",
    startTime: "2021-05-30",
    state: "DONE",
    participants: [
      {
        id: "p1",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 1",
      },
      {
        id: "p5",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 5",
      },
    ],
  },
  {
    id: 2600014,
    name: "Semifinal 2",
    nextMatchId: 2600015,
    tournamentRoundText: "Semifinal",
    startTime: "2021-05-30",
    state: "DONE",
    participants: [
      {
        id: "p9",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 9",
      },
      {
        id: "p13",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 13",
      },
    ],
  },
  {
    id: 2600015,
    name: "Final - Match",
    nextMatchId: null,
    tournamentRoundText: "Final",
    startTime: "2021-05-31",
    state: "DONE",
    participants: [
      {
        id: "p1",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 1",
      },
      {
        id: "p9",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 9",
      },
    ],
  },
];

export const finale: MatchData[] = [
  {
    id: 260001,
    name: "Knockout 1",
    nextMatchId: 260009,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-27",
    state: "DONE",
    participants: [
      {
        id: "p1",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 1",
      },
      {
        id: "p2",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 2",
      },
    ],
  },
  {
    id: 260002,
    name: "Knockout 2",
    nextMatchId: 260009,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-27",
    state: "DONE",
    participants: [
      {
        id: "p3",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 3",
      },
      {
        id: "p4",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 4",
      },
    ],
  },
  {
    id: 260003,
    name: "Knockout 3",
    nextMatchId: 2600010,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-28",
    state: "DONE",
    participants: [
      {
        id: "p5",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 5",
      },
      {
        id: "p6",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 6",
      },
    ],
  },
  {
    id: 260004,
    name: "Knockout 4",
    nextMatchId: 2600010,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-28",
    state: "DONE",
    participants: [
      {
        id: "p7",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 7",
      },
      {
        id: "p8",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 8",
      },
    ],
  },
  {
    id: 260005,
    name: "Knockout 5",
    nextMatchId: 2600011,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-27",
    state: "DONE",
    participants: [
      {
        id: "p9",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 9",
      },
      {
        id: "p10",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 10",
      },
    ],
  },
  {
    id: 260006,
    name: "Knockout 6",
    nextMatchId: 2600011,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-27",
    state: "DONE",
    participants: [
      {
        id: "p11",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 11",
      },
      {
        id: "p12",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 12",
      },
    ],
  },
  {
    id: 260007,
    name: "Knockout 7",
    nextMatchId: 2600012,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-28",
    state: "DONE",
    participants: [
      {
        id: "p13",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 13",
      },
      {
        id: "p14",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 14",
      },
    ],
  },
  {
    id: 260008,
    name: "Knockout 8",
    nextMatchId: 2600012,
    tournamentRoundText: "Knockout",
    startTime: "2021-05-28",
    state: "DONE",
    participants: [
      {
        id: "p15",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 15",
      },
      {
        id: "p16",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 16",
      },
    ],
  },
  {
    id: 260009,
    name: "Quarterfinal 1",
    nextMatchId: 2600013,
    tournamentRoundText: "Quarterfinal",
    startTime: "2021-05-29",
    state: "DONE",
    participants: [
      {
        id: "p1",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 1",
      },
      {
        id: "p3",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 3",
      },
    ],
  },
  {
    id: 2600010,
    name: "Quarterfinal 2",
    nextMatchId: 2600013,
    tournamentRoundText: "Quarterfinal",
    startTime: "2021-05-29",
    state: "DONE",
    participants: [
      {
        id: "p5",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 5",
      },
      {
        id: "p7",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 7",
      },
    ],
  },
  {
    id: 2600011,
    name: "Quarterfinal 3",
    nextMatchId: 2600014,
    tournamentRoundText: "Quarterfinal",
    startTime: "2021-05-29",
    state: "DONE",
    participants: [
      {
        id: "p9",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 9",
      },
      {
        id: "p11",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 11",
      },
    ],
  },
  {
    id: 2600012,
    name: "Quarterfinal 4",
    nextMatchId: 2600014,
    tournamentRoundText: "Quarterfinal",
    startTime: "2021-05-29",
    state: "DONE",
    participants: [
      {
        id: "p13",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 13",
      },
      {
        id: "p15",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 15",
      },
    ],
  },
  {
    id: 2600013,
    name: "Semifinal 1",
    nextMatchId: 2600015,
    tournamentRoundText: "Semifinal",
    startTime: "2021-05-30",
    state: "DONE",
    participants: [
      {
        id: "p1",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 1",
      },
      {
        id: "p5",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 5",
      },
    ],
  },
  {
    id: 2600014,
    name: "Semifinal 2",
    nextMatchId: 2600015,
    tournamentRoundText: "Semifinal",
    startTime: "2021-05-30",
    state: "DONE",
    participants: [
      {
        id: "p9",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 9",
      },
      {
        id: "p13",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 13",
      },
    ],
  },
  {
    id: 2600015,
    name: "Final - Match",
    nextMatchId: null,
    tournamentRoundText: "Final",
    startTime: "2021-05-31",
    state: "DONE",
    participants: [
      {
        id: "p1",
        resultText: "WON",
        isWinner: true,
        status: null,
        name: "Player 1",
      },
      {
        id: "p9",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Player 9",
      },
    ],
  },
];

// export const matches: MatchData[] = [...round1];
