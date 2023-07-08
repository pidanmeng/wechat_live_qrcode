import LogoDesktop from '$assets/logo-desktop.gif';
import pidanMoeAvatar from '$assets/pidanMoe.jpg';
export type pageData = {
	pageTitle: string;
	title: string;
	description: string;
	tips: string;
	url: string;
	createTime: string;
	logo: string;
	fallbackUrl: string;
	fallbackTitle: string;
	fallbackDescription: string;
	fallbackTips: string;
	fallbackLogo: string;
};
const config: Record<string, pageData> = {
	desktop: {
		pageTitle: '泊寓草桥桌游社',
		title: '泊寓草桥桌游社',
		description: '每周组局！',
		tips: '长按或扫描二维码加群',
		url: 'https://weixin.qq.com/g/AQYAAGq4omhneSq70QIRD7pyl8lCHYgY5LNI3tj7lTDAwDj45n6dwvPRoS5zYilA',
		createTime: '2023-07-08',
		logo: LogoDesktop,
		fallbackUrl: 'https://u.wechat.com/ECbTjoPEgTbwhLDWGPrjr4s',
		fallbackTitle: '皮蛋萌',
		fallbackDescription: '天津 南开',
		fallbackTips: '加群备注：草桥桌游社',
		fallbackLogo: pidanMoeAvatar
	}
};

export default config;
