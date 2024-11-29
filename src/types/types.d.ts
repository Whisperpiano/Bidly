export interface SuccessResponse {
  data: UserProfile;
  meta: Record<string, unknown>;
}

export interface ErrorResponse {
  errors: {
    message: string;
  }[];
  status: string;
  statusCode: number;
}

export interface Media {
  url: string;
  alt: string;
}

export interface ProfileListing {
  id: string;
  title: string;
  description: string;
  media: Media[];
  tags: string[];
  created: string;
  updated: string;
  endsAt: string;
}

export interface UserProfile {
  name: string;
  email: string;
  bio: string | null;
  avatar: Media;
  banner: Media;
  credits: number;
  listings: Listing[];
  wins: Listing[];
  _count: {
    listings: number;
    wins: number;
  };
}

export type SingleProfileResponse = SuccessResponse | ErrorResponse;
