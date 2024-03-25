export default async function getRestaurant(id:string) {
    const response  = await fetch(`https://vaccine-app-backend.vercel.app/api/v1/hospitals/${id}`)
    if(!response.ok) {
        throw new Error("Failed to fetch restaurant")
    }
    return await response.json()
}