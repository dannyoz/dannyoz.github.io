<template>
	<div class="switcher">
		<p>{{currentView}}</p>
		<button @click="swtichView('1')">1</button>
		<button @click="swtichView('2')">2</button>
		<button @click="swtichView('3')">3</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				currentView: null,
			}
		},
		mounted() {
			console.log(location);
		},
		methods: {
			swtichView(view) {
				this.currentView = view;
			}
		}
	}
</script>
