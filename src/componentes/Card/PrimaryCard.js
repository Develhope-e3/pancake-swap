import React from "react";
import "./PrimaryCard.scss";

/**
 * @param {string} className - clase del link (primary-card)
 * @param {object} icon - icono svg de la card
 * @param {object} title - Texto principal de la card
 * @param {object} subtitle - Texto secundario de la card
 *
 * @returns Estructura HTML
 */

export function PrimaryCard({ className, iconClassName, icon, title, subtitle, body }) {
  return (
    <div class={className}>
      <div class={iconClassName}>
        {icon}
      </div>
      <div>
        <h2>{title}</h2>
        <h2>{subtitle}</h2>
      </div>
      <span>{body}</span>
    </div>
  );
}
