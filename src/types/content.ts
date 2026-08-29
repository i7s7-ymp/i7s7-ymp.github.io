export interface PageHeaderData {
  title: string;
  subtitle?: string;
  icon?: string;
  iconBgClass?: string;
  statusLabel?: string;
  tags?: string[];
}

export interface HomeProfileItem {
  key: string;
  value: string;
  valueClass?: string;
}

export interface HomeActivityLog {
  date: string;
  color: string;
  text: string;
  ping?: boolean;
}

export interface HomeData {
  header: {
    title: string;
    subtitle: string;
  };
  profile: {
    heading: string;
    items: HomeProfileItem[];
  };
  activities: {
    heading: string;
    liveLabel: string;
    logs: HomeActivityLog[];
  };
}

export interface AchievementTimelineItem {
  role: string;
  company: string;
  period: string;
  color: string;
  points: string[];
  badges?: string[];
  url?: string;
}

export interface AchievementCertification {
  code: string;
  title: string;
  level: string;
  color: string;
}

export interface AchievementsData {
  header: {
    title: string;
    subtitle: string;
    tags?: string[];
  };
  timeline: AchievementTimelineItem[];
  certifications: AchievementCertification[];
}

export interface SupportExperienceItem {
  title: string;
  category?: string[];
  architecture?: string;
  description?: string;
  uses?: number;
}

export interface SupportCloudArchitecture {
  id: string;
  title: string;
  summary?: string;
  image?: string;
  services?: string[];
  year?: number;
  provider?: string;
}

export interface SupportData {
  header: {
    title: string;
    subtitle: string;
    icon: string;
    iconBgClass: string;
  };
  experiences: SupportExperienceItem[];
  cloudArchitectures: SupportCloudArchitecture[];
}

export interface SocialLink {
  name: string;
  url: string;
  username: string;
  desc: string;
  stats?: string[];
  color: string;
  icon?: string;
}

export interface SocialData {
  header: {
    title: string;
    subtitle: string;
    tags?: string[];
  };
  links: SocialLink[];
}

export interface DesignContainer {
  name: string;
  desc: string;
  sample?: string;
  stat?: string | number;
  statLabel?: string;
}

export interface DesignData {
  header: PageHeaderData;
  containers: DesignContainer[];
  typography: {
    tokens: Array<Record<string, string>>;
    examples: {
      panelTitle: string;
      gradientSmall: string;
      terminal: string;
    };
  };
  badges: {
    list: string[];
    note: string;
  };
  scrollDemoLines: number;
  accentPalette: string[];
  principles: string[];
}
