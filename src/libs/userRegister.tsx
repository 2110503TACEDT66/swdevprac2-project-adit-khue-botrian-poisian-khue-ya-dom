// Define a function to register a new user
export async function userRegister(userName:string,userEmail: string, userPassword: string) {
        const response = await fetch("http://localhost:3001/api/v1/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name:userName,
                role:"user",
                email: userEmail,
                password: userPassword,
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to register");
        }

        return await response.json();
    
}
