export default async ({ params: paramsPromise }: { params: Promise<{ slug: string[] }> }) => {
  return (
    <div>
      <h1>Multi-Tenant Example</h1>
      <p>
        This multi-tenant example allows you to explore multi-tenancy with domains and with slugs.
      </p>

      <h2>Domains</h2>
      <p>When you visit a tenant by domain, the domain is used to determine the tenant.</p>
      <p>
        For example, visiting{' '}
        <a href="http://zeit.localhost:3000/tenant-domains/login">
          http://zeit.localhost:3000/tenant-domains/login
        </a>{' '}
        will show the tenant with the domain "zeit.localhost".
      </p>

      <h2>Slugs</h2>
      <p>When you visit a tenant by slug, the slug is used to determine the tenant.</p>
      <p>
        For example, visiting{' '}
        <a href="http://localhost:3000/tenant-slugs/mopo/login">
          http://localhost:3000/tenant-slugs/mopo/login
        </a>{' '}
        will show the tenant with the slug "MOPO".
      </p>

        <h2>Admin Panel</h2>
      <p>When you visit a tenant by slug, the slug is used to determine the tenant.</p>
      <p>
        For example, visit{' '}
        <a href="http://localhost:3000/admin/login">
          http://localhost:3000/admin/login
        </a>{' '}
        Login: super-admin@payloadcms.com PW: demo
      </p>
    </div>
  )
}
