<template>
	<div>
		<switcher></switcher>
		<intro></intro>
		<projects></projects>
	</div>
</template>

<script>
	import switcher from './switcher/switcher.vue';
    import intro from './intro/intro.vue';
    import projects from './projects/projects.vue';
	export default {
		components: {
			switcher,
            intro,
            projects,
        },
	};
</script>
