/* Noviani Litriani (2001594623) */
var image;

function createMaterial(scene, image) {
    var mat = new BABYLON.StandardMaterial("materialTex", scene);
    mat.diffuseTexture = new BABYLON.Texture(image, scene);
    mat.diffuseColor = new BABYLON.Color3(1, 1, 1);
    mat.specularColor = new BABYLON.Color3(1, 1, 1);
    mat.specularPower = 100000000;
    mat.ambientColor = new BABYLON.Color3(0.23, 0.90, 0.53);
    mat.emissiveColor = new BABYLON.Color3(1, 1, 1);
    mat.alpha = 1;
    return mat;
}

function createGrass(scene, id) {
    image = "grass.jpg";
    var grass = createMaterial(scene, image);
    return grass;
}

function createFace(scene, id) {
    image = "face.png";
    var face = createMaterial(scene, image);
    return face;
}

function createMushroom() {
    image = "mushroom.jpg";
    var mushroom = createMaterial(scene, image);
    return mushroom;
}