const cateList = [{
		id: 1,
		name: '首页'
	},
	{
		id: 2,
		name: '母婴'
	},
	{
		id: 3,
		name: '美食'
	},
	{
		id: 4,
		name: '女装'
	},
	{
		id: 5,
		name: '美妆'
	},
	{
		id: 6,
		name: '内衣'
	},
	{
		id: 7,
		name: '百货'
	},
	{
		id: 114,
		name: '鞋包'
	},
	{
		id: 47,
		name: '家电'
	},
	{
		id: 48,
		name: '男装'
	},
	{
		id: 49,
		name: '运动'
	},
	{
		id: 8,
		pid: 1,
		// name: '首页',
	},
	{
		id: 9,
		pid: 2,
		// name: '母婴'
	},
	{
		id: 10,
		pid: 3,
		// name: '美食',
	},
	{
		id: 11,
		pid: 4,
		// name: '女装',
	},
	{
		id: 12,
		pid: 5,
		// name: '美妆',
	},
	{
		id: 13,
		pid: 6,
		// name: '内衣',
	},
	{
		id: 14,
		pid: 7,
		// name: '百货',
	},
	{
		id: 18,
		pid: 114,
		// name: '鞋包',
	},
	{
		id: 15,
		pid: 47,
		// name: '家电',
	},
	{
		id: 16,
		pid: 48,
		// name: '男装',
	},
	{
		id: 17,
		pid: 49,
		// name: '运动',
	},
	{
		id: 19,
		pid: 8,
		name: '9.9',
		picture: '/static/tab/tabbar01_01.png'
	},
	{
		id: 20,
		pid: 8,
		name: '19.9',
		picture: '/static/tab/tabbar01_02.png'
	},
	{
		id: 21,
		pid: 8,
		name: '高佣金',
		picture: '/static/tab/tabbar01_03.png'
	},
	{
		id: 22,
		pid: 8,
		name: '秒杀榜',
		picture: '/static/tab/tabbar01_04.png'
	},
	{
		id: 23,
		pid: 8,
		name: '淘抢购',
		picture: '/static/tab/tabbar01_05.png'
	},
	{
		id: 24,
		pid: 8,
		name: '聚划算',
		picture: '/static/tab/tabbar01_06.png'
	},
	{
		id: 49,
		pid: 8,
		name: '美食街',
		picture: '/static/tab/tabbar01_07.png'
	},
	{
		id: 25,
		pid: 8,
		name: '生活购',
		picture: '/static/tab/tabbar01_08.png'
	},
	{
		id: 26,
		pid: 8,
		name: '食品',
		picture: '/static/tab/tabbar01_09.png'
	},
	{
		id: 27,
		pid: 8,
		name: '高佣商品',
		picture: '/static/tab/tabbar01_10.png'
	},
	{
		id: 28,
		pid: 9,
		name: '孕产用品',
		picture: '/static/tab/v_1/muying/1.png'
	},
	{
		id: 29,
		pid: 9,
		name: '尿不湿',
		picture: '/static/tab/v_1/muying/2.png'
	},
	{
		id: 30,
		pid: 9,
		name: '玩具图书',
		picture: '/static/tab/v_1/muying/3.png'
	},
	{
		id: 31,
		pid: 9,
		name: '婴童用品',
		picture: '/static/tab/v_1/muying/4.png'
	},
	{
		id: 32,
		pid: 9,
		name: '奶粉辅食',
		picture: '/static/tab/v_1/muying/5.png'
	},
	{
		id: 33,
		pid: 9,
		name: '奶瓶奶嘴',
		picture: '/static/tab/v_1/muying/6.png'
	},
	{
		id: 34,
		pid: 9,
		name: '婴童床品',
		picture: '/static/tab/v_1/muying/7.png'
	},
	{
		id: 35,
		pid: 9,
		name: '童装童鞋',
		picture: '/static/tab/v_1/muying/8.png'
	},
	{
		id: 36,
		pid: 10,
		name: '休闲食品',
		picture: '/static/tab/v_1/meishi/1.png'
	},
	{
		id: 37,
		pid: 10,
		name: '坚果蜜饯',
		picture: '/static/tab/v_1/meishi/2.png'
	},
	{
		id: 38,
		pid: 10,
		name: '饼干糕点',
		picture: '/static/tab/v_1/meishi/3.png'
	},
	{
		id: 39,
		pid: 10,
		name: '茶酒冲饮',
		picture: '/static/tab/v_1/meishi/4.png'
	},
	{
		id: 42,
		pid: 10,
		name: '蔬菜熟食/蛋类',
		picture: '/static/tab/v_1/meishi/5.png'
	},
	{
		id: 43,
		pid: 10,
		name: '粮油调料',
		picture: '/static/tab/v_1/meishi/6.png'
	},
	{
		id: 44,
		pid: 10,
		name: '保健滋补',
		picture: '/static/tab/v_1/meishi/7.png'
	},
	{
		id: 45,
		pid: 10,
		name: '肉脯卤味',
		picture: '/static/tab/v_1/meishi/8.png'
	},
	{
		id: 50,
		pid: 11,
		name: '裙子',
		picture: '/static/tab/v_1/nvzhuang/1.png'
	}, {
		id: 51,
		pid: 11,
		name: 'T恤',
		picture: '/static/tab/v_1/nvzhuang/2.png'
	}, {
		id: 52,
		pid: 11,
		name: '衬衫',
		picture: '/static/tab/v_1/nvzhuang/3.png'
	}, {
		id: 53,
		pid: 11,
		name: '裤子',
		picture: '/static/tab/v_1/nvzhuang/4.png'
	}, {
		id: 54,
		pid: 11,
		name: '外套',
		picture: '/static/tab/v_1/nvzhuang/5.png'
	}, {
		id: 55,
		pid: 11,
		name: '背心吊带',
		picture: '/static/tab/v_1/nvzhuang/6.png'
	}, {
		id: 56,
		pid: 11,
		name: '卫衣',
		picture: '/static/tab/v_1/nvzhuang/7.png'
	}, {
		id: 57,
		pid: 11,
		name: '蕾丝衫/雪纺衫',
		picture: '/static/tab/v_1/nvzhuang/8.png'
	}, {
		id: 58,
		pid: 12,
		name: '卸妆洁面',
		picture: '/static/tab/v_1/meizhuang/1.png'
	}, {
		id: 59,
		pid: 12,
		name: '面膜',
		picture: '/static/tab/v_1/meizhuang/2.png'
	}, {
		id: 60,
		pid: 12,
		name: '底妆',
		picture: '/static/tab/v_1/meizhuang/3.png'
	}, {
		id: 61,
		pid: 12,
		name: '唇妆香水',
		picture: '/static/tab/v_1/meizhuang/4.png'
	}, {
		id: 62,
		pid: 12,
		name: '洗护用品',
		picture: '/static/tab/v_1/meizhuang/5.png'
	}, {
		id: 63,
		pid: 12,
		name: '口腔护理',
		picture: '/static/tab/v_1/meizhuang/6.png'
	}, {
		id: 64,
		pid: 12,
		name: '美发护发',
		picture: '/static/tab/v_1/meizhuang/7.png'
	}, {
		id: 65,
		pid: 12,
		name: '个护用品',
		picture: '/static/tab/v_1/meizhuang/8.png'
	}, {
		"id": 66,
		"pid": 13,
		"name": '内裤',
		picture: '/static/tab/v_1/neiyi/1.png'
	}, {
		"id": 67,
		"pid": 13,
		"name": '文胸',
		picture: '/static/tab/v_1/neiyi/2.png'
	}, {
		"": 68,
		"pid": 13,
		"name": '文胸套装',
		picture: '/static/tab/v_1/neiyi/3.png'
	}, {
		"id": 69,
		"pid": 13,
		"name": '保暖内衣',
		picture: '/static/tab/v_1/neiyi/4.png'
	}, {
		"id": 70,
		"pid": 13,
		"name": '袜子',
		picture: '/static/tab/v_1/neiyi/5.png'
	}, {
		"id": 71,
		"pid": 13,
		"name": '睡衣/家居服',
		picture: '/static/tab/v_1/neiyi/6.png'
	}, {
		"id": 72,
		"pid": 13,
		"name": '塑身衣',
		picture: '/static/tab/v_1/neiyi/7.png'
	}, {
		"id": 73,
		"pid": 13,
		"name": '基础打底',
		picture: '/static/tab/v_1/neiyi/8.png'
	}, {
		"id": 74,
		"pid": 14,
		"name": "清洁用品",
		picture: '/static/tab/v_1/baihuo/1.png'
	}, {
		"id": 75,
		"pid": 14,
		"name": "床上用品",
		picture: '/static/tab/v_1/baihuo/2.png'
	}, {
		"id": 76,
		"pid": 14,
		"name": "家居饰品",
		picture: '/static/tab/v_1/baihuo/3.png'
	}, {
		"id": 77,
		"pid": 14,
		"name": "餐厨用具",
		picture: '/static/tab/v_1/baihuo/4.png'
	}, {
		"id": 78,
		"pid": 14,
		"name": "收纳储物",
		picture: '/static/tab/v_1/baihuo/5.png'
	}, {
		"id": 79,
		"pid": 14,
		"name": "绿植花卉",
		picture: '/static/tab/v_1/baihuo/6.png'
	}, {
		"id": 80,
		"pid": 14,
		"name": "家具日用",
		picture: '/static/tab/v_1/baihuo/7.png'
	}, {
		"id": 81,
		"pid": 14,
		"name": "文体车品",
		picture: '/static/tab/v_1/baihuo/8.png'
	},{
		"id": 90,
		"pid": 15,
		"name": "电子产品/数码",
		picture: '/static/tab/v_1/xiebao/1.png'
	}, {
		"id": 91,
		"pid": 15,
		"name": "手机壳/手机膜",
		picture: '/static/tab/v_1/xiebao/2.png'
	}, {
		"id": 92,
		"pid": 15,
		"name": "只能设备",
		picture: '/static/tab/v_1/xiebao/3.png'
	}, {
		"id": 93,
		"pid": 15,
		"name": "数码配件",
		picture: '/static/tab/v_1/xiebao/4.png'
	}, {
		"id": 94,
		"pid": 15,
		"name": "影音电器",
		picture: '/static/tab/v_1/xiebao/5.png'
	}, {
		"id": 95,
		"pid": 15,
		"name": "生活电器",
		picture: '/static/tab/v_1/xiebao/6.png'
	}, {
		"id": 96,
		"pid": 15,
		"name": "厨房电器",
		picture: '/static/tab/v_1/xiebao/7.png'
	}, {
		"id": 97,
		"pid": 15,
		"name": "大家电",
		picture: '/static/tab/v_1/xiebao/8.png'
	},{
		"id": 106,
		"pid": 16,
		"name": "Polo杉",
		picture: '/static/tab/v_1/jiadian/1.png'
	}, {
		"id": 107,
		"pid": 16,
		"name": "T恤",
		picture: '/static/tab/v_1/jiadian/2.png'
	}, {
		"id": 108,
		"pid": 16,
		"name": "衬衫",
		picture: '/static/tab/v_1/jiadian/3.png'
	}, {
		"id": 109,
		"pid": 16,
		"name": "卫衣",
		picture: '/static/tab/v_1/jiadian/4.png'
	}, {
		"id": 110,
		"pid": 16,
		"name": "短裤",
		picture: '/static/tab/v_1/jiadian/5.png'
	}, {
		"id": 111,
		"pid": 16,
		"name": "牛仔裤",
		picture: '/static/tab/v_1/jiadian/6.png'
	}, {
		"id": 112,
		"pid": 16,
		"name": "休闲裤",
		picture: '/static/tab/v_1/jiadian/7.png'
	}, {
		"id": 113,
		"pid": 16,
		"name": "休闲套装",
		picture: '/static/tab/v_1/jiadian/8.png'
	}, {
		"id": 98,
		"pid": 17,
		"name": "瑜伽",
		picture: '/static/tab/v_1/nanzhuang/1.png'
	}, {
		"id": 99,
		"pid": 17,
		"name": "游泳",
		picture: '/static/tab/v_1/nanzhuang/2.png'
	}, {
		"id": 100,
		"pid": 17,
		"name": "球类运动",
		picture: '/static/tab/v_1/nanzhuang/3.png'
	}, {
		"id": 101,
		"pid": 17,
		"name": "运动鞋",
		picture: '/static/tab/v_1/nanzhuang/4.png'
	}, {
		"id": 102,
		"pid": 17,
		"name": "运动服装",
		picture: '/static/tab/v_1/nanzhuang/5.png'
	}, {
		"id": 103,
		"pid": 17,
		"name": "运动包/配件",
		picture: '/static/tab/v_1/nanzhuang/6.png'
	}, {
		"id": 104,
		"pid": 17,
		"name": "骑行装备",
		picture: '/static/tab/v_1/nanzhuang/7.png'
	}, {
		"id": 105,
		"pid": 17,
		"name": "户外/登山",
		picture: '/static/tab/v_1/nanzhuang/8.png'
	}, {
		"id": 82,
		"pid": 18,
		"name": "女鞋",
		picture: '/static/tab/v_1/yundong/1.png'
	}, {
		"id": 83,
		"pid": 18,
		"name": "男鞋",
		picture: '/static/tab/v_1/yundong/2.png'
	}, {
		"id": 84,
		"pid": 18,
		"name": "女包/男包",
		picture: '/static/tab/v_1/yundong/3.png'
	}, {
		"id": 85,
		"pid": 18,
		"name": "箱包配件",
		picture: '/static/tab/v_1/yundong/4.png'
	}, {
		"id": 86,
		"pid": 18,
		"name": "穿戴用品",
		picture: '/static/tab/v_1/yundong/5.png'
	}, {
		"id": 87,
		"pid": 18,
		"name": "手表",
		picture: '/static/tab/v_1/yundong/6.png'
	}, {
		"id": 88,
		"pid": 18,
		"name": "潮流饰品",
		picture: '/static/tab/v_1/yundong/7.png'
	}, {
		"id": 89,
		"pid": 18,
		"name": "宝珠首饰",
		picture: '/static/tab/v_1/yundong/8.png'
	},
]

export default {
	cateList
}
