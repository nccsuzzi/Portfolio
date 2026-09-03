/**
 * MUHAMMAD USMAN · PORTFOLIO SCRIPT
 * Handles real-time telemetry, architecture inspection, project modals,
 * theme toggling, clipboard interactions, and section scroll-spy.
 */

// --- Deep Dive Data Dictionary ---
const DEEP_DIVES = {
  afterdesk: {
    title: "Afterdesk AI",
    category: "Computer Vision & Document Automation",
    status: "PRODUCTION SYSTEM · DEPLOYED",
    link: "https://afterdesk.ai",
    linkText: "VISIT AFTERDESK.AI ↗",
    stack: ["OpenCV", "Python", "FastAPI", "PyMuPDF", "Docker"],
    summary: "Built an AI-powered document automation pipeline using OpenCV and computer vision to analyze arbitrary PDF templates, detect layout elements and form fields, and automatically map structured data to appropriate regions.",
    architecture: [
      "1. Computer Vision Layout Analysis: Used OpenCV contour detection, morphological transformations, and adaptive thresholding to detect arbitrary bounding boxes, tables, and form lines across heterogeneous documents.",
      "2. Text & Coordinate Extraction: Extracted font-weighted bounding boxes with PyMuPDF to correlate OCR/PDF coordinates against detected visual contours.",
      "3. Dynamic Field Mapping: Engineered automated schema matching mapping incoming JSON payloads to arbitrary template targets.",
      "4. FastAPI Microservice: High-throughput async endpoints rendering filled, valid, high-resolution PDFs in under 450ms."
    ],
    impact: [
      "Cut manual document layout preparation from hours to zero-touch automated ingestion.",
      "Supports arbitrary multi-page PDF templates with sub-pixel field alignment."
    ]
  },
  syscore: {
    title: "Syscore AI",
    category: "Foundation Models & Enterprise ERP Middleware",
    status: "INTERNAL ENTERPRISE DEPLOYMENT · NDA-PROTECTED",
    stack: ["AWS Bedrock", "AWS S3", "FastAPI", "Python", "SYSPRO ERP"],
    summary: "AI-powered middleware for SYSPRO ERP using AWS Bedrock for foundation model orchestration and AWS S3 for XML record storage, enabling natural language and multimodal inputs.",
    architecture: [
      "1. Multimodal & NL Ingestion: Users and operators can submit inquiries, receipts, or voice-transcribed memos directly to the system.",
      "2. AWS Bedrock Orchestration: Formulates strictly validated XML schema requests required by SYSPRO's legacy transactional API.",
      "3. XML Storage & Audit Trail in AWS S3: Event-sourced ledger of all queries, generated payloads, and ERP responses for deterministic rollback and governance.",
      "4. Real-time Caching Layer: High-frequency ERP inventory queries cached with validation hooks to eliminate repetitive mainframe reads."
    ],
    impact: [
      "Achieved 10x faster data retrieval for ERP operational teams.",
      "~99% reduction in ERP request formatting and validation errors."
    ]
  },
  speakify: {
    title: "Speakify AI",
    category: "B2B Marketplace & RAG Matching Engine",
    status: "PRODUCTION SYSTEM · LIVE",
    link: "https://www.wearespeakify.com",
    linkText: "VISIT WEARESPEAKIFY.COM ↗",
    stack: ["FastAPI", "PostgreSQL", "Cohere", "Pinecone", "LiteLLM", "Langfuse", "Stripe", "DocuSign"],
    summary: "Engineered an asynchronous FastAPI + PostgreSQL backend across 15+ API domains for a B2B SaaS marketplace handling the end-to-end speaker booking lifecycle.",
    architecture: [
      "1. Hybrid RAG Matching Engine: Cohere dense embeddings indexed in Pinecone paired with keyword filters to match conference agendas with speaker profiles.",
      "2. Multi-Vendor LLM Gateway: Integrated LiteLLM with fallback routing and Langfuse tracing for end-to-end latency & cost observability.",
      "3. Automated Contracting & Payouts: Zero-touch commission splits via Stripe Connect and automated dynamic agreement generation via DocuSign APIs.",
      "4. Production Scale: Engineered across 15+ micro-domains with async SQLAlchemy and connection pooling."
    ],
    impact: [
      "Managing 360+ speaker profiles and live conference bookings.",
      "Zero-touch revenue pipeline from inquiry to signed contract and escrow payout."
    ]
  },
  kernel: {
    title: "Kernel-Global",
    category: "GenAI Microservice & LLM Security",
    status: "PRODUCTION SUITE · LIVE",
    link: "https://www.kernel-global.com",
    linkText: "VISIT KERNEL-GLOBAL.COM ↗",
    stack: ["Python", "FastAPI", "Azure OpenAI", "MySQL", "PyMuPDF", "python-docx", "Docker", "Pytest", "Locust"],
    summary: "Architected an asynchronous GenAI microservice using FastAPI, AsyncIO, and Azure OpenAI to automate candidate assessment, recruitment workflows, and candidate support.",
    architecture: [
      "1. Document Parsing Pipeline: Streamlined PyMuPDF & python-docx extraction parsing 100+ page CVs/portfolios into clean JSON representations.",
      "2. Conversational Agent with Context Retrieval: Dynamic summarization over MySQL chat history reducing conversation token count and API latency by ~35%.",
      "3. LLM Security Guardrails: Hardened prompt-injection filters, jailbreak detection layers, and input sanitization.",
      "4. Reliability Suite: Backed by 40+ unit, integration, and security tests plus Locust-based concurrent load testing up to 1,000 req/min."
    ],
    impact: [
      "~35% reduction in LLM token usage and latency via dynamic summarization.",
      "Zero injection escapes across 40+ simulated adversarial penetration tests."
    ]
  },
  automl: {
    title: "AutoML Platform",
    category: "MLOps & Automated Model Lifecycle",
    status: "INTERNAL ENTERPRISE DEPLOYMENT · MLOPS",
    stack: ["Python", "MLflow", "Docker", "FastAPI", "Scikit-learn", "Prometheus", "Grafana"],
    summary: "Self-service MLOps platform automating the model lifecycle across training, evaluation, deployment, and monitoring for multiple ML frameworks.",
    architecture: [
      "1. Automated Training Pipelines: Programmatic dataset splitting, hyperparameter sweeping with Bayesian optimization, and artifact logging via MLflow.",
      "2. Containerized Model Serving: Dynamic FastAPI wrapper generation packaging trained models into reproducible Docker images.",
      "3. Observability & Drift Detection: Prometheus metric exporters tracking prediction latency, memory footprint, and input distribution drift visualized on Grafana dashboards."
    ],
    impact: [
      "~60% reduction in average model deployment time.",
      "~70% decrease in monitoring setup overhead across teams."
    ]
  },
  reid: {
    title: "View-Invariant Person Re-ID (Springer Published)",
    category: "Computer Vision & Deep Learning Research",
    status: "PEER REVIEWED PUBLICATION · THE VISUAL COMPUTER",
    stack: ["PyTorch", "OpenCV", "GANs", "Attention Mechanisms", "Python"],
    summary: "Designed a Pose-Aware Autoencoder GAN (AE-GAN) with an attention-driven feature fusion module to synthesise view-invariant features across non-overlapping surveillance camera networks.",
    architecture: [
      "1. Pose-Aware Autoencoder: Decouples view-dependent posture noise from identity-specific biometric signatures.",
      "2. Attention-Driven Feature Fusion: Channel and spatial attention maps weight key biometric markers invariant to camera viewing angle and lighting differences.",
      "3. Generative Reconstruction: AE-GAN synthesizes missing perspective angles to enable accurate cross-camera identity matching.",
      "4. Peer-Reviewed Validation: Published in Springer's 'The Visual Computer' (DOI: 10.1007/s00371-025-04300-1)."
    ],
    impact: [
      "Achieved +5% top-1 accuracy gain over established baseline models on benchmark datasets.",
      "Validated by international peer-reviewed publication in Springer."
    ]
  },
  ctxintel: {
    title: "ctxintel (PyPI Open-Source Package)",
    category: "LLM Context Optimization & Deterministic Pipelines",
    status: "AVAILABLE ON PYPI · ZERO EXTERNAL API CALLS",
    stack: ["Python", "TF-IDF", "spaCy NER", "Extractive Summarization", "PyPI"],
    summary: "An open-source Python package for deterministic LLM context optimization. Implements a 6-stage pipeline (ranking, extraction, memory, compression, optimization) using zero external API calls.",
    architecture: [
      "Stage 1 - Semantic Chunk Ranking: TF-IDF + Cosine scoring to prioritize high-salience context chunks.",
      "Stage 2 - Entity Extraction: High-speed spaCy NER extracting critical organizations, dates, parameters, and tokens.",
      "Stage 3 - Deterministic Compression: Redundancy elimination and extractive sentence compression saving 30-50% context window.",
      "Stage 4 - Memory Persistence: Lightweight local vector/keyword store for multi-turn conversational agents.",
      "Stage 5 - Guardrail Filtering: Regex and heuristic checks stripping PII and noise tokens.",
      "Stage 6 - Token Budget Packing: Optimal bin-packing into target LLM context constraints without API latency."
    ],
    impact: [
      "Zero external API latency or cost overhead — runs 100% locally.",
      "Installable with a single command: pip install ctxintel."
    ]
  },
  phebsoft: {
    title: "Phebsoft · Client: Gitwork",
    category: "Autonomous Multi-Agent Systems & RAG",
    status: "CURRENT ROLE · 09/2025 - PRESENT",
    stack: ["LangGraph", "Multi-Agent Systems", "FastAPI", "GCP VM", "Docker", "RAG", "Vector Search"],
    summary: "Architecting autonomous multi-agent systems and real-time RAG pipelines for Gitwork product documentation and workflow automation.",
    architecture: [
      "1. Autonomous Multi-Agent Loop: Coordinated agents using LangGraph for multi-step scraping, contextual retrieval, and API-driven execution.",
      "2. Contextual RAG Pipeline: Vector embeddings with dense retrieval and reranking for high-accuracy product QA.",
      "3. High-Throughput FastAPI Services: Async endpoints deployed in containerized microservices on GCP VM Compute Engine."
    ],
    impact: [
      "Sub-second multi-agent orchestration for end-to-end task automation.",
      "Streamlined deployment and live model inference on GCP."
    ]
  },
  nastp: {
    title: "NASTP (National Aerospace Science and Technology Park)",
    category: "Defence AI & Scalable Language Models",
    status: "AI ENGINEER · 02/2025 - 09/2025",
    stack: ["FastAPI", "AWS SageMaker", "PyTorch", "Transformers", "OCR", "Speech/Voice AI"],
    summary: "Curated 100k+ digital forensic records, fine-tuned transformer models on AWS SageMaker, and delivered 5+ production RESTful APIs with <400ms inference latency.",
    architecture: [
      "1. Large-Scale Forensic Dataset: Cleaned, structured, and curated 100k+ multimodal digital forensic records.",
      "2. AWS SageMaker Fine-Tuning: Fine-tuned transformer models for multi-class document classification and semantic retrieval (+18% accuracy).",
      "3. Latency Optimization: Quantized models and tuned async FastAPI worker threads achieving <400ms inference latency across OCR, speech, and voice endpoints."
    ],
    impact: [
      "+18% improvement in categorization accuracy on forensic records.",
      "<400ms inference latency across all production REST endpoints."
    ]
  }
};

