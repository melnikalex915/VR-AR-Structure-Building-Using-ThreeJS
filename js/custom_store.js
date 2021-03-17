var globals = {};
var max_vsupport_width = 5.0;
var heightChange = "1";
var widthChange = "2";
var lengthChange = "3";
var slideChange = "4";
var legheightChange = "5";
var orientationChange = "6";
var sideWallChange = "7";
var frontWallChange = "8";
var roofStyleChange = "9";
var sidewallOrientationChange = "10";
var endwallOrientationChange = "11";
var gaugeChange = "12";
var stateChange = "13";
var floorChange = "14";
var showDimensions = "15";
var roofColorChange = "16";
var endwallColourChange = "17";
var sidewallColorChange = "18";
var trimColorChange = "19";
var rightleantoAdd = "20";
var rightleantoHeightChange = "21";
var rightleantoWidthChange = "22";
var rightleantoDropChange = "23";
var rightleantoCut1 = "24";
var rightleantoCut2 = "25";
var leftleantoAdd = "26";
var leftleantoHeightChange = "27";
var leftleantoWidthChange = "28";
var leftleantoDropChange = "29";
var leftleantoCut1 = "30";
var leftleantoCut2 = "31";
var frontleantoAdd = "32";
var frontleantoHeightChange = "33";
var frontleantoWidthChange = "34";
var frontleantoDropChange = "35";
var frontleantoCut1 = "36";
var frontleantoCut2 = "37";
var backleantoAdd = "38";
var backleantoHeightChange = "39";
var backleantoWidthChange = "40";
var backleantoDropChange = "41";
var backleantoCut1 = "42";
var backleantoCut2 = "43";
var frontrightWrap = "44";
var frontleftWrap = "45";
var backrightWrap = "46";
var backleftWrap = "47";
var screwTypeChange = "48";
var insulationTypeChange = "49";
var anchorsTypeChange = "50";
var extraTrussCountChange = "51";
var extraSheetCountChange = "52";
var leantoRoofOrientation = "53";
var wainscotOnChange = "54";
var wainscotColorChange = "55";
var ltsideWallChange = "56";
var ltendWallChange = "57";
var leantoOrientationChange = "58";
var ridgeColorChange = "59";
var ltwainscotOnChange = "60";
var ltwainscotColorChange = "61";
var encloseBuildingChange = "62";
var alphalImg;
var concreteImg;
var VOrientation = 1;
var HOrientation = 0;
var screwTypeMetal = 0;
var screwTypeColour = 1;
var noInsulation = 0;
var roofInsulation = 1;
var fullInsulation = 2;
var sidesInsulation = 3;
var endsInsulation = 4;
var anchorsConcrete = 1;
var anchorsMobileHome = 2;
var anchorsAsphalt = 3;
var max_vsupport_nos = parseInt(widthoptions[0] / max_vsupport_width);
var wallClosed = 0;
var wallopen = 1;
var wallGable = 2;
var overhang = 6;
var overhangFB = 6;
var wallPartial = 3;
var AFrameRoof = 0;
var StandardRoof = 1;
var drag_obj_id = null;
var cos14 = 0.9701425;
var sin14 = 0.24253562503;
var roundy = 16;
var roundx = 8;
var clearance = 12;
var trussList = [];
var views = [
    {
        left: 0,
        bottom: 0,
        width: 1,
        height: 1.0,
        background: new three.Color( 0.5, 0.5, 0.7 ),
        eye: [ 0, 67, 200 ],
        up: [ 1, 0, 0 ],
        fov: 75,
        updateCamera: function ( camera, scene) {
            camera.lookAt( scene.position );
        }
    },
    {//Front
        left: 0,
        bottom: 0.8,
        width: 0.25,
        height: 0.2,
        background: new three.Color( 0.7, 0.5, 0.5 ),
        eye: [ 0, 67, 200 ],
        up: [ 0, 0, 0 ],
        fov: 75,
        updateCamera: function ( camera, scene) {
            camera.lookAt( scene.position );
        }
    },
    {//Back
        left: 0.25,
        bottom: 0.8,
        width: 0.25,
        height: 0.2,
        background: new three.Color( 0.5, 0.7, 0.7 ),
        eye: [ 0, 67, -400 ],
        up: [ 0, 1, 0 ],
        fov: 75,
        updateCamera: function ( camera, scene) {
            sc_pos = scene.position;
            //sc_pos.z += buildingConfig.l;
            camera.lookAt( sc_pos );
        }
    },
    {//Left
        left: 0.5,
        bottom: 0.8,
        width: 0.25,
        height: 0.2,
        background: new three.Color( 0.7, 0.5, 0.5 ),
        eye: [ 344, 67, -120 ],
        up: [ 0, 0, 1 ],
        fov: 75,
        updateCamera: function ( camera, scene) {
            sc_pos = scene.position;
            camera.lookAt( sc_pos );
        }
    },
    {//Right
        left: 0.75,
        bottom: 0.8,
        width: 0.25,
        height: 0.2,
        background: new three.Color( 0.5, 0.7, 0.7 ),
        eye: [ -344, 67, -120 ],
        up: [ 0, 0, 0 ],
        fov: 75,
        updateCamera: function ( camera, scene) {
            camera.lookAt( scene.position );
        }
    }
];

function getHex(name) {
    for (i = 0; i < color.length; i++) {
        if (name == color[i].name) {
            return color[i].hex;
        }
    }
    return false
}
var Colours = {
    "barn-red": {
        "hex": (getHex("barn-red") ? getHex("barn-red") : "#943D2C"),
        "vurl": templateUrl + "/img/barn-red.png",
        "hurl": templateUrl + "/img/barn-red-v.png",
        "display": "Barn Red"
    },
    "evergreen": {
        "hex": (getHex("evergreen") ? getHex("evergreen") : "#243d2d"),
        "vurl": templateUrl + "/img/evergreen.png",
        "hurl": templateUrl + "/img/evergreen-v.png",
        "display": "Evergreen",
    },
    "earthbrown": {
        "hex": (getHex("earthbrown") ? getHex("earthbrown") : "#513B30"),
        "vurl": templateUrl + "/img/earth-brown.png",
        "hurl": templateUrl + "/img/earth-brown-v.png",
        "display": "Earth Brown",
    },
    "clay": {
        "hex": (getHex("clay") ? getHex("clay") : "#967C63"),
        "vurl": templateUrl + "/img/clay-v.png",
        "hurl": templateUrl + "/img/clay.png",
        "display": "Clay",
    },
    "black": {
        "hex": (getHex("black") ? getHex("black") : "#151515"),
        "vurl": templateUrl + "/img/black.png",
        "hurl": templateUrl + "/img/black-v.png",
        "display": "Black",
    },
    "quaker-gray": {
        "hex": (getHex("quaker-gray") ? getHex("quaker-gray") : "#575146"),
        "vurl": templateUrl + "/img/quaker-gray.png",
        "hurl": templateUrl + "/img/quaker-gray-v.png",
        "display": "Quaker Gray",
    },
    "burgundy": {
        "hex": (getHex("burgundy") ? getHex("burgundy") : "#472628"),
        "vurl": templateUrl + "/img/burgundy.png",
        "hurl": templateUrl + "/img/burgundy-v.png",
        "display": "Burgundy",
    },
    "pebble-beige": {
        "hex": (getHex("pebble-beige") ? getHex("pebble-beige") : "#C8AB6D"),
        "vurl": templateUrl + "/img/pebble-beige.png",
        "hurl": templateUrl + "/img/pebble-beige-v.png",
        "display": "Pebble Beige",
    },
    "pewter-gray": {
        "hex": (getHex("pewter-gray") ? getHex("pewter-gray") : "#8C857A"),
        "vurl": templateUrl + "/img/pewter-gray.png",
        "hurl": templateUrl + "/img/pewter-gray-v.png",
        "display": "Pewter Gray",
    },
    "rawhide": {
        "hex": (getHex("rawhide") ? getHex("rawhide") : "#C29E6D"),
        "vurl": templateUrl + "/img/rawhide.png",
        "hurl": templateUrl + "/img/rawhide-v.png",
        "display": "Rawhide",
    },
    "slateblue": {
        "hex": (getHex("slateblue") ? getHex("slateblue") : "#697785"),
        "vurl": templateUrl + "/img/slateblue.png",
        "hurl": templateUrl + "/img/slateblue-v.png",
        "display": "Slate Blue",
    },
    "white": {
        "hex": (getHex("white") ? getHex("white") : "#c9c9c9"),
        "vurl": templateUrl + "/img/white.png",
        "hurl": templateUrl + "/img/white-v.png",
        "display": "White",
    }
};
wallObjects = [];
collisionObjects = [];

function createMeshPhongMaterial(color, texture) {
    var conf = {
        roughness: 0.5,
        metalness: 0.5,
        flatShading: true,
    };
    if (color != null) {
        conf.color = color;
    }
    if (texture != null) {
        conf.map = texture;
    }
    return new three.MeshStandardMaterial(conf);
}

function createSteelMaterial(color, roughness, metalness) {
    var color = color || 0xafafaf;
    var roughness = roughness || 0.6;
    var metalness = metalness || 0.9;
    var loader = new three.CubeTextureLoader();
    loader.crossOrigin = '';
    var urls = [templateUrl + "/img/top_side.png", templateUrl + "/img/top_side.png", templateUrl + "/img/top_side.png", templateUrl + "/img/top_side.png", templateUrl + "/img/top_side.png", templateUrl + "/img/top_side.png"];
    loader.setCrossOrigin(this.crossOrigin);
    var cubemap = loader.load(urls);
    return new three.MeshStandardMaterial({
        color: color,
        envMap: cubemap,
        roughness: roughness,
        metalness: metalness
    });
}

function EventHandler() {
    this.handlers = {};
    this.handlers[floorChange] = {
        common: []
    };
    this.handlers[frontrightWrap] = {
        common: []
    };
    this.handlers[frontleftWrap] = {
        common: []
    };
    this.handlers[backrightWrap] = {
        common: []
    };
    this.handlers[backleftWrap] = {
        common: []
    };
    this.handlers[rightleantoHeightChange] = {
        common: []
    };
    this.handlers[rightleantoAdd] = {
        common: []
    };
    this.handlers[rightleantoWidthChange] = {
        common: []
    };
    this.handlers[rightleantoDropChange] = {
        common: []
    };
    this.handlers[rightleantoCut1] = {
        common: []
    };
    this.handlers[rightleantoCut2] = {
        common: []
    };
    this.handlers[backleantoHeightChange] = {
        common: []
    };
    this.handlers[backleantoAdd] = {
        common: []
    };
    this.handlers[backleantoWidthChange] = {
        common: []
    };
    this.handlers[backleantoDropChange] = {
        common: []
    };
    this.handlers[backleantoCut1] = {
        common: []
    };
    this.handlers[backleantoCut2] = {
        common: []
    };
    this.handlers[frontleantoHeightChange] = {
        common: []
    };
    this.handlers[frontleantoAdd] = {
        common: []
    };
    this.handlers[frontleantoWidthChange] = {
        common: []
    };
    this.handlers[frontleantoDropChange] = {
        common: []
    };
    this.handlers[frontleantoCut1] = {
        common: []
    };
    this.handlers[frontleantoCut2] = {
        common: []
    };
    this.handlers[leftleantoCut1] = {
        common: []
    };
    this.handlers[leftleantoCut2] = {
        common: []
    };
    this.handlers[leftleantoHeightChange] = {
        common: []
    };
    this.handlers[leftleantoDropChange] = {
        common: []
    };
    this.handlers[leftleantoAdd] = {
        common: []
    };
    this.handlers[leftleantoWidthChange] = {
        common: []
    };
    this.handlers[leantoRoofOrientation] = {
        common: []
    };
    this.handlers[trimColorChange] = {
        common: []
    };
    this.handlers[roofColorChange] = {
        common: []
    };
    this.handlers[sidewallColorChange] = {
        common: []
    };
    this.handlers[endwallColourChange] = {
        common: []
    };
    this.handlers[stateChange] = {
        common: []
    };
    this.handlers[gaugeChange] = {
        common: []
    };
    this.handlers[heightChange] = {
        common: []
    };
    this.handlers[widthChange] = {
        common: []
    };
    this.handlers[legheightChange] = {
        common: []
    };
    this.handlers[slideChange] = {
        common: []
    };
    this.handlers[lengthChange] = {
        common: []
    };
    this.handlers[orientationChange] = {
        common: []
    };
    this.handlers[sideWallChange] = {
        common: []
    };
    this.handlers[frontWallChange] = {
        common: []
    };
    this.handlers[roofStyleChange] = {
        common: []
    };
    this.handlers[sidewallOrientationChange] = {
        common: []
    };
    this.handlers[endwallOrientationChange] = {
        common: []
    };
    this.handlers[showDimensions] = {
        common: []
    };
    this.handlers[screwTypeChange] = {
        common: []
    };
    this.handlers[insulationTypeChange] = {
        common: []
    };
    this.handlers[anchorsTypeChange] = {
        common: []
    };
    this.handlers[extraTrussCountChange] = {
        common: []
    };
    this.handlers[extraSheetCountChange] = {
        common: []
    };
    this.handlers[wainscotOnChange] = {
        common: []
    };
    this.handlers[wainscotColorChange] = {
        common: []
    };
    this.handlers[ltsideWallChange] = {
        common: []
    };
    this.handlers[ltendWallChange] = {
        common: []
    };
    this.handlers[leantoOrientationChange] = {
        common: []
    };
    this.handlers[ridgeColorChange] = {
        common: []
    };
    this.handlers[ltwainscotOnChange] = {
        common: []
    };
    this.handlers[ltwainscotColorChange] = {
        common: []
    };
    this.handlers[encloseBuildingChange] = {
        common: []
    };
    var _this = this;
    this.addEventListener = function(event_name, listnerFn, key) {
        if (key) {
            this.handlers[event_name][key] = listnerFn;
        } else {
            this.handlers[event_name]["common"].push(listnerFn)
        }
    };
    this.removeEventListener = function(event_name, key) {
        delete this.handlers[event_name][key]
    };
    this.dispatchEvent = function(eventName) {
        var callbackCount = Object.keys(this.handlers[eventName]).length - 1 + this.handlers[eventName].common.length;
        var completedCount = 0;
        for (key in this.handlers[eventName]) {
            if (key == "common") {
                this.handlers[eventName]["common"].forEach(function(fn) {
                    if (fn != undefined) {
                        fn();
                        completedCount++;
                        if (completedCount == callbackCount) {
                            _this.finally()
                        }
                    }
                });
            } else {
                this.handlers[eventName][key]();
                completedCount++;
                if (completedCount == callbackCount) {
                    _this.finally();
                }
            }
        }
        if (callbackCount == 0) {
            _this.finally();
        }
    };
    this.finally = function() {
    }
}
var eventHandler = new EventHandler();

function get_orientation_img(color, orientation, source) {
    if (source == 0) {
        orientationkey = 'himg';
        if (orientation == VOrientation) {
            orientationkey = 'vimg';
        }
        return Colours[color][orientationkey];
    } else if (source == 1) {
        orientationkey = 'vimg';
        if (orientation == VOrientation) {
            orientationkey = 'himg';
        }
        return Colours[color][orientationkey];
    }
}

function get_orientation_url(color, orientation, source) {
    if (source == 0) {
        orientationkey = 'hurl';
        if (orientation == VOrientation) {
            orientationkey = 'vurl';
        }
        return Colours[color][orientationkey];
    } else if (source == 1) {
        orientationkey = 'vurl';
        if (orientation == VOrientation) {
            orientationkey = 'hurl';
        }
        return Colours[color][orientationkey];
    }
    if (source == 2) {
        orientationkey = 'hex';
        return Colours[color][orientationkey];
    }
}

if (!buildingConfig) {
    buildingConfig = {
        w: 12 * 12,
        h: 8 * 12,
        l: 20 * 12,
        gauge: 14,
        texture: 'default',
        RoofOrientation: HOrientation,
        RoofSyle: StandardRoof,
        LeftsideWallOption: wallopen,
        leftsideWallSheetCount: 0,
        RightsideWallOption: wallopen,
        rightsideWallSheetCount: 0,
        FrontsideWallOption: wallopen,
        BacksideWallOption: wallopen,
        sideWallOrientation: HOrientation,
        endWallOrientation: HOrientation,
        ltLeftsideWallOption: wallopen,
        ltleftsideWallSheetCount: 0,
        ltRightsideWallOption: wallopen,
        ltrightsideWallSheetCount: 0,
        leantoWallOrientation: HOrientation,
        ltFrontsideWallOption: wallopen,
        ltfrontsideWallSheetCount: 0,
        ltBacksideWallOption: wallopen,
        ltbacksideWallSheetCount: 0,
        rightPartial: false,
        leftPartial: false,
        frontPartial: false,
        backPartial: false,
        trimColor: "slateblue",
        frwrap: null,
        flwrap: null,
        brwrap: null,
        blwrap: null,
        roofColour: "evergreen",
        sideWallColour: "earthbrown",
        endWallColour: "earthbrown",
        ridgeColour: "slateblue",
        screwType: screwTypeMetal,
        insulation: noInsulation,
        leantoRoofOrientation: HOrientation,
        anchors: {
            type: null,
            numbers: 0
        },
        extraTrussCount: 0,
        leftwainscotOption: null,
        rightwainscotOption: null,
        frontwainscotOption: null,
        backwainscotOption: null,
        wainscotColor: "quaker-gray",
        ltleftwainscotOption: null,
        ltrightwainscotOption: null,
        ltfrontwainscotOption: null,
        ltbackwainscotOption: null,
        ltwainscotColor: "quaker-gray",
        extraSheetCount: {
            21: 0,
            26: 0,
            31: 0
        },
        addons: {
            "door": [],
            "window": [],
            "rollup": [],
            "doorfr": [],
            "rollfr": []
        },
        addonsObj: {
            "door": [],
            "window": [],
            "rollup": [],
            "doorfr": [],
            "rollfr": []
        },
        rightlt: {
            leanTo: null,
            legheight: 9 * 12,
            ltowidth: 12 * 12,
            drop: 0,
            cut1: 0,
            cut2: 0
        },
        leftlt: {
            leanTo: null,
            legheight: 9 * 12,
            ltowidth: 12 * 12,
            drop: 0,
            cut2: 0,
            cut1: 0
        },
        frontlt: {
            leanTo: null,
            legheight: 9 * 12,
            ltowidth: 12 * 12,
            drop: 0,
            cut2: 0,
            cut1: 0
        },
        backlt: {
            leanTo: null,
            legheight: 9 * 12,
            ltowidth: 12 * 12,
            drop: 0,
            cut2: 0,
            cut1: 0
        }
    };
}

var iniHeight = buildingConfig.h;
var iniLength = buildingConfig.l;
var iniWidth = buildingConfig.w;
var iniRCut2 = buildingConfig.rightlt.cut2;
var iniRCut1 = buildingConfig.rightlt.cut1;
var iniLCut2 = buildingConfig.leftlt.cut2;
var iniLCut1 = buildingConfig.leftlt.cut1;
var iniFCut2 = buildingConfig.frontlt.cut2;
var iniFCut1 = buildingConfig.frontlt.cut1;
var iniBCut2 = buildingConfig.backlt.cut2;
var iniBCut1 = buildingConfig.backlt.cut1;
var inirltlegheight = buildingConfig.rightlt.legheight;
var inirltWidth = buildingConfig.rightlt.ltowidth;
var inifltlegheight = buildingConfig.frontlt.legheight;
var inifltWidth = buildingConfig.frontlt.ltowidth;
var inibltlegheight = buildingConfig.backlt.legheight;
var inibltWidth = buildingConfig.backlt.ltowidth;
var inifDrop = buildingConfig.frontlt.drop;
var inibDrop = buildingConfig.backlt.drop;
var inillegheight = buildingConfig.leftlt.legheight;
var inilltWidth = buildingConfig.leftlt.ltowidth;
var buildingComponents = {};
var textures = {
    roof: {},
    wall: {}
};
var sky;
var land;

function onbackgroundChange() {
    var e = document.getElementById("background_option");
    var parseval = parseInt(e.options[e.selectedIndex].value);
    var skyTexture = globals.textureLoader.load(backgrounds[parseval]['sky']);
    skyTexture.repeat.set(1, 1);
    sky.material.map = skyTexture;
    sky.material.needsUpdate = true;
    var landTexture = globals.textureLoader.load(backgrounds[parseval]['land']);
    landTexture.wrapS = landTexture.wrapT = three.RepeatWrapping;
    landTexture.offset.set(0, 0);
    landTexture.repeat.set(1000, 1000);
    land.material.map = landTexture;
    land.material.needsUpdate = true;
}

function loadSky() {
    var skyTexture;
    var skyGeo = new three.SphereBufferGeometry(1000, 250, 250, 0, Math.PI * 2, 0, Math.PI / 2);
    if (backgrounds.length) {
        skyTexture = globals.textureLoader.load(backgrounds[defBackgroundIndex]["sky"]);
    } else {
        skyTexture = globals.textureLoader.load(templateUrl + "/img/tuba-city-sky-360.jpg");
    }
    skyTexture.repeat.set(1, 1);
    var material = new three.MeshPhongMaterial({
        map: skyTexture,
    });
    sky = new three.Mesh(skyGeo, material);
    sky.material.side = three.BackSide;
    globals.mainObj.add(sky);
}

function loadLand() {
    var landGeo = new three.PlaneBufferGeometry(100000, 100000, 1, 1);
    var texture;
    if (backgrounds.length) {
        texture = globals.textureLoader.load(backgrounds[defBackgroundIndex]["land"]);
    } else {
        texture = globals.textureLoader.load(templateUrl + "/img/land.jpeg");
    }
    texture.wrapS = texture.wrapT = three.RepeatWrapping;
    texture.repeat.set(1000, 1000);
    var material = new three.MeshPhongMaterial({
        map: texture
    });
    land = new three.Mesh(landGeo, material);
    land.material.side = three.BackSide;
    land.rotation.x = Math.PI / 2;
    globals.mainObj.add(land);
}

function loadAfroof() {
    var roofGroup = new three.Group();
    basicStructure.add(roofGroup);
    var rsf = new roofSide("Front").init();
    var rsb = new roofSide("Back").init();
    var srsf = new HroofSide("Front").init();
    var srsb = new HroofSide("Back").init();
    var boxRoofLeft = new boxRoof("Left").init();
    var boxRoofRight = new boxRoof("Right").init();
    var rc = new ridgeCap().init();
    var fgable = new boxEndWall('Front').init();
    var bgable = new boxEndWall("Back").init();
    loadTruess(roofGroup, AFrameRoof);
    roofGroup.add(rc.mesh);
    roofGroup.add(rsf.mesh);
    roofGroup.add(rsb.mesh);
    roofGroup.add(srsf.mesh);
    roofGroup.add(srsb.mesh);
    roofGroup.add(boxRoofLeft.mesh);
    roofGroup.add(boxRoofRight.mesh);
    roofGroup.add(fgable.mesh);
    roofGroup.add(bgable.mesh);
    wallObjects.push(fgable.mesh);
    wallObjects.push(bgable.mesh);
    var updategroup = function () {
        roofGroup.visible = buildingConfig.RoofSyle == AFrameRoof;
    };
    updategroup();
    eventHandler.addEventListener(roofStyleChange, updategroup)
}

function loadSroof() {
    var roofGroup = new three.Group();
    var trussGroup = new three.Group();
    basicStructure.add(roofGroup);
    roofGroup.add(trussGroup);
    var srtl = new SRoofTop("Left").init();
    var srtr = new SRoofTop("Right").init();
    var srsrf = new SRoofSide("Right", "Front").init();
    var srslf = new SRoofSide("Left", "Front").init();
    var srsrb = new SRoofSide("Right", "Back").init();
    var srslb = new SRoofSide("Left", "Back").init();
    loadTruess(trussGroup, StandardRoof);
    wsewf = new SEndWall("Front").init();
    wsewb = new SEndWall("Back").init();
    roofGroup.add(wsewf.mesh);
    roofGroup.add(wsewb.mesh);
    roofGroup.add(srtl.mesh);
    roofGroup.add(srtr.mesh);
    roofGroup.add(srslf.mesh);
    roofGroup.add(srsrf.mesh);
    roofGroup.add(srslb.mesh);
    roofGroup.add(srsrb.mesh);
    wallObjects.push(wsewf.mesh);
    wallObjects.push(wsewb.mesh);
    var updategroup = function () {
        roofGroup.visible = buildingConfig.RoofSyle == StandardRoof;
    };
    updategroup();
    eventHandler.addEventListener(roofStyleChange, updategroup)
}

function loadTruess(mgroup, RoofSyle) {
    var iteration = parseInt(lengthOptions[0] / 5) + 1;
    tgroup = new three.Group();
    mgroup.add(tgroup);
    for (var i = 0; i < iteration; i++) {
        var truss = STruss;
        if (RoofSyle == AFrameRoof) {
            truss = ATruss;
        }
        var zval = -2.5;
        if (i > 0) {
            zval = i * -60;
        }
        var bzval = zval + 1.25;
        var tr = new truss(i);
        tr.init();
        trussList.push(tr);
        tgroup.add(tr.mesh);
        var leftbrace = new AbracesSide(i, "Left").init();
        tgroup.add(leftbrace.mesh);
        var rightbraces = new AbracesSide(i, "Right").init();
        tgroup.add(rightbraces.mesh);
        var mbrace = new AbraceMiddle(i).init();
        tgroup.add(mbrace.mesh);
    }
    var bl = new baseLine("Left");
    bl.init();
    var br = new baseLine("Right");
    br.init();
    tgroup.add(br.mesh);
    tgroup.add(bl.mesh);
}

