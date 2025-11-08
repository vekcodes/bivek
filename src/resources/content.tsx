import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Bivek raj",
  lastName: "Shakya",
  name: `Bivek Raj Shakya`,
  role: "GTM Engineer",
  avatar: "/images/avatar.jpg",
  email: "work@bivekshakya.com.np",
  location: "Asia/Kathmandu", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Nepali","Newari","Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&rsquo;s Newsletter</>,
  description: <>My weekly newsletter about Automating and GTM engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/vekcodes",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/bivek-shakya/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}\u2019s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building Growth Engine, Reducing CAC</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Bivek&rsquo;s</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "https://www.linkedin.com/in/bivek-shakya/",
  },
  subline: (
    <>
      Hi, I&rsquo;m Bivek Raj Shakya, GTM engineer from Nepal 🇳🇵, I craft outbound systems using clay, n8n, etc.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendly.com/work-bivek/30min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        As a Go-to-Market Engineer, I build and optimize systems that connect marketing, sales, and customer success. My work blends technical problem-solving with GTM strategy automating workflows, integrating platforms, and unlocking insights that drive predictable growth.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Email Outreach Company",
        timeframe: "Aug-2022 - Present",
        role: "GTM Engineer",
        achievements: [
          <>
            Built an automated system that booked meetings for clients who were idle for 2 months.
          </>,
          <>
            Booked meetings with Big companies like Upwork, Zscaler, Pure Storage, AppViewX.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/work.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Sanwellness",
        timeframe: "Apr 2023 - Dec 2023",
        role: "Email Marketing Manager",
        achievements: [
          <>
            Ramped up their revenue by 40% using automated email marketing using Klaviyo.
          </>,
          <>
            Optimized Email and Copy with their offer reducing their CAC.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Tribhuvan University",
        description: <>Bachelors in Computer Application.</>,
      },
      
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Skills",
        description: (
          <>Proficient in various programming languages and frameworks focused on building scalable GTM systems.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Clay",
            icon: "clay",
          },
          {
            name: "n8n",
            icon: "n8n",
          },
          {
            name: "Python",
            icon: "python",
          },{
            name: "Instantly",
            icon: "instantly",
          },{
            name: "Adobe Photoshop",
            icon: "aphotoshop",
          },{
            name: "Figma",
            icon: "figma",
          },{
            name: "Klaviyo",
            icon: "klaviyo",
          }
        ],
        // optional: leave the array empty if you don't want to display images
      },  
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about GTM Engineering and Automations...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
