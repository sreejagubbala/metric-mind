export default function Navbar() {

  return (

    <nav
      style={{
        background:"#1d4ed8",
        color:"white",
        padding:"18px 40px",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
      }}
    >

      <h2>

        MetricMind

      </h2>

      <div
        style={{
          display:"flex",
          gap:"25px"
        }}
      >

        <a href="/" style={{color:"white"}}>

          Home

        </a>

        <a href="/chat" style={{color:"white"}}>

          Chat

        </a>

        <a href="/dashboard" style={{color:"white"}}>

          Dashboard

        </a>

      </div>

    </nav>

  );

}
