// --- LOGIN ---
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (password === "1234" && username !== "") {
      localStorage.setItem("loggedIn", "true");
      window.location.href = "vagas.html";
    } else {
      alert("Usuário ou senha incorretos!");
    }
  });
}

// --- LOGOUT ---
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
  });
}

// --- PROTEÇÃO DE PÁGINA ---
if (window.location.pathname.includes("vagas.html")) {
  const isLogged = localStorage.getItem("loggedIn");
  if (!isLogged) {
    window.location.href = "index.html";
  }
}

// --- LISTAGEM DE VAGAS ---
const vagas = [
  {
    titulo: "Desenvolvedor Front-End",
    empresa: "TechWave",
    local: "Remoto",
    descricao: "HTML, CSS, JavaScript e React.",
  },
  {
    titulo: "Analista de Suporte T.I",
    empresa: "InfoSolutions",
    local: "São Paulo, SP",
    descricao: "Atendimento e manutenção de sistemas.",
  },
  {
    titulo: "Engenheiro de Software",
    empresa: "CloudCorp",
    local: "Remoto",
    descricao: "Node.js, Docker e AWS.",
  },
  {
    titulo: "Estágio em T.I",
    empresa: "DataTech",
    local: "Híbrido - SP",
    descricao: "Suporte ao time de desenvolvimento.",
  },
];

const jobList = document.getElementById("jobList");

if (jobList) {
  const renderVagas = (lista) => {
    jobList.innerHTML = "";
    lista.forEach((vaga) => {
      const card = document.createElement("div");
      card.classList.add("job-card");
      card.innerHTML = `
        <h3>${vaga.titulo}</h3>
        <p><strong>Empresa:</strong> ${vaga.empresa}</p>
        <p><strong>Local:</strong> ${vaga.local}</p>
        <p>${vaga.descricao}</p>
        <button>Candidatar-se</button>
      `;
      jobList.appendChild(card);
    });
  };

  renderVagas(vagas);

  // --- FILTRO DE BUSCA ---
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", () => {
    const termo = searchInput.value.toLowerCase();
    const filtradas = vagas.filter(
      (vaga) =>
        vaga.titulo.toLowerCase().includes(termo) ||
        vaga.empresa.toLowerCase().includes(termo) ||
        vaga.local.toLowerCase().includes(termo)
    );
    renderVagas(filtradas);
  });
}