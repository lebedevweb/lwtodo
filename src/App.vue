<template>
	<router-view />
	<footer-component />
</template>

<script>
// @ is an alias to /src
import FooterComponent from "@/components/FooterComponent";

export default {
	components: {
		"footer-component": FooterComponent,
	},
};
</script>
