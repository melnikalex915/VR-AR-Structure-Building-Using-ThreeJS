function loadhatChannel() {
    for (var i = 0; i <= max_vsupport_nos; i++) {
        var hatC = new hatChannel(i).init();
        basicStructure.add(hatC.mesh3);
        basicStructure.add(hatC.mesh4);
        basicStructure.add(hatC.mesh5);
        basicStructure.add(hatC.mesh6);
    }
}
var hatChannel = function(n) {
    var _this = this;
    this.init = function() {
        var geometry = new three.BoxGeometry(2.5, 1.5, -buildingConfig.l + 0.1);
        var material = createSteelMaterial();
        material.side = three.DoubleSide;
        this.mesh3 = new three.Mesh(geometry, material);
        this.mesh4 = new three.Mesh(geometry, material);
        this.mesh5 = new three.Mesh(geometry, material);
        this.mesh6 = new three.Mesh(geometry, material);
        this.updateMesh();
        return this
    };
    this.updateMesh = function() {
        var zScale = (buildingConfig.l) / (iniLength);
        var staticValue = 5;
        var widthVal = (buildingConfig.w / 2);
        var nos = parseInt((widthVal) / (max_vsupport_width * 12));
        var unit_space = (widthVal) / (nos + 1);
        var posx = (n * unit_space) + staticValue - 0.5;
        var posnx = -posx;
        if ((posx < widthVal) && buildingConfig.RoofSyle == AFrameRoof && buildingConfig.RoofOrientation == VOrientation) {
            _this.mesh3.visible = true;
            _this.mesh4.visible = true;
        } else {
            _this.mesh3.visible = false;
            _this.mesh4.visible = false;
        }
        _this.mesh5.visible = false;
        _this.mesh6.visible = false;
        if (buildingConfig.RoofSyle == AFrameRoof && buildingConfig.RoofOrientation == VOrientation) {
            _this.mesh5.visible = true;
            _this.mesh6.visible = true;
        }
        var d_from_corner = widthVal - posx;
        var vh = (d_from_corner / 4 + buildingConfig.h) - 1;
        var d = widthVal - (buildingConfig.w / 2 - 2.5);
        var h = (d / 4 + buildingConfig.h) - 1;
        _this.mesh3.scale.z = zScale;
        _this.mesh3.position.set(posx, vh + 1.25, -buildingConfig.l / 2);
        _this.mesh4.scale.z = zScale;
        _this.mesh4.position.set(posnx, vh + 1.25, -buildingConfig.l / 2);
        _this.mesh5.scale.z = zScale;
        _this.mesh5.position.set(buildingConfig.w / 2 - 1.75, h + 1.25, -buildingConfig.l / 2);
        _this.mesh6.scale.z = zScale;
        _this.mesh6.position.set(-(buildingConfig.w / 2 - 1.75), h + 1.25, -buildingConfig.l / 2);
        _this.mesh5.rotation.z = -toRadians(14);
        _this.mesh6.rotation.z = toRadians(14);
        _this.mesh3.rotation.z = -toRadians(14);
        _this.mesh4.rotation.z = toRadians(14);
    };
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(orientationChange, this.updateMesh);
};