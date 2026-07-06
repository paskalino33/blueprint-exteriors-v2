const phone = '973-362-5447';
const tel = 'tel:19733625447';

const services = ['Roofing', 'Siding', 'Windows', 'Doors', 'Gutters', 'Decks', 'Masonry', 'Chimneys', 'Carpentry'];
const projects = [
  { image: '/images/project-1.jpg', title: 'Complete Exterior Upgrade', text: 'Curb appeal focused exterior renovation with premium finish details.' },
  { image: '/images/project-2.jpg', title: 'Roofing & Exterior Work', text: 'Drone-documented exterior project showcasing quality installation.' },
  { image: '/images/project-3.jpg', title: 'Siding & Trim Transformation', text: 'Clean siding, trim, and exterior finish work built for long-term durability.' },
  { image: '/images/project-4.jpg', title: 'Outdoor Living Space', text: 'Deck, patio, and exterior improvements designed around daily use.' },
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="Blueprint Exteriors home">
          <span className="mark">BE</span>
          <span><strong>Blueprint</strong><small>Exteriors LLC</small></span>
        </a>
        <nav>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#areas">Service Areas</a>
          <a href="#estimate">Estimate</a>
        </nav>
        <a className="navCall" href={tel}>{phone}</a>
      </header>

      <section id="top" className="hero">
        <video className="heroVideo" autoPlay muted loop playsInline poster="/images/hero-house.jpg">
          <source src="/videos/hero.mov" type="video/quicktime" />
          <source src="/videos/project.mp4" type="video/mp4" />
        </video>
        <div className="shade" />
        <div className="heroContent">
          <p className="eyebrow">Roofing • Siding • Windows • Doors • Decks</p>
          <h1>Northern New Jersey’s Trusted Exterior Remodeling Experts</h1>
          <p className="lead">Premium exterior renovations built with sharp project management, clean workmanship, and a finished product homeowners are proud to show off.</p>
          <div className="actions">
            <a className="btn primary" href="#estimate">Get a Free Estimate</a>
            <a className="btn secondary" href="#projects">View Our Work</a>
          </div>
          <div className="badges">
            <span>Licensed & Insured</span><span>Free Estimates</span><span>Quality Materials</span><span>North Jersey Service</span>
          </div>
        </div>
      </section>

      <section className="intro">
        <div><p className="eyebrow blue">Blueprint Exteriors LLC</p><h2>Exterior renovations designed to protect your home and improve curb appeal.</h2></div>
        <p>From roof replacements and siding upgrades to decks, gutters, chimneys, windows, and doors, Blueprint Exteriors helps homeowners across Somerset County and Northern New Jersey improve the look, value, and performance of their homes.</p>
      </section>

      <section id="services" className="section">
        <div className="sectionHead"><p className="eyebrow blue">What We Do</p><h2>Complete exterior remodeling services</h2></div>
        <div className="serviceGrid">{services.map((s) => <article className="card" key={s}><h3>{s}</h3><p>Professional {s.toLowerCase()} services with detailed estimates, quality installation, and clean jobsite standards.</p><a href="#estimate">Request estimate →</a></article>)}</div>
      </section>

      <section id="projects" className="section dark">
        <div className="sectionHead"><p className="eyebrow">Featured Work</p><h2>Real projects. Real craftsmanship.</h2></div>
        <div className="projectGrid">{projects.map((p) => <article className="project" key={p.title}><img src={p.image} alt={p.title} /><div><h3>{p.title}</h3><p>{p.text}</p></div></article>)}</div>
      </section>

      <section className="why">
        <div><p className="eyebrow blue">Why Homeowners Choose Us</p><h2>Built around communication, quality, and accountability.</h2></div>
        <div className="whyGrid">
          <p><strong>Clear estimates.</strong><br/>Detailed scopes so homeowners know what is included before work begins.</p>
          <p><strong>Clean execution.</strong><br/>Respectful crews, organized jobsites, and attention to the small finish details.</p>
          <p><strong>Exterior focus.</strong><br/>Roofing, siding, windows, doors, decks, masonry, gutters, and carpentry under one team.</p>
        </div>
      </section>

      <section id="areas" className="areas">
        <p className="eyebrow blue">Service Areas</p>
        <h2>Serving Somerset County and Northern New Jersey</h2>
        <p>Bergen, Passaic, Morris, Essex, Hudson, Union, Somerset, Sussex, Warren, Middlesex, and surrounding North Jersey towns.</p>
      </section>

      <section id="estimate" className="estimate">
        <div>
          <p className="eyebrow">Start Your Project</p>
          <h2>Request a free exterior remodeling estimate.</h2>
          <p>Call <a href={tel}>{phone}</a> or send your project details below. Add photos later for faster estimating.</p>
        </div>
        <form action={`mailto:${'blueprintexteriorsllc@gmail.com'}`} method="post" encType="text/plain">
          <input name="name" placeholder="Name" required />
          <input name="phone" placeholder="Phone" required />
          <input name="email" placeholder="Email" />
          <select name="service" defaultValue=""><option value="" disabled>Project type</option>{services.map(s => <option key={s}>{s}</option>)}</select>
          <textarea name="message" placeholder="Tell us about the project" rows="5" />
          <button type="submit">Send Estimate Request</button>
        </form>
      </section>

      <footer><div><strong>Blueprint Exteriors LLC</strong><p>Roofing • Siding • Windows • Doors • Gutters • Decks • Masonry • Chimneys • Carpentry</p></div><a href={tel}>{phone}</a></footer>
      <a className="floatCall" href={tel}>Call {phone}</a>
    </main>
  );
}
