<script setup>
defineProps({
	byLabel: {
		type: String,
		default: "by",
	},
	logoSize: {
		type: String,
		default: "1.1rem",
	},
	fixed: {
		type: Boolean,
		default: false,
	},
	right: {
		type: String,
		default: "0.75rem",
	},
	bottom: {
		type: String,
		default: "0.5rem",
	},
	opacity: {
		type: Number,
		default: 0.85,
	},
});
</script>

<template>
  <footer
    class="hk-footer-signature"
    :class="{ 'hk-footer-signature--fixed': fixed }"
    :style="{
      '--hk-footer-signature-right': right,
      '--hk-footer-signature-bottom': bottom,
      '--hk-footer-signature-opacity': String(opacity),
    }"
  >
    <span>{{ byLabel }}</span>
    <HoverkraftLogo :size="logoSize" decorative />
  </footer>
</template>

<style scoped>
.hk-footer-signature {
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.35rem;
  margin-top: 1rem;
  font-size: 0.75rem;
  opacity: var(--hk-footer-signature-opacity);
}

.hk-footer-signature--fixed {
  position: fixed;
  right: var(--hk-footer-signature-right);
  bottom: var(--hk-footer-signature-bottom);
  margin-top: 0;
  z-index: 20;
}
</style>