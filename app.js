/* ==========================================================================
   JAVASCRIPT CONTROLLER - APP VISTORIA SANITÁRIA (LONDRINA)
   ========================================================================== */

// 1. Checklist Databases (Loaded from independent files database_creche.js and database_drogaria.js)

const CNAE_MAP = {
    "8511200": { cnae: "8511-2/00", name: "Educação Infantil - Creche", checklist: CHECKLIST_CRECHE, group: "creche" },
    
    "4771701": { cnae: "4771-7/01", name: "Drogarias e Farmácias (EAC)", checklist: CHECKLIST_DROGARIA, group: "drogaria" },
    "4771702": { cnae: "4771-7/02", name: "Drogarias e Farmácias (EAC)", checklist: CHECKLIST_DROGARIA, group: "drogaria" },
    
    "4664800": { cnae: "4664-8/00", name: "Distribuidora de Produtos para a Saúde", checklist: CHECKLIST_DISTRIBUIDORA, group: "distribuidora" },
    "4645103": { cnae: "4645-1/03", name: "Distribuidora de Produtos para a Saúde", checklist: CHECKLIST_DISTRIBUIDORA, group: "distribuidora" },
    "4645102": { cnae: "4645-1/02", name: "Distribuidora de Produtos para a Saúde", checklist: CHECKLIST_DISTRIBUIDORA, group: "distribuidora" },
    "4645101": { cnae: "4645-1/01", name: "Distribuidora de Produtos para a Saúde", checklist: CHECKLIST_DISTRIBUIDORA, group: "distribuidora" }
};

const CNAE_GROUPS = {
    "creche": [
        { cnae: "8511-2/00", desc: "Educação Infantil - Creche" }
    ],
    "drogaria": [
        { cnae: "4771-7/01", desc: "Comércio varejista de produtos farmacêuticos, com manipulação de fórmulas" },
        { cnae: "4771-7/02", desc: "Comércio varejista de produtos farmacêuticos, sem manipulação de fórmulas (Drogaria)" }
    ],
    "distribuidora": [
        { cnae: "4664-8/00", desc: "Comércio atacadista de máquinas, aparelhos e equipamentos para uso odonto-médico-hospitalar; partes e peças" },
        { cnae: "4645-1/03", desc: "Comércio atacadista de produtos odontológicos" },
        { cnae: "4645-1/02", desc: "Comércio atacadista de próteses e artigos de ortopedia" },
        { cnae: "4645-1/01", desc: "Comércio atacadista de instrumentos e materiais para uso médico, cirúrgico, hospitalar e de laboratórios" }
    ]
};

let CHECKLIST_DATABASE = [];
let CATEGORIES = [];

function initActiveChecklist() {
    const digits = (state.activityCnae || "").replace(/\D/g, '');
    const match = CNAE_MAP[digits] || CNAE_MAP["8511200"]; // Default to Creche
    CHECKLIST_DATABASE = match.checklist;
    CATEGORIES = [...new Set(CHECKLIST_DATABASE.map(item => item.category))];
}

function handleCnaeChange(rawCnae) {
    const digits = rawCnae.replace(/\D/g, '');
    const match = CNAE_MAP[digits];
    if (match && state.activityName !== match.name) {
        const hasEvaluations = Object.keys(state.evaluations).length > 0;
        if (!hasEvaluations || confirm(`Você digitou o CNAE do setor "${match.name}". Isto irá redefinir o checklist da vistoria e limpar as respostas atuais. Deseja continuar?`)) {
            state.activityName = match.name;
            state.activityCnae = match.cnae; // Use standard formatting
            state.activityCnaes = [match.cnae]; // Initialize with main
            state.evaluations = {};
            saveStateToStorage();
            
            // Sync form UI
            const nameInput = document.getElementById("activity-name");
            if (nameInput) nameInput.value = match.name;
            const cnaeInput = document.getElementById("activity-cnae");
            if (cnaeInput) cnaeInput.value = match.cnae;
            
            // Re-render checkboxes
            renderCnaeCheckboxes();
            
            // Re-render checklist
            initActiveChecklist();
            currentCategoryIndex = 0;
            renderCategoryTabs();
            showCategory(0);
            updateProgressBar();
        } else {
            // Revert to current CNAE
            const cnaeInput = document.getElementById("activity-cnae");
            if (cnaeInput) cnaeInput.value = state.activityCnae;
        }
    }
}

function renderCnaeCheckboxes() {
    const container = document.getElementById("cnae-additional-container");
    const list = document.getElementById("cnae-checkboxes-list");
    if (!container || !list) return;
    
    const digits = (state.activityCnae || "").replace(/\D/g, '');
    const match = CNAE_MAP[digits] || CNAE_MAP["8511200"];
    const groupName = match.group;
    
    const groupItems = CNAE_GROUPS[groupName] || [];
    
    // Ensure state.activityCnaes contains at least the main cnae
    if (!state.activityCnaes) {
        state.activityCnaes = [state.activityCnae || "8511-2/00"];
    }
    if (!state.activityCnaes.includes(state.activityCnae)) {
        state.activityCnaes.unshift(state.activityCnae);
    }
    
    if (groupItems.length > 1) {
        container.classList.remove("hidden");
        list.innerHTML = "";
        
        groupItems.forEach(item => {
            const isMain = item.cnae === state.activityCnae;
            const isChecked = state.activityCnaes.includes(item.cnae) || isMain;
            
            const itemRow = document.createElement("label");
            itemRow.className = "checkbox-label";
            itemRow.style = "display: flex; gap: 8px; font-size: 0.8rem; font-weight: normal; margin-bottom: 2px; cursor: pointer; line-height: 1.4; color: var(--text-main); text-align: left;";
            itemRow.innerHTML = `
                <input type="checkbox" class="additional-cnae-check" value="${item.cnae}" ${isChecked ? 'checked' : ''} ${isMain ? 'disabled' : ''} style="width: auto; margin-top: 2px;">
                <span><strong>${item.cnae}</strong> - ${item.desc} ${isMain ? '<em style="color: var(--primary); font-size: 0.75rem;">(Principal)</em>' : ''}</span>
            `;
            
            if (!isMain) {
                itemRow.querySelector("input").addEventListener("change", (e) => {
                    const cnaeValue = e.target.value;
                    if (e.target.checked) {
                        if (!state.activityCnaes.includes(cnaeValue)) {
                            state.activityCnaes.push(cnaeValue);
                        }
                    } else {
                        state.activityCnaes = state.activityCnaes.filter(c => c !== cnaeValue);
                    }
                    saveStateToStorage();
                });
            }
            
            list.appendChild(itemRow);
        });
    } else {
        container.classList.add("hidden");
        list.innerHTML = "";
    }
}

// 2. Application State Definition
let state = {
    theme: "light",
    inspectors: [ { id: 1, name: "", registration: "", signature: null } ],
    inspectionDate: new Date().toISOString().split('T')[0],
    establishmentName: "",
    establishmentCnpj: "",
    establishmentRepresentative: "",
    establishmentAddress: "",
    establishmentRt: "",
    establishmentRtCouncil: "",
    establishmentSei: "",
    establishmentAccomp: "",
    includeRepSignature: true,
    activityName: "Educação Infantil - Creche",
    activityCnae: "8511-2/00",
    activityCnaes: ["8511-2/00"],
    evaluations: {},
    complementaryInfo: "",
    representativeCpf: "",
    repLegalAgreement: false,
    signatures: {
        rep: null        // Base64 data
    }
};

let currentCategoryIndex = 0;

// Signature canvas utilities
let signaturePads = {};

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    // Check login status
    const loggedIn = localStorage.getItem("visa_logged_in") === "true";
    const overlay = document.getElementById("login-overlay");
    if (loggedIn) {
        if (overlay) overlay.classList.add("hidden");
    } else {
        if (overlay) overlay.classList.remove("hidden");
    }

    initInspectionId();
    loadStateFromStorage();
    initTheme();
    initActiveChecklist();
    renderInspectorsForm();
    initHeaderInputs();
    renderCnaeCheckboxes();
    renderCategoryTabs();
    showCategory(currentCategoryIndex);
    renderSignaturePadsUI();
    updateProgressBar();
    updateStorageUsageIndicator();
    setupEventListeners();
});

