const approve = {
	data:{
		data_area: {"id":"1","name":"中国","child":[{"id":"2","name":"北京市","child":[{"id":"36","name":"东城区"},{"id":"37","name":"西城区"},{"id":"40","name":"朝阳区"},{"id":"41","name":"石景山区"},{"id":"42","name":"海淀区"},{"id":"43","name":"门头沟区"},{"id":"44","name":"房山区"},{"id":"45","name":"通州区"},{"id":"46","name":"顺义区"},{"id":"47","name":"昌平区"},{"id":"48","name":"大兴区"},{"id":"49","name":"怀柔区"},{"id":"50","name":"平谷区"},{"id":"51","name":"密云县"},{"id":"52","name":"延庆县"},{"id":"3360","name":"丰台区"}]},{"id":"3","name":"上海市","child":[{"id":"53","name":"黄浦区"},{"id":"55","name":"徐汇区"},{"id":"56","name":"长宁区"},{"id":"57","name":"静安区"},{"id":"58","name":"普陀区"},{"id":"60","name":"虹口区"},{"id":"61","name":"杨浦区"},{"id":"62","name":"闵行区"},{"id":"63","name":"宝山区"},{"id":"64","name":"嘉定区"},{"id":"65","name":"浦东新区"},{"id":"66","name":"金山区"},{"id":"67","name":"松江区"},{"id":"68","name":"青浦区"},{"id":"70","name":"奉贤区"},{"id":"71","name":"崇明县"}]},{"id":"4","name":"天津市","child":[{"id":"72","name":"和平区"},{"id":"73","name":"河东区"},{"id":"74","name":"河西区"},{"id":"75","name":"南开区"},{"id":"76","name":"河北区"},{"id":"77","name":"红桥区"},{"id":"81","name":"东丽区"},{"id":"82","name":"西青区"},{"id":"83","name":"津南区"},{"id":"84","name":"北辰区"},{"id":"85","name":"武清区"},{"id":"86","name":"宝坻区"},{"id":"87","name":"宁河区"},{"id":"88","name":"静海区"},{"id":"89","name":"蓟县"},{"id":"3361","name":"滨海新区"}]},{"id":"5","name":"重庆市","child":[{"id":"90","name":"万州区"},{"id":"91","name":"涪陵区"},{"id":"92","name":"渝中区"},{"id":"93","name":"大渡口区"},{"id":"94","name":"江北区"},{"id":"95","name":"沙坪坝区"},{"id":"96","name":"九龙坡区"},{"id":"97","name":"南岸区"},{"id":"98","name":"北碚区"},{"id":"101","name":"渝北区"},{"id":"102","name":"巴南区"},{"id":"103","name":"黔江区"},{"id":"104","name":"长寿区"},{"id":"105","name":"綦江区"},{"id":"106","name":"潼南区"},{"id":"107","name":"铜梁区"},{"id":"108","name":"大足区"},{"id":"109","name":"荣昌区"},{"id":"110","name":"璧山区"},{"id":"111","name":"梁平县"},{"id":"112","name":"城口县"},{"id":"113","name":"丰都县"},{"id":"114","name":"垫江县"},{"id":"115","name":"武隆县"},{"id":"116","name":"忠县"},{"id":"117","name":"开县"},{"id":"118","name":"云阳县"},{"id":"119","name":"奉节县"},{"id":"120","name":"巫山县"},{"id":"121","name":"巫溪县"},{"id":"122","name":"石柱县"},{"id":"123","name":"秀山县"},{"id":"124","name":"酉阳县"},{"id":"125","name":"彭水县"},{"id":"126","name":"江津区"},{"id":"127","name":"合川区"},{"id":"128","name":"永川区"},{"id":"129","name":"南川区"}]},{"id":"6","name":"河北省","child":[{"id":"130","name":"石家庄市"},{"id":"131","name":"唐山市"},{"id":"132","name":"秦皇岛市"},{"id":"133","name":"邯郸市"},{"id":"134","name":"邢台市"},{"id":"135","name":"保定市"},{"id":"136","name":"张家口市"},{"id":"137","name":"承德市"},{"id":"138","name":"沧州市"},{"id":"139","name":"廊坊市"},{"id":"140","name":"衡水市"}]},{"id":"7","name":"山西省","child":[{"id":"141","name":"太原市"},{"id":"142","name":"大同市"},{"id":"143","name":"阳泉市"},{"id":"144","name":"长治市"},{"id":"145","name":"晋城市"},{"id":"146","name":"朔州市"},{"id":"147","name":"晋中市"},{"id":"148","name":"运城市"},{"id":"149","name":"忻州市"},{"id":"150","name":"临汾市"},{"id":"151","name":"吕梁市"}]},{"id":"8","name":"内蒙古","child":[{"id":"152","name":"呼和浩特市"},{"id":"153","name":"包头市"},{"id":"154","name":"乌海市"},{"id":"155","name":"赤峰市"},{"id":"156","name":"通辽市"},{"id":"157","name":"鄂尔多斯市"},{"id":"158","name":"呼伦贝尔市"},{"id":"159","name":"巴彦淖尔市"},{"id":"160","name":"乌兰察布市"},{"id":"161","name":"兴安盟"},{"id":"162","name":"锡林郭勒盟"},{"id":"163","name":"阿拉善盟"}]},{"id":"9","name":"辽宁省","child":[{"id":"164","name":"沈阳市"},{"id":"165","name":"大连市"},{"id":"166","name":"鞍山市"},{"id":"167","name":"抚顺市"},{"id":"168","name":"本溪市"},{"id":"169","name":"丹东市"},{"id":"170","name":"锦州市"},{"id":"171","name":"营口市"},{"id":"172","name":"阜新市"},{"id":"173","name":"辽阳市"},{"id":"174","name":"盘锦市"},{"id":"175","name":"铁岭市"},{"id":"176","name":"朝阳市"},{"id":"177","name":"葫芦岛市"}]},{"id":"10","name":"吉林省","child":[{"id":"178","name":"长春市"},{"id":"179","name":"吉林市"},{"id":"180","name":"四平市"},{"id":"181","name":"辽源市"},{"id":"182","name":"通化市"},{"id":"183","name":"白山市"},{"id":"184","name":"松原市"},{"id":"185","name":"白城市"},{"id":"186","name":"延边"}]},{"id":"11","name":"黑龙江省","child":[{"id":"187","name":"哈尔滨市"},{"id":"188","name":"齐齐哈尔市"},{"id":"189","name":"鸡西市"},{"id":"190","name":"鹤岗市"},{"id":"191","name":"双鸭山市"},{"id":"192","name":"大庆市"},{"id":"193","name":"伊春市"},{"id":"194","name":"佳木斯市"},{"id":"195","name":"七台河市"},{"id":"196","name":"牡丹江市"},{"id":"197","name":"黑河市"},{"id":"198","name":"绥化市"},{"id":"199","name":"大兴安岭地区"}]},{"id":"12","name":"江苏省","child":[{"id":"200","name":"南京市"},{"id":"201","name":"无锡市"},{"id":"202","name":"徐州市"},{"id":"203","name":"常州市"},{"id":"204","name":"苏州市"},{"id":"205","name":"南通市"},{"id":"206","name":"连云港市"},{"id":"207","name":"淮安市"},{"id":"208","name":"盐城市"},{"id":"209","name":"扬州市"},{"id":"210","name":"镇江市"},{"id":"211","name":"泰州市"},{"id":"212","name":"宿迁市"}]},{"id":"13","name":"浙江省","child":[{"id":"213","name":"杭州市"},{"id":"214","name":"宁波市"},{"id":"215","name":"温州市"},{"id":"216","name":"嘉兴市"},{"id":"217","name":"湖州市"},{"id":"218","name":"绍兴市"},{"id":"219","name":"金华市"},{"id":"220","name":"衢州市"},{"id":"221","name":"舟山市"},{"id":"222","name":"台州市"},{"id":"223","name":"丽水市"}]},{"id":"14","name":"安徽省","child":[{"id":"224","name":"合肥市"},{"id":"225","name":"芜湖市"},{"id":"226","name":"蚌埠市"},{"id":"227","name":"淮南市"},{"id":"228","name":"马鞍山市"},{"id":"229","name":"淮北市"},{"id":"230","name":"铜陵市"},{"id":"231","name":"安庆市"},{"id":"232","name":"黄山市"},{"id":"233","name":"滁州市"},{"id":"234","name":"阜阳市"},{"id":"235","name":"宿州市"},{"id":"236","name":"巢湖市"},{"id":"237","name":"六安市"},{"id":"238","name":"亳州市"},{"id":"239","name":"池州市"},{"id":"240","name":"宣城市"}]},{"id":"15","name":"福建省","child":[{"id":"241","name":"福州市"},{"id":"242","name":"厦门市"},{"id":"243","name":"莆田市"},{"id":"244","name":"三明市"},{"id":"245","name":"泉州市"},{"id":"246","name":"漳州市"},{"id":"247","name":"南平市"},{"id":"248","name":"龙岩市"},{"id":"249","name":"宁德市"}]},{"id":"16","name":"江西省","child":[{"id":"250","name":"南昌市"},{"id":"251","name":"景德镇市"},{"id":"252","name":"萍乡市"},{"id":"253","name":"九江市"},{"id":"254","name":"新余市"},{"id":"255","name":"鹰潭市"},{"id":"256","name":"赣州市"},{"id":"257","name":"吉安市"},{"id":"258","name":"宜春市"},{"id":"259","name":"抚州市"},{"id":"260","name":"上饶市"}]},{"id":"17","name":"山东省","child":[{"id":"261","name":"济南市"},{"id":"262","name":"青岛市"},{"id":"263","name":"淄博市"},{"id":"264","name":"枣庄市"},{"id":"265","name":"东营市"},{"id":"266","name":"烟台市"},{"id":"267","name":"潍坊市"},{"id":"268","name":"济宁市"},{"id":"269","name":"泰安市"},{"id":"270","name":"威海市"},{"id":"271","name":"日照市"},{"id":"272","name":"莱芜市"},{"id":"273","name":"临沂市"},{"id":"274","name":"德州市"},{"id":"275","name":"聊城市"},{"id":"276","name":"滨州市"},{"id":"277","name":"菏泽市"}]},{"id":"18","name":"河南省","child":[{"id":"278","name":"郑州市"},{"id":"279","name":"开封市"},{"id":"280","name":"洛阳市"},{"id":"281","name":"平顶山市"},{"id":"282","name":"安阳市"},{"id":"283","name":"鹤壁市"},{"id":"284","name":"新乡市"},{"id":"285","name":"焦作市"},{"id":"286","name":"濮阳市"},{"id":"287","name":"许昌市"},{"id":"288","name":"漯河市"},{"id":"289","name":"三门峡市"},{"id":"290","name":"南阳市"},{"id":"291","name":"商丘市"},{"id":"292","name":"信阳市"},{"id":"293","name":"周口市"},{"id":"294","name":"驻马店市"}]},{"id":"19","name":"湖北省","child":[{"id":"295","name":"武汉市"},{"id":"296","name":"黄石市"},{"id":"297","name":"十堰市"},{"id":"298","name":"宜昌市"},{"id":"299","name":"襄樊市"},{"id":"300","name":"鄂州市"},{"id":"301","name":"荆门市"},{"id":"302","name":"孝感市"},{"id":"303","name":"荆州市"},{"id":"304","name":"黄冈市"},{"id":"305","name":"咸宁市"},{"id":"306","name":"随州市"},{"id":"307","name":"恩施土家族苗族自治州"},{"id":"308","name":"仙桃市"},{"id":"309","name":"潜江市"},{"id":"310","name":"天门市"},{"id":"311","name":"神农架林区"}]},{"id":"20","name":"湖南省","child":[{"id":"312","name":"长沙市"},{"id":"313","name":"株洲市"},{"id":"314","name":"湘潭市"},{"id":"315","name":"衡阳市"},{"id":"316","name":"邵阳市"},{"id":"317","name":"岳阳市"},{"id":"318","name":"常德市"},{"id":"319","name":"张家界市"},{"id":"320","name":"益阳市"},{"id":"321","name":"郴州市"},{"id":"322","name":"永州市"},{"id":"323","name":"怀化市"},{"id":"324","name":"娄底市"},{"id":"325","name":"湘西土家族苗族自治州"}]},{"id":"21","name":"广东省","child":[{"id":"326","name":"广州市"},{"id":"327","name":"韶关市"},{"id":"328","name":"深圳市"},{"id":"329","name":"珠海市"},{"id":"330","name":"汕头市"},{"id":"331","name":"佛山市"},{"id":"332","name":"江门市"},{"id":"333","name":"湛江市"},{"id":"334","name":"茂名市"},{"id":"335","name":"肇庆市"},{"id":"336","name":"惠州市"},{"id":"337","name":"梅州市"},{"id":"338","name":"汕尾市"},{"id":"339","name":"河源市"},{"id":"340","name":"阳江市"},{"id":"341","name":"清远市"},{"id":"342","name":"东莞市"},{"id":"343","name":"中山市"},{"id":"344","name":"潮州市"},{"id":"345","name":"揭阳市"},{"id":"346","name":"云浮市"}]},{"id":"22","name":"广西","child":[{"id":"347","name":"南宁市"},{"id":"348","name":"柳州市"},{"id":"349","name":"桂林市"},{"id":"350","name":"梧州市"},{"id":"351","name":"北海市"},{"id":"352","name":"防城港市"},{"id":"353","name":"钦州市"},{"id":"354","name":"贵港市"},{"id":"355","name":"玉林市"},{"id":"356","name":"百色市"},{"id":"357","name":"贺州市"},{"id":"358","name":"河池市"},{"id":"359","name":"来宾市"},{"id":"360","name":"崇左市"}]},{"id":"23","name":"海南省","child":[{"id":"361","name":"海口市"},{"id":"362","name":"三亚市"},{"id":"363","name":"五指山市"},{"id":"364","name":"琼海市"},{"id":"365","name":"儋州市"},{"id":"366","name":"文昌市"},{"id":"367","name":"万宁市"},{"id":"368","name":"东方市"},{"id":"369","name":"定安县"},{"id":"370","name":"屯昌县"},{"id":"371","name":"澄迈县"},{"id":"372","name":"临高县"},{"id":"373","name":"白沙黎族自治县"},{"id":"374","name":"昌江黎族自治县"},{"id":"375","name":"乐东黎族自治县"},{"id":"376","name":"陵水黎族自治县"},{"id":"377","name":"保亭黎族苗族自治县"},{"id":"378","name":"琼中黎族苗族自治县"},{"id":"379","name":"西沙群岛"},{"id":"380","name":"南沙群岛"},{"id":"381","name":"中沙群岛的岛礁及其海域"}]},{"id":"24","name":"四川省","child":[{"id":"382","name":"成都市"},{"id":"383","name":"自贡市"},{"id":"384","name":"攀枝花市"},{"id":"385","name":"泸州市"},{"id":"386","name":"德阳市"},{"id":"387","name":"绵阳市"},{"id":"388","name":"广元市"},{"id":"389","name":"遂宁市"},{"id":"390","name":"内江市"},{"id":"391","name":"乐山市"},{"id":"392","name":"南充市"},{"id":"393","name":"眉山市"},{"id":"394","name":"宜宾市"},{"id":"395","name":"广安市"},{"id":"396","name":"达州市"},{"id":"397","name":"雅安市"},{"id":"398","name":"巴中市"},{"id":"399","name":"资阳市"},{"id":"400","name":"阿坝州"},{"id":"401","name":"甘孜州"},{"id":"402","name":"凉山州"}]},{"id":"25","name":"贵州省","child":[{"id":"403","name":"贵阳市"},{"id":"404","name":"六盘水市"},{"id":"405","name":"遵义市"},{"id":"406","name":"安顺市"},{"id":"407","name":"铜仁地区"},{"id":"408","name":"黔西南州"},{"id":"409","name":"毕节地区"},{"id":"410","name":"黔东南州"},{"id":"411","name":"黔南州"}]},{"id":"26","name":"云南省","child":[{"id":"412","name":"昆明市"},{"id":"413","name":"曲靖市"},{"id":"414","name":"玉溪市"},{"id":"415","name":"保山市"},{"id":"416","name":"昭通市"},{"id":"417","name":"丽江市"},{"id":"418","name":"思茅市"},{"id":"419","name":"临沧市"},{"id":"420","name":"楚雄州"},{"id":"421","name":"红河州"},{"id":"422","name":"文山州"},{"id":"423","name":"西双版纳"},{"id":"424","name":"大理"},{"id":"425","name":"德宏"},{"id":"426","name":"怒江"},{"id":"427","name":"迪庆"}]},{"id":"27","name":"西藏","child":[{"id":"428","name":"拉萨市"},{"id":"429","name":"昌都"},{"id":"430","name":"山南"},{"id":"431","name":"日喀则"},{"id":"432","name":"那曲"},{"id":"433","name":"阿里"},{"id":"434","name":"林芝"}]},{"id":"28","name":"陕西省","child":[{"id":"435","name":"西安市"},{"id":"436","name":"铜川市"},{"id":"437","name":"宝鸡市"},{"id":"438","name":"咸阳市"},{"id":"439","name":"渭南市"},{"id":"440","name":"延安市"},{"id":"441","name":"汉中市"},{"id":"442","name":"榆林市"},{"id":"443","name":"安康市"},{"id":"444","name":"商洛市"}]},{"id":"29","name":"甘肃省","child":[{"id":"445","name":"兰州市"},{"id":"446","name":"嘉峪关市"},{"id":"447","name":"金昌市"},{"id":"448","name":"白银市"},{"id":"449","name":"天水市"},{"id":"450","name":"武威市"},{"id":"451","name":"张掖市"},{"id":"452","name":"平凉市"},{"id":"453","name":"酒泉市"},{"id":"454","name":"庆阳市"},{"id":"455","name":"定西市"},{"id":"456","name":"陇南市"},{"id":"457","name":"临夏州"},{"id":"458","name":"甘州"}]},{"id":"30","name":"青海省","child":[{"id":"459","name":"西宁市"},{"id":"460","name":"海东地区"},{"id":"461","name":"海州"},{"id":"462","name":"黄南州"},{"id":"463","name":"海南州"},{"id":"464","name":"果洛州"},{"id":"465","name":"玉树州"},{"id":"466","name":"海西州"}]},{"id":"31","name":"宁夏","child":[{"id":"467","name":"银川市"},{"id":"468","name":"石嘴山市"},{"id":"469","name":"吴忠市"},{"id":"470","name":"固原市"},{"id":"471","name":"中卫市"}]},{"id":"32","name":"新疆","child":[{"id":"472","name":"乌鲁木齐市"},{"id":"473","name":"克拉玛依市"},{"id":"474","name":"吐鲁番地区"},{"id":"475","name":"哈密地区"},{"id":"476","name":"昌吉州"},{"id":"477","name":"博尔州"},{"id":"478","name":"巴音郭楞州"},{"id":"479","name":"阿克苏地区"},{"id":"480","name":"克孜勒苏柯尔克孜自治州"},{"id":"481","name":"喀什地区"},{"id":"482","name":"和田地区"},{"id":"483","name":"伊犁州"},{"id":"484","name":"塔城地区"},{"id":"485","name":"阿勒泰地区"},{"id":"486","name":"石河子市"},{"id":"487","name":"阿拉尔市"},{"id":"488","name":"图木舒克市"},{"id":"489","name":"五家渠市"}]},{"id":"33","name":"台湾省","child":[{"id":"490","name":"台北市"},{"id":"491","name":"高雄市"},{"id":"492","name":"基隆市"},{"id":"493","name":"新竹市"},{"id":"494","name":"台中市"},{"id":"495","name":"嘉义市"},{"id":"496","name":"台南市"},{"id":"497","name":"台北县"},{"id":"498","name":"桃园县"},{"id":"499","name":"新竹县"},{"id":"500","name":"苗栗县"},{"id":"501","name":"台中县"},{"id":"502","name":"彰化县"},{"id":"503","name":"南投县"},{"id":"504","name":"云林县"},{"id":"505","name":"嘉义县"},{"id":"506","name":"台南县"},{"id":"507","name":"高雄县"},{"id":"508","name":"屏东县"},{"id":"509","name":"宜兰县"},{"id":"510","name":"花莲县"},{"id":"511","name":"台东县"},{"id":"512","name":"澎湖县"},{"id":"513","name":"金门县"},{"id":"514","name":"连江县"}]},{"id":"34","name":"香港","child":[{"id":"515","name":"中西区"},{"id":"516","name":"东区"},{"id":"517","name":"南区"},{"id":"518","name":"湾仔区"},{"id":"519","name":"九龙城区"},{"id":"520","name":"观塘区"},{"id":"521","name":"深水埗区"},{"id":"522","name":"黄大仙区"},{"id":"523","name":"油尖旺区"},{"id":"524","name":"离岛区"},{"id":"525","name":"葵青区"},{"id":"526","name":"北区"},{"id":"527","name":"西贡区"},{"id":"528","name":"沙田区"},{"id":"529","name":"大埔区"},{"id":"530","name":"荃湾区"},{"id":"531","name":"屯门区"},{"id":"532","name":"元朗区"}]},{"id":"35","name":"澳门","child":[{"id":"533","name":"花地玛堂区"},{"id":"534","name":"市圣安多尼堂区"},{"id":"535","name":"大堂区"},{"id":"536","name":"望德堂区"},{"id":"537","name":"风顺堂区"},{"id":"538","name":"嘉模堂区"},{"id":"539","name":"圣方济各堂区"}]},{"id":"3358","name":"钓鱼岛","child":[{"id":"3359","name":"钓鱼岛"}]}]},
		sex: ['男', '女'],
		// 学生所在年级
		educationBackground: ['高中及以下', '专科', '大学本科', '研究生及以上'],
		// 你所从事的工作
		work: ['技术', '产品', '设计', '测试', '运营', '其他'],
		// 工作时间
		work_time: ['1年以下', '1-2年', '3-5年', '6-10年', '10年以上'],
		// 名字
		name:'午夜墨蓝',
		// 性别
		gender:'男',
		// 省
		province:'北京市',
		// 市
		city:'东城区',
		// 状态
		state:'',
		// 年级
		grade:'',
		// 年份
		annual:'',
		// 职业
		profession:'',
		// 时间
		tiem:'',
		// 职业方向
		direction:[],
		// 方向水平
		directionLevel:[],
		// 方向水平线
		directionLevelLine:[],

		// // 前端
		//  leadingEnd:[],
		// // IOS
		// ios:[],
		// // PHP
		// php:[],
		// 手机号码
		cellphone:'',
		// 手机号码是否验证过的锁头
		cellphoneLock:false,
		// 验证码值
		verification:'',
		// 动态码
		dynamic:'',
		// 当前显示的页面
		container:'',
		// 
	},
	init:function(){
		// 点击按钮进行认证并插入认证过程DOM结构
		$('.link-bottom').on('click',this.add);
		// 点击X按钮删除全部认证过程DOM结构
		$('body').on('click','.delete',this.remove);
		// 点击选择性别按钮插入DON结构
		$('body').on('click','.gender-buttom',this.gender)
		// 离开选择性别的列表点击取消dom结构
		$('body').on('mouseleave','.gender-list',this.leaveOmit)
		// 点击选择性别的列表获取文字赋予input
		$('body').on('click','.gender-desc',this.genderValuation)
		// 点击选择省按钮时插入DOM结构
		$('body').on('click','.province-buttom',this.province)
		// 离开选择省的列表点击取消dom结构
		$('body').on('mouseleave','.province-list',this.leaveOmit)
		// 点击选择省的列表获取文字赋予input
		$('body').on('click','.province-desc',this.provinceValuation)
		// 点击选择市按钮时插入DOM结构
		$('body').on('click','.city-buttom',this.city)
		// 离开选择市的列表点击取消dom结构
		$('body').on('mouseleave','.city-list',this.leaveOmit)
		// 点击选择市的列表获取文字赋予input
		$('body').on('click','.city-desc',this.cityValuation)
		// 点击当前状态时储存值并且高亮并显示当前选择的附加dom 然后初始化所有的选择值已经input值
		$('body').on('click','.state-title',this.affixion)
		// 选择年级按钮时插入DOM结构
		$('body').on('click','.grade-buttom',this.grade)
		// 离开选择年级的列表点击取消dom结构
		$('body').on('mouseleave','.grade-list',this.leaveOmit)
		// 点击选择市的列表获取文字赋予input
		$('body').on('click','.grade-desc',this.gradeValuation)
		// 点击选择年份按钮时插入DOM结构
		$('body').on('click','.enrolTime-buttom',this.enrolTime)
		// 离开选择年份的列表点击取消dom结构
		$('body').on('mouseleave','.enrolTime-list',this.leaveOmit)
		// 点击选择年份的列表获取文字赋予input
		$('body').on('click','.enrolTime-desc',this.enrolTimeValuation)
		// 点击选择职业按钮时插入DOM结构
		$('body').on('click','.profession-buttom',this.profession)
		// 点击选择职业的列表获取文字赋予input
		$('body').on('click','.profession-desc',this.professionValuation)
		// 离开选择职业的列表点击取消dom结构
		$('body').on('mouseleave','.profession-list',this.leaveOmit)
		// 点击选择工作年份按钮时插入DOM结构
		$('body').on('click','.duration-buttom',this.duration)
		// 离开选择工作年份的列表点击取消dom结构
		$('body').on('mouseleave','.duration-list',this.leaveOmit)
		// 点击选择工作年份的列表获取文字赋予input
		$('body').on('click','.duration-desc',this.durationValuation)
		// 判断第一个步骤的过程是否符合下一步的节奏，是则高亮并添加class提供点击事件
		$('body').on('click','.approve-container',this.approveOne)
		// 第一步骤的下一步高亮时根据高亮的class值进行事件，隐藏父级元素显示父级元素的兄弟元素\

		$('body').on('click','.nextStep-active',this.nextStep)
		// 点击第二个步骤的选项的时候高亮并且储存起来，一旦超过三个则删除第一个，如果点击元素已经被选中则取消并删除其储存在数组中的值
		$('body').on('click','.direction-item',this.astrictThree)
		// 点击第二个步骤的选项时顺便判断是否已选中有一个或一个以上，如果是则可以赋予下一步按钮高亮的class
		$('body').on('click','.become-container',this.becomeConformTo)
		// 点击第二个步骤的上一步回到第一个步骤，即为显示

		$('body').on('click','.become-affirm-left',this.backtrack)
		// 点击第二个步骤的已经高亮的下一步按钮时，隐藏第二个步骤，显示第三个步骤

		$('body').on('click','.become-affirm-right-active',this.becomeNextStep)
		// 点击第三个步骤的的选择按钮时连同之前的按钮一起高亮。
		$('body').on('click','.degree-item',this.degreeItem)
		 // 点击第三个步骤的上一步回到第二个步骤，即为显示

		$('body').on('click','.level-affirm-left',this.backtrack)
		// 点击第三个步骤的任意一处判断是否符合条件，是则下一步高亮，不是则取消
		$('body').on('click','.level-container',this.levelConformTo)
		// 点击第三个步骤已经高亮的申请认证按钮时，隐藏当前页面，显示下一个页面

		$('body').on('click','.level-affirm-right-active',this.levelNextStep)
		// 对绑定手机的手机输入框按下键盘时判断输入的值是否是数字，是则继续不是则终止。
		$('body').on('keypress','.cellphone',this.keydownCellphone)
		// 对绑定手机的手机输入框按下按钮松开后如果已经达到要求则动态码获取按钮高亮并且储存值，且判断是否三个款都有值是则绑定手机按钮高亮
		$('body').on('keyup','.cellphone',this.keyupCellphone)
		// 对绑定手机的验证码输入框点击键盘按下按钮松开后时进行存值，且判断是否三个款都有值是则绑定手机按钮高亮
		$('body').on('keyup','.verify',this.keypressVerify)
		// 对绑定手机的动态码输入框点击键盘按下按钮松开后时进行存值，且判断是否三个款都有值是则绑定手机按钮高亮
		$('body').on('keyup','.dynamic',this.dynamicVerify)
		// 绑定手机的绑定手机按钮高亮时根据高亮的class值进行事件，隐藏父级元素显示父级元素的兄弟元素
		$('body').on('click','.pinless-cellphone-active',this.nextStep)
		// 点击马上去学习按钮删除全部认证过程DOM结构
		$('body').on('click','.card-link',this.remove);

	},
	// 点击按钮进行认证并插入认证过程DOM结构
	add:function(){
		let tmp = `	
		<div class="all-section"><div class="approve-section">
						<div class="approve-container">
							<a class="delete" href="javascript:;">
								<img class="delete-img" src="image/app5.png">	
							</a>
							<div class="approve-header-left">
								<p class="header-title">成为认证学员</p>
								<img class="header-img" src="image/app1.png">
								<p class="approve-header-right">第1步/<span>共3步</span></p>
							</div> 
							<p class="approve-desc">成为极客学院认证学员，点亮专属身份标识，免费观看 全站 80% 以上会员课程。</p>
							<div class="approve-verify">
								<div class="verify-left">
									<img class="verify-imger" src="image/app4.png">
									<p class="verify-name">${approve.data.name}</p>
								</div>	
								<div class="verify-right">
									<div class="select-top">
										<div class="select-gender">
											<p class="gender-title">性别：</p>
											<div class="select-section" style="position: relative;">
												<div gender-container>
													<input class="gender-input" type="text" readonly value="${approve.data.gender}" placeholder="${approve.data.gender}">
													<a class="gender-buttom" href="javascript:;"><span></span></a>
												</div>
											</div>
										</div>	
										<div class="select-presentAddress">
											<p class="presentAddress-title">现居住地：</p>
											<div class="province-container">
												<div class="economize-container">
													<input class="province-input" type="text" readonly value="${approve.data.province}" placeholder="${approve.data.province}">
													<a class="province-buttom" href="javascript:;"><span></span></a>
												</div>
												
											</div>
											<div class="city-container">
												<div class="town-container">
													<input class="city-input" type="text" readonly value="${approve.data.city}" placeholder="${approve.data.city}">
													<a class="city-buttom" href="javascript:;"><span></span></a>
												</div>
												
											</div>
										</div>	
									</div>	
									<div class="details-bottom">
										<p class="details-title">
											您的当前状态:
										</p>
										<div class="details-state">
											<div class="state-section">
												<a class="state-title student" corresponding="state-student" href="javascript:;">学生</a>
												<div class="state-student">
													<div class="grade-container">
													<div class="class-container">
															<input class="grade-input" type="text" readonly value="${approve.data.grade}" placeholder="${approve.data.grade}">
															<a class="grade-buttom" href="javascript:;"><span></span></a>
													</div>	
													</div>
													<div class="enrolTime-container">
													<div class="age-container">
														<input class="enrolTime-input" type="text" readonly value="${approve.data.annual}" placeholder="${approve.data.annual}">
														<a class="enrolTime-buttom" href="javascript:;"><span></span></a>	
													</div>
													</div>
												</div>
											</div>
											<div class="state-section">
												<a class="state-title profession" corresponding="state-profession" href="javascript:;">在职</a>
												<div class="state-profession">
													<div class="profession-container">
														<div class="occupation-container">
															<input class="profession-input" type="text" readonly value="${approve.data.profession}" placeholder="${approve.data.profession}">
															<a class="profession-buttom" href="javascript:;"><span></span></a>
														</div>
													</div>
													<div class="duration-container">
														<div class="year-container">
															<input class="duration-input" type="text" readonly value="${approve.data.tiem}" placeholder="${approve.data.tiem}">
															<a class="duration-buttom" href="javascript:;"><span></span></a>
														</div>
													</div>
												</div>
											</div>
											<div class="state-section">
												<a class="state-title no" href="javascript:;">待业</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<a class="nextStep" href="javascript:;">下一步</a>	
						</div>
						<div class="become-container">
							<a class="delete" href="javascript:;">
								<img class="delete-img" src="image/app5.png">	
							</a>
							<div class="become-header-left">
								<p class="header-title">成为认证学员</p>
								<img class="header-img" src="image/app1.png">
								<p class="become-header-right">第2步/<span>共3步</span></p>
							</div> 
							
							<p class="become-desc">成为极客学院认证学员，点亮专属身份标识，免费观看 全站 80% 以上会员课程。</p>
							<p class="become-direction">选择你感兴趣的职业方向（最多可选择 3 项）<span>系统将根据您的选择为您推荐合适的课程</span></p>
							<div class="direction-list">
								<div class="direction-item">
									<p class="item-title">Web 前端工程师</p>
									<img class="item-img" src="image/app2.png">
								</div>
								<div class="direction-item">
									<p class="item-title">Android 开发工程师</p>
									<img class="item-img" src="image/app2.png">
								</div>
								<div class="direction-item">
									<p class="item-title">iOS 开发工程师</p>
									<img class="item-img" src="image/app2.png">
								</div>
								<div class="direction-item">
									<p class="item-title">GO 语言工程师</p>
									<img class="item-img" src="image/app2.png">
								</div>
							</div>
							<div class="direction-list">
								<div class="direction-item">
									<p class="item-title">Python Web工程师</p>
									<img class="item-img" src="image/app2.png">
								</div>
								<div class="direction-item">
									<p class="item-title">PHP 工程师</p>
									<img class="item-img" src="image/app2.png">
								</div>
								<div class="direction-item">
									<p class="item-title">Java Web 工程师</p>
									<img class="item-img" src="image/app2.png">
								</div>
							</div>
							<div class="affirm-bottom">
								<a class="become-affirm-left" href="javascript:;">上一步</a>
								<a class="become-affirm-right" href="javascript:;">下一步</a>
							</div>
						</div>
						<div class="level-container">
							<a class="delete" href="javascript:;">
								<img class="delete-img" src="image/app5.png">	
							</a>
							<div class="level-header-left">
								<p class="header-title">成为认证学员</p>
								<img class="header-img" src="image/app1.png">
								<p class="level-header-right">第3步/<span>共3步</span></p>
							</div> 
							
							<p class="level-desc">成为极客学院认证学员，点亮专属身份标识，免费观看 全站 80% 以上会员课程。</p>
							<p class="level-title">
								您在这些方向上当前的水平如何？<span>系统将根据您的选择为您推荐合适的课程</span>
							</p>
							<div class="level-list">
								<div class="level-item">
									<p class="item-title">Web 前端工程师</p>
									<div class="degree-list">
										<div class="degree-container">
											<div class="degree-item">
												<p class="degree-title">完全不了解</p>
											</div>
											<div class="degree-item">
												<p class="degree-title">有点了解</p>
											</div>
											<div class="degree-item">
												<p class="degree-title">熟悉</p>
											</div>
											<div class="degree-item">
												<p class="degree-title">精通</p>
											</div>
										</div>
										<div class="degree-line-item">
											<div class="item-line"></div>
											<div class="item-line"></div>
											<div class="item-line"></div>
											<div class="item-line"></div>
										</div>
									</div>
								</div>
								<div class="level-item">
									<p class="item-title">iOS 前端工程师</p>
									<div class="degree-list">
										<div class="degree-container">
											<div class="degree-item">
												<p class="degree-title">完全不了解</p>
											</div>
											<div class="degree-item">
												<p class="degree-title">有点了解</p>
											</div>
											<div class="degree-item">
												<p class="degree-title">熟悉</p>
											</div>
											<div class="degree-item">
												<p class="degree-title">精通</p>
											</div>
										</div>
										<div class="degree-line-item">
											<div class="item-line"></div>
											<div class="item-line"></div>
											<div class="item-line"></div>
											<div class="item-line"></div>
										</div>
									</div>
								</div>
								<div class="level-item">
									<p class="item-title">PHP 前端工程师</p>
									<div class="degree-list">
										<div class="degree-container">
											<div class="degree-item">
												<p class="degree-title">完全不了解</p>
											</div>
											<div class="degree-item">
												<p class="degree-title">有点了解</p>
											</div>
											<div class="degree-item">
												<p class="degree-title">熟悉</p>
											</div>
											<div class="degree-item">
												<p class="degree-title">精通</p>
											</div>
										</div>
										<div class="degree-line-item">
											<div class="item-line"></div>
											<div class="item-line"></div>
											<div class="item-line"></div>
											<div class="item-line"></div>
										</div>
									</div>
								</div>
							</div>
							<div class="affirm-bottom">
								<a class="level-affirm-left" href="javascript:;">上一步</a>
								<a class="level-affirm-right" href="javascript:;">申请认证</a>
							</div>
						</div>
						<div class="pinless-container">
							<a class="delete" href="javascript:;">
								<img class="delete-img" src="image/app5.png">	
							</a>
							<div class="pinless-title">
								<img class="pinless-title-img" src="image/app3.png">
								<p class="pinless-title-desc">绑定手机 完成认证</p>
							</div>
							<p class="pinless-desc">
								请您绑定手机防止账号丢失和被盗，手机号可用于登录和找回密码。
							</p>
							<div class="input-list">
								<div class="input-item">
									<input class="cellphone" type="text" placeholder="请输入手机号码">
								</div>
								<div class="input-item">
									<input class="verify" type="text" placeholder="验证码">
									<img class="verify-img" src="https://huodong.jikexueyuan.com/jike1024/verifyCode">
								</div>
								<div class="input-item">
									<input class="dynamic" type="text" placeholder="动态码">
									<a class="dynamic-buttom" href="javascript:;">获取动态码</a>
								</div>	
							</div>
							<a class="pinless-cellphone" href="javascript:;">绑定手机</a>
						</div>
						<div class="win-container">
							<a class="delete" href="javascript:;">
								<img class="delete-img" src="image/app5.png">	
							</a>
							<div class="win-card">
								<img class="win-image" src="image/app4.png">
								<p class="card-name">午夜墨蓝</p>
								<p class="card-title">恭喜，完成认证</p>
								<p class="card-desc">现在你可以免费观看 80% 以上会员课程</p>
								<a class="card-link" href="javascript:;">	马上去学习>></a>	
							</div>
						</div>
					</div>	
					</div>`;
		$('.link-section').append(tmp);
		$('.approve-section').css('display','inline-block');
		if (approve.data.container != '') {
			$('.approve-container').css('display','none');
			$('.become-container').css('display','none');
			$('.level-container').css('display','none');
			$('.pinless-container').css('display','none');
			$('.win-container').css('display','none');
			let sedction = $('.approve-section').children();
			console.log(sedction);
			let index = approve.data.container;
			$(sedction[index]).css('display','inline-block');
		}
	},
	// 点击X按钮删除全部认证过程DOM结构
	remove:function(){
		$('.all-section').remove();
	},
	// 点击选择性别按钮插入DON结构
	gender:function(){
		let sex = approve.data.sex;
		let html = ''
		for (var i = sex.length - 1; i >= 0; i--) {
			let tmp = `<li class="gender-desc">${sex[i]}</li>`
			html += tmp;
		}
		let dom = ` <ul class="gender-list" s>
									${html}
								</ul>`
		let parentLevel = this.parentNode;
		let nex = $(parentLevel).next();
		if (nex.length == 0) {
			$(parentLevel).after(dom);
		} else {
			$('.gender-list').remove();
		}
		// 点击的元素的下一个节点
		// let borderUpon = this.next();
		// 点击的元素的父级节点
		// let parentLevel = this.parentNode;
		// // 点击的元素的父级节点的最后一个子节点
		// let finallyOne = parentLevel.lastChild;
		// if (finallyOne == this) {
		// 	$(parentLevel).approve(dom);
		// } else {
		// 	$(parentLevel).insertBefore(borderUpon,dom);

		// }
		// $(parentLevel).insertBefore(dom,borderUpon);
		// $(parentLevel).append(dom);
	},
	leaveOmit:function(){
		$(this).remove();
	},
	genderValuation:function(){
		let txt = $(this).text()
		approve.data.gender = txt;
		$('.gender-input').val(txt);
	},
	province:function(){
		let provincialCapital = approve.data.data_area.child;
		let html = '';
		for (var i = provincialCapital.length - 1; i >= 0; i--) {
			let tmp = `	
										<li class="province-desc" value ="${provincialCapital[i].name}">${provincialCapital[i].name}</li>
									`
			html += tmp;
		}
		let dom = `<ul class="province-list">
								${html}
							</ul>`
		let parentLevel = this.parentNode;
		let nex = $(parentLevel).next();
		if (nex.length == 0) {
			$(parentLevel).after(dom);
		} else {
			$('.province-list').remove();
		}
	},
	provinceValuation:function(){
		let txt = $(this).text()
		approve.data.province = txt;
		$('.province-input').val(txt);
		let province = approve.data.province
		let cityGather = approve.data.data_area.child;
		let city = '';
		for (var i = cityGather.length - 1; i >= 0; i--) {
			if (cityGather[i].name == province) {
				city = cityGather[i].child;
			}
		}
		approve.data.city = city[0].name;
		$('.city-input').val(city[0].name)
	},
	city:function(){
		let province = approve.data.province
		if (province == false) {
				return
			}
		let cityGather = approve.data.data_area.child;
		let city = '';
		for (var i = cityGather.length - 1; i >= 0; i--) {
			if (cityGather[i].name == province) {
				city = cityGather[i].child;
			}
		}
		let html = '';
		for (var i = city.length - 1; i >= 0; i--) {
			let tmp = `<li class="city-desc" value ="${city[i].name}">${city[i].name}</li>`
			html += tmp;
		}
		let dom = `<ul class="city-list">
										${html}
								</ul>`
		let parentLevel = this.parentNode;
		let nex = $(parentLevel).next();
		if (nex.length == 0) {
			$(parentLevel).after(dom);
		} else {
			$('.city-list').remove();
		}
	},
	cityValuation:function(){
		let txt = $(this).text()
		approve.data.city = txt;
		$('.city-input').val(txt);
	},
	affixion:function(){
		approve.data.state = $(this);
		console.log(approve.data.state);
		approve.data.grade = '';
		// 年份
		approve.data.annual = '';
		// 职业
		approve.data.profession = '';
		// 时间
		approve.data.tiem = '';

		$('.grade-input').val('您所在的年级')
		$('.enrolTime-input').val('入学年份')
		$('.profession-input').val('您所从事的职业')
		$('.duration-input').val('请选择您的工作时间')
		$('.state-title').removeClass('details-state-active');
		$(this).addClass('details-state-active');
		$('.state-title').next().css('display','none');
		$(this).next().css('display','inline-block');
		
	},
	grade:function(){
		let educationBackground = approve.data.educationBackground;
		let html = '';
		for (var i = educationBackground.length - 1; i >= 0; i--) {
			let tmp = `<li class="grade-desc">${educationBackground[i]}</li>`
			html += tmp 
		}
		let dom = `<ul class="grade-list">
							  	${html}
							</ul>`
		let parentLevel = this.parentNode;
		let nex = $(parentLevel).next();
		if (nex.length == 0) {
			$(parentLevel).after(dom);
		} else {
			$('.grade-list').remove();
		}
	},
	gradeValuation:function(){
		let txt = $(this).text()
		approve.data.grade = txt;
		$('.grade-input').val(txt);
	},
	enrolTime:function(){
		let grade = approve.data.grade;
		if (grade == false) {
			return
		}
		let time = [];
		for (var i = 1976; i <= 2016; i++) {
			time.push(i) 
		}
		let html = '';
		for (var i = time.length - 1; i >= 0; i--) {
			let tmp = `<li class="enrolTime-desc">${time[i]}</li>`
			html += tmp;
		}
		
		let dom = `<ul class="enrolTime-list">
							  							${html}
														</ul>`
		let parentLevel = this.parentNode;
		let nex = $(parentLevel).next();
		if (nex.length == 0) {
			$(parentLevel).after(dom);
		} else {
			$('.enrolTime-list').remove();
		}

	},
	enrolTimeValuation:function(){
		let txt = $(this).text()
		approve.data.annual = txt;
		$('.enrolTime-input').val(txt);
	},
	profession:function(){
		let work = approve.data.work;
		let html = '';
		for (var i = work.length - 1; i >= 0; i--) {
			let tmp = `<li class="profession-desc">${work[i]}</li>`
			html += tmp
			
		}
		let dom = `<ul class="profession-list">
							  							${html}
														</ul>`
		let parentLevel = this.parentNode;
		let nex = $(parentLevel).next();
		if (nex.length == 0) {
			$(parentLevel).after(dom);
		} else {
			$('.profession-list').remove();
		}
	},
	professionValuation:function(){
		let txt = $(this).text()
		approve.data.profession = txt;
		$('.profession-input').val(txt);
	},
	duration:function(){
		let profession = approve.data.profession
		if (profession == false) {
			return
		}
		let html = '';
		let work_time = approve.data.work_time;
		for (var i = work_time.length - 1; i >= 0; i--) {
			let tmp = `<li class="duration-desc">${work_time[i]}</li>`
			html += tmp 
		}
		let dom = `<ul class="duration-list">
							  							${html}
														</ul>`
		let parentLevel = this.parentNode;
		let nex = $(parentLevel).next();
		if (nex.length == 0) {
			$(parentLevel).after(dom);
		} else {
			$('.duration-list').remove();
		}
	},
	durationValuation:function(){
		let txt = $(this).text()
		approve.data.tiem = txt;
		$('.duration-input').val(txt);
	},
	approveOne:function(){
		if (approve.data.gender == false) {
			return
		}
		if (approve.data.province == false) {
			return
		}
		if (approve.data.city == false) {
			return
		}
		if (approve.data.state == false) {
			return
		}
		let student = (approve.data.annual != false) && (approve.data.grade != false);
		let work = (approve.data.profession != false) && (approve.data.tiem != false);
		let studentPKwork = student || work;
		let no = approve.data.state.hasClass('no');
		if (studentPKwork || no) {
			$('.nextStep').addClass('nextStep-active')
		} else {
			$('.nextStep').removeClass('nextStep-active')
		}
	},
	nextStep:function(){
		let parentNode = this.parentNode;
		let nex = $(parentNode).next();
		$(parentNode).css('display','none')
		nex.css('display','inline-block')
		approve.data.container = nex.index();
		console.log(approve.data.container);
	},
	astrictThree:function(){
		if ($(this).hasClass('direction-item-active')) {
			let direction = approve.data.direction
			for (var i = direction.length - 1; i >= 0; i--) {
				if (direction[i] == this) {
					$(this).removeClass('direction-item-active');
					direction.splice(i,1);
					console.log(direction);
					console.log(1);
				}
			}
		} else {
			let direction = approve.data.direction
			$(this).addClass('direction-item-active');
			direction.push(this);
			if (direction.length > 3) {
			$(direction[0]).removeClass('direction-item-active');
			direction.shift()
			}
		}
	},
	becomeConformTo:function(){
		let direction = approve.data.direction;
		if (direction.length >= 1) {
			$('.become-affirm-right').addClass('become-affirm-right-active');
		}else{
			$('.become-affirm-right').removeClass('become-affirm-right-active');
		}
	},
	backtrack:function(){
		let parentNodeOne = this.parentNode;
		let parentNodeRepetition = parentNodeOne.parentNode;
		console.log(parentNodeRepetition);
		$(parentNodeRepetition).css('display','none')
		$(parentNodeRepetition).prev().css('display','inline-block');
		console.log($(parentNodeRepetition).prev());
		approve.data.container = $(parentNodeRepetition).index();
		console.log(approve.data.container);
	},
	becomeNextStep:function(){
		let parentNodeOne = this.parentNode;
		let parentNodeRepetition = parentNodeOne.parentNode;
		$(parentNodeRepetition).css('display','none');
		$(parentNodeRepetition).next().css('display','inline-block');
		let nex = $(parentNodeRepetition).next();
		approve.data.container = $(nex).index();
		console.log(approve.data.container);

	},
	degreeItem:function(){
		console.log(this);
		let parentNodeOne = this.parentNode;
		let listItem = $(parentNodeOne).children();
		let nex = $(parentNodeOne).next();
		let itemLine = $(nex).children();
		console.log(listItem);
		for (var i = listItem.length - 1; i >= 0; i--) {
			$(listItem[i]).removeClass('degree-item-active')	
		}
		for (var i = itemLine.length - 1; i >= 0; i--) {
			$(itemLine[i]).removeClass('item-line-active')	
		}
		$(this).addClass('degree-item-active');
		for (var i = listItem.length - 1; i >= 0; i--) {
			console.log(listItem[i]);
			console.log(this);
			console.log(itemLine[i]);
			if (this == listItem[i]) {
				$(itemLine[i]).addClass('item-line-active');
			}
			// if ($(listItem[i]).hasClass('degree-item-active')) {
			// 	$(itemLine[i]).addClass('item-line-active');
			// }
		}	
		let directionLevel = approve.data.directionLevel;
			
		console.log(directionLevel);
		for (var i = directionLevel.length - 1; i >= 0; i--) {
				if (this.parentNode == directionLevel[i].parentNode) {
					directionLevel.splice(i,1);
				}
		}
		directionLevel.push(this);
		console.log(directionLevel);
	},
	levelConformTo:function(){
		let directionLevel = approve.data.directionLevel;
		if (directionLevel.length >= 3 ) {
			$('.level-affirm-right').addClass('level-affirm-right-active');
		}else{
			$('.level-affirm-right').removeClass('level-affirm-right-active');
		}
	},
	levelNextStep:function(){
		let parentNodeOne = this.parentNode;
		let parentNodeRepetition = parentNodeOne.parentNode;
		$(parentNodeRepetition).css('display','none');
		$(parentNodeRepetition).next().css('display','inline-block');
		let nex = $(parentNodeRepetition).next();
		approve.data.container = $(nex).index();
		console.log(approve.data.container);

	},
	keydownCellphone:function(){
		var nonNumeric = /^[0-9]{0,}$/;
		let thisVal = $(this).val()
		let nonNumericKey = nonNumeric.test(thisVal);
		if (!nonNumericKey) {
			event.preventDefault();
		}
		let valLength = thisVal.length;
		console.log(valLength);
		if (valLength >= 11) {
			event.preventDefault();

		}
	},
	keyupCellphone:function(){
		let thisVal = $(this).val();
		let valLength = thisVal.length;
		console.log(valLength);
		if (valLength >= 11) {
				approve.data.cellphone = thisVal;
				console.log(approve.data.cellphone)
				$('.dynamic-buttom').addClass('dynamic-buttom-active')

			}else{
				$('.dynamic-buttom').removeClass('dynamic-buttom-active');
				approve.data.cellphone = '';
			}
		let cellphone = approve.data.cellphone;
		let verification = approve.data.verification;
		let dynamic = approve.data.dynamic;
		let one = (cellphone != '') && (verification != '') ;
		if ((dynamic != '') && one) {
			$('.pinless-cellphone').addClass('pinless-cellphone-active')
		} else {
			$('.pinless-cellphone').removeClass('pinless-cellphone-active')
		}
		console.log(one);
	},
	keypressVerify:function(){
		let thisVal = $(this).val();
		approve.data.verification = thisVal;
		console.log(approve.data.verification);
		let cellphone = approve.data.cellphone;
		let verification = approve.data.verification;
		let dynamic = approve.data.dynamic;
		let one = (cellphone != '') && (verification != '') ;
		if ((dynamic != '') && one) {
			$('.pinless-cellphone').addClass('pinless-cellphone-active')
		} else {
			$('.pinless-cellphone').removeClass('pinless-cellphone-active')
		}
	},
	dynamicVerify:function(){
		let thisVal = $(this).val();
		approve.data.dynamic = thisVal;
		console.log(approve.data.dynamic);
		let cellphone = approve.data.cellphone;
		let verification = approve.data.verification;
		let dynamic = approve.data.dynamic;
		let one = (cellphone != '') && (verification != '') ;
		if ((dynamic != '') && one) {
			$('.pinless-cellphone').addClass('pinless-cellphone-active')
		} else {
			$('.pinless-cellphone').removeClass('pinless-cellphone-active')
		}
	}
}
approve.init();



