function loadBasicStructure() {
    basicStructure = new three.Group();
    basicStructure.translateY(0);
    globals.mainObj.add(basicStructure);
    loadAfroof();
    loadSroof();
    loadWalls();
    loadleantoWalls();
    //loadVSupport();
    loadhatChannel();
    loadenclosedTrim();
    loadWainscot();
    loadSideTrim();
    loadcopyrightImage();
}

function loadWainscot() {
    var lwc = new SideWainscot("Left").init();
    var rwc = new SideWainscot("Right").init();
    var fwc = new EndWainscot("Front").init();
    var bwc = new EndWainscot("Back").init();
    globals.mainObj.add(lwc.mesh1);
    globals.mainObj.add(rwc.mesh1);
    globals.mainObj.add(fwc.mesh1);
    globals.mainObj.add(bwc.mesh1);
    wallObjects.push(lwc.mesh1);
    wallObjects.push(rwc.mesh1);
    wallObjects.push(fwc.mesh1);
    wallObjects.push(bwc.mesh1);
    var lp = new sidePartialWall("Left").init();
    var rp = new sidePartialWall("Right").init();
    var fp = new endPartialWall("Front").init();
    var bp = new endPartialWall("Back").init();
    globals.mainObj.add(lp.mesh1);
    globals.mainObj.add(rp.mesh1);
    globals.mainObj.add(fp.mesh1);
    globals.mainObj.add(bp.mesh1);
    wallObjects.push(lp.mesh1);
    wallObjects.push(rp.mesh1);
    wallObjects.push(fp.mesh1);
    wallObjects.push(bp.mesh1);
    var lwst = new wainscotTrim("left").init();
    var rwst = new wainscotTrim("right").init();
    var fwst = new wainscotTrim("front").init();
    var bwst = new wainscotTrim("back").init();
    globals.mainObj.add(lwst.mesh);
    globals.mainObj.add(rwst.mesh);
    globals.mainObj.add(fwst.mesh);
    globals.mainObj.add(bwst.mesh);
}

function loadHSupport() {
    var hSupport = new HSupport().init();
    globals.mainObj.add(hSupport.mesh2);
    globals.mainObj.add(hSupport.mesh1);
    globals.mainObj.add(hSupport.mesh3);
    globals.mainObj.add(hSupport.mesh4);
}

function loadBaseObj() {
    var basicObj = new baseObj().init();
    globals.mainObj.add(basicObj.mesh);
}

function reloadBasicStructure() {
    globals.mainObj.remove(basicStructure);
    disposeHierarchy(basicStructure, disposeNode);
    loadBasicStructure();
}

function loadenclosedTrim() {
    var enTrim = new enclosedTrim().init();
    globals.mainObj.add(enTrim.mesh1);
    globals.mainObj.add(enTrim.mesh2);
    globals.mainObj.add(enTrim.mesh3);
    globals.mainObj.add(enTrim.mesh4);
    var raftrim = new AFrametrim("right").init();
    var lafrtim = new AFrametrim("left").init();
    globals.mainObj.add(lafrtim.mesh);
    globals.mainObj.add(raftrim.mesh);
    var fbar = new gableBars("front").init();
    var bbar = new gableBars("back").init();
    globals.mainObj.add(fbar.mesh);
    globals.mainObj.add(bbar.mesh);
}

function loadSideTrim() {
    for (i = 1; i < 4; i++) {
        var lvTrim = new sideTrims(i, "Left").init();
        var rvTrim = new sideTrims(i, "Right").init();
        var fvTrim = new endTrims(i, "Front").init();
        var bvTrim = new endTrims(i, "Back").init();
        globals.mainObj.add(lvTrim.mesh);
        globals.mainObj.add(rvTrim.mesh);
        globals.mainObj.add(lvTrim.mesh1);
        globals.mainObj.add(rvTrim.mesh1);
        globals.mainObj.add(fvTrim.mesh);
        globals.mainObj.add(bvTrim.mesh);
    }
}

function loadcopyrightImage() {
    var fcpy = new copyrightImage("Front").init();
    var bcpy = new copyrightImage("Back").init();
    var dcpy = new copyrightImage("Down").init();
    globals.mainObj.add(fcpy.mesh);
    globals.mainObj.add(bcpy.mesh);
    globals.mainObj.add(dcpy.mesh1);
}

function init() {
    globals.scene = new three.Scene();
    three.Cache.enabled = true;
    globals.mainObj = new three.Object3D;
    globals.scene.add(globals.mainObj);
    globals.renderer = new three.WebGLRenderer({
        alpha: true,
        antialias: true,
        preserveDrawingBuffer: true
    });
    globals.renderer.sortObjects = true;
    globals.container = document.getElementById("tool-holder");
    globals.bodyContainer = document.getElementById("body");
    width = $(globals.container).innerWidth();
    height = $(globals.container).innerHeight();
    globals.renderer.setSize(width, height);
    globals.container.appendChild(globals.renderer.domElement);
    globals.camera = new three.PerspectiveCamera(75, width / height, 10, 2000);

    globals.camera.position.set(0, 67, 200);
    globals.controls = new three.OrbitControls(globals.camera, globals.container);
    globals.controls.panSpeed = .9;
    globals.controls.enableDamping = false;
    globals.controls.target.set(0, 10, -20);
    globals.controls.maxPolarAngle = (Math.PI / 2) - 0.05;
    globals.controls.maxDistance = 800;
    globals.controls.minDistance = 2;
    globals.controls.zoomSpeed = .5;
    globals.controls.target.set(0, buildingConfig.h / 2, buildingConfig.l / -2);
    globals.controls.enableKeys = false;
    globals.controls.minPolarAngle = 0;
    globals.controls.dampingFactor = 0.03;
    globals.controls.rotateSpeed = 0.9;
    globals.controls.update();
    globals.scene.add(globals.camera);
    globals.light = new three.HemisphereLight(0xffffff, 0xffffff, 0.7);
    globals.light.position.set(1, 10000, 1);
    globals.light.castShadow = true;
    globals.scene.add(globals.light);

    globals.renderer.render(globals.scene, globals.camera);
    globals.textureLoader = new three.TextureLoader();
    globals.textureLoader.crossOrigin = '';
    for (var colour in Colours) {
        Colours[colour].vimg = globals.textureLoader.load(Colours[colour].vurl);
        Colours[colour].himg = globals.textureLoader.load(Colours[colour].hurl);
    }
    loadBaseObj();
    loadHSupport();
    loadBasicStructure();
    loadLeantos();
    loadAddons();
    container = document.getElementById("tool-holder");
    container.addEventListener('mousemove', MouseMoved, false);
    container.addEventListener('mouseup', mouseup, false);
    container.addEventListener("touchmove", MouseMoved, false);
    container.addEventListener("touchleave", mouseup, false);
    concreteImg = globals.textureLoader.load(templateUrl + "/img/concrete.jpg");
    alphalImg = globals.textureLoader.load(templateUrl + "/img/alphal.jpg");
    eventHandler.addEventListener(heightChange, setPartialWallInpLeftMaxValue);
    setPartialWallInpLeftMaxValue();
    var directionalLight1 = new three.DirectionalLight(0xffffff, 0.2);
    directionalLight1.castShadow = true;
    directionalLight1.position.set(1, 1, 1);
    globals.scene.add(directionalLight1);
    var directionalLight1 = new three.DirectionalLight(0xffffff, 0.2);
    directionalLight1.castShadow = true;
    directionalLight1.position.set(1, 1, -1);
    globals.scene.add(directionalLight1);
    var directionalLight1 = new three.DirectionalLight(0xffffff, 0.2);
    directionalLight1.castShadow = true;
    directionalLight1.position.set(1, -1, 1);
    globals.scene.add(directionalLight1);
    var directionalLight1 = new three.DirectionalLight(0xffffff, 0.2);
    directionalLight1.castShadow = true;
    directionalLight1.position.set(1, -1, -1);
    globals.scene.add(directionalLight1);
    var directionalLight1 = new three.DirectionalLight(0xffffff, 0.2);
    directionalLight1.castShadow = true;
    directionalLight1.position.set(-1, 1, 1);
    globals.scene.add(directionalLight1);
    var directionalLight1 = new three.DirectionalLight(0xffffff, 0.2);
    directionalLight1.castShadow = true;
    directionalLight1.position.set(-1, 1, -1);
    globals.scene.add(directionalLight1);
    var directionalLight1 = new three.DirectionalLight(0xffffff, 0.2);
    directionalLight1.castShadow = true;
    directionalLight1.position.set(-1, -1, 1);
    globals.scene.add(directionalLight1);
    var directionalLight1 = new three.DirectionalLight(0xffffff, 0.2);
    directionalLight1.castShadow = true;
    directionalLight1.position.set(-1, -1, -1);
    globals.scene.add(directionalLight1);

    /*
    for ( var ii = 0; ii < views.length; ++ ii ) {
        var subview = views[ ii ];
        var sub_camera = globals.camera.clone();
        sub_camera.position.fromArray( subview.eye );
        //sub_camera.up.fromArray( subview.up );
        //subview.camera = sub_camera;
        //globals.scene.add(subview.camera);
    }
    */

    $("#door").attr('disabled', true);
    $("#door").addClass('door-disable');
    $("#door_frameout").attr('disabled', true);
    $("#door_frameout").addClass('door-disable');
    $("#roll_frameout").attr('disabled', true);
    $("#roll_frameout").addClass('door-disable');
    $("#rollup").attr('disabled', true);
    $("#rollup").addClass('door-disable');
    $("#window").attr('disabled', true);
    $("#window").addClass('door-disable');
}

function setPartialWallInpLeftMaxValue() {
    var maxNumber = Math.ceil(buildingConfig.h / (3 * 12));
    document.getElementById("partial_wall_inp_left").setAttribute("max", maxNumber);
    document.getElementById("partial_wall_inp_right").setAttribute("max", maxNumber);
}

function loadAddons() {
    for (var label in buildingConfig.addons) {
        buildingConfig.addons[label].forEach(function(addon) {
            var dob = new DragableObject(label, addon.w, addon.h, addon.p).init();
            dob.addToScreen();
            collisionObjects.push(dob.mesh);
            trussList.forEach(function(child) {
                child.updateMesh();
            });
        });
    }
}

function loadline() {
    var material = new three.LineBasicMaterial({
        color: 0x0000ff
    });
    var geometry = new three.Geometry();
    geometry.vertices.push(new three.Vector3(-500, 10, -252), new three.Vector3(500, 10, -252), );
    var line = new three.Line(geometry, material);
    globals.mainObj.add(line);
}

function Ageometry(vertices, faces, dynamic) {
    dynamic = dynamic || false;
    var geometry = new three.Geometry();
    vertices.forEach(function(v) {
        vector = new three.Vector3(v[0], v[1], v[2]);
        geometry.vertices.push(vector);
    });
    faces.forEach(function(v) {
        face = new three.Face3(v[0], v[1], v[2]);
        geometry.faces.push(face);
    });
    geometry.dynamic = dynamic;
    computeUVs(geometry);
    return geometry;
}

function modelShape(points) {
    this.shape = new three.Shape();
    this.shape.moveTo(points[0][0], points[0][1]);
    for (var i = 1; i < points.length; i++) {
        this.shape.lineTo(points[i][0], points[i][1]);
    }
    this.shape.lineTo(points[0][0], points[0][1]);
}

function toDegrees(angle) {
    return angle * (180 / Math.PI);
}

function toRadians(angle) {
    return angle * (Math.PI / 180);
}

function take_picture() {
    var img_tag = window.document.getElementById('take-images');
    img_tag.innerHTML = '';
    for ( var jj = 1; jj < views.length; jj++ ) {
        var view = views[ jj ];
        var camera = view.camera;
        if (jj == 1) {
            setFrontside();
        } else if (jj == 2) {
            setBackside();
        } else if (jj == 3) {
            setLeftside();
        } else if (jj == 4) {
            setRightside();
        }
        updateWallTransparency_simple();
        camera = globals.camera.clone();

        globals.renderer.render( globals.scene, camera );
        var divElement = document.createElement('div');
        divElement.classList.add("col-sm-3");
        divElement.classList.add("nopadding");
        var img = new Image();
        img.src = globals.renderer.domElement.toDataURL();
        img.classList.add('static-img');
        divElement.appendChild(img);
        img_tag.appendChild(divElement);
    }
}

function animate() {
    requestAnimationFrame(animate);
    updateWallTransparency_simple();
    TWEEN.update();
    globals.controls.update();
    globals.renderer.render(globals.scene, globals.camera);
    for ( var jj = 1; jj < views.length; jj++ ) {
        var view = views[ jj ];
        var camera = view.camera;
        if (!camera) {
            if (jj == 1) {
                setFrontside();
            } else if (jj == 2) {
                setBackside();
            } else if (jj == 3) {
                setLeftside();
            } else if (jj == 4) {
                setRightside();
            }
            camera = globals.camera.clone();
            view.camera = camera;
        }
    }
    $('.preloader').css('display', 'none');
}

function computeUVs(geometry) {
    geometry.computeBoundingBox();
    var max = geometry.boundingBox.max,
        min = geometry.boundingBox.min;
    var offset = new three.Vector2(0 - min.x, 0 - min.y);
    var range = new three.Vector2(max.x - min.x, max.y - min.y);
    var faces = geometry.faces;
    var vertices = geometry.vertices;
    geometry.faceVertexUvs[0] = [];
    for (var i = 0, il = faces.length; i < il; i++) {
        var v1 = vertices[faces[i].a],
            v2 = vertices[faces[i].b],
            v3 = vertices[faces[i].c];
        geometry.faceVertexUvs[0].push([
            new three.Vector2((v1.x + offset.x) / range.x, (v1.y + offset.y) / range.y),
            new three.Vector2((v2.x + offset.x) / range.x, (v2.y + offset.y) / range.y),
            new three.Vector2((v3.x + offset.x) / range.x, (v3.y + offset.y) / range.y)]);
    }
    geometry.uvsNeedUpdate = true;
}

function roofSide(side) {
    var _this = this;
    this.side = side;
    this.init = function() {
        points = [
            [-1 * (cos14 + buildingConfig.w / 2 + .5), buildingConfig.h - sin14 - 2.57],
            [-1 * (cos14 + buildingConfig.w / 2 + .5), buildingConfig.h - sin14],
            [0, buildingConfig.h + buildingConfig.w / 8],
            [cos14 + buildingConfig.w / 2 + .5, buildingConfig.h - sin14],
            [cos14 + buildingConfig.w / 2 + .5, buildingConfig.h - sin14 - 2.57],
            [0, buildingConfig.h + buildingConfig.w / 8 - 2.57]
        ];
        modelShape.call(this, points);
        var extrudeSettings = {
            amount: 5,
            bevelEnabled: true,
            bevelSegments: 0,
            steps: 1,
            bevelSize: 0,
            bevelThickness: 1
        };
        var geometry = new three.ExtrudeGeometry(this.shape, extrudeSettings);
        geometry.dynamic = true;
        geometry.colorsNeedUpdate = true;
        var material = createMeshPhongMaterial(Colours[buildingConfig.trimColor].hex);
        this.mesh = new three.Mesh(geometry, material);
        _this.mesh.visible = false;
        if (buildingConfig.RoofOrientation == VOrientation) {
            _this.mesh.visible = true;
        }
        if (this.side == "Back") {
            _this.mesh.position.set(0, 0, (buildingConfig.l + 5) * -1);
        } else {
            _this.mesh.translateZ(.25);
        }
        eventHandler.addEventListener(heightChange, this.onHeightChange);
        eventHandler.addEventListener(widthChange, this.onWidthChange);
        eventHandler.addEventListener(lengthChange, this.onLengthChange);
        eventHandler.addEventListener(orientationChange, this.onHeightChange);
        eventHandler.addEventListener(trimColorChange, this.changeColour);
        eventHandler.addEventListener(roofStyleChange, this.onHeightChange);
        return this
    };
    this.updatey = function() {
        var v = _this.mesh.geometry.vertices;
        var bch = buildingConfig.h - .5;
        if (buildingConfig.RoofOrientation == VOrientation) {
            bch = bch + 1.5;
        }
        v[0].y = v[8].y = v[4].y = v[10].y = bch - sin14;
        v[1].y = v[7].y = v[3].y = v[11].y = bch - sin14 - 2.57;
        v[5].y = v[9].y = bch + buildingConfig.w / 8 - 0.0;
        v[6].y = v[2].y = bch + buildingConfig.w / 8 - 2.57;
    };
    this.updatex = function() {
        var v = _this.mesh.geometry.vertices;
        v[3].x = v[11].x = v[4].x = v[10].x = -1 * (cos14 + buildingConfig.w / 2) - .5;
        v[0].x = v[1].x = v[7].x = v[8].x = cos14 + buildingConfig.w / 2 + .5;
    };
    this.updatez = function() {
        if (this.side == "Back") {
            _this.mesh.position.set(0, 0, (buildingConfig.l + 5) * -1);
        }
    };
    this.onHeightChange = function() {
        _this.updatey();
        _this.mesh.visible = false;
        if (buildingConfig.RoofOrientation == VOrientation) {
            _this.mesh.visible = true;
        }
        _this.mesh.geometry.verticesNeedUpdate = true;
    };
    this.onWidthChange = function() {
        _this.updatex();
        _this.updatey();
        _this.mesh.geometry.verticesNeedUpdate = true;
    };
    this.onLengthChange = function() {
        _this.updatez();
        _this.mesh.geometry.verticesNeedUpdate = true;
    };
    this.changeColour = function() {
        _this.mesh.material.color = new three.Color(get_orientation_url(buildingConfig.trimColor, null, 2));
    };
}

function HroofSide(side) {
    var _this = this;
    this.side = side;
    this.init = function() {
        points = [
            [-1 * (cos14 + buildingConfig.w / 2 + 4.5), buildingConfig.h - sin14 - 3.25],
            [-1 * (cos14 + buildingConfig.w / 2 + 4.5), buildingConfig.h - sin14 + 1],
            [0, buildingConfig.h + buildingConfig.w / 8 + 1.5],
            [cos14 + buildingConfig.w / 2 + 4.5, buildingConfig.h - sin14 + 1],
            [cos14 + buildingConfig.w / 2 + 4.5, buildingConfig.h - sin14 - 3.25],
            [0, buildingConfig.h + buildingConfig.w / 8 - 3.25]
        ];
        modelShape.call(this, points);
        var extrudeSettings = {
            amount: 2,
            bevelEnabled: true,
            bevelSegments: 0,
            steps: 1,
            bevelSize: 0,
            bevelThickness: 1
        };
        var geometry = new three.ExtrudeGeometry(this.shape, extrudeSettings);
        geometry.dynamic = true;
        geometry.colorsNeedUpdate = true;
        var material = createMeshPhongMaterial(Colours[buildingConfig.trimColor].hex);
        this.mesh = new three.Mesh(geometry, material);
        _this.mesh.visible = false;
        if (buildingConfig.RoofOrientation == HOrientation) {
            _this.mesh.visible = true;
        }
        if (this.side == "Back") {
            _this.mesh.position.set(0, 0, (buildingConfig.l + 7) * -1);
        } else {
            _this.mesh.translateZ(5);
        }
        eventHandler.addEventListener(heightChange, this.onHeightChange);
        eventHandler.addEventListener(widthChange, this.onWidthChange);
        eventHandler.addEventListener(lengthChange, this.onLengthChange);
        eventHandler.addEventListener(orientationChange, this.onHeightChange);
        eventHandler.addEventListener(trimColorChange, this.changeColour);
        eventHandler.addEventListener(roofStyleChange, this.onHeightChange);
        return this
    };
    this.updatey = function() {
        var v = _this.mesh.geometry.vertices;
        var bch = buildingConfig.h - .5;
        if (buildingConfig.RoofOrientation == VOrientation) {
            bch = bch + 1.5;
        }
        v[0].y = v[8].y = v[4].y = v[10].y = bch - sin14 + 1.5;
        v[1].y = v[7].y = v[3].y = v[11].y = bch - sin14 - 3.25;
        v[5].y = v[9].y = bch + buildingConfig.w / 8 - 0.0 + 1.5;
        v[6].y = v[2].y = bch + buildingConfig.w / 8 - 3.25;
    };
    this.updatex = function() {
        var v = _this.mesh.geometry.vertices;
        v[3].x = v[11].x = v[4].x = v[10].x = -1 * (cos14 + buildingConfig.w / 2) - 4.5;
        v[0].x = v[1].x = v[7].x = v[8].x = cos14 + buildingConfig.w / 2 + 4.5;
    };
    this.updatez = function() {
        _this.mesh.position.set(0, 0, 5);
        if (this.side == "Back") {
            _this.mesh.position.set(0, 0, (buildingConfig.l + 7) * -1);
        }
    };
    this.onHeightChange = function() {
        _this.updatey();
        _this.mesh.visible = false;
        if (buildingConfig.RoofOrientation == HOrientation) {
            _this.mesh.visible = true;
        }
        _this.mesh.geometry.verticesNeedUpdate = true;
    };
    this.onWidthChange = function() {
        _this.updatex();
        _this.updatey();
        _this.mesh.geometry.verticesNeedUpdate = true;
    };
    this.onLengthChange = function() {
        _this.updatez();
        _this.mesh.geometry.verticesNeedUpdate = true;
    };
    this.changeColour = function() {
        _this.mesh.material.color = new three.Color(get_orientation_url(buildingConfig.trimColor, null, 2));
    };
}

