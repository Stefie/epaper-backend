import { Config } from 'payload'

export const seed: NonNullable<Config['onInit']> = async (payload): Promise<void> => {
  const zeit = await payload.create({
    collection: 'tenants',
    data: {
      name: 'Zeit',
      slug: 'zeit',
      domain: 'zeit.localhost',
    },
  })

  const mopo = await payload.create({
    collection: 'tenants',
    data: {
      name: 'Mopo',
      slug: 'mopo',
      domain: 'mopo.localhost',
    },
  })

  const demo = await payload.create({
    collection: 'tenants',
    data: {
      name: 'Demo',
      slug: 'demo',
      domain: 'demo.localhost',
    },
  })

  await payload.create({
    collection: 'users',
    data: {
      email: 'zeit@payloadcms.com',
      password: 'demo',
      tenants: [
        {
          roles: ['tenant-admin'],
          tenant: zeit.id,
        },
      ],
      username: 'zeit',
    },
  })

  await payload.create({
    collection: 'users',
    data: {
      email: 'mopo@payloadcms.com',
      password: 'demo',
      tenants: [
        {
          roles: ['tenant-admin'],
          tenant: mopo.id,
        },
      ],
      username: 'mopo',
    },
  })

  await payload.create({
    collection: 'users',
    data: {
      email: 'demo@payloadcms.com',
      password: 'demo',
      tenants: [
        {
          roles: ['tenant-admin'],
          tenant: demo.id,
        },
      ],
      username: 'demo',
    },
  })

  await payload.create({
    collection: 'users',
    data: {
      email: 'admin@payloadcms.com',
      password: 'demo',
      tenants: [
        {
          roles: ['tenant-admin'],
          tenant: zeit.id,
        },
        {
          roles: ['tenant-admin'],
          tenant: mopo.id,
        },
        {
          roles: ['tenant-admin'],
          tenant: demo.id,
        },
      ],
      username: 'admin',
    },
  })

  await payload.create({
    collection: 'users',
    data: {
      email: 'super-admin@payloadcms.com',
      password: 'demo',
      roles: ['super-admin'],
    },
  })

  await payload.create({
    collection: 'pages',
    data: {
      slug: 'home',
      tenant: zeit.id,
      title: 'Page for Zeit',
    },
  })

  await payload.create({
    collection: 'pages',
    data: {
      slug: 'home',
      tenant: mopo.id,
      title: 'Page for Mopo',
    },
  })

  await payload.create({
    collection: 'pages',
    data: {
      slug: 'home',
      tenant: demo.id,
      title: 'Page for Demo Tenant',
    },
  })
}
