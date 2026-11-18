(() => {
    "use strict";

    const effectDescriptions = new Map(
        Object.entries(GodForgeEffects).map(([name, effect]) => [name.trim().toLowerCase(), { name, ...effect }])
    );

    const effectTypeLabels = {
        buff: "BUFF",
        debuff: "DEBUFF",
        disable: "DISABLE",
        action: "ACTION"
    };

    const effectSelector = "span";
    const effectClass = "godforge-helper-effect";
    const tooltipId = "godforge-helper-tooltip";
    const tooltipGap = 10;
    const viewportPadding = 12;

    let activeElement = null;

    const tooltip = document.createElement("div");
    tooltip.id = tooltipId;
    tooltip.className = "godforge-helper-tooltip";
    tooltip.setAttribute("role", "tooltip");
    tooltip.hidden = true;

    const tooltipType = document.createElement("div");
    tooltipType.className = "godforge-helper-tooltip-type";

    const tooltipDescription = document.createElement("div");
    tooltipDescription.className = "godforge-helper-tooltip-description";

    tooltip.append(tooltipType, tooltipDescription);
    document.documentElement.appendChild(tooltip);

    function getEffect(element) {
        const name = element.textContent.trim().toLowerCase();
        return effectDescriptions.get(name);
    }

    function positionTooltip() {
        if (!activeElement || tooltip.hidden) {
            return;
        }

        const targetRectangle = activeElement.getBoundingClientRect();
        const tooltipRectangle = tooltip.getBoundingClientRect();
        const availableWidth = window.innerWidth - viewportPadding * 2;
        const left = Math.max(viewportPadding, Math.min(
            targetRectangle.left, window.innerWidth - tooltipRectangle.width - viewportPadding
        ));

        const spaceBelow = window.innerHeight - targetRectangle.bottom - tooltipGap;
        const spaceAbove = targetRectangle.top - tooltipGap;
        const showAbove = spaceBelow < tooltipRectangle.height && spaceAbove > spaceBelow;
        const top = showAbove
            ? Math.max(viewportPadding, targetRectangle.top - tooltipRectangle.height - tooltipGap)
            : Math.min(window.innerHeight - tooltipRectangle.height - viewportPadding, targetRectangle.bottom + tooltipGap);

        tooltip.style.maxWidth = `${availableWidth}px`;
        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${Math.max(viewportPadding, top)}px`;
    }

    function showTooltip(element) {
        const effect = getEffect(element);
        if (!effect) {
            return;
        }

        if (activeElement && activeElement !== element) {
            activeElement.setAttribute("aria-expanded", "false");
        }

        activeElement = element;
        tooltip.dataset.type = effect.type || "neutral";
        tooltipType.textContent = effectTypeLabels[effect.type] || "EFFECT";
        tooltipDescription.textContent = effect.description;
        tooltip.hidden = false;
        element.setAttribute("aria-expanded", "true");
        positionTooltip();
    }

    function hideTooltip() {
        if (activeElement) {
            activeElement.setAttribute("aria-expanded", "false");
        }
        activeElement = null;
        tooltip.hidden = true;
    }

    function hideTooltipForElement(event) {
        if (activeElement === event.currentTarget) {
            hideTooltip();
        }
    }

    function registerEffect(element) {
        if (element.classList.contains(effectClass)) {
            const currentEffect = getEffect(element);
            if (currentEffect) {
                element.dataset.godforgeHelperType = currentEffect.type || "neutral";
                if (activeElement === element) {
                    showTooltip(element);
                }
            } else {
                element.classList.remove(effectClass);
                delete element.dataset.godforgeHelperType;
                if (activeElement === element) {
                    hideTooltip();
                }
            }
            return;
        }

        if (!getEffect(element)) {
            return;
        }

        // Ignore outer spans that contain an inner matching span.
        if (Array.from(element.querySelectorAll(effectSelector)).some((child) => getEffect(child))) {
            return;
        }

        element.classList.add(effectClass);
        element.dataset.godforgeHelperType = getEffect(element).type || "neutral";
        element.setAttribute("tabindex", "0");
        element.setAttribute("aria-describedby", tooltipId);
        element.setAttribute("aria-expanded", "false");

        element.addEventListener("mouseenter", () => showTooltip(element));
        element.addEventListener("mouseleave", hideTooltipForElement);
        element.addEventListener("focus", () => showTooltip(element));
        element.addEventListener("blur", hideTooltipForElement);
    }

    function scanEffects(root) {
        if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE) {
            return;
        }

        if (root === tooltip || tooltip.contains(root)) {
            return;
        }

        if (root.matches?.(effectSelector)) {
            registerEffect(root);
        }

        root.querySelectorAll(effectSelector).forEach((element) => {
            if (!tooltip.contains(element)) {
                registerEffect(element);
            }
        });
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && activeElement) {
            hideTooltip();
        }
    });

    window.addEventListener("resize", positionTooltip);
    window.addEventListener("scroll", positionTooltip, true);

    scanEffects(document);

    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type === "characterData") {
                const parent = mutation.target.parentElement;
                if (parent && !tooltip.contains(parent)) {
                    scanEffects(parent);
                }
                continue;
            }

            for (const node of mutation.addedNodes) {
                scanEffects(node);
            }
        }

        if (activeElement && !activeElement.isConnected) {
            hideTooltip();
        }
    });

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
        characterData: true
    });
})();
