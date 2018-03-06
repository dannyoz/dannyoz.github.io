<template>
	<div class="switcher" :class="animState">
		<div class="switcher__view current-view">
			<p class="centred">{{currentView}}</p>
		</div>

		<div class="switcher__view next-view">
			<p class="centred">{{nextView}}</p>
		</div>
		
		<nav>
			<button @click="swtichView('1')">1</button>
			<button @click="swtichView('2')">2</button>
			<button @click="swtichView('3')">3</button>
		</nav>
	</div>
</template>

<script>
	const transitionDuration = 1000; 
	export default {
		data() {
			return {
				currentView: null,
				nextView: null,
				animState: null,
			}
		},
		mounted() {
			if(location.hash.length) {
				this.handleHash();
			}

			window.addEventListener('popstate', () => {
				console.log('Hash changed!!!');
				this.handleHash();
			});
		},
		methods: {
			swtichView(view) {
				// this.currentView = view;
				// const hash = `#/${view}`;
				// history.pushState({}, view, hash);
				this.nextView = view;
				this.animState = 'exit';

				setTimeout(() => {
					this.animState = 'enter';
					this.updateCurrentView(view);

					setTimeout(() => {
						this.nextView = null;
						this.animState = null;
					}, transitionDuration);
				}, transitionDuration);
			},

			updateCurrentView(view) {
				this.currentView = view;
				const hash = `#/${view}`;
				history.pushState({}, view, hash);
			},

			handleHash() {
				const view = location.hash.replace('#/', '');
				this.updateCurrentView(view);
			}
		}
	}
</script>
