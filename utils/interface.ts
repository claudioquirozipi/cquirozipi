export interface Data<T> {
  data: T;
  slug: string;
}

export interface Certificate {
  title: string;
  certificates_image: string;
  description: string;
  date: Date;
  institute: "" | "platzi" | "udemy" | "edteam" | "nttdata";
}

export interface Home {
  title: string;
  home_image: string;
  description: string;
  url: string;
}

export interface Projects {
  title: string;
  description: string;
  project_image: string;
  urlWeb?: string;
  urlGithub?: string;
}

export interface SocialMedia {
  title: string;
  social_media_image: string;
  url: string;
}

export interface Technology {
  title: string;
  technology_image: string;
}
