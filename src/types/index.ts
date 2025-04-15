
export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

export interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  technologies?: string[];
}

export interface ContactLinkProps {
  icon: React.ReactNode;
  href: string;
  text: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
}
