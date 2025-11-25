const USE_MOCK_DATA = process.env.EXPO_PUBLIC_USE_MOCK_DATA === "true";
const MS_LEARN_API_URL = process.env.EXPO_PUBLIC_MS_LEARN_API_URL;

const MOCK_COURSES = [
  {
    uid: "ms_learn_1",
    title: "Fundamentos do Microsoft Azure: Descrever conceitos de nuvem",
    description:
      "Módulo essencial para administradores e desenvolvedores que querem começar na nuvem.",
    durationInMinutes: 52,
    url: "https://learn.microsoft.com/pt-br/training/paths/az-900-describe-cloud-concepts/",
  },
  {
    uid: "ms_learn_2",
    title: "Implantar um aplicativo Spring Boot no Azure App Service",
    description:
      "Guia passo a passo para hospedar e escalar seu backend Java no Azure.",
    durationInMinutes: 60,
    url: "https://learn.microsoft.com/pt-br/training/browse/?terms=spring+boot",
  },
  {
    uid: "ms_learn_3",
    title: "Conceitos básicos do SQL Server",
    description:
      "Introdução aos conceitos de banco de dados e consultas usando SQL Server.",
    durationInMinutes: 90,
    url: "https://learn.microsoft.com/pt-br/training/browse/?products=sql-server",
  },
  {
    uid: "ms_learn_4",
    title: "Práticas de DevOps: Introdução ao Git e GitHub",
    description:
      "Aprenda a controlar o versionamento de código e colaborar em projetos Front-End.",
    durationInMinutes: 120,
    url: "https://learn.microsoft.com/pt-br/training/browse/?terms=devops+git",
  },
  {
    uid: "ms_learn_5",
    title: "Fundamentos do Microsoft Graph",
    description:
      "Explore como integrar dados do Microsoft 365 (como Outlook e Teams) em seus aplicativos.",
    durationInMinutes: 150,
    url: "https://learn.microsoft.com/pt-br/training/paths/m365-msgraph-fundamentals/",
  },
];
export interface Course {
  uid: string;
  title: string;
  description: string;
  durationInMinutes: number;
  url: string;
}

interface ApiUnit {
  uid: string;
  title: string;
  summary: string | null | undefined;
  duration_in_minutes: number | null | undefined;
  url: string;
}

export const fetchMSLearnCourses = async (): Promise<Course[]> => {
  console.log(
    "DEBUG: EXPO_PUBLIC_USE_MOCK_DATA =",
    process.env.EXPO_PUBLIC_USE_MOCK_DATA
  );
  if (USE_MOCK_DATA) {
    console.log("-> MODO MOCK ATIVO: Retornando dados simulados.");
    return new Promise((resolve) =>
      setTimeout(() => resolve(MOCK_COURSES), 500)
    );
  }

  try {
    console.log("-> Tentando buscar dados da API REAL do Microsoft Learn...");
    const response = await fetch(MS_LEARN_API_URL);

    if (!response.ok) {
      throw new Error(`Erro na API (Status: ${response.status})`);
    }

    const data = await response.json();

    if (data?.units?.length > 0) {
      const courses = data.units.slice(0, 5).map(
        (unit: ApiUnit): Course => ({
          uid: unit.uid,
          title: unit.title,
          description: unit.summary || "Nenhuma descrição disponível.",
          durationInMinutes: unit.duration_in_minutes || 0,
          url: `https://learn.microsoft.com${unit.url}`,
        })
      );
      console.log(
        `-> Sucesso! ${courses.length} cursos encontrados da API real.`
      );
      return courses;
    }

    console.log(
      "-> Sucesso na requisição, mas 0 cursos retornados. Filtros muito restritivos."
    );
    return [];
  } catch (error) {
    console.error(
      "Erro fatal na requisição à API (Verifique sua conexão ou permissões):",
      error
    );
    return [];
  }
};
