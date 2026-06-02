export type ViewType =
  | 'dashboard'
  | 'trend-radar'
  | 'content-studio'
  | 'virality-lab'
  | 'influencer-intel'
  | 'brand-match'
  | 'projects'
  | 'settings';

export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  role: string;
  handle: string;
  creatorScore: number;
  viralityScore: number;
  brandMatchScore: number;
  growthPotential: number;
  trendOpportunityScore: number;
}

export interface OpportunityItem {
  id: string;
  topic: string;
  category: string;
  growthVelocity: number; // percentage growth, e.g. 145
  competitionLevel: 'Low' | 'Medium' | 'High';
  predictedSaturation: number; // percentage, e.g. 18
  opportunityScore: number; // 0-100
  description: string;
  recommendedHooks: string[];
}

export interface TrendTopic {
  id: string;
  topic: string;
  category: string;
  growthScore: number;
  searchInterest: number;
  engagementPotential: number; // percentage
  sparklineData: { name: string; value: number }[];
  demographics: { age: string; percentage: number }[];
  platforms: { name: string; share: number }[];
  insightSummary: string;
  keywords: string[];
}

export interface InfluencerProfile {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  category: string;
  followers: string;
  authenticityScore: number;
  engagementScore: number;
  growthPotential: number;
  audienceQuality: number;
  consistencyScore: number;
  demographics: { segment: string; percentage: number }[];
  growthStats: { date: string; followers: number; engagement: number }[];
}

export interface BrandMatchItem {
  id: string;
  brandName: string;
  logo: string;
  category: string;
  matchScore: number;
  audienceAlignment: number;
  successProbability: number;
  budgetRange: string;
  campaignType: string;
  whyMatch: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  type: 'Report' | 'Content' | 'Analysis';
  updatedAt: string;
  summary: string;
  stats: string;
}
