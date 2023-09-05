// pages/search/search.js

Page({
	data: {
		keywords: ['红烧排骨','水煮肉片','清蒸鱼片'],
		searchHistory: [],
		input: ''
	},

	/**
	 * Lifecycle function--Called when page load
	 */
	onLoad: function (options) {
		that = this
		// getHotKeyword()
	},
	submit: e => {
		var v = e.detail.value
		// var keyword = util.trimAll(v.keyword)
		var keyword = v.keyword
		if (keyword == '') {
			return
		}
		console.log('search:',keyword)
		// wx.navigateTo({ url: '../search/search?keyword=' + keyword })
		that.setData({
			['searchHistory[' + that.data.searchHistory.length + ']']: keyword
		})
	},
	clearHistory() {
		that.setData({
			searchHistory: []
		})
	},
	tapItem: e => {
		console.log(e)
		var item = e.currentTarget.dataset.item
		that.setData({ input: item })
		// that.submit()
		that.submit({ detail: { value: { keyword: item } } })
	},
	clearInput() {
		console.log('clear input')
		that.setData({ input: '', isShowClearIcon: false })
	},
	bindinput: e => {
		if (e.detail.value != '' && !that.data.isShowClearIcon) {
			that.setData({ isShowClearIcon: true })
		} else if (e.detail.value == '' && that.data.isShowClearIcon) {
			that.setData({ isShowClearIcon: false })
		}
	},
	bindfocus: () => {
		console.log('bind focus')
		if (that.data.input != '') {
			that.setData({ isShowClearIcon: true })

		}
	},
})
