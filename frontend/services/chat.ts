import BASE_URL from "./api";

export async function sendMessage(message: string) {

    try {

        const response = await fetch(
            `${BASE_URL}/chat`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    question: message
                })
            }
        );

        return await response.json();

    }

    catch (error) {

        console.error(error);

        return {
            answer: "Backend not available."
        };

    }

}
