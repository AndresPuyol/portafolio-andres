// Init AOS
AOS.init({
    once: true,
    offset: 50,
    duration: 800,
    easing: 'ease-out-cubic',
});

const skillsData = [
    {
        name: "NestJS",
        category: "backend",
        icon: "fa-server",
        description: "Framework progresivo de Node.js para construir aplicaciones del lado del servidor eficientes y escalables. Lo utilizo para crear APIs RESTful robustas, aprovechando su arquitectura modular y su integración con TypeScript."
    },
    {
        name: "Node.js",
        category: "backend",
        icon: "fa-node-js",
        description: "Entorno de ejecución para JavaScript construido con el motor V8 de Chrome. Es la base de mi desarrollo backend, permitiéndome manejar lógica asíncrona y construir servidores de alto rendimiento."
    },
    {
        name: "PHP",
        category: "backend",
        icon: "fa-php",
        description: "Lenguaje de script de código abierto muy popular, especialmente adecuado para el desarrollo web. Tengo experiencia manteniendo y creando sistemas dinámicos con este lenguaje clásico."
    },
    {
        name: "React.js",
        category: "frontend",
        icon: "fa-react",
        description: "Biblioteca de JavaScript para construir interfaces de usuario. La utilizo para crear SPAs (Single Page Applications) interactivas, gestionando el estado y los componentes de manera eficiente."
    },
    {
        name: "HTML5/CSS3",
        category: "frontend",
        icon: "fa-html5",
        description: "Los pilares fundamentales de la web. Me aseguro de escribir HTML semántico y accesible, y utilizo CSS3 (junto con Tailwind) para crear diseños modernos, responsivos y con animaciones fluidas."
    },
    {
        name: "JavaScript",
        category: "frontend",
        icon: "fa-js",
        description: "El lenguaje de programación de la web. Lo domino tanto en el frontend (manipulación del DOM, lógica de UI) como en el backend (Node.js), con un fuerte enfoque en ES6+."
    },
    {
        name: "PostgreSQL",
        category: "database",
        icon: "fa-database",
        description: "Sistema de gestión de bases de datos relacional objeto potente y de código abierto. Es mi elección principal para datos estructurados complejos y aplicaciones que requieren fiabilidad."
    },
    {
        name: "MySQL",
        category: "database",
        icon: "fa-database",
        description: "El sistema de gestión de bases de datos relacional de código abierto más popular. Lo he utilizado en diversos proyectos para almacenar y recuperar datos de manera eficiente."
    },
    {
        name: "SQL",
        category: "database",
        icon: "fa-code",
        description: "Lenguaje de consulta estructurado estándar. Poseo habilidades sólidas para diseñar esquemas, escribir consultas complejas, procedimientos almacenados y optimizar el rendimiento de la BD."
    },
    {
        name: "Figma",
        category: "tools",
        icon: "fa-figma",
        description: "Herramienta de diseño de interfaces colaborativa. La utilizo para prototipar mis aplicaciones, diseñar sistemas de componentes y asegurar una buena experiencia de usuario (UX) antes de escribir código."
    },
    {
        name: "Git / GitHub",
        category: "tools",
        icon: "fa-github-alt",
        description: "Control de versiones esencial para cualquier equipo. Uso Git para el seguimiento de cambios y ramas, y GitHub para la colaboración, revisión de código y despliegue (CI/CD)."
    },
    {
        name: "APIs REST",
        category: "backend",
        icon: "fa-network-wired",
        description: "Arquitectura estándar para la comunicación entre sistemas. Diseño e implemento APIs que siguen los principios REST, asegurando una integración fluida entre el frontend y el backend."
    },
];

// 1. BIG CAROUSEL LOGIC - FIXED NO HOVER EFFECT & FULL WIDTH
const carouselContainer = document.getElementById('carousel-track-container');

const infiniteSkills = [...skillsData, ...skillsData, ...skillsData];

