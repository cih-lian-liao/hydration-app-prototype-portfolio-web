import { motion } from 'framer-motion'
import { Clock3, Cog, Users, Wand2, Sparkles } from 'lucide-react'
import './App.css'
import projectOverviewImg from './assets/images/img-project-overview-1.png'
import projectObjectivesImg from './assets/images/img-project-objectives-1.png'
import demo1 from './assets/images/img-demographics-chart-1.png'
import demo2 from './assets/images/img-demographics-chart-2.png'
import demo3 from './assets/images/img-demographics-chart-3.png'
import demo4 from './assets/images/img-demographics-chart-4.png'
import demo5 from './assets/images/img-demographics-chart-5.png'
import demo6 from './assets/images/img-demographics-chart-6.png'
import personaCard from './assets/images/img-persona-card-1.jpg'
import journeyMap from './assets/images/img-journey-map-1.jpg'
import futureTaskFlow from './assets/images/img-future-state-task-flow-diagram-1.jpg'
import useCase1 from './assets/images/Use-Case-1-Quick-Log-Water.jpg'
import useCase2 from './assets/images/Use-Case-2-Set Daily-Hydration-Goal.png'
import useCase3 from './assets/images/Use-Case-3-View-Progress.png'
import useCase4 from './assets/images/Use-Case-4-Design-Reminder-Management.jpg'
import useCase5 from './assets/images/Use-Case-5-Review-History.jpg'
import storyboardImg from './assets/images/storyboard.jpg'
import aiFindings1 from './assets/images/img-ai-vs-my-findings-1.jpg'
import aiFindings2 from './assets/images/img-ai-vs-my-findings-2.jpg'
import wire1 from './assets/images/img-early-blackandwhite-wireframes-1.png'
import wire2 from './assets/images/img-early-blackandwhite-wireframes-2.png'
import wire3 from './assets/images/img-early-blackandwhite-wireframes-3.png'
import wire4 from './assets/images/img-early-blackandwhite-wireframes-4.png'
import wire5 from './assets/images/img-early-blackandwhite-wireframes-5.png'
import task1Old from './assets/images/img-task-1-opti-old.png'
import task1New from './assets/images/img-task-1-opti-new.png'
import task2Old from './assets/images/img-task-2-opti-old.png'
import task2New from './assets/images/img-task-2-opti-new.png'
import task35Old1 from './assets/images/img-task-3-5-opti-old-1.png'
import task35New1 from './assets/images/img-task-3-5-opti-new-1.png'
import task35Old2 from './assets/images/img-task-3-5-opti-old-2.png'
import task35New2 from './assets/images/img-task-3-5-opti-new-2.png'
import task4Old from './assets/images/img-task-4-opti-old.png'
import task4New from './assets/images/img-task-4-opti-new.png'
import task1Transcript from './assets/images/img-dovetail-task-1-transcript-1.png'
import task1Impact from './assets/images/img-dovetail-task-1-impact-1.png'
import task5Transcript from './assets/images/img-dovetail-task-5-transcript-1.png'
import task5Impact from './assets/images/img-dovetail-task-5-impact-1.png'
import task4Transcript from './assets/images/img-dovetail-task-4-transcript-1.png'
import task4Impact from './assets/images/img-dovetail-task-4-impact-1.png'
import aiImpact1 from './assets/images/img-ai-impact-chart-1.png'
import aiImpact2 from './assets/images/img-ai-impact-chart-2.png'
import aiImpact3 from './assets/images/img-ai-impact-chart-3.png'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: 'easeOut' },
}

// YouTube video URLs
const YOUTUBE_VIDEO_BEFORE = 'https://www.youtube.com/embed/7x0UI-mkDEI'
const YOUTUBE_VIDEO_REDESIGNED = 'https://www.youtube.com/embed/LR49plJKIbA'

