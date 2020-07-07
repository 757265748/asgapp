<template>
	<view id="QSGradientSwiper" class="QSGradientSwiper" :style="{
		'height': height + 'px'
	}">
		<!-- #ifndef APP-PLUS || H5 || MP-WEIXIN || MP-QQ -->
		<view class="background" :animation="animationData" :style="{
					'height': getHeight*Number(backgroundHeightScale) + 'px',
					'border-bottom-left-radius': borderBottomRadius,
					'border-bottom-right-radius': borderBottomRadius
				}">
			{{animationData}}</view>
		<!-- #endif -->
		<!-- #ifdef APP-PLUS || H5 || MP-WEIXIN || MP-QQ -->
		<view class="background" id="background1" :style="{
				'height': getHeight*Number(backgroundHeightScale) + 'px',
				'border-bottom-left-radius': borderBottomRadius,
				'border-bottom-right-radius': borderBottomRadius
		}">
		</view>
		<view class="flex-column-center" @touchstart="test.touchstart" @touchmove="test.touchmove" :change:prop="test.end"
		 :prop="propValue" @touchend="test.touchend" :data-top="scrollTop" id="refresh-container" style="position: relative;z-index: 2;top: 110rpx;">

			<!-- 起始会隐藏在导航栏里 -->
			<!-- <view class="flex-row-center" style="height: 70rpx;width: 750rpx;position: relative;top: -80rpx;">
				<view class="cuIcon-loading1" id="lot" style="font-size: 35rpx;color: #00CDCD;">
				</view>
				<text class="my-neirong-sm padding-left" style="color: #9c9c9c;">{{refreshText}}</text>
			</view>

			<text class="my-neirong-sm padding-top">2020年3月3日</text>
			<view class="white-box" style="width: 100%;">
				<view class="background" id="background" :style="{
							'height': getHeight*Number(backgroundHeightScale) + 'px',
							'border-bottom-left-radius': borderBottomRadius,
							'border-bottom-right-radius': borderBottomRadius
						}">
				</view> -->
				<!-- #ifndef APP-PLUS || H5 || MP-WEIXIN || MP-QQ -->
				<swiper :indicator-dots="indicatorDots" :indicator-color="indicatorColor" :indicator-active-color="indicatorActiveColor"
				 :autoplay="autoplay" :interval="interval" :duration="duration" :circular="isCircular" :current="swiperCurrent"
				 @transition="swiperAction" @animationfinish="swiperAction" :style="{ 'height': height + 'px' }">
					<swiper-item v-for="(item, index) in list" :key="index">
						<view class="swiper-item">
							<QSGradientSwiperItem :item="item" :index="index"></QSGradientSwiperItem>
						</view>
					</swiper-item>
				</swiper>
				<!-- #endif -->
				<!-- #ifdef APP-PLUS || H5 || MP-WEIXIN || MP-QQ -->
				<swiper id="swiper" class="swiper" :indicator-dots="indicatorDots" :indicator-color="indicatorColor"
				 :indicator-active-color="indicatorActiveColor" :autoplay="autoplay" :interval="interval" :duration="duration"
				 :previous-margin="previousMargin" :next-margin="nextMargin" :circular="isCircular" :current="swiperCurrent"
				 @transition="QSGradientSwiperWXS.transition" @animationfinish="QSGradientSwiperWXS.animationfinish"
				 :circularGradient_wxs="circularGradient_wxs" :gradientList_wxs="gradientList_wxs" :itemMoveDistance="itemMoveDistance"
				 :change:circularGradient_wxs="QSGradientSwiperWXS.circularGradient_wxs_Change" :change:gradientList_wxs="QSGradientSwiperWXS.gradientList_wxs_Change"
				 :change:itemMoveDistance="QSGradientSwiperWXS.itemMoveDistance_Change" :data-swipercurrent="swiperCurrent"
				 :data-iscircular="isCircular" :style="{ 'height': height + 'px' }">
					<swiper-item v-for="(item, index) in list" :key="index">
						<view class="swiper-item">
							<QSGradientSwiperItem :item="item" :index="index"></QSGradientSwiperItem>
						</view>
					</swiper-item>
				</swiper>
				<!-- #endif -->
			<!-- </view> -->
		</view>
		<!-- #endif -->

		
	</view>
</template>

