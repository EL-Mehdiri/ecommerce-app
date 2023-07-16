import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: 'skt592XwKrO2Q69NqQuQWtvxcORMsnKOyh3YhO2ERy4cAa0JyF3cdMf7NKEYblcGT42B5zCHYE3u0y4iFyxb1n1vhDBmpPgcTtdxG8T7EA2PQS66qOpJKcolQtrJtal1XgupPzA37vfvrQQI3VK5Oj2QQoYnvt2vZMoOyCtAe83YA4YJvpJy'
})
