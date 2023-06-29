<script lang="ts">
	import config from '$const/config';
	import { onMount } from 'svelte';
	import QRCode from 'easyqrcodejs';

	export let slug;

	let node: any = null;
	let prefersDarkMode = globalThis?.matchMedia?.('(prefers-color-scheme: dark)').matches;
	let qrCode =
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAANSURBVBhXY2BgYPgPAAEEAQBwIGULAAAAAElFTkSuQmCC';

	onMount(() => {
		node = document?.createElement('div');
		const options = {
			text: codeValue,
			colorDark: prefersDarkMode ? '#f8f8f8' : '#181818',
			colorLight: '#00000000',
			onRenderingEnd(_qrCodeOptions: any, dataURL: string) {
				qrCode = dataURL;
			}
		};
		const code = new QRCode(node, options);
	});
	let pageData = Reflect.get(config, slug) || {};
	let codeValue = pageData.url;
</script>

<div class="page">
	<div class="header">{pageData.title}</div>
	<div class="body">
		<div class="card">
			<div class="card-header">
				<div class="card-logo">
					<img src={pageData.logo} alt="logo" />
				</div>
				<div class="card-title">
					<div class="title">{pageData.title}</div>
					<div class="description">{pageData.description}</div>
				</div>
			</div>
			<div class="card-body">
				<img src={qrCode} alt="二维码" />
			</div>
			<div class="card-footer">{pageData.tips}</div>
		</div>
	</div>
</div>

<style type="text/scss" lang="scss">
	@media (prefers-color-scheme: dark) {
		.card {
			background-color: #111;
			box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
		}
	}
	@media (prefers-color-scheme: light) {
		.card {
			background-color: #f8f8f8;
			box-shadow: 0 0 1rem rgba(200, 200, 200, 1);
		}
	}
	.page {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		.header {
			flex: none;
		}
		.body {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			.card {
				margin: 1rem;
				height: 60%;
				width: 100%;
				border-radius: 1rem;
				padding: 20px;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-between;
				&-header {
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: space-between;
					width: 100%;
					.card-logo {
						height: 50px;
						width: 50px;
						img {
							height: 100%;
							width: 100%;
							object-fit: cover;
							border-radius: 0.5rem;
							outline: auto 5px -webkit-focus-ring-color;
						}
					}
					.card-title {
						display: flex;
						flex: 1;
						margin-left: 30px;
						flex-direction: column;
						align-items: flex-start;
						justify-content: center;
						width: 0;
						.title {
							font-size: 1.5rem;
							font-weight: bold;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
							text-align: start;
							width: 100%;
						}
						.description {
							font-size: 1rem;
							font-weight: normal;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
							text-align: start;
							width: 100%;
						}
					}
				}
			}
		}
	}
</style>
