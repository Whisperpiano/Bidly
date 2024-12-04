// Profile types

export interface Meta {
  currentPage: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  nextPage: number | null;
  pageCount: number;
  previousPage: number | null;
  totalCount: number;
}

export interface SuccessResponse {
  data: UserProfile;
  meta: Meta;
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

// Listing types

export interface SuccessResponseListing {
  data: Listing;
  meta: Meta;
}

export interface ErrorResponseListing {
  errors: {
    message: string;
  }[];
  status: string;
  statusCode: number;
}

export interface Listing {
  id: string;
  title: string;
  description: string;
  media: Media[];
  tags: string[];
  created: string;
  updated: string;
  endsAt: string;
  bids: ListingBid[];
  seller: ListingSeller;
  _count: {
    bids: number;
  };
}

export interface ListingBid {
  id: string;
  amount: number;
  bidder: {
    name: string;
    email: string;
    bio: string | null;
    avatar: Media;
    banner: Media;
  };
  created: string;
}

export interface ListingSeller {
  name: string;
  email: string;
  bio: string | null;
  avatar: Media;
  banner: Media;
}

// Bids
export interface Bidder {
  amount: number;
  created: string;
  id: string;
  bidder: {
    name: string;
    email: string;
    bio: string | null;
    avatar: Media;
    banner: Media;
  };
}

export interface SuccessResponseBid {
  data: Bidder;
  meta: Record<string, unknown>;
}

export interface ErrorResponseBid {
  errors: {
    message: string;
  }[];
  status: string;
  statusCode: number;
}

export interface Bid {
  id: string;
  title: string;
  description: string;
  media: Media[];
  tags: string[];
  created: string;
  updated: string;
  endsAt: string;
  _count: {
    bids: number;
  };
}

// ProfileUpdate

export interface ProfileUpdateSuccessResponse {
  data: ProfileUpdate;
  meta: Record<string, unknown>;
}

export interface ProfileUpdateErrorResponse {
  errors: {
    message: string;
  }[];
  status: string;
  statusCode: number;
}

export interface ProfileUpdate {
  name: string;
  email: string;
  bio: string | null;
  avatar: Media;
  banner: Media;
  credits: number;
}