// --- Architecture Node Descriptions ---
const ARCH_NODES = {
  client: {
    title: "CLIENT LAYER",
    desc: "Web App / Mobile / API Consumers sending streaming requests over WebSocket (WSS) and Server-Sent Events (SSE). Handles token-by-token rendering and user input interrupts."
  },
  gateway: {
    title: "FASTAPI GATEWAY",
    desc: "Asynchronous API gateway handling authentication, session state, rate-limiting, and routing. Decouples client transports from backend ML worker pods."
  },
  agent: {
    title: "MULTI-AGENT POD (LangGraph + LiteLLM)",
    desc: "Stateful agent execution loop running LangGraph workflows, dynamic prompt assembly, tool dispatching, and fallback routing across Claude, GPT-4, and Bedrock."
  },
  ctxintel: {
    title: "CTXINTEL (Context Optimizer)",
    desc: "Usman's open-source 6-stage deterministic optimization engine. Extracts NER, compresses redundancy, and prioritizes tokens locally with 0 external API latency before feeding LLMs."
  },
  vector: {
    title: "VECTOR STORE & RETRIEVAL (Pinecone / FAISS / pgvector)",
    desc: "Dense semantic indexing with hybrid keyword search, cosine distance calculations, and metadata filtering for sub-50ms document retrieval."
  },
  observability: {
    title: "OBSERVABILITY & TRACING (Langfuse + Prometheus)",
    desc: "End-to-end flight recorder tracking token costs, LLM latency spans, prompt drift, and system health metrics visualized in real time."
  },
  store: {
    title: "PERSISTENT STORAGE (PostgreSQL + Redis)",
    desc: "Async relational schema for users and billing, paired with Redis for low-latency session locks, ephemeral memory, and message queues."
  }
};

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  initClock();
  initTheme();
  initScrollSpy();
  initArchInspector();
  initModals();
  initCopyButtons();
});

