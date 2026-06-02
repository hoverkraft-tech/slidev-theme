<script setup>
defineOptions({
  name: "HoverkraftCoverLayout",
});
</script>

<template>
  <div class="slidev-layout cover">
    <div class="hk-cover">
      <slot name="eyebrow">
        <div class="hk-eyebrow">
          <HoverkraftIcon class="hk-eyebrow__mark" size="1.1em" decorative />
          Hoverkraft
        </div>
      </slot>
      <div class="hk-cover__body">
        <slot />
      </div>
      <slot name="footer">
        <div class="hk-cover__rule" />
      </slot>
    </div>
  </div>
</template>
