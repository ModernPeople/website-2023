import type { PageLoad } from './$types';
 
export const load = (async ({ params, fetch }) => {
  return {
    project_name: "a post"
  }
}) satisfies PageLoad;