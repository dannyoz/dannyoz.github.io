<template>
	<div>
		<intro></intro>
		<projects></projects>
	</div>
</template>

<script>
    import intro from './intro/intro.vue';
    import projects from './projects/projects.vue';
	export default {
		components: {
            intro,
            projects,
        },
	};
</script>
