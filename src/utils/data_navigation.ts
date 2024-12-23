/**
 * Types here are messy and need to be cleaned up.
 * The structure of objects in this file is not consistent.
 * TODO: Refactor the types and structure of objects in this file.
 */

export interface NavItem {
  title: string;
  href: string;
  description: string;
}

export interface NavCategory {
  title: string;
  type?: string;
  link?: string;
  items?: NavItem[];
}

export const navigationData: NavCategory[] = [
  {
    title: "About",
    items: [
      {
        title: "History",
        href: "/about/history",
        description: "Explore the history of Clarendon College.",
      },
      {
        title: "School Emblem",
        href: "/about/school-emblem",
        description: "Learn about the Clarendon College school emblem.",
      },
      {
        title: "Vision and Mission",
        href: "/about/mission-vision",
        description: "Understand the vision and mission of Clarendon College.",
      },
      {
        title: "Philosophy of Education",
        href: "/about/philosophy-of-education",
        description:
          "Discover the educational philosophy at Clarendon College.",
      },
      {
        title: "Core Values",
        href: "/about/core-values",
        description: "Learn about the core values of Clarendon College.",
      },
      {
        title: "Hymn",
        href: "/about/hymn",
        description: "Learn about the core values of Clarendon College.",
      },
    ],
  },

  {
    title: "Academics",
    items: [
      {
        title: "Overview",
        href: "/academics/overview",
        description:
          "Get an overview of the academic programs at Clarendon College.",
      },
      {
        title: "Junior High School",
        href: "/academics/junior-high",
        description:
          "Learn about the junior high school programs at Clarendon College.",
      },
      {
        title: "Senior High School",
        href: "/academics/senior-high",
        description:
          "Discover the senior high school curriculum at Clarendon College.",
      },
      {
        title: "College",
        href: "/academics/college",
        description:
          "Find information on college degree programs at Clarendon College.",
      },
    ],
  },
  {
    title: "Admission",
    type: "link",
    link: "admission",
    items: [],
  },
  {
    title: "Campus Life",
    items: [
      {
        title: "The Student Body",
        href: "/campus-life/student-body",
        description: "Learn about the student body at Clarendon College.",
      },
      {
        title: "Holistic Wellbeing",
        href: "/campus-life/wellbeing",
        description: "Discover our approach to holistic wellbeing.",
      },
      {
        title: "Learning Enrichment",
        href: "/campus-life/enrichment",
        description:
          "Explore learning enrichment opportunities at Clarendon College.",
      },
      {
        title: "News and Events",
        href: "/all-news/",
        description: "Discover what's happening at Clarendon College.",
      },
    ],
  },
  {
    title: "SDGs",
    type: "link",
    link: "sdg",
    items: [],
  },
];
