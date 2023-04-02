const parser = new HyperDown();
const player = window.XcConfig.playerAPI;

export default function createPreviewHtml(str) {
	if (!window.XcConfig.canPreview) return $('.cm-preview-content').html('1. 预览已默认关闭<br>2. 点击上方预览按钮启用预览<br>3. 若编辑器卡顿可尝试关闭预览');

	if (str.indexOf('　') !== -1) {
		str = str.replace(/　/g, '&emsp;');
	}

	/* 生成html */
	str = parser.makeHtml(str);

	str = str.replace(/\:\:\(\s*(呵呵|哈哈|吐舌|太开心|笑眼|花心|小乖|乖|捂嘴笑|滑稽|你懂的|不高兴|怒|汗|黑线|泪|真棒|喷|惊哭|阴险|鄙视|酷|啊|狂汗|what|疑问|酸爽|呀咩爹|委屈|惊讶|睡觉|笑尿|挖鼻|吐|犀利|小红脸|懒得理|勉强|爱心|心碎|玫瑰|礼物|彩虹|太阳|星星月亮|钱币|茶杯|蛋糕|大拇指|胜利|haha|OK|沙发|手纸|香蕉|便便|药丸|红领巾|蜡烛|音乐|灯泡|开心|钱|咦|呼|冷|生气|弱|吐血|狗头)\s*\)/g, function ($0, $1) {
		$1 = encodeURI($1).replace(/%/g, '');
		return `<img class="owo" src="${window.XcConfig.themeURL}assets/owo/paopao/${$1}_2x.png" />`;
	});

	str = str.replace(/\:\@\(\s*(高兴|小怒|脸红|内伤|装大款|赞一个|害羞|汗|吐血倒地|深思|不高兴|无语|亲亲|口水|尴尬|中指|想一想|哭泣|便便|献花|皱眉|傻笑|狂汗|吐|喷水|看不见|鼓掌|阴暗|长草|献黄瓜|邪恶|期待|得意|吐舌|喷血|无所谓|观察|暗地观察|肿包|中枪|大囧|呲牙|抠鼻|不说话|咽气|欢呼|锁眉|蜡烛|坐等|击掌|惊喜|喜极而泣|抽烟|不出所料|愤怒|无奈|黑线|投降|看热闹|扇耳光|小眼睛|中刀)\s*\)/g, function ($0, $1) {
		$1 = encodeURI($1).replace(/%/g, '');
		return `<img class="owo" src="${window.XcConfig.themeURL}assets/owo/aru/${$1}_2x.png" />`;
	});

	if (str.indexOf('{lamp') !== -1) {
		str = str.replace(/{lamp\/}/g, '<span class="Xc_lamp"></span>');
	}
	if (str.indexOf('{x}') !== -1) {
		str = str.replace(/{x}/g, '<input type="checkbox" class="Xc_checkbox" checked disabled></input>');
	}
	if (str.indexOf('{ }') !== -1) {
		str = str.replace(/{ }/g, '<input type="checkbox" class="Xc_checkbox" disabled></input>');
	}
	if (str.indexOf('{mtitle') !== -1) {
		str = str.replace(/{mtitle([^}]*)\/}/g, '<Xc-mtitle $1></Xc-mtitle>');
	}
	if (str.indexOf('{dplayer') !== -1) {
		str = str.replace(/{dplayer([^}]*)\/}/g, '<Xc-dplayer player="' + player + '" $1></Xc-dplayer>');
	}
	if (str.indexOf('{bilibili') !== -1) {
		str = str.replace(/{bilibili([^}]*)\/}/g, '<Xc-bilibili $1></Xc-bilibili>');
	}
	if (str.indexOf('{music-list') !== -1) {
		str = str.replace(/{music-list([^}]*)\/}/g, '<Xc-mlist $1></Xc-mlist>');
	}
	if (str.indexOf('{music') !== -1) {
		str = str.replace(/{music([^}]*)\/}/g, '<Xc-music $1></Xc-music>');
	}
	if (str.indexOf('{mp3') !== -1) {
		str = str.replace(/{mp3([^}]*)\/}/g, '<Xc-mp3 $1></Xc-mp3>');
	}
	if (str.indexOf('{abtn') !== -1) {
		str = str.replace(/{abtn([^}]*)\/}/g, '<Xc-abtn $1></Xc-abtn>');
	}
	if (str.indexOf('{anote') !== -1) {
		str = str.replace(/{anote([^}]*)\/}/g, '<Xc-anote $1></Xc-anote>');
	}
	if (str.indexOf('{copy') !== -1) {
		str = str.replace(/{copy([^}]*)\/}/g, '<Xc-copy $1></Xc-copy>');
	}
	if (str.indexOf('{dotted') !== -1) {
		str = str.replace(/{dotted([^}]*)\/}/g, '<Xc-dotted $1></Xc-dotted>');
	}
	if (str.indexOf('{message') !== -1) {
		str = str.replace(/{message([^}]*)\/}/g, '<Xc-message $1></Xc-message>');
	}
	if (str.indexOf('{progress') !== -1) {
		str = str.replace(/{progress([^}]*)\/}/g, '<Xc-progress $1></Xc-progress>');
	}
	if (str.indexOf('{cloud') !== -1) {
		str = str.replace(/{cloud([^}]*)\/}/g, '<Xc-cloud $1></Xc-cloud>');
	}
	if (str.indexOf('{hide') !== -1) {
		str = str.replace(/{hide[^}]*}([\s\S]*?){\/hide}/g, '<Xc-hide></Xc-hide>');
	}
	if (str.indexOf('{card-default') !== -1) {
		str = str.replace(/{card-default([^}]*)}([\s\S]*?){\/card-default}/g, '<section style="margin-bottom: 15px"><Xc-card-default $1><span class="_temp" style="display: none">$2</span></Xc-card-default></section>');
	}
	if (str.indexOf('{callout') !== -1) {
		str = str.replace(/{callout([^}]*)}([\s\S]*?){\/callout}/g, '<section style="margin-bottom: 15px"><Xc-callout $1><span class="_temp" style="display: none">$2</span></Xc-callout></section>');
	}
	if (str.indexOf('{card-describe') !== -1) {
		str = str.replace(/{card-describe([^}]*)}([\s\S]*?){\/card-describe}/g, '<section style="margin-bottom: 15px"><Xc-card-describe $1><span class="_temp" style="display: none">$2</span></Xc-card-describe></section>');
	}
	if (str.indexOf('{tabs') !== -1) {
		str = str.replace(/{tabs}([\s\S]*?){\/tabs}/g, '<section style="margin-bottom: 15px"><Xc-tabs><span class="_temp" style="display: none">$1</span></Xc-tabs></section>');
	}
	if (str.indexOf('{card-list') !== -1) {
		str = str.replace(/{card-list}([\s\S]*?){\/card-list}/g, '<section style="margin-bottom: 15px"><Xc-card-list><span class="_temp" style="display: none">$1</span></Xc-card-list></section>');
	}
	if (str.indexOf('{timeline') !== -1) {
		str = str.replace(/{timeline}([\s\S]*?){\/timeline}/g, '<section style="margin-bottom: 15px"><Xc-timeline><span class="_temp" style="display: none">$1</span></Xc-timeline></section>');
	}
	if (str.indexOf('{collapse') !== -1) {
		str = str.replace(/{collapse}([\s\S]*?){\/collapse}/g, '<section style="margin-bottom: 15px"><Xc-collapse><span class="_temp" style="display: none">$1</span></Xc-collapse></section>');
	}
	if (str.indexOf('{alert') !== -1) {
		str = str.replace(/{alert([^}]*)}([\s\S]*?){\/alert}/g, '<section style="margin-bottom: 15px"><Xc-alert $1><span class="_temp" style="display: none">$2</span></Xc-alert></section>');
	}
	if (str.indexOf('{gird') !== -1) {
		str = str.replace(/{gird([^}]*)}([\s\S]*?){\/gird}/g, '<section style="margin-bottom: 15px"><Xc-gird $1><span class="_temp" style="display: none">$2</span></Xc-gird></section>');
	}
	$('.cm-preview-content').html(str);
	$('.cm-preview-content p:empty').remove();
	Prism.highlightAll();
}
