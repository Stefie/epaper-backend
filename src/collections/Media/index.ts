import type { CollectionConfig } from 'payload'

import path from 'path'
import { fileURLToPath } from 'url'

import { hasSuperAdminOrAdminAccess } from '@/access/superAdminOrTenantAdmin'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export const Media: CollectionConfig = {
  slug: 'media',
  folders: true,
  access: {
    create: hasSuperAdminOrAdminAccess,
    delete: hasSuperAdminOrAdminAccess,
    read: hasSuperAdminOrAdminAccess,
    update: hasSuperAdminOrAdminAccess,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      //required: true,
    },
    {
      name: 'title',
      type: 'text',
      //required: true,
    },
    {
      name: 'paths',
      type: 'text'
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
    }
  ],
  upload: {
    // Upload to the public/media directory in Next.js making them publicly accessible even outside of Payload
    staticDir: path.resolve(dirname, '../../public/media'),
    adminThumbnail: 'thumbnail',
    focalPoint: true,
  },
}
