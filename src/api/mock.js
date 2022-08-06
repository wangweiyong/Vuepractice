import Mock from 'mockjs'
import homeApi from './mockData/home'
import countApi from './mockData/countData'
import chartsApi from './mockData/chartData'

Mock.mock('/home/getData',homeApi.getHomeData)
Mock.mock('/home/getCount',countApi.getCountData)
Mock.mock('/home/getCharts',chartsApi.getChartsData)
