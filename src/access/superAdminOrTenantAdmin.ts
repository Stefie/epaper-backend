import { getUserTenantIDs } from '@/utilities/getUserTenantIDs'
import { isSuperAdmin } from './isSuperAdmin'
import { Access } from 'payload'
import { User } from '../payload-types'

/**
 * Tenant admins and super admins can will be allowed access
 */
export const hasSuperAdminOrAdminAccess: Access = ({ req }) => {
  if (!req.user) {
    return false
  }

  if (isSuperAdmin(req.user)) {
    return true
  }

  const adminTenantAccessIDs = getUserTenantIDs(req.user, 'tenant-admin')
  const requestedTenant = req?.data?.tenant

  if (requestedTenant && adminTenantAccessIDs.includes(requestedTenant)) {
    return true
  }

  return false
}