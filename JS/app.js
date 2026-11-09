// --- Scaleless Fixed SVG Icons Library ---
const SVG_ICONS = {
    sun: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
    moon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
    flame: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3z"/></svg>`,
    zap: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    coffee: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
    checkCircle: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`,
    banCircle: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>`,
    sprout: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4-.1 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/></svg>`,
    trashLarge: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--danger)" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`,
    moonLarge: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
    alertLarge: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--warning)" stroke-width="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`
};

// DOM Element Selectors
const taskInput = document.getElementById("taskInput");
const taskColor = document.getElementById("taskColor");
const importanceSelect = document.getElementById("importanceSelect");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const emptyTaskState = document.getElementById("emptyTaskState");
const searchInput = document.getElementById("searchInput");
const filterLabel = document.getElementById("filterLabel");
const sortOrder = document.getElementById("sortOrder");
const toggleTheme = document.getElementById("toggleTheme");
const themeIconSlot = document.getElementById("themeIconSlot");
const container = document.querySelector(".app-wrapper");
const progressCircle = document.querySelector(".progress");
const progressText = document.getElementById("progressText");
const congratsMessage = document.getElementById("congratsMessage");
const toggleArrow = document.getElementById("toggleArrow");
const hideableSection = document.querySelector(".hideable-section");
const resetTasksBtn = document.getElementById("resetTasks");
const dayCounter = document.getElementById("dayCounter");
const taskStats = document.getElementById("taskStats");
const offlineMessage = document.getElementById("offlineMessage");
const completeSound = document.getElementById("completeSound");

// Side Tasks Selectors
const sideTaskInput = document.getElementById("sideTaskInput");
const sideTaskMood = document.getElementById("sideTaskMood");
const customMoodInput = document.getElementById("customMoodInput");
const addSideTaskBtn = document.getElementById("addSideTask");
const sideTaskList = document.getElementById("sideTaskList");

// History Modals
const daysBtn = document.getElementById("daysBtn");
const daysModal = document.getElementById("daysModal");
const daysList = document.getElementById("daysList");
const dayDetailModal = document.getElementById("dayDetailModal");
const detailTitle = document.getElementById("detailTitle");
const detailContent = document.getElementById("detailContent");

// Edit Modal
const editModal = document.getElementById("editModal");
const editTaskInput = document.getElementById("editTaskInput");
const editTaskColor = document.getElementById("editTaskColor");
const saveEditBtn = document.getElementById("saveEditBtn");
const cancelEditBtn = document.getElementById("cancelEditBtn");
const closeEditModalBtn = document.querySelector(".close-edit-modal");
const editColorPresets = document.getElementById("editColorPresets");

// Universal Confirm Modal
const universalConfirmModal = document.getElementById("universalConfirmModal");
const confirmTitle = document.getElementById("confirmTitle");
const confirmMessage = document.getElementById("confirmMessage");
const confirmIconSlot = document.getElementById("confirmIconSlot");
const confirmOkBtn = document.getElementById("confirmOkBtn");
const confirmCancelBtn = document.getElementById("confirmCancelBtn");
let onConfirmCallback = null;

// Application State
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let sideTasks = JSON.parse(localStorage.getItem("sideTasks")) || [];
let pastDays = JSON.parse(localStorage.getItem("pastDays")) || [];
let isDarkTheme = JSON.parse(localStorage.getItem("isDarkTheme")) ?? true;
let completedDays = parseInt(localStorage.getItem("completedDays")) || 1;
let currentEditingTask = null;
let isExtraHidden = false;
let wasCompleted = tasks.length > 0 && tasks.every((t) => t.completed);

// Quick Color Presets
function setupColorPresets(containerId, hiddenInputId) {
    const parent = document.getElementById(containerId);
    const hidden = document.getElementById(hiddenInputId);
    if (!parent || !hidden) return;

    parent.querySelectorAll(".color-dot").forEach((dot) => {
        dot.onclick = () => {
            parent.querySelectorAll(".color-dot").forEach((d) => d.classList.remove("active"));
            dot.classList.add("active");
            hidden.value = dot.dataset.color;
        };
    });
}
setupColorPresets("colorPresets", "taskColor");
setupColorPresets("editColorPresets", "editTaskColor");

// App Init
updateTheme();
dayCounter.querySelector(".badge-text").textContent = `روز: ${completedDays}`;

sideTaskMood.addEventListener("change", () => {
    customMoodInput.style.display = sideTaskMood.value === "custom" ? "block" : "none";
});

// Smooth Modal Management
function openModal(modal) {
    modal.classList.remove("closing");
    modal.style.display = "flex";
    void modal.offsetWidth; // Force CSS Reflow
    modal.classList.add("open");
}

function closeModal(modal) {
    if (!modal.classList.contains("open")) return;
    modal.classList.add("closing");
    modal.classList.remove("open");
    setTimeout(() => {
        modal.classList.remove("closing");
        modal.style.display = "none";
    }, 280);
}

document.querySelectorAll(".close-modal").forEach((btn) => {
    btn.onclick = () => {
        closeModal(daysModal);
        closeModal(dayDetailModal);
    };
});

window.onclick = (e) => {
    if (e.target === universalConfirmModal) closeModal(universalConfirmModal);
    else if (e.target === daysModal) closeModal(daysModal);
    else if (e.target === dayDetailModal) closeModal(dayDetailModal);
    else if (e.target === editModal) closeModal(editModal);
};

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        if (universalConfirmModal.classList.contains("open")) {
            closeModal(universalConfirmModal);
        } else if (dayDetailModal.classList.contains("open")) {
            closeModal(dayDetailModal);
        } else if (daysModal.classList.contains("open")) {
            closeModal(daysModal);
        } else if (editModal.classList.contains("open")) {
            closeModal(editModal);
        }
    }
});

// Custom Confirm Dialog
function showCustomConfirm({ title, message, iconType = "alert", onConfirm }) {
    confirmTitle.textContent = title;
    confirmMessage.textContent = message;

    if (iconType === "trash") confirmIconSlot.innerHTML = SVG_ICONS.trashLarge;
    else if (iconType === "moon") confirmIconSlot.innerHTML = SVG_ICONS.moonLarge;
    else confirmIconSlot.innerHTML = SVG_ICONS.alertLarge;

    onConfirmCallback = onConfirm;
    openModal(universalConfirmModal);
}

confirmOkBtn.onclick = () => {
    if (onConfirmCallback) onConfirmCallback();
    closeModal(universalConfirmModal);
};

confirmCancelBtn.onclick = () => {
    closeModal(universalConfirmModal);
};

// Edit Modal
function openEditModal(task) {
    currentEditingTask = task;
    editTaskInput.value = task.text;
    editTaskColor.value = task.color || "#10b981";

    editColorPresets.querySelectorAll(".color-dot").forEach((d) => {
        d.classList.toggle("active", d.dataset.color === editTaskColor.value);
    });

    openModal(editModal);
    editTaskInput.focus();
}

saveEditBtn.onclick = () => {
    const text = editTaskInput.value.trim();
    if (!text) {
        editTaskInput.classList.add("shake");
        setTimeout(() => editTaskInput.classList.remove("shake"), 350);
        return;
    }

    if (currentEditingTask) {
        currentEditingTask.text = text;
        currentEditingTask.color = editTaskColor.value;
        saveTasks();
        renderTasks();
        closeModal(editModal);
    }
};

cancelEditBtn.onclick = () => closeModal(editModal);
closeEditModalBtn.onclick = () => closeModal(editModal);

// Past Days History
daysBtn.onclick = () => {
    daysList.innerHTML = "";
    if (pastDays.length === 0) {
        daysList.innerHTML = "<p style='text-align:center; padding: 25px; opacity:0.7;'>هنوز هیچ روزی به پایان نرسیده است!</p>";
    } else {
        pastDays.slice().reverse().forEach((day, revIdx) => {
            const idx = pastDays.length - 1 - revIdx;
            const card = document.createElement("div");
            card.className = "day-card";
            card.innerHTML = `
                <div>
                    <h3>روز ${day.dayNumber}</h3>
                    <small style="opacity: 0.7;">${day.tasks ? day.tasks.length : 0} کار ثبت‌شده</small>
                </div>
                <div style="display: flex; gap: 8px;">
                    <button class="glass-btn view-day">نمایش</button>
                    <button class="glass-btn delete-day" style="color: var(--danger);">حذف</button>
                </div>
            `;

            card.querySelector(".view-day").onclick = () => {
                closeModal(daysModal);
                showDayDetail(idx);
            };

            card.querySelector(".delete-day").onclick = (e) => {
                e.stopPropagation();
                // Opens on top of history modal with higher z-index
                showCustomConfirm({
                    title: `حذف گزارش روز ${day.dayNumber}`,
                    message: "آیا مطمئن هستید که می‌خواهید این گزارش را به‌طور دائم پاک کنید؟",
                    iconType: "trash",
                    onConfirm: () => {
                        pastDays.splice(idx, 1);
                        localStorage.setItem("pastDays", JSON.stringify(pastDays));
                        daysBtn.click();
                    }
                });
            };

            daysList.appendChild(card);
        });
    }
    openModal(daysModal);
};

function showDayDetail(idx) {
    const day = pastDays[idx];
    detailTitle.textContent = `گزارش کامل روز ${day.dayNumber}`;

    let html = `<h4 style="margin-bottom: 10px;">کارهای اصلی:</h4><ul style="list-style:none; display:flex; flex-direction:column; gap:8px; margin-bottom:20px;">`;

    (day.tasks || []).forEach((t) => {
        const statusIcon = t.completed 
            ? `<span style="color:var(--primary); display:inline-flex; align-items:center; gap:4px;">${SVG_ICONS.checkCircle} انجام شد</span>` 
            : `<span style="color:var(--danger); display:inline-flex; align-items:center; gap:4px;">${SVG_ICONS.banCircle} ناتمام</span>`;
        
        html += `<li style="padding: 10px 14px; border-radius: 10px; background: rgba(255,255,255,0.05); display: flex; justify-content: space-between; align-items:center;">
            <span><span style="display:inline-block; width:10px; height:10px; border-radius:50%; background:${t.color}; margin-left:8px;"></span>${t.text}</span>
            <span style="font-size:12px;">${statusIcon}</span>
        </li>`;
    });
    html += "</ul>";

    html += `<h4 style="margin-bottom: 10px;">کارهای فرعی و احوالات:</h4><ul style="list-style:none; display:flex; flex-direction:column; gap:8px;">`;
    if (!day.sideTasks || day.sideTasks.length === 0) {
        html += `<li style="opacity: 0.6; font-size:13px;">موردی ثبت نشده است.</li>`;
    } else {
        day.sideTasks.forEach((st) => {
            let moodLabel = st.mood === "positive" 
                ? `<span style="color:var(--primary); display:inline-flex; align-items:center; gap:4px;">${SVG_ICONS.checkCircle} مثبت</span>` 
                : st.mood === "negative" 
                ? `<span style="color:var(--danger); display:inline-flex; align-items:center; gap:4px;">${SVG_ICONS.banCircle} منفی</span>` 
                : `<span style="color:var(--info); display:inline-flex; align-items:center; gap:4px;">${SVG_ICONS.sprout} ${st.customMood || "سایر"}</span>`;

            html += `<li style="padding: 10px 14px; border-radius: 10px; background: rgba(255,255,255,0.05); display: flex; justify-content: space-between; align-items:center;">
                <span>${st.text}</span>
                <span style="font-size:12px;">${moodLabel}</span>
            </li>`;
        });
    }
    html += "</ul>";

    const dayDate = new Date(day.tasks?.find((t) => t.completedAt)?.completedAt || Date.now());
    const persianDate = dayDate.toLocaleDateString("fa-IR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
    });

    html += `<div style="margin-top: 24px; text-align: left; font-size: 13px; opacity: 0.7;">تاریخ ثبت: ${persianDate}</div>`;

    detailContent.innerHTML = html;
    openModal(dayDetailModal);
}

// Storage Helpers
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function saveSideTasks() {
    localStorage.setItem("sideTasks", JSON.stringify(sideTasks));
}

function saveCompletedDays() {
    localStorage.setItem("completedDays", completedDays);
    dayCounter.querySelector(".badge-text").textContent = `روز: ${completedDays}`;
}

// Confetti Blast
function launchConfetti() {
    if (typeof confetti === "function") {
        confetti({
            particleCount: 140,
            spread: 90,
            origin: { y: 0.6 },
            colors: ["#10b981", "#3b82f6", "#f59e0b", "#ec4899", "#8b5cf6"],
        });
    }
}

// Progress Bar
function updateProgress() {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.completed).length;
    const percentage = total ? Math.round((completed / total) * 100) : 0;
    progressText.textContent = `${percentage}%`;

    const circumference = 264;
    const dash = (percentage / 100) * circumference;
    progressCircle.setAttribute("stroke-dasharray", `${dash} ${circumference - dash}`);

    const allDone = total > 0 && completed === total;
    if (allDone && !wasCompleted) {
        pastDays.push({
            dayNumber: completedDays,
            tasks: JSON.parse(JSON.stringify(tasks)),
            sideTasks: JSON.parse(JSON.stringify(sideTasks)),
        });
        localStorage.setItem("pastDays", JSON.stringify(pastDays));

        completedDays++;
        saveCompletedDays();

        congratsMessage.style.display = "flex";
        launchConfetti();

        setTimeout(() => {
            congratsMessage.style.display = "none";
            tasks.forEach((t) => (t.completed = false));
            saveTasks();
            sideTasks = [];
            saveSideTasks();
            renderSideTasks();
            renderTasks();
        }, 3400);
    }
    wasCompleted = allDone;
}

function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.completed).length;
    taskStats.textContent = `تکمیل‌شده: ${completed} | باقی‌مانده: ${total - completed} | کل: ${total}`;
}

// Render Tasks
function renderTasks() {
    taskList.innerHTML = "";
    const search = searchInput.value.toLowerCase().trim();
    const filter = filterLabel.value;
    const sort = sortOrder.value;

    let filtered = tasks.filter(
        (t) =>
            t.text.toLowerCase().includes(search) &&
            (filter === "all" || t.importance === filter)
    );

    filtered.sort((a, b) => {
        if (a.completed && !b.completed) return 1;
        if (!a.completed && b.completed) return -1;
        if (sort === "custom") return 0;
        if (!a.completed && !b.completed) {
            if (sort === "label") {
                const order = { high: 0, medium: 1, low: 2 };
                return order[a.importance] - order[b.importance];
            }
            if (sort === "text") return a.text.localeCompare(b.text);
        }
        return 0;
    });

    emptyTaskState.style.display = filtered.length === 0 ? "block" : "none";

    filtered.forEach((task) => {
        const li = document.createElement("li");
        li.className = `task ${task.completed ? "completed" : ""}`;
        li.draggable = true;

        let badgeIcon = SVG_ICONS.zap;
        let badgeLabel = "متوسط";
        if (task.importance === "high") {
            badgeIcon = SVG_ICONS.flame;
            badgeLabel = "زیاد";
        } else if (task.importance === "low") {
            badgeIcon = SVG_ICONS.coffee;
            badgeLabel = "کم";
        }

        li.innerHTML = `
            <div class="task-accent-bar" style="background-color: ${task.color || 'var(--primary)'}"></div>
            <button class="task-check-btn" title="تغییر وضعیت">
                <svg class="circle" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M7 12l3.5 3.5 6.5-7" />
                </svg>
            </button>
            <span class="task-text">${task.text}</span>
            <span class="importance-badge ${task.importance}">
                ${badgeIcon}
                <span>${badgeLabel}</span>
            </span>
            <div class="task-actions">
                <button class="action-icon-btn edit-btn" title="ویرایش">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                </button>
                <button class="action-icon-btn delete-btn" title="حذف">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                </button>
            </div>
        `;

        // Check Toggle with Dedicated Completion Animation
        li.querySelector(".task-check-btn").onclick = () => {
            const willBeCompleted = !task.completed;
            task.completed = willBeCompleted;

            if (willBeCompleted) {
                task.completedAt = new Date().toISOString();
                if (completeSound) completeSound.play().catch(() => {});

                // Animate element before re-ordering
                li.classList.add("completed", "just-completed");

                setTimeout(() => {
                    saveTasks();
                    renderTasks();
                }, 450);
            } else {
                saveTasks();
                renderTasks();
            }
        };

        li.querySelector(".edit-btn").onclick = () => openEditModal(task);
        li.querySelector(".delete-btn").onclick = () => {
            showCustomConfirm({
                title: "حذف تسک",
                message: `آیا از حذف "${task.text}" مطمئن هستید؟`,
                iconType: "trash",
                onConfirm: () => {
                    li.classList.add("removing");
                    setTimeout(() => {
                        const index = tasks.indexOf(task);
                        if (index !== -1) {
                            tasks.splice(index, 1);
                            saveTasks();
                            renderTasks();
                        }
                    }, 280);
                }
            });
        };

        li.ondragstart = (e) => e.dataTransfer.setData("text/plain", tasks.indexOf(task));
        li.ondragover = (e) => e.preventDefault();
        li.ondrop = (e) => {
            e.preventDefault();
            const fromIndex = parseInt(e.dataTransfer.getData("text/plain"));
            const toIndex = tasks.indexOf(task);
            if (fromIndex !== toIndex && fromIndex >= 0) {
                const moved = tasks.splice(fromIndex, 1)[0];
                tasks.splice(toIndex, 0, moved);
                saveTasks();
                renderTasks();
            }
        };

        taskList.appendChild(li);
    });

    updateProgress();
    updateStats();
}

// Side Tasks Rendering
function renderSideTasks() {
    sideTaskList.innerHTML = "";
    sideTasks.forEach((task, idx) => {
        const li = document.createElement("li");
        li.className = `side-task ${task.mood}`;

        let moodIcon = SVG_ICONS.checkCircle;
        let moodLabel = "مثبت";
        if (task.mood === "negative") {
            moodIcon = SVG_ICONS.banCircle;
            moodLabel = "منفی";
        } else if (task.mood === "custom") {
            moodIcon = SVG_ICONS.sprout;
            moodLabel = task.customMood || "سایر";
        }

        li.innerHTML = `
            <span>${task.text}</span>
            <div style="display: flex; align-items: center; gap: 8px;">
                <span class="mood-badge">
                    ${moodIcon}
                    <span>${moodLabel}</span>
                </span>
                <button class="delete-side" title="حذف">حذف</button>
            </div>
        `;

        li.querySelector(".delete-side").onclick = () => {
            sideTasks.splice(idx, 1);
            saveSideTasks();
            renderSideTasks();
        };

        sideTaskList.appendChild(li);
    });
}

// Add Task
addTaskBtn.onclick = () => {
    const text = taskInput.value.trim();
    if (!text) {
        taskInput.classList.add("shake");
        setTimeout(() => taskInput.classList.remove("shake"), 350);
        taskInput.focus();
        return;
    }

    tasks.push({
        text,
        importance: importanceSelect.value,
        color: taskColor.value,
        completed: false,
    });
    taskInput.value = "";
    saveTasks();
    renderTasks();
};

taskInput.onkeypress = (e) => {
    if (e.key === "Enter") addTaskBtn.click();
};

// Add Side Task
addSideTaskBtn.onclick = () => {
    const text = sideTaskInput.value.trim();
    if (!text) {
        sideTaskInput.classList.add("shake");
        setTimeout(() => sideTaskInput.classList.remove("shake"), 350);
        sideTaskInput.focus();
        return;
    }

    const mood = sideTaskMood.value;
    const custom = mood === "custom" ? customMoodInput.value.trim() : null;

    sideTasks.push({ text, mood, customMood: custom });
    sideTaskInput.value = "";
    customMoodInput.value = "";
    if (mood === "custom") customMoodInput.style.display = "none";

    saveSideTasks();
    renderSideTasks();
};

sideTaskInput.onkeypress = (e) => {
    if (e.key === "Enter") addSideTaskBtn.click();
};

// Theme Management
function updateTheme() {
    container.className = `app-wrapper ${isDarkTheme ? "dark-theme" : "light-theme"}`;
    themeIconSlot.innerHTML = isDarkTheme ? SVG_ICONS.sun : SVG_ICONS.moon;
}

toggleTheme.onclick = () => {
    isDarkTheme = !isDarkTheme;
    localStorage.setItem("isDarkTheme", JSON.stringify(isDarkTheme));
    updateTheme();
};

// Accordion Collapsible Panel
toggleArrow.onclick = () => {
    isExtraHidden = !isExtraHidden;
    hideableSection.classList.toggle("hidden", isExtraHidden);
    toggleArrow.classList.toggle("rotated", isExtraHidden);
};

// Reset Day (Call it a day)
resetTasksBtn.onclick = () => {
    showCustomConfirm({
        title: "پایان روز و ثبت عملکرد",
        message: "آیا مطمئن هستید که می‌خواهید کارهای امروز را ببندید و وارد روز بعد شوید؟",
        iconType: "moon",
        onConfirm: () => {
            pastDays.push({
                dayNumber: completedDays,
                tasks: JSON.parse(JSON.stringify(tasks)),
                sideTasks: JSON.parse(JSON.stringify(sideTasks)),
            });
            localStorage.setItem("pastDays", JSON.stringify(pastDays));

            completedDays++;
            saveCompletedDays();

            tasks.forEach((t) => (t.completed = false));
            saveTasks();

            sideTasks = [];
            saveSideTasks();
            renderSideTasks();

            renderTasks();
        }
    });
};

// Filter & Sort
searchInput.oninput = renderTasks;
filterLabel.onchange = () => {
    localStorage.setItem("filterLabel", filterLabel.value);
    renderTasks();
};
sortOrder.onchange = () => {
    localStorage.setItem("sortOrder", sortOrder.value);
    renderTasks();
};

// Network Detection
window.ononline = () => (offlineMessage.style.display = "none");
window.onoffline = () => (offlineMessage.style.display = "flex");
offlineMessage.style.display = navigator.onLine ? "none" : "flex";

// Initial Run
renderTasks();
renderSideTasks();

// if ("serviceWorker" in navigator) {
//     window.addEventListener("load", () => {
//         navigator.serviceWorker
//             .register("./service-worker.js")
//             .then((registration) => {
//                 console.log("Service Worker registered:", registration);
//             })
//             .catch((error) => {
//                 console.error("Service Worker registration failed:", error);
//             });
//     });
// }