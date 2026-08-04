import BASE_URL from "./api";

export async function login(
    email: string,
    password: string
) {

    const response = await fetch(

        `${BASE_URL}/login`,

        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email,
                password
            })

        }

    );

    return await response.json();

}
