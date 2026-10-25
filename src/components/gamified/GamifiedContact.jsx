import React, { useState } from 'react';
import { RpgDialogueCard, AchievementToast } from '../../../gamified/components/PixelCards';
import { personalInfo } from '../../data/portfolioData';

export default function GamifiedContact() {
  const [toastMessage, setToastMessage] = useState(null);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleEmail = () => {
    triggerToast('Quest Log Updated: Transmission drafted to sohamwagale@gmail.com! ✉️');
    window.location.href = `mailto:${personalInfo.contact.email}?subject=Software%20Engineering%20Opportunity`;
  };

  const handleLinkedIn = () => {
    triggerToast('Summoning LinkedIn network connection! 🌐');
    window.open(personalInfo.contact.linkedin, '_blank', 'noopener,noreferrer');
  };

  const handleGitHub = () => {
    triggerToast('Entering GitHub code bastion! 🐙');
    window.open(personalInfo.contact.github, '_blank', 'noopener,noreferrer');
  };

  const handlePhone = () => {
    triggerToast('Direct audio channel opened! 📞');
    window.location.href = `tel:${personalInfo.contact.phone}`;
  };

  return (
    <footer className="rpg-section" id="rpg-contact" aria-labelledby="rpg-contact-title">
      <div className="gamified-wrap">
        <div className="rpg-sec-head" style={{ textAlign: 'center' }}>
          <div className="rpg-sec-badge">COMMUNE WITH THE SCHOLAR</div>
          <h2 className="rpg-sec-title" id="rpg-contact-title" style={{ justifyContent: 'center' }}>
            Contact <span className="accent">&amp; Direct Dispatch</span>
          </h2>
          <p className="rpg-sec-sub">
            Actively seeking software engineering internships for 2026. Available worldwide for high-impact teams.
          </p>
        </div>

        <div className="rpg-contact-center">
          {/* RPG Dialogue Box */}
          <RpgDialogueCard
            speaker="Soham Wagale (Full-Stack Mage)"
            avatar="🧙‍♂️"
            text="Greetings, traveler! You have navigated through the Enchanted Forest realm. My spellbook is primed for full-stack engineering internships and software development opportunities. How would you like to transmit your missive?"
            options={[
              { label: '📧 Send Electronic Mail', onClick: handleEmail },
              { label: '💼 Connect on LinkedIn', onClick: handleLinkedIn },
              { label: '🐙 Inspect GitHub Bastion', onClick: handleGitHub },
              { label: '📞 Direct Audio Transmission', onClick: handlePhone },
            ]}
          />

          {/* Quick Contact Chips */}
          <div className="rpg-contact-badges">
            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="rpg-contact-chip"
              onClick={() => triggerToast('Email address copied to intent! ✉️')}
            >
              ✉️ {personalInfo.contact.email}
            </a>
            <a
              href={`tel:${personalInfo.contact.phone}`}
              className="rpg-contact-chip"
            >
              📞 {personalInfo.contact.phone}
            </a>
            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rpg-contact-chip"
            >
              💼 {personalInfo.contact.displayLinkedin}
            </a>
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rpg-contact-chip"
            >
              🐙 {personalInfo.contact.displayGithub}
            </a>
          </div>
        </div>

        {/* Gamified Footer Info */}
        <div className="rpg-footer">
          <div className="rpg-footer-inner">
            <div>
              &copy; {new Date().getFullYear()} {personalInfo.name.first} {personalInfo.name.last} · The Legend of Soham Wagale RPG Resume
            </div>
            <div style={{ color: 'var(--rpg-gold-bright)' }}>
              Built with React + Vite &middot; Retro Enchanted Forest Design System
            </div>
          </div>
        </div>
      </div>

      {/* Floating Achievement Toast */}
      {toastMessage && (
        <div className="rpg-fixed-toast-wrap">
          <AchievementToast
            icon="⭐"
            message={toastMessage}
          />
        </div>
      )}
    </footer>
  );
}
