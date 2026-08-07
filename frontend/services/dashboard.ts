import BASE_URL from "./api";

export async function getDashboard() {

    try {

        const response = await fetch(

            `${BASE_URL}/dashboard`

        );

        return await response.json();

    }

    catch {

        return null;

    }

}
