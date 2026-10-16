import React from 'react';
import { useHashRoute } from '../app/useHashRoute';

export const Footer: React.FC = () => {
  const { isHome } = useHashRoute();

  return (
    <footer className="site-footer" id="site-footer">
      <div className="container footer-container">
        <div className="footer-top-grid">
          <div className="footer-brand-column">
            <div className="footer-logo">
              <span className="footer-title">YoloStacks</span>
            </div>
            <p className="footer-brand-motto">
              Serious Engineering. Questionable Decisions.
            </p>
            <p className="footer-brand-desc">
              A small corner of the internet for developers who write code, break things, and occasionally remember to read the diff.
            </p>
          </div>

          <div className="footer-nav-column">
            <h3 className="footer-heading">Projects</h3>
            <ul className="footer-links">
              <li>
                <a href="#/">Home</a>
              </li>
              <li>
                <a href="#/aad">AAD — Anger-Driven Development</a>
              </li>
              <li>
                <a href={isHome ? '#what-we-do' : '#/what-we-do'}>What We Do</a>
              </li>
              <li>
                <a href={isHome ? '#principles' : '#/principles'}>Rules</a>
              </li>
              <li>
                <a href={isHome ? '#the-lab' : '#/the-lab'}>Other Projects</a>
              </li>
            </ul>
          </div>

          <div className="footer-flagship-column">
            <h3 className="footer-heading">AAD</h3>
            <p className="footer-quote">
              &ldquo;First you vibe. Then you rage. Eventually, you read the diff.&rdquo;
            </p>
            <p className="footer-project-note">
              <a href="#/aad" className="footer-link-highlight">Read the specification &rarr;</a>
            </p>
          </div>
        </div>

        <div className="footer-divider" role="separator"></div>

        <div className="footer-disclaimer-box" role="note" aria-label="Satire Disclaimer">
          <div className="disclaimer-title">
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span>ENGINEERING SATIRE NOTICE</span>
          </div>
          <p className="footer-disclaimer">
            Anger-Driven Development (AAD) and YoloStacks are satirical side projects made for laughs and developer catharsis. They are not formal engineering standards. Always inspect your diffs, write deterministic tests, and verify before shipping to production.
          </p>
        </div>

        <div className="footer-bottom">
          <p className="footer-meta">
            &copy; {new Date().getFullYear()} YoloStacks. Built by tired developers. All broken diffs reserved.
          </p>
          <div className="footer-actions">
            <a
              href="https://github.com/YoloStacks/YoloStacks.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-external-link"
            >
              GitHub ↗
            </a>
            <a href="#main-content" className="footer-top-link">
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
