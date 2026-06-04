import { computed } from "vue";

export function useAccessibleSvg(props) {
	const svgAttributes = computed(() => {
		if (props.decorative) {
			return { "aria-hidden": "true" };
		}

		return {
			role: "img",
			"aria-label": props.label,
		};
	});

	const svgStyle = computed(() => ({
		height: props.size,
		width: "auto",
		display: "inline-block",
		verticalAlign: "middle",
	}));

	return { svgAttributes, svgStyle };
}
