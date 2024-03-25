export default async function getReservations (token:string) {

    const response = await fetch('http://localhost:3001/api/v1/reservations', {
        method:"GET",
        headers: {
            "Content-Type" : "application/json",
            authorization: `Bearer ${token}`,
        },
    })
    if(!response.ok) {
        throw new Error('Failed to fetch reservations')
    }
    return await response.json()
}