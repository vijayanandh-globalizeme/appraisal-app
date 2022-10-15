export interface UserProfile {
  name: string;
  email: string;
  role: string;
  pics: string;
}

export interface Users {
  data: UserDetails;
}

export interface UserDetails {
  uuid: string;
  name: string;
}