<!-- #ifdef APP-PLUS || H5 || MP-WEIXIN || MP-QQ -->
<script lang="wxs" module="QSGradientSwiperWXS">
	var gradientList_wxs = [];
	var circularGradient_wxs = [];
	var itemMoveDistance = 0;
	var char1 = "|";
	var char2 = ",";
	var swiperId = "#swiper";
	var swiperClass = ".swiper";
	var backgroundId = "#background";

	function gradientList_wxs_Change(n, o, ins) {
		var newArr = [];
		var data = n.split(char1);
		for (var i = 0; i < data.length; i++) {
			newArr.push(data[i].split(char2));
		}
		gradientList_wxs = newArr;

		var swiper = ins.selectComponent(swiperId);
		var dataset = swiper.getDataset();
		var swiperCurrent = dataset.swipercurrent;
		changeBackgroundColor(ins, gradientList_wxs[swiperCurrent][0]);
	}

	function circularGradient_wxs_Change(n, o, ins) {
		circularGradient_wxs = n.split(char2);
	}

	function itemMoveDistance_Change(n) {
		itemMoveDistance = parseFloat(n);
	}

	function transition(e, ins) {
		var DX = e.detail.dx;
		var swiper = ins.selectComponent(swiperId);
		var dataset = swiper.getDataset();
		var swiperCurrent = parseInt(dataset.swipercurrent);
		var isCircular = (('' + dataset.iscircular) === 'true');
		var gradientItem;
		var itemCurrent;
		var addC = Math.floor(Math.abs(DX) / itemMoveDistance);
		addC = addC - (Math.floor(addC / (gradientList_wxs.length)) * (gradientList_wxs.length));
		var addDistance = (addC * itemMoveDistance);
		swiperCurrent += addC;
		if (DX >= 0) {
			DX -= addDistance;
			itemCurrent = Math.round(DX);
			var abl = swiperCurrent == (gradientList_wxs.length - 1);
			if (abl && (abl || isCircular)) {
				// console.log('DX大于零， 选择circularGradient_wxs')
				gradientItem = circularGradient_wxs;
			} else {
				// console.log('DX大于零， 选择gradientList_wxs')
				gradientItem = gradientList_wxs[swiperCurrent] || gradientList_wxs[gradientList_wxs.length - 1];
			}
		} else {
			DX += addDistance;
			itemCurrent = Math.round(itemMoveDistance + DX);
			var bbl_s = swiperCurrent == 0;
			if (bbl_s && (bbl_s || isCircular)) {
				// console.log(' bbl_s DX小于零， 选择circularGradient_wxs, swiperCurrent:' + swiperCurrent)
				gradientItem = circularGradient_wxs;
			} else {
				if (swiperCurrent == (gradientList_wxs.length)) {
					// console.log(' bbl_e DX小于零， 选择circularGradient_wxs, swiperCurrent:' + swiperCurrent)
					gradientItem = circularGradient_wxs;
				} else {
					// console.log('DX小于零， 选择gradientList_wxs, swiperCurrent:' + swiperCurrent)
					gradientItem = gradientList_wxs[swiperCurrent - 1] || gradientList_wxs[0];
				}
			}
		}
		itemCurrent = itemCurrent > (gradientItem.length - 1) ? (gradientItem.length - 1) : itemCurrent < 0 ? 0 : itemCurrent;
		var color = gradientItem[itemCurrent];
		changeBackgroundColor(ins, color);
	}

	function animationfinish(e, ins) {
		ins.callMethod('animationfinish_wxs', e.detail);
		changeBackgroundColor(ins, gradientList_wxs[e.detail.current][0]);
	}

	function changeBackgroundColor(ins, color) {
		ins.callMethod('change1', color);
		var background = ins.selectComponent(backgroundId);
		var background1 = ins.selectComponent('#background1');
		background.setStyle({
			'background-color': color
		})
		background1.setStyle({
			'background-color': color
		})
	}

	module.exports = {
		transition: transition,
		animationfinish: animationfinish,
		circularGradient_wxs_Change: circularGradient_wxs_Change,
		gradientList_wxs_Change: gradientList_wxs_Change,
		itemMoveDistance_Change: itemMoveDistance_Change
	}
