import React from 'react';

export interface PixelBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
}
export const PixelBox: React.FC<PixelBoxProps>;

export interface ProjectCaseStudyCardProps {
  title: string;
  badge?: string;
  subtitle?: string;
  overview?: string;
  architecture?: string;
  results?: string;
  stack?: string[];
  githubUrl?: string;
  liveUrl?: string;
  onClose?: () => void;
  className?: string;
}
export const ProjectCaseStudyCard: React.FC<ProjectCaseStudyCardProps>;

export type RarityType = 'common' | 'rare' | 'epic' | 'legendary';

export interface InventorySkillSlotProps {
  name: string;
  icon?: React.ReactNode;
  rarity?: RarityType;
  onClick?: () => void;
  isSelected?: boolean;
  className?: string;
}
export const InventorySkillSlot: React.FC<InventorySkillSlotProps>;

export interface InventoryDetailCardProps {
  name?: string;
  category?: string;
  rarity?: RarityType;
  stat?: string;
  description?: string;
  className?: string;
}
export const InventoryDetailCard: React.FC<InventoryDetailCardProps>;

export interface DialogueOption {
  label: string;
  onClick: () => void;
}

export interface RpgDialogueCardProps {
  speaker?: string;
  avatar?: React.ReactNode;
  text: string;
  options?: DialogueOption[];
  className?: string;
}
export const RpgDialogueCard: React.FC<RpgDialogueCardProps>;

export interface HudStatusCardProps {
  name?: string;
  level?: number;
  xpCurrent?: number;
  xpTarget?: number;
  timeStatus?: string;
  className?: string;
}
export const HudStatusCard: React.FC<HudStatusCardProps>;

export interface SimpleProjectCardProps {
  name: string;
  zone?: string;
  title: string;
  description: string;
  stack?: string[];
  githubUrl?: string;
  liveUrl?: string;
  className?: string;
}
export const SimpleProjectCard: React.FC<SimpleProjectCardProps>;

export interface ExperienceCardProps {
  role: string;
  org: string;
  period: string;
  bullets?: string[];
  className?: string;
}
export const ExperienceCard: React.FC<ExperienceCardProps>;

export interface StatItem {
  label: string;
  value: React.ReactNode;
}

export interface ActionItem {
  label: string;
  href?: string;
  target?: string;
  onClick?: () => void;
}

export interface LegendaryItemCardProps {
  icon?: React.ReactNode;
  title?: string;
  badge?: string;
  stats?: StatItem[];
  actions?: ActionItem[];
  className?: string;
}
export const LegendaryItemCard: React.FC<LegendaryItemCardProps>;

export interface QuestLogCardProps {
  name: string;
  zone?: string;
  isCompleted?: boolean;
  onInspect?: () => void;
  className?: string;
}
export const QuestLogCard: React.FC<QuestLogCardProps>;

export interface AchievementToastProps {
  icon?: React.ReactNode;
  message: string;
  className?: string;
  style?: React.CSSProperties;
}
export const AchievementToast: React.FC<AchievementToastProps>;
