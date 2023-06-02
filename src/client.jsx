import { createClient } from '@sanity/client'

const client = createClient ({
    projectId: "dsozutms",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-06-01"
})

export default client