// ==========================================================================
// PERSISTENCE (LocalStorage & Auto-save)
// ==========================================================================
let inspectionId = "";

function initInspectionId() {
    const urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('id');
    
    if (!id) {
        // Check for legacy state to migrate
        const legacy = localStorage.getItem("visa_vistoria_state");
        id = "ins_" + Date.now();
        
        if (legacy) {
            localStorage.setItem(`visa_state_${id}`, legacy);
            localStorage.removeItem("visa_vistoria_state");
        }
        
        // Push query param silently
        window.history.replaceState(null, "", "?id=" + id);
    }
    inspectionId = id;
}

function saveStateToStorage() {
    try {
        localStorage.setItem(`visa_state_${inspectionId}`, JSON.stringify(state));
        updateInspectionsIndex();
        updateStorageUsageIndicator();
    } catch (e) {
        console.error("Erro ao salvar no LocalStorage:", e);
        alert("Aviso: O limite de armazenamento local foi excedido. Exclua vistorias antigas ou exporte os dados.");
    }
}

function updateInspectionsIndex() {
    try {
        let index = [];
        const savedIndex = localStorage.getItem("visa_inspections_index");
        if (savedIndex) {
            index = JSON.parse(savedIndex);
        }
        
        // Remove current if exists, then prepend updated metadata
        index = index.filter(item => item.id !== inspectionId);
        index.unshift({
            id: inspectionId,
            establishmentName: state.establishmentName || "(Estabelecimento sem nome)",
            activityName: state.activityName || "Não selecionado",
            date: state.inspectionDate || "",
            lastModified: Date.now()
        });
        
        // Limit index to top 30
        if (index.length > 30) index = index.slice(0, 30);
        
        localStorage.setItem("visa_inspections_index", JSON.stringify(index));
    } catch (e) {
        console.error("Erro ao atualizar índice:", e);
    }
}

function loadStateFromStorage() {
    const saved = localStorage.getItem(`visa_state_${inspectionId}`);
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            // Merge loaded state
            state = { ...state, ...parsed };
            // Ensure evaluations is object
            if (!state.evaluations) state.evaluations = {};
            // Migrate single photo to photos array
            Object.keys(state.evaluations).forEach(itemId => {
                const val = state.evaluations[itemId];
                if (val) {
                    if (val.photo) {
                        if (!val.photos) val.photos = [val.photo];
                        delete val.photo;
                    }
                    if (!val.photos) {
                        val.photos = [];
                    }
                }
            });
            if (state.activityCnae && (!state.activityCnaes || state.activityCnaes.length === 0)) {
                state.activityCnaes = [state.activityCnae];
            }
            if (!state.activityCnaes) {
                state.activityCnaes = ["8511-2/00"];
            }
            if (!state.signatures) state.signatures = { rep: null };
            if (!state.inspectors || state.inspectors.length === 0) {
                state.inspectors = [ { id: 1, name: "", registration: "", signature: null } ];
            }
        } catch (e) {
            console.error("Erro ao carregar LocalStorage:", e);
        }
    } else {
        // Initialize default fields if empty
        state.inspectionDate = new Date().toISOString().split('T')[0];
    }
}

function updateStorageUsageIndicator() {
    const indicator = document.getElementById("storage-use");
    if (!indicator) return;
    
    let totalLength = 0;
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const val = localStorage.getItem(key);
        totalLength += (key.length + val.length);
    }
    
    // Default limit in browsers is 5MB
    const limit = 5 * 1024 * 1024;
    const percentage = ((totalLength / limit) * 100).toFixed(1);
    indicator.textContent = `Uso LocalStorage: ${percentage}%`;
    
    if (percentage > 80) {
        indicator.style.color = "var(--danger)";
        indicator.style.fontWeight = "bold";
    } else {
        indicator.style.color = "var(--text-secondary)";
        indicator.style.fontWeight = "normal";
    }
}

// ==========================================================================
// THEME MANAGEMENT
// ==========================================================================
function initTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
    updateThemeIcon();
}

function toggleTheme() {
    state.theme = state.theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", state.theme);
    updateThemeIcon();
    saveStateToStorage();
}

function updateThemeIcon() {
    const btn = document.getElementById("btn-theme");
    if (!btn) return;
    
    if (state.theme === "dark") {
        btn.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    } else {
        btn.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
    }
}

// ==========================================================================
// FORM FIELDS SYNC
// ==========================================================================
function initHeaderInputs() {
    const fields = [
        { id: "inspection-date", key: "inspectionDate" },
        { id: "establishment-name", key: "establishmentName" },
        { id: "establishment-cnpj", key: "establishmentCnpj" },
        { id: "establishment-representative", key: "establishmentRepresentative" },
        { id: "establishment-address", key: "establishmentAddress" },
        { id: "establishment-rt", key: "establishmentRt" },
        { id: "establishment-rt-council", key: "establishmentRtCouncil" },
        { id: "establishment-sei", key: "establishmentSei" },
        { id: "establishment-accomp", key: "establishmentAccomp" },
        { id: "activity-name", key: "activityName" },
        { id: "activity-cnae", key: "activityCnae" },
        { id: "complementary-info", key: "complementaryInfo" }
    ];
    
    fields.forEach(f => {
        const el = document.getElementById(f.id);
        if (el) {
            el.value = state[f.key] || "";
            el.addEventListener("input", (e) => {
                state[f.key] = e.target.value;
                saveStateToStorage();
                
                // Dynamically update the representative signature label if they type in their name
                if (f.key === "establishmentAccomp") {
                    const labelRepEl = document.getElementById("sig-label-rep");
                    if (labelRepEl) {
                        labelRepEl.textContent = e.target.value ? `Assinatura de: ${e.target.value}` : "Assinatura do Responsável por Acompanhar a Inspeção";
                    }
                }
            });
        }
    });
}

// ==========================================================================
// PROGRESS BAR
// ==========================================================================
function updateProgressBar() {
    const totalItens = CHECKLIST_DATABASE.length;
    const avaliados = Object.keys(state.evaluations).filter(id => {
        return state.evaluations[id] && state.evaluations[id].status;
    }).length;
    
    const percentage = totalItens > 0 ? Math.round((avaliados / totalItens) * 100) : 0;
    
    const progressFill = document.getElementById("progress-fill");
    const progressText = document.getElementById("progress-percentage");
    
    if (progressFill) progressFill.style.width = `${percentage}%`;
    if (progressText) progressText.textContent = `${percentage}% (${avaliados} de ${totalItens} avaliados)`;
    
    // Update badge indicators on categories list
    CATEGORIES.forEach((cat, idx) => {
        const catBadge = document.getElementById(`badge-cat-${idx}`);
        if (catBadge) {
            const catItens = CHECKLIST_DATABASE.filter(item => item.category === cat);
            const catEvaluated = catItens.filter(item => state.evaluations[item.id] && state.evaluations[item.id].status).length;
            catBadge.textContent = `${catEvaluated}/${catItens.length}`;
            
            // Stylize category completed state
            const catBtn = document.getElementById(`tab-cat-${idx}`);
            if (catBtn) {
                if (catEvaluated === catItens.length) {
                    catBtn.classList.add("completed");
                } else {
                    catBtn.classList.remove("completed");
                }
            }
        }
    });
}

// ==========================================================================
// CHEKLICST RENDER LOGIC
// ==========================================================================
function renderCategoryTabs() {
    const tabsContainer = document.getElementById("category-tabs");
    if (!tabsContainer) return;
    
    tabsContainer.innerHTML = "";
    
    CATEGORIES.forEach((cat, idx) => {
        const btn = document.createElement("button");
        btn.id = `tab-cat-${idx}`;
        btn.className = "category-btn";
        if (idx === currentCategoryIndex) btn.classList.add("active");
        
        btn.innerHTML = `
            <span>${cat}</span>
            <span class="cat-indicator" id="badge-cat-${idx}">0/0</span>
        `;
        
        btn.addEventListener("click", () => {
            showCategory(idx);
        });
        
        tabsContainer.appendChild(btn);
    });
}

