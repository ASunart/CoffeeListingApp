const BASE_API = 'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'

export const fetchProducts = async () => {
    return fetch(BASE_API)
        .then(res => {
            if (!res.ok) {
                throw new Error('Error fetching API')
            }
            return res.json()
        })
        .then(data => {
            return data
        })
        .catch(e => {
            throw new Error(e)
        })
}