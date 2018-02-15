<template>
	<div class="project-list">
		<div v-for="project in projects">
			<p>{{project.title}}</p>
		</div>
	</div>
</template>

<script>
	import projects from '../../projects.json';
	export default {
		data() {
			return {
				projects,
			};
		},
	};
</script>
