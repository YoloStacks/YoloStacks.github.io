import React, { useState } from 'react';
import {
  METHODOLOGY_COMPARISONS,
  CENTRAL_CYCLE_STEPS,
  RAGE_CYCLE_STAGES,
  AAD_LAWS,
  DICTIONARY_TIERS,
  MATURITY_LEVELS,
  AAD_METRICS,
  AAD_PLEDGE_TEXT
} from '../content/aadContent';
import { copyToClipboard } from '../utils/clipboard';
import { announce } from '../app/announce';

export const AADPage: React.FC = () => {
  const [copiedPhraseIndex, setCopiedPhraseIndex] = useState<string | null>(null);
  const [pledgeCopied, setPledgeCopied] = useState(false);
  const [copyErrorIndex, setCopyErrorIndex] = useState<string | null>(null);

  const handleCopyPhrase = async (phraseText: string, phraseKey: string) => {
    const success = await copyToClipboard(phraseText);
    if (success) {
      setCopiedPhraseIndex(phraseKey);
      setCopyErrorIndex(null);
      announce(`Copied to clipboard: "${phraseText}"`);
      setTimeout(() => {
        setCopiedPhraseIndex((current) => (current === phraseKey ? null : current));
      }, 2000);
    } else {
      setCopyErrorIndex(phraseKey);
      announce('Failed to copy to clipboard.');
      setTimeout(() => {
        setCopyErrorIndex((current) => (current === phraseKey ? null : current));
      }, 2000);
    }
  };

  const handleCopyPledge = async () => {
    const success = await copyToClipboard(AAD_PLEDGE_TEXT);
    if (success) {
      setPledgeCopied(true);
      announce('The complete AAD Covenant Pledge was copied to clipboard.');
      setTimeout(() => {
        setPledgeCopied(false);
      }, 2500);
    } else {
      announce('Failed to copy pledge to clipboard.');
    }
  };

  return (
    <div className="aad-page">
      {/* SECTION A: HERO */}
      <section className="hero-section" id="hero">
        <div className="container hero-container">
          <div className="hero-parent-badge">
            <a href="#/" className="hero-parent-link">
              <span>&larr; Back to YoloStacks</span>
            </a>
          </div>

          <h1 className="hero-title">Anger-Driven Development</h1>
          <p className="hero-subtitle">
            An unofficial software development methodology for developers who trusted an LLM and lived to regret it.
          </p>

          <div className="hero-taglines">
            <p className="hero-core-tagline">
              &ldquo;First you vibe. Then you rage. Eventually, you read the diff.&rdquo;
            </p>
            <p className="hero-supporting-tagline">
              Built on broken promises, questionable diffs, and industrial-grade frustration.
            </p>
          </div>

          <div className="hero-cta-group">
            <a href="#/aad#rage-cycle" className="btn btn-primary">
              <span>Enter The Rage Cycle</span>
              <span className="btn-arrow" aria-hidden="true">&rarr;</span>
            </a>
            <a href="#/aad#methodology" className="btn btn-secondary">
              <span>Read The Manifesto</span>
              <span className="btn-arrow" aria-hidden="true">&darr;</span>
            </a>
          </div>

          <p className="hero-disclaimer-note" role="note">
            A satirical engineering methodology. Not an ISO standard. Not legal advice. Definitely not production-ready.
          </p>
        </div>
      </section>

      {/* SECTION B: THE METHODOLOGY */}
      <section className="section-block" id="methodology">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">The Methodology</h2>
            <p className="section-lead">
              Software engineering has produced many formal methodologies. None of them prepared you for a machine that invents fake npm packages with absolute grammatical confidence.
            </p>
          </div>

          <div className="comparison-grid">
            {METHODOLOGY_COMPARISONS.map((item) => (
              <div
                key={item.tag}
                className={`comparison-card ${item.isAad ? 'comparison-card-aad' : ''}`}
              >
                <div className={`card-tag ${item.isAad ? 'badge-rage' : ''}`}>{item.tag}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <div className="central-cycle-card" id="central-cycle" style={{ marginTop: '3rem' }}>
            <div className="card-header">
              <h3>The Central Operational Loop</h3>
            </div>
            <ol className="cycle-steps-list">
              {CENTRAL_CYCLE_STEPS.map((step) => (
                <li key={step.num} className="cycle-step-item">
                  <span className="step-num">{step.num}</span>
                  <div className="step-content">
                    <strong>{step.title}</strong>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* SECTION C: THE FIVE STAGES OF THE RAGE CYCLE */}
      <section className="section-block" id="rage-cycle">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">The Five Stages of the Rage Cycle</h2>
            <p className="section-lead">
              A standardized emotional progression experienced by engineers observing automated destruction in real time.
            </p>
          </div>

          <div className="cycle-timeline">
            {RAGE_CYCLE_STAGES.map((stage) => (
              <article key={stage.id} className={`stage-card ${stage.className}`} id={stage.id}>
                <div className="stage-header">
                  <span className="stage-step">{stage.step}</span>
                  <h3 className="stage-heading">{stage.title}</h3>
                </div>
                <blockquote className="stage-quote">&ldquo;{stage.quote}&rdquo;</blockquote>
                <p className="stage-description">{stage.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION D: THE LAWS OF AAD */}
      <section className="section-block" id="laws">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">The Laws of AAD</h2>
            <p className="section-lead">
              Immutable truths derived from thousands of hours spent reading hallucinated documentation and rolling back midnight deployments.
            </p>
          </div>

          <div className="laws-grid">
            {AAD_LAWS.map((law) => (
              <article key={law.id} className="law-card">
                <div className="law-header">
                  <span className="law-number" aria-hidden="true">{law.num}</span>
                  <h3 className="law-title">{law.title}</h3>
                </div>
                <p className="law-body">&ldquo;{law.body}&rdquo;</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION E: THE RAGE DICTIONARY */}
      <section className="section-block" id="dictionary">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">The Rage Dictionary</h2>
            <p className="section-lead">
              Common developer vocalizations indexed by severity, blood pressure impact, and likelihood of impending git revert. Click any phrase to copy it.
            </p>
          </div>

          <div className="dictionary-categories">
            {DICTIONARY_TIERS.map((tier) => (
              <div key={tier.id} className="dictionary-tier">
                <div className="tier-header">
                  <div className={`tier-indicator ${tier.indicatorClass}`} aria-hidden="true"></div>
                  <div>
                    <h3 className="tier-title">{tier.level}</h3>
                    <p className="tier-subtitle">{tier.subtitle}</p>
                  </div>
                </div>

                <div className="phrase-grid">
                  {tier.phrases.map((phrase, pIdx) => {
                    const phraseKey = `${tier.id}-${pIdx}`;
                    const isCopied = copiedPhraseIndex === phraseKey;
                    const isError = copyErrorIndex === phraseKey;

                    return (
                      <div
                        key={phrase.text}
                        className={`phrase-card ${phrase.className || ''}`}
                      >
                        <p className="phrase-text">&ldquo;{phrase.text}&rdquo;</p>
                        <button
                          type="button"
                          className={`btn-copy ${isCopied ? 'copied' : ''} ${isError ? 'copy-error' : ''}`}
                          onClick={() => handleCopyPhrase(phrase.text, phraseKey)}
                          aria-label={`Copy phrase: "${phrase.text}"`}
                        >
                          <span className="copy-icon" aria-hidden="true"></span>
                          <span className="copy-label">
                            {isCopied ? 'COPIED!' : isError ? 'FAILED' : 'COPY'}
                          </span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="dictionary-conclusion">
            <p className="conclusion-quote">
              &ldquo;The volume of your prompt does not affect the model&rsquo;s attention weights.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* SECTION F: THE AAD MATURITY MODEL */}
      <section className="section-block" id="maturity-model">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">The AAD Maturity Model</h2>
            <p className="section-lead">
              Where do you sit on the spectrum between blind vibe acceptance and hardened diff skepticism?
            </p>
          </div>

          <div className="maturity-stack">
            {MATURITY_LEVELS.map((level) => (
              <div key={level.level} className={`maturity-card ${level.cardClass}`}>
                <div className="maturity-header">
                  <span className="maturity-level-label">{level.level}</span>
                  <h3 className="maturity-title">{level.title}</h3>
                </div>
                <p className="maturity-behavior">{level.behavior}</p>
                <div className="maturity-quote">&ldquo;{level.quote}&rdquo;</div>
              </div>
            ))}
          </div>

          <div className="maturity-epilogue">
            <span>Enlightenment is not avoiding AI. Enlightenment is never merging its code without reading the diff.</span>
          </div>
        </div>
      </section>

      {/* SECTION G: METRICS & OBSERVABILITY */}
      <section className="section-block" id="metrics">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Key Frustration Indicators</h2>
            <p className="section-lead">
              Fictional telemetry measuring the everyday reality of unverified code.
            </p>
          </div>

          <div className="dashboard-grid">
            {AAD_METRICS.map((metric) => (
              <div key={metric.name} className="metric-card">
                <div className="metric-header">
                  <h3 className="metric-name">{metric.name}</h3>
                </div>
                <div className="metric-value-wrap">
                  <span className="metric-val-num">
                    {metric.value}
                  </span>
                  <span className="metric-val-unit">
                    {metric.unit}
                  </span>
                </div>
                <div className="metric-bar-track">
                  <div
                    className={`metric-bar-fill ${metric.barClass}`}
                    style={{ width: `${metric.barPercent}%` }}
                    role="progressbar"
                    aria-valuenow={metric.barPercent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={metric.name}
                  ></div>
                </div>
                <p className="metric-desc">
                  {metric.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION H: THE AAD COVENANT PLEDGE */}
      <section className="section-block" id="pledge">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">The AAD Pledge</h2>
            <p className="section-lead">
              A binding operational agreement with your future self, your team, and whatever model generates your next pull request.
            </p>
          </div>

          <div className="terminal-card terminal-covenant">
            <div className="terminal-header">
              <div className="terminal-title">~/aad_covenant.sh</div>
              <button
                type="button"
                className={`btn-copy btn-copy-pledge ${pledgeCopied ? 'copied' : ''}`}
                id="btn-copy-pledge"
                onClick={handleCopyPledge}
                aria-label="Copy the complete AAD Pledge to clipboard"
              >
                <span className="copy-icon" aria-hidden="true"></span>
                <span className="copy-pledge-label">
                  {pledgeCopied ? 'PLEDGE COPIED!' : 'COPY COMPLETE PLEDGE'}
                </span>
              </button>
            </div>

            <div className="pledge-body">
              <p className="pledge-clause">&gt; I acknowledge that an AI-generated explanation is not proof of correctness.</p>
              <p className="pledge-clause">&gt; I will not accept &lsquo;fixed&rsquo; without verification.</p>
              <p className="pledge-clause">&gt; I will inspect the diff before approving dangerous changes.</p>
              <p className="pledge-clause">&gt; I will not confuse confidence with evidence.</p>
              <p className="pledge-clause">&gt; I reserve the right to express my frustration when the regression is real.</p>
              <p className="pledge-clause">&gt; But when the incident is over, I will turn the lesson into a test, a guardrail, or a better specification.</p>
              <p className="pledge-affirmation">&gt; <strong>I am an Anger-Driven Developer.</strong></p>
              <p className="pledge-credo">&gt; <em>I vibe responsibly. I rage selectively. I verify everything.</em></p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION I: CLOSING MANIFESTO STATEMENT */}
      <section className="closing-section" id="manifesto">
        <div className="container closing-container">
          <h2 className="closing-headline">
            First you vibe. Then you rage. Eventually, you read the diff.
          </h2>
          <p className="closing-copy">
            Anger is not a software development methodology &mdash; but it is an unmistakable signal that verification was skipped.
          </p>

          <div className="closing-actions">
            <a href="#hero" className="btn btn-secondary">
              <span>Back to Top &uarr;</span>
            </a>
            <a href="#/aad#laws" className="btn btn-primary">
              <span>Review The 12 Laws &rarr;</span>
            </a>
            <a href="#/" className="btn btn-ghost">
              <span>&larr; YoloStacks Home</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
