export const opportunitiesQuery = `
  *[_type == "opportunity"] | order(order asc, _createdAt asc) {
    _id, title, type, status, location, description, featured, order
  }
`

export const featuredOpportunitiesQuery = `
  *[_type == "opportunity" && featured == true] | order(order asc) [0...4] {
    _id, title, type, status, location, description, order
  }
`

export const developmentsQuery = `
  *[_type == "development"] | order(order asc, _createdAt asc) {
    _id, title, typeBadge, statusBadge, location, description, bulletPoints,
    image { asset, hotspot, alt },
    featured, order
  }
`

export const featuredDevelopmentQuery = `
  *[_type == "development" && featured == true] | order(order asc) [0] {
    _id, title, typeBadge, statusBadge, location, description, bulletPoints,
    image { asset, hotspot, alt }
  }
`

export const siteSettingsQuery = `
  *[_type == "siteSettings"][0] {
    _id, phone, email, officeLocations, heroTitle, heroSubtitle, heroDescription
  }
`

export const teamMembersQuery = `
  *[_type == "teamMember"] | order(order asc) {
    _id, name, jobTitle, credentials,
    bio,
    image { asset, hotspot, alt },
    order
  }
`

export const opportunityTypesQuery = `
  *[_type == "opportunityType"] | order(order asc) {
    _id, title,
    image { asset, hotspot, alt },
    order
  }
`