// --- Islamabad Real-time Clock (GMT+5) ---
function initClock() {
  const clockEl = document.getElementById("live-clock");
  if (!clockEl) return;

  function update() {
    const now = new Date();
    // Format to PKT (UTC+5)
    const options = {
      timeZone: "Asia/Karachi",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    };
    const timeStr = new Intl.DateTimeFormat("en-US", options).format(now);
    clockEl.textContent = `${timeStr} PKT (GMT+5)`;
  }

  update();
  setInterval(update, 1000);
}

// --- Theme Toggling (Dark / Light) ---
function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  const html = document.documentElement;

  // Read saved theme
  const savedTheme = localStorage.getItem("mu_theme") || "dark";
  html.setAttribute("data-theme", savedTheme);
  updateThemeButtonLabel(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const current = html.getAttribute("data-theme") || "dark";
      const next = current === "dark" ? "light" : "dark";
      html.setAttribute("data-theme", next);
      localStorage.setItem("mu_theme", next);
      updateThemeButtonLabel(next);
    });
  }
}

function updateThemeButtonLabel(theme) {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  if (!toggleBtn) return;
  toggleBtn.textContent = theme === "dark" ? "◑ LIGHT" : "◐ DARK";
  toggleBtn.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} mode`);
}

// --- Scroll Spy for Section Navigation (§01 – §08) ---
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".section-pill, .mobile-nav-link");

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            const href = link.getAttribute("href");
            if (href === `#${id}`) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
        }
      });
    },
    { threshold: 0.25, rootMargin: "-10% 0px -40% 0px" }
  );

  sections.forEach((sec) => observer.observe(sec));
}

