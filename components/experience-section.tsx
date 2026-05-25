import { Briefcase, ExternalLink } from "lucide-react"
import type { WorkExperience } from "@/types/researcher"

interface ExperienceSectionProps {
  experience: WorkExperience[]
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  const formatDate = (dateStr: string) => {
    const [day, month, year] = dateStr.split("-")
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" })
  }

  const formatPeriod = (start: string, end: string | null) => {
    const startFormatted = formatDate(start)
    return end ? `${startFormatted} - ${formatDate(end)}` : `${startFormatted} - Present`
  }

  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <Briefcase className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold tracking-tight">Experience</h2>
      </div>
      
      <div className="space-y-8">
        {experience.map((exp, index) => (
          <div 
            key={index}
            className="relative pl-6 border-l-2 border-border hover:border-primary/50 transition-colors"
          >
            <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-primary" />
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="font-medium text-foreground">{exp.position.title}</h3>
                <span className="text-sm text-muted-foreground">
                  {formatPeriod(exp.start_date, exp.end_date)}
                </span>
              </div>
              <p className="text-sm text-primary">
                {exp.company.website ? (
                  <a 
                    href={exp.company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:underline"
                  >
                    {exp.company.name}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  exp.company.name
                )}
                {exp.position.department && (
                  <span className="text-muted-foreground"> · {exp.position.department}</span>
                )}
              </p>
              <p className="text-sm text-muted-foreground">
                {exp.location} · {exp.position.mode}
              </p>
              
              {exp.tasks && exp.tasks.length > 0 && (
                <ul className="mt-3 space-y-1.5 text-sm text-foreground/80">
                  {exp.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex gap-2">
                      <span className="text-primary mt-1.5 shrink-0">-</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
