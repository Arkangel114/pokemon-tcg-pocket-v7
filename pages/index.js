import Link from 'next/link'
export default function Home(){
  return (
    <main className="container">
      <header className="header">
        <h1>Pokémon TCG Pocket Hub</h1>
        <nav>
          <Link href="/"><a className="button">Home</a></Link>
        </nav>
      </header>

      <section style={{marginTop:20}} className="card">
        <h2 style={{marginTop:0}}>Welcome</h2>
        <p>Starter package. Deck Builder, Pack Simulator and Tournaments are placeholders ready to implement.</p>
        <div style={{display:'flex',gap:10,marginTop:12}}>
          <Link href="/deck-builder"><a className="button">Deck Builder</a></Link>
          <Link href="/pack-simulator"><a className="button">Pack Simulator</a></Link>
          <Link href="/tournaments"><a className="button">Tournaments</a></Link>
        </div>
      </section>

      <section style={{marginTop:18}} className="card">
        <h3>Ad Placeholder</h3>
        <div style={{height:90,display:'flex',alignItems:'center',justifyContent:'center',background:'#fafafa',borderRadius:6}}>Ad slot will appear here</div>
      </section>
    </main>
  )
}
