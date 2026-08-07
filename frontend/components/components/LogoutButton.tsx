"use client";

export default function LogoutButton() {

    function logout() {

        document.cookie =
            "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

        window.location.href="/login";

    }

    return(

        <button
        onClick={logout}
        style={{
            background:"#ef4444",
            color:"white",
            padding:"10px 18px",
            border:"none",
            borderRadius:"8px"
        }}
        >

        Logout

        </button>

    );

}
