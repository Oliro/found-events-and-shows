export interface TicketMaster {
    _embedded: Embedded
    _links: Links2
    page: Page
  }
  
  export interface Embedded {
    attractions: Attraction[]
  }
  
  export interface Attraction {
    name: string
    type: string
    id: string
    test: boolean
    url?: string
    locale: string
    images: Image[]
    classifications: Classification[]
    upcomingEvents: UpcomingEvents
    _links: Links
    externalLinks?: ExternalLinks
  }
  
  export interface Image {
    ratio: string
    url: string
    width: number
    height: number
    fallback: boolean
  }
  
  export interface Classification {
    primary: boolean
    segment: Segment
    genre?: Genre
    subGenre?: SubGenre
    type?: Type
    subType?: SubType
    family: boolean
  }
  
  export interface Segment {
    id: string
    name: string
  }
  
  export interface Genre {
    id: string
    name: string
  }
  
  export interface SubGenre {
    id: string
    name: string
  }
  
  export interface Type {
    id: string
    name: string
  }
  
  export interface SubType {
    id: string
    name: string
  }
  
  export interface UpcomingEvents {
    ticketmaster?: number
    _total: number
    _filtered: number
    "mfx-no"?: number
    "mfx-de"?: number
    "mfx-dk"?: number
    "mfx-be"?: number
    "mfx-fi"?: number
    ticketweb?: number
    "wts-tr"?: number
  }
  
  export interface Links {
    self: Self
  }
  
  export interface Self {
    href: string
  }
  
  export interface ExternalLinks {
    facebook: Facebook[]
    youtube?: Youtube[]
    twitter?: Twitter[]
    instagram?: Instagram[]
    musicbrainz?: Musicbrainz[]
    homepage?: Homepage[]
  }
  
  export interface Facebook {
    url: string
  }
  
  export interface Youtube {
    url: string
  }
  
  export interface Twitter {
    url: string
  }
  
  export interface Instagram {
    url: string
  }
  
  export interface Musicbrainz {
    id: string
  }
  
  export interface Homepage {
    url: string
  }
  
  export interface Links2 {
    first: First
    self: Self2
    next: Next
    last: Last
  }
  
  export interface First {
    href: string
  }
  
  export interface Self2 {
    href: string
  }
  
  export interface Next {
    href: string
  }
  
  export interface Last {
    href: string
  }
  
  export interface Page {
    size: number
    totalElements: number
    totalPages: number
    number: number
  }
  