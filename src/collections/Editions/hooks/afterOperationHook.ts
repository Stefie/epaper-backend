import type { CollectionAfterOperationHook } from 'payload'
import type { Edition } from '../../../payload-types'

export const afterOperationHook: CollectionAfterOperationHook = async ({
  args,
  operation,
  req: { payload, context },
}) => {
  // const tenant = await payload.findByID({
  //   collection: "tenants",
  //   id: typeof doc.tenant === "string" ? doc.tenant : doc.tenant.id
  // })
  // bring your own logic here
  return args // return modified operation arguments as necessary
}

