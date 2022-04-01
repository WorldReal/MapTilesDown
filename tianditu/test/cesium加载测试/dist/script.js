// 停止;
Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4YWVjNGJlZC05MjEzLTRlNDEtYjcwYy05NzY2NmJiMzBjNGQiLCJpZCI6MTExODcsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NTgzNzQ5MTV9.0jiPX8lzZIYzTd-tzeNju0hOFnBmMyxiPtxSeXaA8s0";
// const viewer = new Cesium.Viewer("cesiumContainer");
var token = '在天地图官网申请的token'
      // 服务域名
      var tdtUrl = 'http://127.0.0.1:5500/'
      // 服务负载子域
      var subdomains = ['0', '1', '2', '3', '4', '5', '6', '7','8','9','10']
      var imgMap = new Cesium.UrlTemplateImageryProvider({
        // url: tdtUrl + 'DataServer?T=img_w&x={x}&y={y}&l={z}&tk=' + token,
        url: tdtUrl + 'tiles/{z}/{x}/{y}.png',
        subdomains: subdomains,
        tilingScheme: new Cesium.WebMercatorTilingScheme(),
        maximumLevel: 10,
      })
      // cesium 初始化
      const viewer = new Cesium.Viewer('cesiumContainer', {
        // shouldAnimate: true,
        // selectionIndicator: true,
        // infoBox: false,
        imageryProvider: false,
        baseLayerPicker:false
      })
      // viewer.imageryLayers.removeAll()
      viewer.imageryLayers.addImageryProvider(imgMap)
 
 
viewer.scene.debugShowFramesPerSecond = true;


viewer.camera.flyTo({
  destination : Cesium.Cartesian3.fromDegrees(104.00379, 30.5976, 1000.0),
  // orientation : {
  //     heading : Cesium.Math.toRadians(175.0),
  //     pitch : Cesium.Math.toRadians(-35.0),
  //     roll : 0.0
  // }
});






