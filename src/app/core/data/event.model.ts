/** Content model. Views know no specific event: everything arrives as data. */
export type Status = 'live' | 'soon' | 'prep' | 'done' | 'ongoing';

/** A photo. Without src the UI shows a placeholder that says what photo belongs here. */
export interface Photo {
  alt: string;
  src?: string;
}

export interface Activity {
  id: string;
  title: string;
  text: string;
  status: Status;
  /** Short label above the title, for example "Actividad 1". */
  chip?: string;
  signupOpen?: boolean;
  /** Display date, for example "28 de noviembre de 2026". */
  date?: string;
  /** First day as an ISO date. Photos appear only once this day has arrived. */
  startsOn?: string;
  time?: string;
  place?: string;
  photo?: Photo;
}

export interface Stage {
  title: string;
  text: string;
  status: Status;
  icon?: string;
  /** First day as an ISO date. Photos appear only once this day has arrived. */
  startsOn?: string;
  photo?: Photo;
}

export interface Highlight {
  value: string;
  label: string;
}

export interface Story {
  title: string;
  paragraphs: string[];
  quote: string;
  photo: Photo;
  note: string;
}

export interface Path {
  title: string;
  summary: string;
  stages: Stage[];
}

export interface ActivitiesIntro {
  text: string;
  notice?: { title: string; linkLabel: string; url: string };
}

export interface TeamInfo {
  title: string;
  paragraphs: string[];
  logo?: string;
  role?: string;
  photo?: Photo;
}

export interface CommunityInfo {
  status: Status;
  title: string;
  text: string;
}

export interface EventInfo {
  id: string;
  name: string;
  place: string;
  status: Status;
  featured?: boolean;
  /** Marks demo data so the UI can label it. */
  sample?: boolean;
  headline: string;
  summary: string;
  photo?: Photo;
  highlights?: Highlight[];
  story?: Story;
  path?: Path;
  activitiesIntro?: ActivitiesIntro;
  activities: Activity[];
  sessionsNotice?: { status: Status; text: string };
  team?: TeamInfo;
  community?: CommunityInfo;
  supportText?: string;
  supportLogos?: string;
}