function createCarouselItem(skill) {
    let iconClass = skill.icon.includes('node') || skill.icon.includes('php') || skill.icon.includes('react') || skill.icon.includes('html') || skill.icon.includes('js') || skill.icon.includes('figma') || skill.icon.includes('github') ? 'fab' : 'fas';

    const div = document.createElement('div');
    // FIXED FOR LIGHT MODE CONTRAST (STRONGER ++)
    div.className = "flex flex-col items-center justify-center min-w-[150px] h-[150px] md:min-w-[180px] md:h-[180px] rounded-3xl backdrop-blur-md border border-slate-400 bg-white/90 dark:bg-slate-800/40 dark:border-white/10 shadow-lg mx-6";

    div.innerHTML = `
        <i class="${iconClass} ${skill.icon} text-6xl md:text-7xl text-slate-700 dark:text-slate-200 mb-4 drop-shadow-md"></i>
        <span class="text-xs md:text-sm font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">${skill.name}</span>
    `;
    return div;
}

infiniteSkills.forEach(skill => carouselContainer.appendChild(createCarouselItem(skill)));

// 2. GRID LOGIC
const skillsGrid = document.getElementById('skills-grid');

function renderSkills(filter = 'all') {
    skillsGrid.innerHTML = '';
    let delay = 0;
    skillsData.forEach(skill => {
        if (filter === 'all' || skill.category === filter) {
            const card = document.createElement('div');
            // Added cursor-pointer and onclick
            card.className = `skill-card liquid-hover bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 active:scale-95 active:shadow-inner cursor-pointer group`;
            // Fade in animation manually
            card.style.animation = `fadeIn 0.5s ease forwards ${delay}s`;
            card.style.opacity = '0';

            // Add click event to open modal
            card.onclick = () => openModal(skill);

            let iconClass = skill.icon.includes('node') || skill.icon.includes('php') || skill.icon.includes('react') || skill.icon.includes('html') || skill.icon.includes('js') || skill.icon.includes('figma') || skill.icon.includes('github') ? 'fab' : 'fas';

            card.innerHTML = `
                <div class="icon-bg w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-secondary shrink-0 transition-colors duration-300">
                    <i class="${iconClass} ${skill.icon} text-xl"></i>
                </div>
                <div>
                    <h5 class="font-bold text-slate-700 dark:text-slate-200 text-sm leading-tight transition-colors duration-300">${skill.name}</h5>
                    <span class="text-xs text-slate-500 dark:text-slate-400 capitalize hidden sm:block transition-colors duration-300">${skill.category}</span>
                </div>
            `;
            skillsGrid.appendChild(card);
            delay += 0.05;
        }
    });
}

const styleSheet = document.createElement("style");
styleSheet.innerText = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(styleSheet);

renderSkills();

const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => {
            b.classList.remove('bg-secondary', 'text-white');
            b.classList.add('bg-slate-200', 'dark:bg-slate-700', 'text-slate-600', 'dark:text-slate-300');
        });
        btn.classList.remove('bg-slate-200', 'dark:bg-slate-700', 'text-slate-600', 'dark:text-slate-300');
        btn.classList.add('bg-secondary', 'text-white');
        renderSkills(btn.dataset.filter);
    });
});

const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
}

themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    if (html.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        updateChartColors(true);
    } else {
        localStorage.setItem('theme', 'light');
        updateChartColors(false);
    }
});

// 3. IMPROVED CHART CONFIG (RADAR) with Animation & Gradient
const canvas = document.getElementById('skillsChart');
const ctx = canvas.getContext('2d');

// Simple radial gradient approximation (center to edges)
// Note: Canvas size changes, so we define a generic large gradient or update on resize. 
// For simplicity/stability, we'll use a dynamic fill in the dataset if possible, 
// but Chart.js handles canvas context colors well.
let gradient = ctx.createRadialGradient(200, 200, 0, 200, 200, 200);
gradient.addColorStop(0, 'rgba(59, 130, 246, 0.4)'); // Center glow
gradient.addColorStop(1, 'rgba(59, 130, 246, 0.05)'); // Fade out

let skillsChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Backend', 'Frontend', 'Base de Datos', 'Diseño UI', 'Herramientas', 'Lógica'],
        datasets: [{
            label: 'Nivel de Competencia',
            data: [85, 75, 70, 65, 80, 90],
            backgroundColor: gradient,
            borderColor: '#3b82f6',
            pointBackgroundColor: '#10b981',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#10b981',
            pointHoverBorderColor: '#fff',
            pointRadius: 6,
            pointHoverRadius: 9,
            borderWidth: 3,
            tension: 0.35, // Curved lines (Organico)
            fill: true
        }]
    },
    options: {
        animation: {
            duration: 2000,
            easing: 'easeOutQuart'
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
                angleLines: { color: html.classList.contains('dark') ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' },
                grid: { color: html.classList.contains('dark') ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' },
                pointLabels: {
                    color: html.classList.contains('dark') ? '#cbd5e1' : '#475569',
                    font: { family: "'Inter', sans-serif", size: 11, weight: 'bold' }
                },
                ticks: { display: false },
                suggestedMin: 0,
                suggestedMax: 100
            }
        },
        plugins: {
            legend: { display: false }
        }
    }
});