function showCategory(index) {
    if (index < 0 || index >= CATEGORIES.length) return;
    
    // Update active tab styling
    document.querySelectorAll(".category-btn").forEach((btn, idx) => {
        if (idx === index) btn.classList.add("active");
        else btn.classList.remove("active");
    });
    
    currentCategoryIndex = index;
    const activeCat = CATEGORIES[index];
    
    const catName = document.getElementById("current-category-name");
    const catCount = document.getElementById("current-category-count");
    
    if (catName) catName.textContent = activeCat;
    
    const catItens = CHECKLIST_DATABASE.filter(item => item.category === activeCat);
    const evaluatedCount = catItens.filter(item => state.evaluations[item.id] && state.evaluations[item.id].status).length;
    if (catCount) catCount.textContent = `${evaluatedCount} / ${catItens.length}`;
    
    renderChecklistCards(catItens);
    
    // Toggle prev/next category button visibility
    const btnPrev = document.getElementById("btn-prev-cat");
    const btnNext = document.getElementById("btn-next-cat");
    
    if (btnPrev) btnPrev.style.visibility = index === 0 ? "hidden" : "visible";
    if (btnNext) {
        if (index === CATEGORIES.length - 1) {
            btnNext.innerHTML = `Ir para Assinatura &rarr;`;
        } else {
            btnNext.innerHTML = `Próxima Categoria &rarr;`;
        }
    }
}

function renderChecklistCards(items) {
    const container = document.getElementById("checklist-cards");
    if (!container) return;
    
    container.innerHTML = "";
    
    items.forEach(item => {
        const itemVal = state.evaluations[item.id] || { status: null, obs: "", photo: "", legislation: item.legislation };
        
        // Ensure default legislation is populated
        if (!itemVal.legislation) {
            itemVal.legislation = item.legislation;
        }
        
        const card = document.createElement("div");
        card.id = `card-item-${item.id}`;
        card.className = `question-card ${itemVal.status ? 'evaluated' : ''}`;
        
        card.innerHTML = `
            <div class="question-card-header">
                <span class="item-id-badge">CÓD: ${item.id}</span>
                ${item.risk ? `<span class="risk-badge risk-${item.risk}">${item.risk}</span>` : ''}
            </div>
            
            <p class="question-text">${item.description}</p>
            
            <div class="choice-container">
                <button class="choice-btn ${itemVal.status === 'S' ? 'active' : ''}" data-value="S" data-id="${item.id}">CONFORME (S)</button>
                <button class="choice-btn ${itemVal.status === 'N' ? 'active' : ''}" data-value="N" data-id="${item.id}">INCONFORME (N)</button>
                <button class="choice-btn ${itemVal.status === 'NA' ? 'active' : ''}" data-value="NA" data-id="${item.id}">N/A</button>
            </div>
            
            <div class="observation-panel ${itemVal.status ? '' : 'hidden'}" id="panel-obs-${item.id}">
                <div class="form-group">
                    <label>Observações do Item (Opcional)</label>
                    <textarea class="observation-field" id="obs-${item.id}" placeholder="Adicione observações ou ressalvas sobre este item se achar necessário...">${itemVal.obs || ''}</textarea>
                </div>
            </div>
            
            <div class="non-conformity-panel ${itemVal.status === 'N' ? '' : 'hidden'}" id="panel-nc-${item.id}">
                <div class="legislation-input-group">
                    <label>Legislação / Embasamento Legal (Editável)</label>
                    <input type="text" class="legislation-field" id="leg-${item.id}" value="${itemVal.legislation}">
                </div>
                
                <div class="photo-upload-row">
                    <button class="btn btn-secondary btn-photo-capture" id="btn-capture-${item.id}">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                        <span>Anexar Foto (0/3)</span>
                        <input type="file" accept="image/*" capture="environment" data-id="${item.id}" class="photo-file-input">
                    </button>
                </div>
                <div class="photo-previews-grid" id="previews-grid-${item.id}">
                    <!-- Dynamic thumbnails -->
                </div>
            </div>
        `;
        
        container.appendChild(card);
        
        // Add events inside this card dynamically
        setupCardEvents(item.id);
        renderPhotosGrid(item.id);
    });
}

function setupCardEvents(itemId) {
    const card = document.getElementById(`card-item-${itemId}`);
    if (!card) return;
    
    // Status buttons click
    card.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const status = e.target.getAttribute("data-value");
            updateItemStatus(itemId, status);
        });
    });
    
    // Observations textarea input
    const obsText = document.getElementById(`obs-${itemId}`);
    if (obsText) {
        obsText.addEventListener("input", (e) => {
            if (!state.evaluations[itemId]) state.evaluations[itemId] = {};
            state.evaluations[itemId].obs = e.target.value;
            saveStateToStorage();
        });
    }
    
    // Legislation text input
    const legText = document.getElementById(`leg-${itemId}`);
    if (legText) {
        legText.addEventListener("input", (e) => {
            if (!state.evaluations[itemId]) state.evaluations[itemId] = {};
            state.evaluations[itemId].legislation = e.target.value;
            saveStateToStorage();
        });
    }
    
    // Photo upload change
    const photoInput = card.querySelector(".photo-file-input");
    if (photoInput) {
        photoInput.addEventListener("change", (e) => {
            handlePhotoUpload(itemId, e.target.files[0]);
        });
    }
    
    // (Photos deletion is handled inside renderPhotosGrid)
}

function updateItemStatus(itemId, status) {
    if (!state.evaluations[itemId]) {
        const itemObj = CHECKLIST_DATABASE.find(item => item.id === itemId);
        state.evaluations[itemId] = { status: null, obs: "", photos: [], legislation: itemObj ? itemObj.legislation : "" };
    }
    
    const prevStatus = state.evaluations[itemId].status;
    state.evaluations[itemId].status = status;
    
    // Manage UI active classes
    const card = document.getElementById(`card-item-${itemId}`);
    if (card) {
        card.classList.add("evaluated");
        card.querySelectorAll(".choice-btn").forEach(btn => {
            if (btn.getAttribute("data-value") === status) btn.classList.add("active");
            else btn.classList.remove("active");
        });
        
        // Toggle Observation panel (visible for any evaluated state)
        const obsPanel = document.getElementById(`panel-obs-${itemId}`);
        if (obsPanel) {
            if (status) {
                obsPanel.classList.remove("hidden");
            } else {
                obsPanel.classList.add("hidden");
            }
        }
        
        // Toggle Non-conformity panel (visible only for N)
        const ncPanel = document.getElementById(`panel-nc-${itemId}`);
        if (ncPanel) {
            if (status === 'N') {
                ncPanel.classList.remove("hidden");
            } else {
                ncPanel.classList.add("hidden");
            }
        }
    }
    
    saveStateToStorage();
    updateProgressBar();
    
    // Refresh count in current active category header
    const activeCat = CATEGORIES[currentCategoryIndex];
    const catItens = CHECKLIST_DATABASE.filter(item => item.category === activeCat);
    const evaluatedCount = catItens.filter(item => state.evaluations[item.id] && state.evaluations[item.id].status).length;
    const catCount = document.getElementById("current-category-count");
    if (catCount) catCount.textContent = `${evaluatedCount} / ${catItens.length}`;
}

// ==========================================================================
// ADVANCED PHOTO CAPTURE & DOWN-SAMPLING (CANVAS RESIZER)
// ==========================================================================
function handlePhotoUpload(itemId, file) {
    if (!file) return;
    
    if (!state.evaluations[itemId]) state.evaluations[itemId] = {};
    if (!state.evaluations[itemId].photos) state.evaluations[itemId].photos = [];
    
    if (state.evaluations[itemId].photos.length >= 3) {
        alert("Limite de 3 fotos por não conformidade atingido.");
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
            // Compress using Canvas
            const canvas = document.createElement("canvas");
            const max_width = 640;
            const max_height = 480;
            let width = img.width;
            let height = img.height;
            
            // Calculate proportional sizes
            if (width > height) {
                if (width > max_width) {
                    height = Math.round((height * max_width) / width);
                    width = max_width;
                }
            } else {
                if (height > max_height) {
                    width = Math.round((width * max_height) / height);
                    height = max_height;
                }
            }
            
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, width, height);
            
            // Compress to JPEG with quality 0.65 (excellent visual quality, around 20-30KB only!)
            const dataUrl = canvas.toDataURL("image/jpeg", 0.65);
            
            // Save compressed base64 in state array
            state.evaluations[itemId].photos.push(dataUrl);
            saveStateToStorage();
            
            // Update UI preview grid
            renderPhotosGrid(itemId);
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(file);
}

