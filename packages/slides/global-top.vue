<template>
  <div v-if="$nav.currentLayout !== 'cover'" class="hk-top">
    <div class="hk-top__progress" aria-hidden="true">
      <div
        class="hk-top__progress-bar"
        :style="{ width: `${$nav.total ? ($nav.currentPage / $nav.total) * 100 : 0}%` }"
      />
    </div>

    <div class="hk-top__pager">
      {{ $nav.currentPage }} / {{ $nav.total }}
    </div>
  </div>
</template>

<style scoped>
.hk-top {
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 30;
}

.hk-top__progress {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 3px;
  background: rgb(0 115 204 / 0.16);
}

.hk-top__progress-bar {
  height: 100%;
  background: rgb(0 115 204 / 0.72);
  transition: width 0.2s ease;
}

.hk-top__pager {
  position: absolute;
  right: 16px;
  bottom: 10px;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgb(21 32 46 / 0.72);
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  line-height: 1;
}
</style>
