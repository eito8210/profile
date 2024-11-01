import {
  //BellIcon,
  //CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

import Image from 'next/image';

const features = [
  {
    Icon: FileTextIcon,
    name: "About",
    description: "Explain about Eito Nishikawa.",
    href: "/about",
    cta: "Learn more",
    background: (
      <Image 
        src="/path/to/image.jpg" 
        alt="About backgroud" 
        width={500} 
        height={300} 
        className="absolute -right-20 -top-20 opacity-60" 
      />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3 text-primary",
  },
  {
    Icon: FileTextIcon,
    name: "Hobby",
    description: "Introduce my hobby.",
    href: "/hobby",
    cta: "Learn more",
    background: (
      <Image 
        src="/path/to/image.jpg" 
        alt="Hobby backgroud" 
        width={500} 
        height={300} 
        className="absolute -right-20 -top-20 opacity-60" 
      />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-3 lg:col-end-4",
  },
  {
    Icon: InputIcon,
    name: "Education",
    description: "Show you my education and work experience.",
    href: "/education",
    cta: "Learn more",
    background: (
      <Image 
        src="/path/to/image.jpg" 
        alt="Educstion backgroud" 
        width={500} 
        height={300} 
        className="absolute -right-20 -top-20 opacity-60" 
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: GlobeIcon,
    name: "Contact",
    description: "This is my information.",
    href: "/contact",
    cta: "Learn more",
    background: (
      <Image 
        src="/path/to/image.jpg" 
        alt="Contact backgroud" 
        width={500} 
        height={300} 
        className="absolute -right-20 -top-20 opacity-60" 
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-4",
  },
  // {
  //   Icon: CalendarIcon,
  //   name: "Calendar",
  //   description: "Use the calendar to filter your files by date.",
  //   href: "/",
  //   cta: "Learn more",
  //   background: <img className="absolute -right-20 -top-20 opacity-60" />,
  //   className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  // },
  // {
  //   Icon: BellIcon,
  //   name: "Notifications",
  //   description:
  //     "Get notified when someone shares a file or mentions you in a comment.",
  //   href: "/",
  //   cta: "Learn more",
  //   background: <img className="absolute -right-20 -top-20 opacity-60" />,
  //   className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  // },
];

export async function BentoDemo() {
  return (
    <BentoGrid className="lg:grid-rows-4 text-primary">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}