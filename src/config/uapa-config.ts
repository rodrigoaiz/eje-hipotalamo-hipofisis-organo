// Tipos para navegación
export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

// Tipos para créditos
export interface CreditItem {
  role: string;
  name: string;
}

// Configuración centralizada del proyecto UAPA
export const UAPA_CONFIG = {
  // Información principal
  title: "Eje Hipotálamo-Hipófisis-Órgano",
  subtitle: "Unidad de Apoyo para el Aprendizaje",
  
  // Metadatos
  description: "El eje hipotálamo-hipófisis es de gran importancia para el cuerpo humano, pues regula gran parte de las funciones del cuerpo como la reproducción, el metabolismo e, incluso, la respuesta al estrés, todo esto gracias a las hormonas que son liberadas en los órganos diana. Por lo tanto, tener el conocimiento sobre este eje, sus funciones y las hormonas que produce resulta importante e indispensable para la formación de las especialistas y los especialistas de la salud. Si quieres contar con dichos conocimientos, estudia esta unidad de apoyo para el aprendizaje (UAPA) para adentrarte más en la fisiología endocrina.",
  keywords: "Hipófisis, hipotálamo, sistema neuroendocrino, glándula pituitaria, hormonas",
  
  // Año de publicación (para el aviso legal y las citas)
  year: "2026",
  
  // Autores (aparecen en Hero y en "Cómo citar")
  authors: [
    "Daniel León Aparicio"
  ],
  
  // Colaboradores opcionales (solo aparecen en Hero, NO en "Cómo citar")
  collaborators: [
    "Lilia E. Macedo de la Concha",
    "Edith Tapia Rangel",
    "Adriana Robles Cabrera",
    "Julieta Garduño Torres",
    "Juan Luis Becerril Gutiérrez",
    "Cristina Huerta Mendoza",
    "Adela Amellali Rios Herrera",
    "Elisa Campero Malo",
    "María Quetzali García López",
    "Edgar Isaac Navarro Martínez",
    "Brenda Gómez Sánchez",
    "Joel Villamar Chulin",
    "Juan de Dios Fuentes Reyes"
  ] as string[],
  
  // Hero
  hero: {
    imageSrc: "img/portada.jpg",
    imageCaption: "ScienceDirect. (2021). <em>The hypothalamic–pituitary–target organ axes</em> [imagen]. Tomada de https://n9.cl/7mqic3"
  },
  
  // Navegación
  navigation: {
    showTitle: false,
    title: "Eje Hipotálamo-Hipófisis-Órgano",
    menuItems: [
      { label: "Introducción", href: "#introduccion" },
      { 
        label: "Contenido", 
        children: [
          { label: "El hipotálamo y la hipófisis", href: "#contenido1" },
          { label: "Eje hipotálamo-hipófisis-adrenal", href: "#contenido2" },
          { label: "Eje hipotálamo-hipófisis-tiroides", href: "#contenido3" },
          { label: "Eje hipotálamo-hipófisis-gónadas", href: "#contenido4" },
          { label: "Eje hipotálamo-hipofisario-somatotrópico", href: "#contenido5" }
        ]
      },
      {
        label: "Actividades",
        children: [
          { label: "Actividad 1. Identificando las funciones de los ejes HHA y HHT, así como de las hormonas que producen", href: "#actividad1" },
          { label: "Actividad 2. Reconociendo las funciones del eje HHG y de las hormonas que produce", href: "#actividad2" }
        ]
      },
      { label: "Autoevaluación", href: "#autoevaluacion1" },
      { label: "Fuentes", href: "#fuentes-info" }
    ] as NavItem[]
  },

  // Modo de producción: true = CUAED, false = SUAyED
  // CUAED: muestra sección CUAED en footer, NO muestra tools menu ni modal de créditos
  // SUAyED: NO muestra sección CUAED, SÍ muestra tools menu y modal de créditos
  isCuaed: true,

  // Funcionalidades opcionales
  enableLatex: false, // Si true, carga KaTeX para renderizar ecuaciones LaTeX

  // Footer y créditos
  footer: {
    // URLs para el menú lateral de herramientas
    toolsMenu: {
      foroUrl: "http://ponteenlinea.facmed.unam.mx/mod/forum/view.php?id=1",
      evaluaUrl: "http://ponteenlinea.facmed.unam.mx/",
      ponteEnLineaUrl: "http://ponteenlinea.facmed.unam.mx/",
      logoutUrl: "http://ponteenlinea.facmed.unam.mx/moodle/login/logout.php"
    },
    credits: [
      { role: "Coordinación general", name: "Ana Carolina Sepúlveda Vildósola, Gabriela Borrayo Sánchez, Jorge León Martínez" },
      { role: "Coordinación de desarrollo", name: "Lilia E. Macedo de la Concha, Edith Tapia Rangel" },
      { role: "Coordinación académica", name: "Adriana Robles Cabrera, Julieta Garduño Torres" },
      { role: "Elaboración del contenido", name: "Daniel León Aparicio" },
      { role: "Administración del proyecto", name: "Juan Luis Becerril Gutiérrez" },
      { role: "Coordinación de asesoría pedagógica", name: "Cristina Huerta Mendoza, Adela Amellali Rios Herrera, Elisa Campero Malo" },
      { role: "Asesoría pedagógica", name: "María Quetzali García López" },
      { role: "Coordinación de corrección de estilo", name: "Edgar Isaac Navarro Martínez, Brenda Gómez Sánchez" },
      { role: "Corrección de estilo", name: "Liliana Ramírez Nuño" },
      { role: "Coordinación de diseño gráfico e integración", name: "Joel Villamar Chulin, Juan de Dios Fuentes Reyes" },
      { role: "Diseño gráfico e integración", name: "Jesús Rodrigo Aizpuru Parra" },
      { role: "Coordinación de programación de recursos", name: "Juan Luis Becerril Gutiérrez" }
    ]
  }
};

// Funciones helper para formatear autores
export const formatAuthors = {
  // Para metadatos (separados por comas) - SOLO autores
  full: UAPA_CONFIG.authors.join(", "),
  
  // Para Hero (separados por " | ") - autores + colaboradores si existen
  display: (() => {
    const allContributors = [...UAPA_CONFIG.authors];
    if (UAPA_CONFIG.collaborators && UAPA_CONFIG.collaborators.length > 0) {
      allContributors.push(...UAPA_CONFIG.collaborators);
    }
    return allContributors.join(" | ");
  })(),
  
  // Para Footer (con "y" antes del último)
  withAnd: (authors: string[]) => {
    if (authors.length === 0) return "";
    if (authors.length === 1) return authors[0];
    if (authors.length === 2) return authors.join(" y ");
    
    const lastAuthor = authors[authors.length - 1];
    const otherAuthors = authors.slice(0, -1);
    return otherAuthors.join(", ") + " y " + lastAuthor;
  }
};
