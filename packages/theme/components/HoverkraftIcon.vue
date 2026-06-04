<script setup>
import { useAccessibleSvg } from "./useAccessibleSvg.js";

const props = defineProps({
	size: { type: String, default: "1em" },
	label: { type: String, default: "Hoverkraft" },
	decorative: { type: Boolean, default: false },
});

const { svgAttributes: _svgAttributes, svgStyle: _svgStyle } =
	useAccessibleSvg(props);
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 154.11 154.97"
    focusable="false"
    :role="props.decorative ? undefined : 'img'"
    :aria-label="props.decorative ? undefined : props.label"
    :aria-hidden="props.decorative ? 'true' : undefined"
    v-bind="_svgAttributes"
    :style="_svgStyle"
  >
    <defs>
      <linearGradient
        id="hk-icon-a"
        x1="47.8"
        x2="41.8"
        y1="86.28"
        y2="86.28"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" style="stop-opacity: 1; stop-color: #1f346e" />
        <stop offset="1" style="stop-opacity: 1; stop-color: #256dd9" />
      </linearGradient>
      <linearGradient
        id="hk-icon-j"
        xlink:href="#hk-icon-a"
        x1="87.84"
        x2="87.81"
        y1="46.14"
        y2="50.71"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        id="hk-icon-f"
        xlink:href="#hk-icon-a"
        x1="58.95"
        x2="58.91"
        y1="46.14"
        y2="50.71"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        id="hk-icon-g"
        xlink:href="#hk-icon-a"
        x1="73.16"
        x2="73.12"
        y1="46.14"
        y2="50.71"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        id="hk-icon-e"
        xlink:href="#hk-icon-a"
        x1="88.43"
        x2="82.43"
        y1="65.11"
        y2="65.11"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        id="hk-icon-i"
        xlink:href="#hk-icon-a"
        x1="88.43"
        x2="82.43"
        y1="95.8"
        y2="95.79"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        id="hk-icon-b"
        xlink:href="#hk-icon-a"
        x1="74.23"
        x2="68.22"
        y1="80.49"
        y2="80.49"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        id="hk-icon-c"
        xlink:href="#hk-icon-a"
        x1="47.8"
        x2="41.8"
        y1="61.09"
        y2="61.08"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        id="hk-icon-l"
        xlink:href="#hk-icon-a"
        x1="113.14"
        x2="108.2"
        y1="82.51"
        y2="85.99"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        id="hk-icon-d"
        xlink:href="#hk-icon-a"
        x1="32.53"
        x2="32.49"
        y1="46.14"
        y2="50.71"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        id="hk-icon-h"
        xlink:href="#hk-icon-a"
        x1="24.74"
        x2="24.73"
        y1="62.47"
        y2="67.05"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        id="hk-icon-k"
        xlink:href="#hk-icon-a"
        x1="100.11"
        x2="97.5"
        y1="64.39"
        y2="62.27"
        gradientUnits="userSpaceOnUse"
      />
    </defs>
    <path
      d="M16.82 109.58h120.54c7.64 0 13.9 6.25 13.9 13.89s-6.26 13.9-13.9 13.9H16.82c-7.64 0-13.89-6.26-13.89-13.9s6.25-13.89 13.89-13.89m69.23 35.12h41.47c2.82 0 5.13 2.31 5.13 5.14 0 2.82-2.31 5.13-5.13 5.13H86.05c-2.82 0-5.13-2.31-5.13-5.13 0-2.83 2.31-5.14 5.13-5.14m-59.39 0h41.48c2.82 0 5.13 2.31 5.13 5.14 0 2.82-2.31 5.13-5.13 5.13H26.66c-2.82 0-5.13-2.31-5.13-5.13 0-2.83 2.31-5.14 5.13-5.14m5.01-106.63h.2C35.56 16.45 54.39 0 77.06 0s41.49 16.45 45.19 38.07h.19c17.42 0 31.67 14.25 31.67 31.67s-14.25 31.67-31.67 31.67H31.67C14.25 101.41 0 87.16 0 69.74s14.25-31.67 31.67-31.67"
      style="fill: #1998ff"
    />
    <path
      d="M37.34 88.39V46.65l1.09-1.03v1.03h8.83v16.33h16.5V46.65l1.09-1.03v1.03h8.83l1.08 40.71-1.08 1.03h-9.92V71.16h-16.5l1.08 16.2-1.08 1.03zm40.63-41.74 1.08-1.03v1.03h7.73V56.9l-.12 9.66.08-.12c.82-1.31 1.71-2.65 2.68-3.98.99-1.34 2.08-2.83 3.38-4.42l9.3-11.39 2.2-1.03 10.79 1.03-15.12 18.01 16.8 22.7-1.08 1.03h-11.63L93.23 71.21l-5.34 6.12 1.08 10.03-1.08 1.03h-9.92z"
      style="fill: #ade5ff; fill-rule: nonzero"
    />
    <path
      d="M38.43 87.36V45.62h9.91v16.34h16.51V45.62h9.91v41.74h-9.91V70.13H48.34v17.23zm66.71 0L94.32 70.19l-5.35 6.12v11.05h-9.92V45.62h9.92v10.25l-.11 9.67.07-.12c.82-1.32 1.71-2.65 2.69-3.98.98-1.34 2.1-2.81 3.38-4.42l9.3-11.4h11.88l-15.13 18.02 15.72 23.72z"
      style="fill: #256dd9; fill-rule: nonzero"
    />
    <path d="m74.76 45.62-7.2 6.09v35.65h7.2z" style="fill: url(#hk-icon-b)" />
    <path d="M41.14 76.22v11.14h7.2V70.13z" style="fill: url(#hk-icon-a)" />
    <path
      d="m48.34 45.62-7.2 6.09v16.33l7.2-6.08z"
      style="fill: url(#hk-icon-c)"
    />
    <path
      d="m48.34 45.62-8.51 7.21h-1.4v-7.21z"
      style="fill: url(#hk-icon-d)"
    />
    <path
      d="m88.97 45.62-7.2 6.09v21.6l7.2-7.77z"
      style="fill: url(#hk-icon-e)"
    />
    <path
      d="m74.76 45.62-8.51 7.21h-1.4v-7.21z"
      style="fill: url(#hk-icon-f)"
    />
    <path
      d="m88.97 45.62-8.51 7.21h-1.4v-7.21z"
      style="fill: url(#hk-icon-g)"
    />
    <path
      d="m64.85 61.96-8.51 7.2H39.73l8.61-7.2z"
      style="fill: url(#hk-icon-h)"
    />
    <path d="m88.97 76.31-7.2 8.19v2.86h7.2z" style="fill: url(#hk-icon-i)" />
    <path
      d="m116.18 45.62-12.04 7.21h-5.72l5.88-7.21z"
      style="fill: url(#hk-icon-j)"
    />
    <path
      d="m116.18 45.62-8.5 4.79-12.7 16.06 6.07-2.83z"
      style="fill: url(#hk-icon-k)"
    />
    <path
      d="m101.05 63.64-6.07 2.83 13.39 20.89h8.4z"
      style="fill: url(#hk-icon-l)"
    />
  </svg>
</template>
