import React from "react";
import "./primary-card.scss";

/**
 * @param {string} className - clase del link (primaryCard, secondaryCard, tertiaryCard)
 * @param {object} icon - icono svg de la card
 * @param {string} title - Texto principal de la card
 * @param {string} subtitle - Texto secundario de la card
 *
 * @returns Estructura HTML
 */

export function PrimaryCard({ className, icon, title, subtitle, body }) {
  return (
    <div class={className}>
      <div>{icon}</div>
      <div>
        <p>
          {title}
          <br />
          {subtitle}
        </p>
      </div>
      <span>{body}</span>
    </div>
  );
}
