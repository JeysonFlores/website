export interface ResearcherData {
  name: string
  short_name: string
  preferred_name: string
  preferred_last_name: string
  personal_data: {
    contact: {
      email: string
      github?: {
        username: string
        url: string
      }
      linkedin: {
        url: string
      }
    }
    location: {
      city: string
      state?: string
      region?: string
      country: string
      postal_code?: string
    }
  }
  interests?: string[]
  work_experience: WorkExperience[]
  education: Education[]
  publications?: Publication[]
}

export interface WorkExperience {
  company: {
    name: string
    website?: string
  }
  position: {
    title: string
    department?: string
    mode?: string
  }
  location: string
  start_date: string
  end_date: string | null
  tasks?: string[]
  technologies?: string[]
}

export interface Education {
  institution: {
    name: string
    website?: string
  }
  degree: string
  field_of_study: string
  start_year: string
  end_year: string | null
  location: {
    city: string
    state?: string
    region?: string
    country: string
  }
}

export interface Publication {
  title: string
  authors: string[]
  magazine: string
  link: string
  volume?: number
  page?: string
  published_date?: number
}