function renderPhotosGrid(itemId) {
    const grid = document.getElementById(`previews-grid-${itemId}`);
    if (!grid) return;
    
    grid.innerHTML = "";
    
    const val = state.evaluations[itemId];
    if (!val || !val.photos || val.photos.length === 0) return;
    
    val.photos.forEach((photoBase64, index) => {
        const container = document.createElement("div");
        container.className = "photo-thumbnail-container";
        container.innerHTML = `
            <img class="photo-preview-thumbnail" src="${photoBase64}" alt="Foto ${index + 1}">
            <button type="button" class="btn-remove-photo-badge" data-id="${itemId}" data-index="${index}" title="Excluir Foto">×</button>
        `;
        grid.appendChild(container);
        
        container.querySelector(".btn-remove-photo-badge").addEventListener("click", () => {
            removePhotoAtIndex(itemId, index);
        });
    });
    
    // Update attach button counter and disable if >= 3
    const btnCapture = document.getElementById(`btn-capture-${itemId}`);
    if (btnCapture) {
        const fileInput = btnCapture.querySelector(".photo-file-input");
        const count = val.photos.length;
        btnCapture.querySelector("span").textContent = `Anexar Foto (${count}/3)`;
        
        if (count >= 3) {
            btnCapture.setAttribute("disabled", "true");
            if (fileInput) fileInput.setAttribute("disabled", "true");
        } else {
            btnCapture.removeAttribute("disabled");
            if (fileInput) fileInput.removeAttribute("disabled");
        }
    }
}

function removePhotoAtIndex(itemId, index) {
    const val = state.evaluations[itemId];
    if (val && val.photos) {
        val.photos.splice(index, 1);
        saveStateToStorage();
        renderPhotosGrid(itemId);
    }
}

// ==========================================================================
// CANVAS SIGNATURE DRAWING PADS
// ==========================================================================
// Render the inspectors input list dynamically
function renderInspectorsForm() {
    const container = document.getElementById("inspectors-form-container");
    if (!container) return;
    
    container.innerHTML = "";
    
    state.inspectors.forEach((inspector, idx) => {
        const row = document.createElement("div");
        row.className = "inspector-row";
        row.id = `inspector-row-${inspector.id}`;
        
        row.innerHTML = `
            <div class="form-group">
                <label>Nome do Fiscal</label>
                <input type="text" class="inp-inspector-name" data-id="${inspector.id}" value="${inspector.name || ''}" placeholder="Ex: Dr. Carlos Silva">
            </div>
            <div class="form-group">
                <label>Matrícula</label>
                <input type="text" class="inp-inspector-reg" data-id="${inspector.id}" value="${inspector.registration || ''}" placeholder="Ex: 12.345-6">
            </div>
            ${state.inspectors.length > 1 ? `
                <button type="button" class="btn-remove-inspector" data-id="${inspector.id}" title="Remover Fiscal">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                </button>
            ` : ''}
        `;
        
        container.appendChild(row);
        
        // Listeners for inputs
        row.querySelector(".inp-inspector-name").addEventListener("input", (e) => {
            inspector.name = e.target.value;
            saveStateToStorage();
            
            // Dynamically update the signature pad label
            const labelEl = document.getElementById(`sig-label-inspector-${inspector.id}`);
            if (labelEl) {
                const labelText = inspector.name ? `Assinatura de: ${inspector.name}` : "Assinatura do Fiscal Sanitário";
                labelEl.textContent = `${labelText} ${inspector.registration ? `(Matrícula: ${inspector.registration})` : ''}`;
            }
        });
        
        row.querySelector(".inp-inspector-reg").addEventListener("input", (e) => {
            inspector.registration = e.target.value;
            saveStateToStorage();
            
            // Dynamically update the signature pad label
            const labelEl = document.getElementById(`sig-label-inspector-${inspector.id}`);
            if (labelEl) {
                const labelText = inspector.name ? `Assinatura de: ${inspector.name}` : "Assinatura do Fiscal Sanitário";
                labelEl.textContent = `${labelText} ${inspector.registration ? `(Matrícula: ${inspector.registration})` : ''}`;
            }
        });
        
        // Listener for remove button
        if (state.inspectors.length > 1) {
            row.querySelector(".btn-remove-inspector").addEventListener("click", () => {
                removeInspector(inspector.id);
            });
        }
    });
}

function addInspector() {
    const nextId = state.inspectors.length > 0 ? Math.max(...state.inspectors.map(ins => ins.id)) + 1 : 1;
    state.inspectors.push({ id: nextId, name: "", registration: "", signature: null });
    saveStateToStorage();
    renderInspectorsForm();
    renderSignaturePadsUI();
}

function removeInspector(id) {
    if (state.inspectors.length <= 1) return;
    
    // Remove reference
    delete signaturePads[`inspector_${id}`];
    
    state.inspectors = state.inspectors.filter(ins => ins.id !== id);
    saveStateToStorage();
    renderInspectorsForm();
    renderSignaturePadsUI();
}

function renderSignaturePadsUI() {
    const container = document.getElementById("signatures-grid-container");
    if (!container) return;
    
    container.innerHTML = "";
    
    // 1. Render pads for each inspector
    state.inspectors.forEach(inspector => {
        const label = inspector.name ? `Assinatura de: ${inspector.name}` : "Assinatura do Fiscal Sanitário";
        const box = document.createElement("div");
        box.className = "signature-box";
        box.innerHTML = `
            <label id="sig-label-inspector-${inspector.id}">${label} ${inspector.registration ? `(Matrícula: ${inspector.registration})` : ''}</label>
            <div class="canvas-container">
                <canvas id="sig-canvas-inspector-${inspector.id}"></canvas>
            </div>
            <button class="btn btn-sm btn-secondary btn-clear-sig" data-type="inspector" data-id="${inspector.id}">Limpar Assinatura</button>
        `;
        container.appendChild(box);
        
        // Initialize this signature pad
        initInspectorSignatureCanvas(`sig-canvas-inspector-${inspector.id}`, inspector);
    });
    
    // 2. Append the representative signature box (if enabled)
    if (state.includeRepSignature !== false) {
        const repBox = document.createElement("div");
        repBox.className = "signature-box";
        
        const labelRepText = state.establishmentAccomp ? `Assinatura de: ${state.establishmentAccomp}` : "Assinatura do Responsável por Acompanhar a Inspeção";
        
        repBox.innerHTML = `
            <label id="sig-label-rep">${labelRepText}</label>
            <div class="form-group" style="margin-top: 8px; margin-bottom: 12px; text-align: left;">
                <label style="font-size: 0.8rem; margin-bottom: 4px;">CPF do Responsável (Opcional)</label>
                <input type="text" id="representative-cpf" value="${state.representativeCpf || ''}" placeholder="Ex: 000.000.000-00" style="padding: 6px; height: auto; font-size: 0.9rem; width: 100%;">
            </div>
            <label class="checkbox-label" style="display: flex; gap: 8px; font-size: 0.8rem; margin-top: 8px; margin-bottom: 12px; font-weight: normal; cursor: pointer; text-align: left; line-height: 1.3; color: var(--text-main);">
                <input type="checkbox" id="rep-legal-agreement" ${state.repLegalAgreement ? 'checked' : ''} style="width: auto; margin-top: 2px;">
                <span>Declaro ser o responsável por acompanhar a inspeção e aceito assinar eletronicamente este termo de vistoria (Lei nº 14.063/20).</span>
            </label>
            <div class="canvas-container">
                <canvas id="signature-rep"></canvas>
            </div>
            <button class="btn btn-sm btn-secondary btn-clear-sig" data-type="rep">Limpar Assinatura</button>
        `;
        container.appendChild(repBox);
        
        // Bind inputs to state
        const cpfInput = repBox.querySelector("#representative-cpf");
        if (cpfInput) {
            cpfInput.addEventListener("input", (e) => {
                state.representativeCpf = e.target.value;
                saveStateToStorage();
            });
        }
        const agreementCheck = repBox.querySelector("#rep-legal-agreement");
        if (agreementCheck) {
            agreementCheck.addEventListener("change", (e) => {
                state.repLegalAgreement = e.target.checked;
                saveStateToStorage();
            });
        }
        
        // Initialize representative pad
        initRepSignatureCanvas();
    }
    
    // Attach clear events
    container.querySelectorAll(".btn-clear-sig").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const type = btn.getAttribute("data-type");
            if (type === "rep") {
                clearRepSignature();
            } else {
                const insId = parseInt(btn.getAttribute("data-id"));
                clearInspectorSignature(insId);
            }
        });
    });
}

