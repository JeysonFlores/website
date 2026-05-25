import { FileText, ExternalLink } from "lucide-react"
import type { Publication } from "@/types/researcher"

interface PublicationsSectionProps {
  publications: Publication[]
  authorName: string
}

function highlightAuthor(authors: string[], authorName: string) {
  return authors.map((author, index) => {
    const isHighlighted = authorName.toLowerCase().includes(author.split(" ")[0].toLowerCase()) ||
      author.toLowerCase().includes(authorName.split(" ")[0].toLowerCase())
    
    return (
      <span key={index}>
        {isHighlighted ? (
          <span className="font-semibold text-foreground">{author}</span>
        ) : (
          <span>{author}</span>
        )}
        {index < authors.length - 1 && ", "}
      </span>
    )
  })
}

export function PublicationsSection({ publications, authorName }: PublicationsSectionProps) {
  if (!publications || publications.length === 0) {
    return null
  }

  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <FileText className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold tracking-tight">Publications</h2>
      </div>
      
      <div className="space-y-5">
        {publications.map((pub, index) => (
          <article 
            key={index}
            className="group p-4 -mx-4 rounded-lg hover:bg-muted/50 transition-colors"
          >
            <div className="space-y-2">
              <h3 className="font-medium text-foreground leading-snug group-hover:text-primary transition-colors">
                {pub.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {highlightAuthor(pub.authors, authorName)}
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary font-medium hover:underline transition-colors"
                >
                  {pub.magazine}
                  <ExternalLink className="h-3 w-3" />
                </a>
                {pub.published_date && (
                  <span className="text-muted-foreground">({pub.published_date})</span>
                )}
                {pub.volume && (
                  <span className="text-muted-foreground">Vol. {pub.volume}</span>
                )}
                {pub.page && (
                  <span className="text-muted-foreground">pp. {pub.page}</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
