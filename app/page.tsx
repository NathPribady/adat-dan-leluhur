import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, BookOpen, Target, Lightbulb } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kelas Adat dan Leluhur - Logos ID",
  description:
    "Ruang aman dan inklusif untuk mengkonstruksi pengetahuan bersama yang melibatkan komunitas Adat, penghayat kepercayaan, dan pendidikan dekolonial.",
}

export default function Component() {
  const schedule = [
    {
      date: "6 Agustus",
      theme: "Adat dan Ekologi",
      speaker: "Afkar Aristoteles M, Mahasiswa S2 CRCS UGM",
      description: [
        "Memperkenalkan keragaman etika kepedulian leluhur dalam konteks ekologi yang beragam",
        "Melihat hubungan etis manusia-alam",
        "Bagaimana alam dikonstruksikan lewat peta",
        "Studi kasus: UU KSDAE, Mollo-Gunung Mutis, dan Industri Geothermal",
        "Mendorong peneliti dan praktisi menyelaraskan pandangan dan melaksanakan pendekatan etis demi mendukung pemberdayaan masyarakat",
      ],
    },
    {
      date: "13 Agustus",
      theme: "Kolonialisme & Orientalisme Pengetahuan Leluhur",
      speaker: "Ikrana Ramadhani, Mahasiswa S2 CRCS UGM",
      description: [
        "Mempermasalahkan latar belakang kolonialitas yang menggeser paradigma",
        "Rasialisme dan peminggiran masyarakat adat",
        "Mendekolonisasi pengetahuan menjadi relasional",
      ],
    },
    {
      date: "20 Agustus",
      theme: "Paradigma [Agama] Leluhur",
      speaker: "Faiz Hosainie Rafsanjanie, Mahasiswa S2 CRCS UGM",
      description: [
        "Membongkar konstruksi, religion, din, dan agama kolonial",
        'Membantah konstruksi wacana "animisme", "dinamisme", dan "sinkretisme"',
        "Hubungan etis dalam agama leluhur dan masyarakat adat: relasional, timbal balik, dan tanggung jawab",
        "Melihat bahwa semua tindak-tanduk merupakan 'beradat' atau 'relijius' sekaligus",
      ],
    },
    {
      date: "27 Agustus",
      theme: "Riset Berbasis Adat",
      speaker: "Ikrana Ramadhani, Mahasiswa S2 CRCS UGM",
      description: [
        "Implementasi etis pendekatan studi-studi di bidang Indigenitas",
        "Studi kasus: orientalis dan antropologi Barat yang hit-and-run dan misrekognisi tentang konsep yang hidup di masyarakat adat atau misrekognisi 'animisme', 'sinkretisme'",
        "Etnografi kritis",
      ],
    },
    {
      date: "3 September",
      theme: "Adat and Gender",
      speaker: "Mina Mangmah, Mahasiswa S2 CRCS UGM",
      description: [
        "Memperkenalkan konstruksi gender dalam pemahaman/penafsiran agama leluhur (Islam adat, Kristen adat, penghayat kepercayaan, dsb)",
        "Mendekolonisasi konsep gender",
        "Emansipasi dan advokasi gender masyarakat leluhur",
        "Antara SOGIESC dan adat",
      ],
    },
    {
      date: "10 September",
      theme: "Filosofi Leluhur",
      speaker: "Yohanes Leo, Mahasiswa S2 CRCS UGM",
      description: [
        "Menyoal pendekatan agama leluhur dalam studi Humaniora",
        'Konsep materialisme baru dan vitalisme (pascahumanisme) serta merekonstruksi tubuh dalam pandangan "kebudayaan"',
        "Rekomendasi saran terhadap studi Antropologi serta Sosiologi",
      ],
    },
    {
      date: "17 September",
      theme: "Ekspresi Leluhur dalam Kesenian",
      speaker: "Putri Athifah Fitriah, Mahasiswa S2 CRCS UGM",
      description: [
        "Genealogi seni",
        "Pemisahan agama, budaya, dan seni sebagai praktik kolonial",
        "Praktik seni sebagai sumber pengetahuan leluhur",
      ],
    },
    {
      date: "24 September",
      theme: "Hak Masyarakat Adat/Leluhur: KBB, Kedaulatan, dan Kewargaan",
      speaker: "Annisa Qurrotul Ayuni, Mahasiswa S2 CRCS UGM",
      description: [
        "Mendekolonisasi hak dan HAM",
        "Politik Agama Resmi sebagai praktik kolonial",
        "Vernakularisasi dan localization HAM pada lokalitas",
        "Hak masyarakat adat dan FoRB untuk penghayat kepercayaan dan agama leluhur",
        "Mengelaborasikan konsep HAM dan FoRB",
        "Mencari solusi bersama untuk rekognisi masyarakat adat dan agama leluhur",
      ],
    },
  ]

  const objectives = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Ruang Aman & Inklusif",
      description:
        "Menyediakan ruang aman untuk mengkonstruksi pengetahuan bersama yang melibatkan komunitas Adat dan penghayat kepercayaan.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Kontekstualisasi Pengetahuan",
      description: "Mengkontekstualisasikan pengetahuan ke ranah personal dan isu yang spesifik.",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Pendekatan Adat",
      description: "Memperkenalkan pendekatan Adat sebagai kerangka studi inter-sektoral.",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Dekolonisasi Pendidikan",
      description: "Mendekolonisasi konsep dan metode pendidikan untuk aspek keadilan dalam mengkaji indigeniety.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Link href="https://logosid.app" target="_blank" rel="noreferrer">
                <Image src="/logos-id-logo.png" alt="Logos ID" width={120} height={40} className="h-10 w-auto" />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">
                Tentang
              </Link>
              <Link href="#schedule" className="text-gray-700 hover:text-amber-600 transition-colors">
                Jadwal
              </Link>
              <Link href="#partners" className="text-gray-700 hover:text-amber-600 transition-colors">
                Kolaborasi
              </Link>
              <Button className="bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700">
                <a href="https://logos-id.myr.id/pl/adat-dan-leluhur" target="_blank" rel="noreferrer">
                  Daftar Sekarang
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-amber-100 text-amber-800 hover:bg-amber-200">
            Cohort-Based Course • 6 Agustus - 24 September 2025
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Kelas Adat dan{" "}
            <span className="bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">Leluhur</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ruang aman dan inklusif untuk mengkonstruksi pengetahuan bersama yang melibatkan komunitas Adat, penghayat
            kepercayaan, dan pendidikan dekolonial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 px-8 py-3 text-lg"
            >
              <a href="https://logos-id.myr.id/pl/adat-dan-leluhur" target="_blank" rel="noreferrer">
                Daftar Sekarang
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Setiap Rabu</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>8 Minggu</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Online (Zoom) & Offline (Jogja)</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Terbuka untuk Umum</span>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tujuan Utama</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Membangun pemahaman yang mendalam tentang pengetahuan leluhur dan pendekatan Adat
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {objectives.map((objective, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-red-100 rounded-lg flex items-center justify-center mx-auto mb-4 text-amber-600">
                    {objective.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">{objective.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{objective.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 px-4 bg-gradient-to-r from-amber-50 to-red-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kolaborasi</h2>
            <p className="text-xl text-gray-600">Kerjasama lintas organisasi untuk pendidikan yang inklusif</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <Link href="https://logosid.app" target="_blank" rel="noreferrer">
                <div className="w-24 h-24 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center shadow-sm">
                  <Image src="/logos-id-logo.png" alt="Logos ID" width={80} height={26} className="h-6 w-auto" />
                </div>
              </Link>
              <h3 className="font-semibold text-lg mb-2">
                <Link
                  href="https://logosid.app"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-600 transition-colors"
                >
                  Logos ID
                </Link>
              </h3>
              <p className="text-sm text-gray-600">Pendidikan, Filsafat, Studi Disabilitas</p>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <Link href="https://icir.or.id" target="_blank" rel="noreferrer">
                <div className="w-24 h-24 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center shadow-sm">
                  <Image src="/icir-logo.png" alt="ICIR" width={60} height={60} className="h-12 w-auto" />
                </div>
              </Link>
              <h3 className="font-semibold text-lg mb-2">
                <Link
                  href="https://icir.or.id"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-600 transition-colors"
                >
                  ICIR
                </Link>
              </h3>
              <p className="text-sm text-gray-600">Kolaborasi, Advokasi, Riset, Adat dan Agama Leluhur</p>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 bg-black rounded-lg mx-auto mb-4 flex items-center justify-center shadow-sm">
                <Image src="/gsb-logo.png" alt="Gerakan Surah Buku" width={80} height={60} className="h-12 w-auto" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Gerakan Surah Buku</h3>
              <p className="text-sm text-gray-600">Kontributor metode surah untuk diskusi</p>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center shadow-sm">
                <Image src="/eonoiaco-logo.png" alt="Eonoiaco" width={80} height={60} className="h-12 w-auto" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Eonoiaco</h3>
              <p className="text-sm text-gray-600">Publikasi rangkuman di media sosial</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Silabus & Jadwal</h2>
            <p className="text-xl text-gray-600 mb-8">8 sesi pembelajaran setiap hari Rabu</p>
            <div className="flex justify-center items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>6 Agustus - 24 September 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Setiap Rabu</span>
              </div>
            </div>
          </div>

          {/* August Sessions */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-gradient-to-r from-amber-600 to-red-600 text-white px-4 py-2 rounded-full font-semibold">
                Agustus 2025
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-amber-200 to-red-200"></div>
            </div>

            <div className="grid gap-6">
              {schedule.slice(0, 4).map((session, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col lg:flex-row gap-6 items-start">
                    {/* Date Circle */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-red-100 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                        <div className="text-center">
                          <div className="text-xs font-medium text-amber-700">{session.date.split(" ")[1]}</div>
                          <div className="text-lg font-bold text-amber-800">{session.date.split(" ")[0]}</div>
                        </div>
                      </div>
                      {index < 3 && (
                        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-px h-6 bg-gradient-to-b from-amber-200 to-red-200"></div>
                      )}
                    </div>

                    {/* Content */}
                    <Card className="flex-1 hover:shadow-xl transition-all duration-300 border-l-4 border-l-amber-500">
                      <CardHeader className="pb-4">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                          <div className="flex-1">
                            <Badge variant="outline" className="mb-3 text-amber-700 border-amber-300 bg-amber-50">
                              Sesi {index + 1}
                            </Badge>
                            <CardTitle className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                              {session.theme}
                            </CardTitle>
                            <CardDescription className="text-amber-600 font-semibold flex items-center gap-2">
                              <Users className="h-4 w-4" />
                              Pemantik: {session.speaker}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-gray-600 leading-relaxed space-y-2">
                          {session.description.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* September Sessions */}
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-gradient-to-r from-amber-600 to-red-600 text-white px-4 py-2 rounded-full font-semibold">
                September 2025
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-amber-200 to-red-200"></div>
            </div>

            <div className="grid gap-6">
              {schedule.slice(4).map((session, index) => (
                <div key={index + 4} className="relative">
                  <div className="flex flex-col lg:flex-row gap-6 items-start">
                    {/* Date Circle */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-red-100 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                        <div className="text-center">
                          <div className="text-xs font-medium text-amber-700">{session.date.split(" ")[1]}</div>
                          <div className="text-lg font-bold text-amber-800">{session.date.split(" ")[0]}</div>
                        </div>
                      </div>
                      {index < 3 && (
                        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-px h-6 bg-gradient-to-b from-amber-200 to-red-200"></div>
                      )}
                    </div>

                    {/* Content */}
                    <Card className="flex-1 hover:shadow-xl transition-all duration-300 border-l-4 border-l-red-500">
                      <CardHeader className="pb-4">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                          <div className="flex-1">
                            <Badge variant="outline" className="mb-3 text-red-700 border-red-300 bg-red-50">
                              Sesi {index + 5}
                            </Badge>
                            <CardTitle className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                              {session.theme}
                            </CardTitle>
                            <CardDescription className="text-red-600 font-semibold flex items-center gap-2">
                              <Users className="h-4 w-4" />
                              Pemantik: {session.speaker}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-gray-600 leading-relaxed space-y-2">
                          {session.description.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Participation Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-50 to-red-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Siapa yang Dapat Berpartisipasi?</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Terbuka untuk umum, termasuk perempuan, minoritas gender, masyarakat adat, dan lainnya tanpa ada satupun
                yang dikecualikan. Kelas diadakan lewat Zoom yang akan dibagikan secara publik dan secara luring di
                Asrama Mahasiswa Aceh Sabena, Yogyakarta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 px-8 py-3 text-lg"
                >
                  <a href="https://logos-id.myr.id/pl/adat-dan-leluhur" target="_blank" rel="noreferrer">
                    Daftar Sekarang
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-red-600 rounded-lg"></div>
                <span className="font-bold text-xl">Kelas Adat dan Leluhur</span>
              </div>
              <p className="text-gray-400">Ruang pembelajaran untuk pengetahuan leluhur dan pendidikan dekolonial.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Kontak</h3>
              <p className="text-gray-400 mb-2">Email: logosid.2020@gmail.com</p>
              <p className="text-gray-400">Lokasi: Asrama Mahasiswa Aceh Sabena, Yogyakarta</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Kolaborasi</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Logos ID</Badge>
                <Badge variant="secondary">ICIR</Badge>
                <Badge variant="secondary">Gerakan Surah Buku</Badge>
                <Badge variant="secondary">Eonoiaco</Badge>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>{"©"} 2025 Logos ID. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