function initInspectorSignatureCanvas(canvasId, inspector) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    const padKey = `inspector_${inspector.id}`;
    
    signaturePads[padKey] = { canvas: canvas, ctx: ctx, isDrawing: false };
    
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    
    ctx.strokeStyle = "#1e293b";
    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    
    if (inspector.signature) {
        const img = new Image();
        img.onload = function() {
            ctx.drawImage(img, 0, 0, rect.width, rect.height);
        };
        img.src = inspector.signature;
    }
    
    const getPos = (e) => {
        const r = canvas.getBoundingClientRect();
        let clientX = e.clientX;
        let clientY = e.clientY;
        if (e.touches && e.touches.length > 0) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        }
        return { x: clientX - r.left, y: clientY - r.top };
    };
    
    const startDraw = (e) => {
        e.preventDefault();
        signaturePads[padKey].isDrawing = true;
        const pos = getPos(e);
        ctx.beginPath();
        ctx.moveTo(pos.x, pos.y);
    };
    
    const draw = (e) => {
        if (!signaturePads[padKey].isDrawing) return;
        e.preventDefault();
        const pos = getPos(e);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
    };
    
    const stopDraw = () => {
        if (signaturePads[padKey].isDrawing) {
            signaturePads[padKey].isDrawing = false;
            inspector.signature = canvas.toDataURL();
            saveStateToStorage();
        }
    };
    
    canvas.addEventListener("mousedown", startDraw);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDraw);
    canvas.addEventListener("mouseleave", stopDraw);
    
    canvas.addEventListener("touchstart", startDraw);
    canvas.addEventListener("touchmove", draw);
    canvas.addEventListener("touchend", stopDraw);
}

function initRepSignatureCanvas() {
    const canvas = document.getElementById("signature-rep");
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    signaturePads["rep"] = { canvas: canvas, ctx: ctx, isDrawing: false };
    
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    
    ctx.strokeStyle = "#1e293b";
    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    
    if (state.signatures.rep) {
        const img = new Image();
        img.onload = function() {
            ctx.drawImage(img, 0, 0, rect.width, rect.height);
        };
        img.src = state.signatures.rep;
    }
    
    const getPos = (e) => {
        const r = canvas.getBoundingClientRect();
        let clientX = e.clientX;
        let clientY = e.clientY;
        if (e.touches && e.touches.length > 0) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        }
        return { x: clientX - r.left, y: clientY - r.top };
    };
    
    const startDraw = (e) => {
        e.preventDefault();
        signaturePads["rep"].isDrawing = true;
        const pos = getPos(e);
        ctx.beginPath();
        ctx.moveTo(pos.x, pos.y);
    };
    
    const draw = (e) => {
        if (!signaturePads["rep"].isDrawing) return;
        e.preventDefault();
        const pos = getPos(e);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
    };
    
    const stopDraw = () => {
        if (signaturePads["rep"].isDrawing) {
            signaturePads["rep"].isDrawing = false;
            state.signatures.rep = canvas.toDataURL();
            saveStateToStorage();
        }
    };
    
    canvas.addEventListener("mousedown", startDraw);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDraw);
    canvas.addEventListener("mouseleave", stopDraw);
    
    canvas.addEventListener("touchstart", startDraw);
    canvas.addEventListener("touchmove", draw);
    canvas.addEventListener("touchend", stopDraw);
}

function clearInspectorSignature(insId) {
    const padKey = `inspector_${insId}`;
    const pad = signaturePads[padKey];
    if (pad && pad.canvas && pad.ctx) {
        const rect = pad.canvas.getBoundingClientRect();
        pad.ctx.clearRect(0, 0, rect.width, rect.height);
        
        const inspector = state.inspectors.find(ins => ins.id === insId);
        if (inspector) {
            inspector.signature = null;
        }
        saveStateToStorage();
    }
}

function clearRepSignature() {
    const pad = signaturePads["rep"];
    if (pad && pad.canvas && pad.ctx) {
        const rect = pad.canvas.getBoundingClientRect();
        pad.ctx.clearRect(0, 0, rect.width, rect.height);
        state.signatures.rep = null;
        saveStateToStorage();
    }
}