function updateChartColors(isDark) {
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
    const textColor = isDark ? '#cbd5e1' : '#475569';

    skillsChart.options.scales.r.angleLines.color = gridColor;
    skillsChart.options.scales.r.grid.color = gridColor;
    skillsChart.options.scales.r.pointLabels.color = textColor;
    skillsChart.update();
}

updateChartColors(html.classList.contains('dark'));

// 4. CONTINUOUS ANIMATION LOOP (BREATHING EFFECT)
let direction = 1;
let tension = 0.35;
let radius = 6;

setInterval(() => {
    // Oscillate Tension (0.35 to 0.45)
    if (tension >= 0.45) direction = -1;
    if (tension <= 0.35) direction = 1;

    tension += 0.002 * direction;

    // Oscillate Point Radius slightly (6 to 7)
    radius += 0.02 * direction;

    skillsChart.data.datasets[0].tension = tension;
    skillsChart.data.datasets[0].pointRadius = radius;
    skillsChart.update('none'); // Update without full re-render animation
}, 50);


// Smart Email Handler
function handleEmail(e) {
    e.preventDefault();
    const email = "penaguzmanandres@gmail.com";
    const subject = "Contacto desde Portafolio";
    const body = "Hola Andrés, me gustaría contactarte para...";

    // Regex to detect mobile devices
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
        // Mobile: Try standard mailto (usually works best with native apps)
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } else {
        // Desktop: Open Gmail Web in new tab (safest for users without Outlook/Mail app)
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailUrl, '_blank');
    }
}

// Scroll to Top Logic
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = "block";
        setTimeout(() => { scrollTopBtn.style.opacity = "1"; }, 10);
    } else {
        scrollTopBtn.style.opacity = "0";
        setTimeout(() => { if (scrollTopBtn.style.opacity === "0") scrollTopBtn.style.display = "none"; }, 300);
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 5. MODAL LOGIC
const modal = document.getElementById('skill-modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalPanel = document.getElementById('modal-panel');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalIcon = document.getElementById('modal-icon');
const modalIconBg = document.getElementById('modal-icon-bg');

function openModal(skill) {
    if (!modal) return;

    // Set Content
    modalTitle.textContent = skill.name;
    modalDescription.textContent = skill.description;

    // Update Icon
    let iconClass = skill.icon.includes('node') || skill.icon.includes('php') || skill.icon.includes('react') || skill.icon.includes('html') || skill.icon.includes('js') || skill.icon.includes('figma') || skill.icon.includes('github') ? 'fab' : 'fas';
    modalIcon.className = `${iconClass} ${skill.icon} text-2xl text-blue-600 dark:text-blue-400`;

    // Show Modal
    modal.classList.remove('hidden');
    // Small delay to allow display:block to apply before transition
    setTimeout(() => {
        modalBackdrop.classList.remove('opacity-0');
        modalPanel.classList.remove('opacity-0', 'translate-y-4', 'sm:translate-y-0', 'sm:scale-95');
        modalPanel.classList.add('opacity-100', 'translate-y-0', 'sm:scale-100');
    }, 10);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (!modal) return;

    // Hide transition
    modalBackdrop.classList.add('opacity-0');
    modalPanel.classList.add('opacity-0', 'translate-y-4', 'sm:translate-y-0', 'sm:scale-95');
    modalPanel.classList.remove('opacity-100', 'translate-y-0', 'sm:scale-100');

    // Wait for transition to finish before hiding element
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto'; // Restore scroll
    }, 300);
}

// Close on backdrop click
if (modal) {
    modal.addEventListener('click', (e) => {
        // If the click is on the modal container itself (the backdrop area wrapping the panel)
        // or the backdrop div directly
        if (e.target === modal || e.target === modalBackdrop) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
}
