import React from 'react';
import { YOLO_PIPELINE_PROJECTS } from '../content/aadContent';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      {/* SECTION 1: YOLOSTACKS HERO */}
      <section className="hero-section yolo-hero-section" id="hero">
        <div className="container hero-container">
          <h1 className="hero-title yolo-brand-title">YoloStacks</h1>
          <p className="hero-subtitle yolo-brand-subtitle">
            Serious Engineering. Questionable Decisions.
          </p>

          <p className="yolo-hero-narrative">
            A small corner of the internet for developers who write code, break things, occasionally blame their tools, and eventually have to read the diff anyway.
          </p>

          <div className="hero-cta-group">
            <a href="#/aad" className="btn btn-primary btn-large">
              <span>Explore AAD</span>
              <span className="btn-arrow" aria-hidden="true">&rarr;</span>
            </a>
            <a
              href="https://github.com/YoloStacks/YoloStacks.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-large"
            >
              <span>GitHub</span>
              <span className="btn-icon" aria-hidden="true">&#8599;</span>
            </a>
          </div>

          <p className="hero-disclaimer-note" role="note">
            A few side projects, engineering satire, and lessons learned the hard way.
          </p>
        </div>
      </section>

      {/* SECTION 2: FIRST PROJECT (AAD) */}
      <section className="featured-product-section" id="featured-product">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Anger-Driven Development</h2>
            <p className="section-subtitle">
              Our first project: a development methodology for anyone who has ever asked an AI to center a button and ended up debugging a database migration.
            </p>
          </div>

          <div className="featured-card">
            <div className="featured-card-body">
              <div className="featured-card-main">
                <blockquote className="featured-quote">
                  &ldquo;First you vibe. Then you rage. Eventually, you read the diff.&rdquo;
                </blockquote>
                <p className="featured-desc">
                  TDD asks whether the code passes the test. DDD asks whether the model represents the domain. BDD asks whether the user story is satisfied. <strong>AAD asks why the chatbot deleted authentication middleware when all you asked for was 8px of padding.</strong>
                </p>

                <div className="featured-features-grid">
                  <div className="featured-feat-item">
                    <div className="feat-info">
                      <strong>The 5-Stage Rage Cycle</strong>
                      <span>From blissful vibing to reluctant engineering discipline.</span>
                    </div>
                  </div>
                  <div className="featured-feat-item">
                    <div className="feat-info">
                      <strong>The 12 Canonical Laws</strong>
                      <span>Truths about hallucinated competence, architectural amnesia, and midnight rollbacks.</span>
                    </div>
                  </div>
                  <div className="featured-feat-item">
                    <div className="feat-info">
                      <strong>The Rage Dictionary</strong>
                      <span>Real developer vocalizations indexed by severity and blood pressure impact.</span>
                    </div>
                  </div>
                  <div className="featured-feat-item">
                    <div className="feat-info">
                      <strong>The AAD Maturity Model</strong>
                      <span>From Level 0 (Blind Trust) to Level 4 (Diff Enlightenment).</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="featured-card-sidebar">
                <div className="featured-action-card">
                  <h3 className="featured-action-title">The Specification</h3>
                  <p className="featured-action-desc">
                    The complete manifesto, rules of engagement, and coping mechanisms.
                  </p>
                  <div className="sidebar-cta-group">
                    <a href="#/aad" className="btn btn-primary btn-block">
                      <span>Read AAD</span>
                      <span className="btn-arrow" aria-hidden="true">&rarr;</span>
                    </a>
                    <a href="#/aad#laws" className="btn btn-ghost btn-block">
                      <span>The 12 Canonical Laws &rarr;</span>
                    </a>
                    <a href="#/aad#dictionary" className="btn btn-ghost btn-block">
                      <span>The Rage Dictionary &rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT WE DO */}
      <section className="what-we-do-section" id="what-we-do">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Things We Care About</h2>
            <p className="section-subtitle">
              Mostly the weird, funny, and frustrating gap between how software is supposed to work and how it actually gets built.
            </p>
          </div>

          <div className="cards-grid what-we-do-grid">
            <div className="info-card">
              <h3 className="card-title">The 800-Line Diff for a 1-Line Fix</h3>
              <p>
                Deconstructing why a minor styling tweak touched three database adapters, added 12 dependencies, and somehow deleted your local environment variables.
              </p>
            </div>

            <div className="info-card">
              <h3 className="card-title">Engineering Without the Pitch Deck</h3>
              <p>
                Software is messy. Saying so out loud is cathartic. No corporate euphemisms, no LinkedIn positivity, just the honest everyday chaos of shipping code.
              </p>
            </div>

            <div className="info-card">
              <h3 className="card-title">Over-Engineering by Accident</h3>
              <p>
                Tracing the exact moment a five-minute bash script mutated into a distributed event queue nobody on the team knows how to restart.
              </p>
            </div>

            <div className="info-card">
              <h3 className="card-title">Turning Regret into Tests</h3>
              <p>
                Getting mad at your tools is natural. The trick is turning that frustration into a regression test so you never have to deal with the exact same bug twice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PRINCIPLES */}
      <section className="principles-section" id="principles">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">A Few Working Rules</h2>
            <p className="section-subtitle">
              Not corporate values or motivational posters. Just practical habits picked up after breaking enough things in production.
            </p>
          </div>

          <div className="principles-grid">
            <div className="principle-card">
              <span className="principle-number" aria-hidden="true">1</span>
              <div className="principle-content">
                <h3 className="principle-title">Evidence Over Confidence</h3>
                <p className="principle-text">
                  A polite, grammatically perfect explanation from an assistant doesn&rsquo;t mean the code compiles. Check the compiler and read the logs.
                </p>
              </div>
            </div>

            <div className="principle-card">
              <span className="principle-number" aria-hidden="true">2</span>
              <div className="principle-content">
                <h3 className="principle-title">Inspect The Diff</h3>
                <p className="principle-text">
                  If you didn&rsquo;t look at the lines being committed, you didn&rsquo;t write the change &mdash; you just accepted a mystery box.
                </p>
              </div>
            </div>

            <div className="principle-card">
              <span className="principle-number" aria-hidden="true">3</span>
              <div className="principle-content">
                <h3 className="principle-title">Verify Before Celebrating</h3>
                <p className="principle-text">
                  Running the code once and seeing it not immediately crash isn&rsquo;t a release strategy. Write a test, try to break it, and check the edge cases.
                </p>
              </div>
            </div>

            <div className="principle-card">
              <span className="principle-number" aria-hidden="true">4</span>
              <div className="principle-content">
                <h3 className="principle-title">Turn Frustration Into Guardrails</h3>
                <p className="principle-text">
                  Rage is temporary; test suites are permanent. When the fire is out, write the test so the exact same failure never happens again.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: THE LAB / OTHER PROJECTS */}
      <section className="pipeline-section" id="the-lab">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Other Experiments</h2>
            <p className="section-subtitle">
              Side projects, silly ideas, and half-baked experiments we tinker with when we aren&rsquo;t debugging.
            </p>
          </div>

          <div className="cards-grid pipeline-grid">
            {YOLO_PIPELINE_PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className="pipeline-card"
              >
                <div className="card-header">
                  <h3 className="pipeline-title">{proj.title}</h3>
                  <span className="status-pill">
                    {proj.status}
                  </span>
                </div>
                <div className="card-body">
                  <p className="pipeline-desc">{proj.description}</p>
                </div>
                {proj.id === 'proj-01' && (
                  <div className="card-footer">
                    <a href="#/aad" className="card-link">
                      <span>Explore AAD Specification &rarr;</span>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