function STruss(i) {
    var _this = this;
    this.init = function() {
        var geometry = this.getGeometry();
        var material = createSteelMaterial();
        this.mesh = new three.Mesh(geometry, material);
        this.updateMesh();
        return this;
    };
    this.updateMesh = function() {
        var n = Math.ceil(buildingConfig.l / (5 * 12));
        var unit_space = (buildingConfig.l / n);
        _this.posz = -i * unit_space;
        if (i == 0) {
            _this.posz = -2.5;
        }
        _this.mesh.position.z = _this.posz;
        _this.updateVisible();
        _this.mesh.geometry = _this.getGeometry();
        globals.controls.target.set(0, buildingConfig.h / 2, buildingConfig.l / -2);
    };
    this.updateVisible = function() {
        if (_this.posz < -buildingConfig.l) {
            _this.mesh.visible = false;
        } else {
            _this.mesh.visible = true;
        }
    };
    this.getGeometry = function() {
        var shape = new three.Shape();
        var ry = roundy;
        var rx = roundx;
        var fineAdjestment = 0.5;
        var cutsections = checkforSideWallIntersection(_this);
        shape.moveTo(-1 * buildingConfig.w / 2 + fineAdjestment, cutsections[0]);
        shape.lineTo(-1 * buildingConfig.w / 2 + fineAdjestment, buildingConfig.h);
        shape.bezierCurveTo(-1 * buildingConfig.w / 2 + fineAdjestment,
            buildingConfig.h + ry / 3, -1 * buildingConfig.w / 2 + fineAdjestment, buildingConfig.h + 2 * ry / 3,
            -1 * buildingConfig.w / 2 + rx, buildingConfig.h + ry - fineAdjestment);

        shape.lineTo(0, (buildingConfig.w / 2 - rx) / 4 + ry + buildingConfig.h - fineAdjestment);
        shape.lineTo(buildingConfig.w / 2 - rx, buildingConfig.h + ry - fineAdjestment);
        shape.bezierCurveTo(buildingConfig.w / 2 - fineAdjestment,
            buildingConfig.h + 2 * ry / 3, buildingConfig.w / 2 - fineAdjestment, buildingConfig.h + ry / 3,
            buildingConfig.w / 2 - fineAdjestment, buildingConfig.h - fineAdjestment);

        shape.lineTo(buildingConfig.w / 2, cutsections[1]);
        shape.lineTo(buildingConfig.w / 2 - 2.5, cutsections[1]);
        shape.lineTo(buildingConfig.w / 2 - 2.5, buildingConfig.h - fineAdjestment);
        shape.bezierCurveTo(buildingConfig.w / 2 - 2.5, buildingConfig.h + ry / 3 - 1.5,
            buildingConfig.w / 2 - 2.5, buildingConfig.h + 2 * ry / 3 - 1.5, buildingConfig.w / 2 - rx,
            buildingConfig.h + ry - 2.57 - fineAdjestment);

        shape.lineTo(0, buildingConfig.h + ry + (buildingConfig.w / 2 - rx) / 4 - 2.57 - fineAdjestment);
        shape.lineTo(-1 * buildingConfig.w / 2 + rx, buildingConfig.h + ry - 2.57 - fineAdjestment);
        shape.bezierCurveTo(-1 * buildingConfig.w / 2 + 2.5, buildingConfig.h + 2 * ry / 3 - 1.5,
            -1 * buildingConfig.w / 2 + 2.5, buildingConfig.h + ry / 3 - 1.5, -1 * buildingConfig.w / 2 + 2.5,
            buildingConfig.h - fineAdjestment);

        shape.lineTo(-1 * buildingConfig.w / 2 + 2.5, cutsections[0]);
        var extrudeSettings = {
            amount: 2.5,
            bevelEnabled: false,
            bevelSegments: 0,
            steps: 1,
            bevelSize: 0,
            bevelThickness: 1
        };
        var geometry = new three.ExtrudeGeometry(shape, extrudeSettings);
        computeUVs(geometry);
        return geometry;
    };
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(sideWallChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function SEndWall(side) {
    side = side || "Front";
    this.side = side;
    var _this = this;
    this.init = function() {
        var geometry = this.getGeometry();
        var texture = globals.textureLoader.load();
        texture.wrapS = texture.wrapT = three.RepeatWrapping;
        texture.repeat.set(1, 3);
        var materials = [];
        var material = createMeshPhongMaterial(null, null);
        this.mesh = new three.Mesh(geometry, material);
        this.mesh.wid = "EndWall";
        this.mesh.swid = this.side;
        this.mesh.name = "SEndWall-" + side;
        this.mesh.wallInstance = this;
        this.updateMesh();
        return this;
    };
    this.translate = function() {
        var zl = 0;
        if (side == "Back") {
            zl = -buildingConfig.l - 0.125
        }
        var totH = buildingConfig.h + roundy + (buildingConfig.w / 2 - roundx) / 4;
        _this.mesh.position.set(0, totH / 2, zl);
    };
    this.updateMesh = function() {
        wallOption = _this.getwalloption();
        _this.mesh.visible = true;
        if (wallOption == wallopen) {
            _this.mesh.visible = false;
        }
        _this.mesh.geometry = _this.getGeometry();
        _this.updateTexture();
        _this.translate();
    };
    this.updateTexture = function() {
        var m;
        _this.side == "Front" ? m = 1 : m = -1;
        var white = new three.Color(Colours.white.hex);
        var clr = new THREE.Color(Colours[buildingConfig.endWallColour].hex);
        _this.mesh.geometry.faces.forEach(function(f) {
            if (m * f.normal.z < 0 && insideView) {
                f.color = white;
            } else {
                f.color = clr;
            }
        });
        _this.mesh.material.vertexColors = three.FaceColors;
    };
    this.getwalloption = function() {
        var wallOption = buildingConfig.FrontsideWallOption;
        if (side != "Front") {
            wallOption = buildingConfig.BacksideWallOption
        }
        return wallOption
    };
    this.getGeometry = function() {
        wallOption = _this.getwalloption();
        var shape = new three.Path();
        var ry = roundy;
        var rx = roundx;
        var fineAdjestment = 0;
        var totH = buildingConfig.h + roundy + (buildingConfig.w / 2 - roundx) / 4;
        if (wallOption == wallGable) {
            totH = roundy + (buildingConfig.w / 2 - roundx) / 4;
        }
        var bh = totH - (totH / 2) - roundy - (buildingConfig.w / 2 - roundx) / 4;
        if (0 && buildingConfig.endWallOrientation == VOrientation) {
            var geometry = new three.BoxGeometry(buildingConfig.w, totH, 0.1, buildingConfig.w * 10, 1, 1);
            geometry.vertices.forEach(function(v) {
                var xval = buildingConfig.w / 2 - Math.abs(v.x);
                if (xval < roundx && v.y > 0) {
                    v.y = bh + bcurvey(xval);
                } else if (v.y > 0) {
                    xval = xval - roundx;
                    v.y = bh + roundy + xval / 4;
                }
                var xval = v.x + buildingConfig.w / 2;
                var m;
                _this.side == "Front" ? m = 1 : m = -1;
                if ((xval % 9) < 0.75 || (xval % 9) > 8.25) {
                    var mid = parseInt(xval / 9) * 9;
                    var l = 0.75 - (mid - xval);
                    v.z = v.z + m * 0.75 * Math.sin(l * Math.PI / 1.5);
                } else if (xval % 3 < 0.25 || (xval % 3) > 2.75) {
                    var mid = parseInt(xval / 3) * 3;
                    var l = 0.25 - (mid - xval);
                    v.z = v.z + m * 0.25 * Math.sin(l * Math.PI / 0.5);
                }
            });
        } else {
            var ct = {
                l: 1,
                r: 1
            };
            var geometry = new three.BoxGeometry(buildingConfig.w, totH, 0.1, 1, totH * 10, 1, 1);
            geometry.vertices.forEach(function(v) {
                var ck = "r";
                if (v.x < 0) {
                    ck = "l"
                }
                if (v.y >= bh && v.y <= bh + roundy) {
                    while (ct[ck] >= 0) {
                        var pval = bcurvexy(ct[ck]);
                        if (bh + pval[1] <= v.y) {
                            if (v.x < 0) {
                                v.x = -buildingConfig.w / 2 + pval[0];
                            } else {
                                v.x = buildingConfig.w / 2 - pval[0];
                            }
                            break
                        } else {
                            ct[ck] = ct[ck] - 0.01;
                        }
                    }
                } else if (v.y > bh + roundy) {
                    yval = v.y - (bh + roundy);
                    if (v.x < 0) {
                        v.x = -buildingConfig.w / 2 + roundx + yval * 4;
                    } else {
                        v.x = buildingConfig.w / 2 - roundx - yval * 4;
                    }
                }
                var yval = v.y + totH / 2;
                var m;
                _this.side == "Front" ? m = 1 : m = -1;
                if ((yval % 9) < 0.75 || (yval % 9) > 8.25) {
                    var mid = parseInt(yval / 9) * 9;
                    var l = 0.75 - (mid - yval);
                    v.z = v.z + m * 0.75 * Math.sin(l * Math.PI / 1.5);
                } else if (yval % 3 < 0.25 || (yval % 3) > 2.75) {
                    var mid = parseInt(yval / 3) * 3;
                    var l = 0.25 - (mid - yval);
                    v.z = v.z + m * 0.25 * Math.sin(l * Math.PI / 0.5);
                }
                if (wallOption == wallGable) {
                    v.y = v.y + buildingConfig.h / 2;
                }
            });
        }
        computeUVs(geometry);
        return geometry
    };
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(endwallColourChange, this.updateMesh);
    eventHandler.addEventListener(endwallOrientationChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function bcurvey(x) {
    var t = Math.pow(x / 8, 1 / 3);
    var y = (3 * (1 - t) * (1 - t) * t * 5.33) + (3 * 10.66 * (1 - t) * t * t) + (t * t * t * 16);
    return y
}

function bcurvexy(t) {
    var x = 8 * t * t * t;
    var y = (3 * (1 - t) * (1 - t) * t * 5.33) + (3 * 10.66 * (1 - t) * t * t) + (t * t * t * 16);
    return [x, y]
}

function AbracesSide(i, side) {
    var _this = this;
    var aangle = 38;
    var bangle = 76 - aangle;
    var cangle = 90 - aangle;
    var dlength = 12;
    var cos_aangle = Math.cos(toRadians(aangle));
    var sin_aangle = Math.sin(toRadians(aangle));
    var tan_bangle = Math.tan(toRadians(bangle));
    var sin_cangle = Math.sin(toRadians(cangle));
    var cos_cangle = Math.sin(toRadians(cangle));
    var brace_hypot = dlength * cos_aangle + dlength * sin_aangle / tan_bangle;
    this.updateVisible = function() {
        if (_this.posz < -1 * buildingConfig.l || (buildingConfig.FrontsideWallOption == 0 && this.posz == -1.25) || (buildingConfig.BacksideWallOption == 0 && buildingConfig.l == parseInt(-_this.posz / 57) * 60)) {
            _this.mesh.visible = false;
        } else {
            _this.mesh.visible = true;
        }
        if (buildingConfig.FrontsideWallOption == 2 && this.posz == -1.25) {
            _this.mesh.visible = false;
        }
        if (buildingConfig.BacksideWallOption == 2 && buildingConfig.l == parseInt(-_this.posz / 57) * 60) {
            _this.mesh.visible = false;
        }
    };
    this.init = function() {
        var boxgeo = new three.BoxGeometry(dlength * cos_aangle + dlength * sin_aangle / tan_bangle, 2.5, 2.5);
        var material = createSteelMaterial();
        this.mesh = new three.Mesh(boxgeo, material);
        if (side == "Left") {
            this.mesh.rotateZ(toRadians(cangle));
        } else {
            this.mesh.rotateZ(toRadians(-1 * cangle));
        }
        this.updateMesh();
        return this;
    };
    this.updateMesh = function() {
        var m = 1;
        if (side == "Left") {
            m = -1;
        }
        var n = Math.ceil(buildingConfig.l / (5 * 12));
        var unit_space = (buildingConfig.l / n);
        _this.posz = -i * unit_space + 1.25;
        if (i == 0) {
            _this.posz = -1.25;
        }
        var ytranslate = ytranslate = buildingConfig.h + brace_hypot * sin_cangle * 0.5 - 0.25;
        if (buildingConfig.RoofSyle == AFrameRoof) {
            ytranslate = buildingConfig.h - dlength + brace_hypot * sin_cangle * 0.5 - 1.25;
        }
        _this.mesh.position.set(m * (buildingConfig.w / 2 - brace_hypot * cos_cangle * 0.5), ytranslate, _this.posz);
        _this.updateVisible();
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function AbraceMiddle(i) {
    var _this = this;
    var dlength = 36;
    var flag;
    this.init = function() {
        var boxgeo = _this.getGeometry();
        var material = createSteelMaterial();
        this.mesh = new three.Mesh(boxgeo, material);
        this.mesh.geometry.verticesNeedUpdate = true;
        this.mesh.geometry.dynamic = true;
        this.updateMesh();
        return this
    };
    this.getGeometry = function() {
        dlength = 36;
        if (buildingConfig.w / 12 >= 20 && buildingConfig.w / 12 <= 24) {
            dlength = 72;
        }
        if (buildingConfig.w / 12 > 25) {
            dlength = 144;
        }
        var geo = new three.BoxGeometry(dlength, 2.5, 2.5);
        return geo;
    };
    this.updateVisible = function() {
        if (_this.posz < -1 * buildingConfig.l || (buildingConfig.FrontsideWallOption == 0 && this.posz == -1.25) || (buildingConfig.BacksideWallOption == 0 && buildingConfig.l == parseInt(-_this.posz / 57) * 60)) {
            _this.mesh.visible = false;
        } else {
            _this.mesh.visible = true;
        }
        if (buildingConfig.FrontsideWallOption == 2 && _this.posz == -1.25) {
            _this.mesh.visible = false;
        }
        if (buildingConfig.BacksideWallOption == 2 && buildingConfig.l == parseInt(-_this.posz / 57) * 60) {
            _this.mesh.visible = false;
        }
    };
    this.updateMesh = function() {
        _this.mesh.geometry = _this.getGeometry();
        var n = Math.ceil(buildingConfig.l / (5 * 12));
        var unit_space = (buildingConfig.l / n);
        _this.posz = -i * unit_space + 1.25;
        if (i == 0) {
            _this.posz = -1.25;
        }
        var roofheight = buildingConfig.w / 8 + buildingConfig.h;
        if (buildingConfig.RoofSyle == StandardRoof) {
            roofheight = buildingConfig.h + ((buildingConfig.w / 2 - roundx) / 4) + roundy
        }
        _this.mesh.position.set(0, roofheight - ((dlength / 2) * (Math.tan(sin14))) - 1.5, _this.posz);
        _this.updateVisible();
        _this.mesh.updateMatrix();
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function ATruss(i) {
    var _this = this;
    this.getGeometry = function() {
        var cutsections = checkforSideWallIntersection(_this);
        var points = [
            [-1 * buildingConfig.w / 2 - .01, buildingConfig.h - 0.5 - 1 / 4],
            [0, buildingConfig.h + buildingConfig.w / 8],
            [buildingConfig.w / 2 + .01, buildingConfig.h - 0.5 - 1 / 4],
            [buildingConfig.w / 2, buildingConfig.h - 1 / 4 - 2.42],
            [buildingConfig.w / 2, buildingConfig.h - 2.57],
            [buildingConfig.w / 2, cutsections[1]],
            [buildingConfig.w / 2 - 2.5, cutsections[1]],
            [buildingConfig.w / 2 - 2.5, buildingConfig.h - 1.97],
            [0, buildingConfig.h + buildingConfig.w / 8 - 2.57],
            [-buildingConfig.w / 2 + 2.5, buildingConfig.h - 1.97],
            [-buildingConfig.w / 2 + 2.5, cutsections[0]],
            [-buildingConfig.w / 2, cutsections[0]],
            [-buildingConfig.w / 2, buildingConfig.h - 2.57],
            [-1 * buildingConfig.w / 2, buildingConfig.h - 1 / 4 - 2.42]
        ];
        modelShape.call(this, points);
        var extrudeSettings = {
            amount: 2.5,
            bevelEnabled: true,
            bevelSegments: 0,
            steps: 1,
            bevelSize: 0,
            bevelThickness: 1
        };
        var geometry = new three.ExtrudeGeometry(this.shape, extrudeSettings);
        geometry.dynamic = true;
        return geometry
    };
    this.init = function() {
        var material = createSteelMaterial();
        _this.mesh = new three.Mesh(this.getGeometry(), material);
        this.updateMesh();
    };
    this.updateMesh = function() {
        var n = Math.ceil(buildingConfig.l / (5 * 12));
        var unit_space = (buildingConfig.l / n);
        _this.posz = -i * unit_space;
        if (i == 0) {
            _this.posz = -2.5;
        }
        _this.mesh.geometry = _this.getGeometry();
        _this.mesh.position.z = _this.posz;
        _this.updateVisible();
        globals.controls.target.set(0, buildingConfig.h / 2, buildingConfig.l / -2);
    };
    this.updateVisible = function() {
        if (_this.posz < -1 * buildingConfig.l) {
            _this.mesh.visible = false;
        } else {
            _this.mesh.visible = true;
        }
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(orientationChange, this.updateMesh);
}

function baseLine(side) {
    side = side || "Left";
    this.side = side;
    var _this = this;
    this.init = function() {
        var points = [
            [0, 0],
            [buildingConfig.l, 0],
            [buildingConfig.l, 2.5],
            [0, 2.5],
        ];
        modelShape.call(this, points);
        var extrudeSettings = {
            amount: 2.5,
            bevelEnabled: true,
            bevelSegments: 0,
            steps: 1,
            bevelSize: 0,
            bevelThickness: 1
        };
        var geometry = new three.ExtrudeGeometry(this.shape, extrudeSettings);
        geometry.dynamic = true;
        var material = createSteelMaterial();
        this.mesh = new three.Mesh(geometry, material);
        this.mesh.rotation.y = Math.PI / 2;
        this.updatex()
    };
    this.updatex = function() {
        var trval = buildingConfig.w / 2 - 2.5;
        if (side == "Left") {
            trval = buildingConfig.w / 2 * -1;
        }
        this.mesh.position.set(trval, 0, 0);
    };
    this.updatez = function() {
        var v = _this.mesh.geometry.vertices;
        v[0].x = v[1].x = v[5].x = v[6].x = buildingConfig.l;
    };
    this.onWidthChange = function() {
        _this.updatex();
        _this.mesh.geometry.verticesNeedUpdate = true;
    };
    this.onLengthChange = function() {
        _this.updatez();
        _this.mesh.geometry.verticesNeedUpdate = true;
    };
    eventHandler.addEventListener(widthChange, this.onWidthChange);
    eventHandler.addEventListener(lengthChange, this.onLengthChange);
}

function boxRoof(side) {
    side = side || "Left";
    var _this = this;
    this.side = side;
    this.overhang = 6;
    this.init = function() {
        var geometry = new three.Geometry();
        var material = createMeshPhongMaterial(null, null);
        material.side = three.DoubleSide;
        this.mesh = new three.Mesh(geometry, material);
        this.updateMesh();
        return this
    };
    this.updateTexture = function() {
        var texture_url = get_orientation_url(buildingConfig.roofColour, buildingConfig.RoofOrientation, 0);
        if (_this.mesh.material.map == null || _this.mesh.material.map == undefined || !_this.mesh.material.map.image.src.includes(texture_url)) {
            _this.mesh.material.map = globals.textureLoader.load(texture_url);
            _this.mesh.material.map.wrapS = _this.mesh.material.map.wrapT = three.RepeatWrapping;
        }
        if (buildingConfig.RoofOrientation == HOrientation) {
            _this.mesh.material.map.repeat.set(parseInt(buildingConfig.w / 72), 1);
        } else {
            _this.mesh.material.map.repeat.set(1, parseInt(buildingConfig.l / 36));
        }
    };
    this.updateMesh = function() {
        var geometry = null;
        var yrotation = 0;
        var gwidth = this.overhang + buildingConfig.w / 1.9402;
        if (buildingConfig.RoofOrientation == HOrientation) {
            geometry = new three.BoxGeometry(gwidth, -0.1, buildingConfig.l + (2 * overhangFB), gwidth * 10, 1, 1);
            geometry.vertices.forEach(function(v) {
                var x_val = Math.abs(v.x);
                if ((x_val % 9) < 0.75 || (x_val % 9) > 8.25) {
                    var m = parseInt(x_val / 9) * 9;
                    var l = 0.75 - (m - x_val);
                    v.y = v.y + 0.75 * Math.sin(l * Math.PI / 1.5);
                } else if (x_val % 3 < 0.25 || (x_val % 3) > 2.75) {
                    var m = parseInt(x_val / 3) * 3;
                    var l = 0.25 - (m - x_val);
                    v.y = v.y + 0.25 * Math.sin(l * Math.PI / 0.5);
                }
            });
        } else {
            geometry = new three.BoxGeometry(gwidth, -0.1, buildingConfig.l + (overhangFB * 2), 1, 1, buildingConfig.l * 10);
            yrotation = Math.PI / 2;
            geometry.vertices.forEach(function(v) {
                var x_val = Math.abs(v.z);
                if ((x_val % 9) < 0.75 || (x_val % 9) > 8.25) {
                    var m = parseInt(x_val / 9) * 9;
                    var l = 0.75 - (m - x_val);
                    v.y = v.y + 0.75 * Math.sin(l * Math.PI / 1.5);
                } else if (x_val % 3 < 0.25 || (x_val % 3) > 2.75) {
                    var m = parseInt(x_val / 3) * 3;
                    var l = 0.25 - (m - x_val);
                    v.y = v.y + 0.25 * Math.sin(l * Math.PI / 0.5);
                }
            });
        }
        geometry.computeFaceNormals();
        geometry.computeVertexNormals();
        var white = new three.Color(Colours.white.hex);
        var clr = new three.Color(Colours[buildingConfig.roofColour].hex);
        geometry.faces.forEach(function(f, i) {
            if (f.normal.y > 0 && insideView) {
                f.color = white
            } else {
                f.color = clr;
            }
        });
        _this.mesh.geometry = geometry;
        _this.mesh.material.vertexColors = three.FaceColors;
        var m = 1;
        if (_this.side == "Left") {
            m = -1;
        }
        var wn = buildingConfig.w;
        var wo = iniWidth;
        var centerY = buildingConfig.h - sin14 * _this.overhang + (buildingConfig.w / 8 + sin14 * _this.overhang) / 2;
        var centerX = m * (cos14 * _this.overhang / 2 + buildingConfig.w / 4);
        if (buildingConfig.RoofOrientation == VOrientation) {
            centerY = centerY + 1.5;
        }
        var centerZ = buildingConfig.l / -2;
        _this.mesh.position.set(centerX, centerY, centerZ);
        _this.mesh.rotation.set(0, 0, -m * toRadians(14.03624));
        _this.mesh.updateMatrix();
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(orientationChange, this.updateMesh);
    eventHandler.addEventListener(roofColorChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
}

function baseObj() {
    var _this = this;
    this.init = function() {
        var geometry = new three.BoxGeometry((buildingConfig.w + 6), 2, buildingConfig.l + 6);
        var texture = globals.textureLoader.load(templateUrl + "/img/" + buildingConfig.texture + ".jpg");
        var material = new three.MeshLambertMaterial({
            map: texture
        });
        this.mesh = new three.Mesh(geometry, material);
        _this.mesh.visible = false;
        this.updateMesh();
        return this;
    };
    this.updateTexture = function() {
        var update_url = templateUrl + "/img/" + buildingConfig.texture + ".jpg";
        _this.mesh.visible = true;
        var matMap = null;
        if (buildingConfig.texture == "concrete") {
            matMap = concreteImg;
        } else if (buildingConfig.texture == "alphal") {
            matMap = alphalImg;
        } else if (buildingConfig.texture == "default") {
            _this.mesh.visible = false;
        }
        if (matMap) {
            _this.mesh.material.map = matMap;
            matMap.wrapS = matMap.wrapT = three.RepeatWrapping;
            matMap.repeat.set(parseInt(buildingConfig.w / 60), parseInt(buildingConfig.l / 60));
        }
    };
    this.updateMesh = function() {
        var centerZ = buildingConfig.l / -2;
        var centerX;
        _this.mesh.scale.x = (buildingConfig.w + 6) / (iniWidth + 6);
        _this.mesh.scale.z = (buildingConfig.l + 6) / (iniLength + 6);
        _this.mesh.position.set(0, 0, centerZ);
        _this.updateTexture();
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(floorChange, this.updateMesh);
}

function ridgeCap() {
    this.bgch = 1;
    this.bgcl = 6;
    var _this = this;
    this.init = function() {
        var bh = buildingConfig.w / 8 + buildingConfig.h + 1.5;
        var points = [
            [-this.bgcl, bh - this.bgcl / 4 + this.bgch, 6],
            [0, bh + this.bgch, 6],
            [this.bgcl, bh - this.bgcl / 4 + this.bgch, 6],
            [-this.bgcl, bh - this.bgcl / 4 + this.bgch, (buildingConfig.l + 6) * -1],
            [0, bh + this.bgch, (buildingConfig.l + 6) * -1],
            [this.bgcl, bh - this.bgcl / 4 + this.bgch, (buildingConfig.l + 6) * -1],
        ];
        var faces = [
            [0, 1, 3],
            [3, 4, 1],
            [1, 4, 5],
            [1, 2, 5]
        ];
        var ridgeCapGeo = Ageometry(points, faces, true);
        var material = createMeshPhongMaterial(Colours[buildingConfig.ridgeColour].hex, null);
        material.side = three.DoubleSide;
        this.mesh = new three.Mesh(ridgeCapGeo, material);
        this.onOrientationChange();
        return this;
    };
    this.onChange = function() {
        var v = _this.mesh.geometry.vertices;
        var bh = buildingConfig.w / 8 + buildingConfig.h + 1.5;
        v[0].y = v[2].y = v[3].y = v[5].y = bh - _this.bgcl / 4 + _this.bgch;
        v[1].y = v[4].y = bh + _this.bgch;
        v[3].z = v[4].z = v[5].z = -1 * (buildingConfig.l + 6);
        _this.mesh.geometry.verticesNeedUpdate = true;
    };
    this.onOrientationChange = function(e) {
        if (buildingConfig.RoofOrientation == VOrientation) {
            _this.mesh.visible = true;
        } else if (buildingConfig.RoofOrientation == HOrientation) {
            _this.mesh.visible = false;
        }
    };
    this.changeColour = function() {
        _this.mesh.material.color = new three.Color(get_orientation_url(buildingConfig.ridgeColour, null, 2));
    };
    eventHandler.addEventListener(widthChange, this.onChange);
    eventHandler.addEventListener(heightChange, this.onChange);
    eventHandler.addEventListener(lengthChange, this.onChange);
    eventHandler.addEventListener(orientationChange, this.onOrientationChange);
    eventHandler.addEventListener(roofStyleChange, this.onOrientationChange);
    eventHandler.addEventListener(ridgeColorChange, this.changeColour);
}

function disposeNode(node) {
    if (node instanceof three.Mesh) {
        if (node.geometry) {
            node.geometry.dispose();
        }
        if (node.material) {
            if (node.material instanceof three.MeshFaceMaterial) {
                $.each(node.material.materials, function(idx, mtrl) {
                    if (mtrl.map) mtrl.map.dispose();
                    if (mtrl.lightMap) mtrl.lightMap.dispose();
                    if (mtrl.bumpMap) mtrl.bumpMap.dispose();
                    if (mtrl.normalMap) mtrl.normalMap.dispose();
                    if (mtrl.specularMap) mtrl.specularMap.dispose();
                    if (mtrl.envMap) mtrl.envMap.dispose();
                    mtrl.dispose();
                });
            } else {
                if (node.material.map) node.material.map.dispose();
                if (node.material.lightMap) node.material.lightMap.dispose();
                if (node.material.bumpMap) node.material.bumpMap.dispose();
                if (node.material.normalMap) node.material.normalMap.dispose();
                if (node.material.specularMap) node.material.specularMap.dispose();
                if (node.material.envMap) node.material.envMap.dispose();
                node.material.dispose();
            }
        }
        node = undefined;
    }
}

function loadWalls() {
    var wgroup = new three.Group();
    basicStructure.add(wgroup);
    var swl = new SideWall("Left").init();
    var swr = new SideWall("Right").init();
    wgroup.add(swl.mesh);
    wgroup.add(swr.mesh);
    wallObjects.push(swl.mesh);
    wallObjects.push(swr.mesh);
}

function SideWall(side) {
    side = side || "Left";
    var _this = this;
    this.side = side;
    this.init = function() {
        var geometry = new three.BoxGeometry(0.1, buildingConfig.h - 1, buildingConfig.l);
        var material = createMeshPhongMaterial(null, null);
        this.mesh = new three.Mesh(geometry, material);
        this.mesh.wid = "SideWall";
        this.mesh.swid = this.side;
        this.mesh.name = "SideWall-" + this.side;
        this.mesh.wallInstance = this;
        this.onWalloptionChange(side)();
        this.updateMesh();
        return this
    };
    this.updateTexture = function() {
        var m;
        _this.side == "Left" ? m = 1 : m = -1;
        var white = new three.Color(Colours.white.hex);
        var clr = new three.Color(Colours[buildingConfig.sideWallColour].hex);
        _this.mesh.geometry.faces.forEach(function(f) {
            if (m * f.normal.x > 0 && insideView) {
                f.color = white;
            } else {
                f.color = clr;
            }
        });
        _this.mesh.material.vertexColors = three.FaceColors;
    };
    this.updateMesh = function() {
        var m = 1;
        var conf = buildingConfig.RightsideWallOption;
        var sheetCount = buildingConfig.rightsideWallSheetCount;
        var rotation = 0;
        if (_this.side == "Left") {
            m = -1;
            conf = buildingConfig.LeftsideWallOption;
            sheetCount = buildingConfig.leftsideWallSheetCount
        }
        if (conf == wallPartial) {
            var sheet_h = sheetCount * 1 * 12;
            if (buildingConfig.sideWallOrientation == HOrientation) {
                _this.mesh.geometry = new three.BoxGeometry(0.1, sheet_h, buildingConfig.l, 1, sheet_h * 10, 1);
            } else {
                rotation = Math.PI / 2;
                _this.mesh.geometry = new three.BoxGeometry(0.1, buildingConfig.l, sheet_h + 1, 1, (buildingConfig.l + 2.5) * 10, 1);
            }
            _this.mesh.position.set(m * buildingConfig.w / 2, buildingConfig.h - sheet_h / 2 - .2, -buildingConfig.l / 2);
            if (buildingConfig.RoofOrientation == VOrientation) {
                _this.mesh.position.y = buildingConfig.h - sheet_h / 2 + 1.4
            }
        } else {
            if (buildingConfig.sideWallOrientation == HOrientation) {
                _this.mesh.geometry = new three.BoxGeometry(0.1, buildingConfig.h - .5, buildingConfig.l, 1, buildingConfig.h * 10, 1);
                if (buildingConfig.RoofOrientation == VOrientation) {
                    _this.mesh.geometry = new three.BoxGeometry(0.1, buildingConfig.h + 1, buildingConfig.l, 1, buildingConfig.h * 10, 1);
                }
            } else {
                rotation = Math.PI / 2;
                _this.mesh.geometry = new three.BoxGeometry(0.1, buildingConfig.l, buildingConfig.h - .2, 1, buildingConfig.l * 10, 1);
                if (buildingConfig.RoofOrientation == VOrientation) {
                    _this.mesh.geometry = new three.BoxGeometry(0.1, buildingConfig.l, buildingConfig.h + 1.3, 1, buildingConfig.l * 10, 1);
                }
            }
            /*
            var shape = new three.Shape();
            shape.moveTo(0, 0);
            shape.lineTo(0,  0 - buildingConfig.h / 2);
            shape.lineTo(20.1, buildingConfig.h / 2);
            shape.lineTo(20.1, 0);
            shape.lineTo(0, 0);
            var extrudeSettings = {
                amount: buildingConfig.l,
                bevelEnabled: true,
                bevelSegments: buildingConfig.h * 10,
                steps: 2,
                bevelSize: 1,
                bevelThickness: 1
            };
            var geometry = new three.ExtrudeGeometry(shape, extrudeSettings);
            */
            //_this.mesh.geometry = geometry;
            //_this.mesh.position.set(m * buildingConfig.w / 2, buildingConfig.h / 2, -1 * (buildingConfig.l));
            _this.mesh.position.set(m * buildingConfig.w / 2, buildingConfig.h / 2, -1 * (buildingConfig.l) / 2);
            if (buildingConfig.RoofOrientation == VOrientation) {
                _this.mesh.position.y = buildingConfig.h / 2 + .9;
            }
        }
        _this.mesh.geometry.vertices.forEach(function(v) {
            dfromt = Math.abs(v.y);
            if (buildingConfig.sideWallOrientation == HOrientation) {
                dfromt = Math.abs(buildingConfig.h - v.y);
            }
            if (((dfromt % 9) < 0.75 || (dfromt % 9) > 8.25)) {
                var mid = parseInt(dfromt / 9) * 9;
                var l = 0.75 - (mid - dfromt);
                v.x = m * 0.75 * Math.sin(l * Math.PI / 1.5);
            } else if ((dfromt % 3 < 0.25 || (dfromt % 3) > 2.75)) {
                var mid = parseInt(dfromt / 3) * 3;
                var l = 0.25 - (mid - dfromt);
                v.x = m * 0.25 * Math.sin(l * Math.PI / 0.5);
            }
        });
        _this.mesh.material.vertexColors = three.FaceColors;
        _this.mesh.rotation.x = rotation;
        _this.onWalloptionChange(_this.side)();
        _this.mesh.updateMatrix();
        _this.updateTexture();
    };
    this.onWalloptionChange = function(side) {
        return function() {
            if (side == _this.side) {
                var sideval = buildingConfig.RightsideWallOption;
                if (side == "Left") {
                    sideval = buildingConfig.LeftsideWallOption;
                }
                _this.mesh.visible = (sideval == wallClosed || sideval == wallPartial);
            }
        }
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(sideWallChange, this.updateMesh);
    eventHandler.addEventListener(sidewallOrientationChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(sidewallColorChange, this.updateMesh);
    eventHandler.addEventListener(wainscotOnChange, this.updateMesh);
    eventHandler.addEventListener(orientationChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
    eventHandler.addEventListener(sideWallChange, this.updateMesh);
}

function boxEndWall(side) {
    var _this = this;
    side = side || "Front";
    this.side = side;
    var m;
    _this.side == "Front" ? m = 1 : m = -1;
    this.init = function() {
        var geometry = this.getGeometry();
        var material = createMeshPhongMaterial(null, null);
        this.mesh = new three.Mesh(geometry, material);
        var texture = globals.textureLoader.load();
        texture.wrapS = texture.wrapT = three.RepeatWrapping;
        texture.repeat.set(1, 3);
        this.mesh.wallInstance = this;
        this.mesh.wid = "EndWall";
        this.mesh.swid = this.side;
        this.mesh.name = "AEndWall-" + side;
        this.updateMesh();
        return this;
    };
    this.updateTexture = function() {
        var white = new three.Color(Colours.white.hex);
        var clr = new three.Color(Colours[buildingConfig.endWallColour].hex);
        _this.mesh.geometry.faces.forEach(function(f) {
            if (m * f.normal.z < 0 && insideView) {
                f.color = white;
            } else {
                f.color = clr;
            }
        });
        _this.mesh.material.vertexColors = three.FaceColors;
    };
    this.updateMesh = function() {
        var wallOption = buildingConfig.FrontsideWallOption;
        if (side != "Front") {
            wallOption = buildingConfig.BacksideWallOption
        }
        _this.mesh.visible = wallOption != wallopen;
        _this.mesh.geometry = _this.getGeometry();
        var zval;
        _this.side == "Front" ? zval = 0 : zval = -buildingConfig.l;
        _this.mesh.position.set(0, ((buildingConfig.w / 8) + buildingConfig.h) / 2, zval);
        _this.updateTexture()
    };
    this.getGeometry = function() {
        var baseh = buildingConfig.h - (buildingConfig.h + buildingConfig.w / 8) / 2;
        var wallOption = buildingConfig.FrontsideWallOption;
        if (side != "Front") {
            wallOption = buildingConfig.BacksideWallOption
        }
        var tot_h = (buildingConfig.w / 8) + buildingConfig.h;
        if (wallOption == wallGable) {
            tot_h = buildingConfig.w / 8;
            baseh = -tot_h / 2
        }
        if (buildingConfig.endWallOrientation == HOrientation) {
            var geometry = new three.BoxGeometry(buildingConfig.w, tot_h, 0.125, 1, tot_h * 10, 1);
            if (buildingConfig.RoofOrientation == VOrientation) {
                geometry = new three.BoxGeometry(buildingConfig.w, tot_h + 1.4, 0.125, 1, tot_h * 10, 1);
            }
            geometry.vertices.forEach(function(v, i) {
                if (v.y > baseh) {
                    var hval = v.y - baseh;
                    var xval = hval * 4;
                    if (v.x < 0) {
                        v.x = -buildingConfig.w / 2 + xval;
                    } else {
                        v.x = buildingConfig.w / 2 - xval;
                    }
                }
                var yval = Math.abs(v.y);
                if (((yval % 9) < 0.75 || (yval % 9) > 8.25)) {
                    var mid = parseInt(yval / 9) * 9;
                    var l = 0.75 - (mid - yval);
                    v.z = v.z + m * 0.75 * Math.sin(l * Math.PI / 1.5);
                } else if ((yval % 3 < 0.25 || (yval % 3) > 2.75)) {
                    var mid = parseInt(yval / 3) * 3;
                    var l = 0.25 - (mid - yval);
                    v.z = v.z + m * 0.25 * Math.sin(l * Math.PI / 0.5);
                }
                if (wallOption == wallGable) {
                    v.y = v.y + buildingConfig.h / 2;
                }
            });
        } else {
            var cor_h = tot_h - (tot_h / 2 + buildingConfig.w / 8);
            var geometry = new three.BoxGeometry(buildingConfig.w, tot_h, 0.125, buildingConfig.w * 10, 1, 1);
            geometry.vertices.forEach(function(v, i) {
                if (v.y > cor_h) {
                    var xval = buildingConfig.w / 2 - Math.abs(v.x);
                    var yval = xval / 4;
                    v.y = cor_h + yval;
                }
                var xv = Math.abs(v.x + buildingConfig.w / 2);
                if (((xv % 9) < 0.75 || (xv % 9) > 8.25)) {
                    var mid = parseInt(xv / 9) * 9;
                    var l = 0.75 - (mid - xv);
                    v.z = v.z + m * 0.75 * Math.sin(l * Math.PI / 1.5);
                } else if ((xv % 3 < 0.25 || (xv % 3) > 2.75)) {
                    var mid = parseInt(xv / 3) * 3;
                    var l = 0.25 - (mid - xv);
                    v.z = v.z + m * 0.25 * Math.sin(l * Math.PI / 0.5);
                }
                if (wallOption == wallGable) {
                    v.y = v.y + buildingConfig.h / 2;
                }
            });
        }
        return geometry;
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(endwallOrientationChange, this.updateMesh);
    eventHandler.addEventListener(endwallColourChange, this.updateMesh);
    eventHandler.addEventListener(wainscotOnChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(orientationChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
    eventHandler.addEventListener(sideWallChange, this.updateMesh);
}

function EndWall(side) {
    side = side || "Front";
    this.side = side;
    var _this = this;
    var zval = -1;
    if (side == "Front") {
        zval = 0
    }
    this.init = function() {
        var zl = zval * buildingConfig.l + (2 * zval + 1) * -6;
        var points = [
            [-buildingConfig.w / 2, buildingConfig.h, zl],
            [0, buildingConfig.h + buildingConfig.w / 8, zl],
            [buildingConfig.w / 2, buildingConfig.h, zl],
            [buildingConfig.w / 2, 0, zl],
            [-buildingConfig.w / 2, 0, zl],
            [-buildingConfig.w / 2, buildingConfig.h, zl - 0.1],
            [0, buildingConfig.h + buildingConfig.w / 8, zl - 0.1],
            [buildingConfig.w / 2, buildingConfig.h, zl - 0.1],
            [buildingConfig.w / 2, 0, zl - 0.1],
            [-buildingConfig.w / 2, 0, zl - 0.1],
        ];
        var faces = [
            [0, 1, 2],
            [0, 3, 2],
            [0, 4, 3],
            [5, 6, 7],
            [5, 8, 7],
            [5, 9, 8]
        ];
        var gable = Ageometry(points, faces, true);
        var material = createMeshPhongMaterial(null, null);
        material.side = three.DoubleSide;
        this.mesh = new three.Mesh(gable, material);
        this.mesh.wallInstance = this;
        this.mesh.wid = "EndWall";
        this.mesh.swid = this.side;
        this.mesh.name = "AEndWall-" + side;
        this.updateMesh();
        return this;
    };
    this.updateTexture = function() {
        if (_this.mesh.material.map == null || _this.mesh.material.map == undefined) {
            if (_this.mesh.material.map) {
                _this.mesh.material.map.dispose();
            }
            var texture = get_orientation_img(buildingConfig.endWallColour, buildingConfig.endWallOrientation, 1);
            _this.mesh.material.map = texture;
            _this.mesh.material.map.wrapS = _this.mesh.material.map.wrapT = three.RepeatWrapping;
        }
        if (buildingConfig.endWallOrientation == HOrientation) {
            _this.mesh.material.map.repeat.set(1, Math.ceil((buildingConfig.h + buildingConfig.w / 8) / 27));
        } else {
            _this.mesh.material.map.repeat.set(parseInt(buildingConfig.w / 27), 1);
        }
    };
    this.updateMesh = function() {
        var wallOption = buildingConfig.FrontsideWallOption;
        if (side != "Front") {
            wallOption = buildingConfig.BacksideWallOption
        }
        _this.mesh.visible = true;
        if (wallOption == wallopen) {
            _this.mesh.visible = false;
        }
        var v = _this.mesh.geometry.vertices;
        v[0].x = v[4].x = v[5].x = v[9].x = buildingConfig.w / -2;
        v[2].x = v[3].x = v[7].x = v[8].x = buildingConfig.w / 2;
        v[0].y = v[2].y = v[5].y = v[7].y = buildingConfig.h;
        v[3].y = v[4].y = v[8].y = v[9].y = 0;
        v[1].y = v[6].y = buildingConfig.h + buildingConfig.w / 8;
        var zl = -4.7;
        if (side != "Front") {
            zl = -1 * buildingConfig.l + 4.7
        }
        v[0].z = v[1].z = v[2].z = v[3].z = v[4].z = zl;
        v[5].z = v[6].z = v[7].z = v[8].z = v[9].z = zl - 1;
        if (wallOption == wallGable) {
            v[3].y = v[4].y = v[8].y = v[9].y = buildingConfig.h;
        }
        _this.mesh.geometry.verticesNeedUpdate = true;
        _this.mesh.geometry.computeFaceNormals();
        _this.mesh.geometry.computeBoundingBox();
        _this.mesh.geometry.computeBoundingSphere();
        _this.updateTexture();
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(endwallOrientationChange, this.updateTexture);
    eventHandler.addEventListener(endwallColourChange, this.updateMesh);
}

function SRoofSide(side, front) {
    side = side || "Left";
    front = front || "Front";
    var _this = this;
    this.init = function() {
        var material = createMeshPhongMaterial(Colours[buildingConfig.trimColor].hex);
        this.mesh = new three.Mesh(this.getGeometry(), material);
        this.updateMesh();
        return this;
    };
    this.getGeometry = function() {
        var m = -1;
        if (side == "Left") {
            m = 1;
        }
        var ry = roundy;
        var rx = roundx;
        var shape = new three.Shape();
        shape.moveTo(0, 0);
        shape.bezierCurveTo(0, ry / 3, 0, 2 * ry / 3, m * rx, ry);
        shape.lineTo(m * (buildingConfig.w / 2 - .75), (buildingConfig.w / 2 - rx) / 4 + ry);
        shape.lineTo(m * (buildingConfig.w / 2 - .75), (buildingConfig.w / 2 - rx) / 4 + ry - 2.57);
        shape.lineTo(m * rx, ry - 2.57);
        shape.bezierCurveTo(m * 2.5, 2 * ry / 3 - 1.5, m * 2.5, ry / 3 - 1.5, m * 2.5, 0);
        var extrudeSettings = {
            amount: 1,
            bevelEnabled: true,
            bevelSegments: 0,
            steps: 1,
            bevelSize: 1,
            bevelThickness: 1
        };
        var geometry = new three.ExtrudeGeometry(shape, extrudeSettings);
        geometry.colorsNeedUpdate = true;
        computeUVs(geometry);
        return geometry;
    };
    this.updateMesh = function() {
        var posx = buildingConfig.w / 2;
        if (side == "Left") {
            var posx = -1 * posx;
        }
        var posz = overhangFB;
        if (front == "Back") {
            posz = -(buildingConfig.l + overhangFB + 1)
        }
        _this.mesh.geometry = _this.getGeometry();
        _this.mesh.position.set(posx, buildingConfig.h, posz);
        _this.mesh.geometry.verticesNeedUpdate = true;
    };
    this.changeColour = function() {
        _this.mesh.material.color = new three.Color(get_orientation_url(buildingConfig.trimColor, null, 2));
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(trimColorChange, this.changeColour);
}

function SRoofTop(side) {
    side = side || "Left";
    var m = 1;
    if (side != "Left") {
        m = -1
    }
    var _this = this;
    this.init = function() {
        texture = globals.textureLoader.load();
        texture.wrapS = texture.wrapT = three.RepeatWrapping;
        texture.repeat.set(1, 10);
        var material = createMeshPhongMaterial(null, null);
        material.side = three.DoubleSide;
        this.mesh = new three.Group();
        this.mesh1 = new three.Mesh(this.getGeometry(), material);
        this.mesh2 = new three.Mesh(this.getBGeometry(), material);
        this.mesh2.rotateZ(toRadians(m * 14));
        this.mesh1.position.z = overhangFB;
        this.mesh2.position.set(roundx + (buildingConfig.w / 2 - roundx) / 2, roundy + ((buildingConfig.w / 2 - roundx) / 4) / 2, -buildingConfig.l / 2);
        this.mesh.add(this.mesh1);
        this.mesh.add(this.mesh2);
        this.updateMesh();
        return this;
    };
    this.getBGeometry = function() {
        var w = buildingConfig.w;
        var geometry = new three.BoxGeometry(.6 + ((w / 2 - roundx) / Math.cos(toRadians(14))), 0.1, buildingConfig.l + (overhangFB * 2), (w / 2 - roundx) * 10, 1, 1);
        geometry.vertices.forEach(function(v) {
            lpoint = (w / 2 - roundx) / -2;
            xval = v.x - lpoint + 9;
            if (((xval % 9) < 0.75 || (xval % 9) > 8.25)) {
                var mid = parseInt(xval / 9) * 9;
                var l = 0.75 - (mid - xval);
                v.y = v.y + 0.75 * Math.sin(l * Math.PI / 1.5);
            } else if ((xval % 3 < 0.25 || (xval % 3) > 2.75)) {
                var mid = parseInt(xval / 3) * 3;
                var l = 0.25 - (mid - xval);
                v.y = v.y + 0.25 * Math.sin(l * Math.PI / 0.5);
            }
        });
        var white = new three.Color(Colours.white.hex);
        var clr = new three.Color(Colours[buildingConfig.roofColour].hex);
        geometry.computeFaceNormals();
        geometry.computeVertexNormals();
        geometry.faces.forEach(function(f, i) {
            f.color = clr;
            if (f.normal.y < 0 && insideView) {
                f.color = white;
            }
        });
        return geometry
    };
    this.getGeometry = function() {
        var m = -1;
        if (side == "Left") {
            m = 1;
        }
        var rl = roundy + .6;
        var rw = roundx + .6;
        var shape = new three.Shape();
        shape.moveTo(0, -1);
        shape.bezierCurveTo(0, rl / 3, 0, 2 * rl / 3, m * rw, rl);
        shape.lineTo(m * rw, rl - 0.1);
        shape.bezierCurveTo(0, 2 * rl / 3, 0, rl / 3, m * 0.1, -1);
        var extrudeSettings = {
            curveSegments: 200,
            amount: -1 * (buildingConfig.l + (overhangFB * 2)),
            bevelEnabled: true,
            bevelSegments: 0,
            steps: 1,
            bevelSize: 0,
            bevelThickness: 1
        };
        var geometry = new three.ExtrudeGeometry(shape, extrudeSettings);
        computeUVs(geometry);
        geometry.vertices.forEach(function(v) {
            var len = Math.sqrt(v.x * v.x + v.y * v.y);
            if (len < 16 && ((len % 9) < 0.75 || (len % 9) > 8.25)) {
                var mid = parseInt(len / 9) * 9;
                var l = 0.75 - (mid - len);
                var ch = 0.75 * Math.sin(l * Math.PI / 1.5);
                v.y = v.y + ch * Math.sin(toRadians(30));
                v.x = v.x - m * ch * Math.cos(toRadians(30));
            } else if (len < 16 && (len % 3 < 0.25 || (len % 3) > 2.75)) {
                var mid = parseInt(len / 3) * 3;
                var l = 0.25 - (mid - len);
                var ch = 0.25 * Math.sin(l * Math.PI / 0.5);
                v.y = v.y + ch * Math.sin(toRadians(30));
                v.x = v.x - m * ch * Math.cos(toRadians(30));
            }
        });
        geometry.computeFaceNormals();
        geometry.computeVertexNormals();
        var white = new three.Color(Colours.white.hex);
        var clr = new three.Color(Colours[buildingConfig.roofColour].hex);
        geometry.faces.forEach(function(f, i) {
            if (m * f.normal.x < 0 && insideView) {
                f.color = white
            } else {
                f.color = clr;
            }
        });
        return geometry
    };
    this.updateMesh = function() {
        _this.mesh1.geometry = _this.getGeometry();
        _this.mesh2.geometry = _this.getBGeometry();
        _this.mesh2.material.vertexColors = three.FaceColors;
        _this.mesh1.material.vertexColors = three.FaceColors;
        var posx = buildingConfig.w / 2;
        if (side == "Left") {
            var posx = -1 * posx;
        }
        _this.mesh.position.set(posx, buildingConfig.h, 0);
        _this.mesh1.position.y = -.5;
        _this.mesh1.position.x = -(m * .5);
        _this.mesh2.position.set(m * (roundx + (buildingConfig.w / 2 - roundx) / 2), roundy + ((buildingConfig.w / 2 - roundx) / 4) / 2 + .1, -buildingConfig.l / 2);
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(roofColorChange, this.updateMesh);
}

function disposeHierarchy(node, callback) {
    for (var i = node.children.length - 1; i >= 0; i--) {
        var child = node.children[i];
        disposeHierarchy(child, callback);
        callback(child);
    }
}

function onWindowResize() {
    globals.renderer.setSize($(globals.container).innerWidth(), $(globals.container).innerHeight());
    globals.camera.aspect = $(globals.container).innerWidth() / $(globals.container).innerHeight();
    globals.camera.updateProjectionMatrix();
}

gaugeOnChange = function(e) {
    var inpGauge = parseInt(e.value);
    buildingConfig.gauge = inpGauge;
    eventHandler.dispatchEvent(gaugeChange);
};

function refreshRollFrHeight(inpHeight) {
    var rFRHeight = document.getElementById('rollfr_height');
    rFRHeight.innerHTML = '';
    var opt = document.createElement('option');
    opt.appendChild( document.createTextNode('Height') );
    opt.value = '';
    rFRHeight.appendChild(opt);

    for (var i = 5; i < inpHeight; i++) {
        var opt = document.createElement('option');
        opt.appendChild( document.createTextNode(i + "'") );
        opt.value = i;
        rFRHeight.appendChild(opt);
    }
}

height_range_onchange = function(e) {
    if (buildingConfig.leftlt.leanTo == "leftlt" || buildingConfig.rightlt.leanTo == "rightlt" || buildingConfig.frontlt.leanTo == "frontlt" || buildingConfig.backlt.leanTo == "backlt") {
        var conf;
        conf = confirm("This Change will clear the settings do you want to continue?");
        if (conf) {
            buildingConfig.leftlt.leanTo = null;
            buildingConfig.rightlt.leanTo = null;
            buildingConfig.frontlt.leanTo = null;
            buildingConfig.backlt.leanTo = null;
            buildingConfig.frwrap = null;
            buildingConfig.brwrap = null;
            buildingConfig.flwrap = null;
            buildingConfig.blwrap = null;
            buildingConfig.ltLeftsideWallOption = wallopen;
            buildingConfig.ltRightsideWallOption = wallopen;
            buildingConfig.ltFrontsideWallOption = wallopen;
            buildingConfig.ltBacksideWallOption = wallopen;
            document.getElementById("leanToBackRight").checked = false;
            document.getElementById("leanToBackLeft").checked = false;
            document.getElementById("leanToFrontLeft").checked = false;
            document.getElementById("leanToFrontRight").checked = false;
            document.getElementById("leanToFront").checked = false;
            document.getElementById("leanToBack").checked = false;
            document.getElementById("leanToLeft").checked = false;
            document.getElementById("leanToRight").checked = false;
        } else {
            return;
        }
    }
    var inpHeight = parseInt(e.value);
    if (inpHeight <= 6) {
        inpHeight = 6;
        customAlert('Minimum Height');
        document.getElementById('unitHeight').value = inpHeight;
    }
    if (inpHeight >= 12) {
        inpHeight = 12;
        customAlert('Maximum Height');
        document.getElementById('unitHeight').value = inpHeight;
    }
    buildingConfig.h = inpHeight * 12;
    refreshRollFrHeight(inpHeight);
    eventHandler.dispatchEvent(heightChange);
};

width_range_onchange = function(e, evt) {
    var inpWidth = parseInt(e.value);
    if (inpWidth <= 12) {
        inpWidth = 12;
        customAlert('Minimum Width');
        document.getElementById('widthRange').value = inpWidth;
    }
    if (inpWidth >= 30) {
        inpWidth = 30;
        customAlert('Max Width');
        document.getElementById('widthRange').value = inpWidth;
    }
    if (buildingConfig.leftlt.leanTo == "leftlt" || buildingConfig.rightlt.leanTo == "rightlt" || buildingConfig.frontlt.leanTo == "frontlt" || buildingConfig.backlt.leanTo == "backlt") {
        var conf;
        conf = confirm("This Change will clear the settings do you want to continue?");
        if (conf) {
            buildingConfig.leftlt.leanTo = null;
            buildingConfig.rightlt.leanTo = null;
            buildingConfig.frontlt.leanTo = null;
            buildingConfig.backlt.leanTo = null;
            buildingConfig.frwrap = null;
            buildingConfig.brwrap = null;
            buildingConfig.flwrap = null;
            buildingConfig.blwrap = null;
            buildingConfig.ltLeftsideWallOption = wallopen;
            buildingConfig.ltRightsideWallOption = wallopen;
            buildingConfig.ltFrontsideWallOption = wallopen;
            buildingConfig.ltBacksideWallOption = wallopen;
            document.getElementById("leanToBackRight").checked = false;
            document.getElementById("leanToBackLeft").checked = false;
            document.getElementById("leanToFrontLeft").checked = false;
            document.getElementById("leanToFrontRight").checked = false;
            document.getElementById("leanToFront").checked = false;
            document.getElementById("leanToBack").checked = false;
            document.getElementById("leanToLeft").checked = false;
            document.getElementById("leanToRight").checked = false;
        } else {
            return;
        }
    }
    door_windows = buildingConfig.addonsObj.door.concat(buildingConfig.addonsObj.window);
    for (var i = door_windows.length - 1; i >= 0; i--) {
        dobj = door_windows[i];
        if (["Front", "Back"].includes(dobj.includedWall.swid)) {
            var confirmation = confirm("Changing width will remove all windows/doors added in the end walls. you can add it again later. Do you want to proceed?")
            if (confirmation) {
                door_windows.forEach(function(wobj) {
                    if (["Front", "Back"].includes(wobj.includedWall.swid)) {
                        wobj.dispose();
                    }
                });
            } else {
                var org_val = parseInt(buildingConfig.w / 12);
                e.value = org_val * 10;
                return;
            }
            break
        }
    }
    document.getElementById('widthRange').step = 2;
    buildingConfig.w = inpWidth * 12;
    eventHandler.dispatchEvent(widthChange);
};

sideWallOnchange = function(side) {
    var input_id = "partial_wall_inp_right";
    var wallTypeInput_id = "right_wall_type_inp";
    var sideWallSheetCount = "rightsideWallSheetCount";
    var wallOption = "RightsideWallOption";
    var styling = document.getElementById('rsideOpt');
    var wainscotside = "rightwainscotOption";
    var wallpartialval = "rightPartial";
    if (side == "Left") {
        input_id = "partial_wall_inp_left";
        wallTypeInput_id = "left_wall_type_inp";
        wallOption = "LeftsideWallOption";
        sideWallSheetCount = "leftsideWallSheetCount";
        styling = document.getElementById('lsideOpt');
        wainscotside = "leftwainscotOption";
        wallpartialval = "leftPartial";
    }
    var e = document.getElementById(wallTypeInput_id);
    var parseval = parseInt(e.value);
    var partial_wall_inp = document.getElementById(input_id);
    var partialWallSheetCount = 0;
    var minVal = 0;
    var maxNumber = Math.ceil(buildingConfig.h / (1 * 12));
    buildingConfig[wallOption] = wallopen;
    buildingConfig[wainscotside] = null;
    buildingConfig[wallpartialval] = false;
    if (e.value == "4" && buildingConfig[wallOption] == wallopen) {
        styling.style.display = "none";
        buildingConfig[wallpartialval] = true;
        eventHandler.dispatchEvent(sideWallChange);
        return;
    }
    if (parseval == 2) {
        parseval = 3;
        styling.style.display = "block";
        partialWallSheetCount = parseInt(partial_wall_inp.value);
    } else {
        styling.style.display = "none";
    }
    if (parseval != buildingConfig[wallOption] || partialWallSheetCount != buildingConfig[sideWallSheetCount]) {
        if (maxNumber == partialWallSheetCount) {
            buildingConfig[wallOption] = wallClosed;
            buildingConfig[sideWallSheetCount] = 0;
            styling.style.display = "none";
            partial_wall_inp.value = 1;
            e.value = wallClosed;
            customAlert("closed wall option1");
        } else {
            buildingConfig[wallOption] = parseval;
            buildingConfig[sideWallSheetCount] = partialWallSheetCount;
        }
    }
    eventHandler.dispatchEvent(sideWallChange);
};

var triggered = false;
length_range_onchange = function(e) {
    if (e.value < 20) {
        e.value = 20;
        document.getElementById('unitLength').value = e.value;
    }
    if (e.value > 50) {
        e.value = 50;
        document.getElementById('unitLength').value = e.value;
    }
    if (buildingConfig.leftlt.leanTo == "leftlt" ||
        buildingConfig.rightlt.leanTo == "rightlt" ||
        buildingConfig.frontlt.leanTo == "frontlt" ||
        buildingConfig.backlt.leanTo == "backlt") {
        var conf;
        conf = confirm("This Change will clear the settings do you want to continue?");
        if (conf) {
            buildingConfig.leftlt.leanTo = null;
            buildingConfig.rightlt.leanTo = null;
            buildingConfig.frontlt.leanTo = null;
            buildingConfig.backlt.leanTo = null;
            buildingConfig.frwrap = null;
            buildingConfig.brwrap = null;
            buildingConfig.flwrap = null;
            buildingConfig.blwrap = null;
            buildingConfig.ltLeftsideWallOption = wallopen;
            buildingConfig.ltRightsideWallOption = wallopen;
            buildingConfig.ltFrontsideWallOption = wallopen;
            buildingConfig.ltBacksideWallOption = wallopen;
            document.getElementById("leanToFront").checked = false;
            document.getElementById("leanToBack").checked = false;
            document.getElementById("leanToLeft").checked = false;
            document.getElementById("leanToRight").checked = false;
            document.getElementById("leanToBackRight").checked = false;
            document.getElementById("leanToBackLeft").checked = false;
            document.getElementById("leanToFrontLeft").checked = false;
            document.getElementById("leanToFrontRight").checked = false;
        } else {
            return;
        }
    }
    var parseval = parseInt(e.value);
    buildingConfig.l = parseval * 12;
    if (buildingConfig.l > 31 * 12 && triggered == false && buildingConfig.RoofOrientation != VOrientation) {
        triggered = true;
        customAlert("If your unit is longer than 31' in length, we strongly recommend to opt for our A-Frame Vertical roof, to avoid future leaks.")
    }
    door_windows = buildingConfig.addonsObj.door.concat(buildingConfig.addonsObj.window);
    for (var i = door_windows.length - 1; i >= 0; i--) {
        dobj = door_windows[i];
        if (["Left", "Right"].includes(dobj.includedWall.swid)) {
            var confirmation = confirm("Changing Lenght will remove all windows/doors added in the side walls. you can add it again later. Do you want to proceed?")
            if (confirmation) {
                door_windows.forEach(function(wobj) {
                    if (["Left", "Right"].includes(wobj.includedWall.swid)) {
                        wobj.dispose();
                    }
                });
            } else {
                var org_val = parseInt(buildingConfig.l / 12);
                e.value = org_val * 10;
                return;
            }
            break
        }
    }
    document.getElementById("unitLength").value = buildingConfig.l / 12;
    eventHandler.dispatchEvent(lengthChange);
};

orientation_onchange = function(e) {
    var parseval = parseInt(e.value);
    if (buildingConfig.RoofSyle == StandardRoof) {
        buildingConfig.leantoRoofOrientation = HOrientation;
        buildingConfig.RoofOrientation = HOrientation;
        buildingConfig.sideWallOrientation = HOrientation;
        buildingConfig.endWallOrientation = HOrientation;
        buildingConfig.leantoWallOrientation = HOrientation;
        $("#endwallOrientationV").attr('disabled', true);
        $("#sidewallOrientationV").attr('disabled', true);
        $(".v-disable").css('cursor', 'not-allowed');
        $(".v-disable-side").css('cursor', 'not-allowed');
        document.getElementById("endwallOrientationH").checked = true;
        document.getElementById("sidewallOrientationH").checked = true;
    } else {
        buildingConfig.RoofOrientation = parseval;
        if (buildingConfig.RoofOrientation == HOrientation) {
            buildingConfig.sideWallOrientation = HOrientation;
            buildingConfig.endWallOrientation = HOrientation;
            buildingConfig.leantoWallOrientation = HOrientation;
            buildingConfig.leantoRoofOrientation = HOrientation;
            $("#endwallOrientationV").attr('disabled', true);
            $("#sidewallOrientationV").attr('disabled', true);
            //$(".v-disable").css('cursor', 'not-allowed');
            $(".v-disable-side").css('cursor', 'not-allowed');
            document.getElementById("endwallOrientationH").checked = true;
            document.getElementById("sidewallOrientationH").checked = true;
        } else {
            $(".v-disable").css('cursor', 'pointer');
            $(".v-disable-side").css('cursor', 'pointer');
            buildingConfig.leantoRoofOrientation = VOrientation;
            $("#endwallOrientationV").attr('disabled', false);
            $("#sidewallOrientationV").attr('disabled', false);
        }
    }
    eventHandler.dispatchEvent(orientationChange);
};

front_wall_onchange = function(e) {
    var parseval = parseInt(e.value);
    buildingConfig.FrontsideWallOption = wallopen;
    buildingConfig.frontPartial = false;
    if (parseval == "4") {
        buildingConfig.frontPartial = true;
        if (buildingConfig.frontlt.leanTo == "frontlt") {
            var conf = confirm("This change will remove the existing leanTo! Do You want to proceed?");
            if (conf) {
                buildingConfig.frontlt.leanTo = null;
                buildingConfig.frwrap = null;
                buildingConfig.flwrap = null;
                buildingConfig.ltFrontsideWallOption = wallopen;
                document.getElementById("leanToFrontLeft").checked = false;
                document.getElementById("leanToFrontRight").checked = false;
                document.getElementById("leanToFront").checked = false;
            } else {
                return;
            }
        }
        eventHandler.dispatchEvent(frontWallChange);
        return
    }
    buildingConfig.FrontsideWallOption = parseval;
    if (buildingConfig.FrontsideWallOption == wallGable || buildingConfig.FrontsideWallOption == wallopen) {
        if (buildingConfig.frontlt.leanTo == "frontlt") {
            var conf = confirm("This change will remove the existing leanTo! Do You want to proceed?");
            if (conf) {
                buildingConfig.frontlt.leanTo = null;
                buildingConfig.frwrap = null;
                buildingConfig.flwrap = null;
                buildingConfig.ltFrontsideWallOption = wallopen;
                document.getElementById("leanToFrontLeft").checked = false;
                document.getElementById("leanToFrontRight").checked = false;
                document.getElementById("leanToFront").checked = false;
            } else {
                return;
            }
        }
    }
    eventHandler.dispatchEvent(frontWallChange);
};

back_wall_onchange = function(e) {
    var parseval = parseInt(e.value);
    buildingConfig.BacksideWallOption = wallopen;
    buildingConfig.backPartial = false;
    if (parseval == "4") {
        buildingConfig.backPartial = true;
        if (buildingConfig.backlt.leanTo == "backlt") {
            var conf = confirm("This change will remove the existing leanTo! Do You want to proceed?");
            if (conf) {
                buildingConfig.backlt.leanTo = null;
                buildingConfig.brwrap = null;
                buildingConfig.blwrap = null;
                buildingConfig.ltBacksideWallOption = wallopen;
                document.getElementById("leanToBackRight").checked = false;
                document.getElementById("leanToBackLeft").checked = false;
                document.getElementById("leanToBack").checked = false;
            } else {
                return;
            }
        }
        eventHandler.dispatchEvent(frontWallChange);
        return
    }
    buildingConfig.BacksideWallOption = parseval;
    if (buildingConfig.BacksideWallOption == wallGable || buildingConfig.BacksideWallOption == wallopen) {
        if (buildingConfig.backlt.leanTo == "backlt") {
            var conf = confirm("This change will remove the existing leanTo! Do You want to proceed?");
            if (conf) {
                buildingConfig.backlt.leanTo = null;
                buildingConfig.brwrap = null;
                buildingConfig.blwrap = null;
                buildingConfig.ltBacksideWallOption = wallopen;
                document.getElementById("leanToBackRight").checked = false;
                document.getElementById("leanToBackLeft").checked = false;
                document.getElementById("leanToBack").checked = false;
            } else {
                return;
            }
        }
    }
    eventHandler.dispatchEvent(frontWallChange);
};

onFloorChange = function(e) {
    buildingConfig.texture = e.value;
    eventHandler.dispatchEvent(floorChange);
};
screwColorChange = function(e) {
    var parseval = parseInt(e.value);
    buildingConfig.screwType = parseval;
    eventHandler.dispatchEvent(screwTypeChange);
};
insulationChange = function(e) {
    var parseval = parseInt(e.value);
    buildingConfig.insulation = parseval;
    eventHandler.dispatchEvent(insulationTypeChange);
};
eTrussOptionChange = function(e) {
    var parseval = parseInt(e.value);
    buildingConfig.extraTrussCount = parseval;
    eventHandler.dispatchEvent(extraTrussCountChange);
};
anchorsOptionChange = function() {
    var e = document.getElementById("anchors_option");
    var parseval = parseInt(e.options[e.selectedIndex].value);
    numberElm = document.getElementById("anchors_option_numbers");
    var numberElmval = parseInt(numberElm.value);
    if (parseval != 0) {
        numberElm.style.display = "initial";
        buildingConfig.anchors = {
            type: parseval,
            numbers: numberElmval
        };
    } else {
        numberElm.style.display = "none";
        buildingConfig.anchors = {
            type: null,
            numbers: 0
        };
    }
    eventHandler.dispatchEvent(anchorsTypeChange);
};
dragDimensionChange = function(e) {
    var parseval = $("#Btnswitch").is(':checked');
    buildingConfig.showDimensions = parseval;
    eventHandler.dispatchEvent(showDimensions);
};

ExtraSheetChange = function() {
    buildingConfig.extraSheetCount = {
        21: parseInt(document.getElementById("extra_sheet_21").value),
        26: parseInt(document.getElementById("extra_sheet_26").value),
        31: parseInt(document.getElementById("extra_sheet_31").value)
    };
    eventHandler.dispatchEvent(extraSheetCountChange);
};

roofstyle_onchange = function(e) {
    var parseval = parseInt(e.value);
    buildingConfig.RoofSyle = parseval;
    if (buildingConfig.RoofSyle == StandardRoof) {
        buildingConfig.sideWallOrientation = HOrientation;
        buildingConfig.endWallOrientation = HOrientation;
        buildingConfig.RoofOrientation = HOrientation;
        buildingConfig.leantoRoofOrientation = HOrientation;
        buildingConfig.leantoWallOrientation = HOrientation;
        $("#sidewallOrientationV").attr('disabled', true);
        $("#endwallOrientationV").attr('disabled', true);
        $("#sidingDirection2").attr('disabled', true);
        $(".v-disable").css('cursor', 'not-allowed');
        $(".v-disable-side").css('cursor', 'not-allowed');
        document.getElementById("endwallOrientationH").checked = true;
        document.getElementById("sidewallOrientationH").checked = true;
        document.getElementById("sidingDirection1").checked = true;
    } else {
        $("#sidingDirection2").attr('disabled', false);
        $(".v-disable").css('cursor', 'pointer');
    }
    eventHandler.dispatchEvent(roofStyleChange);
};
sidewallOrientation_onchange = function(e) {
    var parseval = parseInt(e.value);
    if (buildingConfig.RoofSyle == StandardRoof) {
        buildingConfig.sideWallOrientation = HOrientation;
    } else {
        buildingConfig.sideWallOrientation = parseval;
    }
    eventHandler.dispatchEvent(sidewallOrientationChange);
};
endwallOrientation_onchange = function(e) {
    var parseval = parseInt(e.value);
    if (buildingConfig.RoofSyle == StandardRoof) {
        buildingConfig.endWallOrientation = HOrientation;
    } else {
        buildingConfig.endWallOrientation = parseval;
    }
    eventHandler.dispatchEvent(endwallOrientationChange);
};
wallOrientation_onchange = function(e, side) {
    var parseval = parseInt(e.value);
    if (buildingConfig.RoofSyle == StandardRoof || buildingConfig.sideWallOrientation != HOrientation) {
        return false
    }
    if (side == "side") {
        buildingConfig.sideWallOrientation = parseval;
        eventHandler.dispatchEvent(sidewallOrientationChange);
    } else {
        buildingConfig.endWallOrientation = parseval;
        eventHandler.dispatchEvent(endwallOrientationChange);
    }
};

function getDirection(intersected_wall) {
    var dir_val = {
        "rotation": 0,
        "vector": new three.Vector3(0, 0, 1)
    };
    if (intersected_wall.swid == "Front") {
        dir_val.vector = new three.Vector3(0, 0, -1);
    }
    if (intersected_wall.wid == "SideWall" || intersected_wall.wid == "ltSideWall") {
        dir_val.rotation = Math.PI / 2;
        dir_val.vector = new three.Vector3(-1, 0, 0);
        if (intersected_wall.swid == "Left") {
            dir_val.vector = new three.Vector3(1, 0, 0);
        }
    }
    return dir_val
}

function MouseMoved(event) {
    if (!drag_obj_id) {
        return
    }
    var isCollide = false;
    var drag_obj = DragableObjectmap[parseInt(drag_obj_id)];
    if (drag_obj.label == rollupDL || drag_obj.label == rollFR) {
        drag_obj.mesh_wrapper.visible = false;
    }
    var bounds = event.target.getBoundingClientRect();
    var clientX = event.clientX - bounds.left;
    var clientY = event.clientY - bounds.top;
    var mouseX = (clientX / $(container).innerWidth()) * 2 - 1;
    var mouseY = -(clientY / $(container).innerHeight()) * 2 + 1;
    var vector = new three.Vector3(mouseX, mouseY, 0);
    var raycaster = new three.Raycaster();
    vector.unproject(globals.camera);
    raycaster.set(globals.camera.position, vector.sub(globals.camera.position).normalize());
    wallObjects.map(function(wo) {
        wo.material.opacity = 0.4;
        wo.material.transparent = true;
    });
    var intersects = raycaster.intersectObjects(wallObjects);
    if (intersects.length) {
        var isec = intersects[0];
        var dir = getDirection(isec.object);
        var val_msg = drag_obj.validate_dop(isec, dir);
        if (val_msg) {
            drag_obj.copyPosition();
            drag_obj.setPosition(isec.point.x, isec.point.y, isec.point.z, dir.rotation);
            /*
            var csubset = [];
            for (var i = 0; i < collisionObjects.length; i++) {
                if (collisionObjects[i] != drag_obj.mesh) {
                    csubset.push(collisionObjects[i])
                }
            }
            if (drag_obj.isColliding(csubset) || drag_obj.checkForCuttingTruss()) {
                drag_obj.resetPosition();
                isCollide = true;
            }
            */
            if (!drag_obj.addedtoscreen && !isCollide) {
                drag_obj.addToScreen();
            }
            if (drag_obj.addedtoscreen) {
                drag_obj.update_dragable_dimension();
                //CalculatePrice();
                //displayStatus();
            }
            trussList.forEach(function(child) {
                child.updateMesh();
            });
        }
    }
}

function countDinstanceToCamera(obj){
    var x = globals.camera.position.x;
    var y = globals.camera.position.y;
    var z = globals.camera.position.z;
    var distance = Math.sqrt((obj.x - x) * (obj.x - x) + (obj.y - y) * (obj.y - y) + (obj.z - z) * (obj.z - z));
    return distance;
}

function updateWallTransparency_simple() {
    for(var k in DragableObjectmap) {
        var dragObj = DragableObjectmap[k];
        if (dragObj.addedtoscreen) {
            if (dragObj.label == doorFR || dragObj.label == rollFR) {
                dragObj.includedWall.renderOrder = 1;
                dragObj.mesh.renderOrder = 0;
                if (countDinstanceToCamera(globals.controls.target) > countDinstanceToCamera(dragObj.includedWall.position) ) {
                    dragObj.includedWall.renderOrder = k * 4 + 3;
                    dragObj.mesh.renderOrder = k * 4 + 2;
                }
            }
        }
    }
}

function mouseup(part) {
    if (!drag_obj_id) {
        return;
    }
    wallObjects.map(function(wo) {
        wo.material.opacity = 1;
        wo.material.transparent = false;
    });

    var drag_obj = DragableObjectmap[parseInt(drag_obj_id)];
    if (drag_obj && drag_obj.addedtoscreen && !isIncluded(collisionObjects, drag_obj.mesh)) {
        collisionObjects.push(drag_obj.mesh);
    }
    if (drag_obj.label == rollupDL || drag_obj.label == rollFR) {
        drag_obj.mesh_wrapper.visible = false;
    }
    if (drag_obj && !drag_obj.addedtoscreen) {
        drag_obj.dispose();
    }
    drag_obj_id = null;
    globals.bodyContainer.style.cursor = "default";
    $("#door").val("");
    $("#window").val("");
    $("#rollup").val("");
    $("#door_frameout").val("");
    $("#roll_frameout").val("");
}

function selectDoorSide(objVal) {
    if (!objVal) {
        $("#door").attr('disabled', true);
        $("#door").addClass('door-disable');
        $("#rollup").attr('disabled', true);
        $("#rollup").addClass('door-disable');
        $("#window").attr('disabled', true);
        $("#window").addClass('door-disable');
        $("#door_frameout").attr('disabled', true);
        $("#door_frameout").addClass('door-disable');
        $("#roll_frameout").attr('disabled', true);
        $("#roll_frameout").addClass('door-disable');
        $("#rollfr_width").attr('disabled', true);
        $("#rollfr_width").addClass('door-disable');
        $("#rollfr_height").attr('disabled', true);
        $("#rollfr_height").addClass('door-disable');
        return;
    } else {
        $("#door").attr('disabled', false);
        $("#door").removeClass('door-disable');
        $("#rollup").attr('disabled', false);
        $("#rollup").removeClass('door-disable');
        $("#window").attr('disabled', false);
        $("#window").removeClass('door-disable');
        $("#door_frameout").attr('disabled', false);
        $("#door_frameout").removeClass('door-disable');
        $("#roll_frameout").attr('disabled', false);
        $("#roll_frameout").removeClass('door-disable');
        $("#rollfr_width").attr('disabled', false);
        $("#rollfr_width").removeClass('door-disable');
        $("#rollfr_height").attr('disabled', false);
        $("#rollfr_height").removeClass('door-disable');
    }
    var sidePositions = [
        {
            x: 0,
            y: 67,
            z: 200,
        },
        {
            x: 0,
            y: 67,
            z: 0-(buildingConfig.l + 200)
        },
        {
            x: 0-buildingConfig.w-200,
            y: 67,
            z: 0-buildingConfig.l / 2
        },
        {
            x: buildingConfig.w + 200,
            y: 67,
            z: 0-buildingConfig.l / 2
        }
    ];
    var from = {
        x: globals.camera.position.x,
        y: globals.camera.position.y,
        z: globals.camera.position.z
    };

    var to = {//0, 67, 200
        x: sidePositions[objVal].x,
        y: sidePositions[objVal].y,
        z: sidePositions[objVal].z
    };
    var tween = new TWEEN.Tween(from)
        .to(to, 600)
        .easing(TWEEN.Easing.Linear.None)
        .onUpdate(function () {
            globals.camera.position.set(this.x, this.y, this.z);
            globals.camera.lookAt(new THREE.Vector3(0, 0, 0));
        })
        .onComplete(function () {
            globals.camera.lookAt(new THREE.Vector3(0, 0, 0));
        })
        .start();

    $(".door-disable").attr('disabled', true);
    $(".door-disable").css('cursor', 'not-allowed');
}

function createCustomFrameout(objVal) {
    if (!objVal) {
        return;
    }
    var width = $("#rollfr_width").val();
    var height = $("#rollfr_height").val();
    if (!width || !height) {
        return;
    }
    globals.bodyContainer.style.cursor = "move";
    var label = rollFR;
    var dobj = new DragableObject(label, width * 12, height * 12).init();
    DragableObjectmap[parseInt(dobj.did)] = dobj;
    drag_obj_id = dobj.did;
    setInitialDoor();
    document.getElementById("rollfr_width").selectedIndex=0;
    document.getElementById("rollfr_height").selectedIndex=0;
}

function createNewDobj(objVal) {
    if (!objVal) {
        return;
    }
    globals.bodyContainer.style.cursor = "move";
    objVal = JSON.parse(objVal);
    var label = objVal.label;
    var width = parseInt(objVal.width);
    var height = parseInt(objVal.height);
    var dobj = new DragableObject(label, width, height).init();
    DragableObjectmap[parseInt(dobj.did)] = dobj;
    drag_obj_id = dobj.did;
    setInitialDoor();
    //tempAlert()
}

function tempAlert() {
    $('#dragAlert').show().fadeIn('slow');
    setTimeout(() => {
        $('#dragAlert').hide().fadeOut('slow');
    }, 5000);
}

function VSupport(n, side) {
    side = side || "Front";
    var _this = this;
    this.side = side;
    this.init = function() {
        var geometry = new three.BoxGeometry(2.5, 1, 2.5);
        var material = createSteelMaterial();
        this.mesh = new three.Mesh(geometry, material);
        this.updateMesh();
        return this
    };
    this.updateMesh = function() {
        var nos = Math.ceil(buildingConfig.w / (max_vsupport_width * 12));
        var unit_space = buildingConfig.w / nos;
        var posx = -1 * buildingConfig.w / 2 + n * unit_space;
        var wallOption = buildingConfig.FrontsideWallOption;
        if (side != "Front") {
            wallOption = buildingConfig.BacksideWallOption;
        }
        if (posx >= buildingConfig.w / 2 || wallOption != wallClosed) {
            _this.mesh.visible = false;
        } else {
            _this.mesh.visible = true;
        }
        var d_from_corner = buildingConfig.w / 2 - posx;
        if (posx < 1) {
            d_from_corner = posx + buildingConfig.w / 2;
        }
        roundy_val = roundy;
        var d_round_corner = d_from_corner - roundx;
        if (buildingConfig.RoofSyle == AFrameRoof) {
            d_round_corner = d_from_corner;
            roundy_val = 0;
        }
        var vh = d_round_corner / 4 + buildingConfig.h + roundy_val;
        var zval = -1.25;
        if (side == "Back") {
            zval = -buildingConfig.l + 1.25;
        }
        var cutHeight = checkforEndWallIntersectionEndWall(_this);
        var heightFromCut = vh - cutHeight;
        _this.mesh.scale.set(1, heightFromCut, 1);
        _this.mesh.position.set(posx - 1.25, cutHeight + heightFromCut / 2 - .5, zval);
    };
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function isIncluded(arr, obj) {
    return (arr.indexOf(obj) != -1);
}
window.addEventListener("resize", onWindowResize, false);

function HSupport() {
    var _this = this;
    this.init = function() {
        var geometry = new three.BoxGeometry(buildingConfig.w - 2.5, 2.5, 2.5);
        var material = createSteelMaterial();
        this.mesh2 = new three.Mesh(geometry, material);
        this.mesh1 = new three.Mesh(geometry, material);
        this.mesh3 = new three.Mesh(geometry, material);
        this.mesh4 = new three.Mesh(geometry, material);
        this.updateMesh();
        return this
    };
    this.updateMesh = function() {
        _this.mesh2.visible = false;
        _this.mesh1.visible = false;
        _this.mesh3.visible = false;
        _this.mesh4.visible = false;
        var scaleX = buildingConfig.w / iniWidth;
        var scaleY = 1.25;
        if (buildingConfig.FrontsideWallOption == wallClosed) {
            _this.mesh2.scale.x = scaleX;
            _this.mesh2.position.set(0, scaleY, -1.25);
            _this.mesh2.visible = true;
        }
        if (buildingConfig.BacksideWallOption == wallClosed) {
            _this.mesh1.scale.x = scaleX;
            _this.mesh1.position.set(0, scaleY, -buildingConfig.l + 1.25);
            _this.mesh1.visible = true;
        }
        if (buildingConfig.BacksideWallOption == wallopen && buildingConfig.backPartial) {
            _this.mesh1.scale.x = scaleX;
            _this.mesh1.position.set(0, scaleY, -buildingConfig.l + 1.25);
            _this.mesh1.visible = true;
            _this.mesh4.scale.x = scaleX;
            _this.mesh4.position.set(0, 36 - 1.25, -buildingConfig.l + 1.25);
            _this.mesh4.visible = true;
        }
        if (buildingConfig.FrontsideWallOption == wallopen && buildingConfig.frontPartial) {
            _this.mesh2.scale.x = scaleX;
            _this.mesh2.position.set(0, scaleY, -1.25);
            _this.mesh2.visible = true;
            _this.mesh3.scale.x = scaleX;
            _this.mesh3.position.set(0, 36 - 1.25, -1.25);
            _this.mesh3.visible = true;
        }
        if (buildingConfig.BacksideWallOption == wallGable) {
            _this.mesh4.scale.x = scaleX;
            _this.mesh4.position.set(0, buildingConfig.h - 1, -buildingConfig.l + 1.25);
            _this.mesh4.visible = true;
        }
        if (buildingConfig.FrontsideWallOption == wallGable) {
            _this.mesh3.scale.x = scaleX;
            _this.mesh3.position.set(0, buildingConfig.h - 1, -1.25);
            _this.mesh3.visible = true;
        }
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(floorChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
}
roofColorOnChange = function(e) {
    buildingConfig.roofColour = e.value;
    eventHandler.dispatchEvent(roofColorChange);
};
ridgeColorOnChange = function(e) {
    if (buildingConfig.RoofSyle == AFrameRoof && buildingConfig.RoofOrientation == VOrientation) {
        buildingConfig.ridgeColour = e.value;
    }
    eventHandler.dispatchEvent(ridgeColorChange);
};
trimColorOnChange = function(e) {
    buildingConfig.trimColor = e.value;
    buildingConfig.ridgeColour = e.value;
    eventHandler.dispatchEvent(trimColorChange);
    eventHandler.dispatchEvent(ridgeColorChange);
};
sidewallColorOnChange = function(e) {
    if ((buildingConfig.LeftsideWallOption != wallopen) || (buildingConfig.RightsideWallOption != wallopen) || buildingConfig.leftPartial || buildingConfig.rightPartial) {
        buildingConfig.sideWallColour = e.value;
    }
    eventHandler.dispatchEvent(sidewallColorChange);
};
endwallColorOnChange = function(e) {
    if ((buildingConfig.FrontsideWallOption != wallopen) || (buildingConfig.BacksideWallOption != wallopen) || buildingConfig.frontPartial || buildingConfig.backPartial) {
        buildingConfig.endWallColour = e.value;
    }
    eventHandler.dispatchEvent(endwallColourChange);
};

checkforEndWallIntersectionEndWall = function(VSupport) {
    var cutHeight = 0;
    buildingConfig.addonsObj.rollup.forEach(function(aObj) {
        if (aObj.includedWall.wid == "EndWall" && aObj.includedWall.swid == VSupport.side) {
            var left = aObj.mesh.position.x - aObj.width / 2;
            var right = aObj.mesh.position.x + aObj.width / 2;
            if (left <= VSupport.mesh.position.x && VSupport.mesh.position.x <= right) {
                var tcutHeight = aObj.mesh.position.y + aObj.height / 2 + 1.25;
                if (cutHeight < tcutHeight) {
                    cutHeight = tcutHeight;
                }
            }
        }
    });
    return cutHeight
};
checkforSideWallIntersection = function(truss) {
    var LcutHeight = 0;
    var RcutHeight = 0;
    buildingConfig.addonsObj.rollup.forEach(function(aObj) {
        if (aObj.includedWall.wid == "SideWall" && ["Left", "Right"].includes(aObj.includedWall.swid)) {
            var left = aObj.mesh.position.z - aObj.width / 2;
            var right = aObj.mesh.position.z + aObj.width / 2;
            if (left <= truss.mesh.position.z && truss.mesh.position.z <= right) {
                var tcutHeight = aObj.mesh.position.y + aObj.height / 2 + 1.25;
                if (aObj.includedWall.swid == "Left" && tcutHeight > LcutHeight) {
                    LcutHeight = tcutHeight;
                }
                if (aObj.includedWall.swid == "Right" && tcutHeight > RcutHeight) {
                    RcutHeight = tcutHeight;
                }
            }
        }
    });
    buildingConfig.addonsObj.rollfr.forEach(function(aObj) {
        if (aObj.includedWall.wid == "SideWall" && ["Left", "Right"].includes(aObj.includedWall.swid)) {
            var left = aObj.mesh.position.z - aObj.width / 2;
            var right = aObj.mesh.position.z + aObj.width / 2;
            if (left <= truss.mesh.position.z && truss.mesh.position.z <= right) {
                var tcutHeight = aObj.mesh.position.y + aObj.height / 2 + 1.25;
                if (aObj.includedWall.swid == "Left" && tcutHeight > LcutHeight) {
                    LcutHeight = tcutHeight;
                }
                if (aObj.includedWall.swid == "Right" && tcutHeight > RcutHeight) {
                    RcutHeight = tcutHeight;
                }
            }
        }
    });
    buildingConfig.addonsObj.doorfr.forEach(function(aObj) {
        if (aObj.includedWall.wid == "SideWall" && ["Left", "Right"].includes(aObj.includedWall.swid)) {
            var left = aObj.mesh.position.z - aObj.width / 2;
            var right = aObj.mesh.position.z + aObj.width / 2;
            if (left <= truss.mesh.position.z && truss.mesh.position.z <= right) {
                var tcutHeight = aObj.mesh.position.y + aObj.height / 2 + 1.25;
                if (aObj.includedWall.swid == "Left" && tcutHeight > LcutHeight) {
                    LcutHeight = tcutHeight;
                }
                if (aObj.includedWall.swid == "Right" && tcutHeight > RcutHeight) {
                    RcutHeight = tcutHeight;
                }
            }
        }
    });
    return [LcutHeight, RcutHeight];
};

function enclosedTrim() {
    var _this = this;
    this.init = function() {
        var geometry = new three.BoxGeometry(2.5, buildingConfig.h, 2);
        var material = createMeshPhongMaterial(Colours[buildingConfig.trimColor].hex);
        this.mesh1 = new three.Mesh(geometry, material);
        this.mesh2 = new three.Mesh(geometry, material);
        this.mesh3 = new three.Mesh(geometry, material);
        this.mesh4 = new three.Mesh(geometry, material);
        _this.updateMesh();
        return this;
    };
    this.updateMesh = function() {
        _this.mesh1.visible = false;
        _this.mesh2.visible = false;
        _this.mesh3.visible = false;
        _this.mesh4.visible = false;
        var scaleY = buildingConfig.h / iniHeight;
        var posy1 = buildingConfig.h / 2;
        var posy2 = buildingConfig.h / 2;
        var posy3 = buildingConfig.h / 2;
        var posy4 = buildingConfig.h / 2;
        _this.mesh1.scale.y = scaleY;
        _this.mesh2.scale.y = scaleY;
        _this.mesh3.scale.y = scaleY;
        _this.mesh4.scale.y = scaleY;
        if (buildingConfig.LeftsideWallOption == wallPartial) {
            scaleY = (buildingConfig.leftsideWallSheetCount * 1 * 12) / iniHeight;
            if (buildingConfig.FrontsideWallOption != wallClosed) {
                _this.mesh2.scale.y = scaleY;
                posy2 = buildingConfig.h - (buildingConfig.leftsideWallSheetCount * 1 * 12) / 2;
            }
            if (buildingConfig.BacksideWallOption != wallClosed) {
                _this.mesh4.scale.y = scaleY;
                posy4 = buildingConfig.h - (buildingConfig.leftsideWallSheetCount * 1 * 12) / 2;
            }
        }
        if (buildingConfig.RightsideWallOption == wallPartial) {
            scaleY = (buildingConfig.rightsideWallSheetCount * 1 * 12) / iniHeight;
            if (buildingConfig.FrontsideWallOption != wallClosed) {
                _this.mesh1.scale.y = scaleY;
                posy1 = buildingConfig.h - (buildingConfig.rightsideWallSheetCount * 1 * 12) / 2;
            }
            if (buildingConfig.BacksideWallOption != wallClosed) {
                _this.mesh3.scale.y = scaleY;
                posy3 = buildingConfig.h - (buildingConfig.rightsideWallSheetCount * 1 * 12) / 2;
            }
        }
        _this.mesh1.position.set(buildingConfig.w / 2, posy1 - .3, 0);
        _this.mesh2.position.set(-buildingConfig.w / 2, posy2 - .3, 0);
        _this.mesh3.position.set(buildingConfig.w / 2, posy3 - .3, -buildingConfig.l);
        _this.mesh4.position.set(-buildingConfig.w / 2, posy4 - .3, -buildingConfig.l);
        if (buildingConfig.LeftsideWallOption == wallClosed || buildingConfig.LeftsideWallOption == wallPartial) {
            _this.mesh2.visible = true;
            _this.mesh4.visible = true;
        }
        if (buildingConfig.RightsideWallOption == wallClosed || buildingConfig.RightsideWallOption == wallPartial) {
            _this.mesh1.visible = true;
            _this.mesh3.visible = true;
        }
        if (buildingConfig.FrontsideWallOption == wallClosed) {
            _this.mesh1.visible = true;
            _this.mesh2.visible = true;
        }
        if (buildingConfig.BacksideWallOption == wallClosed) {
            _this.mesh3.visible = true;
            _this.mesh4.visible = true;
        }
        if (buildingConfig.RightsideWallOption == wallopen && buildingConfig.rightPartial) {
            if (buildingConfig.FrontsideWallOption != wallClosed) {
                _this.mesh1.scale.y = (3 * 12) / iniHeight;
                _this.mesh1.position.y = 3 * 12 / 2;
                _this.mesh1.visible = true;
            }
            if (buildingConfig.BacksideWallOption != wallClosed) {
                _this.mesh3.scale.y = (3 * 12) / iniHeight;
                _this.mesh3.position.y = 3 * 12 / 2;
                _this.mesh3.visible = true;
            }
        }
        if (buildingConfig.LeftsideWallOption == wallopen && buildingConfig.leftPartial) {
            if (buildingConfig.FrontsideWallOption != wallClosed) {
                _this.mesh2.scale.y = (3 * 12) / iniHeight;
                _this.mesh2.position.y = 3 * 12 / 2;
                _this.mesh2.visible = true;
            }
            if (buildingConfig.BacksideWallOption != wallClosed) {
                _this.mesh4.scale.y = (3 * 12) / iniHeight;
                _this.mesh4.position.y = 3 * 12 / 2;
                _this.mesh4.visible = true;
            }
        }
        if (buildingConfig.FrontsideWallOption == wallopen && buildingConfig.frontPartial) {
            _this.mesh2.scale.y = (3 * 12) / iniHeight;
            _this.mesh1.scale.y = (3 * 12) / iniHeight;
            _this.mesh2.position.y = 3 * 12 / 2;
            _this.mesh1.position.y = 3 * 12 / 2;
            _this.mesh2.visible = true;
            _this.mesh1.visible = true;
        }
        if (buildingConfig.BacksideWallOption == wallopen && buildingConfig.backPartial) {
            _this.mesh3.scale.y = (3 * 12) / iniHeight;
            _this.mesh4.scale.y = (3 * 12) / iniHeight;
            _this.mesh3.position.y = 3 * 12 / 2;
            _this.mesh4.position.y = 3 * 12 / 2;
            _this.mesh3.visible = true;
            _this.mesh4.visible = true;
        }
    };
    this.changeColour = function() {
        _this.mesh1.material.color = new three.Color(get_orientation_url(buildingConfig.trimColor, null, 2));
        _this.mesh2.material.color = new three.Color(get_orientation_url(buildingConfig.trimColor, null, 2));
        _this.mesh3.material.color = new three.Color(get_orientation_url(buildingConfig.trimColor, null, 2));
        _this.mesh4.material.color = new three.Color(get_orientation_url(buildingConfig.trimColor, null, 2));
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(sideWallChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(trimColorChange, this.changeColour);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
    eventHandler.addEventListener(wainscotOnChange, this.updateMesh);
}
AFrametrim = function(side) {
    side = side || "left";
    var _this = this;
    _this.side = side;
    this.init = function() {
        var geometry = _this.getGeometry();
        var material = createMeshPhongMaterial(Colours[buildingConfig.trimColor].hex);
        this.mesh = new three.Mesh(geometry, material);
        _this.updateMesh();
        return this;
    };
    this.getGeometry = function() {
        var geo = new three.BoxGeometry(4, 2.5, buildingConfig.l + 10);
        return geo;
    };
    this.updateMesh = function() {
        _this.mesh.visible = false;
        var m = 1;
        var rotation = Math.PI;
        if (_this.side == "left") {
            rotation = 0;
            m = -1;
        }
        var centerX = buildingConfig.w / 2 + 2;
        var centerY = buildingConfig.h - 2;
        var centerZ = -(buildingConfig.l / 2);
        if (buildingConfig.RoofOrientation == VOrientation) {
            centerY += 1.25;
        }
        if (buildingConfig.RoofSyle == AFrameRoof) {
            _this.mesh.visible = true;
        }
        _this.mesh.geometry = _this.getGeometry();
        _this.mesh.rotation.z = -(m * ((sin14 / cos14) - .02)) + rotation;
        _this.mesh.position.set(m * (centerX) + (m * 1), centerY - .25, centerZ);
        _this.mesh.updateMatrix();
    };
    this.changeColour = function() {
        _this.mesh.material.color = new three.Color(get_orientation_url(buildingConfig.trimColor, null, 2));
    };
    eventHandler.addEventListener(trimColorChange, this.changeColour);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(orientationChange, this.updateMesh);
};
gableBars = function(side) {
    side = side || "back";
    var _this = this;
    _this.side = side;
    this.init = function() {
        var geometry = new three.BoxGeometry(buildingConfig.w, 2, 2);
        var material = createMeshPhongMaterial(Colours[buildingConfig.trimColor].hex);
        this.mesh = new three.Mesh(geometry, material);
        _this.updateMesh();
        return this;
    };
    this.updateMesh = function() {
        _this.mesh.visible = false;
        _this.mesh.material.color = new three.Color(Colours[buildingConfig.trimColor].hex);
        if (_this.side == "front") {
            if (buildingConfig.FrontsideWallOption == wallGable) {
                _this.mesh.visible = true;
            }
            _this.mesh.scale.x = buildingConfig.w / iniWidth;
            _this.mesh.position.set(0, buildingConfig.h - 1, 0);
        } else {
            if (buildingConfig.BacksideWallOption == wallGable) {
                _this.mesh.visible = true;
            }
            _this.mesh.scale.x = buildingConfig.w / iniWidth;
            _this.mesh.position.set(0, buildingConfig.h - 1, -buildingConfig.l);
        }
    };
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(trimColorChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
};

function VGableSupport(n, side) {
    side = side || "Front";
    var _this = this;
    this.side = side;
    this.init = function() {
        var geometry = new three.BoxGeometry(2.5, 1, 2);
        var material = createSteelMaterial();
        this.mesh = new three.Mesh(geometry, material);
        this.updateMesh();
        return this
    };
    this.updateMesh = function() {
        var nos = Math.ceil(buildingConfig.w / (max_vsupport_width * 12));
        var unit_space = buildingConfig.w / nos;
        var posx = -1 * buildingConfig.w / 2 + n * unit_space;
        var wallOption = buildingConfig.FrontsideWallOption;
        if (side != "Front") {
            wallOption = buildingConfig.BacksideWallOption;
        }
        if (posx >= buildingConfig.w / 2 || wallOption != wallGable) {
            _this.mesh.visible = false;
        } else {
            _this.mesh.visible = true;
        }
        var d_from_corner = buildingConfig.w / 2 - posx;
        if (posx < 1) {
            d_from_corner = posx + buildingConfig.w / 2;
        }
        roundy_val = roundy;
        var d_round_corner = d_from_corner - roundx;
        if (buildingConfig.RoofSyle == AFrameRoof) {
            d_round_corner = d_from_corner;
            roundy_val = 0;
        }
        var vh = d_round_corner / 4 + roundy_val;
        var zval = -1;
        if (side == "Back") {
            zval = -buildingConfig.l + 1;
        }
        var heightFromCut = vh;
        _this.mesh.scale.set(1, heightFromCut, 1);
        _this.mesh.position.set(posx, buildingConfig.h - 1 + heightFromCut / 2, zval);
    };
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function SideWainscot(side) {
    side = side || "Left";
    var _this = this;
    this.side = side;
    var wainscotHeight = 36;
    this.init = function() {
        var geometry1 = new three.BoxGeometry(0.1, wainscotHeight, buildingConfig.l);
        var material = createMeshPhongMaterial();
        this.mesh1 = new three.Mesh(this.geometry1, material);
        this.mesh1.geometry.verticesNeedUpdate = true;
        this.mesh1.geometry.dynamic = true;
        this.onWalloptionChange(side)();
        this.updateMesh();
        return this
    };
    this.updateTexture = function() {
        var m;
        _this.side == "Left" ? m = 1 : m = -1;
        var white = new three.Color(Colours.white.hex);
        var clr1 = new three.Color(Colours[buildingConfig.wainscotColor].hex);
        _this.mesh1.geometry.faces.forEach(function(f) {
            if (m * f.normal.x > 0 && insideView) {
                f.color = white;
            } else {
                f.color = clr1;
            }
        });
        _this.mesh1.material.vertexColors = three.FaceColors;
    };
    this.updateMesh = function() {
        var m = 1;
        var conf = buildingConfig.RightsideWallOption;
        var rotation = 0;
        if (_this.side == "Left") {
            m = -1;
            conf = buildingConfig.LeftsideWallOption;
        }
        if (buildingConfig.sideWallOrientation == HOrientation) {
            _this.mesh1.geometry = new three.BoxGeometry(0.1, wainscotHeight, buildingConfig.l, 1, wainscotHeight * 10, 1);
        } else if (buildingConfig.sideWallOrientation == VOrientation) {
            rotation = Math.PI / 2;
            _this.mesh1.geometry = new three.BoxGeometry(0.1, buildingConfig.l, wainscotHeight, 1, buildingConfig.l * 10, 1);
        }
        _this.mesh1.position.set(m * (buildingConfig.w / 2 + .1), wainscotHeight / 2, -1 * (buildingConfig.l) / 2);
        if (buildingConfig.RoofOrientation == VOrientation && buildingConfig.sideWallOrientation == HOrientation) {
            _this.mesh1.position.y = wainscotHeight / 2 + .9;
        }
        _this.mesh1.geometry.vertices.forEach(function(v) {
            dfromt = Math.abs(v.y);
            if (((dfromt % 9) < 0.75 || (dfromt % 9) > 8.25)) {
                var mid = parseInt(dfromt / 9) * 9;
                var l = 0.75 - (mid - dfromt);
                v.x = m * 0.75 * Math.sin(l * Math.PI / 1.5);
            } else if ((dfromt % 3 < 0.25 || (dfromt % 3) > 2.75)) {
                var mid = parseInt(dfromt / 3) * 3;
                var l = 0.25 - (mid - dfromt);
                v.x = m * 0.25 * Math.sin(l * Math.PI / 0.5);
            }
        });
        _this.mesh1.material.vertexColors = three.FaceColors;
        _this.mesh1.rotation.x = rotation;
        _this.onWalloptionChange(_this.side)();
        _this.mesh1.updateMatrix();
        _this.updateTexture();
    };
    this.onWalloptionChange = function(side) {
        return function() {
            if (side == _this.side) {
                var sideval = buildingConfig.RightsideWallOption;
                var wainscotOption = buildingConfig.rightwainscotOption;
                if (side == "Left") {
                    sideval = buildingConfig.LeftsideWallOption;
                    wainscotOption = buildingConfig.leftwainscotOption;
                }
                _this.mesh1.visible = (sideval == wallClosed && wainscotOption == "On");
            }
        }
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(sideWallChange, this.updateMesh);
    eventHandler.addEventListener(sidewallOrientationChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(wainscotOnChange, this.updateMesh);
    eventHandler.addEventListener(wainscotColorChange, this.updateMesh);
    eventHandler.addEventListener(orientationChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
    eventHandler.addEventListener(sideWallChange, this.updateMesh);
    eventHandler.addEventListener(sidewallColorChange, this.updateTexture);
}

function EndWainscot(side) {
    var wainscotHeight = 36;
    var _this = this;
    side = side || "Front";
    this.side = side;
    var m;
    _this.side == "Front" ? m = 1 : m = -1;
    this.init = function() {
        var geometry1 = new three.BoxGeometry(buildingConfig.w, wainscotHeight, 0.125);
        var material = createMeshPhongMaterial(null, null);
        this.mesh1 = new three.Mesh(geometry1, material);
        this.updateMesh();
        return this;
    };
    this.updateTexture = function() {
        var white = new three.Color(Colours.white.hex);
        var clr1 = new three.Color(Colours[buildingConfig.wainscotColor].hex);
        _this.mesh1.geometry.faces.forEach(function(f) {
            if (m * f.normal.z < 0 && insideView) {
                f.color = white;
            } else {
                f.color = clr1;
            }
        });
        _this.mesh1.material.vertexColors = three.FaceColors;
    };
    this.updateMesh = function() {
        var wallOption = buildingConfig.FrontsideWallOption;
        var wainscotOption = buildingConfig.frontwainscotOption;
        if (side != "Front") {
            wallOption = buildingConfig.BacksideWallOption;
            wainscotOption = buildingConfig.backwainscotOption;
        }
        var baseh = buildingConfig.h - (wainscotHeight + buildingConfig.w / 8) / 2;
        if (buildingConfig.endWallOrientation == HOrientation) {
            _this.mesh1.geometry = new three.BoxGeometry(buildingConfig.w, wainscotHeight, 0.125, 1, wainscotHeight * 10, 1);
            var yval_ref = -wainscotHeight / 2;
            if (buildingConfig.RoofSyle == AFrameRoof) {
                yval_ref = baseh;
            }
            _this.mesh1.geometry.vertices.forEach(function(v, i) {
                var yval = Math.abs(yval_ref + v.y);
                if (((yval % 9) < 0.75 || (yval % 9) > 8.25)) {
                    var mid = parseInt(yval / 9) * 9;
                    var l = 0.75 - (mid - yval);
                    v.z = v.z + m * 0.75 * Math.sin(l * Math.PI / 1.5);
                } else if ((yval % 3 < 0.25 || (yval % 3) > 2.75)) {
                    var mid = parseInt(yval / 3) * 3;
                    var l = 0.25 - (mid - yval);
                    v.z = v.z + m * 0.25 * Math.sin(l * Math.PI / 0.5);
                }
            });
        } else {
            _this.mesh1.geometry = new three.BoxGeometry(buildingConfig.w, wainscotHeight, 0.125, buildingConfig.w * 10, 1, 1);
            _this.mesh1.geometry.vertices.forEach(function(v, i) {
                var xv = Math.abs(v.x + buildingConfig.w / 2);
                if (((xv % 9) < 0.75 || (xv % 9) > 8.25)) {
                    var mid = parseInt(xv / 9) * 9;
                    var l = 0.75 - (mid - xv);
                    v.z = v.z + m * 0.75 * Math.sin(l * Math.PI / 1.5);
                } else if ((xv % 3 < 0.25 || (xv % 3) > 2.75)) {
                    var mid = parseInt(xv / 3) * 3;
                    var l = 0.25 - (mid - xv);
                    v.z = v.z + m * 0.25 * Math.sin(l * Math.PI / 0.5);
                }
            });
        }
        _this.mesh1.visible = (wallOption == wallClosed && wainscotOption == "On");
        var zval;
        _this.side == "Front" ? zval = 0.1 : zval = -(buildingConfig.l + .1);
        if (buildingConfig.RoofSyle == StandardRoof) {
            _this.side == "Front" ? zval = 0.1 : zval = -(buildingConfig.l + .15);
        }
        _this.mesh1.position.set(0, wainscotHeight / 2, zval);
        _this.updateTexture();
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(endwallOrientationChange, this.updateMesh);
    eventHandler.addEventListener(wainscotOnChange, this.updateMesh);
    eventHandler.addEventListener(wainscotColorChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(orientationChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
    eventHandler.addEventListener(sideWallChange, this.updateMesh);
}


customAlert = function(message) {
    bootbox.dialog({
        message: message,
        buttons: {
            ok: {
                label: "Okay!",
                className: 'btn-danger'
            }
        }
    });
};

function sideTrims(n, side) {
    side = side || "Left";
    var _this = this;
    _this.side = side;
    this.init = function() {
        var geometry = new three.BoxGeometry(.5, 2, buildingConfig.l);
        var material = createSteelMaterial();
        this.mesh = new three.Mesh(geometry, material);
        this.mesh1 = new three.Mesh(geometry, material);
        _this.updateMesh();
        return this;
    };
    this.updateMesh = function() {
        if (_this.side == "Left") {
            var no = Math.ceil(((buildingConfig.h - 6) / 12) / 4);
            var unit_space = (buildingConfig.h - 6) / no;
            var posy = (n * unit_space);
            _this.mesh.visible = false;
            _this.mesh1.visible = false;
            if (buildingConfig.sideWallOrientation == VOrientation && buildingConfig.LeftsideWallOption != wallopen) {
                _this.mesh.visible = true;
            }
            if (posy >= buildingConfig.h) {
                _this.mesh.visible = false;
            }
            if (buildingConfig.LeftsideWallOption == wallPartial && posy < (buildingConfig.h - (buildingConfig.leftsideWallSheetCount * 12))) {
                _this.mesh.visible = false;
            }
            _this.mesh.scale.z = buildingConfig.l / iniLength;
            _this.mesh1.scale.z = buildingConfig.l / iniLength;
            _this.mesh.position.set(-buildingConfig.w / 2 + .5, posy, -buildingConfig.l / 2);
            if (buildingConfig.LeftsideWallOption == wallPartial && buildingConfig.sideWallOrientation == VOrientation) {
                _this.mesh1.position.set(-buildingConfig.w / 2 + .5, buildingConfig.h - (buildingConfig.leftsideWallSheetCount * 12), -buildingConfig.l / 2);
                _this.mesh1.visible = true;
            }
        }
        if (_this.side == "Right") {
            var no = Math.ceil(((buildingConfig.h - 6) / 12) / 4);
            var unit_space = (buildingConfig.h - 6) / no;
            var posy = (n * unit_space);
            _this.mesh.visible = false;
            _this.mesh1.visible = false;
            if (buildingConfig.sideWallOrientation == VOrientation && buildingConfig.RightsideWallOption != wallopen) {
                _this.mesh.visible = true;
            }
            if (posy >= buildingConfig.h) {
                _this.mesh.visible = false;
            }
            if (buildingConfig.RightsideWallOption == wallPartial && posy < (buildingConfig.h - (buildingConfig.rightsideWallSheetCount * 12))) {
                _this.mesh.visible = false;
            }
            _this.mesh.scale.z = buildingConfig.l / iniLength;
            _this.mesh1.scale.z = buildingConfig.l / iniLength;
            _this.mesh.position.set(buildingConfig.w / 2 - .5, posy, -buildingConfig.l / 2);
            if (buildingConfig.RightsideWallOption == wallPartial && buildingConfig.sideWallOrientation == VOrientation) {
                _this.mesh1.position.set(buildingConfig.w / 2 - .5, buildingConfig.h - (buildingConfig.rightsideWallSheetCount * 12), -buildingConfig.l / 2);
                _this.mesh1.visible = true;
            }
        }
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(sideWallChange, this.updateMesh);
    eventHandler.addEventListener(sidewallOrientationChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(orientationChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function endTrims(n, side) {
    side = side || "Back";
    var _this = this;
    _this.side = side;
    this.init = function() {
        var geometry = new three.BoxGeometry(buildingConfig.w, 2, .5);
        var material = createSteelMaterial();
        this.mesh = new three.Mesh(geometry, material);
        _this.updateMesh();
        return this;
    };
    this.updateMesh = function() {
        var no = Math.ceil(((buildingConfig.h - 6) / 12) / 4);
        var unit_space = (buildingConfig.h - 6) / no;
        var posy = (n * unit_space);
        if (_this.side == "Back") {
            _this.mesh.visible = false;
            if (buildingConfig.endWallOrientation == VOrientation && buildingConfig.BacksideWallOption == wallClosed) {
                _this.mesh.visible = true;
            }
            if (posy >= buildingConfig.h) {
                _this.mesh.visible = false;
            }
            _this.mesh.scale.x = buildingConfig.w / iniWidth;
            _this.mesh.position.set(0, posy, -buildingConfig.l + .5);
        }
        if (_this.side == "Front") {
            _this.mesh.visible = false;
            if (buildingConfig.endWallOrientation == VOrientation && buildingConfig.FrontsideWallOption == wallClosed) {
                _this.mesh.visible = true;
            }
            if (posy >= buildingConfig.h) {
                _this.mesh.visible = false;
            }
            _this.mesh.scale.x = buildingConfig.w / iniWidth;
            _this.mesh.position.set(0, posy, -0.5);
        }
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(endwallOrientationChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(orientationChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}
$(document).on('change', 'input[type=number]', function(e) {
    if (e.target.value == '') {
        e.target.value = e.target.min;
        e.target.onchange();
    }
});

function display_wall_style(style) {
    switch (style) {
        case wallClosed:
            return "Closed";
        case wallopen:
            return "Open";
        case wallGable:
            return "Gable";
        case wallPartial:
            return "Partial"
    }
}

function displayAnchors(type) {
    switch (type) {
        case anchorsConcrete:
            return "Concrete";
        case anchorsMobileHome:
            return "MobileHome";
        case anchorsAsphalt:
            return "Asphalt";
    }
}
var tax;
var downpayval;
var PlanERPprice;
var taxresult;
var totval;
var downpayment;
var dpbeforetax;

function displayFinalStatus() {
    var str = "If the snow load requirement is more than 30 PSF ' ground load, the sales rep. is going to contact you and the unit will require more material and a higher drop on the roof side."
    customAlert(str);
    $(".dritem").remove();
    document.getElementById("base_price").innerHTML = basePrice;
    document.getElementById("gauge_value").innerHTML = buildingConfig.gauge;
    document.getElementById("roof_style").innerHTML = roofStylePrice;
    document.getElementById("frame_type").innerHTML = buildingConfig.RoofSyle == AFrameRoof ? "AFrame" : "Standard";
    document.getElementById("sliding_direction").innerHTML = buildingConfig.RoofOrientation == VOrientation ? "Vertical" : "Horizontal";
    document.getElementById("roof_color").innerHTML = Colours[buildingConfig.roofColour].display;
    document.getElementById("trim_color").innerHTML = Colours[buildingConfig.trimColor].display;
    document.getElementById("ridge_color").innerHTML = Colours[buildingConfig.ridgeColour].display;
    document.getElementById("dimensions").innerHTML = legHeightStdPrice;
    document.getElementById("d_width").innerHTML = buildingConfig.w / 12;
    document.getElementById("d_length").innerHTML = buildingConfig.l / 12;
    document.getElementById("d_height").innerHTML = buildingConfig.h / 12;
    document.getElementById("wall_style").innerHTML = (closedSidesPrice + endWallPrice + gablePrice + partialWallSidePrice).toFixed(2);
    document.getElementById("w_left").innerHTML = display_wall_style(buildingConfig.LeftsideWallOption);
    document.getElementById("w_right").innerHTML = display_wall_style(buildingConfig.RightsideWallOption);
    document.getElementById("w_sliding_direction").innerHTML = buildingConfig.sideWallOrientation == VOrientation ? "Vertical" : "Horizontal";
    document.getElementById("w_s_color").innerHTML = Colours[buildingConfig.sideWallColour].display;
    document.getElementById("e_front").innerHTML = display_wall_style(buildingConfig.FrontsideWallOption);
    document.getElementById("e_back").innerHTML = display_wall_style(buildingConfig.BacksideWallOption);
    document.getElementById("e_sliding_direction").innerHTML = buildingConfig.endWallOrientation == VOrientation ? "Vertical" : "Horizontal";
    document.getElementById("e_color").innerHTML = Colours[buildingConfig.endWallColour].display;
    document.getElementById("doors_windows").innerHTML = dragablePrice;
    priceVal.innerHTML = "$" + totalPrice;
    dueval.innerHTML = "$" + totalPrice;
    totalpriceVal.innerHTML = "$" + (totalPrice - totalPrice * .10);
    btax.innerHTML = "$" + (totalPrice - totalPrice * .10);
    var doorCount = getDrgCount('door');
    var windowCount = getDrgCount('window');
    var rollupCount = getDrgCount('rollup');
    for (i in doorCount) {
        $("#wd_dsply").append(`
      <dt class="dritem col-sm-5 font-weight-normal mb-3">Walk-in</dt>
      <span class="dritem col-sm-1">` + i + `</span>
      <dd class="dritem col-sm-5 font-montserrat-normal text-right mb-3">
      <span>` + doorCount[i] + `</span>
      </dd>
    `);
    }
    for (i in windowCount) {
        $("#wd_dsply").append(`
      <dt class="dritem col-sm-5 font-weight-normal mb-3">Window</dt>
      <span class="dritem col-sm-1">` + i + `</span>
      <dd class="dritem col-sm-5 font-montserrat-normal text-right mb-3">
      <span>` + windowCount[i] + `</span>
      </dd>
    `);
    }
    for (i in rollupCount) {
        $("#wd_dsply").append(`
      <dt class="dritem col-sm-5 font-weight-normal mb-3">Rollup</dt>
      <span class="dritem col-sm-1">` + i + `</span>
      <dd class="dritem col-sm-5 font-montserrat-normal text-right mb-3">
      <span>` + rollupCount[i] + `</span>
      </dd>
    `);
    }
    document.getElementById("wainscot").innerHTML = wainscotsPrice;
    document.getElementById("w_color").innerHTML = (buildingConfig.rightwainscotOption || buildingConfig.leftwainscotOption || buildingConfig.frontwainscotOption || buildingConfig.backwainscotOption) ? Colours[buildingConfig.wainscotColor].display : "NA";
    document.getElementById("ltwainscot").innerHTML = ltwainscotsPrice;
    document.getElementById("ltw_color").innerHTML = (buildingConfig.ltrightwainscotOption || buildingConfig.ltleftwainscotOption || buildingConfig.ltfrontwainscotOption || buildingConfig.ltbackwainscotOption) ? Colours[buildingConfig.ltwainscotColor].display : "NA";
    document.getElementById("learn_to_price").innerHTML = leantoPrice;
    if (buildingConfig.frontlt.leanTo == "frontlt") {
        document.getElementById("fr_width").innerHTML = parseInt(buildingConfig.frontlt.ltowidth / 12);
        document.getElementById("fr_height").innerHTML = parseInt(buildingConfig.frontlt.legheight / 12);
        document.getElementById("fr_drop").innerHTML = parseInt(buildingConfig.frontlt.drop / 12);
        document.getElementById("fr_cut1").innerHTML = parseInt(buildingConfig.frontlt.cut1 / 12);
        document.getElementById("fr_cut2").innerHTML = parseInt(buildingConfig.frontlt.cut2 / 12);
    } else {
        document.getElementById("fr_width").innerHTML = "NA";
        document.getElementById("fr_height").innerHTML = "NA";
        document.getElementById("fr_drop").innerHTML = "NA";
        document.getElementById("fr_cut1").innerHTML = "NA";
        document.getElementById("fr_cut2").innerHTML = "NA";
    }
    if (buildingConfig.backlt.leanTo == "backlt") {
        document.getElementById("bk_width").innerHTML = parseInt(buildingConfig.backlt.ltowidth / 12);
        document.getElementById("bk_height").innerHTML = parseInt(buildingConfig.backlt.legheight / 12);
        document.getElementById("bk_drop").innerHTML = parseInt(buildingConfig.backlt.drop / 12);
        document.getElementById("bk_cut1").innerHTML = parseInt(buildingConfig.backlt.cut1 / 12);
        document.getElementById("bk_cut2").innerHTML = parseInt(buildingConfig.backlt.cut2 / 12);
    } else {
        document.getElementById("bk_width").innerHTML = "NA";
        document.getElementById("bk_height").innerHTML = "NA";
        document.getElementById("bk_drop").innerHTML = "NA";
        document.getElementById("bk_cut1").innerHTML = "NA";
        document.getElementById("bk_cut2").innerHTML = "NA";
    }
    if (buildingConfig.leftlt.leanTo == "leftlt") {
        document.getElementById("lf_width").innerHTML = parseInt(buildingConfig.leftlt.ltowidth / 12);
        document.getElementById("lf_height").innerHTML = parseInt(buildingConfig.leftlt.legheight / 12);
        document.getElementById("lf_drop").innerHTML = parseInt(buildingConfig.leftlt.drop / 12);
        document.getElementById("lf_cut1").innerHTML = parseInt(buildingConfig.leftlt.cut1 / 12);
        document.getElementById("lf_cut2").innerHTML = parseInt(buildingConfig.leftlt.cut2 / 12);
    } else {
        document.getElementById("lf_width").innerHTML = "NA";
        document.getElementById("lf_height").innerHTML = "NA";
        document.getElementById("lf_drop").innerHTML = "NA";
        document.getElementById("lf_cut1").innerHTML = "NA";
        document.getElementById("lf_cut2").innerHTML = "NA";
    }
    if (buildingConfig.rightlt.leanTo == "rightlt") {
        document.getElementById("rt_width").innerHTML = parseInt(buildingConfig.rightlt.ltowidth / 12);
        document.getElementById("rt_height").innerHTML = parseInt(buildingConfig.rightlt.legheight / 12);
        document.getElementById("rt_drop").innerHTML = parseInt(buildingConfig.rightlt.drop / 12);
        document.getElementById("rt_cut1").innerHTML = parseInt(buildingConfig.rightlt.cut1 / 12);
        document.getElementById("rt_cut2").innerHTML = parseInt(buildingConfig.rightlt.cut2 / 12);
    } else {
        document.getElementById("rt_width").innerHTML = "NA";
        document.getElementById("rt_height").innerHTML = "NA";
        document.getElementById("rt_drop").innerHTML = "NA";
        document.getElementById("rt_cut1").innerHTML = "NA";
        document.getElementById("rt_cut2").innerHTML = "NA";
    }
    document.getElementById("options_price").innerHTML = addonsPrice;
    document.getElementById("screw_color").innerHTML = buildingConfig.screwType == screwTypeMetal ? "Standard Metal" : "Colored Screws";
    if (buildingConfig.anchors.type) {
        var danchors = displayAnchors(buildingConfig.anchors.type) + ", " + buildingConfig.anchors.numbers;
        document.getElementById("anchors").innerHTML = danchors;
    } else {
        document.getElementById("anchors").innerHTML = "NA"
    }
    document.getElementById("frval").innerHTML = "Disable";
    document.getElementById("flval").innerHTML = "Disable";
    document.getElementById("brval").innerHTML = "Disable";
    document.getElementById("blval").innerHTML = "Disable";
    if (buildingConfig.frwrap == "frwrap") {
        document.getElementById("frval").innerHTML = "Enable";
    }
    if (buildingConfig.flwrap == "flwrap") {
        document.getElementById("flval").innerHTML = "Enable";
    }
    if (buildingConfig.brwrap == "brwrap") {
        document.getElementById("brval").innerHTML = "Enable";
    }
    if (buildingConfig.blwrap == "blwrap") {
        document.getElementById("blval").innerHTML = "Enable";
    }
    textureVal = "Ground";
    if (buildingConfig.texture == "alphal") {
        textureVal = "Asphalt";
    } else if (buildingConfig.texture == "concrete") {
        textureVal = "Concrete";
    }
    document.getElementById("installation_surface").innerHTML = textureVal;
    document.getElementById("extra_trusses").innerHTML = buildingConfig.extraTrussCount;
    document.getElementById("extra_metal21").innerHTML = buildingConfig.extraSheetCount['21'];
    document.getElementById("extra_metal26").innerHTML = buildingConfig.extraSheetCount['26'];
    document.getElementById("extra_metal31").innerHTML = buildingConfig.extraSheetCount['31'];
    document.getElementById("total_price").innerHTML = (totalPrice).toFixed(2);
}

function getDrgCount(label) {
    var doorsum = {};
    buildingConfig.addonsObj[label].forEach(function(ditem) {
        var key = ditem.width + "'x" + ditem.height + "'";
        if (!(key in doorsum)) {
            doorsum[key] = 0
        }
        doorsum[key] = doorsum[key] + 1;
    });
    return doorsum;
}

function updateValue() {
    document.getElementById("pcountry").value = "14";
    if (buildingConfig.gauge == 12) {
        document.getElementById("pcountry").value = "12";
    }
    document.getElementById("widthRange").value = buildingConfig.w / 12;
    document.getElementById("unitLength").value = buildingConfig.l / 12;
    document.getElementById("unitHeight").value = buildingConfig.h / 12;
    document.getElementById("frameType2").checked = true;
    if (buildingConfig.RoofSyle == AFrameRoof) {
        document.getElementById("frameType1").checked = true;
    }
    document.getElementById("sidingDirection1").checked = true;
    if (buildingConfig.RoofOrientation == VOrientation) {
        document.getElementById("sidingDirection2").checked = true;
    }
    document.getElementById("left_wall_type_inp").value = "1";
    if (buildingConfig.LeftsideWallOption == wallClosed) {
        document.getElementById("left_wall_type_inp").value = "0";
    } else if (buildingConfig.LeftsideWallOption == wallPartial) {
        document.getElementById("left_wall_type_inp").value = "2";
        document.getElementById("lsideOpt").style.display = "block";
        document.getElementById("partial_wall_inp_left").value = buildingConfig.leftsideWallSheetCount;
    }
    document.getElementById("right_wall_type_inp").value = "1";
    if (buildingConfig.RightsideWallOption == wallClosed) {
        document.getElementById("right_wall_type_inp").value = "0";
    } else if (buildingConfig.RightsideWallOption == wallPartial) {
        document.getElementById("right_wall_type_inp").value = "2";
        document.getElementById("rsideOpt").style.display = "block";
        document.getElementById("partial_wall_inp_right").value = buildingConfig.rightsideWallSheetCount;
    }
    document.getElementById("sidewallOrientationH").checked = true;
    if (buildingConfig.sideWallOrientation == VOrientation) {
        document.getElementById("sidewallOrientationV").checked = true;
    }
    document.getElementById("front_wall").value = "1";
    if (buildingConfig.FrontsideWallOption == wallClosed) {
        document.getElementById("front_wall").value = "0";
    } else if (buildingConfig.FrontsideWallOption == wallGable) {
        document.getElementById("front_wall").value = "2";
    }
    document.getElementById("back_wall").value = "1";
    if (buildingConfig.BacksideWallOption == wallClosed) {
        document.getElementById("back_wall").value = "0";
    } else if (buildingConfig.BacksideWallOption == wallGable) {
        document.getElementById("back_wall").value = "2";
    }
    document.getElementById("endwallOrientationH").checked = true;
    if (buildingConfig.endWallOrientation == VOrientation) {
        document.getElementById("endwallOrientationV").checked = true;
    }
    document.getElementById("roofColor").value = buildingConfig.roofColour;
    document.getElementById("ridgeColor").value = buildingConfig.ridgeColour;
    document.getElementById("sidewallColor").value = buildingConfig.sideWallColour;
    document.getElementById("endwallColor").value = buildingConfig.endWallColour;
    document.getElementById("trimColor").value = buildingConfig.trimColor;
    if (buildingConfig.leftwainscotOption == "On") {
        document.getElementById("leftwainscotEnabled").checked = true;
    }
    if (buildingConfig.rightwainscotOption == "On") {
        document.getElementById("rightwainscotEnabled").checked = true;
    }
    if (buildingConfig.frontwainscotOption == "On") {
        document.getElementById("frontwainscotEnabled").checked = true;
    }
    if (buildingConfig.backwainscotOption == "On") {
        document.getElementById("backwainscotEnabled").checked = true;
    }
    if (buildingConfig.frontlt.leanTo == "frontlt") {
        document.getElementById("leanToFront").checked = true;
    }
    if (buildingConfig.backlt.leanTo == "backlt") {
        document.getElementById("leanToBack").checked = true;
    }
    if (buildingConfig.leftlt.leanTo == "leftlt") {
        document.getElementById("leanToLeft").checked = true;
    }
    if (buildingConfig.rightlt.leanTo == "rightlt") {
        document.getElementById("leanToRight").checked = true;
    }
}

function wainscotTrim(side) {
    var _this = this;
    this.side = side;
    this.init = function() {
        var geometry = this.getGeometry();
        var material = createMeshPhongMaterial(Colours[buildingConfig.trimColor].hex);
        this.mesh = new three.Mesh(geometry, material);
        _this.updateMesh();
        return this;
    };
    this.getGeometry = function() {
        if (_this.side == "front" || _this.side == "back") {
            return (new three.BoxGeometry(buildingConfig.w, 2, .5));
        } else {
            return (new three.BoxGeometry(.5, 2, buildingConfig.l));
        }
    };
    this.updateMesh = function() {
        _this.mesh.visible = false;
        if (_this.side == "left") {
            _this.mesh.scale.z = buildingConfig.l / iniLength;
            _this.mesh.position.set(-buildingConfig.w / 2 - 1, 3 * 12 - .75, -buildingConfig.l / 2);
            if (buildingConfig.LeftsideWallOption == wallClosed && buildingConfig.sideWallOrientation == VOrientation && buildingConfig.leftwainscotOption == "On") {
                _this.mesh.visible = true;
            }
            if (buildingConfig.LeftsideWallOption == wallopen && buildingConfig.leftPartial) {
                _this.mesh.visible = true;
            }
        }
        if (_this.side == "right") {
            _this.mesh.scale.z = buildingConfig.l / iniLength;
            _this.mesh.position.set(buildingConfig.w / 2 + 1, 3 * 12 - .75, -buildingConfig.l / 2);
            if (buildingConfig.RightsideWallOption == wallClosed && buildingConfig.sideWallOrientation == VOrientation && buildingConfig.rightwainscotOption == "On") {
                _this.mesh.visible = true;
            }
            if (buildingConfig.RightsideWallOption == wallopen && buildingConfig.rightPartial) {
                _this.mesh.visible = true;
            }
        }
        if (_this.side == "front") {
            _this.mesh.scale.x = buildingConfig.w / iniWidth;
            _this.mesh.position.set(0, 3 * 12 - .75, 1);
            if (buildingConfig.FrontsideWallOption == wallClosed && buildingConfig.endWallOrientation == VOrientation && buildingConfig.frontwainscotOption == "On") {
                _this.mesh.visible = true;
            }
            if (buildingConfig.FrontsideWallOption == wallopen && buildingConfig.frontPartial) {
                _this.mesh.visible = true;
            }
        }
        if (_this.side == "back") {
            _this.mesh.scale.x = buildingConfig.w / iniWidth;
            _this.mesh.position.set(0, 3 * 12 - .75, -(buildingConfig.l + 1));
            if (buildingConfig.BacksideWallOption == wallClosed && buildingConfig.endWallOrientation == VOrientation && buildingConfig.backwainscotOption == "On") {
                _this.mesh.visible = true;
            }
            if (buildingConfig.BacksideWallOption == wallopen && buildingConfig.backPartial) {
                _this.mesh.visible = true;
            }
        }
    };
    this.changeColour = function() {
        _this.mesh.material.color = new three.Color(get_orientation_url(buildingConfig.trimColor, null, 2));
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(sideWallChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(trimColorChange, this.changeColour);
    eventHandler.addEventListener(wainscotOnChange, this.updateMesh);
    eventHandler.addEventListener(sideWallChange, this.updateMesh);
    eventHandler.addEventListener(sidewallOrientationChange, this.updateMesh);
    eventHandler.addEventListener(endwallOrientationChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function setFrontside() {
    //globals.camera.position.set(0, 67, 200);
    globals.camera.position.set(130, 90, 200);
    globals.camera.updateProjectionMatrix();
    globals.controls.update();
}

function setBackside() {
    //globals.camera.position.set(0, 67, 0-(buildingConfig.l + 200));
    globals.camera.position.set(-130, 90, 0-(buildingConfig.l + 200));
    globals.camera.updateProjectionMatrix();
    globals.controls.update();
}

function setLeftside() {
    //globals.camera.position.set(0-buildingConfig.w-200, 67, 0-buildingConfig.l / 2);
    globals.camera.position.set(-270, 110, 80);
    globals.camera.updateProjectionMatrix();
    globals.controls.update();
}

function setRightside() {
    //globals.camera.position.set(buildingConfig.w + 200, 67, 0-buildingConfig.l / 2);
    globals.camera.position.set(270, 110, 80);
    globals.camera.updateProjectionMatrix();
    globals.controls.update();
}

function copyrightImage(side) {
    side = side || "Back";
    var _this = this;
    this.side = side;
    this.init = function() {
        var texture = new three.TextureLoader().load(footerLogo);
        var geometry = new three.PlaneGeometry(20, 20);
        var geometry1 = new three.PlaneGeometry(70, 70);
        var material = new three.MeshPhongMaterial({
            map: texture,
            color: 0xFFFFFF
        });
        material.emissive.set(0x333333);
        material.shininess = 60;
        material.transparent = true;
        this.mesh = new three.Mesh(geometry, material);
        this.mesh1 = new three.Mesh(geometry1, material);
        _this.updateMesh();
        return this;
    };
    this.updateMesh = function() {
        var d_from_corner = buildingConfig.w / 2;
        roundy_val = roundy;
        var d_round_corner = d_from_corner - roundx;
        if (buildingConfig.RoofSyle == AFrameRoof) {
            d_round_corner = d_from_corner;
            roundy_val = 0;
        }
        var vh = d_round_corner / 4 + roundy_val;
        var heightValue = 30;
        if (_this.side == "Front") {
            _this.mesh.position.set(0, buildingConfig.h + vh - heightValue / 2, 1);
            _this.mesh.rotation.y = 0;
            _this.mesh.visible = (buildingConfig.FrontsideWallOption == wallClosed);
        }
        if (_this.side == "Back") {
            _this.mesh.position.set(0, buildingConfig.h + vh - heightValue / 2, -(buildingConfig.l + 1));
            _this.mesh.rotation.y = Math.PI;
            _this.mesh.visible = (buildingConfig.BacksideWallOption == wallClosed);
        }
        if (_this.side == "Down") {
            _this.mesh1.position.set(0, .5, -(buildingConfig.l / 2));
            _this.mesh1.rotation.x = -Math.PI / 2;
            if (buildingConfig.texture != "default") {
                _this.mesh1.position.y = 2;
            }
        }
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(sideWallChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
    eventHandler.addEventListener(trimColorChange, this.changeColour);
    eventHandler.addEventListener(sidewallOrientationChange, this.updateMesh);
    eventHandler.addEventListener(endwallOrientationChange, this.updateMesh);
    eventHandler.addEventListener(floorChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(orientationChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function encloseBuilding(e) {
    if (e.value == "Enable") {
        buildingConfig.RightsideWallOption = buildingConfig.LeftsideWallOption = buildingConfig.FrontsideWallOption = buildingConfig.BacksideWallOption = wallClosed;
        e.value = "Disable";
        document.getElementById("left_wall_type_inp").value = "0";
        document.getElementById("right_wall_type_inp").value = "0";
        document.getElementById("front_wall").value = "0";
        document.getElementById("back_wall").value = "0";
        document.getElementById("rsideOpt").style.display = "none";
        document.getElementById("lsideOpt").style.display = "none";
        buildingConfig.leftsideWallSheetCount = 0;
        buildingConfig.rightsideWallSheetCount = 0;
        buildingConfig.leftwainscotOption = null;
        buildingConfig.rightwainscotOption = null;
        buildingConfig.frontwainscotOption = null;
        buildingConfig.backwainscotOption = null;
        buildingConfig.rightPartial = false;
        buildingConfig.leftPartial = false;
        buildingConfig.frontPartial = false;
        buildingConfig.backPartial = false;
    } else if (e.value == "Disable") {
        buildingConfig.RightsideWallOption = buildingConfig.LeftsideWallOption = buildingConfig.FrontsideWallOption = buildingConfig.BacksideWallOption = wallopen;
        e.value = "Enable";
        document.getElementById("left_wall_type_inp").value = "1";
        document.getElementById("right_wall_type_inp").value = "1";
        document.getElementById("front_wall").value = "1";
        document.getElementById("back_wall").value = "1";
        buildingConfig.leftwainscotOption = null;
        buildingConfig.rightwainscotOption = null;
        buildingConfig.frontwainscotOption = null;
        buildingConfig.backwainscotOption = null;
        buildingConfig.rightPartial = false;
        buildingConfig.leftPartial = false;
        buildingConfig.frontPartial = false;
        buildingConfig.backPartial = false;

        if (buildingConfig.frontlt.leanTo == "frontlt") {
            var conf = confirm("This change will remove the existing leanTo! Do You want to proceed?");
            if (conf) {
                buildingConfig.frontlt.leanTo = null;
                buildingConfig.frwrap = null;
                buildingConfig.flwrap = null;
                buildingConfig.ltFrontsideWallOption = wallopen;
                document.getElementById("leanToFrontLeft").checked = false;
                document.getElementById("leanToFrontRight").checked = false;
                document.getElementById("leanToFront").checked = false;
            } else {
                return;
            }
        }
        if (buildingConfig.backlt.leanTo == "backlt") {
            var conf = confirm("This change will remove the existing leanTo! Do You want to proceed?");
            if (conf) {
                buildingConfig.backlt.leanTo = null;
                buildingConfig.brwrap = null;
                buildingConfig.blwrap = null;
                buildingConfig.ltBacksideWallOption = wallopen;
                document.getElementById("leanToBackRight").checked = false;
                document.getElementById("leanToBackLeft").checked = false;
                document.getElementById("leanToBack").checked = false;
            } else {
                return;
            }
        }
    }
    eventHandler.dispatchEvent(encloseBuildingChange);
}
$(document).click(function() {
    var nos = Math.ceil((buildingConfig.w / 12) / 5);
    var step = buildingConfig.w / nos;

});
$(document).click(function() {
    var nos = Math.ceil((buildingConfig.l / 12) / 5);
    var step = buildingConfig.l / nos;

});
partialEndSupports = function(n, side) {
    side = side || "Front";
    var _this = this;
    var wainscotHeight = 3 * 12;
    this.side = side;
    this.init = function() {
        var geometry = new three.BoxGeometry(2.5, wainscotHeight, 2.5);
        var material = createSteelMaterial();
        this.mesh = new three.Mesh(geometry, material);
        this.updateMesh();
        return this
    };
    this.updateMesh = function() {
        var nos = Math.ceil(buildingConfig.w / (max_vsupport_width * 12));
        var unit_space = buildingConfig.w / nos;
        var posx = -1 * buildingConfig.w / 2 + n * unit_space;
        var wallOption = buildingConfig.FrontsideWallOption;
        var partialOption = buildingConfig.frontPartial;
        if (side != "Front") {
            wallOption = buildingConfig.BacksideWallOption;
            partialOption = buildingConfig.backPartial;
        }
        _this.mesh.visible = false;
        if (posx < buildingConfig.w / 2 && wallOption == wallopen && partialOption) {
            _this.mesh.visible = true;
        }
        var d_from_corner = buildingConfig.w / 2 - posx;
        if (posx < 1) {
            d_from_corner = posx + buildingConfig.w / 2;
        }
        var zval = -1.25;
        if (side == "Back") {
            zval = -buildingConfig.l + 1.25;
        }
        _this.mesh.position.set(posx - 1.25, wainscotHeight / 2, zval);
    };
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
    eventHandler.addEventListener(wainscotOnChange, this.updateMesh);
};
triplewideSupport = function(n) {
    var _this = this;
    this.init = function() {
        var geometry = new three.BoxGeometry(2.5, 1, 2.5);
        var material = createSteelMaterial();
        this.mesh = new three.Mesh(geometry, material);
        this.updateMesh();
        return this
    };
    this.updateMesh = function() {
        var num = Math.ceil(buildingConfig.l / (5 * 12));
        var unit_space = (buildingConfig.l / num);
        var posz = -n * unit_space + 1.25;
        if (n == 0) {
            posz = -1.25;
        }
        _this.mesh.visible = false;
        if (posz >= -buildingConfig.l && buildingConfig.w > 25 * 12) {
            _this.mesh.visible = true;
        }
        if (posz == -buildingConfig.l + 1.25 && buildingConfig.BacksideWallOption != wallopen) {
            _this.mesh.visible = false;
        }
        if (posz == -1.25 && buildingConfig.FrontsideWallOption != wallopen) {
            _this.mesh.visible = false;
        }
        var d_from_corner = buildingConfig.w / 2;
        roundy_val = roundy;
        var d_round_corner = d_from_corner - roundx;
        if (buildingConfig.RoofSyle == AFrameRoof) {
            d_round_corner = d_from_corner;
            roundy_val = 0;
        }
        var vh = d_round_corner / 4 + roundy_val;
        var height = 20;
        _this.mesh.scale.y = (height - .25);
        _this.mesh.position.set(0, buildingConfig.h + vh - height / 2 - .25, posz);
    };
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
    eventHandler.addEventListener(wainscotOnChange, this.updateMesh);
};

function sidePartialWall(side) {
    side = side || "Left";
    var _this = this;
    this.side = side;
    var wainscotHeight = 36;
    this.init = function() {
        var geometry1 = new three.BoxGeometry(0.1, wainscotHeight, buildingConfig.l);
        var material = createMeshPhongMaterial();
        this.mesh1 = new three.Mesh(this.geometry1, material);
        this.mesh1.geometry.verticesNeedUpdate = true;
        this.mesh1.geometry.dynamic = true;
        this.mesh1.wid = "SideWall";
        this.mesh1.swid = this.side;
        this.mesh1.name = "SideWall-" + this.side;
        this.mesh1.wallInstance = this;
        this.onWalloptionChange(side)();
        this.updateMesh();
        return this
    };
    this.updateTexture = function() {
        var m;
        _this.side == "Left" ? m = 1 : m = -1;
        var white = new three.Color(Colours.white.hex);
        var clr = new three.Color(Colours[buildingConfig.sideWallColour].hex);
        _this.mesh1.geometry.faces.forEach(function(f) {
            if (m * f.normal.x > 0 && insideView) {
                f.color = white;
            } else {
                f.color = clr;
            }
        });
        _this.mesh1.material.vertexColors = three.FaceColors;
    };
    this.updateMesh = function() {
        var m = 1;
        var conf = buildingConfig.RightsideWallOption;
        var rotation = 0;
        if (_this.side == "Left") {
            m = -1;
            conf = buildingConfig.LeftsideWallOption;
        }
        if (buildingConfig.sideWallOrientation == HOrientation) {
            _this.mesh1.geometry = new three.BoxGeometry(0.1, wainscotHeight, buildingConfig.l, 1, wainscotHeight * 10, 1);
        } else if (buildingConfig.sideWallOrientation == VOrientation) {
            rotation = Math.PI / 2;
            _this.mesh1.geometry = new three.BoxGeometry(0.1, buildingConfig.l, wainscotHeight, 1, buildingConfig.l * 10, 1);
        }
        _this.mesh1.position.set(m * (buildingConfig.w / 2 + .1), wainscotHeight / 2, -1 * (buildingConfig.l) / 2);
        if (buildingConfig.RoofOrientation == VOrientation && buildingConfig.sideWallOrientation == HOrientation) {
            _this.mesh1.position.y = wainscotHeight / 2 + .9;
        }
        _this.mesh1.geometry.vertices.forEach(function(v) {
            dfromt = Math.abs(v.y);
            if (((dfromt % 9) < 0.75 || (dfromt % 9) > 8.25)) {
                var mid = parseInt(dfromt / 9) * 9;
                var l = 0.75 - (mid - dfromt);
                v.x = m * 0.75 * Math.sin(l * Math.PI / 1.5);
            } else if ((dfromt % 3 < 0.25 || (dfromt % 3) > 2.75)) {
                var mid = parseInt(dfromt / 3) * 3;
                var l = 0.25 - (mid - dfromt);
                v.x = m * 0.25 * Math.sin(l * Math.PI / 0.5);
            }
        });
        _this.mesh1.material.vertexColors = three.FaceColors;
        _this.mesh1.rotation.x = rotation;
        _this.onWalloptionChange(_this.side)();
        _this.mesh1.updateMatrix();
        _this.updateTexture();
    };
    this.onWalloptionChange = function(side) {
        return function() {
            if (side == _this.side) {
                var sideval = buildingConfig.RightsideWallOption;
                var partial = buildingConfig.rightPartial;
                if (side == "Left") {
                    sideval = buildingConfig.LeftsideWallOption;
                    partial = buildingConfig.leftPartial;
                }
                _this.mesh1.visible = (sideval == wallopen && partial);
            }
        }
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(sideWallChange, this.updateMesh);
    eventHandler.addEventListener(sidewallOrientationChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(wainscotOnChange, this.updateMesh);
    eventHandler.addEventListener(wainscotColorChange, this.updateMesh);
    eventHandler.addEventListener(orientationChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
    eventHandler.addEventListener(sideWallChange, this.updateMesh);
    eventHandler.addEventListener(sidewallColorChange, this.updateMesh);
}

function endPartialWall(side) {
    var wainscotHeight = 36;
    var _this = this;
    side = side || "Front";
    this.side = side;
    var m;
    _this.side == "Front" ? m = 1 : m = -1;
    this.init = function() {
        var geometry1 = new three.BoxGeometry(buildingConfig.w, wainscotHeight, 0.125);
        var material = createMeshPhongMaterial(null, null);
        this.mesh1 = new three.Mesh(geometry1, material);
        this.mesh1.wallInstance = this;
        this.mesh1.wid = "EndWall";
        this.mesh1.swid = this.side;
        this.mesh1.name = "AEndWall-" + side;
        this.updateMesh();
        return this;
    };
    this.updateTexture = function() {
        var white = new three.Color(Colours.white.hex);
        var clr = new three.Color(Colours[buildingConfig.endWallColour].hex);
        _this.mesh1.geometry.faces.forEach(function(f) {
            if (m * f.normal.z < 0 && insideView) {
                f.color = white;
            } else {
                f.color = clr;
            }
        });
        _this.mesh1.material.vertexColors = three.FaceColors;
    };
    this.updateMesh = function() {
        var wallOption = buildingConfig.FrontsideWallOption;
        var partialOption = buildingConfig.frontPartial;
        if (side != "Front") {
            wallOption = buildingConfig.BacksideWallOption;
            partialOption = buildingConfig.backPartial;
        }
        var baseh = buildingConfig.h - (wainscotHeight + buildingConfig.w / 8) / 2;
        if (buildingConfig.endWallOrientation == HOrientation) {
            _this.mesh1.geometry = new three.BoxGeometry(buildingConfig.w, wainscotHeight, 0.125, 1, wainscotHeight * 10, 1);
            var yval_ref = -wainscotHeight / 2;
            if (buildingConfig.RoofSyle == AFrameRoof) {
                yval_ref = baseh;
            }
            _this.mesh1.geometry.vertices.forEach(function(v, i) {
                var yval = Math.abs(yval_ref + v.y);
                if (((yval % 9) < 0.75 || (yval % 9) > 8.25)) {
                    var mid = parseInt(yval / 9) * 9;
                    var l = 0.75 - (mid - yval);
                    v.z = v.z + m * 0.75 * Math.sin(l * Math.PI / 1.5);
                } else if ((yval % 3 < 0.25 || (yval % 3) > 2.75)) {
                    var mid = parseInt(yval / 3) * 3;
                    var l = 0.25 - (mid - yval);
                    v.z = v.z + m * 0.25 * Math.sin(l * Math.PI / 0.5);
                }
            });
        } else {
            _this.mesh1.geometry = new three.BoxGeometry(buildingConfig.w, wainscotHeight, 0.125, buildingConfig.w * 10, 1, 1);
            _this.mesh1.geometry.vertices.forEach(function(v, i) {
                var xv = Math.abs(v.x + buildingConfig.w / 2);
                if (((xv % 9) < 0.75 || (xv % 9) > 8.25)) {
                    var mid = parseInt(xv / 9) * 9;
                    var l = 0.75 - (mid - xv);
                    v.z = v.z + m * 0.75 * Math.sin(l * Math.PI / 1.5);
                } else if ((xv % 3 < 0.25 || (xv % 3) > 2.75)) {
                    var mid = parseInt(xv / 3) * 3;
                    var l = 0.25 - (mid - xv);
                    v.z = v.z + m * 0.25 * Math.sin(l * Math.PI / 0.5);
                }
            });
        }
        _this.mesh1.visible = (wallOption == wallopen && partialOption);
        var zval;
        _this.side == "Front" ? zval = 0.1 : zval = -(buildingConfig.l + .1);
        if (buildingConfig.RoofSyle == StandardRoof) {
            _this.side == "Front" ? zval = 0.1 : zval = -(buildingConfig.l + .15);
        }
        _this.mesh1.position.set(0, wainscotHeight / 2, zval);
        _this.updateTexture();
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(endwallOrientationChange, this.updateMesh);
    eventHandler.addEventListener(wainscotOnChange, this.updateMesh);
    eventHandler.addEventListener(wainscotColorChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(orientationChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
    eventHandler.addEventListener(sideWallChange, this.updateMesh);
    eventHandler.addEventListener(endwallColourChange, this.updateMesh);
}

var spaceRightFrom = function(e) {
    var dist = e.value;
    var did = e.getAttribute('did');
    var isCollide = false;
    var drag_obj = DragableObjectmap[parseInt(did)];
    var arrow_length = 0;
    var length_diff = 0;
    if (drag_obj.label == rollupDL || drag_obj.label == rollFR) {
        drag_obj.mesh_wrapper.visible = false;
    }

    drag_obj.copyPosition();

    var newPosition = {
        x: drag_obj.mesh.position.x,
        y: drag_obj.mesh.position.y,
        z: drag_obj.mesh.position.z,
        r: drag_obj.mesh.rotation.y
    };
    switch (drag_obj.includedWall.swid) {
        case "Front":
            newPosition.x = -buildingConfig.w / 2 + dist * 12 + drag_obj.width / 2;
            break;
        case "Back":
            newPosition.x = buildingConfig.w / 2 - dist * 12 - drag_obj.width / 2;
            break;
        case "Left":
            newPosition.z = (-buildingConfig.l + dist * 12 + drag_obj.width / 2) ;
            break;
        case "Right":
            newPosition.z = 0 - (dist * 12 + drag_obj.width / 2) ;
            break;
    }

    drag_obj.setPosition(newPosition.x, newPosition.y, newPosition.z, newPosition.r);
    switch (drag_obj.includedWall.swid) {
        case "Front":
            arrow_length = difference(-buildingConfig.w / 2, (drag_obj.mesh.position.x - drag_obj.width / 2)) + 10;
            length_diff = arrow_length + drag_obj.width - buildingConfig.w;
            break;
        case "Back":
            arrow_length = difference(buildingConfig.w / 2, (drag_obj.mesh.position.x + drag_obj.width / 2)) + 10;
            length_diff = arrow_length + drag_obj.width - buildingConfig.w;
            break;
        case "Left":
            arrow_length = difference(-buildingConfig.l, (drag_obj.mesh.position.z - drag_obj.width / 2) * 1.05882352941) + 16;
            length_diff = arrow_length + drag_obj.width - buildingConfig.l;
            break;
        case "Right":
            arrow_length = difference(0, (drag_obj.mesh.position.z + drag_obj.width / 2) * 1.05882352941);
            length_diff = arrow_length + drag_obj.width - buildingConfig.l;
            break;
    }

    if (length_diff > 0) {
        drag_obj.resetPosition();
        isCollide = true;
    }

    if (!drag_obj.addedtoscreen && !isCollide) {
        drag_obj.addToScreen();
    }

    if (drag_obj.addedtoscreen) {
        drag_obj.update_dragable_dimension();
    }

    trussList.forEach(function (child) {
        child.updateMesh();
    });
};

function setInitialDoor() {
    if (!drag_obj_id) {
        return;
    }
    var isCollide = false;
    var drag_obj = DragableObjectmap[parseInt(drag_obj_id)];
    if (drag_obj.label == rollupDL || drag_obj.label == rollFR) {
        drag_obj.mesh_wrapper.visible = false;
    }
    var vector = new three.Vector3(0, 0, 0);
    var raycaster = new three.Raycaster();
    vector.unproject(globals.camera);
    raycaster.set(globals.camera.position, vector.sub(globals.camera.position).normalize());
    wallObjects.map(function(wo) {
        wo.material.opacity = 0.4;
        wo.material.transparent = true;
    });
    var intersects = raycaster.intersectObjects(wallObjects);
    if (intersects.length) {
        var isec = intersects[0];
        var dir = getDirection(isec.object);
        var val_msg = drag_obj.validate_dop(isec, dir);
        if (val_msg) {
            drag_obj.copyPosition();
            drag_obj.setPosition(isec.point.x, isec.point.y, isec.point.z, dir.rotation);
            /*
            var csubset = [];
            for (var i = 0; i < collisionObjects.length; i++) {
                if (collisionObjects[i] != drag_obj.mesh) {
                    csubset.push(collisionObjects[i])
                }
            }
            if (drag_obj.isColliding(csubset) || drag_obj.checkForCuttingTruss()) {
                drag_obj.resetPosition();
                isCollide = true;
            }
            */
            if (!drag_obj.addedtoscreen && !isCollide) {
                drag_obj.addToScreen();
            }

            if (drag_obj.addedtoscreen) {
                drag_obj.update_dragable_dimension();
                //CalculatePrice();
                //displayStatus();
            }

            trussList.forEach(function(child) {
                child.updateMesh();
            });
        }
    }
    //makehole();

    mouseup();

    if (!drag_obj.addedtoscreen) {
        tempAlert();
    }
}

function makehole() {
    if (!drag_obj_id) {
        return
    }
    var isCollide = false;
    var drag_obj = DragableObjectmap[parseInt(drag_obj_id)];

    var width = drag_obj.includedWall.geometry.parameters.width / 2;
    var height = drag_obj.includedWall.geometry.parameters.height / 2;
    var depth = drag_obj.includedWall.geometry.parameters.depth / 2;
    var shape = new three.Shape();
    shape.moveTo(-width, height);
    shape.lineTo(-width, -height);
    shape.lineTo(width, -height);
    shape.lineTo(width, height);
    shape.lineTo(-width, height);


    var pointAtWall = {
        x: drag_obj.mesh.position.x,
        y: drag_obj.mesh.position.y,
        z: drag_obj.mesh.position.z,
        r: drag_obj.mesh.rotation.y
    };
    var wWidth = drag_obj.width * 0.5;
    var wHeight = drag_obj.height * 0.5;
    var wDepth = drag_obj.depth * 0.5;
    var hole = new three.Path();
    hole.moveTo(pointAtWall.x - wWidth, pointAtWall.y + wHeight);
    hole.lineTo(pointAtWall.x - wWidth, pointAtWall.y - wHeight);
    hole.lineTo(pointAtWall.x + wWidth, pointAtWall.y - wHeight);
    hole.lineTo(pointAtWall.x + wWidth, pointAtWall.y + wHeight);
    hole.lineTo(pointAtWall.x - wWidth, pointAtWall.y + wHeight);

    var shape2 = new three.Shape();
    shape2.moveTo(pointAtWall.x - wWidth, pointAtWall.y + wHeight);
    shape2.lineTo(pointAtWall.x - wWidth, pointAtWall.y - wHeight);
    shape2.lineTo(pointAtWall.x + wWidth, pointAtWall.y - wHeight);
    shape2.lineTo(pointAtWall.x + wWidth, pointAtWall.y + wHeight);
    shape2.lineTo(pointAtWall.x - wWidth, pointAtWall.y + wHeight);

    shape.holes.push(hole);

    var extrudeSettings = {
        amount: depth,
        bevelEnabled: false
    };
    var extrudeGeometry = new THREE.ExtrudeBufferGeometry(shape2, extrudeSettings);
    extrudeGeometry.translate(0, 0, -depth);
    drag_obj.includedWall.geometry.dispose();
    drag_obj.includedWall.geometry = extrudeGeometry;
}