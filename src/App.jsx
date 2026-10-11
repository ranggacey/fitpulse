import { useState, useEffect } from 'react'

const PROGRAMS = [
  { name: 'Strength Training', desc: 'Bangun otot dengan program angkat beban terstruktur.', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop', level: 'Semua Level' },
  { name: 'HIIT Burn', desc: 'Bakar 600+ kalori dalam 45 menit full body.', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop', level: 'Intermediate' },
  { name: 'Yoga Flow', desc: 'Fleksibilitas, balance, dan ketenangan pikiran.', img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop', level: 'Semua Level' },
  { name: 'Boxing Camp', desc: 'Latihan striking, footwork, dan cardio intens.', img: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800&auto=format&fit=crop', level: 'Intermediate' },
]

const FACILITIES = [
  { icon: 'dumbbell', title: 'Alat Premium', desc: 'Technogym & Rogue import' },
  { icon: 'users', title: 'Coach Ahli', desc: '15+ pelatih bersertifikat' },
  { icon: 'clock', title: 'Buka Tiap Hari', desc: '05.00 – 23.00 WIB' },
  { icon: 'drop', title: 'Recovery Zone', desc: 'Sauna & cold plunge' },
  { icon: 'phone', title: 'App Tracking', desc: 'Pantau progres harianmu' },
  { icon: 'shield', title: 'Asuransi', desc: 'Proteksi tiap member' },
]

const PLANS = [
  { name: 'Harian', price: 'Rp 50rb', per: '/kunjungan', features: ['Akses 1 hari penuh', '1x kelas grup', 'Locker & shower', 'Free wifi'], hot: false },
  { name: 'Bulanan', price: 'Rp 299rb', per: '/bulan', features: ['Akses gym unlimited', 'Semua kelas grup', '1x personal training', 'App tracking progres', 'Recovery zone'], hot: true },
  { name: 'Tahunan', price: 'Rp 2,9jt', per: '/tahun', features: ['Semua benefit Bulanan', '4x personal training', 'Nutrisi plan', 'Prioritas booking kelas', 'Merchandise eksklusif'], hot: false },
]

const TESTIS = [
  { name: 'Fajar Nugroho', text: 'Turun 12kg dalam 4 bulan. Coach-nya beneran peduli, programnya disesuaikan sama kondisiku.' },
  { name: 'Intan Permata', text: 'Gym paling bersih yang pernah aku datangi. Kelas HIIT-nya nagih, nggak pernah sepi tapi nggak overcrowded.' },
  { name: 'Dimas Saputra', text: 'Alatnya lengkap banget, nggak perlu antre. Worth it ambil yang tahunan.' },
]

function Icon({ name }) {
  const paths = {
    dumbbell: <path d="M6.5 6.5v11m-3-8v5m6-9v13m9-11v11m3-8v5m-6-9v13M4 9h16v6H4z" />,
    users: <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m20 0v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />,
    clock: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-13v5l3 2" />,
    drop: <path d="M12 2s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />,
    phone: <path d="M7 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm5 16h.01" />,
    shield: <path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3z" />,
    arrow: <path d="M5 12h14m-6-6l6 6-6 6" />,
    check: <path d="M4 12l5 5L20 6" />,
    bolt: <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />,
    star: <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />,
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  )
}

export default function App() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }),
      { threshold: 0.1 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="site">
      <nav className="nav">
        <div className="container nav-inner">
          <a className="logo" href="#"><span className="logo-mark"><Icon name="bolt" /></span>FITPULSE</a>
          <div className={`nav-links ${open ? 'show' : ''}`}>
            <a href="#program" onClick={() => setOpen(false)}>Program</a>
            <a href="#harga" onClick={() => setOpen(false)}>Harga</a>
            <a href="#testimoni" onClick={() => setOpen(false)}>Testimoni</a>
          </div>
          <div className="nav-cta">
            <a href="#harga" className="btn btn-primary">Join Sekarang</a>
            <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu"><span /><span /><span /></button>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="container">
          <p className="eyebrow reveal"><Icon name="bolt" /> Gym #1 di Semarang</p>
          <h1 className="reveal">BENTUK<br />BADAN <em>TERBAIKMU.</em></h1>
          <p className="lead reveal">Fasilitas premium, coach bersertifikat, dan komunitas yang bikin kamu konsisten. Tidak ada alasan lagi.</p>
          <div className="hero-actions reveal">
            <a href="#harga" className="btn btn-primary">Coba Gratis 1 Hari <Icon name="arrow" /></a>
            <a href="#program" className="btn btn-ghost">Lihat Program</a>
          </div>
          <div className="hero-stats reveal">
            <div><strong>8rb+</strong><span>Member Aktif</span></div>
            <div><strong>15+</strong><span>Coach Ahli</span></div>
            <div><strong>40+</strong><span>Kelas / Minggu</span></div>
          </div>
        </div>
      </header>

      <div className="marquee"><div className="marquee-track">
        {Array(2).fill('NO PAIN NO GAIN ✦ TRAIN HARD ✦ STAY HUMBLE ✦ PUSH YOUR LIMITS ✦ ').map((t, i) => <span key={i}>{t}</span>)}
      </div></div>

      <section id="program" className="section">
        <div className="container">
          <p className="eyebrow reveal">Program Unggulan</p>
          <h2 className="reveal">PILIH <em>SENJATAMU</em></h2>
          <div className="prog-grid">
            {PROGRAMS.map((p, i) => (
              <article key={i} className="prog-card reveal">
                <img src={p.img} alt={p.name} loading="lazy" />
                <span className="prog-level">{p.level}</span>
                <div className="prog-body"><h3>{p.name}</h3><p>{p.desc}</p></div>
              </article>
            ))}
          </div>
          <div className="fac-grid">
            {FACILITIES.map((f, i) => (
              <div key={i} className="fac reveal">
                <span><Icon name={f.icon} /></span>
                <div><strong>{f.title}</strong><p>{f.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="harga" className="section alt">
        <div className="container">
          <p className="eyebrow reveal">Membership</p>
          <h2 className="reveal">HARGA <em>JUJUR</em>, TANPA DRAMA</h2>
          <p className="section-sub reveal">Bisa berhenti kapan saja. Tanpa biaya tersembunyi, tanpa sales yang maksa.</p>
          <div className="plan-grid">
            {PLANS.map((p, i) => (
              <article key={i} className={`plan-card reveal ${p.hot ? 'hot' : ''}`}>
                {p.hot && <span className="hot-tag">PALING LARIS</span>}
                <h3>{p.name}</h3>
                <div className="plan-price"><strong>{p.price}</strong><span>{p.per}</span></div>
                <ul>{p.features.map((f, j) => <li key={j}><Icon name="check" />{f}</li>)}</ul>
                <a href="#" className={`btn ${p.hot ? 'btn-primary' : 'btn-ghost'}`}>Pilih {p.name}</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="testimoni" className="section">
        <div className="container">
          <p className="eyebrow reveal">Kata Member</p>
          <h2 className="reveal">MEREKA <em>BUKTIKAN</em></h2>
          <div className="testi-grid">
            {TESTIS.map((t, i) => (
              <article key={i} className="testi-card reveal">
                <span className="stars"><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /></span>
                <p>"{t.text}"</p>
                <div className="testi-user"><span className="avatar">{t.name[0]}</span><strong>{t.name}</strong></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-box reveal">
          <h2>BERHENTI MIKIR.<br />MULAI <em>GERAK.</em></h2>
          <p>Klaim free trial 1 hari — full akses gym + 1 kelas grup, tanpa kartu kredit.</p>
          <a href="#" className="btn btn-primary">Klaim Free Trial <Icon name="arrow" /></a>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div><a className="logo" href="#"><span className="logo-mark"><Icon name="bolt" /></span>FITPULSE</a><p>Gym premium Semarang. Buka setiap hari 05.00 – 23.00 WIB.</p></div>
          <div><h4>Menu</h4><a href="#program">Program</a><a href="#harga">Harga</a><a href="#testimoni">Testimoni</a></div>
          <div><h4>Kontak</h4><a href="#">Instagram</a><a href="#">WhatsApp</a><a href="#">TikTok</a></div>
          <div><h4>Lokasi</h4><p>Jl. Ahmad Yani No. 45<br />Semarang</p></div>
        </div>
        <div className="container footer-bottom"><p>© 2026 FitPulse Gym. Seluruh hak cipta dilindungi.</p></div>
      </footer>
    </div>
  )
}
