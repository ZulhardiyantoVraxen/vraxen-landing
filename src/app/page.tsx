import Link from "next/link";

const DIVISION_VIDEOS: Record<string, string> = {
  "sekretariat-direksi":
    "https://videos.pexels.com/video-files/5971785/5971785-uhd_2160_4096_25fps.mp4",
  kesehatan:
    "https://videos.pexels.com/video-files/34440343/14593524_3840_2160_30fps.mp4",
  "front-office":
    "https://videos.pexels.com/video-files/7820505/7820505-hd_1920_1080_25fps.mp4",
  "billing-klaim":
    "https://videos.pexels.com/video-files/7546415/7546415-hd_1920_1080_25fps.mp4",
  "inventori-kepatuhan-data":
    "https://videos.pexels.com/video-files/7018667/7018667-uhd_4096_2160_25fps.mp4",
};

const DIVISIONS = [
  {
    id: "sekretariat-direksi",
    name: "Sekretariat Direksi",
    desc:
      "Tim inti yang mengatur koordinasi direksi, keuangan, dan audit internasional perusahaan.",
  },
  {
    id: "kesehatan",
    name: "Kesehatan",
    desc:
      "Divisi yang mengelola operasional kesehatan, pelayanan medis, dan program kesehatan karyawan.",
  },
  {
    id: "front-office",
    name: "Front Office",
    desc:
      "Depan pintu perusahaan yang menangani tamu, klien, dan komunikasi pertama kalinya.",
  },
  {
    id: "billing-klaim",
    name: "Billing & Klaim",
    desc:
      "Tim yang mengelola penagihan, faktur, dan klaim keuangan seluruh cabang.",
  },
  {
    id: "inventori-kepatuhan-data",
    name: "Inventori & Kepatuhan Data",
    desc:
      "Pengelolaan stok barang, aset perusahaan, dan kepatuhan data secara menyeluruh.",
  },
];

const PROCESS_STEPS = [
  {
    step: 1,
    title: "Memahami Bisnis Anda",
    items: ["Pelanggan", "Tanggungan", "Tujuan", "Peluang"],
  },
  {
    step: 2,
    title: "Menentukan Prioritas",
    items: [
      "Strategy",
      "Operational",
      "Pemasaran",
      "Usaha Lebih Maju",
      "Kemandirian",
      "Sumber Daya",
      "Renencana Aksi",
      "Langkah Kece Hasil Besar",
    ],
  },
  {
    step: 3,
    title: "Menjalankan Rencana",
    items: [
      "Kolaborasi untuk Dampak Nyata",
      "Sistem Solusi Pengembangan Pertumbuhan",
    ],
  },
  {
    step: 4,
    title: "Mengevaluasi Perkembangan",
    items: [
      "Evaluasi",
      "Adaptasi",
      "Pelanggan Lebih Loyal",
      "Pembelajaran Berkelanjutan",
    ],
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Process />
      <Divisions />
      <Footer />
    </>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-md">
      <div className="relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/hero.mp4"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center border border-white/10">
              <span className="font-bold text-white">V</span>
            </div>
            <div>
              <span className="font-bold text-xl tracking-tight text-white">
                Vraxen
              </span>
              <span className="text-xs text-[#94a3b8] uppercase tracking-wider">
                Virtual Office
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#proses" className="text-sm font-medium text-[#94a3b8] hover:text-white transition-colors">
              Proses
            </Link>
            <Link href="#divisi" className="text-sm font-medium text-[#94a3b8] hover:text-white transition-colors">
              Divisi
            </Link>
            <a
              href="https://coworking.vraxen-group.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-md bg-white text-[#0b1420] text-sm font-semibold hover:bg-[#94a3b8] transition-colors"
            >
              Masuk Platform
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#0ea5e9]/10 blur-[120px] rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#94a3b8] uppercase tracking-wider mb-6">
            Kantor Virtual Profesional
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
            Operasi perusahaan yang teratur,<br />
            tanpa ribet.
          </h1>
          <p className="text-lg md:text-xl text-[#94a3b8] mb-10 leading-relaxed max-w-xl">
            Vraxen adalah kantor virtual yang dioperasikan oleh tim manusia nyata
            dengan struktur divisi yang jelas — dari sekretariat direksi hingga
            kepatuhan data. Setiap langkah diatur dengan proses yang terukur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#divisi"
              className="px-8 py-4 bg-white text-[#0b1420] font-semibold rounded-lg hover:bg-[#94a3b8] transition-colors text-center"
            >
              Lihat Divisi
            </a>
            <a
              href="https://coworking.vraxen-group.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-center"
            >
              Kunjungi Platform
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="proses" className="py-24 border-y border-white/5 bg-[#0c1624]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Cara Kami Bekerja</h2>
          <p className="section-subtitle">
            Empat tahap inti dalam setiap operasional Vraxen, dari pemahaman
            bisnis hingga evaluasi berkala.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-[#0b1420]/50 border border-white/10 rounded-xl p-8 hover:border-white/20 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              </div>
              <ul className="space-y-2 text-[#94a3b8] text-sm leading-relaxed">
                {step.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#0ea5e9] mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Divisions() {
  return (
    <section id="divisi" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Divisi Operasional</h2>
          <p className="section-subtitle">
            Lima divisi yang menjalankan fungsi-fungsi kritis perusahaan, masing-masing
            dengan tim dan standar kerja sendiri.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {DIVISIONS.map((div) => (
            <div
              key={div.id}
              className="group relative rounded-xl overflow-hidden border border-white/10 bg-[#0b1420]/30 hover:border-[#0ea5e9]/50 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  poster={DIVISION_VIDEOS[div.id]}
                >
                  <source
                    src={DIVISION_VIDEOS[div.id]}
                    type="video/mp4"
                  />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-xs font-medium text-[#0ea5e9] uppercase tracking-wider">
                    {div.name}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{div.name}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">
                  {div.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a101c] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-white/20 flex items-center justify-center">
            <span className="font-bold text-white text-xs">V</span>
          </div>
          <span className="font-semibold text-white">Vraxen Virtual Office</span>
        </div>
        <div className="text-xs text-[#64748b]">
          Vraxen Group · Kantor Virtual Profesional
        </div>
      </div>
    </footer>
  );
}
