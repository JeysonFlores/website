import { GraduationCap, ExternalLink } from "lucide-react"
import type { Education } from "@/types/researcher"

interface EducationSectionProps {
  education: Education[]
}

export function EducationSection({ education }: EducationSectionProps) {
  const formatYears = (start: string, end: string | null) => {
    return end ? `${start} - ${end}` : `${start} - Present`
  }

  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <GraduationCap className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold tracking-tight">Education</h2>
      </div>
      
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div 
            key={index}
            className="relative pl-6 border-l-2 border-border hover:border-primary/50 transition-colors"
          >
            <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-primary" />
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="font-medium text-foreground">{edu.degree}</h3>
                <span className="text-sm text-muted-foreground">
                  {formatYears(edu.start_year, edu.end_year)}
                </span>
              </div>
              <p className="text-sm text-primary">
                {edu.institution.website ? (
                  <a 
                    href={edu.institution.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:underline"
                  >
                    {edu.institution.name}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  edu.institution.name
                )}
              </p>
              <p className="text-sm text-muted-foreground">
                {edu.field_of_study}
              </p>
              <p className="text-sm text-muted-foreground/70">
                {edu.location.city}, {edu.location.state || edu.location.region}, {edu.location.country}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
