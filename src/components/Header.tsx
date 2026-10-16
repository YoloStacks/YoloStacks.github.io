import React, { useState } from 'react';
import { useTheme } from '../app/ThemeContext';
import { useHashRoute } from '../app/useHashRoute';
import { announce } from '../app/announce';

export const Header: React.FC = () => {
  const { theme, effectiveTheme, cycleTheme } = useTheme();
  const { isHome, isAad } = useHashRoute();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleThemeClick = () => {
    cycleTheme();
    const nextMsg =
      theme === 'system'
        ? effectiveTheme === 'dark'
          ? 'Light mode active'
          : 'Dark mode active'
        : theme === 'light'
        ? 'Dark mode active'
        : 'System theme active';
    announce(nextMsg);
  };

  const closeMobileNav = () => {
    setMobileOpen(false);
  };

  const themeTitle =
    theme === 'system'
      ? `Theme: System (Auto: ${effectiveTheme === 'dark' ? 'Dark' : 'Light'})`
      : `Theme: ${theme === 'light' ? 'Light' : 'Dark'} mode`;

  const themeLabel = theme === 'system' ? 'System' : theme === 'light' ? 'Light' : 'Dark';

  return (
    <header className="site-header" id="site-header">
      <div className="header-inner container">
        <div className="header-brand-group">
          <a
            href="#/"
            className="brand-logo"
            aria-label="YoloStacks Home"
            onClick={closeMobileNav}
          >
            <span className="logo-title">YoloStacks</span>
          </a>

          {isAad && (
            <div className="header-product-crumb" aria-label="Current project">
              <span className="crumb-sep" aria-hidden="true">/</span>
              <a href="#/aad" className="crumb-product">
                AAD
              </a>
            </div>
          )}
        </div>

        <nav
          className={`primary-nav ${mobileOpen ? 'nav-open' : ''}`}
          id="primary-nav"
          aria-label="Main Navigation"
        >
          <ul className="nav-list">
            {isHome ? (
              <>
                <li>
                  <a
                    href="#/aad"
                    className="nav-link nav-link-highlight"
                    onClick={closeMobileNav}
                  >
                    AAD
                  </a>
                </li>
                <li>
                  <a href="#what-we-do" className="nav-link" onClick={closeMobileNav}>
                    What We Do
                  </a>
                </li>
                <li>
                  <a href="#principles" className="nav-link" onClick={closeMobileNav}>
                    Rules
                  </a>
                </li>
                <li>
                  <a href="#the-lab" className="nav-link" onClick={closeMobileNav}>
                    Other Projects
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/YoloStacks/YoloStacks.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link nav-link-external"
                    onClick={closeMobileNav}
                  >
                    GitHub ↗
                  </a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a
                    href="#/"
                    className="nav-link nav-link-back"
                    onClick={closeMobileNav}
                  >
                    ← Home
                  </a>
                </li>
                <li>
                  <a
                    href="#/aad#methodology"
                    className="nav-link"
                    onClick={closeMobileNav}
                  >
                    Methodology
                  </a>
                </li>
                <li>
                  <a
                    href="#/aad#rage-cycle"
                    className="nav-link"
                    onClick={closeMobileNav}
                  >
                    Rage Cycle
                  </a>
                </li>
                <li>
                  <a href="#/aad#laws" className="nav-link" onClick={closeMobileNav}>
                    The 12 Laws
                  </a>
                </li>
                <li>
                  <a
                    href="#/aad#dictionary"
                    className="nav-link"
                    onClick={closeMobileNav}
                  >
                    Dictionary
                  </a>
                </li>
                <li>
                  <a
                    href="#/aad#maturity-model"
                    className="nav-link"
                    onClick={closeMobileNav}
                  >
                    Maturity
                  </a>
                </li>
                <li>
                  <a
                    href="#/aad#metrics"
                    className="nav-link"
                    onClick={closeMobileNav}
                  >
                    Metrics
                  </a>
                </li>
                <li>
                  <a
                    href="#/aad#pledge"
                    className="nav-link"
                    onClick={closeMobileNav}
                  >
                    Pledge
                  </a>
                </li>
              </>
            )}
          </ul>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="theme-toggle"
            id="theme-toggle"
            onClick={handleThemeClick}
            data-current-theme={theme}
            aria-label={`${themeTitle}. Click to cycle theme.`}
            title={themeTitle}
          >
            <span className="theme-toggle-icon" aria-hidden="true">
              {theme === 'system' && (
                <svg
                  className="icon-system"
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              )}
              {theme === 'light' && (
                <svg
                  className="icon-light"
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              )}
              {theme === 'dark' && (
                <svg
                  className="icon-dark"
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </span>
            <span className="theme-toggle-text">{themeLabel}</span>
          </button>

          <button
            type="button"
            className="nav-toggle"
            id="nav-toggle"
            aria-expanded={mobileOpen}
            aria-controls="primary-nav"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="nav-toggle-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </header>
  );
};
