<div id="app">
	<slot />
</div>

<style type="text/scss">
	@import './layout.scss';
	#app {
		padding-top: env(safe-area-inset-top);
		padding-bottom: env(safe-area-inset-bottom);
		height: 100%;
		width: 100%;
	}
</style>
