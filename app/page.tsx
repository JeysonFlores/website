import { ThemeToggle } from "@/components/theme-toggle"
import { ProfileSection } from "@/components/profile-section"
import { EducationSection } from "@/components/education-section"
import { ExperienceSection } from "@/components/experience-section"
import { PublicationsSection } from "@/components/publications-section"
import researcherData from "@/data/me.json"
import type { ResearcherData } from "@/types/researcher"

const data = researcherData as ResearcherData

export default function ResearcherPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground">
            {data.short_name}
          </span>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <div className="space-y-16 md:space-y-20">
          {/* Profile Section */}
          <ProfileSection data={data} />

          {/* Divider */}
          <hr className="border-border" />

          {/* Education Section */}
          <EducationSection education={data.education} />

          {/* Divider */}
          <hr className="border-border" />

          {/* Experience Section */}
          <ExperienceSection experience={data.work_experience} />

          {/* Publications Section - Only shows if data exists */}
          {data.publications && data.publications.length > 0 && (
            <>
              <hr className="border-border" />
              <PublicationsSection publications={data.publications} authorName={data.name} />
            </>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} {data.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
