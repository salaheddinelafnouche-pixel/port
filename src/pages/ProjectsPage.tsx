import React, { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectQuickViewModal } from '../components/ProjectQuickViewModal';
import { Reveal, RevealStagger } from '../components/Reveal';
import { ContactSection } from '../components/ContactSection';
import { PROJECTS, type Project } from '../data/projects';

export const ProjectsPage: React.FC = () => {
  const [quickViewProject, setQuickViewProject] = useState<Project | null>(null);

  return (
    <main id="main" className="projects-page-wrapper">
      {/* Page Hero Section */}
      <section className="page-hero section hero-portfolio-adapted" aria-labelledby="page-heading">
        <div className="container">
          <div className="page-hero-header">
            <Reveal as="p" className="section-label">
              <span className="label-accent-dot" aria-hidden="true"></span>
              FEATURED CASE STUDIES
            </Reveal>

            <Reveal as="h1" id="page-heading" className="page-title">
              Designing for human friction &amp; <span className="text-highlight">measurable impact</span>.
            </Reveal>

            <Reveal as="p" className="page-intro">
              0-to-1 systems built from user research to WCAG 2.1 AA design standards.
            </Reveal>
          </div>


        </div>
      </section>

      {/* Main Case Studies Grid Section */}
      <section className="projects-section section" aria-label="Project case studies">
        <div className="section-watermark" aria-hidden="true">§ 01</div>
        <div className="container">
          {/* Projects Grid */}
          <RevealStagger as="ul" className="projects-grid" role="list">
            {PROJECTS.map((proj) => (
              <ProjectCard
                key={proj.id}
                {...proj}
                onQuickView={() => setQuickViewProject(proj)}
              />
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection
        sectionLabel="Work With Me"
        title="Got a project?"
        desc="If something I've built resonates with what you need, let's talk about how we can build something exceptional together."
        sectionId="projects-contact"
      />

      {/* Quick View Modal */}
      <ProjectQuickViewModal
        project={quickViewProject}
        onClose={() => setQuickViewProject(null)}
      />
    </main>
  );
};

export default ProjectsPage;