// --- Architecture Diagram Inspector ---
function initArchInspector() {
  const inspectorBox = document.getElementById("arch-inspector");
  const nodes = document.querySelectorAll(".arch-node");

  if (!inspectorBox || !nodes.length) return;

  nodes.forEach((node) => {
    const key = node.getAttribute("data-node");
    const data = ARCH_NODES[key];

    if (!data) return;

    node.addEventListener("mouseenter", () => {
      nodes.forEach((n) => n.classList.remove("active"));
      node.classList.add("active");
      inspectorBox.innerHTML = `
        <div style="color:var(--signal);font-weight:600;margin-bottom:4px">// [INSPECTING] ${data.title}</div>
        <div style="color:var(--fg);">${data.desc}</div>
      `;
    });

    node.addEventListener("focus", () => {
      nodes.forEach((n) => n.classList.remove("active"));
      node.classList.add("active");
      inspectorBox.innerHTML = `
        <div style="color:var(--signal);font-weight:600;margin-bottom:4px">// [INSPECTING] ${data.title}</div>
        <div style="color:var(--fg);">${data.desc}</div>
      `;
    });
  });

  // Reset to idle when leaving SVG
  const svgWrapper = document.querySelector(".arch-svg-wrapper");
  if (svgWrapper) {
    svgWrapper.addEventListener("mouseleave", () => {
      nodes.forEach((n) => n.classList.remove("active"));
      inspectorBox.innerHTML = `
        <div style="color:var(--fg-3)">// Telemetry standby · hover or click any node to inspect subsystem parameters →</div>
      `;
    });
  }
}

