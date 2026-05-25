import Image from "next/image"
import { Linkedin, Mail, Github, MapPin } from "lucide-react"
import type { ResearcherData } from "@/types/researcher"

interface ProfileSectionProps {
  data: ResearcherData
}

export function ProfileSection({ data }: ProfileSectionProps) {
  const { name, personal_data } = data
  const { contact, location } = personal_data

  // Format email for display (convert [at] and [dot] to actual symbols for mailto)
  const emailDisplay = contact.email
  const emailHref = contact.email.replace(" [at] ", "@").replace(" [dot] ", ".")

  return (
    <section className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
      <div className="relative shrink-0">
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden bg-muted border-2 border-border">
          <Image
            src="/profile.jpg"
            alt={name}
            width={192}
            height={192}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
      
      <div className="flex-1 space-y-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            {name}
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Software Engineer
          </p>
        </div>
        
        <div className="flex flex-col gap-3 text-sm">
          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{location.city}, {location.state || location.region}, {location.country}</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-primary" />
            <a 
              href={`mailto:${emailHref}`} 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {emailDisplay}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Linkedin className="h-4 w-4 text-primary" />
            <a 
              href={contact.linkedin.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          </div>
          {contact.github && (
            <div className="flex items-center gap-3">
              <Github className="h-4 w-4 text-primary" />
              <a 
                href={contact.github.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {contact.github.username}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
