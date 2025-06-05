export interface Translations {
  cover: {
    title: string;
    frontend: {
      title: string;
      content: string;
    };
    backend: {
      title: string;
      content: string;
    };
  };
  contact: {
    title: string;
    items: Record<string, {
      name: string;
      alt: string;
      link: string;
      path: string;
    }>;
  };
  skills: {
    title: string;
    items: Record<string, {
      name: string;
      items: Record<string, {
        alt: string;
        path: string;
        distros?: Record<string, {
          alt: string;
          path: string;
        }>;
      }>;
    }>;
  };
  experience: {
    title: string;
    items: Record<string, {
      jobname: string;
      company: {
        name: string;
        link: string;
      };
      description: string;
    }>;
  };
  certifications: {
    title: string;
    items: Record<string, {
      alt: string;
      path: string;
      aspectratio: string;
    }>;
  };
}
