import viewTabbar from '../../components/uni-tabbar.vue'
export const storeMixin = {
	data() {
		return {
			title: '商城',
			tabs: [{
				url:"index",
				type: "store",
				title: '商城',
				page:'store'
			},{
				url:"/pages/store/circle",
				type:"find",
				title:'商圈',
				page:'store'
			} ,
			{
				url:"/pages/store/customer",
				type:"bliaotian",
				title:' 客服',
				page:'store'
			} ,
			{
				url:"/pages/store/shopcar",
				type:"gouwuche",
				title:' 购物车',
				page:'store'
			} ,
			{
				url:"user",
				type:"user",
				title:' 我的',
				page:'index'
			} ]
		}
	},
	components: {
		viewTabbar,
	},
}

export const schollMixin = {
	data() {
		return {
			tabs: [{
				url:"index",
				type: "baokuan",
				title: '每日爆款',
				page:'school'
			},{
				url:"/pages/school/pub-ma",
				type:"xuanchuan",
				title:'宣传素材',
				page:'school'
			} ,
			{
				url:"/pages/school/school-knowlege",
				type:"study",
				title:' 知识学院',
				page:'school'
			} ,
			{
				url:"/pages/school/recommend",
				type:"xinyu",
				title:' 每日心语',
				page:'school'
			} ,
			{
				url:"user",
				type:"user",
				title:' 我的',
				page:'index'
			} ]
		}
	},
	components: {
		viewTabbar,
	},
}

export const chatMixin = {
	data() {
		return {
			tabs: [{
				url:"index",
				type: "bliaotian",
				title: '聊天',
				page:'chat'
			},{
				url:"/pages/chat/friend-circle",
				type:"find",
				title:'朋友圈',
				page:'chat'
			} ,
			{
				url:"/pages/chat/group",
				type:"tuandui",
				title:' 团队',
				page:'chat'
			} ,
			{
				url:"/pages/chat/mail-list",
				type:"txl",
				title:' 通讯录',
				page:'chat'
			} ,
			{
				url:"user",
				type:"user",
				title:' 我的',
				page:'index'
			} ]
		}
	},
	components: {
		viewTabbar,
	},
}

