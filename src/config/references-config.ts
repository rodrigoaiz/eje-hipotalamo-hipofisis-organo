// Tipos para diferentes categorías de referencias
export interface ReferenceCategory {
  title: string;
  references: string[];
}

// Configuración flexible de referencias por tipo de fuente
export const REFERENCES_CONFIG = {
  // Control de visualización de títulos
  showBasicTitle: false,
  showComplementaryTitle: false,
  
  // Estructura flexible que permite diferentes tipos de fuentes
  basic: {
    sections: []
  },
  
  complementary: {
    sections: [
      {
        title: "Documentos electrónicos", 
        references: [
          "Bernard, Daniel J. y Brûlé, Emilie. (2019). Anterior pituitary: glycoprotein hormones from gonadotrope (FSH and LH) and thyrotrope (TSH) cells. En Gerald Litwack (Ed.). <em>Hormonal signaling in biology and medicine: comprehensive modern endocrinology</em> (pp. 119-144). Academic Press. <span class='break'>https://www.sciencedirect.com/science/chapter/edited-volume/abs/pii/B9780128138144000079</span>",
          "Ergun-Longmire, Berrin y Wajnrajch, Michael P. (2025). Growth and growth disorders. En Kenneth R. Feingold (Ed.). <em>Endotext</em>. MDText.com. <span class='break'>https://www.ncbi.nlm.nih.gov/books/NBK279142/</span>",
          "Halmos, Gabor, Dobos, Nikoletta, Juhasz, Eva, Szabo, Zsuzsanna y Schally, Andrew V. (2019). Hypothalamic releasing hormones. En Gerald Litwack (Ed.). <em>Hormonal signaling in biology and medicine: comprehensive modern endocrinology</em> (pp. 43-68). Academic Press. <span class='break'>https://www.sciencedirect.com/science/chapter/edited-volume/abs/pii/B9780128138144000031</span>",
          "Hantsoo, Liisa, Jagodnik, Kathleen, Novick, Andrew M., Baweja, Ritika, Di Scalea, Teresa Lanza, Ozerdem, Aysegul, McGlade, Erin C., Simeonova, Diana I., Dekel, Sharon, Kornfield, Sara L., Nazareth, Michelle y Weiss, Sandra J. (2023, 11 de diciembre). The role of the hypothalamic-pituitary-adrenal axis in depression across the female reproductive lifecycle: current knowledge and future directions. <em>Frontiers in Endocrinology</em>, <em>14</em>. <span class='break'>doi:10.3389/FENDO.2023.1295261/FULL</span>",
          "Hobeika, Elie, Armouti, Mara, Kala, Hamsini Sudheer y Stocco, Carlos. (2019). Ovarian hormones. En Gerald Litwack (Ed.). <em>Hormonal signaling in biology and medicine: comprehensive modern endocrinology</em> (pp. 565-583). Academic Press. <span class='break'>https://www.sciencedirect.com/science/chapter/edited-volume/abs/pii/B9780128138144000250</span>",
          "Liu, Yan-Yun, Milanesi, Ana y Brent, Gregory A. (2019). Thyroid hormones. En Gerald Litwack (Ed.). <em>Hormonal signaling in biology and medicine: comprehensive modern endocrinology</em> (pp. 487-506). Academic Press. <span class='break'>https://www.sciencedirect.com/science/chapter/edited-volume/abs/pii/B9780128138144000213</span>",
          "Nicolaides, Nicolas C. y Chrousos, George, P. (2019). Adrenal cortex hormones. En Gerald Litwack (Ed.). <em>Hormonal signaling in biology and medicine: comprehensive modern endocrinology</em> (pp. 619-633). Academic Press. <span class='break'>https://www.sciencedirect.com/science/chapter/edited-volume/abs/pii/B9780128138144000286</span>",
          "Rastoldo, Guillaume y Tighilet, Brahim. (2023, 6 de junio). Thyroid axis and vestibular physiopathology: from animal model to pathology. <em>International Journal of Molecular Sciences</em>, <em>24</em>(12). <span class='break'>https://pubmed.ncbi.nlm.nih.gov/37372973/</span>",
          "Rezzani, Rita, Franco, Caterina, Hardeland, Rüdiger y Rodella, Luigi Fabrizio. (2020, 20 de noviembre). Thymus-pineal gland axis: revisiting its role in human life and ageing. <em>International Journal of Molecular Sciences</em>, <em>21</em>(22). <span class='break'>https://pubmed.ncbi.nlm.nih.gov/33233845/</span>",
          "Zakharian, Eleonora. (2019). Hormones of the testes. En Gerald Litwack (Ed.). <em>Hormonal signaling in biology and medicine: comprehensive modern endocrinology</em> (pp. 557-564). Academic Press. <span class='break'>https://www.sciencedirect.com/science/chapter/edited-volume/abs/pii/B9780128138144000249</span>"
        ]
      }
    ]
  },
  
  // Compatibilidad hacia atrás - arrays simples (deprecated pero funcional)
  basicLegacy: [],

  complementaryLegacy: [
    "Bernard, Daniel J. y Brûlé, Emilie. (2019). Anterior pituitary: glycoprotein hormones from gonadotrope (FSH and LH) and thyrotrope (TSH) cells. En Gerald Litwack (Ed.). <em>Hormonal signaling in biology and medicine: comprehensive modern endocrinology</em> (pp. 119-144). Academic Press. <span class='break'>https://www.sciencedirect.com/science/chapter/edited-volume/abs/pii/B9780128138144000079</span>",
    "Ergun-Longmire, Berrin y Wajnrajch, Michael P. (2025). Growth and growth disorders. En Kenneth R. Feingold (Ed.). <em>Endotext</em>. MDText.com. <span class='break'>https://www.ncbi.nlm.nih.gov/books/NBK279142/</span>",
    "Halmos, Gabor, Dobos, Nikoletta, Juhasz, Eva, Szabo, Zsuzsanna y Schally, Andrew V. (2019). Hypothalamic releasing hormones. En Gerald Litwack (Ed.). <em>Hormonal signaling in biology and medicine: comprehensive modern endocrinology</em> (pp. 43-68). Academic Press. <span class='break'>https://www.sciencedirect.com/science/chapter/edited-volume/abs/pii/B9780128138144000031</span>",
    "Hantsoo, Liisa, Jagodnik, Kathleen, Novick, Andrew M., Baweja, Ritika, Di Scalea, Teresa Lanza, Ozerdem, Aysegul, McGlade, Erin C., Simeonova, Diana I., Dekel, Sharon, Kornfield, Sara L., Nazareth, Michelle y Weiss, Sandra J. (2023, 11 de diciembre). The role of the hypothalamic-pituitary-adrenal axis in depression across the female reproductive lifecycle: current knowledge and future directions. <em>Frontiers in Endocrinology</em>, <em>14</em>. <span class='break'>doi:10.3389/FENDO.2023.1295261/FULL</span>",
    "Hobeika, Elie, Armouti, Mara, Kala, Hamsini Sudheer y Stocco, Carlos. (2019). Ovarian hormones. En Gerald Litwack (Ed.). <em>Hormonal signaling in biology and medicine: comprehensive modern endocrinology</em> (pp. 565-583). Academic Press. <span class='break'>https://www.sciencedirect.com/science/chapter/edited-volume/abs/pii/B9780128138144000250</span>",
    "Liu, Yan-Yun, Milanesi, Ana y Brent, Gregory A. (2019). Thyroid hormones. En Gerald Litwack (Ed.). <em>Hormonal signaling in biology and medicine: comprehensive modern endocrinology</em> (pp. 487-506). Academic Press. <span class='break'>https://www.sciencedirect.com/science/chapter/edited-volume/abs/pii/B9780128138144000213</span>",
    "Nicolaides, Nicolas C. y Chrousos, George, P. (2019). Adrenal cortex hormones. En Gerald Litwack (Ed.). <em>Hormonal signaling in biology and medicine: comprehensive modern endocrinology</em> (pp. 619-633). Academic Press. <span class='break'>https://www.sciencedirect.com/science/chapter/edited-volume/abs/pii/B9780128138144000286</span>",
    "Rastoldo, Guillaume y Tighilet, Brahim. (2023, 6 de junio). Thyroid axis and vestibular physiopathology: from animal model to pathology. <em>International Journal of Molecular Sciences</em>, <em>24</em>(12). <span class='break'>https://pubmed.ncbi.nlm.nih.gov/37372973/</span>",
    "Rezzani, Rita, Franco, Caterina, Hardeland, Rüdiger y Rodella, Luigi Fabrizio. (2020, 20 de noviembre). Thymus-pineal gland axis: revisiting its role in human life and ageing. <em>International Journal of Molecular Sciences</em>, <em>21</em>(22). <span class='break'>https://pubmed.ncbi.nlm.nih.gov/33233845/</span>",
    "Zakharian, Eleonora. (2019). Hormones of the testes. En Gerald Litwack (Ed.). <em>Hormonal signaling in biology and medicine: comprehensive modern endocrinology</em> (pp. 557-564). Academic Press. <span class='break'>https://www.sciencedirect.com/science/chapter/edited-volume/abs/pii/B9780128138144000249</span>"
  ],
  
};

// Configuración vacía para proyectos sin referencias (útil para copiar)
export const EMPTY_REFERENCES = {
  showBasicTitle: true,
  showComplementaryTitle: true,
  basic: { sections: [] },
  complementary: { sections: [] },
  basicLegacy: [],
  complementaryLegacy: []
};
