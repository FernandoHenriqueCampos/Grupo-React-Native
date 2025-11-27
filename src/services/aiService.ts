const API_KEY = process.env.EXPO_PUBLIC_GEMINI_KEY;
const MODEL_NAME = "gemini-2.5-flash";

export async function getAnimalCareTips(userInput: string) {
  if (!API_KEY) {
    throw new Error("Chave de API não configurada no .env");
  }

  console.log(`🐾 Buscando dicas sobre: ${userInput}...`);

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`;

  const requestBody = {
    contents: [
      {
        parts: [
          {
            text: `
        Você é um assistente veterinário virtual empático para um App de Adoção.
        Responda à dúvida do tutor: "${userInput}".
        
        Diretrizes:
        - Seja curto e prático (para ler rápido no celular).
        - Use emojis para tornar a leitura leve.
        - Se for emergência médica, mande procurar um vet urgente.
        - Formate a resposta sem usar Markdown complexo (evite negrito com ** ou tabelas, prefira texto simples e listas), pois o React Native puro não renderiza Markdown nativamente sem bibliotecas extras.
        `,
          },
        ],
      },
    ],
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || "Erro na conexão");
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

    return text || "Não consegui gerar uma resposta no momento.";
  } catch (error) {
    console.error("Erro na IA:", error);
    throw error;
  }
}