// ==========================================================================
// REPORT GENERATION & PRINT VIEW ACTIONS
// ==========================================================================
function generateReport() {
    // 1. Sync Text Data
    const inspectorsListText = state.inspectors
        .filter(ins => ins.name)
        .map(ins => `${ins.name} ${ins.registration ? `(Matrícula: ${ins.registration})` : ''}`)
        .join(", ") || "(Nenhum fiscal informado)";
    document.getElementById("rep-inspectors-list").textContent = inspectorsListText;
    
    document.getElementById("rep-inspection-date").textContent = formatDate(state.inspectionDate);
    document.getElementById("rep-establishment-name").textContent = state.establishmentName || "(Não informado)";
    document.getElementById("rep-establishment-sei").textContent = state.establishmentSei || "(Não informado)";
    document.getElementById("rep-establishment-cnpj").textContent = state.establishmentCnpj || "(Não informado)";
    document.getElementById("rep-establishment-rep").textContent = state.establishmentRepresentative || "(Não informado)";
    document.getElementById("rep-establishment-accomp").textContent = state.establishmentAccomp || "(Não informado)";
    document.getElementById("rep-establishment-address").textContent = state.establishmentAddress || "(Não informado)";
    
    // Technical Representative
    const rtText = state.establishmentRt 
        ? `${state.establishmentRt} ${state.establishmentRtCouncil ? `(Conselho: ${state.establishmentRtCouncil})` : ''}` 
        : "(Não designado)";
    document.getElementById("rep-establishment-rt").textContent = rtText;
    document.getElementById("rep-activity-name").textContent = state.activityName || "Educação Infantil - Creche";
    const selectedCnaes = state.activityCnaes && state.activityCnaes.length > 0 
        ? state.activityCnaes.join(", ") 
        : (state.activityCnae || "8511-2/00");
    document.getElementById("rep-activity-cnae").textContent = selectedCnaes;
    
    // Sync complementary info
    const compTextEl = document.getElementById("rep-complementary-info-text");
    if (compTextEl) {
        compTextEl.textContent = state.complementaryInfo || "Nenhuma informação complementar registrada.";
        if (!state.complementaryInfo) {
            compTextEl.style.fontStyle = "italic";
            compTextEl.style.color = "#94a3b8";
        } else {
            compTextEl.style.fontStyle = "normal";
            compTextEl.style.color = "var(--text-main)";
        }
    }
    
    // Generate authenticity code (SHA-256 of report data)
    const dataToHash = JSON.stringify({
        date: state.inspectionDate,
        sei: state.establishmentSei,
        cnpj: state.establishmentCnpj,
        evaluations: state.evaluations,
        rt: state.establishmentRt,
        rtCouncil: state.establishmentRtCouncil,
        rep: state.establishmentRepresentative,
        accomp: state.establishmentAccomp,
        repCpf: state.representativeCpf,
        agreement: state.repLegalAgreement,
        includeRepSig: state.includeRepSignature
    });
    
    generateIntegrityHash(dataToHash).then(hash => {
        const codeEl = document.getElementById("rep-authenticity-code");
        if (codeEl) codeEl.textContent = hash.toUpperCase();
    }).catch(err => {
        console.error("Erro ao gerar hash de integridade:", err);
        const codeEl = document.getElementById("rep-authenticity-code");
        if (codeEl) codeEl.textContent = "N/D (Erro na cifragem)";
    });
    
    // Set Timestamp and Device info
    const timestampEl = document.getElementById("rep-hash-timestamp");
    if (timestampEl) {
        timestampEl.textContent = new Date().toLocaleString("pt-BR") + " (Horário do Dispositivo)";
    }
    
    const deviceEl = document.getElementById("rep-device-meta");
    if (deviceEl) {
        const ua = navigator.userAgent;
        let os = "Dispositivo Desconhecido";
        if (ua.indexOf("Windows") !== -1) os = "Windows OS";
        else if (ua.indexOf("Android") !== -1) os = "Dispositivo Android";
        else if (ua.indexOf("iPhone") !== -1 || ua.indexOf("iPad") !== -1) os = "Apple iOS Device";
        else if (ua.indexOf("Macintosh") !== -1) os = "macOS Device";
        else if (ua.indexOf("Linux") !== -1) os = "Linux Device";
        
        let browser = "Navegador Desconhecido";
        if (ua.indexOf("Chrome") !== -1) browser = "Chrome";
        else if (ua.indexOf("Safari") !== -1) browser = "Safari";
        else if (ua.indexOf("Firefox") !== -1) browser = "Firefox";
        else if (ua.indexOf("Edge") !== -1) browser = "Edge";
        
        deviceEl.textContent = `${os} / ${browser} (Plataforma: ${navigator.platform})`;
    }
    
    // 2. Count statistics
    const totalItens = CHECKLIST_DATABASE.length;
    let compliant = 0;
    let nonCompliant = 0;
    let notApplicable = 0;
    
    CHECKLIST_DATABASE.forEach(item => {
        const val = state.evaluations[item.id];
        if (val) {
            if (val.status === 'S') compliant++;
            else if (val.status === 'N') nonCompliant++;
            else if (val.status === 'NA') notApplicable++;
        }
    });
    
    const totalEvaluated = compliant + nonCompliant + notApplicable;
    
    document.getElementById("rep-stat-evaluated").textContent = totalEvaluated;
    document.getElementById("rep-stat-compliant").textContent = compliant;
    document.getElementById("rep-stat-noncompliant").textContent = nonCompliant;
    document.getElementById("rep-stat-na").textContent = notApplicable;
    
    // 3. Render findings (Non-conformities list)
    const listContainer = document.getElementById("report-findings-list");
    const emptyMsg = document.getElementById("report-no-findings-msg");
    
    listContainer.innerHTML = "";
    
    const nonCompliantItems = CHECKLIST_DATABASE.filter(item => {
        return state.evaluations[item.id] && state.evaluations[item.id].status === 'N';
    });
    
    const compliantItems = CHECKLIST_DATABASE.filter(item => {
        return state.evaluations[item.id] && state.evaluations[item.id].status === 'S';
    });
    
    const naItems = CHECKLIST_DATABASE.filter(item => {
        return state.evaluations[item.id] && state.evaluations[item.id].status === 'NA';
    });
    
    if (nonCompliantItems.length > 0) {
        emptyMsg.classList.add("hidden");
        
        nonCompliantItems.forEach((item, idx) => {
            const val = state.evaluations[item.id];
            const itemBox = document.createElement("div");
            itemBox.className = "finding-item";
            
            itemBox.innerHTML = `
                <div class="finding-item-header">
                    <span class="finding-item-id">Constatação #${idx + 1} - Item Cód: ${item.id} (NÃO CONFORME)</span>
                    ${item.risk ? `<span class="risk-badge risk-${item.risk}">${item.risk}</span>` : ''}
                </div>
                <div class="finding-desc">${item.description}</div>
                <div class="finding-observation"><strong>Irregularidade Apontada:</strong> ${val.obs || '(Nenhuma observação descrita)'}</div>
                <div class="finding-legislation"><strong>Embasamento Legal infringido:</strong> ${val.legislation || item.legislation}</div>
                ${val.photos && val.photos.length > 0 ? `
                    <div class="finding-photos-grid">
                        ${val.photos.map(p => `<img class="finding-photo" src="${p}" alt="Foto da Irregularidade do item ${item.id}">`).join("")}
                    </div>
                ` : ''}
            `;
            listContainer.appendChild(itemBox);
        });
    } else {
        emptyMsg.classList.remove("hidden");
    }
    
    // Append Section 2: Itens Conformes (S)
    if (compliantItems.length > 0) {
        const compHeader = document.createElement("h2");
        compHeader.className = "report-section-title";
        compHeader.textContent = "2. Detalhamento dos Itens Conformes (S)";
        listContainer.appendChild(compHeader);
        
        const tableContainer = document.createElement("div");
        tableContainer.className = "report-table-container";
        
        let tableHtml = `
            <table class="report-table">
                <thead>
                    <tr>
                        <th style="width: 75px;">Código</th>
                        <th style="width: 150px;">Categoria</th>
                        <th>Descrição do Item</th>
                        <th style="width: 250px;">Observações / Ressalvas</th>
                    </tr>
                </thead>
                <tbody>
        `;
        
        compliantItems.forEach(item => {
            const val = state.evaluations[item.id];
            tableHtml += `
                <tr>
                    <td class="id-col">${item.id}</td>
                    <td><strong>${item.category}</strong></td>
                    <td>${item.description}</td>
                    <td>${val.obs ? `<em>${val.obs}</em>` : '<span style="color: #94a3b8;">Nenhuma observação</span>'}</td>
                </tr>
            `;
        });
        
        tableHtml += `
                </tbody>
            </table>
        `;
        
        tableContainer.innerHTML = tableHtml;
        listContainer.appendChild(tableContainer);
    }
    
    // Append Section 3: Itens Não Aplicáveis (NA)
    if (naItems.length > 0) {
        const naHeader = document.createElement("h2");
        naHeader.className = "report-section-title";
        naHeader.textContent = "3. Itens Declarados como Não Aplicáveis (NA)";
        listContainer.appendChild(naHeader);
        
        const tableContainer = document.createElement("div");
        tableContainer.className = "report-table-container";
        
        let tableHtml = `
            <table class="report-table">
                <thead>
                    <tr>
                        <th style="width: 75px;">Código</th>
                        <th style="width: 150px;">Categoria</th>
                        <th>Descrição do Item</th>
                        <th style="width: 250px;">Observações</th>
                    </tr>
                </thead>
                <tbody>
        `;
        
        naItems.forEach(item => {
            const val = state.evaluations[item.id];
            tableHtml += `
                <tr>
                    <td class="id-col">${item.id}</td>
                    <td><strong>${item.category}</strong></td>
                    <td>${item.description}</td>
                    <td>${val.obs ? `<em>${val.obs}</em>` : '<span style="color: #94a3b8;">Nenhuma observação</span>'}</td>
                </tr>
            `;
        });
        
        tableHtml += `
                </tbody>
            </table>
        `;
        
        tableContainer.innerHTML = tableHtml;
        listContainer.appendChild(tableContainer);
    }
    
    // 4. Render Signatures Dynamically
    const sigContainer = document.getElementById("rep-signatures-row-container");
    let hasSignatures = false;
    if (sigContainer) {
        sigContainer.innerHTML = "";
        
        // Add a column for each inspector
        state.inspectors.forEach(inspector => {
            if (inspector.signature) hasSignatures = true;
            const col = document.createElement("div");
            col.className = "report-sig-col";
            col.innerHTML = `
                <div class="sig-line">
                    ${inspector.signature ? `<img class="sig-image" src="${inspector.signature}" alt="Assinatura Fiscal">` : ''}
                </div>
                <span class="sig-title">${inspector.name || 'Fiscal Sanitário'}</span>
                <span class="sig-subtitle">${inspector.registration ? `Matrícula: ${inspector.registration}` : 'Secretaria Municipal de Saúde'}</span>
            `;
            sigContainer.appendChild(col);
        });
        
        // Add representative column (if enabled)
        if (state.includeRepSignature !== false) {
            if (state.signatures.rep) hasSignatures = true;
            
            const repCol = document.createElement("div");
            repCol.className = "report-sig-col";
            repCol.innerHTML = `
                <div class="sig-line">
                    ${state.signatures.rep ? `<img class="sig-image" src="${state.signatures.rep}" alt="Assinatura Responsável">` : ''}
                </div>
                <span class="sig-title">${state.establishmentAccomp || 'Responsável por Acompanhar'}</span>
                <span class="sig-subtitle">${state.representativeCpf ? `CPF: ${state.representativeCpf}` : 'Acompanhou a Inspeção'}</span>
                <span class="sig-subtitle" style="font-size: 8pt; display: block; margin-top: 2px;">Ciente das constatações</span>
            `;
            sigContainer.appendChild(repCol);
        }
    }
    
    // Manage Word export visibility based on signatures presence
    const btnDoc = document.getElementById("btn-export-doc");
    if (btnDoc) {
        if (hasSignatures) {
            btnDoc.classList.add("hidden");
        } else {
            btnDoc.classList.remove("hidden");
        }
    }
    
    // 5. Navigate views
    document.querySelector(".app-main").classList.add("hidden");
    document.getElementById("report-view").classList.remove("hidden");
    window.scrollTo(0, 0);
}

