import { Mail, Phone, MapPin, Linkedin, Code, Server, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const technicalSkills = [
    "Java (Spring Boot, Maven, Hibernate)",
    "Python (Django, RESTful Services)",
    "SQL (MySQL)",
    "Metodologías ágiles (Scrum)",
    "Git",
    "Docker",
    "Linux",
    "Microsoft Office",
  ]

  const softSkills = [
    "Trabajo de equipo",
    "Comunicación efectiva",
    "Creativo",
    "Autodidacta",
    "Resolutivo",
    "Pensamiento crítico",
    "Dedicado",
    "Colaborador",
    "Empático",
    "Curiosidad e iniciativa",
    "Adaptación rápida",
  ]

  const education = [
    {
      title: "Ingeniería en Sistemas de Información",
      institution: "UTN F.R.Re",
      status: "En curso",
      year: "",
    },
    {
      title: "Analista Desarrollador en Sistemas de Información",
      institution: "UTN F.R.Re",
      status: "En curso",
      year: "",
    },
    {
      title: "Quality Control",
      institution: "Infromatorio-Chaco",
      status: "Completado",
      year: "2022",
    },
    {
      title: "Full Stack Web Developer",
      institution: "Infromatorio-Chaco",
      status: "Completado",
      year: "2022",
    },
    {
      title: "Técnico en instalaciones electromecánicas",
      institution: "",
      status: "Completado",
      year: "2016",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-bold text-slate-800">Ulises Pallarés</h1>
              <p className="text-slate-600">Java Developer</p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                <span>ulisespallares8@gmail.com</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                <span>3624-613561</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>Resistencia-Chaco</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Code className="w-16 h-16 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Desarrollador Java</h2>
            <p className="text-xl text-slate-600 mb-8">
              Estudiante de Ingeniería en Sistemas | Especializado en Spring Boot & Python
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <a href="https://www.linkedin.com/in/ulises-pallares" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                Ver LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="mailto:ulisespallares8@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Contactar
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">Sobre Mí</h3>
          <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed">
            <p className="mb-6">
              Soy estudiante de Ingeniería en Sistemas de Información en la UTN, cursando el cuarto año y próximo a
              obtener el título de Analista Desarrollador en Sistemas de Información. Tengo un gran interés por el
              desarrollo de software y la innovación tecnológica. Me adapto rápidamente a nuevos entornos.
            </p>
            <p className="mb-6">
              Busco contribuir al diseño y desarrollo de soluciones tecnológicas avanzadas en una empresa de vanguardia.
              He cultivado tanto habilidades técnicas como comunicativas a lo largo de mi carrera, y me siento cómodo
              trabajando tanto en equipo como de manera individual.
            </p>
            <p>
              Soy colaborativo, autodidacta y estoy disponible para incorporarme de manera inmediata, con la disposición
              de recibir la formación necesaria según las necesidades del puesto.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-slate-800 mb-12 text-center">Habilidades</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="w-5 h-5 text-blue-600" />
                  Habilidades Técnicas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-purple-600" />
                  Habilidades Blandas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-purple-100 text-purple-800">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-slate-800 mb-12 text-center">Educación y Credenciales</h3>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <div>
                      <h4 className="font-semibold text-slate-800">{edu.title}</h4>
                      {edu.institution && <p className="text-slate-600">{edu.institution}</p>}
                    </div>
                    <div className="flex gap-2">
                      {edu.year && <Badge variant="outline">{edu.year}</Badge>}
                      <Badge
                        variant={edu.status === "En curso" ? "default" : "secondary"}
                        className={edu.status === "En curso" ? "bg-green-100 text-green-800" : ""}
                      >
                        {edu.status}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-slate-800 mb-12 text-center">Idiomas</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-slate-800">Español</h4>
                  <Badge className="bg-green-100 text-green-800">Nativo</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-slate-800">Inglés</h4>
                  <Badge variant="secondary">A2</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">¿Interesado en trabajar juntos?</h3>
          <p className="text-slate-300 mb-8 text-lg">
            Estoy disponible para incorporarme de manera inmediata y listo para contribuir al éxito de tu empresa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <a href="mailto:ulisespallares8@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Enviar Email
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-slate-800 bg-transparent"
            >
              <a href="https://www.linkedin.com/in/ulises-pallares" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                Conectar en LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; 2024 Ulises Pallarés. Todos los derechos reservados.</p>
          <p className="mt-2">Desarrollado con Next.js y Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}