</script>
<!-- #endif -->
<script module="test" lang="wxs">
	// 起始y的坐标
	var startY = 0
	// y轴移动距离
	var top = 0
	// 防止重复下拉刷新
	var code = 0
	// 防止重复向逻辑层交互
	var mit = 0

	function touchstart(event, ins) {
		if (code == 0) {
			mit = 0
			ins.callMethod('refresh', 2);
			var touch = event.touches[0] || event.changedTouches[0]
			startY = touch.pageY
		}
	}

	function end(newValue, oldValue, ownerInstance, instance) {
		// 收回
		ownerInstance.selectComponent('#refresh-container').setStyle({
			'transform': 'translateY(0)',
			'transition': 'ease 0.3s'
		})
		// 停止转圈
		ownerInstance.selectComponent('#lot').removeClass('turn-load')
		// 复原
		code = 0
	}

	function touchend(event, ins) {
		console.log(ins.selectComponent('#refresh-container'));
		if (code == 0) {
			// 这里根据自己业务处理,小于60则不作操作
			if (top < 60) {
				ins.selectComponent('#refresh-container').setStyle({
					'transform': 'translateY(0)',
					'transition': 'ease 0.3s'
				})
			} else {
				// 改变提示文字
				ins.callMethod('refresh', 1);
				// 防止重复下拉
				code = 1
				ins.selectComponent('#refresh-container').setStyle({
					// 成功刷新回弹的距离
					'transform': 'translateY(60px)',
					'transition': 'ease 0.3s'
				})
				// 可以替换旋转速率
				// ins.selectComponent('#lot').setStyle({
				// 	'transform': 'rotate(0)',
				// 	'transition': 'ease 3s'
				// })
				ins.selectComponent('#lot').addClass('turn-load')

			}
		}
		top=0;
	}

	function touchmove(event, ins) {
		ins.callMethod('distance', top);
		if (code == 0) {
			var touch = event.touches[0] || event.changedTouches[0]
			var pageY = touch.pageY
			var vew = ins.selectComponent('#refresh-container')
			var dataset = vew.getDataset();
			top = pageY - startY
			// 页面是否触底
			if (dataset.top == 0) {
				// 改变提示文字,且只会触发一次
				if (top > 60) {
					if (mit == 0) {
						ins.callMethod('refresh', 0);
					}
					mit = 1
				}
				vew.setStyle({
					'transform': 'translateY(' + (top) + 'px)'
				})
				ins.selectComponent('#lot').setStyle({
					'transform': 'rotate(' + (top * 6) + 'deg)'
				})
			} else {
				// 从长列表下拉上来 ,这里要实时更新起始位置
				startY = pageY
			}
		}
	}
	module.exports = {
		end: end,
		touchend: touchend,
		touchstart: touchstart,
		touchmove: touchmove
	}
