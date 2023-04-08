export type Navigation = {
    name: string
    path: string
}

export type ButtonLinkType = {
    name: string
    path: string
}

export type Offers = {
    title: string
    descr: string
    img: string
}

export type SkillsType = {
    name: string
    descr: string
    img: string
    learning: boolean
    other: boolean
    lang: boolean
}

export type EducationType = {
    title: string
    specialty: string
    sertificate: string
    date: string
    location: string
    addition: boolean
}

export type ExperienceType = {
    title: string
    descr: string
    date: string
    position: string
    specialty: string[]
}

export type CertificatesType = {
    title: string
    path: string
}

export type PortfolioTypes = {
    title: string
    image: string
    path: string
    github: string
    descr: string
    react: boolean
}