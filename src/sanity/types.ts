export interface SanityImage {
  _type: 'image'
  asset: { _ref: string; _type: 'reference' }
  hotspot?: { x: number; y: number; width: number; height: number }
  alt?: string
}

export interface Opportunity {
  _id: string
  title: string
  type: string
  status: 'Active' | 'Pipeline'
  location?: string
  description?: string
  featured?: boolean
  order?: number
}

export interface Development {
  _id: string
  title: string
  typeBadge: string
  statusBadge?: string
  location?: string
  description: string
  bulletPoints?: string[]
  image?: SanityImage
  featured?: boolean
  order?: number
}

export interface OfficeLocation {
  city: string
  country: string
}

export interface SiteSettings {
  _id: string
  phone?: string
  email?: string
  officeLocations?: OfficeLocation[]
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: string
}

export interface TeamMember {
  _id: string
  name: string
  jobTitle?: string
  credentials?: string
  bio?: Array<{ _key: string; children: Array<{ text: string }> }>
  image?: SanityImage
  order?: number
}

export interface OpportunityType {
  _id: string
  title: string
  image: SanityImage
  order?: number
}