</script>
<script>
	import QSGradientSwiperItem from './components/QS-Gradient-Swiper-Item.vue';

	function checkNumber(theObj) {
		var reg = /^[0-9]+.?[0-9]*$/;
		if (reg.test(theObj)) {
			return true;
		}
		return false;
	}
	const {
		windowWidth
	} = uni.getSystemInfoSync();
	export default {
		onPageScroll(e) {
			if (e.scrollTop < 1) {
				this.scrollTop = 0
			} else {
				// 提高性能
				if (this.scrollTop != 1) {
					this.scrollTop = 1
				}
			}
		},
		components: {
			QSGradientSwiperItem,
		},
		props: {
			height: {
				type: [String, Number],
				default: 200
			},
			backgroundHeightScale: {
				type: [String, Number],
				default: 0.8
			},
			backgroundColorName: {
				type: String,
				default: 'backgroundColor'
			},
			borderBottomRadius: {
				type: [String, Number],
				default: 0
			},
			circular: {
				type: [String, Boolean],
				default: false
			},
			defCurrent: {
				type: [String, Number],
				default: 0
			},
			previousMargin: {
				type: String,
				default: '0px'
			},
			nextMargin: {
				type: String,
				default: '0px'
			},
			indicatorDots: {
				type: [String, Boolean],
				default: false
			},
			indicatorColor: {
				type: String,
				default: 'rgba(0, 0, 0, .3)'
			},
			indicatorActiveColor: {
				type: String,
				default: '#000000'
			},
			autoplay: {
				type: [String, Boolean],
				default: false
			},
			interval: {
				type: [String, Number],
				default: 5000
			},
			duration: {
				type: [String, Number],
				default: 500
			}
		},
		data() {
			return {
				refreshText: "下拉刷新",
				scrollTop: 0,
				propValue: true,
				list: [],
				gradientList: [],
				circularGradient: [],
				readyShow: false,
				swiperCurrent: 0,
				componentWidth: 0,
				itemMoveDistance: 0,
				onceAnimationfinish: false,
				// #ifndef APP-PLUS || H5 || MP-WEIXIN || MP-QQ
				Ani: null,
				animationData: {},
				// #endif
				// #ifdef APP-PLUS || H5 || MP-WEIXIN || MP-QQ
				gradientList_wxs: '',
				circularGradient_wxs: '',
				// #endif
			}
		},
		computed: {
			getHeight() {
				return Number(this.height);
			},
			isCircular() {
				return String(this.circular) === 'true';
			},
			getListLength() {
				return this.list.length;
			}
		},
		created() {
			// #ifndef APP-PLUS || H5 || MP-WEIXIN || MP-QQ
			this.Ani = uni.createAnimation({
				duration: 0
			});
			// #endif
		},
		methods: {
			distance(e){
				this.$emit('distance', e)
			},
			refresh(i) {
				if (i == 0) {
					this.refreshText = "松开刷新"
				} else if (i == 1) {
					// 这里写刷新业务
					this.refreshText = "正在刷新"
					setTimeout(() => {
						// 收回下拉刷新
						this.propValue = !this.propValue
					}, 2000)
				} else if (i == 2) {
					this.refreshText = "下拉刷新"
				}
			},
			getItemMoveDistance() {
				const previousMargin = this.formatItemMoveDistance(this.previousMargin);
				const nextMargin = this.formatItemMoveDistance(this.nextMargin);

				if (previousMargin !== false && nextMargin !== false) {
					this.itemMoveDistance = (this.componentWidth - Number(previousMargin) - Number(nextMargin));
				} else {
					console.log('previousMargin或nextMargin格式错误， 请输入正确的数字， 单位为px或rpx');
				}
			},
			formatItemMoveDistance(data) {
				const str = String(data);
				const arr_rpx = str.split('rpx');
				let num;
				let isRpx = false;
				if (arr_rpx.length > 1) {
					num = arr_rpx[0];
					isRpx = true;
				} else {
					const arr_px = str.split('px');
					if (arr_px.length > 1) {
						num = arr_px[0];
					} else {
						num = str;
					}
				}

				if (checkNumber(num)) {
					num = Number(num);
					if (isRpx) {
						return uni.upx2px(num);
					}
					return num;
				} else {
					return false;
				}
			},
			getComponentWidth() {
				return new Promise((rs, rj) => {
					try {
						let view = uni.createSelectorQuery().in(this);
						view.select('#QSGradientSwiper').fields({
							size: true
						})
						view.exec(res => {
							try {
								this.componentWidth = res[0].width;
								rs();
							} catch (e) {
								//TODO handle the exception
								this.componentWidth = windowWidth;
								rs();
							}
						});
					} catch (e) {
						//TODO handle the exception
						this.componentWidth = windowWidth;
						rs();
					}
				})
			},
			async setData(data) {
				await this.getComponentWidth();
				this.getItemMoveDistance();
				this.readyShow = false;
				setTimeout(() => {
					this.list = data;
					this.countGradientColor();
					setTimeout(() => {
						this.readyShow = true;
						setTimeout(() => {
							this.init(this.defCurrent);
						})
					}, 100)
				}, 100)
			},
			init(current) {
				this.swiperCurrent = current;
				this.defTransition();
			},
			countGradientColor() {
				const list_copy = this.list;
				const gradientList = [];
				for (let i = 0; i < list_copy.length; i++) {
					if (list_copy[i + 1]) {
						gradientList.push(gradient(list_copy[i][this.backgroundColorName], list_copy[i + 1][this.backgroundColorName], (
							this.itemMoveDistance + 1)));
					} else {
						gradientList.push([list_copy[i][this.backgroundColorName]]);
					}
				}
				this.gradientList = gradientList;
				// #ifndef APP-PLUS || H5 || MP-WEIXIN || MP-QQ
				this.circularGradient = gradient(list_copy[list_copy.length - 1][this.backgroundColorName], list_copy[0][this.backgroundColorName],
					(this.itemMoveDistance + 1));
				// #endif
				// #ifdef APP-PLUS || H5 || MP-WEIXIN || MP-QQ
				let gradientList_wxs = gradientList.map(item => item.join(','));
				gradientList_wxs = gradientList_wxs.join('|');
				this.gradientList_wxs = gradientList_wxs;
				this.circularGradient_wxs = gradient(list_copy[list_copy.length - 1][this.backgroundColorName], list_copy[0][this.backgroundColorName],
					(this.itemMoveDistance + 1)).join(',');
				// #endif
			},
			change1(e) {
				this.$emit('change1', e)
			},
			animationfinish_wxs(detail) {
				console.log(detail);
				if (this.swiperCurrent != detail.current) {
					this.$emit('change', detail.current)
				}
				this.swiperCurrent = Number(detail.current);
				if (this.isCircular && !this.onceAnimationfinish) {
					this.onceAnimationfinish = true;
				}
			},
			swiperAction(e) {
				switch (e.type) {
					case 'transition':
						if (this.isCircular && !this.onceAnimationfinish) return;
						const DX = e.detail.dx;
						let swiperCurrent = this.swiperCurrent;
						let gradientList = this.gradientList;
						let gradientItem;
						let itemCurrent;
						if (DX >= 0) {
							if (swiperCurrent === (this.list.length - 1) && this.isCircular) {
								gradientItem = this.circularGradient;
							} else {
								gradientItem = gradientList[swiperCurrent];
							}
							itemCurrent = Math.round(DX);
						} else {
							if (swiperCurrent === 0 && this.isCircular) {
								gradientItem = this.circularGradient;
							} else {
								gradientItem = gradientList[swiperCurrent - 1];
							}
							itemCurrent = Math.round(this.itemMoveDistance + DX);
						}
						const color = gradientItem[itemCurrent];
						if (color) this.changeBackgroundColor(color);
						break;
					case 'animationfinish':
						this.swiperCurrent = e.detail.current;
						if (this.isCircular && !this.onceAnimationfinish) {
							this.onceAnimationfinish = true;
						}
						this.defTransition();
						break;
					default:
						break;
				}
			},
			defTransition() {
				this.swiperAction({
					type: 'transition',
					detail: {
						dx: 0
					}
				});
			},
			changeBackgroundColor(backgroundColor) {
				// console.log('设置了颜色:' + backgroundColor);
				// #ifndef APP-PLUS || H5 || MP-WEIXIN || MP-QQ
				this.Ani.backgroundColor(backgroundColor).step();
				this.animationData = this.Ani.export();
				// #endif
			}
		}
	}

	function rgbToHex(r, g, b) {
		var hex = ((r << 16) | (g << 8) | b).toString(16);
		return "#" + new Array(Math.abs(hex.length - 7)).join("0") + hex;
	}

	// hex to rgb
	function hexToRgb(hex) {
		var rgb = [];
		for (var i = 1; i < 7; i += 2) {
			rgb.push(parseInt("0x" + hex.slice(i, i + 2)));
		}
		return rgb;
	}

	// 计算渐变过渡色
	function gradient(startColor, endColor, step) {
		// 将 hex 转换为rgb
		var sColor = hexToRgb(startColor),
			eColor = hexToRgb(endColor);

		// 计算R\G\B每一步的差值
		var rStep = (eColor[0] - sColor[0]) / step,
			gStep = (eColor[1] - sColor[1]) / step,
			bStep = (eColor[2] - sColor[2]) / step;

		var gradientColorArr = [];
		for (var i = 0; i < step; i++) {
			// 计算每一步的hex值
			gradientColorArr.push(rgbToHex(parseInt(rStep * i + sColor[0]), parseInt(gStep * i + sColor[1]), parseInt(bStep * i +
				sColor[2])));
		}
		return gradientColorArr;
	}
</script>

<style scoped>
	.QSGradientSwiper {
		position: relative;
	}

	#background1 {
		position: fixed;
		width: 100%;
		top: -24.5%;
		/* #ifdef APP-PLUS */
		top: -250rpx;
		/* #endif */
		z-index: 99;
	}

	.background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	.swiper-item {
		height: 100%;
		width: 100%;
		position: relative;
	}
</style>