// --- Deep Dive Modal Dialogs ---
function initModals() {
  const overlay = document.getElementById("modal-overlay");
  const closeBtn = document.getElementById("modal-close-btn");
  const titleEl = document.getElementById("modal-title");
  const catEl = document.getElementById("modal-cat");
  const statusEl = document.getElementById("modal-status");
  const stackEl = document.getElementById("modal-stack");
  const bodyEl = document.getElementById("modal-body");

  if (!overlay) return;

  function openModal(key) {
    const item = DEEP_DIVES[key];
    if (!item) return;

    titleEl.textContent = item.title;
    catEl.textContent = `// ${item.category}`;
    statusEl.textContent = item.status;
    
    // Stack pills
    stackEl.innerHTML = item.stack
      .map(
        (tech) =>
          `<span class="font-mono text-[11px]" style="padding:2px 8px;background:var(--overlay-2);border:1px solid var(--rule);border-radius:2px;color:var(--fg);">${tech}</span>`
      )
      .join(" ");

    // Architecture details & impact
    let html = `
      ${
        item.link
          ? `<div style="margin-bottom: 1.25rem;">
              <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="text-decoration:none;">
                ${item.linkText || "VISIT LIVE PLATFORM ↗"}
              </a>
            </div>`
          : ""
      }
      <p style="font-size:1.1rem;line-height:1.6;color:var(--fg);margin-bottom:1.5rem;">${item.summary}</p>
      
      <div class="caption-signal" style="margin-bottom:0.75rem;">// SUBSYSTEM ARCHITECTURE & IMPLEMENTATION</div>
      <ul style="margin-bottom:1.5rem;padding-left:1.25rem;color:var(--fg-2);line-height:1.7;font-size:0.95rem;">
        ${item.architecture.map((a) => `<li style="margin-bottom:0.5rem;">${a}</li>`).join("")}
      </ul>

      <div class="caption-signal" style="margin-bottom:0.75rem;">// MEASURED PRODUCTION IMPACT</div>
      <ul style="padding-left:1.25rem;color:var(--fg);line-height:1.7;font-size:0.95rem;">
        ${item.impact.map((imp) => `<li style="margin-bottom:0.4rem;color:var(--pulse);">✓ ${imp}</li>`).join("")}
      </ul>
    `;

    bodyEl.innerHTML = html;
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  // Open triggers
  document.querySelectorAll("[data-deep-dive]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const key = btn.getAttribute("data-deep-dive");
      openModal(key);
    });
  });

  // Close triggers
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  // ESC key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("open")) {
      closeModal();
    }
  });
}

// --- Copy to Clipboard Buttons ---
function initCopyButtons() {
  document.querySelectorAll(".copy-cmd-btn, .copy-text-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const textToCopy = btn.getAttribute("data-copy");
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        const origText = btn.textContent;
        btn.textContent = "COPIED ✓";
        btn.style.color = "var(--pulse)";
        btn.style.borderColor = "var(--pulse)";

        setTimeout(() => {
          btn.textContent = origText;
          btn.style.color = "";
          btn.style.borderColor = "";
        }, 2000);
      });
    });
  });
}
