import LogoDesktop from '$assets/logo-desktop.gif';
type pageData = {
	title: string;
	description: string;
	tips: string;
	url: string;
	logo: string;
};
const config: Record<string, pageData> = {
	desktop: {
		title: '泊寓草桥桌游社',
		description: '每周组局！',
		tips: '长按或扫描二维码加群',
		url: 'https://weixin.qq.com/g/AQYAAMnzY1Uk2iD9maeFLp0dl8bpGOR0hN33DcSbsGCNfqF8sh1Sp3QiFQuxZu9t',
		logo: LogoDesktop
	}
};

export default config;
