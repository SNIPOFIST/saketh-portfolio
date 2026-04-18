import { ReactNode } from "react";
import { GitHubLogo, LinkedInLogo } from "@/components/Shared/Icons";

interface Social {
  id: string;
  name: string;
  url: string;
  icon: ReactNode;
}

const socials: Social[] = [
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sakethkil/",
    icon: <LinkedInLogo color="#0A66C2" />,
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/sakethkilaru",
    icon: <GitHubLogo />,
  },
];

export default socials;
