# 🌲 Retro RPG Card Component Library (React)

A modular, pixel-art styled component library extracted directly from **The Legend of Soham Wagale** RPG portfolio.

All components come with double-bordered pixel frames, warm parchment hues, glowing rarities, and nostalgic RPG aesthetics.

---

## 📦 What's Included

| Component | Description |
| :--- | :--- |
| [`PixelBox`](#1-pixelbox) | Base double-bevel pixel container with retro drop shadows. |
| [`ProjectCaseStudyCard`](#2-projectcasestudycard) | Parchment scroll card for deep-dive case studies, architecture, and live links. |
| [`InventorySkillSlot`](#3-inventoryskillslot) | RPG item grid slot with 4 glowing rarities (`common`, `rare`, `epic`, `legendary`). |
| [`InventoryDetailCard`](#4-inventorydetailcard) | Equipment inspector panel displaying stat bonuses and flavor text. |
| [`RpgDialogueCard`](#5-rpgdialoguecard) | Retro dialogue box with speaker badge and branching choice buttons. |
| [`HudStatusCard`](#6-hudstatuscard) | Top-bar status badge with level counter and animated gradient XP progress bar. |
| [`SimpleProjectCard`](#7-simpleprojectcard) | High-contrast enchanted forest card for modern project grids. |
| [`ExperienceCard`](#8-experiencecard) | Professional timeline card for roles, mentorship, and leadership bullets. |
| [`LegendaryItemCard`](#9-legendaryitemcard) | Fanfare celebration card with floating crown and curriculum vitae summary. |
| [`QuestLogCard`](#10-questlogcard) | Interactive quest log entry with active/complete status checkmarks. |
| [`AchievementToast`](#11-achievementtoast) | Pixel toast notification banner for in-app achievements and milestones. |

---

## 🚀 Quick Setup in Any React / Next.js / Vite App

1. Copy the `components/` folder into your React project (e.g. `src/components/retro-cards`).
2. Import the components and CSS:

```jsx
import React from 'react';
import {
  ProjectCaseStudyCard,
  SimpleProjectCard,
  InventorySkillSlot,
  HudStatusCard
} from './components';
import './components/pixel-cards.css';
```

---

## 🛠️ Usage Examples for Every Card

### 1. `PixelBox`
```jsx
import { PixelBox } from './components';

export function CustomBox() {
  return (
    <PixelBox style={{ padding: 20 }}>
      <h3>Any Custom Content</h3>
      <p>Inherits the double pixel border and golden parchment style.</p>
    </PixelBox>
  );
}
```

### 2. `ProjectCaseStudyCard`
```jsx
<ProjectCaseStudyCard
  title="Quest: AI Workflow Automation"
  badge="FIG. 01 · HOLLOW OAK"
  subtitle="Next.js · TypeScript · Prisma · Node.js"
  overview="Built an AI-assisted visual workflow automation platform for designing and monitoring task pipelines."
  architecture="Engineered interactive canvas nodes with Next.js, backed by Prisma ORM and Node.js execution workers."
  results="Enables engineers to chain APIs and schedule distributed pipelines visually."
  stack={["React", "Next.JS", "TypeScript", "Prisma", "Node.JS", "AI"]}
  githubUrl="https://github.com/sohamwagale/AI-Workflow-Automation"
  liveUrl="https://sohamwagale.github.io/Society-Hub/"
  onClose={() => console.log('Close clicked')}
/>
```

### 3. `InventorySkillSlot` & `InventoryDetailCard`
```jsx
import { useState } from 'react';
import { InventorySkillSlot, InventoryDetailCard } from './components';

export function SkillInventory() {
  const [selected, setSelected] = useState(null);

  const skills = [
    { name: "TypeScript", rarity: "legendary", stat: "+45 Type Armor", desc: "Immunity to null pointer curses." },
    { name: "React", rarity: "legendary", stat: "+50 Component Weaving", desc: "Constructs reactive interfaces that enchant users." },
    { name: "FastAPI", rarity: "epic", stat: "+42 High-Speed Routing", desc: "Powers Pythonic APIs with Pydantic shields." },
    { name: "Docker", rarity: "rare", stat: "+35 Container Ward", desc: "Encapsulates software into portable bastions." }
  ];

  return (
    <div>
      <div style={{ display: 'flex', gap: 10 }}>
        {skills.map((skill) => (
          <InventorySkillSlot
            key={skill.name}
            name={skill.name}
            rarity={skill.rarity}
            isSelected={selected?.name === skill.name}
            onClick={() => setSelected(skill)}
          />
        ))}
      </div>

      <div style={{ marginTop: 16 }}>
        <InventoryDetailCard
          name={selected ? selected.name : "Select a skill"}
          rarity={selected?.rarity}
          stat={selected?.stat}
          description={selected?.desc}
        />
      </div>
    </div>
  );
}
```

### 4. `RpgDialogueCard`
```jsx
<RpgDialogueCard
  speaker="Soham the Wanderer"
  avatar="🧙‍♂️"
  text="Greetings traveler! What would you like to know about my engineering journey?"
  options={[
    { label: "What is your stack?", onClick: () => alert("React, TypeScript, FastAPI!") },
    { label: "What are you seeking?", onClick: () => alert("Software Engineering Internships!") },
    { label: "Farewell!", onClick: () => console.log("Goodbye") }
  ]}
/>
```

### 5. `HudStatusCard`
```jsx
<HudStatusCard
  name="SOHAM WAGALE"
  level={2}
  xpCurrent={75}
  xpTarget={100}
  timeStatus="🌙 NIGHT"
/>
```

### 6. `SimpleProjectCard`
```jsx
<SimpleProjectCard
  name="LEETCODE"
  zone="Ruined Stone Tower"
  title="LeetCode – Online Code Execution Platform"
  description="Built a containerized coding platform featuring problem browsing, code execution, and test-case evaluations."
  stack={["React", "Node.js", "FastAPI", "PostgreSQL", "Docker"]}
  githubUrl="https://github.com/sohamwagale/Leetcode"
  liveUrl={null}
/>
```

### 7. `ExperienceCard`
```jsx
<ExperienceCard
  role="Mentor — Liberal Learning Course"
  org="Google Developer Group (GDG) · DYPCET"
  period="Jun 2025 - Nov 2025"
  bullets={[
    "Mentored second-year students in a 6-month Liberal Learning Course assessing Core Java fundamentals.",
    "Delivered public speaking and live coding sessions to audiences of up to 150 students per session.",
    "Conducted oral examinations to evaluate grasp of object-oriented concepts."
  ]}
/>
```

### 8. `LegendaryItemCard`
```jsx
<LegendaryItemCard
  icon="👑"
  title="LEGENDARY ITEM OBTAINED!"
  badge="CURRICULUM VITAE · SOHAM WAGALE"
  stats={[
    { label: "Degree", value: "B.Tech Computer Science (Expected 2027) · DYPCET" },
    { label: "CGPA", value: "8.6 / 10.0" },
    { label: "LeetCode Solved", value: "140+ Algorithmic Challenges" }
  ]}
  actions={[
    { label: "📄 VIEW GITHUB RESUME", href: "https://github.com/sohamwagale" },
    { label: "📬 REQUEST OFFICIAL PDF", href: "mailto:sohamwagale@gmail.com" }
  ]}
/>
```

### 9. `QuestLogCard`
```jsx
<QuestLogCard
  name="AI-WORKFLOW"
  zone="Hollow Oak (North)"
  isCompleted={true}
  onInspect={() => alert("Inspecting quest details...")}
/>
```

### 10. `AchievementToast`
```jsx
<AchievementToast
  icon="⭐"
  message="+50 XP: Fairy Mushroom Ring Secret Unlocked!"
/>
```
