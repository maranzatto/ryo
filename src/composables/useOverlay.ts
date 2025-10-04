import { ref, h, render } from "vue";

const overlayEl = ref<HTMLElement | null>(null);

export function useOverlay() {
    function show(component: any, props = {}, slotContent: any = null) {
        overlayEl.value = document.createElement("div");
        overlayEl.value.className =
            "fixed inset-0 flex items-center justify-center bg-black/50 z-[9999]";
        document.body.appendChild(overlayEl.value);

        const slots = slotContent ? { default: () => slotContent } : {};
        render(
            h(component, { ...props, onClose: hide }, slots),
            overlayEl.value,
        );
    }

    function hide() {
        if (overlayEl.value) {
            render(null, overlayEl.value);
            document.body.removeChild(overlayEl.value);
            overlayEl.value = null;
        }
    }

    return { show, hide };
}
