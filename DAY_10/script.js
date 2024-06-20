const button = document.querySelector(".btn");
const textContainer = document.getElementById("textChange");

// URL de l'API
const apiUrl = "https://icanhazdadjoke.com/";

// Fonction pour récupérer et afficher les données de l'API
const fetchData = async () => {
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données");
    }
    const res = await response.json();
    textContainer.innerText = res.joke;
  } catch (error) {
    textContainer.innerText = `<p>${error.message}</p>`;
  }
};