function closeReportView() {
    document.getElementById("report-view").classList.add("hidden");
    document.querySelector(".app-main").classList.remove("hidden");
    
    // Re-initialize pads coordinates because container display toggling might offset layout
    renderSignaturePadsUI();
    
    window.scrollTo(0, 0);
}

function exportAsEditableDoc() {
    const reportContent = document.getElementById("report-sheet-content").innerHTML;
    
    // Basic Word HTML wrapper with embedded stylesheet to look like MS Word
    const html = `
        <html xmlns:o="urn:schemas-microsoft-microsoft-org:office:office" xmlns:w="urn:schemas-microsoft-microsoft-org:office:word" xmlns="http://www.w3.org/TR/REC-html40">
        <head>
            <meta charset="utf-8">
            <title>Relatório de Vistoria Sanitária</title>
            <style>
                @page {
                    size: 8.5in 11in;
                    margin: 1.0in 1.0in 1.0in 1.0in;
                }
                body {
                    font-family: 'Arial', sans-serif;
                    font-size: 11pt;
                    line-height: 1.5;
                    color: #000000;
                }
                h1 {
                    text-align: center;
                    font-size: 14pt;
                    font-weight: bold;
                    margin-bottom: 5px;
                }
                h2 {
                    font-size: 12pt;
                    font-weight: bold;
                    border-bottom: 2px solid #000000;
                    padding-bottom: 3px;
                    margin-top: 25px;
                    margin-bottom: 10px;
                }
                .report-header {
                    margin-bottom: 20px;
                }
                .logo-text {
                    text-align: center;
                }
                .logo-text h3 { font-size: 10pt; margin: 0; }
                .logo-text h2 { font-size: 12pt; margin: 2px 0; border: none; padding: 0; }
                .logo-text h4 { font-size: 9pt; margin: 0; color: #555555; }
                
                .report-title-box {
                    text-align: center;
                    margin-top: 15px;
                    margin-bottom: 20px;
                }
                
                table, .report-details-grid {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 10px;
                    margin-bottom: 15px;
                }
                th, td, .report-details-grid td {
                    border: 1px solid #000000;
                    padding: 6px;
                    font-size: 10pt;
                    vertical-align: top;
                }
                th {
                    background-color: #f2f2f2;
                    font-weight: bold;
                    text-align: left;
                }
                
                .report-details-grid div {
                    font-size: 10pt;
                }
                
                .report-summary-stats {
                    margin-bottom: 20px;
                }
                .report-summary-stats table td {
                    text-align: center;
                    width: 25%;
                }
                
                .finding-item {
                    border: 1px solid #000000;
                    padding: 10px;
                    margin-bottom: 15px;
                    page-break-inside: avoid;
                }
                .finding-item-header {
                    font-weight: bold;
                    background-color: #f2f2f2;
                    padding: 6px;
                    border-bottom: 1px solid #000000;
                }
                .finding-desc {
                    margin-top: 5px;
                    font-weight: bold;
                }
                .finding-observation {
                    background-color: #f9f9f9;
                    padding: 6px;
                    border-left: 3px solid #000000;
                    margin-top: 5px;
                }
                .finding-legislation {
                    font-size: 9pt;
                    background-color: #eeeeee;
                    padding: 4px;
                    margin-top: 5px;
                }
                
                .finding-photos-grid {
                    margin-top: 10px;
                }
                .finding-photo {
                    max-width: 160px;
                    max-height: 120px;
                    margin-right: 8px;
                    margin-bottom: 8px;
                    border: 1px solid #666666;
                }
                
                .report-sig-row {
                    width: 100%;
                    margin-top: 40px;
                }
                .report-sig-col {
                    text-align: center;
                    vertical-align: top;
                    padding: 10px;
                }
                .sig-line {
                    border-bottom: 1px solid #000000;
                    margin-bottom: 5px;
                    height: 50px;
                }
                .sig-image {
                    max-height: 45px;
                }
                .sig-title {
                    font-weight: bold;
                    font-size: 10pt;
                }
                .sig-subtitle {
                    font-size: 9pt;
                    color: #555555;
                }
                .hidden, .no-print, .report-toolbar {
                    display: none;
                }
            </style>
        </head>
        <body>
            ${reportContent}
        </body>
        </html>
    `;
    
    const blob = new Blob(['\\ufeff' + html], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    const estName = state.establishmentName ? state.establishmentName.replace(/\\s+/g, '_') : 'sanitaria';
    a.download = `relatorio_vistoria_${estName}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Helper formatting date
function formatDate(dateStr) {
    if (!dateStr) return "-";
    const parts = dateStr.split('-');
    if (parts.length === 3) {
        return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateStr;
}

async function generateIntegrityHash(dataText) {
    const msgBuffer = new TextEncoder().encode(dataText);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

// ==========================================================================
// BACKUP ACTIONS (IMPORT / EXPORT JSON)
// ==========================================================================
function openBackupModal() {
    document.getElementById("backup-modal").classList.remove("hidden");
}

function closeBackupModal() {
    document.getElementById("backup-modal").classList.add("hidden");
}

function exportBackup() {
    const dataStr = JSON.stringify(state, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    
    const dateFormatted = new Date().toISOString().split('T')[0];
    const a = document.createElement("a");
    a.href = url;
    a.download = `backup_vistoria_${state.establishmentName ? state.establishmentName.replace(/\s+/g, '_') : 'sanitaria'}_${dateFormatted}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function triggerImportFile() {
    document.getElementById("file-import-backup").click();
}

function handleImportFileSelect(e) {
    const file = e.target.files[0];
    const nameLabel = document.getElementById("import-file-name");
    const btnConfirm = document.getElementById("btn-import-backup");
    
    if (file) {
        nameLabel.textContent = file.name;
        btnConfirm.removeAttribute("disabled");
    } else {
        nameLabel.textContent = "Nenhum arquivo selecionado";
        btnConfirm.setAttribute("disabled", "true");
    }
}

function confirmImportBackup() {
    const fileInput = document.getElementById("file-import-backup");
    const file = fileInput.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            const importedState = JSON.parse(event.target.result);
            // Basic structures checks
            if (importedState.evaluations && typeof importedState.evaluations === "object") {
                state = { ...state, ...importedState };
                saveStateToStorage();
                
                alert("Backup importado com sucesso! O aplicativo será recarregado.");
                window.location.reload();
            } else {
                alert("O arquivo fornecido não é um backup de vistoria válido.");
            }
        } catch (err) {
            alert("Erro ao ler arquivo de backup: " + err.message);
        }
    };
    reader.readAsText(file);
}

// ==========================================================================
// ONGOING INSPECTIONS MANAGER
// ==========================================================================
function openInspectionsModal() {
    renderInspectionsList();
    document.getElementById("inspections-modal").classList.remove("hidden");
}

function closeInspectionsModal() {
    document.getElementById("inspections-modal").classList.add("hidden");
}

