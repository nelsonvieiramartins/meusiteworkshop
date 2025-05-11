// Wait for DOM content to be loaded
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });
    
    // Translations object
    const translations = {
        en: {
            title: "Orbiton - Unleash the Power of AI",
            login: "Login",
            getStarted: "Get Started",
            nav: {
                home: "Home",
                features: "Features",
                workshop: "Workshop",
                about: "About",
                contact: "Contact"
            },
            hero: {
                title: "Unleash the Power of<br>Artificial Intelligence<br>in Just 4 Hours",
                description: "Learn from and explore cutting-edge techniques in AI. Master the latest tools and applications for immediate impact in your business.",
                cta: "Get Started Now"
            },
            features: {
                title: "AI-Powered Features",
                card1: {
                    title: "Advanced AI Training",
                    description: "Personalized learning paths to help you master AI fundamentals faster than traditional methods."
                },
                card2: {
                    title: "Machine Learning",
                    description: "Learn how predictive algorithms work and implement your own models with our guided framework."
                },
                card3: {
                    title: "Data Analysis",
                    description: "Discover how to extract meaningful insights from large datasets using advanced AI techniques."
                },
                card4: {
                    title: "Neural Networks",
                    description: "Build and train neural networks for image recognition, natural language processing, and more."
                }
            },
            workshop: {
                title: "Immersive Workshop Experience",
                item1: {
                    title: "Introduction to Artificial Intelligence",
                    description: "Discover the foundations that support modern AI. Understand what it is, how it works, and why AI is transforming the world at an accelerated pace."
                },
                item2: {
                    title: "AI Tools in Practice",
                    description: "Explore the tools that are already shaping the market. Experience using ChatGPT, Midjourney, Copilot, and other solutions that facilitate tasks and boost results."
                },
                item3: {
                    title: "Creativity and Content Generation",
                    description: "Use AI as an ally in creating ideas, images, and texts. Learn how to create unique content with the support of generative models and expand your creative repertoire."
                },
                item4: {
                    title: "Real Applications and Professional Challenges",
                    description: "Build practical AI solutions for businesses and projects. Experience real challenges with guidance and develop AI-driven responses aimed at the professional world."
                },
                item5: {
                    title: "Testimonials and Transformations",
                    description: "Real stories of those who successfully applied the knowledge. See how other professionals changed their careers after applying what they learned in workshops like this."
                },
                item6: {
                    title: "Next Steps and Opportunities",
                    description: "Prepare for the future with knowledge and strategic vision. Understand how to position yourself in the market, which areas are on the rise, and how to continue learning in the AI universe."
                }
            },
            testimonials: {
                title: "What People Say About Us",
                testimonial1: {
                    name: "Henry A. Cloud",
                    role: "Software Engineer",
                    quote: '"The workshop exceeded my expectations. I was able to implement AI solutions in my company immediately after completing the course."'
                },
                testimonial2: {
                    name: "Patricia Martinez",
                    role: "Data Scientist",
                    quote: '"Orbiton\'s AI workshop provided me with practical skills I could apply immediately. Their approach makes complex concepts accessible."'
                }
            },
            registration: {
                title: "Register for Our Workshop",
                subtitle: "Limited seats available! Register now to secure your spot in our upcoming AI workshop.",
                form: {
                    namePlaceholder: "Full Name",
                    emailPlaceholder: "Email Address",
                    selectDate: "Select Workshop Date",
                    date1: "June 15, 2023",
                    date2: "July 10, 2023",
                    date3: "August 5, 2023",
                    submitBtn: "Register Now"
                }
            },
            footer: {
                quickLinks: {
                    title: "Quick Links",
                    home: "Home",
                    features: "Features",
                    workshops: "Workshops",
                    about: "About Us"
                },
                resources: {
                    title: "Resources",
                    documentation: "Documentation",
                    api: "API",
                    support: "Support",
                    community: "Community"
                },
                connect: {
                    title: "Connect",
                    twitter: "Twitter",
                    linkedin: "LinkedIn",
                    facebook: "Facebook",
                    instagram: "Instagram"
                },
                copyright: "© 2025 Brave ID. All Rights Reserved."
            }
        },
        pt: {
            title: "Orbiton - Libere o Poder da IA",
            login: "Entrar",
            getStarted: "Começar Agora",
            nav: {
                home: "Início",
                features: "Recursos",
                workshop: "Workshop",
                about: "Sobre",
                contact: "Contato"
            },
            hero: {
                title: "Libere o Poder da<br>Inteligência Artificial<br>em Apenas 4 Horas",
                description: "Aprenda e explore técnicas de ponta em IA. Domine as ferramentas e aplicações mais recentes para impacto imediato em seu negócio.",
                cta: "Começar Agora"
            },
            features: {
                title: "Recursos Impulsionados por IA",
                card1: {
                    title: "Treinamento Avançado em IA",
                    description: "Caminhos de aprendizado personalizados para ajudá-lo a dominar os fundamentos da IA mais rapidamente que métodos tradicionais."
                },
                card2: {
                    title: "Machine Learning",
                    description: "Aprenda como funcionam os algoritmos preditivos e implemente seus próprios modelos com nossa estrutura guiada."
                },
                card3: {
                    title: "Análise de Dados",
                    description: "Descubra como extrair insights significativos de grandes conjuntos de dados usando técnicas avançadas de IA."
                },
                card4: {
                    title: "Redes Neurais",
                    description: "Construa e treine redes neurais para reconhecimento de imagem, processamento de linguagem natural e muito mais."
                }
            },
            workshop: {
                title: "Experiência Imersiva de Workshop",
                item1: {
                    title: "Introdução à Inteligência Artificial",
                    description: "Descubra os fundamentos que sustentam a IA moderna. Entenda o que é, como funciona e por que a IA está transformando o mundo em ritmo acelerado."
                },
                item2: {
                    title: "Ferramentas com IA na Prática",
                    description: "Explore as ferramentas que já estão moldando o mercado. Experimente o uso de ChatGPT, Midjourney, Copilot e outras soluções que facilitam tarefas e impulsionam resultados."
                },
                item3: {
                    title: "Criatividade e Geração de Conteúdo",
                    description: "Use a IA como aliada na criação de ideias, imagens e textos. Aprenda como criar conteúdos únicos com o apoio de modelos generativos e ampliar seu repertório criativo."
                },
                item4: {
                    title: "Aplicações Reais e Desafios Profissionais",
                    description: "Construa soluções práticas com IA para negócios e projetos. Vivencie desafios reais com acompanhamento e desenvolva respostas com IA voltadas para o mundo profissional."
                },
                item5: {
                    title: "Depoimentos e Transformações",
                    description: "Histórias reais de quem aplicou o conhecimento com sucesso. Veja como outros profissionais mudaram suas carreiras após aplicar o que aprenderam em workshops como este."
                },
                item6: {
                    title: "Próximos Passos e Oportunidades",
                    description: "Prepare-se para o futuro com conhecimento e visão estratégica. Entenda como se posicionar no mercado, quais áreas estão em alta e como seguir aprendendo no universo da IA."
                }
            },
            testimonials: {
                title: "O Que as Pessoas Dizem Sobre Nós",
                testimonial1: {
                    name: "Henry A. Cloud",
                    role: "Engenheiro de Software",
                    quote: '"O workshop superou minhas expectativas. Consegui implementar soluções de IA na minha empresa imediatamente após concluir o curso."'
                },
                testimonial2: {
                    name: "Patricia Martinez",
                    role: "Cientista de Dados",
                    quote: '"O workshop de IA da Orbiton me proporcionou habilidades práticas que pude aplicar imediatamente. A abordagem deles torna conceitos complexos acessíveis."'
                }
            },
            registration: {
                title: "Inscreva-se no Nosso Workshop",
                subtitle: "Vagas limitadas! Registre-se agora para garantir seu lugar em nosso próximo workshop de IA.",
                form: {
                    namePlaceholder: "Nome Completo",
                    emailPlaceholder: "Endereço de E-mail",
                    selectDate: "Selecione a Data do Workshop",
                    date1: "15 de Junho, 2023",
                    date2: "10 de Julho, 2023",
                    date3: "5 de Agosto, 2023",
                    submitBtn: "Inscrever-se Agora"
                }
            },
            footer: {
                quickLinks: {
                    title: "Links Rápidos",
                    home: "Início",
                    features: "Recursos",
                    workshops: "Workshops",
                    about: "Sobre Nós"
                },
                resources: {
                    title: "Recursos",
                    documentation: "Documentação",
                    api: "API",
                    support: "Suporte",
                    community: "Comunidade"
                },
                connect: {
                    title: "Conecte-se",
                    twitter: "Twitter",
                    linkedin: "LinkedIn",
                    facebook: "Facebook",
                    instagram: "Instagram"
                },
                copyright: "© 2025 Brave ID. Todos os direitos reservados."
            }
        }
    };

    // Current language
    let currentLang = localStorage.getItem('language') || 'en';
    
    // Set initial language
    setLanguage(currentLang);
    
    // Language switcher event listeners
    document.querySelectorAll('.language-btn').forEach(btn => {
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('active');
        }
        
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            setLanguage(lang);
            
            // Update active state
            document.querySelectorAll('.language-btn').forEach(b => {
                b.classList.remove('active');
            });
            btn.classList.add('active');
            
            // Save preference
            localStorage.setItem('language', lang);
        });
    });
    
    // Function to set language
    function setLanguage(lang) {
        if (!translations[lang]) return;
        
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const keys = element.dataset.i18n.split('.');
            let text = translations[lang];
            
            // Navigate through nested objects
            for (const key of keys) {
                text = text[key];
                if (!text) break;
            }
            
            if (text) {
                if (element.tagName === 'TITLE') {
                    element.textContent = text;
                } else {
                    element.innerHTML = text;
                }
            }
        });
        
        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const keys = element.dataset.i18nPlaceholder.split('.');
            let text = translations[lang];
            
            for (const key of keys) {
                text = text[key];
                if (!text) break;
            }
            
            if (text) {
                element.placeholder = text;
            }
        });
        
        // Update select options
        document.querySelectorAll('[data-i18n-select]').forEach(select => {
            const selectBase = select.dataset.i18nSelect;
            
            Array.from(select.options).forEach(option => {
                if (option.dataset.i18n) {
                    const optionKey = option.dataset.i18n;
                    const keys = optionKey.split('.');
                    let text = translations[lang];
                    
                    for (const key of keys) {
                        text = text[key];
                        if (!text) break;
                    }
                    
                    if (text) {
                        option.textContent = text;
                    }
                }
            });
        });
    }
    
    // Add smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation effects on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.feature-card, .workshop-item, .testimonial-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    };

    // Add visible class to elements in viewport
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check

    // Navbar background change on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Form validation
    const registrationForm = document.querySelector('.registration-form form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic validation
            const inputs = registrationForm.querySelectorAll('input, select');
            let isValid = true;
            
            inputs.forEach(input => {
                if (input.value.trim() === '') {
                    isValid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });
            
            if (isValid) {
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.classList.add('success-message');
                successMessage.textContent = 'Registration successful! We will contact you shortly.';
                
                registrationForm.innerHTML = '';
                registrationForm.appendChild(successMessage);
            }
        });
    }

    // Add light particle effect to hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        // Create canvas element
        const canvas = document.createElement('canvas');
        canvas.classList.add('particles-canvas');
        heroSection.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        
        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = heroSection.offsetWidth;
            canvas.height = heroSection.offsetHeight;
        };
        
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        
        // Particle class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 2 - 1;
                this.speedY = Math.random() * 2 - 1;
                this.color = `rgba(${Math.random() * 100 + 100}, ${Math.random() * 100 + 100}, 255, ${Math.random() * 0.5 + 0.1})`;
            }
            
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                
                if (this.x < 0 || this.x > canvas.width) {
                    this.speedX = -this.speedX;
                }
                
                if (this.y < 0 || this.y > canvas.height) {
                    this.speedY = -this.speedY;
                }
            }
            
            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        // Create particles array
        const particles = [];
        for (let i = 0; i < 50; i++) {
            particles.push(new Particle());
        }
        
        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            
            // Connect nearby particles with lines
            for (let i = 0; i < particles.length; i++) {
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(100, 100, 255, ${0.1 * (1 - distance / 100)})`;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            
            requestAnimationFrame(animate);
        };
        
        animate();
    }
});

// Update CSS styles dynamically for animation effects
document.head.insertAdjacentHTML('beforeend', `
<style>
    .feature-card, .workshop-item, .testimonial-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .feature-card.visible, .workshop-item.visible, .testimonial-card.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    .particles-canvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
    }
    
    header.scrolled {
        background-color: rgba(10, 10, 24, 0.95);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }
    
    .success-message {
        background-color: rgba(76, 175, 80, 0.2);
        color: #4CAF50;
        padding: 15px;
        border-radius: 10px;
        text-align: center;
        margin-top: 20px;
        border: 1px solid rgba(76, 175, 80, 0.5);
    }
    
    .error {
        border-color: #ff308f !important;
        box-shadow: 0 0 5px rgba(255, 48, 143, 0.5);
    }
</style>
`);