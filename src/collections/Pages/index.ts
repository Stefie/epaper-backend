import type { CollectionConfig } from 'payload'

import { ensureUniqueSlug } from './hooks/ensureUniqueSlug'
import { hasSuperAdminOrAdminAccess } from '@/access/superAdminOrTenantAdmin'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    create: hasSuperAdminOrAdminAccess,
    delete: hasSuperAdminOrAdminAccess,
    read: () => true,
    update: hasSuperAdminOrAdminAccess,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'slug',
      type: 'text',
      defaultValue: 'home',
      hooks: {
        beforeValidate: [ensureUniqueSlug],
      },
      index: true,
    },
  ],
}