function renderInspectionsList() {
    const container = document.getElementById("inspections-list-container");
    if (!container) return;
    
    container.innerHTML = "";
    
    let index = [];
    const savedIndex = localStorage.getItem("visa_inspections_index");
    if (savedIndex) {
        index = JSON.parse(savedIndex);
    }
    
    if (index.length === 0) {
        container.innerHTML = `<p style="text-align: center; color: var(--text-secondary); font-style: italic; margin-top: 15px; width: 100%;">Nenhuma vistoria concomitante em andamento.</p>`;
        return;
    }
    
    index.forEach(item => {
        const isCurrent = item.id === inspectionId;
        const row = document.createElement("div");
        row.className = `inspection-manager-item ${isCurrent ? 'active-item' : ''}`;
        
        const formattedDate = formatDate(item.date);
        
        row.innerHTML = `
            <div class="ins-item-info">
                <span class="ins-item-title">${item.establishmentName || '(Estabelecimento sem nome)'}</span>
                <span class="ins-item-subtitle">Ramo: ${item.activityName} | Data: ${formattedDate}</span>
            </div>
            <div class="ins-item-actions">
                ${isCurrent ? `
                    <span class="badge" style="background-color: var(--primary); color: white; padding: 4px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: bold;">Ativa</span>
                ` : `
                    <button class="btn btn-secondary btn-open-ins" data-id="${item.id}">Abrir</button>
                `}
                <button class="btn-delete-ins" data-id="${item.id}" title="Excluir Vistoria permanentemente">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                </button>
            </div>
        `;
        
        // Listeners
        row.querySelector(".ins-item-info").addEventListener("click", () => {
            if (!isCurrent) switchInspection(item.id);
        });
        
        if (!isCurrent) {
            row.querySelector(".btn-open-ins").addEventListener("click", () => {
                switchInspection(item.id);
            });
        }
        
        row.querySelector(".btn-delete-ins").addEventListener("click", (e) => {
            e.stopPropagation();
            deleteInspection(item.id, isCurrent);
        });
        
        container.appendChild(row);
    });
}

function switchInspection(id) {
    window.location.search = `?id=${id}`;
}

function deleteInspection(id, isCurrent) {
    if (confirm("ATENÇÃO: Isso excluirá permanentemente todos os dados desta vistoria (incluindo fotos e assinaturas) do aparelho. Tem certeza?")) {
        localStorage.removeItem(`visa_state_${id}`);
        
        let index = [];
        const savedIndex = localStorage.getItem("visa_inspections_index");
        if (savedIndex) {
            index = JSON.parse(savedIndex).filter(item => item.id !== id);
            localStorage.setItem("visa_inspections_index", JSON.stringify(index));
        }
        
        if (isCurrent) {
            window.location.href = window.location.pathname;
        } else {
            renderInspectionsList();
        }
    }
}

// ==========================================================================
// RESET APPLICATION VISTORIA
// ==========================================================================
function resetVistoria() {
    if (confirm("ATENÇÃO: Isso limpará TODOS os dados preenchidos, fotos anexadas e assinaturas desta vistoria para iniciar uma nova. Deseja prosseguir?")) {
        localStorage.removeItem(`visa_state_${inspectionId}`);
        
        let index = [];
        const savedIndex = localStorage.getItem("visa_inspections_index");
        if (savedIndex) {
            index = JSON.parse(savedIndex).filter(item => item.id !== inspectionId);
            localStorage.setItem("visa_inspections_index", JSON.stringify(index));
        }
        
        // Redirect to clear URL to force a fresh ID
        window.location.href = window.location.pathname;
    }
}

// ==========================================================================
// EVENT LISTENERS SETUPS
// ==========================================================================
function setupEventListeners() {
    // Theme toggle
    document.getElementById("btn-theme").addEventListener("click", toggleTheme);
    
    // Backup triggers
    document.getElementById("btn-backup").addEventListener("click", openBackupModal);
    document.getElementById("btn-close-backup-modal").addEventListener("click", closeBackupModal);
    document.getElementById("btn-export-backup").addEventListener("click", exportBackup);
    document.getElementById("btn-trigger-import").addEventListener("click", triggerImportFile);
    document.getElementById("file-import-backup").addEventListener("change", handleImportFileSelect);
    document.getElementById("btn-import-backup").addEventListener("click", confirmImportBackup);
    
    // Close modal when clicking outside contents
    document.getElementById("backup-modal").addEventListener("click", (e) => {
        if (e.target.id === "backup-modal") closeBackupModal();
    });
    
    // Reset App
    document.getElementById("btn-reset").addEventListener("click", resetVistoria);
    
    // Checklist Nav controls
    document.getElementById("btn-prev-cat").addEventListener("click", () => {
        if (currentCategoryIndex > 0) {
            showCategory(currentCategoryIndex - 1);
            window.scrollTo(0, document.querySelector(".checklist-layout").offsetTop - 20);
        }
    });
    
    document.getElementById("btn-next-cat").addEventListener("click", () => {
        if (currentCategoryIndex < CATEGORIES.length - 1) {
            showCategory(currentCategoryIndex + 1);
            window.scrollTo(0, document.querySelector(".checklist-layout").offsetTop - 20);
        } else {
            // Scroll user directly to signatures section
            document.querySelector(".signatures-section").scrollIntoView({ behavior: 'smooth' });
        }
    });
    
    // Add inspector listener
    document.getElementById("btn-add-inspector").addEventListener("click", addInspector);
    
    // Representative signature toggle listener
    const includeRepSigCheck = document.getElementById("include-rep-signature");
    if (includeRepSigCheck) {
        includeRepSigCheck.checked = state.includeRepSignature !== false;
        includeRepSigCheck.addEventListener("change", (e) => {
            state.includeRepSignature = e.target.checked;
            saveStateToStorage();
            renderSignaturePadsUI();
        });
    }
    
    // CNAE change dynamic listeners
    const cnaeInput = document.getElementById("activity-cnae");
    if (cnaeInput) {
        cnaeInput.addEventListener("change", (e) => {
            handleCnaeChange(e.target.value);
        });
        cnaeInput.addEventListener("input", (e) => {
            const val = e.target.value;
            const digits = val.replace(/\D/g, '');
            if (digits.length === 7) {
                handleCnaeChange(val);
            }
        });
    }

    // Report preview action
    document.getElementById("btn-generate-report").addEventListener("click", generateReport);
    document.getElementById("btn-back-to-edit").addEventListener("click", closeReportView);
    document.getElementById("btn-print").addEventListener("click", () => {
        window.print();
    });
    document.getElementById("btn-export-doc").addEventListener("click", exportAsEditableDoc);
    
    // Inspections list modal triggers
    document.getElementById("btn-my-inspections").addEventListener("click", openInspectionsModal);
    document.getElementById("btn-close-inspections-modal").addEventListener("click", closeInspectionsModal);
    document.getElementById("btn-new-inspection-modal").addEventListener("click", () => {
        window.open(window.location.pathname, '_blank');
        closeInspectionsModal();
    });
    
    // Close inspections modal when clicking outside contents
    document.getElementById("inspections-modal").addEventListener("click", (e) => {
        if (e.target.id === "inspections-modal") closeInspectionsModal();
    });

    // Login form event listener
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const user = document.getElementById("login-username").value.trim().toUpperCase();
            const pass = document.getElementById("login-password").value.trim();
            const errorEl = document.getElementById("login-error-msg");
            
            if (user === "VISALONDRINA" && pass === "123456") {
                localStorage.setItem("visa_logged_in", "true");
                const overlay = document.getElementById("login-overlay");
                if (overlay) {
                    overlay.classList.add("hidden");
                }
            } else {
                if (errorEl) {
                    errorEl.classList.remove("hidden");
                }
            }
        });
    }

    // Logout button event listener
    const btnLogout = document.getElementById("btn-logout");
    if (btnLogout) {
        btnLogout.addEventListener("click", () => {
            if (confirm("Deseja realmente sair do sistema? Suas vistorias salvas no aparelho continuarão seguras.")) {
                localStorage.removeItem("visa_logged_in");
                window.location.reload();
            }
        });
    }
}
