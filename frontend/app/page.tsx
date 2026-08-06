import Navbar from "../components/Navbar";

export default function Home() {

  return (

    <>

      <Navbar />

      <main
        style={{
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center",
          height:"85vh"
        }}
      >

        <h1
          style={{
            fontSize:"60px",
            marginBottom:"20px"
          }}
        >

          MetricMind

        </h1>

        <p
          style={{
            fontSize:"22px",
            marginBottom:"40px"
          }}
        >

          AI Powered Business Intelligence Platform

        </p>

        <button
          style={{
            padding:"15px 35px",
            background:"#2563eb",
            color:"white",
            border:"none",
            borderRadius:"8px",
            cursor:"pointer"
          }}
        >

          Start Chat

        </button>

      </main>

    </>

  );

}
