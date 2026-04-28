import { useQuery } from '@tanstack/react-query'
import { client } from './client'
import {
  opportunitiesQuery,
  featuredOpportunitiesQuery,
  developmentsQuery,
  featuredDevelopmentQuery,
  siteSettingsQuery,
  teamMembersQuery,
  opportunityTypesQuery,
} from './queries'
import type {
  Opportunity,
  Development,
  SiteSettings,
  TeamMember,
  OpportunityType,
} from './types'

export function useOpportunities() {
  return useQuery<Opportunity[]>({
    queryKey: ['opportunities'],
    queryFn: () => client.fetch(opportunitiesQuery),
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}

export function useFeaturedOpportunities() {
  return useQuery<Opportunity[]>({
    queryKey: ['opportunities', 'featured'],
    queryFn: () => client.fetch(featuredOpportunitiesQuery),
    staleTime: 1000 * 60 * 5,
  })
}

export function useDevelopments() {
  return useQuery<Development[]>({
    queryKey: ['developments'],
    queryFn: () => client.fetch(developmentsQuery),
    staleTime: 1000 * 60 * 5,
  })
}

export function useFeaturedDevelopment() {
  return useQuery<Development | null>({
    queryKey: ['developments', 'featured'],
    queryFn: () => client.fetch(featuredDevelopmentQuery),
    staleTime: 1000 * 60 * 5,
  })
}

export function useSiteSettings() {
  return useQuery<SiteSettings | null>({
    queryKey: ['siteSettings'],
    queryFn: () => client.fetch(siteSettingsQuery),
    staleTime: 1000 * 60 * 10, // 10 minutes
  })
}

export function useTeamMembers() {
  return useQuery<TeamMember[]>({
    queryKey: ['teamMembers'],
    queryFn: () => client.fetch(teamMembersQuery),
    staleTime: 1000 * 60 * 10,
  })
}

export function useOpportunityTypes() {
  return useQuery<OpportunityType[]>({
    queryKey: ['opportunityTypes'],
    queryFn: () => client.fetch(opportunityTypesQuery),
    staleTime: 1000 * 60 * 10,
  })
}
