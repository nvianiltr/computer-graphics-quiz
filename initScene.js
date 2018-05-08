/* Noviani Litriani (2001594623) */

function createScene() {
    canvas = document.getElementById('renderCanvas');
    engine = new BABYLON.Engine(canvas, true);
    scene = new BABYLON.Scene(engine);
    camera = new BABYLON.FreeCamera("Camera", new BABYLON.Vector3(0, 100, 0.1), scene);
    camera.setTarget(new BABYLON.Vector3(0,0,0));
    var light = new BABYLON.HemisphericLight('hlight', new BABYLON.Vector3(0, 1, 0), scene);
}