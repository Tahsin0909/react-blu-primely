/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from "react";
import { ClanMember2 } from "../redux/types";

export type NavPropsTypes = {
  name: string;
  link: string;
};

export interface TournamentProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
  prize: {
    totalPrize: number;
    firstPrize: number;
    secondPrize: number;
    thirdPrize: number;
  };
  maxTeams?: number;
  enrolledTeams?: number;
  description?: string;
  date: string;
  entryFee: number;
  teamSize: string;
  regions: string;
  game?: string;
  skillLevel: string;
  platform?: string;
  badge?: boolean;
  registrationStatus: boolean;
  enrollmentStatus: boolean;
  tournamentType?: string;
  status?: "cancelled" | "active" | "upcoming";
}

export interface PrimalChampionshipCardProps {
  title: string;
  image: string;
  prize: {
    totalPrize: number;
    firstPrize: number;
    secondPrize: number;
    thirdPrize: number;
  };
  description?: string;
  subtitle?: string;
  battleground: string;
  teamSize: string;
  maxTeams: number;
  enrolled: number;
  startingTime: string;
  thumbnailUrl: string;
  onView?: () => void;
  registrationStatus: boolean;
  enrollmentStatus: boolean;
  entryFee: number;
  regions: string;
  date: string;
  skillLevel: string;
  game: string;
  platform: string;
  enrolledTeams: number;
}

export interface TournamentDetails {
  entryFee: number;
  format: string;
  battleground: string;
  regions: string[];
  entryCredits: number;
  teamSize: string;
  maxTeams: number;
  enrolled: number;
  registrationStatus: string;
  startingTime: string;
  imageUrl: string;
}

export interface TournamentBannerProps {
  bannerImage: string;
  title: string;
  subtitle: string;
  gameName: string;
  tournamentType: string;
  platform: string;
  startDate: string;
  registrationStatus: boolean;
  enrollmentStatus: boolean;
  entryFee: string | number;
  teamSize: string;
  maxTeams: number;
  enrolledTeams: number;
  skillLevel: string;
  setShowConfetti: Dispatch<SetStateAction<boolean>>;
}

export interface Player {
  name: string;
  discordId: string;
  avatar: string;
}

export interface ClanCardProps {
  teamName: string;
  teamLogo: string;
  players: ClanMember2[];
  id: string;
  onViewDetails?: () => void;
  onToggleRoster?: () => void;
  isRosterHidden?: boolean;
}

export interface ClanFormData {
  mission: string;
  values: string;
}

export interface Player {
  name: string;
  discordId: string;
  avatar: string;
}

export interface MatchCardProps {
  opponent: string;
  date: string;
  result: string;
  image: string;
}

export type AwardType = "mvp" | "strategy" | "comeback" | "teamwork";

export interface AwardData {
  image: string;
  title: string;
  description: string;
}

export type Teams = {
  teamName: string;
  teamLogo: string;
  players: {
    name: string;
    discordId: string;
    avatar: string;
  }[];
};

export interface CommunicationProps {
  message: string;
  userRole: string;
  messages: any;
  setMessages: React.Dispatch<React.SetStateAction<string>>;
  handelSend: () => void;
}

export type FeaturedProps = {
  id?: number;
  feature: string;
  feature2?: string;
  image: string;
  classProps?: string;
};

export interface WeekPlayer {
  rank: number;
  name: string;
  xp: string;
  credits: number;
  avatar: string;
  date: string;
}

export interface ClanTableProps {
  members: {
    id: string;
    avatar: string;
    name: string;
    xp: number;
    earning: number;
    eliteTrophies: number;
    goldTrophies: number;
  }[];
}

export type report = {
  tournments: number;
  players: number;
  revenue: number;
  icon?: boolean;
  subtitle?: boolean;
  cardOneText: string;
  cardTwoText: string;
  cardThreeText: string;
};

export type Transaction = {
  date: string;
  transactionId: string;
  tournamentName: string;
  status: string;
};

export type Trophy = {
  type: string;
  count: number;
};

export type Clan = {
  name: string;
  id: string;
  totalMembers: number;
  tournamentsPlayed: number;
  trophies: Trophy[];
  lostWin: { lost: number; win: number };
  awards: AwardType[] | string[];
};