function App() {
  const scrollToSection = (event, targetId) => {
    event.preventDefault()
    const el = document.getElementById(targetId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app-shell">
      <motion.section
        id="project-overview"
        className="hero glass-surface"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="hero-grid">
          <div className="hero-left">
            <div className="badge">
              <Sparkles size={18} />
              Hydration App 2.0 · Case Study
            </div>
            <h1 className="hero-title">
              Hydration App 2.0: <span className="gradient-text">AI-Augmented UX Redesign</span>
            </h1>
            <div className="hero-meta-line">
              <span className="muted">Name: <strong>Cih-Lian Liao</strong></span>
              <span className="meta-dot">•</span>
              <span className="muted">Date: <strong>Dec 11 2025</strong></span>
            </div>

            <div className="overview-card glass-surface">
              <h2 className="hero-subtitle">Project Overview</h2>
              <p className="hero-description">
                Hydration App 2.0 is a user-centered redesign of a daily water tracking experience,
                specifically optimized for busy professionals who value speed and minimalism. This
                project leverages Generative AI (ChatGPT, Figma Make) as a strategic partner to
                streamline the end-to-end design process—from user research and persona generation to
                prototyping and heuristic evaluation.
              </p>
              <p className="hero-description subtle">
                The goal was to transform hydration tracking from a repetitive chore into a seamless,
                micro-interaction-based habit.
              </p>
            </div>

            <div className="hero-actions">
              <a
                className="button-primary"
                href="#problem-statement"
                onClick={(e) => scrollToSection(e, 'problem-statement')}
              >
                Problem Statement
              </a>
              <a
                className="button-ghost"
                href="#project-objectives"
                onClick={(e) => scrollToSection(e, 'project-objectives')}
              >
                Project Objectives
        </a>
      </div>

            <div className="meta-grid">
              <div className="meta-card">
                <div className="meta-icon">
                  <Wand2 size={18} />
                </div>
                <div>
                  <div className="subtle">Role</div>
                  <strong>UX Researcher, UI Designer, Prompt Engineer</strong>
                </div>
              </div>
              <div className="meta-card">
                <div className="meta-icon">
                  <Clock3 size={18} />
                </div>
                <div>
                  <div className="subtle">Timeline</div>
                  <strong>Fall 2025 (Academic Project)</strong>
                </div>
              </div>
              <div className="meta-card">
                <div className="meta-icon">
                  <Cog size={18} />
                </div>
                <div>
                  <div className="subtle">Tools</div>
                  <strong>Figma, Figma Make (AI), ChatGPT (Agent Mode), Vercel</strong>
                </div>
              </div>
              <div className="meta-card">
                <div className="meta-icon">
                  <Users size={18} />
                </div>
                <div>
                  <div className="subtle">Target Audience</div>
                  <strong>Tech-savvy professionals (“Lily Chen”)</strong>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <img src={projectOverviewImg} alt="Hydration App 2.0 project overview" />
          </motion.div>
        </div>
      </motion.section>

      <motion.section id="problem-statement" className="section" {...fadeInUp}>
        <div className="section-header">
          <div className="pill">Problem Statement</div>
        </div>
        <div className="section-body">
          <p className="muted">
            Despite the health benefits of staying hydrated, user research revealed that existing
            tracking apps suffer from high interaction friction, leading to user abandonment.
          </p>
          <div className="two-col">
            <div>
              <div className="list">
                {[
                  'High Interaction Cost: Logging a single drink often requires 3–4 taps and manual data entry, disrupting the user’s workflow.',
                  'Hidden Controls: Critical features, such as adjusting daily goals, are often buried deep within settings menus rather than being accessible when needs change (e.g., warmer weather).',
                  'Cognitive Overload: Dashboards are often cluttered with dense charts that lack clear “remaining goal” indicators, making quick status checks difficult.',
                  'Generic Notifications: Reminders arrive at arbitrary times, often becoming annoying interruptions rather than helpful nudges.',
                ].map((item) => (
                  <div className="list-item" key={item}>
                    <span className="list-bullet" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="image-card">
              <img src={projectOverviewImg} alt="Project overview visual" />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section id="project-objectives" className="section" {...fadeInUp}>
        <div className="section-header">
          <div className="pill">Project Objectives</div>
        </div>
        <div className="section-body">
          <p className="muted">
            To address these friction points, the redesign focused on five core UX objectives derived
            from the product requirements:
          </p>
          <div className="two-col">
            <div>
              <div className="list">
                {[
                  'Effortless Logging: Reduce the logging process to a single tap (≤ 2 seconds) using smart presets and gesture controls.',
                  'Transparent Progress: Replace complex data visualization with a glanceable progress ring and clear “remaining liters” indicators to reduce cognitive load.',
                  'Personal Control: Empower users with inline goal adjustments directly on the home screen, providing immediate system feedback.',
                  'Adaptive Intelligence: Design a “Smart Reminder” system that offers actionable options (Log, Snooze, Open) directly from the notification banner.',
                  'AI-Driven Efficiency: Utilize Generative AI to accelerate the design lifecycle, validating the effectiveness of AI as a collaborative design partner.',
                ].map((item) => (
                  <div className="list-item" key={item}>
                    <span className="list-bullet" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="image-card">
              <img src={projectObjectivesImg} alt="Project objectives visual" />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section id="contents" className="section" {...fadeInUp}>
        <div className="section-header">
          <div className="pill">Contents</div>
        </div>
        <div className="section-body">
          <nav className="toc-card">
            <div className="toc-title">Contents</div>
            <ul className="toc-list">
              <li><a className="toc-link" href="#project-overview" onClick={(e) => scrollToSection(e, 'project-overview')}><span className="dot" />Project Overview</a></li>
              <li><a className="toc-link" href="#problem-statement" onClick={(e) => scrollToSection(e, 'problem-statement')}><span className="dot" />Problem Statement</a></li>
              <li><a className="toc-link" href="#project-objectives" onClick={(e) => scrollToSection(e, 'project-objectives')}><span className="dot" />Project Objectives</a></li>
              <li><a className="toc-link" href="#user-research" onClick={(e) => scrollToSection(e, 'user-research')}><span className="dot" />User Research Overview</a></li>
              <li><a className="toc-link" href="#demographics" onClick={(e) => scrollToSection(e, 'demographics')}><span className="dot" />Demographics &amp; Tech</a></li>
              <li><a className="toc-link" href="#persona" onClick={(e) => scrollToSection(e, 'persona')}><span className="dot" />Persona: Lily Chen</a></li>
              <li><a className="toc-link" href="#journey-map" onClick={(e) => scrollToSection(e, 'journey-map')}><span className="dot" />Journey Map</a></li>
              <li><a className="toc-link" href="#core-tasks" onClick={(e) => scrollToSection(e, 'core-tasks')}><span className="dot" />Core Tasks</a></li>
              <li><a className="toc-link" href="#early-design" onClick={(e) => scrollToSection(e, 'early-design')}><span className="dot" />Early Design &amp; Iteration</a></li>
              <li><a className="toc-link" href="#design-decisions" onClick={(e) => scrollToSection(e, 'design-decisions')}><span className="dot" />Key Design Decisions</a></li>
              <li><a className="toc-link toc-highlight" href="#high-fidelity" onClick={(e) => scrollToSection(e, 'high-fidelity')}><span className="dot" />High-Fidelity Prototype Demo</a></li>
              <li><a className="toc-link" href="#solution-features" onClick={(e) => scrollToSection(e, 'solution-features')}><span className="dot" />Key Features</a></li>
              <li><a className="toc-link" href="#outcome-impact" onClick={(e) => scrollToSection(e, 'outcome-impact')}><span className="dot" />Outcome &amp; Impact</a></li>
              <li><a className="toc-link" href="#key-takeaways" onClick={(e) => scrollToSection(e, 'key-takeaways')}><span className="dot" />Key Takeaways &amp; Future Steps</a></li>
              <li><a className="toc-link" href="#ai-reflections" onClick={(e) => scrollToSection(e, 'ai-reflections')}><span className="dot" />AI Tools &amp; Reflections</a></li>
            </ul>
          </nav>
        </div>
      </motion.section>

      <div className="fab-stack">
        <button className="fab" type="button" aria-label="Back to top" onClick={scrollToTop}>
          ↑
        </button>
        <button
          className="fab secondary"
          type="button"
          aria-label="Go to contents"
          onClick={(e) => scrollToSection(e, 'contents')}
        >
          ☰
        </button>
      </div>

      <motion.section id="user-research" className="section" {...fadeInUp}>
        <div className="section-header">
          <div className="pill">User Research &amp; Insights</div>
        </div>
        <div className="section-body section-grid">
          <div>
            <h3 className="section-title">Research Methodology</h3>
            <p className="muted">
              To understand the friction points in current hydration habits, I conducted a mixed-method
              research study combining <strong>Heuristic Evaluation</strong> and <strong>Remote User Testing</strong>.
              The goal was to identify why users abandon hydration apps despite their initial motivation.
            </p>
            <ul className="list">
              <li className="list-item">
                <span className="list-bullet" />
                <span><strong>Participants:</strong> 5 Users (Ages 26–34)</span>
              </li>
              <li className="list-item">
                <span className="list-bullet" />
                <span><strong>Backgrounds:</strong> Software Engineers, Designers, Students</span>
              </li>
              <li className="list-item">
                <span className="list-bullet" />
                <span><strong>Methods:</strong> Semi-structured interviews, Think-aloud protocol, Survey analysis</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      <motion.section id="demographics" className="section" {...fadeInUp}>
        <div className="section-header">
          <div className="pill">1. Demographics &amp; Tech Familiarity</div>
        </div>
        <div className="section-body">
          <p className="muted">
            My research focused on a tech-savvy demographic (Average Age: 28.2) who are comfortable with digital tools
            but easily frustrated by inefficiency.
          </p>
          <div className="list">
            <div className="list-item">
              <span className="list-bullet" />
              <span>**60%** of users have specific visual accessibility needs (high contrast, larger text).</span>
            </div>
            <div className="list-item">
              <span className="list-bullet" />
              <span>**80%** have tried hydration apps before but stopped using them due to complexity or inconsistent use.</span>
            </div>
            <div className="list-item">
              <span className="list-bullet" />
              <span>**Cross-Platform:** Users are split between iOS and Android, highlighting the need for a consistent design system.</span>
            </div>
          </div>
          <div className="image-grid">
            {[demo1, demo2, demo3, demo4, demo5, demo6].map((src, idx) => (
              <div className="image-card" key={src}>
                <img src={src} alt={`Demographics chart ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="persona" className="section" {...fadeInUp}>
        <div className="section-header">
          <div className="pill">2. Target Persona: Lily Chen</div>
        </div>
        <div className="section-body two-col">
          <div className="stack">
            <div className="quote-block">
              <p>
                "I want staying hydrated to be effortless—not another thing to manage."
              </p>
            </div>
            <div className="list">
              <div className="list-item">
                <span className="list-bullet" />
                <span>**Occupation:** Product Designer</span>
              </div>
              <div className="list-item">
                <span className="list-bullet" />
                <span>**Tech Literacy:** High (AI Early Adopter)</span>
              </div>
              <div className="list-item">
                <span className="list-bullet" />
                <span>**Core Need:** She needs to log water in the few seconds she has between meetings.</span>
              </div>
            </div>
          </div>
          <div className="image-card">
            <img src={personaCard} alt="Target persona Lily Chen" />
          </div>
        </div>
      </motion.section>

      <motion.section id="journey-map" className="section" {...fadeInUp}>
        <div className="section-header">
          <div className="pill">3. Journey Map: The "Quick Log" Scenario</div>
        </div>
        <div className="section-body two-col">
          <div className="stack">
            <p className="muted">
              I mapped out Lily's journey during a typical busy workday. The analysis revealed that the
              **"Action / Log"** and **"Adjustment"** stages caused the most friction in existing apps due to deep
              navigation menus and lack of feedback.
            </p>
            <p className="muted">
              **Scenario:** Quick Hydration Logging During a Busy Workday
            </p>
            <div className="list">
              <div className="list-item">
                <span className="list-bullet" />
                <span>**Pain Point:** Existing apps required 3-4 taps just to log a standard glass of water.</span>
              </div>
              <div className="list-item">
                <span className="list-bullet" />
                <span>**Opportunity:** Reduce interaction cost to a single tap with instant haptic feedback.</span>
              </div>
            </div>
          </div>
          <div className="image-card">
            <img src={journeyMap} alt="Journey map quick log scenario" />
          </div>
        </div>
      </motion.section>

      <motion.section id="core-tasks" className="section" {...fadeInUp}>
        <div className="section-header">
          <div className="pill">4. Defined User Scenarios &amp; Core Tasks</div>
        </div>
        <div className="section-body">
          <p className="muted">
            Based on the pain points identified in the research, I defined five core tasks to guide the redesign.
            Each task is grounded in a realistic user scenario to ensure the design solves actual problems
            rather than just adding features.
          </p>
          <div className="image-card">
            <img src={futureTaskFlow} alt="Future state task flow diagram" />
          </div>
          <div className="image-grid usecases-grid">
            {[useCase1, useCase2, useCase3, useCase4, useCase5].map((src, idx) => (
              <div className="image-card" key={src}>
                <img src={src} alt={`Use case ${idx + 1}`} />
              </div>
            ))}
          </div>

          <div className="tasks-grid">
            <div className="task-block">
              <h4 className="section-title">1. Task: Quick Hydration Logging</h4>
              <div className="list">
                <div className="list-item">
                  <span className="list-bullet" />
                <span>**Scenario:** Lily is tired after a 3 PM meeting and wants to log a glass of water without navigating through menus.</span>
                </div>
                <div className="list-item">
                  <span className="list-bullet" />
                <span>**Goal:** Log 250 ml of water in **one tap** (≤ 2 seconds).</span>
                </div>
                <div className="list-item">
                  <span className="list-bullet" />
                <span>**Key Requirement:** Eliminate the multi-step confirmation process found in existing apps.</span>
                </div>
              </div>
            </div>

            <div className="task-block">
              <h4 className="section-title">2. Task: Adjust Daily Hydration Goal</h4>
              <div className="list">
                <div className="list-item">
                  <span className="list-bullet" />
                <span>**Scenario:** The weather is warmer today, and Lily wants to increase her daily target from 2.5 L to 2.7 L to stay hydrated.</span>
                </div>
                <div className="list-item">
                  <span className="list-bullet" />
                <span>**Goal:** Adjust the goal immediately from the home screen.</span>
                </div>
                <div className="list-item">
                  <span className="list-bullet" />
                <span>**Key Requirement:** Provide an **inline slider** widget instead of burying controls in the "Settings" menu.</span>
                </div>
              </div>
            </div>

            <div className="task-block">
              <h4 className="section-title">3. Task: View Today’s Progress</h4>
              <div className="list">
                <div className="list-item">
                  <span className="list-bullet" />
                <span>**Scenario:** It’s mid-afternoon, and Lily wants a quick snapshot of her hydration status to know how much more she needs to drink.</span>
                </div>
                <div className="list-item">
                  <span className="list-bullet" />
                <span>**Goal:** Instantly understand "Remaining Goal" (e.g., "1.2 L left").</span>
                </div>
                <div className="list-item">
                  <span className="list-bullet" />
                <span>**Key Requirement:** Replace dense data charts with a clean **Progress Ring** and clear text indicators.</span>
                </div>
              </div>
            </div>

            <div className="task-block">
              <h4 className="section-title">4. Task: Receive &amp; Manage Reminders</h4>
              <div className="list">
                <div className="list-item">
                  <span className="list-bullet" />
                <span>**Scenario:** Lily receives a notification during work. She wants to either log water immediately or snooze the reminder if she's busy.</span>
                </div>
                <div className="list-item">
                  <span className="list-bullet" />
                <span>**Goal:** Act directly from the notification banner.</span>
                </div>
                <div className="list-item">
                  <span className="list-bullet" />
                <span>**Key Requirement:** "Smart Reminders" with actionable buttons (**Log**, **Snooze**, **Open**) to reduce interruption.</span>
                </div>
              </div>
            </div>

            <div className="task-block">
              <h4 className="section-title">5. Task: Review History &amp; Trends</h4>
              <div className="list">
                <div className="list-item">
                  <span className="list-bullet" />
                <span>**Scenario:** At the end of the week, Lily wants to check her consistency and see if she met her hydration habit goals.</span>
                </div>
                <div className="list-item">
                  <span className="list-bullet" />
                <span>**Goal:** Compare daily and weekly hydration patterns to build long-term habits.</span>
                </div>
                <div className="list-item">
                  <span className="list-bullet" />
                <span>**Key Requirement:** A dedicated **History Tab** with clear AI-generated insights (e.g., "Wednesdays are your lowest intake days").</span>
                </div>
              </div>
            </div>
          </div>

          <div className="image-card">
            <img src={storyboardImg} alt="Storyboard" />
          </div>
        </div>
      </motion.section>

      <motion.section className="section" {...fadeInUp}>
        <div className="section-header">
          <div className="pill">5. Synthesis: Key UX Insights</div>
        </div>
        <div className="section-body">
          <p className="muted">
            Synthesizing the data from the heuristic evaluation and user interviews, I identified three
            pillars for the redesign:
          </p>
          <div className="list">
            <div className="list-item">
              <span className="list-bullet" />
              <span>
                <strong>Need for Speed (Efficiency):</strong>
                <br />
                Users prefer short, 2–3 second interactions. The "Quick Log" feature must be accessible instantly from
                the home screen.
              </span>
            </div>
            <div className="list-item">
              <span className="list-bullet" />
              <span>
                <strong>Clarity over Complexity (Cognitive Load):</strong>
                <br />
                Participants found existing charts overwhelming. The new design should prioritize "Remaining Goal" text
                over complex graphs.
              </span>
            </div>
            <div className="list-item">
              <span className="list-bullet" />
              <span>
                <strong>Control &amp; Autonomy (Flexibility):</strong>
                <br />
                Users like Lily change their goals based on weather or activity. This control shouldn't be buried in
                settings; it needs to be an inline, editable widget.
              </span>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section className="section" {...fadeInUp}>
        <div className="section-header">
          <div className="pill">Design Approach &amp; Methodology</div>
        </div>
        <div className="section-body stack">
          <div className="stack">
            <h3 className="section-title">AI-Augmented Design Process</h3>
            <p className="muted">
              For this project, I adopted an <strong>AI-Augmented Design Framework</strong>. Instead of viewing AI merely as a content generator, I utilized ChatGPT (Agent Mode) and Figma Make as "collaborative partners" to stress-test my design decisions before they reached real users.
            </p>
            <p className="muted">
              My methodology followed a three-phase validation loop:
            </p>
            <div className="list">
              <div className="list-item">
                <span className="list-bullet" />
                <span><strong>Heuristic Evaluation:</strong> Combining AI automated inspection with human expert review.</span>
              </div>
              <div className="list-item">
                <span className="list-bullet" />
                <span><strong>Cognitive Walkthrough:</strong> Using AI to simulate user behavior, followed by real user testing.</span>
              </div>
              <div className="list-item">
                <span className="list-bullet" />
                <span><strong>Task-Centric Iteration:</strong> Refining the 5 core flows based on the combined insights.</span>
              </div>
            </div>
          </div>

          <div className="stack">
            <h3 className="section-title">1. Heuristic Evaluation: AI vs. Human Expert</h3>
            <p className="muted">
              I conducted a dual-layer Heuristic Evaluation using <strong>Nielsen’s 10 Usability Heuristics</strong>.
            </p>
            <div className="list">
              <div className="list-item">
                <span className="list-bullet" />
                <span><strong>AI Agent Role:</strong> I prompted ChatGPT to act as a strict usability auditor to identify structural inconsistencies and missing affordances.</span>
              </div>
              <div className="list-item">
                <span className="list-bullet" />
                <span><strong>Human Designer Role (Self):</strong> I evaluated the prototype based on realistic usage scenarios and context (e.g., "Is this flow actually annoying for a busy person?").</span>
              </div>
            </div>
            <p className="muted">
              <strong>Key Finding:</strong> AI was excellent at finding structural issues (e.g., "Inconsistent units: ml vs cups"), while I identified contextual friction (e.g., "The 'Success' screen blocks the user flow and requires an extra tap to dismiss").
            </p>
            <div className="image-grid">
              {[aiFindings1, aiFindings2].map((src, idx) => (
                <div className="image-card" key={src}>
                  <img src={src} alt={`AI vs human findings ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>

          <div className="stack">
            <h3 className="section-title">2. Cognitive Walkthrough: Simulation &amp; Verification</h3>
            <p className="muted">
              Before recruiting real participants, I used AI to perform a <strong>Simulated Cognitive Walkthrough</strong>. This allowed me to predict potential failure points in the "Happy Path."
            </p>
            <h4 className="section-subtitle">The Protocol</h4>
            <p className="muted">
              I defined 5 core tasks derived from the user research and asked the AI to simulate the persona "Lily Chen" going through them:
            </p>
            <div className="list">
              <div className="list-item">
                <span className="list-bullet" />
                <span><strong>Quick Log Water:</strong> Is the feedback immediate?</span>
              </div>
              <div className="list-item">
                <span className="list-bullet" />
                <span><strong>Adjust Daily Goal:</strong> Is the long-press interaction discoverable?</span>
              </div>
              <div className="list-item">
                <span className="list-bullet" />
                <span><strong>View Progress:</strong> Can the user understand "remaining goal" instantly?</span>
              </div>
              <div className="list-item">
                <span className="list-bullet" />
                <span><strong>Manage Reminders:</strong> Is the snooze function intuitive?</span>
              </div>
              <div className="list-item">
                <span className="list-bullet" />
                <span><strong>Review Trends:</strong> Are the charts interpretable?</span>
              </div>
            </div>
          </div>

          <div className="stack">
            <h3 className="section-title">3. Usability Testing with Real Users</h3>
            <p className="muted">
              Following the AI simulation, I conducted moderated usability testing with <strong>5 participants</strong> matching the target demographics (Tech-savvy, ages 26-34).
            </p>
            <p className="muted"><strong>Methodology:</strong></p>
            <div className="list">
              <div className="list-item">
                <span className="list-bullet" />
                <span><strong>Format:</strong> Remote Moderated Testing (Zoom + Screen Recording).</span>
              </div>
              <div className="list-item">
                <span className="list-bullet" />
                <span><strong>Technique:</strong> Think-Aloud Protocol.</span>
              </div>
              <div className="list-item">
                <span className="list-bullet" />
                <span><strong>Data Collection:</strong> Task Completion Rate, Time on Task, and Error Rate.</span>
              </div>
            </div>
            <p className="muted">
              <strong>Validation of AI Predictions:</strong> The real user testing confirmed 100% of the major severity issues predicted by the AI (such as the low discoverability of the "Goal Adjustment" feature). However, real users revealed emotional nuances (e.g., frustration, hesitation duration) that the AI failed to capture.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section id="early-design" className="section" {...fadeInUp}>
        <div className="section-header">
          <div className="pill">Early Design &amp; Iteration</div>
        </div>
        <div className="section-body stack">
          <div className="stack">
            <h3 className="section-title">From AI Wireframes to High-Fidelity</h3>
            <p className="muted">
              The design process began with <strong>Low-Fidelity Wireframes</strong> generated using Figma Make. I used specific prompts
              to establish the layout for the 5 core tasks. While AI provided a solid structural foundation, the initial heuristic
              evaluation and self-assessment revealed critical usability gaps that required human intervention.
            </p>
            <div className="image-grid wireframes-grid">
              {[wire1, wire2, wire3, wire4, wire5].map((src, idx) => (
                <div className="image-card" key={src}>
                  <img src={src} alt={`Early wireframe ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>

          <div className="stack">
            <h3 id="design-decisions" className="section-title">Key Design Decisions (Before vs. After)</h3>

            <div className="task-block">
              <h4 className="section-title">1. Optimizing the "Quick Log" Flow (Task 1)</h4>
              <div className="list">
                <div className="list-item">
                  <span className="list-bullet" />
                  <span><strong>The Problem:</strong> In the initial prototype, after logging water, the system redirected users to a separate "Success" screen that required a manual "Back to Home" tap. This added unnecessary friction to a task meant to be "one tap."</span>
                </div>
                <div className="list-item">
                  <span className="list-bullet" />
                  <span><strong>The Solution:</strong> Replaced the redirection with a lightweight <strong>Auto-Dismissing Toast</strong> message ("+250 ml added"). This keeps the user on the dashboard and reinforces the "speed" value proposition.</span>
                </div>
              </div>
              <div className="comparison-grid">
                <div className="image-card">
                  <img src={task1Old} alt="Quick log flow old version" />
                </div>
                <div className="image-card">
                  <img src={task1New} alt="Quick log flow redesigned version" />
                </div>
              </div>
            </div>

            <div className="task-block">
              <h4 className="section-title">2. Enhancing Goal Adjustment Feedback (Task 2)</h4>
              <div className="list">
                <div className="list-item">
                  <span className="list-bullet" />
                  <span><strong>The Problem:</strong> Users could adjust the goal using a slider, but tapping "Save" simply returned them to the previous screen without clear confirmation.</span>
                </div>
                <div className="list-item">
                  <span className="list-bullet" />
                  <span><strong>The Solution:</strong> Introduced an <strong>"Updated Successfully" overlay</strong> that appears immediately after saving, followed by an automatic transition back to the home screen.</span>
                </div>
              </div>
              <div className="comparison-grid">
                <div className="image-card">
                  <img src={task2Old} alt="Goal adjustment old version" />
                </div>
                <div className="image-card">
                  <img src={task2New} alt="Goal adjustment redesigned version" />
                </div>
              </div>
            </div>

            <div className="task-block">
              <h4 className="section-title">3. Clarifying Data Visualization (Task 3 &amp; 5)</h4>
              <div className="list">
                <div className="list-item">
                  <span className="list-bullet" />
                  <span><strong>The Problem:</strong> The initial progress charts were visually pleasing but ambiguous. Users couldn't tell exactly how much water was "remaining" or the specific values of past days.</span>
                </div>
                <div className="list-item">
                  <span className="list-bullet" />
                  <span><strong>The Solution:</strong> Added a clear text label: <strong>"Remaining: 1250 ml"</strong> aligned with the empty portion of the ring, and implemented <strong>Interactive States</strong> so users can tap bars or data points to see exact volumes.</span>
                </div>
              </div>
              <div className="comparison-grid">
                <div className="image-card">
                  <img src={task35Old1} alt="Progress visualization old version 1" />
                </div>
                <div className="image-card">
                  <img src={task35New1} alt="Progress visualization new version 1" />
                </div>
                <div className="image-card">
                  <img src={task35Old2} alt="Progress visualization old version 2" />
                </div>
                <div className="image-card">
                  <img src={task35New2} alt="Progress visualization new version 2" />
                </div>
              </div>
            </div>

            <div className="task-block">
              <h4 className="section-title">4. Improving Accessibility in Settings (Task 4)</h4>
              <div className="list">
                <div className="list-item">
                  <span className="list-bullet" />
                  <span><strong>The Problem:</strong> The "Reminders" toggle relied solely on color (Blue vs. Gray) to indicate status, failing accessibility heuristics for color-blind users.</span>
                </div>
                <div className="list-item">
                  <span className="list-bullet" />
                  <span><strong>The Solution:</strong> Redesigned the toggles to include explicit <strong>"On / Off"</strong> text labels that appear dynamically when switched, plus one-sentence descriptions under each option to explain what "Smart Suggestions" do.</span>
                </div>
              </div>
              <div className="comparison-grid">
                <div className="image-card">
                  <img src={task4Old} alt="Reminder toggle old version" />
                </div>
                <div className="image-card">
                  <img src={task4New} alt="Reminder toggle redesigned version" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section id="solution-overview" className="section" {...fadeInUp}>
        <div className="section-header">
          <div className="pill">Usability Testing Insights &amp; Impact</div>
        </div>
        <div className="section-body stack">
          <div className="stack">
            <h3 className="section-title">Testing Overview</h3>
            <p className="muted">
              Following the cognitive walkthrough, I conducted a <strong>Summative Usability Test</strong> with <strong>5 participants</strong> (Remote, Moderated) to validate the high-fidelity prototype. The participants matched the target persona (Tech-savvy, ages 20–40).
            </p>
            <div className="list">
              <div className="list-item">
                <span className="list-bullet" />
                <span><strong>Completion Rate:</strong> 92% (Weighted Average)</span>
              </div>
              <div className="list-item">
                <span className="list-bullet" />
                <span><strong>Avg. System Usability Score (SUS):</strong> 9.0 / 10</span>
              </div>
              <div className="list-item">
                <span className="list-bullet" />
                <span><strong>Key Methodology:</strong> Measured task time, error rates, and analyzed verbatim feedback using Dovetail and AI-assisted sentiment analysis.</span>
              </div>
            </div>
          </div>

          <div className="stack">
            <h3 className="section-title">Key Insight 1: The "Feedback Gap" in Quick Logging</h3>
            <p className="muted">
              <strong>The Problem:</strong> While the "Quick Log" button was easy to find, participants hesitated immediately after tapping it. They weren't sure if the system had registered their action because the prototype lacked immediate visual confirmation.
            </p>
            <div className="quote-block">
              <p>
                "I click this... It seems I cannot... it's just 250 milliliters. Did this work? Am I supposed to see something?" — Chris (P1)
              </p>
            </div>
            <div className="image-grid insights-grid">
              <div className="image-card">
                <img src={task1Transcript} alt="Task 1 transcript" />
              </div>
            </div>
            <p className="muted">
              <strong>Impact on Design:</strong> This finding highlighted a violation of the <strong>Visibility of System Status</strong> heuristic.
            </p>
            <div className="list">
              <div className="list-item">
                <span className="list-bullet" />
                <span><strong>Design Fix:</strong> Implemented a <strong>"Toast Message"</strong> (e.g., "Water Logged! +250ml") that appears for 1.5 seconds immediately after logging to provide instant reassurance.</span>
              </div>
            </div>
            <div className="image-grid insights-grid">
              <div className="image-card">
                <img src={task1Impact} alt="Task 1 impact visual" />
              </div>
            </div>
          </div>

          <div className="stack">
            <h3 className="section-title">Key Insight 2: Ambiguity in Data Visualization</h3>
            <p className="muted">
              <strong>The Problem:</strong> The most critical usability friction occurred in the "Trends" section (Task 5). Participants struggled to differentiate between the "Daily" and "Weekly" charts because they looked visually identical and lacked descriptive headers.
            </p>
            <div className="quote-block">
              <p>
                "Daily and weekly view… I’m not sure what’s the difference between these two. They look the same to me." — Chris (P1) &amp; Xueyao (P2)
              </p>
            </div>
            <div className="image-grid insights-grid">
              <div className="image-card">
                <img src={task5Transcript} alt="Task 5 transcript" />
              </div>
            </div>
            <p className="muted">
              <strong>Impact on Design:</strong> Analysis showed that 75% of all recorded errors were related to chart interpretation.
            </p>
            <div className="list">
              <div className="list-item">
                <span className="list-bullet" />
                <span><strong>Design Fix:</strong> Redesigned the charts to use distinct visual models: a <strong>Wave/Ring chart</strong> for Daily progress and a <strong>Bar Chart</strong> for Weekly trends, with explicit headers like "Today's Hourly Breakdown" vs. "Last 7 Days".</span>
              </div>
            </div>
            <div className="image-grid insights-grid">
              <div className="image-card">
                <img src={task5Impact} alt="Task 5 impact visual" />
              </div>
            </div>
          </div>

          <div className="stack">
            <h3 className="section-title">Key Insight 3: Discoverability of Settings</h3>
            <p className="muted">
              <strong>The Problem:</strong> While expert users like Andy found settings easily, others like Alex experienced friction. They initially scanned the Home screen for reminders, not realizing they were nested under "Profile."
            </p>
            <div className="quote-block">
              <p>
                "I feel like I only have the home page. But when you start the fourth task, I found out that oh, the navigation actually works... found the setting part so it become easier." — Alex (P5)
        </p>
      </div>
            <div className="image-grid insights-grid">
              <div className="image-card">
                <img src={task4Transcript} alt="Task 4 transcript" />
              </div>
            </div>
            <p className="muted">
              <strong>Impact on Design:</strong>
            </p>
            <div className="list">
              <div className="list-item">
                <span className="list-bullet" />
                <span><strong>Design Fix:</strong> Added a <strong>Bell Icon</strong> shortcut directly on the Home Screen top navigation, offering a direct path to Reminder Settings without digging into the Profile menu.</span>
              </div>
            </div>
            <div className="image-grid insights-grid">
              <div className="image-card">
                <img src={task4Impact} alt="Task 4 impact visual" />
              </div>
            </div>
          </div>

          <div className="stack">
            <h3 className="section-title">Quantitative Findings &amp; AI Analysis</h3>
            <p className="muted">
              To objectively measure these insights, I used AI to aggregate error rates and completion times across all 5 participants.
            </p>
            <div className="list">
              <div className="list-item">
                <span className="list-bullet" />
                <span><strong>Efficiency:</strong> Task 3 (View Progress) was the fastest (~23s), confirming the dashboard's clarity.</span>
              </div>
              <div className="list-item">
                <span className="list-bullet" />
                <span><strong>Friction:</strong> Task 5 (Trends) had the highest error rate, validating the need for the chart redesign mentioned above.</span>
              </div>
            </div>
            <div className="image-grid insights-grid">
              {[aiImpact1, aiImpact2, aiImpact3].map((src, idx) => (
                <div className="image-card" key={src}>
                  <img src={src} alt={`AI impact chart ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section className="section" {...fadeInUp}>
        <div className="section-header">
          <div className="pill">Solution Overview: The Final Product</div>
        </div>
        <div className="section-body stack">
          <div className="stack">
            <h3 id="high-fidelity" className="section-title">High-Fidelity Prototype Demo</h3>
            <p className="muted">
              After rigorous testing and iteration, the final design of Hydration App 2.0 transforms the hydration tracking experience into a seamless, 3-second micro-habit. The interface prioritizes <strong>speed, clarity, and system feedback</strong>, directly addressing the pain points identified in the research phase.
            </p>
            <div className="video-grid">
              <div className="video-card">
                <p className="muted"><strong>Before Prototype Video Demo:</strong></p>
                <div className="youtube-iframe-container">
                  <iframe
                    src={YOUTUBE_VIDEO_BEFORE}
                    title="Before Prototype Video Demo"
                    style={{ border: 'none' }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="youtube-embed"
                  />
                </div>
              </div>
              <div className="video-card">
                <p className="muted"><strong>Redesigned Prototype Video Demo:</strong></p>
                <div className="youtube-iframe-container">
                  <iframe
                    src={YOUTUBE_VIDEO_REDESIGNED}
                    title="Redesigned Prototype Video Demo"
                    style={{ border: 'none' }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="youtube-embed"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="stack">
            <h3 id="solution-features" className="section-title">Key Features &amp; Interaction Highlights</h3>

            <div className="task-block">
              <h4 className="section-title">1. Effortless Quick Logging (Task 1)</h4>
              <p className="muted">
                To reduce the interaction cost, I replaced the static button with a dynamic <strong>Floating Action Button (FAB)</strong>.
              </p>
              <div className="list">
                <div className="list-item">
                  <span className="list-bullet" />
                  <span><strong>Action:</strong> One tap opens a quick-select overlay for common volumes.</span>
                </div>
                <div className="list-item">
                  <span className="list-bullet" />
                  <span><strong>Feedback:</strong> A "Water Logged!" toast message appears instantly, confirming the action without blocking the user flow.</span>
                </div>
                <div className="list-item">
                  <span className="list-bullet" />
                  <span><strong>Result:</strong> Reduced task completion time to <strong>&lt; 3 seconds</strong> with zero hesitation in final testing.</span>
                </div>
              </div>
            </div>

            <div className="task-block">
              <h4 className="section-title">2. Clarity in Data Visualization (Task 3 &amp; 5)</h4>
              <p className="muted">
                Data is only useful if it's interpretable. I redesigned the visualization strategy to prevent cognitive overload.
              </p>
              <div className="list">
                <div className="list-item">
                  <span className="list-bullet" />
                  <span><strong>Today’s View:</strong> Uses a <strong>Ring Chart</strong> with a clear text indicator: "Remaining: 1250 ml".</span>
                </div>
                <div className="list-item">
                  <span className="list-bullet" />
                  <span><strong>Trend View:</strong> Uses a distinct <strong>Bar Chart</strong> for weekly data with explicit headers ("Last 7 Days"). Interactive tooltips allow users to tap specific bars for precise intake numbers.</span>
                </div>
              </div>
            </div>

            <div className="task-block">
              <h4 className="section-title">3. Smart &amp; Discoverable Reminders (Task 4)</h4>
              <p className="muted">
                Discoverability was a major friction point in early testing. The final design introduces a <strong>dual-entry path</strong>:
              </p>
              <div className="list">
                <div className="list-item">
                  <span className="list-bullet" />
                  <span><strong>Shortcut:</strong> A prominent <strong>Bell Icon</strong> on the Home dashboard for instant access.</span>
                </div>
                <div className="list-item">
                  <span className="list-bullet" />
                  <span><strong>Profile Integration:</strong> A clear "Notifications" tab within settings.</span>
                </div>
                <div className="list-item">
                  <span className="list-bullet" />
                  <span><strong>Outcome:</strong> Users in the final test found reminder settings with <strong>100% success rate</strong>.</span>
                </div>
              </div>
            </div>

            <div className="task-block">
              <h4 className="section-title">4. Detailed History &amp; Calendar (New Feature)</h4>
              <p className="muted">
                Based on user feedback requesting deeper data access, I added a dedicated <strong>History Log</strong>.
              </p>
              <div className="list">
                <div className="list-item">
                  <span className="list-bullet" />
                  <span><strong>Calendar Interaction:</strong> Users can tap a calendar icon to select past dates and view a detailed log of that specific day.</span>
                </div>
                <div className="list-item">
                  <span className="list-bullet" />
                  <span><strong>Impact:</strong> Bridges the gap between "daily snapshots" and "long-term tracking."</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section id="outcome-impact" className="section" {...fadeInUp}>
        <div className="section-header">
          <div className="pill">Outcome &amp; Impact</div>
        </div>
        <div className="section-body stack">
          <div className="stack">
            <h3 className="section-title">Quantitative Results: Validating the Redesign</h3>
            <p className="muted">
              To measure the effectiveness of the final high-fidelity prototype, I conducted a summative usability test with 5 participants. Using <strong>AI-assisted data analysis</strong> (Python &amp; ChatGPT), I aggregated the performance metrics to generate an objective "Usability Score."
            </p>
            <p className="muted">
              The results indicate a highly usable product that successfully resolved the initial friction points:
            </p>
            <div className="list">
              <div className="list-item">
                <span className="list-bullet" />
                <span><strong>Overall Usability Score:</strong> 9.0 / 10 (Excellent)</span>
              </div>
              <div className="list-item">
                <span className="list-bullet" />
                <span><strong>Task Success Rate:</strong> 92% (Weighted Average)</span>
              </div>
              <div className="list-item">
                <span className="list-bullet" />
                <span><strong>User Satisfaction:</strong> 4.5 / 5.0</span>
              </div>
            </div>
          </div>

          <div className="stack">
            <h3 className="section-title">AI-Generated Data Visualizations</h3>
            <h4 className="section-subtitle">1. Task Efficiency (Time on Task)</h4>
            <p className="muted">
              The analysis revealed that <strong>Viewing Progress (Task 3)</strong> was the most efficient task, taking an average of only <strong>23.4 seconds</strong>. This confirms that the redesigned "Ring Chart" successfully communicates status at a glance.
            </p>
            <div className="image-grid insights-grid">
              <div className="image-card chart-card">
                <img src={aiImpact2} alt="AI impact chart 2 - task efficiency" />
              </div>
            </div>

            <h4 className="section-subtitle">2. Error Distribution Analysis</h4>
            <p className="muted">
              AI analysis highlighted that <strong>75% of recorded errors</strong> were related to <strong>"Chart Interpretation"</strong> (Task 5). This quantitative insight drove the decision to add explicit headers ("Today's Hourly Breakdown") rather than only changing colors.
            </p>
            <div className="image-grid insights-grid">
              <div className="image-card chart-card">
                <img src={aiImpact1} alt="AI impact chart 1 - error distribution" />
              </div>
            </div>
          </div>

          <div className="stack">
            <h3 className="section-title">Qualitative Feedback: The User Voice</h3>
            <div className="quote-block">
              <p>"This app is very easy to use… I only take a few seconds to finish each task. The tab names are very intuitive." — Xueyao (Participant 2), Expert User</p>
            </div>
            <div className="quote-block">
              <p>"Very concise and intuitive… everything I need… no advertisements… intuitive to navigate." — Chris (Participant 1)</p>
            </div>
            <div className="quote-block">
              <p>"Overall Experience: 10/10." — Andy (Participant 4)</p>
            </div>
          </div>

          <div className="stack">
            <h3 className="section-title">Final Impact Summary</h3>
            <div className="list">
              <div className="list-item">
                <span className="list-bullet" />
                <span><strong>Reduced Cognitive Load:</strong> Simplified data visualization to prevent interpretation errors.</span>
              </div>
              <div className="list-item">
                <span className="list-bullet" />
                <span><strong>Increased Efficiency:</strong> Achieved a sub-30 second completion time for primary monitoring tasks.</span>
              </div>
              <div className="list-item">
                <span className="list-bullet" />
                <span><strong>Enhanced Confidence:</strong> The "Toast Feedback" system resolved hesitation during logging.</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section id="key-takeaways" className="section" {...fadeInUp}>
        <div className="section-header">
          <div className="pill">Key Takeaways &amp; Future Steps</div>
        </div>
        <div className="section-body stack">
          <div className="stack">
            <h3 className="section-title">Reflections on the AI-Augmented Process</h3>
            <div className="list">
              <div className="list-item">
                <span className="list-bullet" />
                <span><strong>AI is a Catalyst, Not a Pilot:</strong> AI tools accelerated the "blank page" phase and flagged structural issues, but missed emotional nuances of user friction.</span>
              </div>
              <div className="list-item">
                <span className="list-bullet" />
                <span><strong>The "Feedback Gap" Lesson:</strong> The biggest usability finding underscored that speed is meaningless without immediate confirmation.</span>
              </div>
              <div className="list-item">
                <span className="list-bullet" />
                <span><strong>Visualization Requires Context:</strong> Confusion between "Daily" and "Weekly" views reinforced the need for explicit labeling over minimalist design.</span>
              </div>
            </div>
          </div>

          <div className="stack">
            <h3 className="section-title">Future Design Improvements (Phase 2 Roadmap)</h3>
            <div className="list">
              <div className="list-item">
                <span className="list-bullet" />
                <span><strong>Wearable Integration (Watch OS):</strong> One-tap complication on the watch face for effortless logging without unlocking the phone.</span>
              </div>
              <div className="list-item">
                <span className="list-bullet" />
                <span><strong>Social Challenges &amp; Gamification:</strong> Hydration Streaks and Team Challenges to sustain motivation.</span>
              </div>
              <div className="list-item">
                <span className="list-bullet" />
                <span><strong>Voice Interaction Model:</strong> Voice commands like "Log a cup of water" for hands-busy scenarios.</span>
              </div>
              <div className="list-item">
                <span className="list-bullet" />
                <span><strong>Advanced AI Coaching:</strong> An LLM-driven "Hydration Coach" offering personalized insights and reminders.</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section id="ai-reflections" className="section" {...fadeInUp}>
        <div className="section-header">
          <div className="pill">AI Tools &amp; Effectiveness Reflections</div>
        </div>
        <div className="section-body stack">
          <div className="stack">
            <h3 className="section-title">The AI Tool Stack</h3>
            <p className="muted">
              Throughout this project, I integrated a diverse stack of Generative AI tools to act as a "force multiplier," enhancing efficiency across research, design, and testing phases.
            </p>
            <div className="table-card">
              <table className="table">
                <thead>
                  <tr>
                    <th>Phase</th>
                    <th>AI Tool Used</th>
                    <th>Key Application</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Research</strong></td>
                    <td><a href="http://otter.ai/" target="_blank" rel="noreferrer">Otter.ai</a> / Dovetail</td>
                    <td>Transcribed user interviews and extracted raw text for analysis.</td>
                  </tr>
                  <tr>
                    <td><strong>Analysis</strong></td>
                    <td>ChatGPT (Data Analyst)</td>
                    <td>Structured unstructured transcripts into CSVs; calculated success rates and error counts.</td>
                  </tr>
                  <tr>
                    <td><strong>Design</strong></td>
                    <td>Figma Make (AI)</td>
                    <td>Generated initial low-fidelity wireframes and layout structures based on text prompts.</td>
                  </tr>
                  <tr>
                    <td><strong>Prompt Engineering</strong></td>
                    <td>Gemini Pro; ChatGPT Pro</td>
                    <td>Crafted and iterated prompts to generate consistent wireframes, flows, and copy.</td>
                  </tr>
                  <tr>
                    <td><strong>Visualization</strong></td>
                    <td>Python (via ChatGPT)</td>
                    <td>Generated statistical charts (Bar, Pie) to visualize usability error distributions.</td>
                  </tr>
                  <tr>
                    <td><strong>Evaluation</strong></td>
                    <td>ChatGPT (Agent Mode)</td>
                    <td>Conducted automated heuristic evaluations to identify structural usability violations.</td>
                  </tr>
                  <tr>
                    <td><strong>Build &amp; Delivery</strong></td>
                    <td>Cursor (Vite + React)</td>
                    <td>Built and deployed the portfolio web experience; ensured SPA performance and DX.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="stack">
            <h3 className="section-title">Reflections on AI Effectiveness</h3>

            <div className="task-block">
              <h4 className="section-title">1. AI as an Objective Data Analyst</h4>
              <p className="muted">
                One of the most powerful applications of AI was in removing observer bias from usability scoring.
              </p>
              <div className="list">
                <div className="list-item">
                  <span className="list-bullet" />
                  <span><strong>Impact:</strong> Instead of manually calculating metrics, AI parsed timestamps and error logs, surfacing that 75% of errors were related to Chart Clarity—a pattern that might have been underestimated without strict categorization.</span>
                </div>
                <div className="list-item">
                  <span className="list-bullet" />
                  <span><strong>Efficiency:</strong> Tasks like timestamp extraction, which typically take hours, were completed in minutes, freeing up time for strategic design thinking.</span>
                </div>
              </div>
            </div>

            <div className="task-block">
              <h4 className="section-title">2. The "Completeness" Bias (AI vs. Human Judgment)</h4>
              <p className="muted">
                Comparing AI's heuristic evaluation with my own revealed a critical limitation: <strong>Context Awareness</strong>.
              </p>
              <div className="list">
                <div className="list-item">
                  <span className="list-bullet" />
                  <span><strong>The Limitation:</strong> AI agents evaluated the prototype as if it were production-ready, flagging prototype gaps (e.g., dead links) as critical usability errors.</span>
                </div>
                <div className="list-item">
                  <span className="list-bullet" />
                  <span><strong>The Human Role:</strong> A human-in-the-loop filtered these false positives, recognizing prototype constraints versus true UX failures.</span>
                </div>
              </div>
            </div>

            <div className="task-block">
              <h4 className="section-title">3. Prompt Engineering as a Design Skill</h4>
              <p className="muted">
                Using Figma Make showed that precision drives consistency. Early generic prompts produced unusable layouts. By iterating with constraints like "monochrome," "stack vertically," and "do not simulate interactions," the AI generated copy-ready wireframes that fit the workflow.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default App
