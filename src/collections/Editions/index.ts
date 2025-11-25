import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'

import { hasSuperAdminOrAdminAccess } from '@/access/superAdminOrTenantAdmin'
import { generatePreviewPath } from '@/utilities/generatePreviewPath'

export const Editions: CollectionConfig = {
  slug: 'editions',
  access: {
    create: hasSuperAdminOrAdminAccess,
    delete: hasSuperAdminOrAdminAccess,
    read: hasSuperAdminOrAdminAccess,
    update: hasSuperAdminOrAdminAccess,
  },
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        console.log('req >>> ', req, "data >>>", data)
        return generatePreviewPath({
          slug: data?.slug,
          collection: 'editions',
          req,
        })
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: data?.slug as string,
        collection: 'editions',
        req,
      }),
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'info',
      type: 'text',
    },
    {
      name: 'json',
      type: 'json',
    },
    {
      name: 'xml',
      type: 'code',
      admin: {
        language: 'javascript',
      },
    },
    {
      name: 'pdf',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'images',
      type: 'upload',
      relationTo: 'media',
      hasMany: true
    },
    {
      name: 'type',
      type: 'radio',
      options: [
        'Hauptausgabe',
        'Regionalausgabe',
        'Beilage',
        'Magazin'
      ],
    },
    slugField(),
  ],
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
