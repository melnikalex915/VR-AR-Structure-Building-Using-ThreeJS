maxSideSupport = lengthOptions[0] / max_vsupport_width;
maxEndSupport = Math.ceil(widthoptions[0] / max_vsupport_width);
maxHatChannel = (widthoptions[0] / 2) / max_vsupport_width;

function loadLeantos() {
    lcs = new leantoWraptopcornerSupport().init();
    globals.mainObj.add(lcs.flwrap_support_mesh);
    globals.mainObj.add(lcs.mesh);
    globals.mainObj.add(lcs.mesh1);
    globals.mainObj.add(lcs.mesh2);
    globals.mainObj.add(lcs.mesh3);
    globals.mainObj.add(lcs.mesh4);
    globals.mainObj.add(lcs.mesh5);
    globals.mainObj.add(lcs.mesh6);
    globals.mainObj.add(lcs.mesh7);
    globals.mainObj.add(lcs.fleft_mesh);
    globals.mainObj.add(lcs.fright_mesh);
    globals.mainObj.add(lcs.bleft_mesh);
    globals.mainObj.add(lcs.bright_mesh);
    globals.mainObj.add(lcs.fleft_mesh1);
    globals.mainObj.add(lcs.fright_mesh1);
    globals.mainObj.add(lcs.bleft_mesh1);
    globals.mainObj.add(lcs.bright_mesh1);
    globals.mainObj.add(lcs.frwrap_support_mesh);
    globals.mainObj.add(lcs.blwrap_support_mesh);
    globals.mainObj.add(lcs.brwrap_support_mesh);
    for (i = 0; i <= maxSideSupport + 1; i++) {
        var lsSupport = new leantoSideSupport(i, "left").init();
        var rsSupport = new leantoSideSupport(i, "right").init();
        var lttruss = new leantoTruss(i, "left").init();
        var rttruss = new leantoTruss(i, "right").init();
        var rbrace = new loadSideBrace(i, "right").init();
        var lbrace = new loadSideBrace(i, "left").init();
        trussList.push(lsSupport);
        trussList.push(rsSupport);
        globals.mainObj.add(lsSupport.mesh);
        globals.mainObj.add(rsSupport.mesh);
        globals.mainObj.add(lttruss.mesh);
        globals.mainObj.add(rttruss.mesh);
        globals.mainObj.add(rbrace.mesh);
        globals.mainObj.add(lbrace.mesh);
    }
    for (i  = 0; i <= 3 * maxEndSupport; i++) {
        var fsSupport = new leantoEndSupport(i, "front").init();
        var bsSupport = new leantoEndSupport(i, "back").init();
        var ftruss = new leantoEndTruss(i, "front").init();
        var btruss = new leantoEndTruss(i, "back").init();
        var fbrace = new endloadSideBrace(i, "front").init();
        var bbrace = new endloadSideBrace(i, "back").init();
        trussList.push(fsSupport);
        trussList.push(bsSupport);
        globals.mainObj.add(fbrace.mesh);
        globals.mainObj.add(bbrace.mesh);
        globals.mainObj.add(fsSupport.mesh);
        globals.mainObj.add(bsSupport.mesh);
        globals.mainObj.add(ftruss.mesh);
        globals.mainObj.add(btruss.mesh);
    }
    for (i = 1; i <= maxHatChannel + 1; i++) {
        var rhatChannel = new leantoHatChannels(i, "right").init();
        var lhatChannel = new leantoHatChannels(i, "left").init();
        var lafsup = new leantoAFSupport(i, "left").init();
        var rafsup = new leantoAFSupport(i, "right").init();
        globals.mainObj.add(lafsup.mesh1);
        globals.mainObj.add(lafsup.mesh2);
        globals.mainObj.add(rafsup.mesh1);
        globals.mainObj.add(rafsup.mesh2);
        globals.mainObj.add(lhatChannel.mesh);
        globals.mainObj.add(rhatChannel.mesh);
    }
    for (i = 0; i <= maxHatChannel + 1; i++) {
        var fhatChannel = new endleantoHatChannels(i, "front").init();
        var bhatChannel = new endleantoHatChannels(i, "back").init();
        var fafsup = new endleantoAFSupport(i, "front").init();
        var bafsup = new endleantoAFSupport(i, "back").init();
        globals.mainObj.add(fafsup.mesh1);
        globals.mainObj.add(fafsup.mesh2);
        globals.mainObj.add(bafsup.mesh1);
        globals.mainObj.add(bafsup.mesh2);
        globals.mainObj.add(fhatChannel.mesh);
        globals.mainObj.add(bhatChannel.mesh);
    }
    for (i = 1; i <= maxEndSupport; i++) {}
    var lsRoof = new leantoSideRoof("left").init();
    var rsRoof = new leantoSideRoof("right").init();
    var fsRoof = new leantoEndRoof("front").init();
    var bsRoof = new leantoEndRoof("back").init();
    var rltSupport = new ltoSupports("right").init();
    var lltSupport = new ltoSupports("left").init();
    var fltSupport = new ltoEndSupports("front").init();
    var bltSupport = new ltoEndSupports("back").init();
    var lltbase = new loadBaseline("left").init();
    var rltbase = new loadBaseline("right").init();
    var fltbase = new loadEndBaseline("front").init();
    var bltbase = new loadEndBaseline("back").init();
    var rbase = new sidebaseObj("right").init();
    var lbase = new sidebaseObj("left").init();
    var fbase = new endbaseObj("front").init();
    var bbase = new endbaseObj("back").init();
    var fwbase = new endbasewrapObj("front").init();
    var bwbase = new endbasewrapObj("back").init();
    globals.mainObj.add(fwbase.mesh1);
    globals.mainObj.add(fwbase.mesh2);
    globals.mainObj.add(bwbase.mesh1);
    globals.mainObj.add(bwbase.mesh2);
    var frrc = new frRidgeCap().init();
    var flrc = new flRidgeCap().init();
    var brrc = new brRidgeCap().init();
    var blrc = new blRidgeCap().init();
    globals.mainObj.add(frrc.mesh);
    globals.mainObj.add(flrc.mesh);
    globals.mainObj.add(brrc.mesh);
    globals.mainObj.add(blrc.mesh);
    globals.mainObj.add(lsRoof.mesh);
    globals.mainObj.add(rsRoof.mesh);
    globals.mainObj.add(fsRoof.mesh);
    globals.mainObj.add(bsRoof.mesh);
    globals.mainObj.add(lltSupport.mesh1);
    globals.mainObj.add(lltSupport.mesh2);
    globals.mainObj.add(rltSupport.mesh1);
    globals.mainObj.add(rltSupport.mesh2);
    globals.mainObj.add(bltSupport.mesh1);
    globals.mainObj.add(bltSupport.mesh2);
    globals.mainObj.add(fltSupport.mesh1);
    globals.mainObj.add(fltSupport.mesh2);
    globals.mainObj.add(lltbase.mesh);
    globals.mainObj.add(rltbase.mesh);
    globals.mainObj.add(fltbase.mesh);
    globals.mainObj.add(bltbase.mesh);
    globals.mainObj.add(fbase.mesh);
    globals.mainObj.add(bbase.mesh);
    globals.mainObj.add(rbase.mesh);
    globals.mainObj.add(lbase.mesh);
}

function loadleantoWalls() {
    var wgroup = new three.Group();
    basicStructure.add(wgroup);
    var swl = new LeantoSideWall("Left").init();
    var swr = new LeantoSideWall("Right").init();
    var ewf = new LeantoEndWall("Front").init();
    var ewb = new LeantoEndWall("Back").init();
    wgroup.add(swl.mesh);
    wgroup.add(swr.mesh);
    wgroup.add(ewf.mesh);
    wgroup.add(ewb.mesh);
    wallObjects.push(swl.mesh);
    wallObjects.push(swr.mesh);
    wallObjects.push(ewf.mesh);
    wallObjects.push(ewb.mesh);
    var swwl = new leantoSideWainscot("Left").init();
    var swwr = new leantoSideWainscot("Right").init();
    wgroup.add(swwl.mesh);
    wgroup.add(swwr.mesh);
    wallObjects.push(swwl.mesh);
    wallObjects.push(swwr.mesh);
    var ewwf = new leantoEndWainscot("Front").init();
    var ewwb = new leantoEndWainscot("Back").init();
    wgroup.add(ewwf.mesh);
    wgroup.add(ewwb.mesh);
    wallObjects.push(ewwf.mesh);
    wallObjects.push(ewwb.mesh);
    for (i = 0; i < 5; i++) {
        var sltrim = new sideltTrims(i, "Left").init();
        var srtrim = new sideltTrims(i, "Right").init();
        var eftrim = new endltTrims(i, "Front").init();
        var ebtrim = new endltTrims(i, "Back").init();
        globals.mainObj.add(sltrim.mesh);
        globals.mainObj.add(srtrim.mesh);
        globals.mainObj.add(ebtrim.mesh);
        globals.mainObj.add(eftrim.mesh);
    }
    var rssup = new sideAFrametrim("Right").init();
    var lssup = new sideAFrametrim("Left").init();
    var fssup = new endAFrametrim("Front").init();
    var bssup = new endAFrametrim("Back").init();
    globals.mainObj.add(rssup.mesh);
    globals.mainObj.add(lssup.mesh);
    globals.mainObj.add(fssup.mesh);
    globals.mainObj.add(bssup.mesh);
    var rwrap = new ltwainscotTrim("Right").init();
    var lwrap = new ltwainscotTrim("Left").init();
    var fwrap = new ltwainscotTrim("Front").init();
    var bwrap = new ltwainscotTrim("Back").init();
    globals.mainObj.add(rwrap.mesh);
    globals.mainObj.add(lwrap.mesh);
    globals.mainObj.add(fwrap.mesh);
    globals.mainObj.add(bwrap.mesh);
    var rwsup = new ltenclosedTrim("Right").init();
    globals.mainObj.add(rwsup.mesh1);
    globals.mainObj.add(rwsup.mesh2);
    var lwsup = new ltenclosedTrim("Left").init();
    globals.mainObj.add(lwsup.mesh1);
    globals.mainObj.add(lwsup.mesh2);
    var fwsup = new ltenclosedTrim("Front").init();
    globals.mainObj.add(fwsup.mesh1);
    globals.mainObj.add(fwsup.mesh2);
    var bwsup = new ltenclosedTrim("Back").init();
    globals.mainObj.add(bwsup.mesh1);
    globals.mainObj.add(bwsup.mesh2);
}

function checkforSidewallcut(support) {
    var sides = "Right";
    if (support.side == "left") {
        sides = "Left";
    }
    var cutHeight = 0;
    buildingConfig.addonsObj.rollup.forEach(function(aObj) {
        if (aObj.includedWall.wid == "ltSideWall" && aObj.includedWall.swid == sides) {
            var left = aObj.mesh.position.z - aObj.width / 2;
            var right = aObj.mesh.position.z + aObj.width / 2;
            if (left <= support.mesh.position.z && support.mesh.position.z <= right) {
                var tcutHeight = aObj.mesh.position.y + aObj.height / 2 + 1.25;
                if (cutHeight < tcutHeight) {
                    cutHeight = tcutHeight;
                }
            }
        }
    });
    return cutHeight
}

function checkforEndwallcut(support) {
    var sides = "Front";
    if (support.side == "back") {
        sides = "Back";
    }
    var cutHeight = 0;
    buildingConfig.addonsObj.rollup.forEach(function(aObj) {
        if (aObj.includedWall.wid == "ltEndwall" && aObj.includedWall.swid == sides) {
            var left = aObj.mesh.position.x - aObj.width / 2;
            var right = aObj.mesh.position.x + aObj.width / 2;
            if (left <= support.mesh.position.x && support.mesh.position.x <= right) {
                var tcutHeight = aObj.mesh.position.y + aObj.height / 2 + 1.25;
                if (cutHeight < tcutHeight) {
                    cutHeight = tcutHeight;
                }
            }
        }
    });
    return cutHeight
}

function visibleCheck(posz, side) {
    var lengthValues = 0;
    var leanto = "leftlt";
    lengthValues = -buildingConfig.l;
    if (buildingConfig.blwrap == "blwrap") {
        lengthValues -= buildingConfig.leftlt.ltowidth;
    }
    if (side == "right") {
        leanto = "rightlt";
        lengthValues = -buildingConfig.l;
        if (buildingConfig.brwrap == "brwrap") {
            lengthValues -= buildingConfig.rightlt.ltowidth;
        }
    }
    if (posz == null) {
        return;
    }
    if (Math.ceil(posz) < Math.ceil(lengthValues + buildingConfig[leanto].cut2) || buildingConfig[leanto].leanTo == null || buildingConfig[leanto].legheight > buildingConfig.h - 12 || buildingConfig[leanto].drop > (buildingConfig.h - buildingConfig[leanto].legheight - 12)) {
        return true;
    }
    return false;
}

function leantoSideSupport(n, side) {
    side = side || "left";
    var _this = this;
    _this.side = side;
    this.init = function() {
        var geometry = new three.BoxGeometry(2.5, 1, 2.5);
        var material = createSteelMaterial();
        this.mesh = new three.Mesh(geometry, material);
        this.updateMesh();
        return this
    };
    this.updateMesh = function() {
        var m = -1;
        _this.mesh.visible = false;
        if (_this.side == "right") {
            m = 1;
            var meshWidth = buildingConfig.l;
            if (buildingConfig.frwrap == "frwrap") {
                meshWidth += buildingConfig.rightlt.ltowidth - buildingConfig.rightlt.cut2;
            }
            if (buildingConfig.brwrap == "brwrap") {
                meshWidth += buildingConfig.rightlt.ltowidth - buildingConfig.rightlt.cut1;
            }
            var nos = Math.ceil((meshWidth / 12) / 5);
            var step = meshWidth / nos;
            var xval = n * step;
            var posz = -((buildingConfig.rightlt.cut1) + xval);
            if (buildingConfig.brwrap == "brwrap") {
                posz = (buildingConfig.rightlt.cut1) - xval;
            }
            if (buildingConfig.frwrap == "frwrap") {
                posz = (buildingConfig.rightlt.ltowidth - xval);
            }
            if (buildingConfig.rightlt.leanTo == "rightlt") {
                _this.mesh.visible = true;
            }
            if (visibleCheck((posz), "right")) {
                _this.mesh.visible = false;
            }
            var vh = buildingConfig.rightlt.legheight;
            var cutHeight = checkforSidewallcut(_this);
            var heightCut = vh - cutHeight;
            _this.mesh.scale.y = heightCut;
            _this.mesh.position.set(m * (buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth), cutHeight + heightCut / 2, posz + 1.25);
        }
        if (_this.side == "left") {
            var meshWidth = buildingConfig.l;
            if (buildingConfig.flwrap == "flwrap") {
                meshWidth += buildingConfig.leftlt.ltowidth - buildingConfig.leftlt.cut2;
            }
            if (buildingConfig.blwrap == "blwrap") {
                meshWidth += buildingConfig.leftlt.ltowidth - buildingConfig.leftlt.cut1;
            }
            var nos = Math.ceil((meshWidth / 12) / 5);
            var step = meshWidth / nos;
            var xval = n * step;
            var posz = -((buildingConfig.leftlt.cut1) + xval);
            if (buildingConfig.blwrap == "blwrap") {
                posz = (buildingConfig.leftlt.cut1) - xval;
            }
            if (buildingConfig.flwrap == "flwrap") {
                posz = (buildingConfig.leftlt.ltowidth - xval);
            }
            if (buildingConfig.leftlt.leanTo == "leftlt") {
                _this.mesh.visible = true;
            }
            if (visibleCheck((posz), "left")) {
                _this.mesh.visible = false;
            }
            var vh = buildingConfig.leftlt.legheight;
            var cutHeight = checkforSidewallcut(_this);
            var heightCut = vh - cutHeight;
            _this.mesh.scale.y = heightCut;
            _this.mesh.position.set(m * (buildingConfig.w / 2 + buildingConfig.leftlt.ltowidth), cutHeight + heightCut / 2, posz + 1.25);
        }
    };
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoAdd, this.updateMesh);
    eventHandler.addEventListener(rightleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut1, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoAdd, this.updateMesh);
    eventHandler.addEventListener(leftleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function getAngle(side) {
    if (side == "right") {
        var hVal = buildingConfig.h - (buildingConfig.rightlt.legheight) - buildingConfig.rightlt.drop;
        var wVal = buildingConfig.rightlt.ltowidth + 6;
    }
    if (side == "left") {
        var hVal = buildingConfig.h - (buildingConfig.leftlt.legheight) - buildingConfig.leftlt.drop;
        var wVal = -buildingConfig.leftlt.ltowidth - 6;
    }
    var ltRoofWidth = Math.sqrt(hVal * hVal + wVal * wVal);
    var angle = Math.atan(wVal / hVal);
    return {
        angle: angle,
        ltRoofWidth: ltRoofWidth,
        hVal: hVal
    };
}

function leantoSideRoof(side) {
    side = side || "left";
    var _this = this;
    this.side = side;
    this.init = function() {
        var geometry = _this.getGeometry();
        material = createMeshPhongMaterial(null, null);
        material.vertexColors = three.FaceColors;
        material.side = three.DoubleSide;
        this.mesh = new three.Mesh(geometry, material);
        this.mesh.geometry.verticesNeedUpdate = true;
        this.mesh.geometry.dynamic = true;
        this.updateMesh();
        return this
    };
    this.getGeometry = function() {
        if (_this.side == "right") {
            var drawCorigatedShape = function(v, orientation) {
                if (orientation == 1) {
                    var x_val = Math.abs(v.x);
                } else {
                    x_val = Math.abs(v.z);
                }
                if ((x_val % 9) < 0.75 || (x_val % 9) > 8.25) {
                    var m = parseInt(x_val / 9) * 9;
                    var l = 0.75 - (m - x_val);
                    v.y = v.y + 0.75 * Math.sin(l * Math.PI / 1.5);
                } else if (x_val % 3 < 0.25 || (x_val % 3) > 2.75) {
                    var m = parseInt(x_val / 3) * 3;
                    var l = 0.25 - (m - x_val);
                    v.y = v.y + 0.25 * Math.sin(l * Math.PI / 0.5);
                }
            };
            var values = new getAngle("right");
            var len = buildingConfig.l - buildingConfig.rightlt.cut1 - buildingConfig.rightlt.cut2 + 12;
            var ltRoofWidth = values.ltRoofWidth;
            var tangle = Math.atan(ltRoofWidth / (buildingConfig.rightlt.ltowidth + 6));
            if (buildingConfig.leantoRoofOrientation == HOrientation) {
                var geometry = new three.BoxGeometry(ltRoofWidth, -.1, len, ltRoofWidth * 10, 1, 1);
                if (buildingConfig.frwrap == "frwrap" && buildingConfig.brwrap == "brwrap") {
                    geometry.vertices.forEach(function(v, i) {
                        var xval = v.x + ltRoofWidth / 2;
                        if (xval > 0 && v.z > -(buildingConfig.l / 2 + 6)) {
                            v.z = (v.z - 6) + (xval / Math.tan(tangle))
                        }
                        if (xval > 0 && v.z < 6) {
                            v.z = (v.z + 6) - (xval / Math.tan(tangle))
                        }
                        drawCorigatedShape(v, 1);
                    });
                } else if (buildingConfig.frwrap == "frwrap") {
                    geometry.vertices.forEach(function(v, i) {
                        var xval = v.x + ltRoofWidth / 2;
                        if (xval > 0 && v.z > -(buildingConfig.l / 2 - buildingConfig.rightlt.cut2 / 2 + 6)) {
                            v.z = (v.z - 6) + (xval / Math.tan(tangle))
                        }
                        drawCorigatedShape(v, 1);
                    });
                } else if (buildingConfig.brwrap == "brwrap") {
                    geometry.vertices.forEach(function(v, i) {
                        var xval = v.x + ltRoofWidth / 2;
                        if (xval > 0 && v.z < 6) {
                            v.z = (v.z + 6) - (xval / Math.tan(tangle))
                        }
                        drawCorigatedShape(v, 1);
                    });
                } else {
                    geometry.vertices.forEach(function(v, i) {
                        drawCorigatedShape(v, 1);
                    });
                }
            }
            if (buildingConfig.leantoRoofOrientation == VOrientation) {
                var geometry = new three.BoxGeometry(ltRoofWidth, -0.1, len + (2 * buildingConfig.rightlt.ltowidth), 1, 1, len + (2 * buildingConfig.rightlt.ltowidth) * 10);
                if (buildingConfig.frwrap == "frwrap" && buildingConfig.brwrap == "brwrap") {
                    var cutLength = len + (2 * buildingConfig.rightlt.ltowidth);
                    var leftLimit1 = (cutLength - (geometry.parameters.depth * 0.5));
                    var leftLimit2 = (cutLength - (geometry.parameters.depth * 0.5)) * -1;
                    geometry.vertices.forEach(v => {
                        v.z = v.z > leftLimit1 ? leftLimit : v.z;
                        v.z = v.z < leftLimit2 ? leftLimit : v.z;
                    });
                    geometry.vertices.forEach(v => {
                        var zSign = Math.sign(v.x);
                        if (v.x < 0) {
                            v.x = (v.z - leftLimit1) * Math.tan(tangle) + geometry.parameters.width * 0.5;
                            v.x = Math.abs(v.x) > geometry.parameters.width * 0.5 ? geometry.parameters.width * 0.5 * zSign : v.x;
                        }
                        if (v.x <= -ltRoofWidth / 2) {
                            v.x = -(v.z - leftLimit2) * Math.tan(tangle) + geometry.parameters.width * 0.5;
                            v.x = Math.abs(v.x) > geometry.parameters.width * 0.5 ? geometry.parameters.width * 0.5 * zSign : v.x;
                        }
                        drawCorigatedShape(v, -1);
                    });
                } else if (buildingConfig.frwrap == "frwrap") {
                    var cutLength = len + (2 * buildingConfig.rightlt.ltowidth);
                    var leftLimit = (cutLength - (geometry.parameters.depth * 0.5));
                    geometry.vertices.forEach(v => {
                        v.z = v.z > leftLimit ? leftLimit : v.z;
                    });
                    geometry.vertices.forEach(v => {
                        var zSign = Math.sign(v.x);
                        if (v.x < 0) {
                            v.x = (v.z - leftLimit) * Math.tan(tangle) + geometry.parameters.width * 0.5;
                            v.x = Math.abs(v.x) > geometry.parameters.width * 0.5 ? geometry.parameters.width * 0.5 * zSign : v.x;
                        }
                        if (v.z < -(buildingConfig.l / 2 - buildingConfig.rightlt.cut2 / 2 + 6)) {
                            v.x = 0;
                            v.z = -(buildingConfig.l / 2 - buildingConfig.rightlt.cut2 / 2 + 6)
                        }
                        drawCorigatedShape(v, -1);
                    });
                } else if (buildingConfig.brwrap == "brwrap") {
                    var cutLength = len + (2 * buildingConfig.rightlt.ltowidth);
                    var leftLimit = (cutLength - (geometry.parameters.depth * 0.5)) * -1;
                    geometry.vertices.forEach(v => {
                        v.z = v.z < leftLimit ? leftLimit : v.z;
                    });
                    geometry.vertices.forEach(v => {
                        var zSign = Math.sign(v.x);
                        if (v.x < 0) {
                            v.x = -(v.z - leftLimit) * Math.tan(tangle) + geometry.parameters.width * 0.5;
                            v.x = Math.abs(v.x) > geometry.parameters.width * 0.5 ? geometry.parameters.width * 0.5 * zSign : v.x;
                        }
                        if (v.z > (buildingConfig.l / 2 - buildingConfig.rightlt.cut1 / 2 + 6)) {
                            v.x = 0;
                            v.z = (buildingConfig.l / 2 - buildingConfig.rightlt.cut1 / 2 + 6)
                        }
                        drawCorigatedShape(v, -1);
                    });
                } else {
                    geometry.vertices.forEach(function(v) {
                        if (v.z < -(buildingConfig.l / 2 - buildingConfig.rightlt.cut1 / 2 - buildingConfig.rightlt.cut2 / 2 + 6)) {
                            v.x = 0;
                            v.z = -(buildingConfig.l / 2 - buildingConfig.rightlt.cut1 / 2 - buildingConfig.rightlt.cut2 / 2 + 6)
                        }
                        if (v.z > (buildingConfig.l / 2 - buildingConfig.rightlt.cut1 / 2 - buildingConfig.rightlt.cut2 / 2 + 6)) {
                            v.x = 0;
                            v.z = (buildingConfig.l / 2 - buildingConfig.rightlt.cut1 / 2 - buildingConfig.rightlt.cut2 / 2 + 6)
                        }
                        drawCorigatedShape(v, -1);
                    });
                }
            }
            geometry.computeFaceNormals();
            geometry.computeVertexNormals();
            var white = new three.Color(Colours.white.hex);
            var clr = new three.Color(Colours[buildingConfig.roofColour].hex);
            geometry.faces.forEach(function(f, i) {
                if (f.normal.y > 0) {
                    f.color = white;
                } else {
                    f.color = clr;
                }
            });
            return geometry
        }
        if (_this.side == "left") {
            var drawCorigatedShape = function(v, orientation) {
                if (orientation == 1) {
                    var x_val = Math.abs(v.x);
                } else {
                    x_val = Math.abs(v.z);
                }
                if ((x_val % 9) < 0.75 || (x_val % 9) > 8.25) {
                    var m = parseInt(x_val / 9) * 9;
                    var l = 0.75 - (-m - x_val);
                    v.y = v.y + 0.75 * Math.sin(-l * Math.PI / 1.5);
                } else if (x_val % 3 < 0.25 || (x_val % 3) > 2.75) {
                    var m = parseInt(x_val / 3) * 3;
                    var l = 0.25 - (-m - x_val);
                    v.y = v.y + 0.25 * Math.sin(-l * Math.PI / 0.5);
                }
            };
            var values = new getAngle("left");
            var len = buildingConfig.l - buildingConfig.leftlt.cut1 - buildingConfig.leftlt.cut2 + 12;
            var ltRoofWidth = values.ltRoofWidth;
            var tangle = Math.atan(ltRoofWidth / (buildingConfig.leftlt.ltowidth + 6));
            var geometry = new three.BoxGeometry(ltRoofWidth, -.1, len, ltRoofWidth * 10, 1, 1);
            if (buildingConfig.leantoRoofOrientation == HOrientation) {
                if (buildingConfig.flwrap == "flwrap" && buildingConfig.blwrap == "blwrap") {
                    geometry.vertices.forEach(function(v, i) {
                        var xval = v.x + ltRoofWidth / 2;
                        if (xval > 0 && v.z > -(buildingConfig.l / 2 + 6)) {
                            v.z = (v.z - 6) + (xval / Math.tan(tangle))
                        }
                        if (xval > 0 && v.z < 6) {
                            v.z = (v.z + 6) - (xval / Math.tan(tangle))
                        }
                        drawCorigatedShape(v, 1);
                    });
                } else if (buildingConfig.flwrap == "flwrap") {
                    geometry.vertices.forEach(function(v, i) {
                        var xval = v.x + ltRoofWidth / 2;
                        if (xval > 0 && v.z > -(buildingConfig.l / 2 - buildingConfig.leftlt.cut2 / 2 + 6)) {
                            v.z = (v.z - 6) + (xval / Math.tan(tangle))
                        }
                        drawCorigatedShape(v, 1);
                    });
                } else if (buildingConfig.blwrap == "blwrap") {
                    geometry.vertices.forEach(function(v, i) {
                        var xval = v.x + ltRoofWidth / 2;
                        if (xval > 0 && v.z < 6) {
                            v.z = (v.z + 6) - (xval / Math.tan(tangle))
                        }
                        drawCorigatedShape(v, 1);
                    });
                } else {
                    geometry.vertices.forEach(function(v, i) {
                        drawCorigatedShape(v, 1);
                    });
                }
            }
            if (buildingConfig.leantoRoofOrientation == VOrientation) {
                var geometry = new three.BoxGeometry(ltRoofWidth, -0.1, len + (2 * buildingConfig.rightlt.ltowidth), 1, 1, len + (2 * buildingConfig.rightlt.ltowidth) * 10);
                if (buildingConfig.flwrap == "flwrap" && buildingConfig.blwrap == "blwrap") {
                    var cutLength = len + (2 * buildingConfig.leftlt.ltowidth);
                    var leftLimit1 = (cutLength - (geometry.parameters.depth * 0.5));
                    var leftLimit2 = (cutLength - (geometry.parameters.depth * 0.5)) * -1;
                    geometry.vertices.forEach(v => {
                        v.z = v.z > leftLimit1 ? leftLimit : v.z;
                        v.z = v.z < leftLimit2 ? leftLimit : v.z;
                    });
                    geometry.vertices.forEach(v => {
                        var zSign = Math.sign(v.x);
                        if (v.x < 0) {
                            v.x = (v.z - leftLimit1) * Math.tan(tangle) + geometry.parameters.width * 0.5;
                            v.x = Math.abs(v.x) > geometry.parameters.width * 0.5 ? geometry.parameters.width * 0.5 * zSign : v.x;
                        }
                        if (v.x <= -ltRoofWidth / 2) {
                            v.x = -(v.z - leftLimit2) * Math.tan(tangle) + geometry.parameters.width * 0.5;
                            v.x = Math.abs(v.x) > geometry.parameters.width * 0.5 ? geometry.parameters.width * 0.5 * zSign : v.x;
                        }
                        drawCorigatedShape(v, -1);
                    });
                } else if (buildingConfig.flwrap == "flwrap") {
                    var cutLength = len + (2 * buildingConfig.leftlt.ltowidth);
                    var leftLimit = (cutLength - (geometry.parameters.depth * 0.5));
                    geometry.vertices.forEach(v => {
                        v.z = v.z > leftLimit ? leftLimit : v.z;
                    });
                    geometry.vertices.forEach(v => {
                        var zSign = Math.sign(v.x);
                        if (v.x < 0) {
                            v.x = (v.z - leftLimit) * Math.tan(tangle) + geometry.parameters.width * 0.5;
                            v.x = Math.abs(v.x) > geometry.parameters.width * 0.5 ? geometry.parameters.width * 0.5 * zSign : v.x;
                        }
                        if (v.z < -(buildingConfig.l / 2 - buildingConfig.leftlt.cut2 / 2 + 6)) {
                            v.x = 0;
                            v.z = -(buildingConfig.l / 2 - buildingConfig.leftlt.cut2 / 2 + 6)
                        }
                        drawCorigatedShape(v, -1);
                    });
                } else if (buildingConfig.blwrap == "blwrap") {
                    var cutLength = len + (2 * buildingConfig.leftlt.ltowidth);
                    var leftLimit = (cutLength - (geometry.parameters.depth * 0.5)) * -1;
                    geometry.vertices.forEach(v => {
                        v.z = v.z < leftLimit ? leftLimit : v.z;
                    });
                    geometry.vertices.forEach(v => {
                        var zSign = Math.sign(v.x);
                        if (v.x < 0) {
                            v.x = -(v.z - leftLimit) * Math.tan(tangle) + geometry.parameters.width * 0.5;
                            v.x = Math.abs(v.x) > geometry.parameters.width * 0.5 ? geometry.parameters.width * 0.5 * zSign : v.x;
                        }
                        if (v.z > (buildingConfig.l / 2 - buildingConfig.leftlt.cut1 / 2 + 6)) {
                            v.x = 0;
                            v.z = (buildingConfig.l / 2 - buildingConfig.leftlt.cut1 / 2 + 6)
                        }
                        drawCorigatedShape(v, -1);
                    });
                } else {
                    geometry.vertices.forEach(function(v) {
                        if (v.z < -(buildingConfig.l / 2 - buildingConfig.leftlt.cut1 / 2 - buildingConfig.leftlt.cut2 / 2 + 6)) {
                            v.x = 0;
                            v.z = -(buildingConfig.l / 2 - buildingConfig.leftlt.cut1 / 2 - buildingConfig.leftlt.cut2 / 2 + 6)
                        }
                        if (v.z > (buildingConfig.l / 2 - buildingConfig.leftlt.cut1 / 2 - buildingConfig.leftlt.cut2 / 2 + 6)) {
                            v.x = 0;
                            v.z = (buildingConfig.l / 2 - buildingConfig.leftlt.cut1 / 2 - buildingConfig.leftlt.cut2 / 2 + 6)
                        }
                        drawCorigatedShape(v, -1);
                    });
                }
            }
            geometry.computeFaceNormals();
            geometry.computeVertexNormals();
            var white = new three.Color(Colours.white.hex);
            var clr = new three.Color(Colours[buildingConfig.roofColour].hex);
            geometry.faces.forEach(function(f, i) {
                if (f.normal.y > 0) {
                    f.color = clr;
                } else {
                    f.color = white;
                }
            });
            return geometry
        }
    };
    this.updateMesh = function() {
        var values = new getAngle(side);
        var angle = values.angle;
        var ltRoofWidth = values.ltRoofWidth;
        var hVal = values.hVal;
        var overhang = 6;
        if (_this.side == "right") {
            centerX = buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth / 2 + overhang / 2;
            centerY = buildingConfig.h - buildingConfig.rightlt.drop - hVal / 2;
            centerZ = (-buildingConfig.l / 2 - (buildingConfig.rightlt.cut1 / 2 - buildingConfig.rightlt.cut2 / 2))
            if (buildingConfig.RoofSyle == AFrameRoof && buildingConfig.leantoRoofOrientation == VOrientation) {
                centerY = centerY + 1
            }
            _this.mesh.rotation.z = (angle - Math.PI / 2);
            _this.mesh.geometry = _this.getGeometry();
            _this.mesh.position.set(centerX, centerY, centerZ)
            _this.mesh.visible = false;
            if (buildingConfig.rightlt.leanTo == "rightlt") {
                _this.mesh.visible = true;
            }
            if (visibleCheck(null, "right")) {
                _this.mesh.visible = false;
            }
        }
        if (_this.side == "left") {
            centerX = buildingConfig.w / 2 + buildingConfig.leftlt.ltowidth / 2 + overhang / 2;
            centerY = buildingConfig.h - buildingConfig.leftlt.drop - hVal / 2;
            centerZ = (-buildingConfig.l / 2 - (buildingConfig.leftlt.cut1 / 2 - buildingConfig.leftlt.cut2 / 2))
            if (buildingConfig.RoofSyle == AFrameRoof && buildingConfig.leantoRoofOrientation == VOrientation) {
                centerY = centerY + 1
            }
            _this.mesh.geometry = _this.getGeometry();
            _this.mesh.rotation.z = (angle - Math.PI / 2);
            _this.mesh.position.set(-centerX, centerY, centerZ)
            _this.mesh.visible = false;
            if (buildingConfig.leftlt.leanTo == "leftlt") {
                _this.mesh.visible = true;
            }
            if (visibleCheck(null, "left")) {
                _this.mesh.visible = false;
            }
        }
        _this.mesh.updateMatrix();
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoAdd, this.updateMesh);
    eventHandler.addEventListener(rightleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut2, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoAdd, this.updateMesh);
    eventHandler.addEventListener(leftleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(orientationChange, this.updateMesh);
    eventHandler.addEventListener(leantoRoofOrientation, this.updateMesh);
    eventHandler.addEventListener(roofColorChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function leantoTruss(n, side) {
    side = side || "left";
    var _this = this;
    this.side = side;
    this.init = function() {
        var geometry = _this.getGeometry(1);
        var material = createSteelMaterial();
        this.mesh = new three.Mesh(geometry, material);
        this.updateMesh();
        return this
    };
    this.getGeometry = function(size) {
        return new three.BoxGeometry(size, 2, 2.5);
    };
    this.updateMesh = function() {
        var values = new getAngle(side);
        var angle = values.angle;
        var ltRoofWidth = values.ltRoofWidth;
        var hVal = values.hVal;
        if (_this.side == "right") {
            _this.mesh.visible = false;
            m = 1;
            var meshWidth = buildingConfig.l;
            if (buildingConfig.frwrap == "frwrap") {
                meshWidth += buildingConfig.rightlt.ltowidth - buildingConfig.rightlt.cut2;
            }
            if (buildingConfig.brwrap == "brwrap") {
                meshWidth += buildingConfig.rightlt.ltowidth - buildingConfig.rightlt.cut1;
            }
            var nos = Math.ceil((meshWidth / 12) / 5);
            var step = meshWidth / nos;
            var xval = n * step;
            var posz = -((buildingConfig.rightlt.cut1) + xval);
            if (buildingConfig.brwrap == "brwrap") {
                posz = (buildingConfig.rightlt.cut1) - xval;
            }
            if (buildingConfig.frwrap == "frwrap") {
                posz = (buildingConfig.rightlt.ltowidth - xval);
            }
            if (buildingConfig.rightlt.leanTo == "rightlt") {
                _this.mesh.visible = true;
            }
            if (visibleCheck((posz), "right")) {
                _this.mesh.visible = false;
            }
            centerX = buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth / 2 + 2;
            centerY = buildingConfig.h - buildingConfig.rightlt.drop - hVal / 2;
            _this.mesh.rotation.z = angle - Math.PI / 2;
            _this.mesh.geometry = _this.getGeometry(ltRoofWidth - 3);
            if (posz < -buildingConfig.l) {
                var tangle = Math.atan(ltRoofWidth / (buildingConfig.rightlt.ltowidth + 6));
                var cutlen = Math.abs((-buildingConfig.l - buildingConfig.rightlt.ltowidth) - posz);
                var sizeval = cutlen / Math.tan(tangle);
                _this.mesh.geometry = _this.getGeometry(sizeval + 6);
                centerX = buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth - sizeval / 2;
                var adiff = Math.abs(((buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth / 2)) - centerX);
                var h_dif = adiff * Math.tan(Math.PI / 2 - angle);
                centerY = centerY - h_dif;
            }
            if (posz > 0) {
                var tangle = Math.atan(ltRoofWidth / (buildingConfig.rightlt.ltowidth + 6));
                var cutlen = Math.abs(buildingConfig.rightlt.ltowidth - posz);
                var sizeval = cutlen / Math.tan(tangle);
                _this.mesh.geometry = _this.getGeometry(sizeval + 6);
                centerX = buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth - sizeval / 2;
                var adiff = Math.abs(((buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth / 2)) - centerX);
                var h_dif = adiff * Math.tan(Math.PI / 2 - angle);
                centerY = centerY - h_dif;
            }
            _this.mesh.position.set(centerX, centerY - 1.5, posz + 1.25);
        }
        if (_this.side == "left") {
            var meshWidth = buildingConfig.l;
            if (buildingConfig.flwrap == "flwrap") {
                meshWidth += buildingConfig.leftlt.ltowidth - buildingConfig.leftlt.cut2;
            }
            if (buildingConfig.blwrap == "blwrap") {
                meshWidth += buildingConfig.leftlt.ltowidth - buildingConfig.leftlt.cut1;
            }
            var nos = Math.ceil((meshWidth / 12) / 5);
            var step = meshWidth / nos;
            var xval = n * step;
            var posz = -((buildingConfig.leftlt.cut1) + xval);
            if (buildingConfig.blwrap == "blwrap") {
                posz = (buildingConfig.leftlt.cut1) - xval;
            }
            if (buildingConfig.flwrap == "flwrap") {
                posz = (buildingConfig.leftlt.ltowidth - xval);
            }
            if (buildingConfig.leftlt.leanTo == "leftlt") {
                _this.mesh.visible = true;
            }
            if (visibleCheck((posz), "left")) {
                _this.mesh.visible = false;
            }
            centerX = (buildingConfig.w / 2 + buildingConfig.leftlt.ltowidth / 2 + 2);
            centerY = buildingConfig.h - buildingConfig.leftlt.drop - hVal / 2;
            _this.mesh.rotation.z = (angle - Math.PI / 2);
            _this.mesh.geometry = _this.getGeometry(ltRoofWidth - 3);
            if (posz < -buildingConfig.l) {
                var tangle = Math.atan(ltRoofWidth / (buildingConfig.leftlt.ltowidth + 6));
                var cutlen = Math.abs((-buildingConfig.l - buildingConfig.leftlt.ltowidth) - posz);
                var sizeval = cutlen / Math.tan(tangle);
                _this.mesh.geometry = _this.getGeometry(sizeval + 6);
                centerX = buildingConfig.w / 2 + buildingConfig.leftlt.ltowidth - sizeval / 2;
                var adiff = Math.abs((buildingConfig.w / 2 + buildingConfig.leftlt.ltowidth / 2 + 2) - centerX);
                var h_dif = adiff * Math.tan(Math.PI / 2 - angle);
                centerY = centerY + h_dif;
            }
            if (posz > 0) {
                var tangle = Math.atan(ltRoofWidth / (buildingConfig.leftlt.ltowidth + 6));
                var cutlen = Math.abs(buildingConfig.leftlt.ltowidth - posz);
                var sizeval = cutlen / Math.tan(tangle);
                _this.mesh.geometry = _this.getGeometry(sizeval + 6);
                centerX = buildingConfig.w / 2 + buildingConfig.leftlt.ltowidth - sizeval / 2;
                var adiff = Math.abs((buildingConfig.w / 2 + buildingConfig.leftlt.ltowidth / 2 + 2) - centerX);
                var h_dif = adiff * Math.tan(Math.PI / 2 - angle);
                centerY = centerY + h_dif;
            }
            _this.mesh.position.set(-centerX, centerY - 1.5, posz + 1.25);
        }
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoAdd, this.updateMesh);
    eventHandler.addEventListener(rightleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut2, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoAdd, this.updateMesh);
    eventHandler.addEventListener(leftleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function ltoSupports(side) {
    side = side || "left";
    var _this = this;
    this.side = side;
    this.init = function() {
        var geometry = new three.BoxGeometry(buildingConfig.rightlt.ltowidth, 5, 2);
        var material = createMeshPhongMaterial(Colours[buildingConfig.trimColor].hex);
        geometry.colorsNeedUpdate = true;
        this.mesh1 = new three.Mesh(geometry, material);
        this.mesh2 = new three.Mesh(geometry, material);
        _this.updateMesh();
        return this;
    };
    this.updateMesh = function() {
        var values = new getAngle(side);
        var angle = values.angle;
        var ltRoofWidth = values.ltRoofWidth;
        var hVal = values.hVal;
        if (_this.side == "right") {
            _this.mesh1.visible = false;
            _this.mesh2.visible = false;
            if (buildingConfig.rightlt.leanTo == "rightlt") {
                _this.mesh1.visible = true;
                _this.mesh2.visible = true;
            }
            if (visibleCheck(null, "right")) {
                _this.mesh1.visible = false;
                _this.mesh2.visible = false;
            }
            if (buildingConfig.frwrap == "frwrap") {
                _this.mesh1.visible = false;
            }
            if (buildingConfig.brwrap == "brwrap") {
                _this.mesh2.visible = false;
            }
            centerX = buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth / 2 + 3;
            centerY = buildingConfig.h - buildingConfig.rightlt.drop - hVal / 2;
            _this.mesh1.rotation.z = angle - Math.PI / 2;
            _this.mesh1.scale.x = (ltRoofWidth) / (inirltWidth);
            _this.mesh1.scale.y = 1;
            _this.mesh2.scale.y = 1;
            _this.mesh1.position.set(centerX, centerY - .5, -buildingConfig.rightlt.cut1 + 6);
            _this.mesh2.rotation.z = angle - Math.PI / 2;
            _this.mesh2.scale.x = (ltRoofWidth) / (inirltWidth);
            _this.mesh2.position.set(centerX, centerY - .5, -(buildingConfig.l - buildingConfig.rightlt.cut2 + 6));
            if (buildingConfig.leantoRoofOrientation == VOrientation) {
                _this.mesh1.scale.y = .5;
                _this.mesh2.scale.y = .5;
                _this.mesh1.position.set(centerX, centerY - .5, -buildingConfig.rightlt.cut1 + 4);
                _this.mesh2.position.set(centerX, centerY - .5, -(buildingConfig.l - buildingConfig.rightlt.cut2 + 4));
            }
        }
        if (_this.side == "left") {
            _this.mesh1.visible = false;
            _this.mesh2.visible = false;
            if (buildingConfig.leftlt.leanTo == "leftlt") {
                _this.mesh1.visible = true;
                _this.mesh2.visible = true;
            }
            if (visibleCheck(null, "left")) {
                _this.mesh1.visible = false;
                _this.mesh2.visible = false;
            }
            if (buildingConfig.flwrap == "flwrap") {
                _this.mesh1.visible = false;
            }
            if (buildingConfig.blwrap == "blwrap") {
                _this.mesh2.visible = false;
            }
            centerX = buildingConfig.w / 2 + buildingConfig.leftlt.ltowidth / 2 + 3;
            centerY = buildingConfig.h - buildingConfig.leftlt.drop - hVal / 2;
            _this.mesh1.rotation.z = angle - Math.PI / 2;
            _this.mesh1.scale.y = 1;
            _this.mesh2.scale.y = 1;
            _this.mesh1.scale.x = (ltRoofWidth) / (inirltWidth);
            _this.mesh1.position.set(-centerX, centerY - .5, -buildingConfig.leftlt.cut1 + 6);
            _this.mesh2.rotation.z = angle - Math.PI / 2;
            _this.mesh2.scale.x = (ltRoofWidth) / (inirltWidth);
            _this.mesh2.position.set(-centerX, centerY - .5, -(buildingConfig.l - buildingConfig.leftlt.cut2 + 6));
            if (buildingConfig.leantoRoofOrientation == VOrientation) {
                _this.mesh1.scale.y = .5;
                _this.mesh2.scale.y = .5;
                _this.mesh1.position.set(-centerX, centerY - .5, -buildingConfig.leftlt.cut1 + 4);
                _this.mesh2.position.set(-centerX, centerY - .5, -(buildingConfig.l - buildingConfig.leftlt.cut2 + 4));
            }
        }
    };
    this.changeColour = function() {
        _this.mesh1.material.color = new three.Color(get_orientation_url(buildingConfig.trimColor, null, 2));
        _this.mesh2.material.color = new three.Color(get_orientation_url(buildingConfig.trimColor, null, 2));
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoAdd, this.updateMesh);
    eventHandler.addEventListener(rightleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(trimColorChange, this.changeColour);
    eventHandler.addEventListener(rightleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut2, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoAdd, this.updateMesh);
    eventHandler.addEventListener(leftleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(orientationChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(leantoRoofOrientation, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function loadBaseline(side) {
    side = side || "left";
    this.side = side;
    var _this = this;
    this.init = function() {
        var geometry = new three.BoxGeometry(2.5, 2.5, (buildingConfig.l - buildingConfig.rightlt.cut2 - buildingConfig.rightlt.cut1));
        var material = createSteelMaterial();
        this.mesh = new three.Mesh(geometry, material);
        _this.updateMesh();
        return this;
    };
    this.updateMesh = function() {
        if (_this.side == "right") {
            _this.mesh.visible = false;
            if (buildingConfig.rightlt.leanTo == "rightlt") {
                _this.mesh.visible = true;
            }
            if (visibleCheck(null, "right")) {
                _this.mesh.visible = false;
            }
            _this.mesh.scale.z = (buildingConfig.l - buildingConfig.rightlt.cut2 - buildingConfig.rightlt.cut1) / (iniLength - iniRCut2 - iniRCut1);
            _this.mesh.position.set(buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth, 1.25, -(buildingConfig.l / 2 - buildingConfig.rightlt.cut2 / 2 + buildingConfig.rightlt.cut1 / 2));
            if (buildingConfig.frwrap == "frwrap") {
                _this.mesh.scale.z = (buildingConfig.l + buildingConfig.rightlt.ltowidth - buildingConfig.rightlt.cut2) / iniLength;
                _this.mesh.position.set((buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth), 1.25, -buildingConfig.l / 2 + buildingConfig.rightlt.ltowidth / 2 + buildingConfig.rightlt.cut2 / 2);
            }
            if (buildingConfig.brwrap == "brwrap") {
                _this.mesh.scale.z = (buildingConfig.l + buildingConfig.rightlt.ltowidth - buildingConfig.rightlt.cut1) / iniLength;
                _this.mesh.position.set((buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth), 1.25, -buildingConfig.l / 2 - buildingConfig.rightlt.ltowidth / 2 - buildingConfig.rightlt.cut1 / 2);
            }
            if (buildingConfig.brwrap == "brwrap" && buildingConfig.frwrap == "frwrap") {
                _this.mesh.scale.z = (buildingConfig.l + 2 * buildingConfig.rightlt.ltowidth) / iniLength;
                _this.mesh.position.set((buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth), 1.25, -buildingConfig.l / 2);
            }
        }
        if (_this.side == "left") {
            _this.mesh.visible = false;
            if (buildingConfig.leftlt.leanTo == "leftlt") {
                _this.mesh.visible = true;
            }
            if (visibleCheck(null, "left")) {
                _this.mesh.visible = false;
            }
            _this.mesh.scale.z = (buildingConfig.l - buildingConfig.leftlt.cut2 - buildingConfig.leftlt.cut1) / (iniLength - iniLCut2 - iniLCut1);
            _this.mesh.position.set(-(buildingConfig.w / 2 + buildingConfig.leftlt.ltowidth), 1.25, -(buildingConfig.l / 2 - buildingConfig.leftlt.cut2 / 2 + buildingConfig.leftlt.cut1 / 2));
            if (buildingConfig.flwrap == "flwrap") {
                _this.mesh.scale.z = (buildingConfig.l + buildingConfig.leftlt.ltowidth - buildingConfig.leftlt.cut2) / iniLength;
                _this.mesh.position.set(-(buildingConfig.w / 2 + buildingConfig.leftlt.ltowidth), 1.25, -buildingConfig.l / 2 + buildingConfig.leftlt.ltowidth / 2 + buildingConfig.leftlt.cut2);
            }
            if (buildingConfig.blwrap == "blwrap") {
                _this.mesh.scale.z = (buildingConfig.l + buildingConfig.leftlt.ltowidth - buildingConfig.leftlt.cut1) / iniLength;
                _this.mesh.position.set(-(buildingConfig.w / 2 + buildingConfig.leftlt.ltowidth), 1.25, -buildingConfig.l / 2 - buildingConfig.leftlt.ltowidth / 2 - buildingConfig.leftlt.cut1 / 2);
            }
            if (buildingConfig.blwrap == "blwrap" && buildingConfig.flwrap == "flwrap") {
                _this.mesh.scale.z = (buildingConfig.l + 2 * buildingConfig.leftlt.ltowidth) / iniLength;
                _this.mesh.position.set(-(buildingConfig.w / 2 + buildingConfig.leftlt.ltowidth), 1.25, -buildingConfig.l / 2);
            }
        }
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoAdd, this.updateMesh);
    eventHandler.addEventListener(rightleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut2, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoAdd, this.updateMesh);
    eventHandler.addEventListener(leftleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function leantoHatChannels(n, side) {
    side = side || "left";
    this.side = side;
    var _this = this;
    this.init = function() {
        var geometry = new three.BoxGeometry(2.5, 1, (buildingConfig.l - buildingConfig.rightlt.cut2 - buildingConfig.rightlt.cut1));
        var material = createSteelMaterial();
        material.side = three.DoubleSide;
        this.mesh = new three.Mesh(geometry, material);
        this.updateMesh();
        return this
    };
    this.updateMesh = function() {
        var values = new getAngle(_this.side);
        var angle = values.angle;
        var ltRoofWidth = values.ltRoofWidth;
        var hVal = values.hVal;
        if (_this.side == "right") {
            var nos = Math.ceil((buildingConfig.rightlt.ltowidth / 12) / 5);
            var unit_space = buildingConfig.rightlt.ltowidth / nos;
            var pos_x = (buildingConfig.w / 2) + (n * unit_space) + 4;
            var tanAngle = Math.PI / 2 - angle;
            var cornerDist = (buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth) - (pos_x - 2.5);
            var heightValue = Math.tan(tanAngle) * cornerDist - 1;
            _this.mesh.visible = false;
            if (buildingConfig.rightlt.leanTo == "rightlt" && buildingConfig.RoofSyle == AFrameRoof && buildingConfig.leantoRoofOrientation == VOrientation) {
                _this.mesh.visible = true;
            }
            if (pos_x > buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth + 6 || visibleCheck(null, "right")) {
                _this.mesh.visible = false;
            }
            _this.mesh.rotation.z = angle - Math.PI / 2;
            _this.mesh.scale.z = (buildingConfig.l - buildingConfig.rightlt.cut2 - buildingConfig.rightlt.cut1) / (iniLength - iniRCut2 - iniRCut1);
            _this.mesh.position.set(pos_x, buildingConfig.rightlt.legheight + heightValue, -(buildingConfig.l / 2 - buildingConfig.rightlt.cut2 / 2 + buildingConfig.rightlt.cut1 / 2))
        }
        if (_this.side == "left") {
            var nos = Math.ceil((buildingConfig.leftlt.ltowidth / 12) / 5);
            var unit_space = buildingConfig.leftlt.ltowidth / nos;
            var pos_x = (buildingConfig.w / 2) + (n * unit_space) + 4;
            var tanAngle = Math.PI / 2 - angle;
            var cornerDist = -(buildingConfig.w / 2 + buildingConfig.leftlt.ltowidth - (pos_x - 2.5));
            var heightValue = Math.tan(tanAngle) * cornerDist - 1;
            _this.mesh.visible = false;
            if (buildingConfig.leftlt.leanTo == "leftlt" && buildingConfig.RoofSyle == AFrameRoof && buildingConfig.leantoRoofOrientation == VOrientation) {
                _this.mesh.visible = true;
            }
            if (pos_x > buildingConfig.w / 2 + buildingConfig.leftlt.ltowidth + 6 || visibleCheck(null, "left")) {
                _this.mesh.visible = false;
            }
            _this.mesh.rotation.z = angle - Math.PI / 2;
            _this.mesh.scale.z = (buildingConfig.l - buildingConfig.leftlt.cut2 - buildingConfig.leftlt.cut1) / (iniLength - iniLCut2 - iniLCut1)
            _this.mesh.position.set(-pos_x, buildingConfig.leftlt.legheight + heightValue, -(buildingConfig.l / 2 - buildingConfig.leftlt.cut2 / 2 + buildingConfig.leftlt.cut1 / 2))
        }
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoAdd, this.updateMesh);
    eventHandler.addEventListener(rightleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut2, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoAdd, this.updateMesh);
    eventHandler.addEventListener(leftleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(orientationChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(leantoRoofOrientation, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function loadSideBrace(n, side) {
    side = side || "left";
    var _this = this;
    _this.side = side;
    this.init = function() {
        var geometry = this.getGeometry();
        var material = createSteelMaterial();
        this.mesh = new three.Mesh(geometry, material);
        _this.updateMesh();
        return this;
    };
    this.getGeometry = function() {
        if (_this.side == "right") {
            var values = new getAngle("right");
            var angle = values.angle;
            var ltRoofWidth = values.ltRoofWidth;
            var hVal = values.hVal;
            var braceLenght = 36;
            var angleVal = Math.PI - angle;
            var cosAngle = Math.cos(angleVal);
            var x = Math.sqrt((braceLenght * braceLenght) / (5 - (4 * cosAngle)));
            var p1x = buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth;
            var p1y = buildingConfig.rightlt.legheight - x;
            var p2x = p1x - (Math.sin(angle) * x);
            var p2y = buildingConfig.rightlt.legheight + Math.cos(angle) * x;
            var shape = new three.Shape();
            shape.moveTo(p1x, p1y);
            shape.lineTo(p1x + 1, p1y + 1);
            shape.lineTo(p2x + 1, p2y - .5);
            shape.lineTo(p2x, p2y - 1.5);
            shape.lineTo(p1x, p1y);
            var extrudeSettings = {
                amount: 2.5,
                bevelEnabled: true,
                bevelSegments: 0,
                steps: 1,
                bevelSize: 0,
                bevelThickness: 1
            };
            var geometry = new three.ExtrudeGeometry(shape, extrudeSettings);
            computeUVs(geometry);
            return geometry
        }
        if (_this.side == "left") {
            var values = new getAngle("left");
            var angle = values.angle;
            var ltRoofWidth = values.ltRoofWidth;
            var hVal = values.hVal;
            var braceLenght = 36;
            var angleVal = Math.PI - angle;
            var cosAngle = Math.cos(angleVal);
            var x = Math.sqrt((braceLenght * braceLenght) / (5 - (4 * cosAngle)));
            var sinAngle = Math.sin(angleVal);
            var p1x = -(buildingConfig.w / 2 + buildingConfig.leftlt.ltowidth);
            var p1y = buildingConfig.leftlt.legheight - x;
            var p2x = p1x - (Math.cos(Math.PI / 2 - angle) * x);
            var p2y = buildingConfig.leftlt.legheight + Math.sin(Math.PI / 2 - angle) * x;
            var shape = new three.Shape();
            shape.moveTo(p1x, p1y);
            shape.lineTo(p1x - 1, p1y + 1);
            shape.lineTo(p2x - 1, p2y - .5);
            shape.lineTo(p2x, p2y - 1.5);
            shape.lineTo(p1x, p1y);
            var extrudeSettings = {
                amount: 2.5,
                bevelEnabled: true,
                bevelSegments: 0,
                steps: 1,
                bevelSize: 0,
                bevelThickness: 1
            };
            var geometry = new three.ExtrudeGeometry(shape, extrudeSettings);
            computeUVs(geometry);
            return geometry
        }
    };
    this.updateMesh = function() {
        _this.mesh.visible = false;
        if (_this.side == "right") {
            m = 1;
            var meshWidth = buildingConfig.l;
            if (buildingConfig.frwrap == "frwrap") {
                meshWidth += buildingConfig.rightlt.ltowidth - buildingConfig.rightlt.cut2;
            }
            if (buildingConfig.brwrap == "brwrap") {
                meshWidth += buildingConfig.rightlt.ltowidth - buildingConfig.rightlt.cut1;
            }
            var nos = Math.ceil((meshWidth / 12) / 5);
            var step = meshWidth / nos;
            var xval = n * step;
            var posz = -((buildingConfig.rightlt.cut1) + xval);
            if (buildingConfig.brwrap == "brwrap") {
                posz = (buildingConfig.rightlt.cut1) - xval;
            }
            if (buildingConfig.frwrap == "frwrap") {
                posz = (buildingConfig.rightlt.ltowidth - xval);
            }
            if (buildingConfig.rightlt.leanTo == "rightlt") {
                _this.mesh.visible = true;
            }
            if (visibleCheck((posz), "right")) {
                _this.mesh.visible = false;
            }
            if (buildingConfig.brwrap == "brwrap" && posz <= -(buildingConfig.l + buildingConfig.rightlt.ltowidth)) {
                _this.mesh.visible = false;
            }
            if (buildingConfig.frwrap == "frwrap" && posz >= buildingConfig.rightlt.ltowidth) {
                _this.mesh.visible = false;
            }
            _this.mesh.geometry = _this.getGeometry();
            _this.mesh.position.z = (posz)
        }
        if (_this.side == "left") {
            var meshWidth = buildingConfig.l;
            if (buildingConfig.flwrap == "flwrap") {
                meshWidth += buildingConfig.leftlt.ltowidth - buildingConfig.leftlt.cut2;
            }
            if (buildingConfig.blwrap == "blwrap") {
                meshWidth += buildingConfig.leftlt.ltowidth - buildingConfig.leftlt.cut1;
            }
            var nos = Math.ceil((meshWidth / 12) / 5);
            var step = meshWidth / nos;
            var xval = n * step;
            var posz = -((buildingConfig.leftlt.cut1) + xval);
            if (buildingConfig.blwrap == "blwrap") {
                posz = (buildingConfig.leftlt.cut1) - xval;
            }
            if (buildingConfig.flwrap == "flwrap") {
                posz = (buildingConfig.leftlt.ltowidth - xval);
            }
            if (buildingConfig.leftlt.leanTo == "leftlt") {
                _this.mesh.visible = true;
            }
            if (visibleCheck((posz), "left")) {
                _this.mesh.visible = false;
            }
            if (buildingConfig.blwrap == "blwrap" && posz <= -(buildingConfig.l + buildingConfig.rightlt.ltowidth)) {
                _this.mesh.visible = false;
            }
            if (buildingConfig.flwrap == "flwrap" && posz >= buildingConfig.rightlt.ltowidth) {
                _this.mesh.visible = false;
            }
            _this.mesh.geometry = _this.getGeometry();
            _this.mesh.position.z = (posz)
        }
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoAdd, this.updateMesh);
    eventHandler.addEventListener(rightleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut2, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoAdd, this.updateMesh);
    eventHandler.addEventListener(leftleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function sidebaseObj(side) {
    side = side || "left";
    var _this = this;
    _this.side = side;
    this.init = function() {
        var geometry = new three.BoxGeometry(buildingConfig.rightlt.ltowidth, 2, buildingConfig.l + 6);
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
        var update_url = "img/" + buildingConfig.texture + ".jpg";
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
            matMap.repeat.set(parseInt(buildingConfig.rightlt.ltowidth / 60), parseInt((buildingConfig.l - buildingConfig.rightlt.cut1 - buildingConfig.rightlt.cut2) / 60));
        }
    };
    this.updateMesh = function() {
        _this.mesh.visible = false;
        if (_this.side == "right") {
            if (buildingConfig.rightlt.leanTo == "rightlt") {
                var centerZ = -(buildingConfig.l + buildingConfig.rightlt.cut1 - buildingConfig.rightlt.cut2) / 2;
                _this.mesh.scale.x = (buildingConfig.rightlt.ltowidth) / (inirltWidth);
                _this.mesh.scale.z = (buildingConfig.l - buildingConfig.rightlt.cut1 - buildingConfig.rightlt.cut2 + 6) / (iniLength - iniRCut1 - iniRCut2 + 6);
                _this.mesh.position.set(buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth / 2 + 3, 0, centerZ);
                _this.updateTexture();
            }
        }
        if (_this.side == "left") {
            if (buildingConfig.leftlt.leanTo == "leftlt") {
                var centerZ = -(buildingConfig.l + buildingConfig.leftlt.cut1 - buildingConfig.leftlt.cut2) / 2;
                _this.mesh.scale.x = (buildingConfig.leftlt.ltowidth) / (inilltWidth);
                _this.mesh.scale.z = (buildingConfig.l - buildingConfig.leftlt.cut1 - buildingConfig.leftlt.cut2 + 6) / (iniLength - iniLCut1 - iniLCut2 + 6);
                _this.mesh.position.set(-(buildingConfig.w / 2 + buildingConfig.leftlt.ltowidth / 2 + 3), 0, centerZ);
                _this.updateTexture();
            }
        }
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(floorChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut1, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut2, this.updateMesh);
    eventHandler.addEventListener(rightleantoAdd, this.updateMesh);
    eventHandler.addEventListener(rightleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoAdd, this.updateMesh);
    eventHandler.addEventListener(leftleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function visibleEndCheck(posx, side) {
    var leanto = "frontlt";
    var lengthVal = buildingConfig.w / 2;
    if (buildingConfig.frwrap == "frwrap") {
        lengthVal += buildingConfig.frontlt.ltowidth;
    }
    if (side == "back") {
        lengthVal = buildingConfig.w / 2;
        leanto = "backlt";
        if (buildingConfig.brwrap == "brwrap") {
            lengthVal += buildingConfig.backlt.ltowidth;
        }
    }
    if (posx == null) {
        return false;
    }
    if (posx > Math.ceil(lengthVal - buildingConfig[leanto].cut2) || buildingConfig[leanto].leanTo == null || buildingConfig[leanto].legheight > buildingConfig.h - 12 || buildingConfig[leanto].drop > (buildingConfig.h - buildingConfig[leanto].legheight - 12)) {
        return true;
    }
    return false;
}

function leantoEndSupport(n, side) {
    side = side || "back";
    var _this = this;
    _this.side = side;
    this.init = function() {
        var geometry = new three.BoxGeometry(2.5, 1, 2.5);
        var material = createSteelMaterial();
        this.mesh = new three.Mesh(geometry, material);
        this.updateMesh();
        return this
    };
    this.updateMesh = function() {
        var m = -1;
        _this.mesh.visible = false;
        if (_this.side == "front") {
            var meshWidth = buildingConfig.w;
            m = 1;
            if (buildingConfig.frwrap == "frwrap") {
                meshWidth += buildingConfig.frontlt.ltowidth - buildingConfig.frontlt.cut1;
            }
            if (buildingConfig.flwrap == "flwrap") {
                meshWidth += buildingConfig.frontlt.ltowidth - buildingConfig.frontlt.cut2;
            }
            var nos = Math.ceil((meshWidth / 12) / 5);
            var step = meshWidth / nos;
            var xval = n * step;
            var posx = (-buildingConfig.w / 2 + buildingConfig.frontlt.cut1) + xval;
            if (buildingConfig.frwrap == "frwrap") {
                posx = (-buildingConfig.w / 2 + buildingConfig.frontlt.cut1) + xval;
            }
            if (buildingConfig.flwrap == "flwrap") {
                posx = -buildingConfig.w / 2 - buildingConfig.frontlt.ltowidth + xval;
            }
            if (buildingConfig.frontlt.leanTo == "frontlt") {
                _this.mesh.visible = true;
            }
            if (visibleEndCheck((posx), "front")) {
                _this.mesh.visible = false;
            }
            var vh = buildingConfig.frontlt.legheight;
            var cutHeight = checkforEndwallcut(_this);
            var heightCut = vh - cutHeight;
            _this.mesh.scale.y = heightCut;
            _this.mesh.position.set(posx, cutHeight + heightCut / 2, m * (buildingConfig.frontlt.ltowidth));
        }
        if (_this.side == "back") {
            var meshWidth = buildingConfig.w;
            if (buildingConfig.brwrap == "brwrap") {
                meshWidth += buildingConfig.backlt.ltowidth - buildingConfig.backlt.cut2;
            }
            if (buildingConfig.blwrap == "blwrap") {
                meshWidth += buildingConfig.backlt.ltowidth - buildingConfig.backlt.cut1;
            }
            var nos = Math.ceil((meshWidth / 12) / 5);
            var step = meshWidth / nos;
            var xval = n * step;
            var posx = (-buildingConfig.w / 2 + buildingConfig.backlt.cut1) + xval;
            if (buildingConfig.brwrap == "brwrap") {
                posx = (-buildingConfig.w / 2 + buildingConfig.backlt.cut1) + xval;
            }
            if (buildingConfig.blwrap == "blwrap") {
                posx = -buildingConfig.w / 2 - buildingConfig.backlt.ltowidth + xval;
            }
            if (buildingConfig.backlt.leanTo == "backlt") {
                _this.mesh.visible = true;
            }
            if (visibleEndCheck((posx), "back")) {
                _this.mesh.visible = false;
            }
            var vh = buildingConfig.backlt.legheight;
            var cutHeight = checkforEndwallcut(_this);
            var heightCut = vh - cutHeight;
            _this.mesh.scale.y = heightCut;
            _this.mesh.position.set(posx, cutHeight + heightCut / 2, m * (buildingConfig.l + buildingConfig.backlt.ltowidth));
        }
    };
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoAdd, this.updateMesh);
    eventHandler.addEventListener(rightleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut2, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoAdd, this.updateMesh);
    eventHandler.addEventListener(leftleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function getEndAngle(side) {
    if (side == "front") {
        var hVal = buildingConfig.h - buildingConfig.frontlt.legheight - buildingConfig.frontlt.drop;
        var wVal = buildingConfig.frontlt.ltowidth + 6;
    }
    if (side == "back") {
        var hVal = buildingConfig.h - buildingConfig.backlt.legheight - buildingConfig.backlt.drop;
        var wVal = -buildingConfig.backlt.ltowidth - 6;
    }
    var ltRoofWidth = Math.sqrt(hVal * hVal + wVal * wVal);
    var angle = Math.atan(wVal / hVal);
    return {
        angle: angle,
        ltRoofWidth: ltRoofWidth,
        hVal: hVal
    };
}

function leantoEndRoof(side) {
    side = side || "back";
    var _this = this;
    this.side = side;
    this.init = function() {
        var geometry = _this.getGeometry();
        var material = createMeshPhongMaterial(null, null);
        material.side = three.DoubleSide;
        this.mesh = new three.Mesh(geometry, material);
        this.updateMesh();
        return this
    };
    this.getGeometry = function() {
        if (_this.side == "front") {
            var drawCorigatedShape = function(v, orientation) {
                var z_val;
                if (orientation == 1) {
                    z_val = Math.abs(v.z);
                } else {
                    z_val = Math.abs(v.x)
                }
                if ((z_val % 9) < 0.75 || (z_val % 9) > 8.25) {
                    var m = parseInt(z_val / 9) * 9;
                    var l = 0.75 - (m - z_val);
                    v.y = v.y + 0.75 * Math.sin(l * Math.PI / 1.5);
                } else if (z_val % 3 < 0.25 || (z_val % 3) > 2.75) {
                    var m = parseInt(z_val / 3) * 3;
                    var l = 0.25 - (m - z_val);
                    v.y = v.y + 0.25 * Math.sin(l * Math.PI / 0.5);
                }
            }
            var values = new getEndAngle("front");
            var len = buildingConfig.w - buildingConfig.frontlt.cut1 - buildingConfig.frontlt.cut2 + 12;
            var ltRoofWidth = values.ltRoofWidth;
            var tangle = Math.atan(ltRoofWidth / (buildingConfig.frontlt.ltowidth + 6));
            if (buildingConfig.leantoRoofOrientation == HOrientation) {
                var geometry = new three.BoxGeometry(len, -.1, ltRoofWidth, 1, 1, ltRoofWidth * 10);
                if (buildingConfig.frwrap == "frwrap" && buildingConfig.flwrap == "flwrap") {
                    geometry.vertices.forEach(function(v, i) {
                        var zval = v.z + ltRoofWidth / 2;
                        if (zval > 0 && v.x > -(buildingConfig.w / 2 + 6)) {
                            v.x = (v.x - 6) + (zval / Math.tan(tangle))
                        }
                        if (zval > 0 && v.x < (buildingConfig.w / 2 + 6)) {
                            v.x = (v.x + 6) - (zval / Math.tan(tangle))
                        }
                        drawCorigatedShape(v, 1);
                    });
                } else if (buildingConfig.frwrap == "frwrap") {
                    geometry.vertices.forEach(function(v, i) {
                        var zval = v.z + ltRoofWidth / 2;
                        if (zval >= 0 && v.x > -(buildingConfig.w / 2 - buildingConfig.frontlt.cut1 / 2 + 6)) {
                            v.x = (v.x - 6) + (zval / Math.tan(tangle))
                        }
                        drawCorigatedShape(v, 1);
                    });
                } else if (buildingConfig.flwrap == "flwrap") {
                    geometry.vertices.forEach(function(v, i) {
                        var zval = v.z + ltRoofWidth / 2;
                        if (zval > 0 && v.x < (buildingConfig.w / 2 - buildingConfig.frontlt.cut2 / 2 + 6)) {
                            v.x = (v.x + 6) - (zval / Math.tan(tangle))
                        }
                        drawCorigatedShape(v, 1);
                    });
                } else {
                    geometry.vertices.forEach(function(v, i) {
                        drawCorigatedShape(v, 1);
                    });
                }
            }
            if (buildingConfig.leantoRoofOrientation == VOrientation) {
                var geometry = new three.BoxGeometry(len + (2 * buildingConfig.frontlt.ltowidth), -.1, ltRoofWidth, (len + (2 * buildingConfig.frontlt.ltowidth)) * 10, 1, 1);
                if (buildingConfig.frwrap == "frwrap" && buildingConfig.flwrap == "flwrap") {
                    var cutLength = len + (2 * buildingConfig.frontlt.ltowidth);
                    var leftLimit1 = (cutLength - (geometry.parameters.width * 0.5));
                    var leftLimit2 = (cutLength - (geometry.parameters.width * 0.5)) * -1;
                    geometry.vertices.forEach(v => {
                        v.x = v.x > leftLimit1 ? leftLimit1 : v.x;
                        v.x = v.x < leftLimit2 ? leftLimit2 : v.x;
                    });
                    geometry.vertices.forEach(v => {
                        var zSign = Math.sign(v.z);
                        if (v.z < 0) {
                            v.z = (v.x - leftLimit1) * Math.tan(tangle) + geometry.parameters.depth * 0.5;
                            v.z = Math.abs(v.z) > geometry.parameters.depth * 0.5 ? geometry.parameters.depth * 0.5 * zSign : v.z;
                        }
                        if (v.z <= -ltRoofWidth / 2) {
                            v.z = -(v.x - leftLimit2) * Math.tan(tangle) + geometry.parameters.depth * 0.5;
                            v.z = Math.abs(v.z) > geometry.parameters.depth * 0.5 ? geometry.parameters.depth * 0.5 * zSign : v.z;
                        }
                        drawCorigatedShape(v, -1);
                    });
                } else if (buildingConfig.frwrap == "frwrap") {
                    var cutLength = len + (2 * buildingConfig.frontlt.ltowidth);
                    var leftLimit = (cutLength - (geometry.parameters.width * 0.5));
                    geometry.vertices.forEach(v => {
                        v.x = v.x > leftLimit ? leftLimit : v.x;
                    });
                    geometry.vertices.forEach(v => {
                        var zSign = Math.sign(v.z);
                        if (v.z < 0) {
                            v.z = (v.x - leftLimit) * Math.tan(tangle) + geometry.parameters.depth * 0.5;
                            v.z = Math.abs(v.z) > geometry.parameters.depth * 0.5 ? geometry.parameters.depth * 0.5 * zSign : v.z;
                        }
                        if (v.x < -(buildingConfig.w / 2 - buildingConfig.frontlt.cut1 / 2 + 6)) {
                            v.z = 0;
                            v.x = -(buildingConfig.w / 2 - buildingConfig.frontlt.cut1 / 2 + 6)
                        }
                        drawCorigatedShape(v, -1);
                    });
                } else if (buildingConfig.flwrap == "flwrap") {
                    var cutLength = len + (2 * buildingConfig.frontlt.ltowidth);
                    var leftLimit = (cutLength - (geometry.parameters.width * 0.5)) * -1;
                    geometry.vertices.forEach(v => {
                        v.x = v.x < leftLimit ? leftLimit : v.x;
                    });
                    geometry.vertices.forEach(v => {
                        var zSign = Math.sign(v.z);
                        if (v.z < 0) {
                            v.z = -(v.x - leftLimit) * Math.tan(tangle) + geometry.parameters.depth * 0.5;
                            v.z = Math.abs(v.z) > geometry.parameters.depth * 0.5 ? geometry.parameters.depth * 0.5 * zSign : v.z;
                        }
                        if (v.x > (buildingConfig.w / 2 - buildingConfig.frontlt.cut2 / 2 + 6)) {
                            v.z = 0;
                            v.x = (buildingConfig.w / 2 - buildingConfig.frontlt.cut2 / 2 + 6)
                        }
                        drawCorigatedShape(v, -1);
                    });
                } else {
                    geometry.vertices.forEach(v => {
                        if (v.x < -(buildingConfig.w / 2 - buildingConfig.frontlt.cut1 / 2 - buildingConfig.frontlt.cut2 / 2 + 6)) {
                            v.z = 0;
                            v.x = -(buildingConfig.w / 2 - buildingConfig.frontlt.cut1 / 2 - buildingConfig.frontlt.cut2 / 2 + 6)
                        }
                        if (v.x > (buildingConfig.w / 2 - buildingConfig.frontlt.cut1 / 2 - buildingConfig.frontlt.cut2 / 2 + 6)) {
                            v.z = 0;
                            v.x = (buildingConfig.w / 2 - buildingConfig.frontlt.cut1 / 2 - buildingConfig.frontlt.cut2 / 2 + 6)
                        }
                        drawCorigatedShape(v, -1);
                    });
                }
            }
            geometry.computeFaceNormals();
            geometry.computeVertexNormals();
            var white = new three.Color(Colours.white.hex);
            var clr = new three.Color(Colours[buildingConfig.roofColour].hex);
            geometry.faces.forEach(function(f, i) {
                if (f.normal.y > 0) {
                    f.color = white;
                } else {
                    f.color = clr;
                }
            });
            return geometry
        }
        if (_this.side == "back") {
            var drawCorigatedShape = function(v, orientation) {
                var z_val;
                if (orientation == 1) {
                    z_val = Math.abs(v.z);
                } else {
                    z_val = Math.abs(v.x);
                }
                if ((z_val % 9) < 0.75 || (z_val % 9) > 8.25) {
                    var m = parseInt(z_val / 9) * 9;
                    var l = 0.75 - (-m - z_val);
                    v.y = v.y + 0.75 * Math.sin(-l * Math.PI / 1.5);
                } else if (z_val % 3 < 0.25 || (z_val % 3) > 2.75) {
                    var m = parseInt(z_val / 3) * 3;
                    var l = 0.25 - (-m - z_val);
                    v.y = v.y + 0.25 * Math.sin(-l * Math.PI / 0.5);
                }
            };
            var values = new getEndAngle("back");
            var len = buildingConfig.w - buildingConfig.backlt.cut1 - buildingConfig.backlt.cut2 + 12;
            var ltRoofWidth = values.ltRoofWidth;
            var tangle = Math.atan(ltRoofWidth / (buildingConfig.backlt.ltowidth + 6));
            if (buildingConfig.leantoRoofOrientation == HOrientation) {
                var geometry = new three.BoxGeometry(len, -.1, ltRoofWidth, 1, 1, ltRoofWidth * 10);
                if (buildingConfig.brwrap == "brwrap" && buildingConfig.blwrap == "blwrap") {
                    geometry.vertices.forEach(function(v, i) {
                        var zval = v.z + ltRoofWidth / 2;
                        if (zval > 0 && v.x > -(buildingConfig.w / 2 + 6)) {
                            v.x = (v.x - 6) + (zval / Math.tan(tangle))
                        }
                        if (zval > 0 && v.x < (buildingConfig.w / 2 + 6)) {
                            v.x = (v.x + 6) - (zval / Math.tan(tangle))
                        }
                        drawCorigatedShape(v, 1);
                    });
                } else if (buildingConfig.brwrap == "brwrap") {
                    geometry.vertices.forEach(function(v, i) {
                        var zval = v.z + ltRoofWidth / 2;
                        if (zval > 0 && v.x > -(buildingConfig.w / 2 - buildingConfig.backlt.cut1 / 2 + 6)) {
                            v.x = (v.x - 6) + (zval / Math.tan(tangle))
                        }
                        drawCorigatedShape(v, 1)
                    });
                } else if (buildingConfig.blwrap == "blwrap") {
                    geometry.vertices.forEach(function(v, i) {
                        var zval = v.z + ltRoofWidth / 2;
                        if (zval > 0 && v.x < (buildingConfig.w / 2 - buildingConfig.backlt.cut2 / 2 + 6)) {
                            v.x = (v.x + 6) - (zval / Math.tan(tangle))
                        }
                        drawCorigatedShape(v, 1);
                    });
                } else {
                    geometry.vertices.forEach(function(v, i) {
                        drawCorigatedShape(v, 1);
                    });
                }
            }
            if (buildingConfig.leantoRoofOrientation == VOrientation) {
                var geometry = new three.BoxGeometry(len + (2 * buildingConfig.backlt.ltowidth), -.1, ltRoofWidth, (len + (2 * buildingConfig.backlt.ltowidth)) * 10, 1, 1);
                var m = 1;
                if (buildingConfig.blwrap == "blwrap") {
                    m = -1;
                }
                var cutLength = len + (2 * buildingConfig.backlt.ltowidth);
                var leftLimit = m * (cutLength - (geometry.parameters.width * 0.5));
                if (buildingConfig.brwrap == "brwrap" && buildingConfig.blwrap == "blwrap") {
                    var cutLength = len + (2 * buildingConfig.backlt.ltowidth);
                    var leftLimit1 = (cutLength - (geometry.parameters.width * 0.5));
                    var leftLimit2 = (cutLength - (geometry.parameters.width * 0.5)) * -1;
                    geometry.vertices.forEach(v => {
                        v.x = v.x > leftLimit1 ? leftLimit1 : v.x;
                        v.x = v.x < leftLimit2 ? leftLimit2 : v.x;
                    });
                    geometry.vertices.forEach(v => {
                        var zSign = Math.sign(v.z);
                        if (v.z < 0) {
                            v.z = (v.x - leftLimit1) * Math.tan(tangle) + geometry.parameters.depth * 0.5;
                            v.z = Math.abs(v.z) > geometry.parameters.depth * 0.5 ? geometry.parameters.depth * 0.5 * zSign : v.z;
                        }
                        if (v.z <= -ltRoofWidth / 2) {
                            v.z = -(v.x - leftLimit2) * Math.tan(tangle) + geometry.parameters.depth * 0.5;
                            v.z = Math.abs(v.z) > geometry.parameters.depth * 0.5 ? geometry.parameters.depth * 0.5 * zSign : v.z;
                        }
                        drawCorigatedShape(v, -1);
                    });
                } else if (buildingConfig.brwrap == "brwrap") {
                    geometry.vertices.forEach(v => {
                        v.x = v.x > leftLimit ? leftLimit : v.x;
                    });
                    geometry.vertices.forEach(v => {
                        var zSign = Math.sign(v.z);
                        if (v.z < 0) {
                            v.z = (v.x - leftLimit) * Math.tan(tangle) + geometry.parameters.depth * 0.5;
                            v.z = Math.abs(v.z) > geometry.parameters.depth * 0.5 ? geometry.parameters.depth * 0.5 * zSign : v.z;
                        }
                        if (v.x < -(buildingConfig.w / 2 - buildingConfig.backlt.cut1 / 2 + 6)) {
                            v.z = 0;
                            v.x = -(buildingConfig.w / 2 - buildingConfig.backlt.cut1 / 2 + 6)
                        }
                        drawCorigatedShape(v, -1);
                    });
                } else if (buildingConfig.blwrap == "blwrap") {
                    geometry.vertices.forEach(v => {
                        v.x = v.x < leftLimit ? leftLimit : v.x;
                    });
                    geometry.vertices.forEach(v => {
                        var zSign = Math.sign(v.z);
                        if (v.z < 0) {
                            v.z = -(v.x - leftLimit) * Math.tan(tangle) + geometry.parameters.depth * 0.5;
                            v.z = Math.abs(v.z) > geometry.parameters.depth * 0.5 ? geometry.parameters.depth * 0.5 * zSign : v.z;
                        }
                        if (v.x > (buildingConfig.w / 2 - buildingConfig.backlt.cut2 / 2 + 6)) {
                            v.z = 0;
                            v.x = (buildingConfig.w / 2 - buildingConfig.backlt.cut2 / 2 + 6)
                        }
                        drawCorigatedShape(v, -1);
                    });
                } else {
                    geometry.vertices.forEach(function(v, i) {
                        if (v.x < -(buildingConfig.w / 2 - buildingConfig.backlt.cut1 / 2 - buildingConfig.backlt.cut2 / 2 + 6)) {
                            v.z = 0;
                            v.x = -(buildingConfig.w / 2 - buildingConfig.backlt.cut1 / 2 - buildingConfig.backlt.cut2 / 2 + 6)
                        }
                        if (v.x > (buildingConfig.w / 2 - buildingConfig.backlt.cut1 / 2 - buildingConfig.backlt.cut2 / 2 + 6)) {
                            v.z = 0;
                            v.x = (buildingConfig.w / 2 - buildingConfig.backlt.cut1 / 2 - buildingConfig.backlt.cut2 / 2 + 6)
                        }
                        drawCorigatedShape(v, -1);
                    });
                }
            }
            geometry.computeFaceNormals();
            geometry.computeVertexNormals();
            var white = new three.Color(Colours.white.hex);
            var clr = new three.Color(Colours[buildingConfig.roofColour].hex);
            geometry.faces.forEach(function(f, i) {
                if (f.normal.y > 0) {
                    f.color = clr;
                } else {
                    f.color = white;
                }
            });
            return geometry
        }
    };
    this.updateMesh = function() {
        var values = new getEndAngle(side);
        var angle = values.angle;
        var ltRoofWidth = values.ltRoofWidth;
        var hVal = values.hVal;
        var overhang = 6;
        if (_this.side == "front") {
            centerZ = (buildingConfig.frontlt.ltowidth / 2) + overhang / 2;
            centerY = buildingConfig.h - buildingConfig.frontlt.drop - hVal / 2;
            if (buildingConfig.RoofSyle == AFrameRoof && buildingConfig.leantoRoofOrientation == VOrientation) {
                centerY = centerY + 1
            }
            centerX = (-buildingConfig.frontlt.cut2 / 2 + buildingConfig.frontlt.cut1 / 2)
            _this.mesh.rotation.x = -(angle - Math.PI / 2);
            _this.mesh.geometry = _this.getGeometry();
            _this.mesh.position.set(centerX, centerY, centerZ);
            _this.mesh.visible = false;
            if (buildingConfig.frontlt.leanTo == "frontlt") {
                _this.mesh.visible = true;
            }
            if (visibleEndCheck(null, "front")) {
                _this.mesh.visible = false;
            }
        }
        if (_this.side == "back") {
            centerX = (-buildingConfig.backlt.cut2 / 2 + buildingConfig.backlt.cut1 / 2);
            centerY = buildingConfig.h - buildingConfig.backlt.drop - hVal / 2;
            if (buildingConfig.RoofSyle == AFrameRoof && buildingConfig.leantoRoofOrientation == VOrientation) {
                centerY = centerY + 1
            }
            centerZ = buildingConfig.l + (buildingConfig.backlt.ltowidth / 2) + overhang / 2;
            _this.mesh.rotation.x = -(angle - Math.PI / 2);
            _this.mesh.geometry = _this.getGeometry();
            _this.mesh.position.set(centerX, centerY, -centerZ);
            _this.mesh.visible = false;
            if (buildingConfig.backlt.leanTo == "backlt") {
                _this.mesh.visible = true;
            }
            if (visibleEndCheck(null, "back")) {
                _this.mesh.visible = false;
            }
        }
        _this.mesh.updateMatrix();
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(orientationChange, this.updateMesh);
    eventHandler.addEventListener(roofColorChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(rightleantoAdd, this.updateMesh);
    eventHandler.addEventListener(rightleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut2, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoAdd, this.updateMesh);
    eventHandler.addEventListener(leftleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(leantoRoofOrientation, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function leantoEndTruss(n, side) {
    side = side || "back";
    var _this = this;
    this.side = side;
    this.init = function() {
        var geometry = _this.getGeometry(1);
        var material = createSteelMaterial();
        this.mesh = new three.Mesh(geometry, material);
        this.updateMesh();
        return this
    };
    this.getGeometry = function(length) {
        return new three.BoxGeometry(2.5, 2, length);
    };
    this.updateMesh = function() {
        var m = -1;
        var values = new getEndAngle(side);
        var angle = values.angle;
        var ltRoofWidth = values.ltRoofWidth;
        var hVal = values.hVal;
        var wVal = values.wVal;
        if (_this.side == "front") {
            var meshWidth = buildingConfig.w;
            m = 1;
            _this.mesh.visible = false;
            if (buildingConfig.frwrap == "frwrap") {
                meshWidth += buildingConfig.frontlt.ltowidth - buildingConfig.frontlt.cut1;
            }
            if (buildingConfig.flwrap == "flwrap") {
                meshWidth += buildingConfig.frontlt.ltowidth - buildingConfig.frontlt.cut2;
            }
            var nos = Math.ceil((meshWidth / 12) / 5);
            var step = meshWidth / nos;
            var xval = n * step;
            var posx = (-buildingConfig.w / 2 + buildingConfig.frontlt.cut1) + xval;
            if (buildingConfig.frwrap == "frwrap") {
                posx = (-buildingConfig.w / 2 + buildingConfig.frontlt.cut1) + xval;
            }
            if (buildingConfig.flwrap == "flwrap") {
                posx = -buildingConfig.w / 2 - buildingConfig.frontlt.ltowidth + xval;
            }
            if (buildingConfig.frontlt.leanTo == "frontlt") {
                _this.mesh.visible = true;
            }
            if (visibleEndCheck((posx), "front")) {
                _this.mesh.visible = false;
            }
            _this.mesh.geometry = _this.getGeometry(ltRoofWidth - 6);
            var centerZ = (buildingConfig.frontlt.ltowidth / 2) + 1.5;
            var centerY = buildingConfig.h - buildingConfig.frontlt.drop - hVal / 2;
            if (buildingConfig.RoofSyle == AFrameRoof && buildingConfig.leantoRoofOrientation == VOrientation) {
                centerY = buildingConfig.h - buildingConfig.frontlt.drop - hVal / 2 - .5;
            }
            _this.mesh.rotation.x = -(angle - Math.PI / 2);
            if (posx > buildingConfig.w / 2) {
                var tangle = Math.atan(ltRoofWidth / (buildingConfig.frontlt.ltowidth + 6));
                var cutlen = (buildingConfig.w / 2 + buildingConfig.frontlt.ltowidth) - posx;
                var sizeval = cutlen / Math.tan(tangle);
                _this.mesh.geometry = _this.getGeometry(sizeval + 6);
                centerZ = buildingConfig.frontlt.ltowidth - sizeval / 2 + 1.5;
                var adiff = Math.abs(((buildingConfig.frontlt.ltowidth / 2) + 1.5) - centerZ);
                var h_dif = adiff * Math.tan(Math.PI / 2 - angle);
                centerY = centerY - h_dif
            }
            if (posx < -buildingConfig.w / 2) {
                var tangle = Math.atan(ltRoofWidth / (buildingConfig.frontlt.ltowidth + 6));
                var cutlen = Math.abs(-(buildingConfig.w / 2 + buildingConfig.frontlt.ltowidth) - posx);
                var sizeval = cutlen / Math.tan(tangle);
                _this.mesh.geometry = _this.getGeometry(sizeval + 6);
                centerZ = buildingConfig.frontlt.ltowidth - sizeval / 2 + 1.5;
                var adiff = Math.abs(((buildingConfig.frontlt.ltowidth / 2) + 1.5) - centerZ);
                var h_dif = adiff * Math.tan(Math.PI / 2 - angle);
                centerY = centerY - h_dif;
            }
            _this.mesh.position.set(posx, centerY - 1.25, centerZ);
        }
        if (_this.side == "back") {
            var meshWidth = buildingConfig.w;
            _this.mesh.visible = false;
            if (buildingConfig.brwrap == "brwrap") {
                meshWidth += buildingConfig.backlt.ltowidth - buildingConfig.backlt.cut2;
            }
            if (buildingConfig.blwrap == "blwrap") {
                meshWidth += buildingConfig.backlt.ltowidth - buildingConfig.backlt.cut1;
            }
            var nos = Math.ceil((meshWidth / 12) / 5);
            var step = meshWidth / nos;
            var xval = n * step;
            var posx = (-buildingConfig.w / 2 + buildingConfig.backlt.cut1) + xval;
            if (buildingConfig.brwrap == "brwrap") {
                posx = (-buildingConfig.w / 2 + buildingConfig.backlt.cut1) + xval;
            }
            if (buildingConfig.blwrap == "blwrap") {
                posx = -buildingConfig.w / 2 - buildingConfig.backlt.ltowidth + xval;
            }
            if (buildingConfig.backlt.leanTo == "backlt") {
                _this.mesh.visible = true;
            }
            if (visibleEndCheck((posx), "back")) {
                _this.mesh.visible = false;
            }
            _this.mesh.geometry = _this.getGeometry(ltRoofWidth - 6);
            var centerZ = buildingConfig.l + (buildingConfig.backlt.ltowidth / 2) + 1.5;
            var centerY = buildingConfig.h - buildingConfig.backlt.drop - hVal / 2 - .5;
            if (buildingConfig.RoofSyle == AFrameRoof && buildingConfig.RoofOrientation == VOrientation) {
                centerY = buildingConfig.h - buildingConfig.backlt.drop - hVal / 2;
            }
            _this.mesh.rotation.x = -(angle - Math.PI / 2);
            if (posx > buildingConfig.w / 2) {
                var tangle = Math.atan(ltRoofWidth / (buildingConfig.backlt.ltowidth + 6));
                var cutlen = (buildingConfig.w / 2 + buildingConfig.backlt.ltowidth) - posx;
                var sizeval = cutlen / Math.tan(tangle);
                _this.mesh.geometry = _this.getGeometry(sizeval + 6);
                centerZ = buildingConfig.l + buildingConfig.backlt.ltowidth - sizeval / 2 + 1.5;
                var adiff = Math.abs((buildingConfig.l + buildingConfig.backlt.ltowidth / 2 + 1.5) - (centerZ));
                var h_dif = adiff * Math.tan(Math.PI / 2 - angle);
                centerY = centerY + h_dif;
            }
            if (posx < -buildingConfig.w / 2) {
                var tangle = Math.atan(ltRoofWidth / (buildingConfig.backlt.ltowidth + 6));
                var cutlen = Math.abs(-(buildingConfig.w / 2 + buildingConfig.backlt.ltowidth) - posx);
                var sizeval = cutlen / Math.tan(tangle);
                _this.mesh.geometry = _this.getGeometry(sizeval + 6);
                centerZ = buildingConfig.l + buildingConfig.backlt.ltowidth - sizeval / 2 + 1.5;
                var adiff = Math.abs((buildingConfig.backlt.ltowidth / 2 + buildingConfig.l + 1.5) - centerZ);
                var h_dif = adiff * Math.tan(Math.PI / 2 - angle);
                centerY = centerY + h_dif;
            }
            _this.mesh.position.set(posx, centerY - 1.25, -centerZ);
        }
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoAdd, this.updateMesh);
    eventHandler.addEventListener(rightleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut2, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoAdd, this.updateMesh);
    eventHandler.addEventListener(leftleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function loadEndBaseline(side) {
    side = side || "back";
    this.side = side;
    var _this = this;
    this.init = function() {
        var geometry = new three.BoxGeometry((buildingConfig.w - buildingConfig.frontlt.cut2 - buildingConfig.frontlt.cut1), 2.5, 2.5);
        var material = createSteelMaterial();
        this.mesh = new three.Mesh(geometry, material);
        _this.updateMesh();
        return this;
    };
    this.updateMesh = function() {
        if (side == "front") {
            _this.mesh.visible = false;
            if (buildingConfig.frontlt.leanTo == "frontlt") {
                _this.mesh.visible = true;
            }
            if (visibleEndCheck(null, "front")) {
                _this.mesh.visible = false;
            }
            _this.mesh.scale.x = (buildingConfig.w - buildingConfig.frontlt.cut2 - buildingConfig.frontlt.cut1) / (iniWidth - iniFCut2 - iniFCut1);
            _this.mesh.position.set(buildingConfig.frontlt.cut1 / 2 - buildingConfig.frontlt.cut2 / 2, 1.25, buildingConfig.frontlt.ltowidth);
            if (buildingConfig.flwrap == "flwrap") {
                _this.mesh.scale.x = (buildingConfig.w + buildingConfig.frontlt.ltowidth - buildingConfig.frontlt.cut2) / iniWidth;
                _this.mesh.position.set(-(buildingConfig.frontlt.ltowidth / 2 + buildingConfig.frontlt.cut2 / 2), 1.25, buildingConfig.frontlt.ltowidth);
            }
            if (buildingConfig.frwrap == "frwrap") {
                _this.mesh.scale.x = (buildingConfig.w + buildingConfig.frontlt.ltowidth - buildingConfig.frontlt.cut1) / iniWidth;
                _this.mesh.position.set((buildingConfig.frontlt.ltowidth / 2 + buildingConfig.frontlt.cut1 / 2), 1.25, buildingConfig.frontlt.ltowidth);
            }
            if (buildingConfig.frwrap == "frwrap" && buildingConfig.flwrap == "flwrap") {
                _this.mesh.scale.x = (buildingConfig.w + 2 * buildingConfig.frontlt.ltowidth) / iniWidth;
                _this.mesh.position.set(0, 1.25, buildingConfig.frontlt.ltowidth);
            }
        }
        if (side == "back") {
            _this.mesh.visible = false;
            if (buildingConfig.backlt.leanTo == "backlt") {
                _this.mesh.visible = true;
            }
            if (visibleEndCheck(null, "back")) {
                _this.mesh.visible = false;
            }
            _this.mesh.scale.x = (buildingConfig.w - buildingConfig.backlt.cut2 - buildingConfig.backlt.cut1) / (iniWidth - iniBCut2 - iniBCut1);
            _this.mesh.position.set((-buildingConfig.backlt.cut2 / 2 + buildingConfig.backlt.cut1 / 2), 1.25, -(buildingConfig.l + buildingConfig.backlt.ltowidth));
            if (buildingConfig.blwrap == "blwrap") {
                _this.mesh.scale.x = (buildingConfig.w + buildingConfig.backlt.ltowidth - buildingConfig.backlt.cut2) / iniWidth;
                _this.mesh.position.set(-(buildingConfig.backlt.ltowidth / 2 + buildingConfig.backlt.cut2 / 2), 1.25, -buildingConfig.l - buildingConfig.backlt.ltowidth);
            }
            if (buildingConfig.brwrap == "brwrap") {
                _this.mesh.scale.x = (buildingConfig.w + buildingConfig.backlt.ltowidth - buildingConfig.backlt.cut1) / iniWidth;
                _this.mesh.position.set((buildingConfig.backlt.ltowidth / 2 + buildingConfig.backlt.cut1 / 2), 1.25, -buildingConfig.l - buildingConfig.backlt.ltowidth);
            }
            if (buildingConfig.brwrap == "brwrap" && buildingConfig.blwrap == "blwrap") {
                _this.mesh.scale.x = (buildingConfig.w + 2 * buildingConfig.backlt.ltowidth) / iniWidth;
                _this.mesh.position.set(0, 1.25, -buildingConfig.l - buildingConfig.backlt.ltowidth);
            }
        }
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(backleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoAdd, this.updateMesh);
    eventHandler.addEventListener(rightleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut2, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoAdd, this.updateMesh);
    eventHandler.addEventListener(leftleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function ltoEndSupports(side) {
    side = side || "back";
    var _this = this;
    this.side = side;
    this.init = function() {
        var geometry = new three.BoxGeometry(2, 5, buildingConfig.frontlt.ltowidth);
        var material = createMeshPhongMaterial(Colours[buildingConfig.trimColor].hex);
        geometry.colorsNeedUpdate = true;
        this.mesh1 = new three.Mesh(geometry, material);
        this.mesh2 = new three.Mesh(geometry, material);
        _this.updateMesh();
        return this;
    };
    this.updateMesh = function() {
        var values = new getEndAngle(side);
        var angle = values.angle;
        var ltRoofWidth = values.ltRoofWidth;
        var hVal = values.hVal;
        if (side == "front") {
            _this.mesh1.visible = false;
            _this.mesh2.visible = false;
            if (buildingConfig.frontlt.leanTo == "frontlt") {
                _this.mesh1.visible = true;
                _this.mesh2.visible = true;
            }
            if (visibleEndCheck(null, "front")) {
                _this.mesh1.visible = false;
                _this.mesh2.visible = false;
            }
            if (buildingConfig.frwrap == "frwrap") {
                _this.mesh2.visible = false;
            }
            if (buildingConfig.flwrap == "flwrap") {
                _this.mesh1.visible = false;
            }
            centerZ = (buildingConfig.frontlt.ltowidth / 2) + 3;
            centerY = buildingConfig.h - buildingConfig.frontlt.drop - hVal / 2 - .75;
            _this.mesh1.rotation.x = -(angle - Math.PI / 2);
            _this.mesh1.scale.z = (ltRoofWidth) / (inifltWidth);
            _this.mesh1.scale.y = 1
            _this.mesh1.position.set(-(buildingConfig.w / 2 - buildingConfig.frontlt.cut1 + 6), centerY, centerZ);
            if (buildingConfig.leftlt.leanTo == "leftlt" && buildingConfig.frontlt.cut1 == 0) {
                _this.mesh1.scale.z = (ltRoofWidth - 6) / (inifltWidth);
                _this.mesh1.position.z = centerZ + 3;
            }
            _this.mesh2.rotation.x = -(angle - Math.PI / 2);
            _this.mesh2.scale.z = (ltRoofWidth) / (inifltWidth);
            _this.mesh2.scale.y = 1;
            _this.mesh2.position.set((buildingConfig.w / 2 - buildingConfig.frontlt.cut2 + 6), centerY, centerZ);
            if (buildingConfig.rightlt.leanTo == "rightlt" && buildingConfig.frontlt.cut2 == 0) {
                _this.mesh2.scale.z = (ltRoofWidth - 6) / (inifltWidth);
                _this.mesh2.position.z = centerZ + 3;
            }
            if (buildingConfig.leantoRoofOrientation == VOrientation) {
                _this.mesh1.scale.y = .5;
                _this.mesh2.scale.y = .5;
                _this.mesh1.position.set(-(buildingConfig.w / 2 - buildingConfig.frontlt.cut1 + 4), centerY - .5, centerZ);
                _this.mesh2.position.set((buildingConfig.w / 2 - buildingConfig.frontlt.cut2 + 4), centerY - .5, centerZ);
            }
        }
        if (side == "back") {
            _this.mesh1.visible = false;
            _this.mesh2.visible = false;
            if (buildingConfig.backlt.leanTo == "backlt") {
                _this.mesh1.visible = true;
                _this.mesh2.visible = true;
            }
            if (visibleEndCheck(null, "back")) {
                _this.mesh1.visible = false;
                _this.mesh2.visible = false;
            }
            if (buildingConfig.brwrap == "brwrap") {
                _this.mesh2.visible = false;
            }
            if (buildingConfig.blwrap == "blwrap") {
                _this.mesh1.visible = false;
            }
            centerZ = buildingConfig.l + (buildingConfig.backlt.ltowidth / 2) + 3;
            centerY = buildingConfig.h - buildingConfig.backlt.drop - hVal / 2 - .75;
            _this.mesh1.rotation.x = -(angle - Math.PI / 2);
            _this.mesh1.scale.z = (ltRoofWidth) / (inibltWidth);
            _this.mesh1.scale.y = 1;
            _this.mesh1.position.set(-(buildingConfig.w / 2 - buildingConfig.backlt.cut1 + 6), centerY, -(centerZ));
            if (buildingConfig.leftlt.leanTo == "leftlt" && buildingConfig.backlt.cut1 == 0) {
                _this.mesh1.scale.z = (ltRoofWidth - 6) / (inibltWidth);
                _this.mesh1.position.z = -centerZ - 3;
            }
            _this.mesh2.rotation.x = -(angle - Math.PI / 2);
            _this.mesh2.scale.z = (ltRoofWidth) / (inibltWidth);
            _this.mesh2.scale.y = 1;
            _this.mesh2.position.set((buildingConfig.w / 2 - buildingConfig.backlt.cut2 + 6), centerY, -(centerZ));
            if (buildingConfig.rightlt.leanTo == "rightlt" && buildingConfig.backlt.cut2 == 0) {
                _this.mesh2.scale.z = (ltRoofWidth - 6) / (inibltWidth);
                _this.mesh2.position.z = -centerZ - 3;
            }
            if (buildingConfig.leantoRoofOrientation == VOrientation) {
                _this.mesh1.scale.y = .5;
                _this.mesh2.scale.y = .5;
                _this.mesh1.position.set(-(buildingConfig.w / 2 - buildingConfig.backlt.cut1 + 4), centerY - .5, -centerZ);
                _this.mesh2.position.set((buildingConfig.w / 2 - buildingConfig.backlt.cut2 + 4), centerY - .5, -centerZ);
            }
        }
    };
    this.changeColour = function() {
        _this.mesh1.material.color = new three.Color(get_orientation_url(buildingConfig.trimColor, null, 2));
        _this.mesh2.material.color = new three.Color(get_orientation_url(buildingConfig.trimColor, null, 2));
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(trimColorChange, this.changeColour);
    eventHandler.addEventListener(frontleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(rightleantoAdd, this.updateMesh);
    eventHandler.addEventListener(rightleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut2, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoAdd, this.updateMesh);
    eventHandler.addEventListener(leftleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(leantoRoofOrientation, this.updateMesh);
    eventHandler.addEventListener(orientationChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function endloadSideBrace(n, side) {
    side = side || "back";
    var _this = this;
    _this.side = side;
    this.init = function() {
        var geometry = this.getGeometry();
        var material = createSteelMaterial();
        this.mesh = new three.Mesh(geometry, material);
        _this.updateMesh();
        return this;
    };
    this.getGeometry = function() {
        if (_this.side == "front") {
            var values = new getEndAngle("front");
            var angle = values.angle;
            var ltRoofWidth = values.ltRoofWidth;
            var hVal = values.hVal;
            var braceLenght = 36;
            var angleVal = Math.PI - angle;
            var cosAngle = Math.cos(angleVal);
            var x = Math.sqrt((braceLenght * braceLenght) / (5 - (4 * cosAngle)));
            var p1x = 0;
            var p1y = buildingConfig.frontlt.legheight - x;
            var p2x = p1x - (Math.sin(angle) * x);
            var p2y = buildingConfig.frontlt.legheight + Math.cos(angle) * x;
            var shape = new three.Shape();
            shape.moveTo(p1x, p1y);
            shape.lineTo(p1x + 1, p1y + 1);
            shape.lineTo(p2x + 1, p2y - .5);
            shape.lineTo(p2x, p2y - 1.5);
            shape.lineTo(p1x, p1y);
            var extrudeSettings = {
                amount: 2.5,
                bevelEnabled: true,
                bevelSegments: 0,
                steps: 1,
                bevelSize: 0,
                bevelThickness: 1
            };
            var geometry = new three.ExtrudeGeometry(shape, extrudeSettings);
            computeUVs(geometry);
            return geometry
        }
        if (_this.side == "back") {
            var values = new getEndAngle("back");
            var angle = values.angle;
            var ltRoofWidth = values.ltRoofWidth;
            var hVal = values.hVal;
            var braceLenght = 36;
            var angleVal = Math.PI - angle;
            var cosAngle = Math.cos(angleVal);
            var x = Math.sqrt((braceLenght * braceLenght) / (5 - (4 * cosAngle)));
            var sinAngle = Math.sin(angleVal);
            var p1x = 0;
            var p1y = buildingConfig.backlt.legheight - x;
            var p2x = p1x - (Math.cos(Math.PI / 2 - angle) * x);
            var p2y = buildingConfig.backlt.legheight + Math.sin(Math.PI / 2 - angle) * x;
            var shape = new three.Shape();
            shape.moveTo(p1x, p1y);
            shape.lineTo(p1x - 1, p1y + 1);
            shape.lineTo(p2x - 1, p2y - .5);
            shape.lineTo(p2x, p2y - 1.5);
            shape.lineTo(p1x, p1y);
            var extrudeSettings = {
                amount: 2.5,
                bevelEnabled: true,
                bevelSegments: 0,
                steps: 1,
                bevelSize: 0,
                bevelThickness: 1
            };
            var geometry = new three.ExtrudeGeometry(shape, extrudeSettings);
            computeUVs(geometry);
            return geometry
        }
    };
    this.updateMesh = function() {
        _this.mesh.visible = false;
        if (_this.side == "front") {
            var meshWidth = buildingConfig.w;
            if (buildingConfig.frwrap == "frwrap") {
                meshWidth += buildingConfig.frontlt.ltowidth - buildingConfig.frontlt.cut1;
            }
            if (buildingConfig.flwrap == "flwrap") {
                meshWidth += buildingConfig.frontlt.ltowidth - buildingConfig.frontlt.cut2;
            }
            var nos = Math.ceil((meshWidth / 12) / 5);
            var step = meshWidth / nos;
            var xval = n * step;
            var posx = (-buildingConfig.w / 2 + buildingConfig.frontlt.cut1) + xval;
            if (buildingConfig.frwrap == "frwrap") {
                posx = (-buildingConfig.w / 2 + buildingConfig.frontlt.cut1) + xval;
            }
            if (buildingConfig.flwrap == "flwrap") {
                posx = -buildingConfig.w / 2 - buildingConfig.frontlt.ltowidth + xval;
            }
            if (buildingConfig.frontlt.leanTo == "frontlt") {
                _this.mesh.visible = true;
            }
            if (visibleEndCheck((posx), "front")) {
                _this.mesh.visible = false;
            }
            if (buildingConfig.frwrap == "frwrap" && posx >= buildingConfig.w / 2 + buildingConfig.frontlt.ltowidth) {
                _this.mesh.visible = false;
            }
            if (buildingConfig.flwrap == "flwrap" && posx <= -(buildingConfig.w / 2 + buildingConfig.frontlt.ltowidth)) {
                _this.mesh.visible = false;
            }
            _this.mesh.geometry = _this.getGeometry();
            _this.mesh.position.x = posx + 1.25;
            _this.mesh.position.z = buildingConfig.frontlt.ltowidth;
            _this.mesh.rotation.y = -1.57
        }
        if (_this.side == "back") {
            var meshWidth = buildingConfig.w;
            if (buildingConfig.brwrap == "brwrap") {
                meshWidth += buildingConfig.backlt.ltowidth - buildingConfig.backlt.cut2;
            }
            if (buildingConfig.blwrap == "blwrap") {
                meshWidth += buildingConfig.backlt.ltowidth - buildingConfig.backlt.cut1;
            }
            var nos = Math.ceil((meshWidth / 12) / 5);
            var step = meshWidth / nos;
            var xval = n * step;
            var posx = (-buildingConfig.w / 2 + buildingConfig.backlt.cut1) + xval;
            if (buildingConfig.brwrap == "brwrap") {
                posx = (-buildingConfig.w / 2 + buildingConfig.backlt.cut1) + xval;
            }
            if (buildingConfig.blwrap == "blwrap") {
                posx = -buildingConfig.w / 2 - buildingConfig.backlt.ltowidth + xval;
            }
            if (buildingConfig.backlt.leanTo == "backlt") {
                _this.mesh.visible = true;
            }
            if (visibleEndCheck((posx), "back")) {
                _this.mesh.visible = false;
            }
            if (buildingConfig.brwrap == "brwrap" && posx >= buildingConfig.w / 2 + buildingConfig.backlt.ltowidth) {
                _this.mesh.visible = false;
            }
            if (buildingConfig.blwrap == "blwrap" && posx <= -(buildingConfig.w / 2 + buildingConfig.backlt.ltowidth)) {
                _this.mesh.visible = false;
            }
            _this.mesh.geometry = _this.getGeometry();
            _this.mesh.position.x = posx + 1.25;
            _this.mesh.position.z = -buildingConfig.l - buildingConfig.backlt.ltowidth;
            _this.mesh.rotation.y = -1.57
        }
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(backleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoAdd, this.updateMesh);
    eventHandler.addEventListener(rightleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut2, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoAdd, this.updateMesh);
    eventHandler.addEventListener(leftleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function endleantoHatChannels(n, side) {
    side = side || "back";
    this.side = side;
    var _this = this;
    this.init = function() {
        var geometry = new three.BoxGeometry((buildingConfig.w - buildingConfig.frontlt.cut2 - buildingConfig.frontlt.cut1), 1, 2.5);
        var material = createSteelMaterial();
        material.side = three.DoubleSide;
        this.mesh = new three.Mesh(geometry, material);
        this.updateMesh();
        return this
    };
    this.updateMesh = function() {
        var values = new getEndAngle(_this.side);
        var angle = values.angle;
        var ltRoofWidth = values.ltRoofWidth;
        var hVal = values.hVal;
        if (_this.side == "front") {
            var nos = Math.ceil((buildingConfig.frontlt.ltowidth / 12) / 5);
            var unit_space = (buildingConfig.frontlt.ltowidth) / nos;
            var posx = (n * unit_space);
            var tanAngle = Math.PI / 2 - angle;
            var cornerDist = (buildingConfig.frontlt.ltowidth) - (posx);
            var heightValue = Math.tan(tanAngle) * cornerDist;
            _this.mesh.visible = false;
            if (buildingConfig.frontlt.leanTo == "frontlt" && buildingConfig.RoofSyle == AFrameRoof && buildingConfig.leantoRoofOrientation == VOrientation) {
                _this.mesh.visible = true;
            }
            if (posx > buildingConfig.frontlt.ltowidth || visibleEndCheck(null, "front")) {
                _this.mesh.visible = false;
            }
            _this.mesh.rotation.x = -(angle - Math.PI / 2);
            _this.mesh.scale.x = (buildingConfig.w - buildingConfig.frontlt.cut2 - buildingConfig.frontlt.cut1) / (iniWidth - iniFCut2 - iniFCut1);
            _this.mesh.position.set(-(buildingConfig.frontlt.cut2 / 2 - buildingConfig.frontlt.cut1 / 2), buildingConfig.frontlt.legheight + heightValue - 1.75, posx + 3)
        }
        if (_this.side == "back") {
            var nos = Math.ceil((buildingConfig.backlt.ltowidth / 12) / 5);
            var unit_space = buildingConfig.backlt.ltowidth / nos;
            var posz = (n * unit_space);
            var tanAngle = Math.PI / 2 - angle;
            var cornerDist = (buildingConfig.backlt.ltowidth - posz);
            var heightValue = -Math.tan(tanAngle) * cornerDist;
            _this.mesh.visible = false;
            if (buildingConfig.backlt.leanTo == "backlt" && buildingConfig.RoofSyle == AFrameRoof && buildingConfig.leantoRoofOrientation == VOrientation) {
                _this.mesh.visible = true;
            }
            if (posz > buildingConfig.backlt.ltowidth || visibleEndCheck(null, "back")) {
                _this.mesh.visible = false;
            }
            _this.mesh.rotation.x = -(angle - Math.PI / 2);
            _this.mesh.scale.x = (buildingConfig.w - buildingConfig.backlt.cut2 - buildingConfig.backlt.cut1) / (iniWidth - iniBCut2 - iniBCut1)
            _this.mesh.position.set(-(buildingConfig.backlt.cut2 / 2 - buildingConfig.backlt.cut1 / 2), buildingConfig.backlt.legheight + heightValue - 1.75, -buildingConfig.l - posz - 3)
        }
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(backleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(orientationChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoAdd, this.updateMesh);
    eventHandler.addEventListener(rightleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut2, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoAdd, this.updateMesh);
    eventHandler.addEventListener(leftleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(leantoRoofOrientation, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function endbaseObj(side) {
    side = side || "back";
    var _this = this;
    _this.side = side;
    this.init = function() {
        var geometry = new three.BoxGeometry(buildingConfig.w + 6, 2, buildingConfig.frontlt.ltowidth);
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
        var update_url = "img/" + buildingConfig.texture + ".jpg";
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
        _this.mesh.visible = false;
        if (_this.side == "front") {
            if (buildingConfig.frontlt.leanTo == "frontlt") {
                var centerX = buildingConfig.frontlt.cut1 / 2 - buildingConfig.frontlt.cut2 / 2;
                var centerZ = buildingConfig.frontlt.ltowidth / 2 + 3;
                _this.mesh.scale.z = (buildingConfig.frontlt.ltowidth) / (inifltWidth);
                _this.mesh.scale.x = (buildingConfig.w - buildingConfig.frontlt.cut1 - buildingConfig.frontlt.cut2 + 6) / (iniWidth - iniFCut1 - iniFCut2 + 6);
                _this.mesh.position.set(centerX, 0, centerZ);
                _this.updateTexture();
            }
        }
        if (_this.side == "back") {
            if (buildingConfig.backlt.leanTo == "backlt") {
                var centerX = buildingConfig.backlt.cut1 / 2 - buildingConfig.backlt.cut2 / 2;
                var centerZ = buildingConfig.l + buildingConfig.backlt.ltowidth / 2 + 3;
                _this.mesh.scale.z = (buildingConfig.backlt.ltowidth) / (inibltWidth);
                _this.mesh.scale.x = (buildingConfig.w - buildingConfig.backlt.cut1 - buildingConfig.backlt.cut2 + 6) / (iniWidth - iniBCut1 - iniBCut2 + 6);
                _this.mesh.position.set(centerX, 0, -centerZ);
                _this.updateTexture();
            }
        }
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(floorChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function endbasewrapObj(side) {
    side = side || "back";
    var _this = this;
    _this.side = side;
    this.init = function() {
        var geometry = new three.BoxGeometry(buildingConfig.rightlt.ltowidth + 6, 2, buildingConfig.frontlt.ltowidth);
        var texture = globals.textureLoader.load(templateUrl + "/img/" + buildingConfig.texture + ".jpg");
        var material = new three.MeshLambertMaterial({
            map: texture
        });
        this.mesh1 = new three.Mesh(geometry, material);
        this.mesh2 = new three.Mesh(geometry, material);
        _this.mesh1.visible = false;
        _this.mesh2.visible = false;
        this.updateMesh();
        return this;
    };
    this.updateTexture = function() {
        var update_url = "img/" + buildingConfig.texture + ".jpg";
        _this.mesh1.visible = true;
        _this.mesh2.visible = true;
        var matMap = null;
        if (buildingConfig.texture == "concrete") {
            matMap = concreteImg;
        } else if (buildingConfig.texture == "alphal") {
            matMap = alphalImg;
        } else if (buildingConfig.texture == "default") {
            _this.mesh1.visible = false;
            _this.mesh2.visible = false;
        }
        if (matMap) {
            _this.mesh1.material.map = matMap;
            _this.mesh2.material.map = matMap;
            matMap.wrapS = matMap.wrapT = three.RepeatWrapping;
            matMap.repeat.set(parseInt(buildingConfig.w / 60), parseInt(buildingConfig.l / 60));
        }
    };
    this.updateMesh = function() {
        _this.mesh1.visible = false;
        _this.mesh2.visible = false;
        if (_this.side == "front") {
            if (buildingConfig.frontlt.leanTo == "frontlt" && (buildingConfig.frwrap == "frwrap" || buildingConfig.flwrap == "flwrap")) {
                _this.mesh1.scale.z = (buildingConfig.rightlt.ltowidth) / (inirltWidth);
                _this.mesh1.scale.x = (buildingConfig.rightlt.ltowidth + 6) / (inirltWidth + 6);
                _this.mesh1.position.set((buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth / 2), 0, buildingConfig.rightlt.ltowidth / 2 + 3);
                _this.mesh2.scale.z = (buildingConfig.leftlt.ltowidth) / (inilltWidth);
                _this.mesh2.scale.x = (buildingConfig.leftlt.ltowidth + 6) / (inilltWidth + 6);
                _this.mesh2.position.set(-1 * (buildingConfig.w / 2 + buildingConfig.leftlt.ltowidth / 2), 0, buildingConfig.leftlt.ltowidth / 2 + 3);
                _this.updateTexture();
                if (buildingConfig.frwrap != "frwrap") {
                    _this.mesh1.visible = false;
                }
                if (buildingConfig.flwrap != "flwrap") {
                    _this.mesh2.visible = false;
                }
            }
        }
        if (_this.side == "back") {
            if (buildingConfig.backlt.leanTo == "backlt" && (buildingConfig.brwrap == "brwrap" || buildingConfig.blwrap == "blwrap")) {
                _this.mesh1.scale.z = (buildingConfig.rightlt.ltowidth) / (inirltWidth);
                _this.mesh1.scale.x = (buildingConfig.rightlt.ltowidth + 6) / (inirltWidth + 6);
                _this.mesh1.position.set((buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth / 2), 0, -buildingConfig.l - buildingConfig.rightlt.ltowidth / 2 - 3);
                _this.mesh2.scale.z = (buildingConfig.leftlt.ltowidth) / (inilltWidth);
                _this.mesh2.scale.x = (buildingConfig.leftlt.ltowidth + 6) / (inilltWidth + 6);
                _this.mesh2.position.set(-(buildingConfig.w / 2 + buildingConfig.leftlt.ltowidth / 2), 0, -(buildingConfig.l + buildingConfig.leftlt.ltowidth / 2 + 3));
                _this.updateTexture();
                if (buildingConfig.brwrap != "brwrap") {
                    _this.mesh1.visible = false;
                }
                if (buildingConfig.blwrap != "blwrap") {
                    _this.mesh2.visible = false;
                }
            }
        }
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(floorChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function leantoWraptopcornerSupport() {
    var _this = this;
    total_truss_count = 10;
    this.init = function() {
        var material = createSteelMaterial();
        var material1 = createSteelMaterial();
        var geometry = new three.BoxGeometry(2, buildingConfig.leftlt.legheight, 2);
        var geo = _this.getGeometry(buildingConfig.frontlt.ltowidth / 2, "fr");
        var geo1 = _this.getGeometry(buildingConfig.frontlt.ltowidth / 2, "fl");
        var geo2 = _this.getGeometry(buildingConfig.backlt.ltowidth / 2, "br");
        var geo3 = _this.getGeometry(buildingConfig.backlt.ltowidth / 2, "bl");
        var lineGeo1 = new three.BoxGeometry(2, buildingConfig.frontlt.legheight, 2);
        var lineGeo2 = new three.BoxGeometry(2, buildingConfig.frontlt.legheight, 2);
        var lineGeo3 = new three.BoxGeometry(2, buildingConfig.backlt.legheight, 2);
        var lineGeo4 = new three.BoxGeometry(2, buildingConfig.backlt.legheight, 2);
        var lineGeo5 = new three.BoxGeometry(2, buildingConfig.h - buildingConfig.frontlt.drop, 2);
        var lineGeo6 = new three.BoxGeometry(2, buildingConfig.h - buildingConfig.frontlt.drop, 2);
        var lineGeo7 = new three.BoxGeometry(2, buildingConfig.h - buildingConfig.backlt.drop, 2);
        var lineGeo8 = new three.BoxGeometry(2, buildingConfig.h - buildingConfig.backlt.drop, 2);
        geometry.dynamic = true;
        geo.dynamic = true;
        geo1.dynamic = true;
        geo2.dynamic = true;
        geo3.dynamic = true;
        lineGeo1.dynamic = true;
        lineGeo1.colorsNeedUpdate = true;
        lineGeo2.dynamic = true;
        lineGeo2.colorsNeedUpdate = true;
        lineGeo3.dynamic = true;
        lineGeo3.colorsNeedUpdate = true;
        lineGeo4.dynamic = true;
        lineGeo4.colorsNeedUpdate = true;
        this.mesh = new three.Mesh(geo, material);
        this.mesh1 = new three.Mesh(geometry, material);
        this.mesh2 = new three.Mesh(geo1, material);
        this.mesh3 = new three.Mesh(geometry, material);
        this.mesh4 = new three.Mesh(geo2, material);
        this.mesh5 = new three.Mesh(geometry, material);
        this.mesh6 = new three.Mesh(geo3, material);
        this.mesh7 = new three.Mesh(geometry, material);
        this.mesh.geometry.verticesNeedUpdate = true;
        this.flwrap_support_mesh = new three.Mesh(geometry, material);
        this.frwrap_support_mesh = new three.Mesh(geometry, material);
        this.blwrap_support_mesh = new three.Mesh(geometry, material);
        this.brwrap_support_mesh = new three.Mesh(geometry, material);
        this.fright_mesh = new three.Mesh(lineGeo1, material1);
        this.fleft_mesh = new three.Mesh(lineGeo2, material1);
        this.bright_mesh = new three.Mesh(lineGeo3, material1);
        this.bleft_mesh = new three.Mesh(lineGeo4, material1);
        this.fright_mesh1 = new three.Mesh(lineGeo5, material1);
        this.fleft_mesh1 = new three.Mesh(lineGeo6, material1);
        this.bright_mesh1 = new three.Mesh(lineGeo7, material1);
        this.bleft_mesh1 = new three.Mesh(lineGeo8, material1);
        this.updateMesh();
        return this;
    };
    this.getGeometry = function(numbers, sideval) {
        if (sideval == "fr") {
            var points = generateZigZagPoints(numbers + 1, 24, 5, 2);
            modelShape.call(this, points);
            var extrudeSettings = {
                amount: .1,
                bevelEnabled: true,
                bevelSegments: 0,
                steps: 0,
                bevelSize: 0,
                bevelThickness: 0
            };
            return geo = new three.ExtrudeGeometry(this.shape, extrudeSettings);
        }
        if (sideval == "fl") {
            var points = generateZigZagPoints(numbers + 1, 24, 5, 2);
            modelShape.call(this, points);
            var extrudeSettings = {
                amount: .1,
                bevelEnabled: true,
                bevelSegments: 0,
                steps: 0,
                bevelSize: 0,
                bevelThickness: 0
            };
            return geo1 = new three.ExtrudeGeometry(this.shape, extrudeSettings);
        }
        if (sideval == "br") {
            var points = generateZigZagPoints(numbers + 1, 24, 5, 2);
            modelShape.call(this, points);
            var extrudeSettings = {
                amount: .1,
                bevelEnabled: true,
                bevelSegments: 0,
                steps: 0,
                bevelSize: 0,
                bevelThickness: 0
            };
            return geo2 = new three.ExtrudeGeometry(this.shape, extrudeSettings);
        }
        if (sideval == "bl") {
            var points = generateZigZagPoints(numbers + 1, 24, 5, 2);
            modelShape.call(this, points);
            var extrudeSettings = {
                amount: .1,
                bevelEnabled: true,
                bevelSegments: 0,
                steps: 0,
                bevelSize: 0,
                bevelThickness: 0
            };
            return geo3 = new three.ExtrudeGeometry(this.shape, extrudeSettings);
        }
    };
    this.updateMesh = function() {
        _this.fright_mesh.visible = false;
        _this.fleft_mesh.visible = false;
        _this.bright_mesh.visible = false;
        _this.bleft_mesh.visible = false;
        _this.fright_mesh1.visible = false;
        _this.fleft_mesh1.visible = false;
        _this.bright_mesh1.visible = false;
        _this.bleft_mesh1.visible = false;
        if (buildingConfig.flwrap) {
            var frltw = buildingConfig.frontlt.ltowidth + 6;
            var lfltw = buildingConfig.leftlt.ltowidth;
            var edge_line = Math.sqrt(frltw * frltw + lfltw * lfltw);
            var h_dif = (buildingConfig.h - buildingConfig.frontlt.drop) - buildingConfig.leftlt.legheight;
            var distance = Math.sqrt(edge_line * edge_line + h_dif * h_dif);
            var h_dif = (buildingConfig.h - buildingConfig.frontlt.drop) - buildingConfig.leftlt.legheight;
            _this.flwrap_support_mesh.geometry = new three.BoxGeometry(distance, 2, 2);
            _this.flwrap_support_mesh.rotation.y = Math.PI / 4;
            _this.flwrap_support_mesh.rotation.z = Math.atan(h_dif / edge_line);
            _this.flwrap_support_mesh.position.set(-buildingConfig.w / 2 - buildingConfig.leftlt.ltowidth / 2, buildingConfig.leftlt.legheight + h_dif / 2 - 1, buildingConfig.frontlt.ltowidth / 2);
            _this.mesh1.geometry = new three.BoxGeometry(distance - 2, 2, 2);
            _this.mesh1.rotation.y = Math.PI / 4;
            _this.mesh1.rotation.z = Math.atan(h_dif / edge_line);
            _this.mesh1.position.set(-buildingConfig.w / 2 - buildingConfig.leftlt.ltowidth / 2, buildingConfig.leftlt.legheight + h_dif / 2 - 8.5, buildingConfig.frontlt.ltowidth / 2);
            _this.mesh.geometry = _this.getGeometry(Math.round(distance / 26), "fl");
            _this.mesh.position.set(-buildingConfig.w / 2, (buildingConfig.h - buildingConfig.leftlt.drop - 6.5), 0 * buildingConfig.frontlt.ltowidth / 2);
            _this.mesh.rotation.y = Math.PI + Math.PI / 4;
            _this.mesh.rotation.z = -Math.atan(h_dif / edge_line);
            _this.fleft_mesh.scale.y = buildingConfig.frontlt.legheight / inifltlegheight;
            _this.fleft_mesh.position.set(-(buildingConfig.w / 2 + buildingConfig.frontlt.ltowidth + 2.5), buildingConfig.frontlt.legheight / 2, buildingConfig.frontlt.ltowidth);
            _this.fleft_mesh1.scale.y = (buildingConfig.h - buildingConfig.frontlt.drop - 1) / iniHeight;
            _this.fleft_mesh1.position.set(-(buildingConfig.w / 2 + 2.5), (buildingConfig.h - buildingConfig.frontlt.drop - 1) / 2, 0);
            _this.fleft_mesh1.visible = true;
            _this.flwrap_support_mesh.visible = true;
            _this.fleft_mesh.visible = true;
            _this.mesh1.visible = true;
            _this.mesh.visible = true;
        } else {
            _this.flwrap_support_mesh.visible = false;
            _this.fleft_mesh.visible = false;
            _this.fleft_mesh1.visible = false;
            _this.mesh1.visible = false;
            _this.mesh.visible = false;
        }
        if (buildingConfig.blwrap) {
            var frltw = buildingConfig.backlt.ltowidth + 6;
            var lfltw = buildingConfig.leftlt.ltowidth;
            var edge_line = Math.sqrt(frltw * frltw + lfltw * lfltw);
            var h_dif = (buildingConfig.h - buildingConfig.backlt.drop) - buildingConfig.leftlt.legheight;
            var distance = Math.sqrt(edge_line * edge_line + h_dif * h_dif);
            _this.blwrap_support_mesh.geometry = new three.BoxGeometry(distance, 2, 2);
            _this.blwrap_support_mesh.rotation.y = -Math.PI / 4;
            _this.blwrap_support_mesh.rotation.z = Math.atan(h_dif / edge_line);
            _this.blwrap_support_mesh.position.set(-buildingConfig.w / 2 - buildingConfig.leftlt.ltowidth / 2, buildingConfig.leftlt.legheight + h_dif / 2 - 2, -buildingConfig.l - buildingConfig.backlt.ltowidth / 2);
            _this.mesh3.geometry = new three.BoxGeometry(distance - 2, 2, 2);
            _this.mesh3.rotation.y = -Math.PI / 4;
            _this.mesh3.rotation.z = Math.atan(h_dif / edge_line);
            _this.mesh3.position.set(-buildingConfig.w / 2 - buildingConfig.leftlt.ltowidth / 2, buildingConfig.leftlt.legheight + h_dif / 2 - 8.5, -buildingConfig.l - buildingConfig.backlt.ltowidth / 2);
            _this.mesh2.geometry = _this.getGeometry(Math.round(distance / 26), "bl");
            _this.mesh2.position.set(-buildingConfig.w / 2, (buildingConfig.h - buildingConfig.leftlt.drop - 6.5), -buildingConfig.l);
            _this.mesh2.rotation.y = Math.PI - Math.PI / 4;
            _this.mesh2.rotation.z = -Math.atan(h_dif / edge_line);
            _this.bleft_mesh.scale.y = buildingConfig.backlt.legheight / inibltlegheight;
            _this.bleft_mesh.position.set(-(buildingConfig.w / 2 + buildingConfig.backlt.ltowidth + 2.5), buildingConfig.backlt.legheight / 2, -buildingConfig.l - buildingConfig.backlt.ltowidth);
            _this.bleft_mesh1.scale.y = (buildingConfig.h - buildingConfig.backlt.drop - 1) / iniHeight;
            _this.bleft_mesh1.position.set(-(buildingConfig.w / 2 + 2.5), (buildingConfig.h - buildingConfig.backlt.drop - 1) / 2, -buildingConfig.l);
            _this.bleft_mesh1.visible = true;
            _this.bleft_mesh.visible = true;
            _this.blwrap_support_mesh.visible = true;
            _this.mesh3.visible = true;
            _this.mesh2.visible = true;
        } else {
            _this.bleft_mesh.visible = false;
            _this.bleft_mesh.visible = false;
            _this.blwrap_support_mesh.visible = false;
            _this.mesh3.visible = false;
            _this.mesh2.visible = false;
        }
        if (buildingConfig.frwrap) {
            var frltw = buildingConfig.frontlt.ltowidth + 6;
            var lfltw = buildingConfig.rightlt.ltowidth;
            var edge_line = Math.sqrt(frltw * frltw + lfltw * lfltw);
            var h_dif = (buildingConfig.h - buildingConfig.frontlt.drop) - buildingConfig.rightlt.legheight;
            var distance = Math.sqrt(edge_line * edge_line + h_dif * h_dif);
            var h_dif = (buildingConfig.h - buildingConfig.frontlt.drop) - buildingConfig.rightlt.legheight;
            _this.frwrap_support_mesh.geometry = new three.BoxGeometry(distance, 2, 2);
            _this.frwrap_support_mesh.rotation.y = -Math.PI / 4;
            _this.frwrap_support_mesh.rotation.z = -Math.atan(h_dif / edge_line);
            _this.frwrap_support_mesh.position.set(buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth / 2, buildingConfig.rightlt.legheight + h_dif / 2 - 2, buildingConfig.frontlt.ltowidth / 2);
            _this.mesh5.geometry = new three.BoxGeometry(distance - 2, 2, 2);
            _this.mesh5.rotation.y = -Math.PI / 4;
            _this.mesh5.rotation.z = -Math.atan(h_dif / edge_line);
            _this.mesh5.position.set(buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth / 2, buildingConfig.rightlt.legheight + h_dif / 2 - 8.5, buildingConfig.frontlt.ltowidth / 2);
            _this.mesh4.geometry = _this.getGeometry(Math.round(distance / 26), "fr");
            _this.mesh4.position.set(buildingConfig.w / 2, (buildingConfig.h - buildingConfig.rightlt.drop - 6.5), 0 * buildingConfig.frontlt.ltowidth / 2);
            _this.mesh4.rotation.y = -Math.PI / 4;
            _this.mesh4.rotation.z = -Math.atan(h_dif / edge_line);
            _this.fright_mesh.scale.y = buildingConfig.frontlt.legheight / inifltlegheight;
            _this.fright_mesh.position.set((buildingConfig.w / 2 + buildingConfig.frontlt.ltowidth + 2.5), buildingConfig.frontlt.legheight / 2, buildingConfig.frontlt.ltowidth);
            _this.fright_mesh1.scale.y = (buildingConfig.h - buildingConfig.frontlt.drop - 1) / iniHeight;
            _this.fright_mesh1.position.set((buildingConfig.w / 2 + 2.5), (buildingConfig.h - buildingConfig.frontlt.drop - 1) / 2, 0);
            _this.fright_mesh1.visible = true;
            _this.fright_mesh.visible = true;
            _this.frwrap_support_mesh.visible = true;
            _this.mesh5.visible = true;
            _this.mesh4.visible = true;
        } else {
            _this.fright_mesh.visible = false;
            _this.fright_mesh.visible = false;
            _this.frwrap_support_mesh.visible = false;
            _this.mesh5.visible = false;
            _this.mesh4.visible = false;
        }
        if (buildingConfig.brwrap) {
            var frltw = buildingConfig.backlt.ltowidth + 6;
            var lfltw = buildingConfig.rightlt.ltowidth;
            var edge_line = Math.sqrt(frltw * frltw + lfltw * lfltw);
            var h_dif = (buildingConfig.h - buildingConfig.backlt.drop) - buildingConfig.rightlt.legheight;
            var distance = Math.sqrt(edge_line * edge_line + h_dif * h_dif);
            var h_dif = (buildingConfig.h - buildingConfig.backlt.drop) - buildingConfig.rightlt.legheight;
            _this.brwrap_support_mesh.geometry = new three.BoxGeometry(distance, 2, 2);
            _this.brwrap_support_mesh.rotation.y = Math.PI / 4;
            _this.brwrap_support_mesh.rotation.z = -Math.atan(h_dif / edge_line);
            _this.brwrap_support_mesh.position.set(buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth / 2, buildingConfig.rightlt.legheight + h_dif / 2 - 2, -buildingConfig.l - buildingConfig.backlt.ltowidth / 2);
            _this.mesh7.geometry = new three.BoxGeometry(distance - 2, 2, 2);
            _this.mesh7.rotation.y = Math.PI / 4;
            _this.mesh7.rotation.z = -Math.atan(h_dif / edge_line);
            _this.mesh7.position.set(buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth / 2, buildingConfig.rightlt.legheight + h_dif / 2 - 8.5, -buildingConfig.l - buildingConfig.backlt.ltowidth / 2);
            _this.mesh6.geometry = _this.getGeometry(Math.round(distance / 26), "br");
            _this.mesh6.position.set(buildingConfig.w / 2, (buildingConfig.h - buildingConfig.rightlt.drop - 6.5), -buildingConfig.l);
            _this.mesh6.rotation.y = Math.PI / 4;
            _this.mesh6.rotation.z = -Math.atan(h_dif / edge_line);
            _this.bright_mesh.scale.y = buildingConfig.backlt.legheight / inibltlegheight;
            _this.bright_mesh.position.set((buildingConfig.w / 2 + buildingConfig.backlt.ltowidth + 2.5), buildingConfig.backlt.legheight / 2, -buildingConfig.l - buildingConfig.backlt.ltowidth);
            _this.bright_mesh1.scale.y = (buildingConfig.h - buildingConfig.backlt.drop - 1) / iniHeight;
            _this.bright_mesh1.position.set((buildingConfig.w / 2 + 2.5), (buildingConfig.h - buildingConfig.backlt.drop - 1) / 2, -buildingConfig.l);
            _this.bright_mesh1.visible = true;
            _this.bright_mesh.visible = true;
            _this.brwrap_support_mesh.visible = true;
            _this.mesh7.visible = true;
            _this.mesh6.visible = true;
        } else {
            _this.bright_mesh1.visible = false;
            _this.bright_mesh.visible = false;
            _this.mesh7.visible = false;
            _this.mesh6.visible = false;
            _this.brwrap_support_mesh.visible = false;
        }
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoAdd, this.updateMesh);
    eventHandler.addEventListener(rightleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut2, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoAdd, this.updateMesh);
    eventHandler.addEventListener(leftleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function leantoAFSupport(n, side) {
    side = side || "left";
    var _this = this;
    this.side = side;
    this.init = function() {
        var geometry = new three.BoxGeometry(2.5, 1, buildingConfig.rightlt.ltowidth);
        var material = createSteelMaterial();
        material.side = three.DoubleSide;
        this.mesh1 = new three.Mesh(geometry, material);
        this.mesh2 = new three.Mesh(geometry, material);
        this.updateMesh();
        return this;
    };
    this.updateMesh = function() {
        var values = new getAngle(_this.side);
        var angle = values.angle;
        var ltRoofWidth = values.ltRoofWidth;
        var hVal = values.hVal;
        if (_this.side == "right") {
            var nos = Math.ceil((buildingConfig.rightlt.ltowidth / 12) / 5);
            var unit_space = buildingConfig.rightlt.ltowidth / nos;
            var posx = (buildingConfig.w / 2) + (n * unit_space) + 4;
            var tanAngle = Math.PI / 2 - angle;
            var cornerDist = (buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth) - (posx - 2.5);
            var heightValue = Math.tan(tanAngle) * cornerDist - 1;
            var tangle = Math.atan(ltRoofWidth / (buildingConfig.rightlt.ltowidth + 6));
            var len1 = (buildingConfig.rightlt.ltowidth - cornerDist + 2.5) / Math.tan(tangle);
            var len2 = (buildingConfig.rightlt.ltowidth - cornerDist + 2.5) / Math.tan(tangle);
            _this.mesh1.visible = false;
            _this.mesh2.visible = false;
            if (buildingConfig.rightlt.leanTo == "rightlt" && buildingConfig.RoofSyle == AFrameRoof && buildingConfig.leantoRoofOrientation == VOrientation) {
                _this.mesh1.visible = true;
                _this.mesh2.visible = true;
            }
            if (posx > buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth + 6 || visibleEndCheck(null, "right")) {
                _this.mesh1.visible = false;
                _this.mesh2.visible = false;
            }
            if (buildingConfig.frwrap == null) {
                _this.mesh1.visible = false;
            }
            if (buildingConfig.brwrap == null) {
                _this.mesh2.visible = false;
            }
            _this.mesh1.rotation.z = angle - Math.PI / 2;
            _this.mesh1.scale.z = (len1) / inirltWidth;
            _this.mesh1.position.set(posx, buildingConfig.rightlt.legheight + heightValue, len1 / 2);
            _this.mesh2.rotation.z = angle - Math.PI / 2;
            _this.mesh2.scale.z = (len2) / inirltWidth;
            _this.mesh2.position.set(posx, buildingConfig.rightlt.legheight + heightValue, -(buildingConfig.l + len2 / 2));
        }
        if (_this.side == "left") {
            var nos = Math.ceil((buildingConfig.leftlt.ltowidth / 12) / 5);
            var unit_space = buildingConfig.leftlt.ltowidth / nos;
            var posx = (buildingConfig.w / 2) + (n * unit_space) + 4;
            var tanAngle = Math.PI / 2 - angle;
            var cornerDist = -(buildingConfig.w / 2 + buildingConfig.leftlt.ltowidth - (posx - 2.5));
            var heightValue = Math.tan(tanAngle) * cornerDist - 1;
            var tangle = Math.atan(ltRoofWidth / (buildingConfig.leftlt.ltowidth + 6));
            var len1 = (buildingConfig.leftlt.ltowidth + cornerDist + 2.5) / Math.tan(tangle);
            var len2 = (buildingConfig.leftlt.ltowidth + cornerDist + 2.5) / Math.tan(tangle);
            _this.mesh1.visible = false;
            _this.mesh2.visible = false;
            if (buildingConfig.leftlt.leanTo == "leftlt" && buildingConfig.RoofSyle == AFrameRoof && buildingConfig.leantoRoofOrientation == VOrientation) {
                _this.mesh1.visible = true;
                _this.mesh2.visible = true;
            }
            if (posx > buildingConfig.w / 2 + buildingConfig.leftlt.ltowidth + 6 || visibleEndCheck(null, "left")) {
                _this.mesh1.visible = false;
                _this.mesh2.visible = false;
            }
            if (buildingConfig.flwrap == null) {
                _this.mesh1.visible = false;
            }
            if (buildingConfig.blwrap == null) {
                _this.mesh2.visible = false;
            }
            _this.mesh1.rotation.z = angle - Math.PI / 2;
            _this.mesh1.scale.z = (len1) / inilltWidth;
            _this.mesh1.position.set(-posx, buildingConfig.leftlt.legheight + heightValue, len1 / 2);
            _this.mesh2.rotation.z = angle - Math.PI / 2;
            _this.mesh2.scale.z = (len2) / inilltWidth;
            _this.mesh2.position.set(-posx, buildingConfig.leftlt.legheight + heightValue, -(buildingConfig.l + len2 / 2));
        }
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoAdd, this.updateMesh);
    eventHandler.addEventListener(rightleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut2, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoAdd, this.updateMesh);
    eventHandler.addEventListener(leftleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(orientationChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(leantoRoofOrientation, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function endleantoAFSupport(n, side) {
    side = side || "back";
    var _this = this;
    this.side = side;
    this.init = function() {
        var geometry = new three.BoxGeometry(buildingConfig.frontlt.ltowidth, 1, 2.5);
        var material = createSteelMaterial();
        material.side = three.DoubleSide;
        this.mesh1 = new three.Mesh(geometry, material);
        this.mesh2 = new three.Mesh(geometry, material);
        this.updateMesh();
        return this;
    };
    this.updateMesh = function() {
        var values = new getEndAngle(_this.side);
        var angle = values.angle;
        var ltRoofWidth = values.ltRoofWidth;
        var hVal = values.hVal;
        if (_this.side == "front") {
            var nos = Math.ceil((buildingConfig.frontlt.ltowidth / 12) / 5);
            var unit_space = (buildingConfig.frontlt.ltowidth) / nos;
            var posx = (n * unit_space);
            var tanAngle = Math.PI / 2 - angle;
            var cornerDist = (buildingConfig.frontlt.ltowidth) - (posx);
            var heightValue = Math.tan(tanAngle) * cornerDist;
            var tangle = Math.atan(ltRoofWidth / (buildingConfig.frontlt.ltowidth + 6));
            var len1 = (buildingConfig.frontlt.ltowidth - cornerDist) / Math.tan(tangle);
            var len2 = (buildingConfig.frontlt.ltowidth - cornerDist) / Math.tan(tangle);
            _this.mesh1.visible = false;
            _this.mesh2.visible = false;
            if (buildingConfig.frontlt.leanTo == "frontlt" && buildingConfig.RoofSyle == AFrameRoof && buildingConfig.leantoRoofOrientation == VOrientation) {
                _this.mesh1.visible = true;
                _this.mesh2.visible = true;
            }
            if (posx > buildingConfig.frontlt.ltowidth || visibleEndCheck(null, "front")) {
                _this.mesh1.visible = false;
                _this.mesh2.visible = false;
            }
            if (buildingConfig.frwrap == null) {
                _this.mesh1.visible = false;
            }
            if (buildingConfig.flwrap == null) {
                _this.mesh2.visible = false;
            }
            _this.mesh1.rotation.x = -(angle - Math.PI / 2);
            _this.mesh1.scale.x = (len1) / (inifltWidth);
            _this.mesh1.position.set(buildingConfig.w / 2 + len1 / 2, buildingConfig.frontlt.legheight + heightValue - 1.75, posx + 3)
            _this.mesh2.rotation.x = -(angle - Math.PI / 2);
            _this.mesh2.scale.x = (len2) / (inifltWidth);
            _this.mesh2.position.set(-(buildingConfig.w / 2 + len2 / 2), buildingConfig.frontlt.legheight + heightValue - 1.75, posx + 3)
        }
        if (_this.side == "back") {
            var nos = Math.ceil((buildingConfig.backlt.ltowidth / 12) / 5);
            var unit_space = buildingConfig.backlt.ltowidth / nos;
            var posx = (n * unit_space);
            var tanAngle = Math.PI / 2 - angle;
            var cornerDist = (buildingConfig.backlt.ltowidth - posx);
            var heightValue = -Math.tan(tanAngle) * cornerDist;
            var tangle = Math.atan(ltRoofWidth / (buildingConfig.backlt.ltowidth + 6));
            var len1 = (buildingConfig.backlt.ltowidth - cornerDist) / Math.tan(tangle);
            var len2 = (buildingConfig.backlt.ltowidth - cornerDist) / Math.tan(tangle);
            _this.mesh1.visible = false;
            _this.mesh2.visible = false;
            if (buildingConfig.backlt.leanTo == "backlt" && buildingConfig.RoofSyle == AFrameRoof && buildingConfig.leantoRoofOrientation == VOrientation) {
                _this.mesh1.visible = true;
                _this.mesh2.visible = true;
            }
            if (posx > buildingConfig.backlt.ltowidth || visibleEndCheck(null, "back")) {
                _this.mesh1.visible = false;
                _this.mesh2.visible = false;
            }
            if (buildingConfig.brwrap == null) {
                _this.mesh1.visible = false;
            }
            if (buildingConfig.blwrap == null) {
                _this.mesh2.visible = false;
            }
            _this.mesh1.rotation.x = -(angle - Math.PI / 2);
            _this.mesh1.scale.x = (len1) / (inibltWidth);
            _this.mesh1.position.set(buildingConfig.w / 2 + len1 / 2, buildingConfig.backlt.legheight + heightValue - 1.75, -buildingConfig.l - posx - 3)
            _this.mesh2.rotation.x = -(angle - Math.PI / 2);
            _this.mesh2.scale.x = (len2) / (inibltWidth);
            _this.mesh2.position.set(-(buildingConfig.w / 2 + len2 / 2), buildingConfig.backlt.legheight + heightValue - 1.75, -buildingConfig.l - posx - 3)
        }
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoAdd, this.updateMesh);
    eventHandler.addEventListener(rightleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut2, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoAdd, this.updateMesh);
    eventHandler.addEventListener(leftleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(orientationChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(leantoRoofOrientation, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function frRidgeCap() {
    var _this = this;
    this.init = function() {
        var geometry = _this.getGeometry();
        var material = createMeshPhongMaterial(Colours[buildingConfig.ridgeColour].hex, null);
        material.side = three.DoubleSide;
        this.mesh = new three.Mesh(geometry, material);
        this.mesh.geometry.verticesNeedUpdate = true;
        this.mesh.geometry.dynamic = true;
        this.updateMesh();
        return this
    };
    this.getGeometry = function() {
        var h1 = buildingConfig.h - buildingConfig.rightlt.drop + 2;
        var h2 = buildingConfig.rightlt.legheight + 2;
        var value1 = new getEndAngle("front");
        var ltRoofWidth1 = value1.ltRoofWidth;
        var value2 = new getAngle("right");
        var ltRoofWidth2 = value2.ltRoofWidth;
        var len = Math.sqrt((ltRoofWidth1 * ltRoofWidth1) + (ltRoofWidth2 * ltRoofWidth2)) - 12;
        var points = [
            [-6, h1, 1],
            [0, h1 + 1, 1],
            [6, h1, 1],
            [-6, h2, len],
            [0, h2 + 1, len + 6],
            [6, h2, len],
        ];
        var faces = [
            [0, 1, 3],
            [3, 4, 1],
            [1, 4, 5],
            [1, 2, 5]
        ];
        var geometry = Ageometry(points, faces, true);
        return geometry
    };
    this.updateMesh = function() {
        _this.mesh.geometry = _this.getGeometry();
        var value1 = new getAngle("right");
        var ltRoofWidth1 = value1.ltRoofWidth;
        var value2 = new getEndAngle("front");
        var ltRoofWidth2 = value2.ltRoofWidth;
        var angle = value1.angle;
        _this.mesh.visible = false;
        var tangle = Math.atan(ltRoofWidth1 / ltRoofWidth2);
        _this.mesh.rotation.y = tangle;
        if (buildingConfig.frwrap == "frwrap" && buildingConfig.leantoRoofOrientation == VOrientation) {
            _this.mesh.visible = true;
        }
        _this.mesh.position.x = (buildingConfig.w / 2);
        _this.mesh.updateMatrix();
    };
    this.changeColour = function() {
        _this.mesh.material.color = new three.Color(get_orientation_url(buildingConfig.ridgeColour, null, 2));
    };
    eventHandler.addEventListener(ridgeColorChange, this.changeColour);
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoAdd, this.updateMesh);
    eventHandler.addEventListener(rightleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut2, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoAdd, this.updateMesh);
    eventHandler.addEventListener(leftleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(orientationChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(leantoRoofOrientation, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function flRidgeCap() {
    var _this = this;
    this.init = function() {
        var geometry = _this.getGeometry();
        var material = createMeshPhongMaterial(Colours[buildingConfig.ridgeColour].hex, null);
        material.side = three.DoubleSide;
        this.mesh = new three.Mesh(geometry, material);
        this.mesh.geometry.verticesNeedUpdate = true;
        this.mesh.geometry.dynamic = true;
        this.updateMesh();
        return this
    };
    this.getGeometry = function() {
        var h1 = buildingConfig.h - buildingConfig.leftlt.drop + 2;
        var h2 = buildingConfig.leftlt.legheight + 2;
        var value1 = new getEndAngle("front");
        var ltRoofWidth1 = value1.ltRoofWidth;
        var value2 = new getAngle("left");
        var ltRoofWidth2 = value2.ltRoofWidth;
        var len = Math.sqrt((ltRoofWidth1 * ltRoofWidth1) + (ltRoofWidth2 * ltRoofWidth2)) - 12;
        var points = [
            [-6, h1, 1],
            [0, h1 + 1, 1],
            [6, h1, 1],
            [-6, h2, len],
            [0, h2 + 1, len + 6],
            [6, h2, len],
        ];
        var faces = [
            [0, 1, 3],
            [3, 4, 1],
            [1, 4, 5],
            [1, 2, 5]
        ];
        var geometry = Ageometry(points, faces, true);
        return geometry
    };
    this.updateMesh = function() {
        _this.mesh.geometry = _this.getGeometry();
        var value1 = new getAngle("left");
        var ltRoofWidth1 = value1.ltRoofWidth;
        var value2 = new getEndAngle("front");
        var ltRoofWidth2 = value2.ltRoofWidth;
        var angle = value1.angle;
        _this.mesh.visible = false;
        var tangle = Math.atan(ltRoofWidth1 / ltRoofWidth2);
        _this.mesh.rotation.y = -tangle;
        if (buildingConfig.flwrap == "flwrap" && buildingConfig.leantoRoofOrientation == VOrientation) {
            _this.mesh.visible = true;
        }
        _this.mesh.position.x = (-buildingConfig.w / 2);
        _this.mesh.updateMatrix();
    };
    this.changeColour = function() {
        _this.mesh.material.color = new three.Color(get_orientation_url(buildingConfig.ridgeColour, null, 2));
    };
    eventHandler.addEventListener(ridgeColorChange, this.changeColour);
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoAdd, this.updateMesh);
    eventHandler.addEventListener(rightleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut2, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoAdd, this.updateMesh);
    eventHandler.addEventListener(leftleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(orientationChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(leantoRoofOrientation, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function brRidgeCap() {
    var _this = this;
    this.init = function() {
        var geometry = _this.getGeometry();
        var material = createMeshPhongMaterial(Colours[buildingConfig.ridgeColour].hex, null);
        material.side = three.DoubleSide;
        this.mesh = new three.Mesh(geometry, material);
        this.mesh.geometry.verticesNeedUpdate = true;
        this.mesh.geometry.dynamic = true;
        this.updateMesh();
        return this
    };
    this.getGeometry = function() {
        var h1 = buildingConfig.h - buildingConfig.rightlt.drop + 2;
        var h2 = buildingConfig.rightlt.legheight + 2;
        var value1 = new getEndAngle("back");
        var ltRoofWidth1 = value1.ltRoofWidth;
        var value2 = new getAngle("right");
        var ltRoofWidth2 = value2.ltRoofWidth;
        var len = Math.sqrt((ltRoofWidth1 * ltRoofWidth1) + (ltRoofWidth2 * ltRoofWidth2)) - 12;
        var points = [
            [-6, h1, 1],
            [0, h1 + 1, 1],
            [6, h1, 1],
            [-6, h2, len],
            [0, h2 + 1, len + 6],
            [6, h2, len],
        ];
        var faces = [
            [0, 1, 3],
            [3, 4, 1],
            [1, 4, 5],
            [1, 2, 5]
        ];
        var geometry = Ageometry(points, faces, true);
        return geometry
    };
    this.updateMesh = function() {
        _this.mesh.geometry = _this.getGeometry();
        var value1 = new getAngle("right");
        var ltRoofWidth1 = value1.ltRoofWidth;
        var value2 = new getEndAngle("back");
        var ltRoofWidth2 = value2.ltRoofWidth;
        var angle = value1.angle;
        _this.mesh.visible = false;
        var tangle = Math.atan(ltRoofWidth1 / ltRoofWidth2);
        _this.mesh.rotation.y = (Math.PI / 2) + tangle;
        if (buildingConfig.brwrap == "brwrap" && buildingConfig.leantoRoofOrientation == VOrientation) {
            _this.mesh.visible = true;
        }
        _this.mesh.position.x = (buildingConfig.w / 2);
        _this.mesh.position.z = -buildingConfig.l;
        _this.mesh.updateMatrix();
    };
    this.changeColour = function() {
        _this.mesh.material.color = new three.Color(get_orientation_url(buildingConfig.ridgeColour, null, 2));
    };
    eventHandler.addEventListener(ridgeColorChange, this.changeColour);
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoAdd, this.updateMesh);
    eventHandler.addEventListener(rightleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut2, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoAdd, this.updateMesh);
    eventHandler.addEventListener(leftleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(orientationChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(leantoRoofOrientation, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function blRidgeCap() {
    var _this = this;
    this.init = function() {
        var geometry = _this.getGeometry();
        var material = createMeshPhongMaterial(Colours[buildingConfig.ridgeColour].hex, null);
        material.side = three.DoubleSide;
        this.mesh = new three.Mesh(geometry, material);
        this.mesh.geometry.verticesNeedUpdate = true;
        this.mesh.geometry.dynamic = true;
        this.updateMesh();
        return this
    };
    this.getGeometry = function() {
        var h1 = buildingConfig.h - buildingConfig.leftlt.drop + 2;
        var h2 = buildingConfig.leftlt.legheight + 2;
        var value1 = new getEndAngle("back");
        var ltRoofWidth1 = value1.ltRoofWidth;
        var value2 = new getAngle("right");
        var ltRoofWidth2 = value2.ltRoofWidth;
        var len = Math.sqrt((ltRoofWidth1 * ltRoofWidth1) + (ltRoofWidth2 * ltRoofWidth2)) - 12;
        var points = [
            [-6, h1, 1],
            [0, h1 + 1, 1],
            [6, h1, 1],
            [-6, h2, len],
            [0, h2 + 1, len + 6],
            [6, h2, len],
        ];
        var faces = [
            [0, 1, 3],
            [3, 4, 1],
            [1, 4, 5],
            [1, 2, 5]
        ];
        var geometry = Ageometry(points, faces, true);
        return geometry
    };
    this.updateMesh = function() {
        _this.mesh.geometry = _this.getGeometry();
        var value1 = new getAngle("right");
        var ltRoofWidth1 = value1.ltRoofWidth;
        var value2 = new getEndAngle("back");
        var ltRoofWidth2 = value2.ltRoofWidth;
        var angle = value1.angle;
        _this.mesh.visible = false;
        var tangle = Math.atan(ltRoofWidth1 / ltRoofWidth2);
        _this.mesh.rotation.y = -((Math.PI / 2) + tangle);
        if (buildingConfig.blwrap == "blwrap" && buildingConfig.leantoRoofOrientation == VOrientation) {
            _this.mesh.visible = true;
        }
        _this.mesh.position.x = -(buildingConfig.w / 2);
        _this.mesh.position.z = -buildingConfig.l;
        _this.mesh.updateMatrix();
    };
    this.changeColour = function() {
        _this.mesh.material.color = new three.Color(get_orientation_url(buildingConfig.ridgeColour, null, 2));
    };
    eventHandler.addEventListener(ridgeColorChange, this.changeColour);
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoAdd, this.updateMesh);
    eventHandler.addEventListener(rightleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut2, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoAdd, this.updateMesh);
    eventHandler.addEventListener(leftleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(orientationChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(leantoRoofOrientation, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function LeantoSideWall(side) {
    side = side || "Left";
    var _this = this;
    this.side = side;
    this.init = function() {
        var geometry = new three.BoxGeometry(0.1, 1, 1);
        var material = createMeshPhongMaterial(null, null);
        this.mesh = new three.Mesh(geometry, material);
        this.mesh.wid = "ltSideWall";
        this.mesh.swid = this.side;
        this.mesh.name = "ltSideWall-" + this.side;
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
        var conf = buildingConfig.ltRightsideWallOption;
        var sheetCount = buildingConfig.ltrightsideWallSheetCount;
        var sideOption = 'rightlt';
        var rotation = 0;
        var wraplenf = 0;
        var wraplenb = 0;
        if (buildingConfig.frwrap == "frwrap") {
            wraplenf = buildingConfig.rightlt.ltowidth;
        }
        if (buildingConfig.brwrap == "brwrap") {
            wraplenb = buildingConfig.rightlt.ltowidth;
        }
        var length = buildingConfig.l - buildingConfig.rightlt.cut2 - buildingConfig.rightlt.cut1 + wraplenf + wraplenb;
        if (_this.side == "Left") {
            m = -1;
            conf = buildingConfig.ltLeftsideWallOption;
            sheetCount = buildingConfig.ltleftsideWallSheetCount;
            sideOption = 'leftlt';
            wraplenf = 0;
            wraplenb = 0;
            if (buildingConfig.flwrap == "flwrap") {
                wraplenf = buildingConfig.leftlt.ltowidth;
            }
            if (buildingConfig.blwrap == "blwrap") {
                wraplenb = buildingConfig.leftlt.ltowidth;
            }
            length = buildingConfig.l - buildingConfig.leftlt.cut2 - buildingConfig.leftlt.cut1 + wraplenf + wraplenb;
        }
        var height = buildingConfig[sideOption].legheight;
        if (conf == wallPartial) {
            var sheet_h = sheetCount * 3 * 12;
            if (buildingConfig.leantoWallOrientation == HOrientation) {
                _this.mesh.geometry = new three.BoxGeometry(0.1, sheet_h, length, 1, sheet_h * 10, 1);
            } else {
                rotation = Math.PI / 2;
                _this.mesh.geometry = new three.BoxGeometry(0.1, length, sheet_h + 1, 1, (length + 2.5) * 10, 1);
            }
            _this.mesh.position.set(m * (buildingConfig.w / 2 + buildingConfig[sideOption].ltowidth) + (m * 2), height - sheet_h / 2 - .2, -(buildingConfig.l / 2 - buildingConfig[sideOption].cut2 / 2 + buildingConfig[sideOption].cut1 / 2 - wraplenf / 2 + wraplenb / 2));
            if (buildingConfig.RoofOrientation == VOrientation) {
                _this.mesh.position.y = height - sheet_h / 2 + 1.4
            }
        } else if (conf == wallClosed) {
            if (buildingConfig.leantoWallOrientation == HOrientation) {
                _this.mesh.geometry = new three.BoxGeometry(0.1, height, length, 1, height * 10, 1);
                if (buildingConfig.RoofOrientation == VOrientation) {
                    _this.mesh.geometry = new three.BoxGeometry(0.1, height + 1, length, 1, height * 10, 1);
                }
            } else {
                rotation = Math.PI / 2;
                _this.mesh.geometry = new three.BoxGeometry(0.1, length, height - .2, 1, length * 10, 1);
                if (buildingConfig.RoofOrientation == VOrientation) {
                    _this.mesh.geometry = new three.BoxGeometry(0.1, length, height + 1.3, 1, length * 10, 1);
                }
            }
            _this.mesh.position.set(m * (buildingConfig.w / 2 + buildingConfig[sideOption].ltowidth) + (m * 2), height / 2, -(buildingConfig.l / 2 - buildingConfig[sideOption].cut2 / 2 + buildingConfig[sideOption].cut1 / 2 - wraplenf / 2 + wraplenb / 2));
            if (buildingConfig.RoofOrientation == VOrientation) {
                _this.mesh.position.y = height / 2 + .9;
            }
        }
        _this.mesh.geometry.vertices.forEach(function(v) {
            dfromt = Math.abs(v.y);
            if (buildingConfig.leantoWallOrientation == HOrientation) {
                dfromt = Math.abs((height) - v.y);
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
                var sideval = buildingConfig.ltRightsideWallOption;
                sideOption = "rightlt";
                if (side == "Left") {
                    sideval = buildingConfig.ltLeftsideWallOption;
                    sideOption = "leftlt";
                }
                _this.mesh.visible = ((sideval == wallClosed || sideval == wallPartial) && (buildingConfig[sideOption].leanTo != null));
            }
        }
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(ltsideWallChange, this.updateMesh);
    eventHandler.addEventListener(leantoOrientationChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(sidewallColorChange, this.updateMesh);
    eventHandler.addEventListener(wainscotOnChange, this.updateMesh);
    eventHandler.addEventListener(orientationChange, this.updateMesh);
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoAdd, this.updateMesh);
    eventHandler.addEventListener(rightleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(trimColorChange, this.changeColour);
    eventHandler.addEventListener(rightleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut2, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoAdd, this.updateMesh);
    eventHandler.addEventListener(leftleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(orientationChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function LeantoEndWall(side) {
    side = side || "Back";
    var _this = this;
    this.side = side;
    this.init = function() {
        var geometry = new three.BoxGeometry(buildingConfig.w - buildingConfig.frontlt.cut2 - buildingConfig.frontlt.cut1, buildingConfig.frontlt.legheight, 0.1);
        var material = createMeshPhongMaterial(null, null);
        this.mesh = new three.Mesh(geometry, material);
        this.mesh.wid = "ltEndwall";
        this.mesh.swid = this.side;
        this.mesh.name = "ltEndwall-" + this.side;
        this.mesh.wallInstance = this;
        this.onWalloptionChange(side)();
        this.updateMesh();
        return this
    };
    this.updateTexture = function() {
        var m;
        _this.side == "Back" ? m = 1 : m = -1;
        var white = new three.Color(Colours.white.hex);
        var clr = new three.Color(Colours[buildingConfig.endWallColour].hex);
        _this.mesh.geometry.faces.forEach(function(f) {
            if (m * f.normal.z > 0 && insideView) {
                f.color = white;
            } else {
                f.color = clr;
            }
        });
        _this.mesh.material.vertexColors = three.FaceColors;
    };
    this.updateMesh = function() {
        var m = 1;
        var zDist = 0;
        var conf = buildingConfig.ltFrontsideWallOption;
        var sheetCount = buildingConfig.ltfrontsideWallSheetCount;
        var sideOption = 'frontlt';
        var rotation = 0;
        var wraplenr = 0;
        var wraplenl = 0;
        if (buildingConfig.frwrap == "frwrap") {
            wraplenr = buildingConfig.frontlt.ltowidth;
        }
        if (buildingConfig.flwrap == "flwrap") {
            wraplenl = buildingConfig.frontlt.ltowidth;
        }
        var length = buildingConfig.w - buildingConfig.frontlt.cut2 - buildingConfig.frontlt.cut1 + wraplenr + wraplenl;
        if (_this.side == "Back") {
            m = -1;
            zDist = buildingConfig.l;
            conf = buildingConfig.ltBacksideWallOption;
            sheetCount = buildingConfig.ltbacksideWallSheetCount;
            sideOption = 'backlt';
            wraplenr = 0;
            wraplenl = 0;
            if (buildingConfig.brwrap == "brwrap") {
                wraplenr = buildingConfig.frontlt.ltowidth;
            }
            if (buildingConfig.blwrap == "blwrap") {
                wraplenl = buildingConfig.frontlt.ltowidth;
            }
            length = buildingConfig.w - buildingConfig.backlt.cut2 - buildingConfig.backlt.cut1 + wraplenr + wraplenl;
        }
        var height = buildingConfig[sideOption].legheight;
        if (conf == wallPartial) {
            var sheet_h = sheetCount * 3 * 12;
            if (buildingConfig.leantoWallOrientation == HOrientation) {
                _this.mesh.geometry = new three.BoxGeometry(length, sheet_h, 0.1, 1, sheet_h * 10, 1);
            } else {
                rotation = Math.PI / 2;
                _this.mesh.geometry = new three.BoxGeometry(sheet_h + 1, length, .1, 1, (length + 2.5) * 10, 1);
            }
            _this.mesh.position.set(buildingConfig[sideOption].cut1 / 2 - buildingConfig[sideOption].cut2 / 2 + wraplenr / 2 - wraplenl / 2, height - sheet_h / 2 - .2, m * (buildingConfig[sideOption].ltowidth + zDist + 2));
            if (buildingConfig.RoofOrientation == VOrientation) {
                _this.mesh.position.y = height - sheet_h / 2 + 1.4
            }
        } else if (conf == wallClosed) {
            if (buildingConfig.leantoWallOrientation == HOrientation) {
                _this.mesh.geometry = new three.BoxGeometry(length, height, .1, 1, height * 10, 1);
                if (buildingConfig.RoofOrientation == VOrientation) {
                    _this.mesh.geometry = new three.BoxGeometry(length, height + 1, .1, 1, height * 10, 1);
                }
            } else {
                rotation = Math.PI / 2;
                _this.mesh.geometry = new three.BoxGeometry(height - .2, length, 0.1, 1, length * 10, 1);
                if (buildingConfig.RoofOrientation == VOrientation) {
                    _this.mesh.geometry = new three.BoxGeometry(height + 1.3, length, 0.1, 1, length * 10, 1);
                }
            }
            _this.mesh.position.set(buildingConfig[sideOption].cut1 / 2 - buildingConfig[sideOption].cut2 / 2 + wraplenr / 2 - wraplenl / 2, height / 2, m * (buildingConfig[sideOption].ltowidth + zDist + 2));
            if (buildingConfig.RoofOrientation == VOrientation) {
                _this.mesh.position.y = height / 2 + .9;
            }
        }
        _this.mesh.geometry.vertices.forEach(function(v) {
            dfromt = Math.abs(v.y);
            if (buildingConfig.leantoWallOrientation == HOrientation) {
                dfromt = Math.abs(height - v.y);
            }
            if (((dfromt % 9) < 0.75 || (dfromt % 9) > 8.25)) {
                var mid = parseInt(dfromt / 9) * 9;
                var l = 0.75 - (mid - dfromt);
                v.z = m * 0.75 * Math.sin(l * Math.PI / 1.5);
            } else if ((dfromt % 3 < 0.25 || (dfromt % 3) > 2.75)) {
                var mid = parseInt(dfromt / 3) * 3;
                var l = 0.25 - (mid - dfromt);
                v.z = m * 0.25 * Math.sin(l * Math.PI / 0.5);
            }
        });
        _this.mesh.material.vertexColors = three.FaceColors;
        _this.mesh.rotation.z = rotation;
        _this.onWalloptionChange(_this.side)();
        _this.mesh.updateMatrix();
        _this.updateTexture();
    };
    this.onWalloptionChange = function(side) {
        return function() {
            if (side == _this.side) {
                var sideval = buildingConfig.ltFrontsideWallOption;
                sideOption = "frontlt";
                if (side == "Back") {
                    sideval = buildingConfig.ltBacksideWallOption;
                    sideOption = "backlt";
                }
                _this.mesh.visible = ((sideval == wallClosed || sideval == wallPartial) && (buildingConfig[sideOption].leanTo != null));
            }
        }
    };
    eventHandler.addEventListener(ltendWallChange, this.updateMesh);
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(ltendWallChange, this.updateMesh);
    eventHandler.addEventListener(leantoOrientationChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(sidewallColorChange, this.updateMesh);
    eventHandler.addEventListener(wainscotOnChange, this.updateMesh);
    eventHandler.addEventListener(orientationChange, this.updateMesh);
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoAdd, this.updateMesh);
    eventHandler.addEventListener(rightleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(trimColorChange, this.changeColour);
    eventHandler.addEventListener(rightleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut2, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoAdd, this.updateMesh);
    eventHandler.addEventListener(leftleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(orientationChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(endwallColourChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function sideltTrims(n, side) {
    side = side || "Left";
    var _this = this;
    _this.side = side;
    this.init = function() {
        var geometry = new three.BoxGeometry(.5, 2, buildingConfig.l - buildingConfig.rightlt.cut2 - buildingConfig.rightlt.cut1);
        var material = createMeshPhongMaterial();
        this.mesh = new three.Mesh(geometry, material);
        _this.updateMesh();
        return this;
    };
    this.updateMesh = function() {
        if (_this.side == "Left") {
            var no = Math.ceil(((buildingConfig.leftlt.legheight - 6) / 12) / 4);
            var unit_space = (buildingConfig.leftlt.legheight - 6) / no;
            var posy = (n * unit_space);
            _this.mesh.visible = false;
            if ((buildingConfig.leantoWallOrientation == VOrientation && buildingConfig.ltLeftsideWallOption != wallopen) && buildingConfig.leftlt.leanTo == "leftlt") {
                _this.mesh.visible = true;
            }
            if (posy >= buildingConfig.leftlt.legheight) {
                _this.mesh.visible = false;
            }
            if (buildingConfig.ltLeftsideWallOption == wallPartial && posy < (buildingConfig.leftlt.legheight - (buildingConfig.ltleftsideWallSheetCount * 3 * 12))) {
                _this.mesh.visible = false;
            }
            _this.mesh.scale.z = (buildingConfig.l - buildingConfig.leftlt.cut2 - buildingConfig.leftlt.cut1) / (iniLength - iniLCut2 - iniLCut1);
            _this.mesh.position.set(-buildingConfig.w / 2 - buildingConfig.leftlt.ltowidth - 1.5, posy, -(buildingConfig.l / 2 - buildingConfig.leftlt.cut2 / 2 + buildingConfig.leftlt.cut1 / 2));
            if (buildingConfig.flwrap == "flwrap") {
                _this.mesh.scale.z = (buildingConfig.l + buildingConfig.leftlt.ltowidth - buildingConfig.leftlt.cut2) / iniLength;
                _this.mesh.position.set(-(buildingConfig.w / 2 + buildingConfig.leftlt.ltowidth + 1.5), posy, -buildingConfig.l / 2 + buildingConfig.leftlt.ltowidth / 2 + buildingConfig.leftlt.cut2);
            }
            if (buildingConfig.blwrap == "blwrap") {
                _this.mesh.scale.z = (buildingConfig.l + buildingConfig.leftlt.ltowidth - buildingConfig.leftlt.cut1) / iniLength;
                _this.mesh.position.set(-(buildingConfig.w / 2 + buildingConfig.leftlt.ltowidth + 1.5), posy, -buildingConfig.l / 2 - buildingConfig.leftlt.ltowidth / 2 - buildingConfig.leftlt.cut1 / 2);
            }
            if (buildingConfig.blwrap == "blwrap" && buildingConfig.flwrap == "flwrap") {
                _this.mesh.scale.z = (buildingConfig.l + 2 * buildingConfig.leftlt.ltowidth) / iniLength;
                _this.mesh.position.set(-(buildingConfig.w / 2 + buildingConfig.leftlt.ltowidth + 1.5), posy, -buildingConfig.l / 2);
            }
        }
        if (_this.side == "Right") {
            var no = Math.ceil(((buildingConfig.leftlt.legheight - 6) / 12) / 4);
            var unit_space = (buildingConfig.leftlt.legheight - 6) / no;
            var posy = (n * unit_space);
            _this.mesh.visible = false;
            if ((buildingConfig.leantoWallOrientation == VOrientation && buildingConfig.ltRightsideWallOption != wallopen) && buildingConfig.rightlt.leanTo == "rightlt") {
                _this.mesh.visible = true;
            }
            if (posy >= buildingConfig.rightlt.legheight) {
                _this.mesh.visible = false;
            }
            if (buildingConfig.ltRightsideWallOption == wallPartial && posy < (buildingConfig.rightlt.legheight - (buildingConfig.ltrightsideWallSheetCount * 3 * 12))) {
                _this.mesh.visible = false;
            }
            _this.mesh.scale.z = (buildingConfig.l - buildingConfig.rightlt.cut2 - buildingConfig.rightlt.cut1) / (iniLength - iniRCut2 - iniRCut1);
            _this.mesh.position.set(buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth + 1.5, posy, -(buildingConfig.l / 2 - buildingConfig.rightlt.cut2 / 2 + buildingConfig.rightlt.cut1 / 2));
            if (buildingConfig.frwrap == "frwrap") {
                _this.mesh.scale.z = (buildingConfig.l + buildingConfig.rightlt.ltowidth - buildingConfig.rightlt.cut2) / iniLength;
                _this.mesh.position.set((buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth + 1.5), posy, -buildingConfig.l / 2 + buildingConfig.rightlt.ltowidth / 2 + buildingConfig.rightlt.cut2 / 2);
            }
            if (buildingConfig.brwrap == "brwrap") {
                _this.mesh.scale.z = (buildingConfig.l + buildingConfig.rightlt.ltowidth - buildingConfig.rightlt.cut1) / iniLength;
                _this.mesh.position.set((buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth + 1.5), posy, -buildingConfig.l / 2 - buildingConfig.rightlt.ltowidth / 2 - buildingConfig.rightlt.cut1 / 2);
            }
            if (buildingConfig.brwrap == "brwrap" && buildingConfig.frwrap == "frwrap") {
                _this.mesh.scale.z = (buildingConfig.l + 2 * buildingConfig.rightlt.ltowidth) / iniLength;
                _this.mesh.position.set((buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth + 1.5), posy, -buildingConfig.l / 2);
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
    eventHandler.addEventListener(ltsideWallChange, this.updateMesh);
    eventHandler.addEventListener(ltendWallChange, this.updateMesh);
    eventHandler.addEventListener(leantoOrientationChange, this.updateMesh);
    eventHandler.addEventListener(sidewallColorChange, this.updateMesh);
    eventHandler.addEventListener(wainscotOnChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoAdd, this.updateMesh);
    eventHandler.addEventListener(rightleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(trimColorChange, this.changeColour);
    eventHandler.addEventListener(rightleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut2, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoAdd, this.updateMesh);
    eventHandler.addEventListener(leftleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function endltTrims(n, side) {
    side = side || "Back";
    var _this = this;
    _this.side = side;
    this.init = function() {
        var geometry = new three.BoxGeometry(buildingConfig.w - buildingConfig.frontlt.cut2 - buildingConfig.frontlt.cut1, 2, .5);
        var material = createMeshPhongMaterial();
        this.mesh = new three.Mesh(geometry, material);
        _this.updateMesh();
        return this;
    };
    this.updateMesh = function() {
        if (_this.side == "Back") {
            var no = Math.ceil(((buildingConfig.backlt.legheight - 6) / 12) / 4);
            var unit_space = (buildingConfig.backlt.legheight - 6) / no;
            var posy = (n * unit_space);
            _this.mesh.visible = false;
            if (buildingConfig.leantoWallOrientation == VOrientation && buildingConfig.ltBacksideWallOption != wallopen) {
                _this.mesh.visible = true;
            }
            if (posy >= buildingConfig.backlt.legheight) {
                _this.mesh.visible = false;
            }
            if (buildingConfig.ltBacksideWallOption == wallPartial && posy < (buildingConfig.backlt.legheight - (buildingConfig.ltbacksideWallSheetCount * 3 * 12))) {
                _this.mesh.visible = false;
            }
            _this.mesh.scale.x = (buildingConfig.w - buildingConfig.backlt.cut2 - buildingConfig.backlt.cut1) / (iniWidth - iniBCut2 - iniBCut1);
            _this.mesh.position.set((-buildingConfig.backlt.cut2 / 2 + buildingConfig.backlt.cut1 / 2), posy, -(buildingConfig.l + buildingConfig.backlt.ltowidth + 1));
            if (buildingConfig.blwrap == "blwrap") {
                _this.mesh.scale.x = (buildingConfig.w + buildingConfig.backlt.ltowidth - buildingConfig.backlt.cut2) / iniWidth;
                _this.mesh.position.set(-(buildingConfig.backlt.ltowidth / 2 + buildingConfig.backlt.cut2 / 2), posy, -buildingConfig.l - buildingConfig.backlt.ltowidth - 1);
            }
            if (buildingConfig.brwrap == "brwrap") {
                _this.mesh.scale.x = (buildingConfig.w + buildingConfig.backlt.ltowidth - buildingConfig.backlt.cut1) / iniWidth;
                _this.mesh.position.set((buildingConfig.backlt.ltowidth / 2 + buildingConfig.backlt.cut1 / 2), posy, -buildingConfig.l - buildingConfig.backlt.ltowidth - 1);
            }
            if (buildingConfig.brwrap == "brwrap" && buildingConfig.blwrap == "blwrap") {
                _this.mesh.scale.x = (buildingConfig.w + 2 * buildingConfig.backlt.ltowidth) / iniWidth;
                _this.mesh.position.set(0, posy, -buildingConfig.l - buildingConfig.backlt.ltowidth - 1);
            }
        }
        if (_this.side == "Front") {
            var no = Math.ceil(((buildingConfig.frontlt.legheight - 6) / 12) / 4);
            var unit_space = (buildingConfig.frontlt.legheight - 6) / no;
            var posy = (n * unit_space);
            _this.mesh.visible = false;
            if (buildingConfig.leantoWallOrientation == VOrientation && buildingConfig.ltFrontsideWallOption != wallopen) {
                _this.mesh.visible = true;
            }
            if (posy >= buildingConfig.frontlt.legheight) {
                _this.mesh.visible = false;
            }
            if (buildingConfig.ltFrontsideWallOption == wallPartial && posy < (buildingConfig.frontlt.legheight - (buildingConfig.ltfrontsideWallSheetCount * 3 * 12))) {
                _this.mesh.visible = false;
            }
            _this.mesh.scale.x = (buildingConfig.w - buildingConfig.frontlt.cut2 - buildingConfig.frontlt.cut1) / (iniWidth - iniFCut2 - iniFCut1);
            _this.mesh.position.set(buildingConfig.frontlt.cut1 / 2 - buildingConfig.frontlt.cut2 / 2, posy, buildingConfig.frontlt.ltowidth + 1);
            if (buildingConfig.flwrap == "flwrap") {
                _this.mesh.scale.x = (buildingConfig.w + buildingConfig.frontlt.ltowidth - buildingConfig.frontlt.cut2) / iniWidth;
                _this.mesh.position.set(-(buildingConfig.frontlt.ltowidth / 2 + buildingConfig.frontlt.cut2 / 2), posy, buildingConfig.frontlt.ltowidth + 1);
            }
            if (buildingConfig.frwrap == "frwrap") {
                _this.mesh.scale.x = (buildingConfig.w + buildingConfig.frontlt.ltowidth - buildingConfig.frontlt.cut1) / iniWidth;
                _this.mesh.position.set((buildingConfig.frontlt.ltowidth / 2 + buildingConfig.frontlt.cut1 / 2), posy, buildingConfig.frontlt.ltowidth + 1);
            }
            if (buildingConfig.frwrap == "frwrap" && buildingConfig.flwrap == "flwrap") {
                _this.mesh.scale.x = (buildingConfig.w + 2 * buildingConfig.frontlt.ltowidth) / iniWidth;
                _this.mesh.position.set(0, posy, buildingConfig.frontlt.ltowidth + 1);
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
    eventHandler.addEventListener(ltsideWallChange, this.updateMesh);
    eventHandler.addEventListener(ltendWallChange, this.updateMesh);
    eventHandler.addEventListener(leantoOrientationChange, this.updateMesh);
    eventHandler.addEventListener(sidewallColorChange, this.updateMesh);
    eventHandler.addEventListener(wainscotOnChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoAdd, this.updateMesh);
    eventHandler.addEventListener(rightleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(trimColorChange, this.changeColour);
    eventHandler.addEventListener(rightleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut2, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoAdd, this.updateMesh);
    eventHandler.addEventListener(leftleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function sideAFrametrim(side) {
    side = side || "left";
    var _this = this;
    _this.side = side;
    this.init = function() {
        var geometry = new three.BoxGeometry(3, 2.5, buildingConfig.l - buildingConfig.rightlt.cut2 - buildingConfig.rightlt.cut2 + 10);
        var material = createMeshPhongMaterial(Colours[buildingConfig.trimColor].hex);
        this.mesh = new three.Mesh(geometry, material);
        _this.updateMesh();
        return this;
    };
    this.updateMesh = function() {
        _this.mesh.visible = false;
        if (_this.side == "Right") {
            var values = new getAngle("right");
            var angle = values.angle;
            var ltRoofWidth = values.ltRoofWidth;
            var hVal = values.hVal;
            var centerY = buildingConfig.rightlt.legheight - 1.2;
            if (buildingConfig.leantoRoofOrientation == VOrientation) {
                centerY = buildingConfig.rightlt.legheight;
            }
            var centerZ = -((buildingConfig.l - buildingConfig.rightlt.cut2 + buildingConfig.rightlt.cut1) / 2);
            _this.mesh.rotation.z = angle - Math.PI / 2;
            _this.mesh.scale.z = (buildingConfig.l - buildingConfig.rightlt.cut2 - buildingConfig.rightlt.cut1 + 10) / (iniLength - iniRCut2 - iniRCut1 + 10);
            _this.mesh.position.set(buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth + 4, centerY, -(buildingConfig.l / 2 - buildingConfig.rightlt.cut2 / 2 + buildingConfig.rightlt.cut1 / 2));
            if (buildingConfig.frwrap == "frwrap") {
                _this.mesh.scale.z = (buildingConfig.l + buildingConfig.rightlt.ltowidth - buildingConfig.rightlt.cut2 + 10) / (iniLength + 10);
                _this.mesh.position.set((buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth + 4), centerY, -buildingConfig.l / 2 + buildingConfig.rightlt.ltowidth / 2 + buildingConfig.rightlt.cut2 / 2);
            }
            if (buildingConfig.brwrap == "brwrap") {
                _this.mesh.scale.z = (buildingConfig.l + buildingConfig.rightlt.ltowidth - buildingConfig.rightlt.cut1 + 10) / (iniLength + 10);
                _this.mesh.position.set((buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth + 4), centerY, -buildingConfig.l / 2 - buildingConfig.rightlt.ltowidth / 2 - buildingConfig.rightlt.cut1 / 2);
            }
            if (buildingConfig.brwrap == "brwrap" && buildingConfig.frwrap == "frwrap") {
                _this.mesh.scale.z = (buildingConfig.l + 2 * buildingConfig.rightlt.ltowidth + 10) / (iniLength + 10);
                _this.mesh.position.set((buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth + 4), centerY, -buildingConfig.l / 2);
            }
            if (buildingConfig.rightlt.leanTo == "rightlt") {
                _this.mesh.visible = true;
            }
            _this.mesh.updateMatrix();
        }
        if (_this.side == "Left") {
            var values = new getAngle("left");
            var angle = values.angle;
            var ltRoofWidth = values.ltRoofWidth;
            var hVal = values.hVal;
            var centerY = buildingConfig.leftlt.legheight - 1.2;
            if (buildingConfig.leantoRoofOrientation == VOrientation) {
                centerY = buildingConfig.leftlt.legheight;
            }
            var centerZ = -((buildingConfig.l - buildingConfig.leftlt.cut2 + buildingConfig.leftlt.cut1) / 2);
            _this.mesh.rotation.z = angle - Math.PI / 2;
            _this.mesh.scale.z = (buildingConfig.l - buildingConfig.leftlt.cut2 - buildingConfig.leftlt.cut1 + 10) / (iniLength - iniLCut2 - iniLCut1 + 10);
            _this.mesh.position.set(-(buildingConfig.w / 2 + buildingConfig.leftlt.ltowidth) - 4, centerY, -(buildingConfig.l / 2 - buildingConfig.leftlt.cut2 / 2 + buildingConfig.leftlt.cut1 / 2));
            if (buildingConfig.flwrap == "flwrap") {
                _this.mesh.scale.z = (buildingConfig.l + buildingConfig.leftlt.ltowidth - buildingConfig.leftlt.cut2 + 10) / (iniLength + 10);
                _this.mesh.position.set(-(buildingConfig.w / 2 + buildingConfig.leftlt.ltowidth) - 4, centerY, -buildingConfig.l / 2 + buildingConfig.leftlt.ltowidth / 2 + buildingConfig.leftlt.cut2);
            }
            if (buildingConfig.blwrap == "blwrap") {
                _this.mesh.scale.z = (buildingConfig.l + buildingConfig.leftlt.ltowidth - buildingConfig.leftlt.cut1 + 10) / (iniLength + 10);
                _this.mesh.position.set(-(buildingConfig.w / 2 + buildingConfig.leftlt.ltowidth) - 4, centerY, -buildingConfig.l / 2 - buildingConfig.leftlt.ltowidth / 2 - buildingConfig.leftlt.cut1 / 2);
            }
            if (buildingConfig.blwrap == "blwrap" && buildingConfig.flwrap == "flwrap") {
                _this.mesh.scale.z = (buildingConfig.l + 2 * buildingConfig.leftlt.ltowidth + 10) / (iniLength + 10);
                _this.mesh.position.set(-(buildingConfig.w / 2 + buildingConfig.leftlt.ltowidth) - 4, centerY, -buildingConfig.l / 2);
            }
            if (buildingConfig.leftlt.leanTo == "leftlt") {
                _this.mesh.visible = true;
            }
            _this.mesh.updateMatrix();
        }
    };
    this.changeColour = function() {
        _this.mesh.material.color = new three.Color(get_orientation_url(buildingConfig.trimColor, null, 2));
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(sideWallChange, this.updateMesh);
    eventHandler.addEventListener(sidewallOrientationChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(orientationChange, this.updateMesh);
    eventHandler.addEventListener(ltsideWallChange, this.updateMesh);
    eventHandler.addEventListener(ltendWallChange, this.updateMesh);
    eventHandler.addEventListener(leantoOrientationChange, this.updateMesh);
    eventHandler.addEventListener(sidewallColorChange, this.updateMesh);
    eventHandler.addEventListener(wainscotOnChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoAdd, this.updateMesh);
    eventHandler.addEventListener(rightleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(trimColorChange, this.changeColour);
    eventHandler.addEventListener(rightleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut2, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoAdd, this.updateMesh);
    eventHandler.addEventListener(leftleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(leantoRoofOrientation, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function endAFrametrim(side) {
    side = side || "back";
    var _this = this;
    _this.side = side;
    this.init = function() {
        var geometry = new three.BoxGeometry(buildingConfig.w - buildingConfig.frontlt.cut2 - buildingConfig.frontlt.cut2 + 10, 2.5, 3);
        var material = createMeshPhongMaterial(Colours[buildingConfig.trimColor].hex);
        this.mesh = new three.Mesh(geometry, material);
        _this.updateMesh();
        return this;
    };
    this.updateMesh = function() {
        _this.mesh.visible = false;
        if (_this.side == "Front") {
            var values = new getEndAngle("front");
            var angle = values.angle;
            var ltRoofWidth = values.ltRoofWidth;
            var hVal = values.hVal;
            var centerY = buildingConfig.frontlt.legheight - 1.2;
            var centerZ = -((buildingConfig.w - buildingConfig.frontlt.cut2 + buildingConfig.frontlt.cut1) / 2);
            _this.mesh.rotation.x = -(angle - Math.PI / 2);
            _this.mesh.scale.x = (buildingConfig.w - buildingConfig.frontlt.cut2 - buildingConfig.frontlt.cut1 + 10) / (iniWidth - iniFCut2 - iniFCut1 + 10);
            _this.mesh.position.set(buildingConfig.frontlt.cut1 / 2 - buildingConfig.frontlt.cut2 / 2, centerY, buildingConfig.frontlt.ltowidth + 4);
            if (buildingConfig.flwrap == "flwrap") {
                _this.mesh.scale.x = (buildingConfig.w + buildingConfig.frontlt.ltowidth - buildingConfig.frontlt.cut2 + 10) / (iniWidth + 10);
                _this.mesh.position.set(-(buildingConfig.frontlt.ltowidth / 2 + buildingConfig.frontlt.cut2 / 2), centerY, buildingConfig.frontlt.ltowidth + 4);
            }
            if (buildingConfig.frwrap == "frwrap") {
                _this.mesh.scale.x = (buildingConfig.w + buildingConfig.frontlt.ltowidth - buildingConfig.frontlt.cut1 + 10) / (iniWidth + 10);
                _this.mesh.position.set((buildingConfig.frontlt.ltowidth / 2 + buildingConfig.frontlt.cut1 / 2), centerY, buildingConfig.frontlt.ltowidth + 4);
            }
            if (buildingConfig.frwrap == "frwrap" && buildingConfig.flwrap == "flwrap") {
                _this.mesh.scale.x = (buildingConfig.w + 2 * buildingConfig.frontlt.ltowidth + 10) / (iniWidth + 10);
                _this.mesh.position.set(0, centerY, buildingConfig.frontlt.ltowidth + 4);
            }
            if (buildingConfig.frontlt.leanTo == "frontlt") {
                _this.mesh.visible = true;
            }
            _this.mesh.updateMatrix();
        }
        if (_this.side == "Back") {
            var values = new getEndAngle("back");
            var angle = values.angle;
            var ltRoofWidth = values.ltRoofWidth;
            var hVal = values.hVal;
            var centerY = buildingConfig.backlt.legheight - 1.2;
            var centerZ = -((buildingConfig.w - buildingConfig.backlt.cut2 + buildingConfig.backlt.cut1) / 2);
            _this.mesh.rotation.x = -(angle - Math.PI / 2);
            _this.mesh.scale.x = (buildingConfig.w - buildingConfig.backlt.cut2 - buildingConfig.backlt.cut1 + 10) / (iniWidth - iniBCut2 - iniBCut1 + 10);
            _this.mesh.position.set((-buildingConfig.backlt.cut2 / 2 + buildingConfig.backlt.cut1 / 2), centerY, -(buildingConfig.l + buildingConfig.backlt.ltowidth + 4));
            if (buildingConfig.blwrap == "blwrap") {
                _this.mesh.scale.x = (buildingConfig.w + buildingConfig.backlt.ltowidth - buildingConfig.backlt.cut2 + 10) / (iniWidth + 10);
                _this.mesh.position.set(-(buildingConfig.backlt.ltowidth / 2 + buildingConfig.backlt.cut2 / 2), centerY, -buildingConfig.l - buildingConfig.backlt.ltowidth - 4);
            }
            if (buildingConfig.brwrap == "brwrap") {
                _this.mesh.scale.x = (buildingConfig.w + buildingConfig.backlt.ltowidth - buildingConfig.backlt.cut1 + 10) / (iniWidth + 10);
                _this.mesh.position.set((buildingConfig.backlt.ltowidth / 2 + buildingConfig.backlt.cut1 / 2), centerY, -buildingConfig.l - buildingConfig.backlt.ltowidth - 4);
            }
            if (buildingConfig.brwrap == "brwrap" && buildingConfig.blwrap == "blwrap") {
                _this.mesh.scale.x = (buildingConfig.w + 2 * buildingConfig.backlt.ltowidth + 10) / (iniWidth + 10);
                _this.mesh.position.set(0, centerY, -buildingConfig.l - buildingConfig.backlt.ltowidth - 4);
            }
            if (buildingConfig.backlt.leanTo == "backlt") {
                _this.mesh.visible = true;
            }
            _this.mesh.updateMatrix();
        }
    };
    this.changeColour = function() {
        _this.mesh.material.color = new three.Color(get_orientation_url(buildingConfig.trimColor, null, 2));
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(sideWallChange, this.updateMesh);
    eventHandler.addEventListener(sidewallOrientationChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(orientationChange, this.updateMesh);
    eventHandler.addEventListener(ltsideWallChange, this.updateMesh);
    eventHandler.addEventListener(ltendWallChange, this.updateMesh);
    eventHandler.addEventListener(leantoOrientationChange, this.updateMesh);
    eventHandler.addEventListener(sidewallColorChange, this.updateMesh);
    eventHandler.addEventListener(wainscotOnChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoAdd, this.updateMesh);
    eventHandler.addEventListener(rightleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(trimColorChange, this.changeColour);
    eventHandler.addEventListener(rightleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut2, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoAdd, this.updateMesh);
    eventHandler.addEventListener(leftleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(leantoRoofOrientation, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function leantoSideSupportRight(n, side) {
    side = side || "back";
    var _this = this;
    _this.sides = side;
    _this.side = "right";
    this.init = function() {
        var geometry = new three.BoxGeometry(2.5, 1, 2.5);
        var material = createSteelMaterial();
        this.mesh = new three.Mesh(geometry, material);
        this.updateMesh();
        return this
    };
    this.updateMesh = function() {
        var nos = Math.ceil((buildingConfig.rightlt.ltowidth) / (12 * 5));
        var zval = buildingConfig.rightlt.ltowidth / nos;
        var fposz = (zval) * (n + 1);
        var bposz = (-(zval * (n + 1)) - buildingConfig.l);
        _this.mesh.visible = false;
        if (_this.sides == "front") {
            if (buildingConfig.rightlt.leanTo == "rightlt" && buildingConfig.frwrap == "frwrap") {
                _this.mesh.visible = true;
            }
            if (fposz > buildingConfig.rightlt.ltowidth) {
                _this.mesh.visible = false;
            }
            var vh = buildingConfig.rightlt.legheight;
            var cutHeight = checkforSidewallcut(_this);
            var heightCut = vh - cutHeight;
            _this.mesh.scale.y = heightCut;
            _this.mesh.position.set((buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth), cutHeight + heightCut / 2, fposz);
        }
        if (_this.sides == "back") {
            if (buildingConfig.rightlt.leanTo == "rightlt" && buildingConfig.brwrap == "brwrap") {
                _this.mesh.visible = true;
            }
            if (bposz < -(buildingConfig.rightlt.ltowidth + buildingConfig.l)) {
                _this.mesh.visible = false;
            }
            var vh = buildingConfig.rightlt.legheight;
            var cutHeight = checkforSidewallcut(_this);
            var heightCut = vh - cutHeight;
            _this.mesh.scale.y = heightCut;
            _this.mesh.position.set((buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth), cutHeight + heightCut / 2, bposz);
        }
    };
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoAdd, this.updateMesh);
    eventHandler.addEventListener(rightleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut1, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoAdd, this.updateMesh);
    eventHandler.addEventListener(leftleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function leantoSideSupportLeft(n, side) {
    side = side || "back";
    var _this = this;
    _this.sides = side;
    _this.side = "left";
    this.init = function() {
        var geometry = new three.BoxGeometry(2.5, 1, 2.5);
        var material = createSteelMaterial();
        this.mesh = new three.Mesh(geometry, material);
        this.updateMesh();
        return this
    };
    this.updateMesh = function() {
        var nos = Math.ceil((buildingConfig.leftlt.ltowidth / 12) / 5);
        var zval = buildingConfig.leftlt.ltowidth / nos;
        var fposz = (zval) * (n + 1);
        var bposz = (-(zval * (n + 1)) - buildingConfig.l);
        _this.mesh.visible = false;
        if (_this.sides == "front") {
            if (buildingConfig.leftlt.leanTo == "leftlt" && buildingConfig.flwrap == "flwrap") {
                _this.mesh.visible = true;
            }
            if (fposz > buildingConfig.leftlt.ltowidth) {
                _this.mesh.visible = false;
            }
            var vh = buildingConfig.leftlt.legheight;
            var cutHeight = checkforSidewallcut(_this);
            var heightCut = vh - cutHeight;
            _this.mesh.scale.y = heightCut;
            _this.mesh.position.set(-(buildingConfig.w / 2 + buildingConfig.leftlt.ltowidth), cutHeight + heightCut / 2, fposz);
        }
        if (_this.sides == "back") {
            if (buildingConfig.leftlt.leanTo == "leftlt" && buildingConfig.blwrap == "blwrap") {
                _this.mesh.visible = true;
            }
            if (bposz < -(buildingConfig.leftlt.ltowidth + buildingConfig.l)) {
                _this.mesh.visible = false;
            }
            var vh = buildingConfig.leftlt.legheight;
            var cutHeight = checkforSidewallcut(_this);
            var heightCut = vh - cutHeight;
            _this.mesh.scale.y = heightCut;
            _this.mesh.position.set(-(buildingConfig.w / 2 + buildingConfig.leftlt.ltowidth), cutHeight + heightCut / 2, bposz);
        }
    };
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoAdd, this.updateMesh);
    eventHandler.addEventListener(rightleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut1, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoAdd, this.updateMesh);
    eventHandler.addEventListener(leftleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function leantoEndSupportFront(n, side) {
    side = side || "left";
    var _this = this;
    _this.sides = side;
    _this.side = "front";
    this.init = function() {
        var geometry = new three.BoxGeometry(2.5, 1, 2.5);
        var material = createSteelMaterial();
        this.mesh = new three.Mesh(geometry, material);
        this.updateMesh();
        return this
    };
    this.updateMesh = function() {
        var no = Math.ceil((buildingConfig.w / 12) / 5);
        var step = buildingConfig.w / no;
        var nos = Math.ceil((buildingConfig.frontlt.ltowidth) / (step));
        var zval = buildingConfig.frontlt.ltowidth / nos;
        var rposz = ((zval * n) + buildingConfig.w / 2);
        var lposz = -((zval * n) + buildingConfig.w / 2);
        _this.mesh.visible = false;
        if (_this.sides == "right") {
            if (buildingConfig.frontlt.leanTo == "frontlt" && buildingConfig.frwrap == "frwrap") {
                _this.mesh.visible = true;
            }
            if (rposz > buildingConfig.frontlt.ltowidth + buildingConfig.w / 2) {
                _this.mesh.visible = false;
            }
            var vh = buildingConfig.frontlt.legheight;
            var cutHeight = checkforEndwallcut(_this);
            var heightCut = vh - cutHeight;
            _this.mesh.scale.y = heightCut;
            _this.mesh.position.set(rposz, cutHeight + heightCut / 2, (buildingConfig.frontlt.ltowidth));
        }
        if (_this.sides == "left") {
            if (buildingConfig.frontlt.leanTo == "frontlt" && buildingConfig.flwrap == "flwrap") {
                _this.mesh.visible = true;
            }
            if (lposz < -(buildingConfig.frontlt.ltowidth + buildingConfig.w / 2)) {
                _this.mesh.visible = false;
            }
            var vh = buildingConfig.frontlt.legheight;
            var cutHeight = checkforEndwallcut(_this);
            var heightCut = vh - cutHeight;
            _this.mesh.scale.y = heightCut;
            _this.mesh.position.set(lposz, cutHeight + heightCut / 2, (buildingConfig.frontlt.ltowidth));
        }
    };
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoAdd, this.updateMesh);
    eventHandler.addEventListener(rightleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut1, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoAdd, this.updateMesh);
    eventHandler.addEventListener(leftleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function leantoEndSupportBack(n, side) {
    side = side || "left";
    var _this = this;
    _this.sides = side;
    _this.side = "back";
    this.init = function() {
        var geometry = new three.BoxGeometry(2.5, 1, 2.5);
        var material = createSteelMaterial();
        this.mesh = new three.Mesh(geometry, material);
        this.updateMesh();
        return this
    };
    this.updateMesh = function() {
        var no = Math.ceil((buildingConfig.w / 12) / 5);
        var step = buildingConfig.w / no;
        var nos = Math.ceil((buildingConfig.backlt.ltowidth) / (step));
        var zval = buildingConfig.backlt.ltowidth / nos;
        var rposz = ((zval * n) + buildingConfig.w / 2);
        var lposz = -((zval * n) + buildingConfig.w / 2);
        _this.mesh.visible = false;
        if (_this.sides == "right") {
            if (buildingConfig.backlt.leanTo == "backlt" && buildingConfig.brwrap == "brwrap") {
                _this.mesh.visible = true;
            }
            if (rposz > buildingConfig.backlt.ltowidth + buildingConfig.w / 2) {
                _this.mesh.visible = false;
            }
            var vh = buildingConfig.backlt.legheight;
            var cutHeight = checkforEndwallcut(_this);
            var heightCut = vh - cutHeight;
            _this.mesh.scale.y = heightCut;
            _this.mesh.position.set(rposz, cutHeight + heightCut / 2, -(buildingConfig.l + buildingConfig.backlt.ltowidth));
        }
        if (_this.sides == "left") {
            if (buildingConfig.backlt.leanTo == "backlt" && buildingConfig.blwrap == "blwrap") {
                _this.mesh.visible = true;
            }
            if (lposz < -(buildingConfig.backlt.ltowidth + buildingConfig.w / 2)) {
                _this.mesh.visible = false;
            }
            var vh = buildingConfig.backlt.legheight;
            var cutHeight = checkforEndwallcut(_this);
            var heightCut = vh - cutHeight;
            _this.mesh.scale.y = heightCut;
            _this.mesh.position.set(lposz, cutHeight + heightCut / 2, -(buildingConfig.l + buildingConfig.backlt.ltowidth));
        }
    };
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoAdd, this.updateMesh);
    eventHandler.addEventListener(rightleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut1, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoAdd, this.updateMesh);
    eventHandler.addEventListener(leftleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function leantoSideWainscot(side) {
    side = side || "Left";
    var _this = this;
    this.side = side;
    var wainscotHeight = 36;
    this.init = function() {
        var geometry = new three.BoxGeometry(0.1, 1, 1);
        var material = createMeshPhongMaterial(null, null);
        this.mesh = new three.Mesh(geometry, material);
        this.mesh.geometry.verticesNeedUpdate = true;
        this.mesh.geometry.dynamic = true;
        this.onWalloptionChange(side)();
        this.updateMesh();
        return this
    };
    this.updateTexture = function() {
        var m;
        _this.side == "Left" ? m = 1 : m = -1;
        var white = new three.Color(Colours.white.hex);
        var clr1 = new three.Color(Colours[buildingConfig.ltwainscotColor].hex);
        _this.mesh.geometry.faces.forEach(function(f) {
            if (m * f.normal.x > 0 && insideView) {
                f.color = white;
            } else {
                f.color = clr1;
            }
        });
        _this.mesh.material.vertexColors = three.FaceColors;
    };
    this.updateMesh = function() {
        var m = 1;
        var conf = buildingConfig.ltRightsideWallOption;
        var sideOption = 'rightlt';
        var rotation = 0;
        var wraplenf = 0;
        var wraplenb = 0;
        var val = 0;
        if (buildingConfig.frwrap == "frwrap") {
            wraplenf = buildingConfig.rightlt.ltowidth;
        }
        if (buildingConfig.brwrap == "brwrap") {
            wraplenb = buildingConfig.rightlt.ltowidth;
        }
        var length = buildingConfig.l - buildingConfig.rightlt.cut2 - buildingConfig.rightlt.cut1 + wraplenf + wraplenb;
        if (_this.side == "Left") {
            m = -1;
            conf = buildingConfig.ltLeftsideWallOption;
            sideOption = 'leftlt';
            wraplenf = 0;
            wraplenb = 0;
            if (buildingConfig.flwrap == "flwrap") {
                wraplenf = buildingConfig.leftlt.ltowidth;
            }
            if (buildingConfig.blwrap == "blwrap") {
                wraplenb = buildingConfig.leftlt.ltowidth;
            }
            length = buildingConfig.l - buildingConfig.leftlt.cut2 - buildingConfig.leftlt.cut1 + wraplenf + wraplenb;
        }
        if (conf != wallPartial) {
            if (buildingConfig.leantoWallOrientation == HOrientation) {
                _this.mesh.geometry = new three.BoxGeometry(0.1, wainscotHeight, length, 1, wainscotHeight * 10, 1);
                if (buildingConfig.RoofOrientation == VOrientation) {
                    _this.mesh.geometry = new three.BoxGeometry(0.1, wainscotHeight + 1, length, 1, wainscotHeight * 10, 1);
                    val = .9;
                }
            } else {
                rotation = Math.PI / 2;
                _this.mesh.geometry = new three.BoxGeometry(0.1, length, wainscotHeight, 1, length * 10, 1);
            }
            _this.mesh.position.set(m * (buildingConfig.w / 2 + buildingConfig[sideOption].ltowidth + .1) + (m * 2), wainscotHeight / 2 + val, -(buildingConfig.l / 2 - buildingConfig[sideOption].cut2 / 2 + buildingConfig[sideOption].cut1 / 2 - wraplenf / 2 + wraplenb / 2));
            _this.mesh.geometry.vertices.forEach(function(v) {
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
        }
        _this.mesh.material.vertexColors = three.FaceColors;
        _this.mesh.rotation.x = rotation;
        _this.onWalloptionChange(_this.side)();
        _this.mesh.updateMatrix();
        _this.updateTexture();
    };
    this.onWalloptionChange = function(side) {
        return function() {
            if (side == _this.side) {
                var sideval = buildingConfig.ltRightsideWallOption;
                var sideOption = "rightlt";
                var wainscotOption = buildingConfig.ltrightwainscotOption;
                if (side == "Left") {
                    sideval = buildingConfig.ltLeftsideWallOption;
                    sideOption = "leftlt";
                    wainscotOption = buildingConfig.ltleftwainscotOption;
                }
                _this.mesh.visible = (sideval != wallPartial && wainscotOption == "On" && (buildingConfig[sideOption].leanTo != null));
            }
        }
    }
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(ltsideWallChange, this.updateMesh);
    eventHandler.addEventListener(ltendWallChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateTexture);
    eventHandler.addEventListener(ltwainscotOnChange, this.updateMesh);
    eventHandler.addEventListener(ltwainscotColorChange, this.updateMesh);
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(ltsideWallChange, this.updateMesh);
    eventHandler.addEventListener(leantoOrientationChange, this.updateMesh);
    eventHandler.addEventListener(sidewallColorChange, this.updateMesh);
    eventHandler.addEventListener(wainscotOnChange, this.updateMesh);
    eventHandler.addEventListener(orientationChange, this.updateMesh);
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoAdd, this.updateMesh);
    eventHandler.addEventListener(rightleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(trimColorChange, this.changeColour);
    eventHandler.addEventListener(rightleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut2, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoAdd, this.updateMesh);
    eventHandler.addEventListener(leftleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(orientationChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function leantoEndWainscot(side) {
    side = side || "Back";
    var _this = this;
    this.side = side;
    var wainscotHeight = 36;
    this.init = function() {
        var geometry = new three.BoxGeometry(0.1, 1, 1);
        var material = createMeshPhongMaterial(null, null);
        this.mesh = new three.Mesh(geometry, material);
        this.mesh.geometry.verticesNeedUpdate = true;
        this.mesh.geometry.dynamic = true;
        this.onWalloptionChange(side)();
        this.updateMesh();
        return this
    };
    this.updateTexture = function() {
        var m;
        _this.side == "Back" ? m = 1 : m = -1;
        var white = new three.Color(Colours.white.hex);
        var clr1 = new three.Color(Colours[buildingConfig.ltwainscotColor].hex);
        _this.mesh.geometry.faces.forEach(function(f) {
            if (m * f.normal.z > 0 && insideView) {
                f.color = white;
            } else {
                f.color = clr1;
            }
        });
        _this.mesh.material.vertexColors = three.FaceColors;
    };
    this.updateMesh = function() {
        var m = 1;
        var conf = buildingConfig.ltFrontsideWallOption;
        var sideOption = 'frontlt';
        var rotation = 0;
        var wraplenf = 0;
        var wraplenb = 0;
        var zDist = 0;
        var val = 0;
        if (buildingConfig.frwrap == "frwrap") {
            wraplenf = buildingConfig.frontlt.ltowidth;
        }
        if (buildingConfig.flwrap == "flwrap") {
            wraplenb = buildingConfig.frontlt.ltowidth;
        }
        var length = buildingConfig.w - buildingConfig.frontlt.cut2 - buildingConfig.frontlt.cut1 + wraplenf + wraplenb;
        if (_this.side == "Back") {
            m = -1;
            conf = buildingConfig.ltBacksideWallOption;
            sideOption = 'backlt';
            wraplenf = 0;
            wraplenb = 0;
            zDist = buildingConfig.l;
            if (buildingConfig.brwrap == "brwrap") {
                wraplenf = buildingConfig.backlt.ltowidth;
            }
            if (buildingConfig.blwrap == "blwrap") {
                wraplenb = buildingConfig.backlt.ltowidth;
            }
            length = buildingConfig.w - buildingConfig.backlt.cut2 - buildingConfig.backlt.cut1 + wraplenf + wraplenb;
        }
        if (conf != wallPartial) {
            if (buildingConfig.leantoWallOrientation == HOrientation) {
                _this.mesh.geometry = new three.BoxGeometry(length, wainscotHeight, 0.1, 1, wainscotHeight * 10, 1);
                if (buildingConfig.RoofOrientation == VOrientation) {
                    _this.mesh.geometry = new three.BoxGeometry(length, wainscotHeight + 1, 0.1, 1, wainscotHeight * 10, 1);
                    val = .9;
                }
            } else {
                rotation = Math.PI / 2;
                _this.mesh.geometry = new three.BoxGeometry(wainscotHeight, length, 0.1, 1, length * 10, 1);
            }
            _this.mesh.position.set(buildingConfig[sideOption].cut1 / 2 - buildingConfig[sideOption].cut2 / 2 + wraplenf / 2 - wraplenb / 2, wainscotHeight / 2 + val, m * (buildingConfig[sideOption].ltowidth + zDist + 2 + .1));
            _this.mesh.geometry.vertices.forEach(function(v) {
                dfromt = Math.abs(v.y);
                if (((dfromt % 9) < 0.75 || (dfromt % 9) > 8.25)) {
                    var mid = parseInt(dfromt / 9) * 9;
                    var l = 0.75 - (mid - dfromt);
                    v.z = m * 0.75 * Math.sin(l * Math.PI / 1.5);
                } else if ((dfromt % 3 < 0.25 || (dfromt % 3) > 2.75)) {
                    var mid = parseInt(dfromt / 3) * 3;
                    var l = 0.25 - (mid - dfromt);
                    v.z = m * 0.25 * Math.sin(l * Math.PI / 0.5);
                }
            });
        }
        _this.mesh.material.vertexColors = three.FaceColors;
        _this.mesh.rotation.z = rotation;
        _this.onWalloptionChange(_this.side)();
        _this.mesh.updateMatrix();
        _this.updateTexture();
    };
    this.onWalloptionChange = function(side) {
        return function() {
            if (side == _this.side) {
                var sideval = buildingConfig.ltFrontsideWallOption;
                var sideOption = "frontlt";
                var wainscotOption = buildingConfig.ltfrontwainscotOption;
                if (side == "Back") {
                    sideval = buildingConfig.ltBacksideWallOption;
                    sideOption = "backlt";
                    wainscotOption = buildingConfig.ltbackwainscotOption;
                }
                _this.mesh.visible = (sideval != wallPartial && wainscotOption == "On" && (buildingConfig[sideOption].leanTo != null));
            }
        }
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(ltsideWallChange, this.updateMesh);
    eventHandler.addEventListener(ltendWallChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateTexture);
    eventHandler.addEventListener(ltwainscotOnChange, this.updateMesh);
    eventHandler.addEventListener(ltwainscotColorChange, this.updateMesh);
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(ltsideWallChange, this.updateMesh);
    eventHandler.addEventListener(leantoOrientationChange, this.updateMesh);
    eventHandler.addEventListener(sidewallColorChange, this.updateMesh);
    eventHandler.addEventListener(wainscotOnChange, this.updateMesh);
    eventHandler.addEventListener(orientationChange, this.updateMesh);
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoAdd, this.updateMesh);
    eventHandler.addEventListener(rightleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(trimColorChange, this.changeColour);
    eventHandler.addEventListener(rightleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut2, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoAdd, this.updateMesh);
    eventHandler.addEventListener(leftleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(orientationChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function ltwainscotTrim(side) {
    var _this = this;
    this.side = side;
    var wainscotHeight = 3 * 12;
    this.init = function() {
        var geometry = this.getGeometry();
        var material = createMeshPhongMaterial(Colours[buildingConfig.trimColor].hex);
        this.mesh = new three.Mesh(geometry, material);
        _this.updateMesh();
        return this;
    };
    this.getGeometry = function() {
        if (_this.side == "Front" || _this.side == "Back") {
            var side = "backlt";
            if (_this.side == "Front") {
                side = "frontlt"
            }
            return (new three.BoxGeometry(buildingConfig.w - buildingConfig[side].cut2 - buildingConfig[side].cut2, 2, .5));
        } else {
            var side = "leftlt";
            if (_this.side == "Right") {
                side = "rightlt"
            }
            return (new three.BoxGeometry(.5, 2, buildingConfig.l - buildingConfig[side].cut2 - buildingConfig[side].cut2));
        }
    };
    this.updateMesh = function() {
        _this.mesh.visible = false;
        if (_this.side == "Left") {
            _this.mesh.scale.z = (buildingConfig.l - buildingConfig.leftlt.cut2 - buildingConfig.leftlt.cut1) / (iniLength - iniLCut2 - iniLCut1);
            _this.mesh.position.set(-(buildingConfig.w / 2 + buildingConfig.leftlt.ltowidth + 3), wainscotHeight, -(buildingConfig.l / 2 - buildingConfig.leftlt.cut2 / 2 + buildingConfig.leftlt.cut1 / 2));
            if (buildingConfig.flwrap == "flwrap") {
                _this.mesh.scale.z = (buildingConfig.l + buildingConfig.leftlt.ltowidth - buildingConfig.leftlt.cut2) / iniLength;
                _this.mesh.position.set(-(buildingConfig.w / 2 + buildingConfig.leftlt.ltowidth + 3), wainscotHeight, -buildingConfig.l / 2 + buildingConfig.leftlt.ltowidth / 2 + buildingConfig.leftlt.cut2);
            }
            if (buildingConfig.blwrap == "blwrap") {
                _this.mesh.scale.z = (buildingConfig.l + buildingConfig.leftlt.ltowidth - buildingConfig.leftlt.cut1) / iniLength;
                _this.mesh.position.set(-(buildingConfig.w / 2 + buildingConfig.leftlt.ltowidth + 3), wainscotHeight, -buildingConfig.l / 2 - buildingConfig.leftlt.ltowidth / 2 - buildingConfig.leftlt.cut1 / 2);
            }
            if (buildingConfig.blwrap == "blwrap" && buildingConfig.flwrap == "flwrap") {
                _this.mesh.scale.z = (buildingConfig.l + 2 * buildingConfig.leftlt.ltowidth) / iniLength;
                _this.mesh.position.set(-(buildingConfig.w / 2 + buildingConfig.leftlt.ltowidth + 3), wainscotHeight, -buildingConfig.l / 2);
            }
            if (buildingConfig.ltLeftsideWallOption == wallClosed && buildingConfig.leantoWallOrientation == VOrientation && buildingConfig.ltleftwainscotOption == "On" && buildingConfig.leftlt.leanTo != null) {
                _this.mesh.visible = true;
            }
            if (buildingConfig.ltLeftsideWallOption == wallopen && buildingConfig.ltleftwainscotOption == "On" && buildingConfig.leftlt.leanTo != null) {
                _this.mesh.visible = true;
            }
        }
        if (_this.side == "Right") {
            _this.mesh.scale.z = (buildingConfig.l - buildingConfig.rightlt.cut2 - buildingConfig.rightlt.cut1) / (iniLength - iniRCut2 - iniRCut1);
            _this.mesh.position.set(buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth + 3, wainscotHeight, -(buildingConfig.l / 2 - buildingConfig.rightlt.cut2 / 2 + buildingConfig.rightlt.cut1 / 2));
            if (buildingConfig.frwrap == "frwrap") {
                _this.mesh.scale.z = (buildingConfig.l + buildingConfig.rightlt.ltowidth - buildingConfig.rightlt.cut2) / iniLength;
                _this.mesh.position.set((buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth + 3), wainscotHeight, -buildingConfig.l / 2 + buildingConfig.rightlt.ltowidth / 2 + buildingConfig.rightlt.cut2 / 2);
            }
            if (buildingConfig.brwrap == "brwrap") {
                _this.mesh.scale.z = (buildingConfig.l + buildingConfig.rightlt.ltowidth - buildingConfig.rightlt.cut1) / iniLength;
                _this.mesh.position.set((buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth + 3), wainscotHeight, -buildingConfig.l / 2 - buildingConfig.rightlt.ltowidth / 2 - buildingConfig.rightlt.cut1 / 2);
            }
            if (buildingConfig.brwrap == "brwrap" && buildingConfig.frwrap == "frwrap") {
                _this.mesh.scale.z = (buildingConfig.l + 2 * buildingConfig.rightlt.ltowidth) / iniLength;
                _this.mesh.position.set((buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth + 3), wainscotHeight, -buildingConfig.l / 2);
            }
            if (buildingConfig.ltRightsideWallOption == wallClosed && buildingConfig.leantoWallOrientation == VOrientation && buildingConfig.ltrightwainscotOption == "On" && buildingConfig.rightlt.leanTo != null) {
                _this.mesh.visible = true;
            }
            if (buildingConfig.ltRightsideWallOption == wallopen && buildingConfig.ltrightwainscotOption == "On" && buildingConfig.rightlt.leanTo != null) {
                _this.mesh.visible = true;
            }
        }
        if (_this.side == "Front") {
            _this.mesh.scale.x = (buildingConfig.w - buildingConfig.frontlt.cut2 - buildingConfig.frontlt.cut1) / (iniWidth - iniFCut2 - iniFCut1);
            _this.mesh.position.set(buildingConfig.frontlt.cut1 / 2 - buildingConfig.frontlt.cut2 / 2, wainscotHeight, buildingConfig.frontlt.ltowidth + 3);
            if (buildingConfig.flwrap == "flwrap") {
                _this.mesh.scale.x = (buildingConfig.w + buildingConfig.frontlt.ltowidth - buildingConfig.frontlt.cut2) / iniWidth;
                _this.mesh.position.set(-(buildingConfig.frontlt.ltowidth / 2 + buildingConfig.frontlt.cut2 / 2), wainscotHeight, buildingConfig.frontlt.ltowidth + 3);
            }
            if (buildingConfig.frwrap == "frwrap") {
                _this.mesh.scale.x = (buildingConfig.w + buildingConfig.frontlt.ltowidth - buildingConfig.frontlt.cut1) / iniWidth;
                _this.mesh.position.set((buildingConfig.frontlt.ltowidth / 2 + buildingConfig.frontlt.cut1 / 2), wainscotHeight, buildingConfig.frontlt.ltowidth + 3);
            }
            if (buildingConfig.frwrap == "frwrap" && buildingConfig.flwrap == "flwrap") {
                _this.mesh.scale.x = (buildingConfig.w + 2 * buildingConfig.frontlt.ltowidth) / iniWidth;
                _this.mesh.position.set(0, wainscotHeight, buildingConfig.frontlt.ltowidth + 3);
            }
            if (buildingConfig.ltFrontsideWallOption == wallClosed && buildingConfig.leantoWallOrientation == VOrientation && buildingConfig.ltfrontwainscotOption == "On" && buildingConfig.frontlt.leanTo != null) {
                _this.mesh.visible = true;
            }
            if (buildingConfig.ltFrontsideWallOption == wallopen && buildingConfig.ltfrontwainscotOption == "On" && buildingConfig.frontlt.leanTo != null) {
                _this.mesh.visible = true;
            }
        }
        if (_this.side == "Back") {
            _this.mesh.scale.x = (buildingConfig.w - buildingConfig.backlt.cut2 - buildingConfig.backlt.cut1) / (iniWidth - iniBCut2 - iniBCut1);
            _this.mesh.position.set((-buildingConfig.backlt.cut2 / 2 + buildingConfig.backlt.cut1 / 2), wainscotHeight, -(buildingConfig.l + buildingConfig.backlt.ltowidth) - 3);
            if (buildingConfig.blwrap == "blwrap") {
                _this.mesh.scale.x = (buildingConfig.w + buildingConfig.backlt.ltowidth - buildingConfig.backlt.cut2) / iniWidth;
                _this.mesh.position.set(-(buildingConfig.backlt.ltowidth / 2 + buildingConfig.backlt.cut2 / 2), wainscotHeight, -buildingConfig.l - buildingConfig.backlt.ltowidth - 3);
            }
            if (buildingConfig.brwrap == "brwrap") {
                _this.mesh.scale.x = (buildingConfig.w + buildingConfig.backlt.ltowidth - buildingConfig.backlt.cut1) / iniWidth;
                _this.mesh.position.set((buildingConfig.backlt.ltowidth / 2 + buildingConfig.backlt.cut1), wainscotHeight, -buildingConfig.l - buildingConfig.backlt.ltowidth - 3);
            }
            if (buildingConfig.brwrap == "brwrap" && buildingConfig.blwrap == "blwrap") {
                _this.mesh.scale.x = (buildingConfig.w + 2 * buildingConfig.backlt.ltowidth) / iniWidth;
                _this.mesh.position.set(0, wainscotHeight, -buildingConfig.l - buildingConfig.backlt.ltowidth - 3);
            }
            if (buildingConfig.ltBacksideWallOption == wallClosed && buildingConfig.leantoWallOrientation == VOrientation && buildingConfig.ltbackwainscotOption == "On" && buildingConfig.backlt.leanTo != null) {
                _this.mesh.visible = true;
            }
            if (buildingConfig.ltBacksideWallOption == wallopen && buildingConfig.ltbackwainscotOption == "On" && buildingConfig.backlt.leanTo != null) {
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
    eventHandler.addEventListener(ltsideWallChange, this.updateMesh);
    eventHandler.addEventListener(ltendWallChange, this.updateMesh);
    eventHandler.addEventListener(trimColorChange, this.changeColour);
    eventHandler.addEventListener(ltwainscotOnChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(leantoOrientationChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(backleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoAdd, this.updateMesh);
    eventHandler.addEventListener(rightleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut2, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoAdd, this.updateMesh);
    eventHandler.addEventListener(leftleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function ltenclosedTrim(side) {
    var _this = this;
    this.side = side;
    this.init = function() {
        var geometry = new three.BoxGeometry(2.5, 1, 2);
        var material = createMeshPhongMaterial(Colours[buildingConfig.trimColor].hex);
        this.mesh1 = new three.Mesh(geometry, material);
        this.mesh2 = new three.Mesh(geometry, material);
        _this.updateMesh();
        return this;
    };
    this.updateMesh = function() {
        _this.mesh1.visible = false;
        _this.mesh2.visible = false;
        if (_this.side == "Front") {
            _this.mesh1.scale.y = buildingConfig.frontlt.legheight;
            _this.mesh2.scale.y = buildingConfig.frontlt.legheight;
            _this.mesh1.position.set(-(buildingConfig.w / 2 - buildingConfig.frontlt.cut1 + 1), buildingConfig.frontlt.legheight / 2, buildingConfig.frontlt.ltowidth + 2.5);
            _this.mesh2.position.set((buildingConfig.w / 2 - buildingConfig.frontlt.cut2 + 1), buildingConfig.frontlt.legheight / 2, buildingConfig.frontlt.ltowidth + 2.5);
            if (buildingConfig.ltFrontsideWallOption == wallPartial) {
                _this.mesh1.scale.y = (buildingConfig.ltfrontsideWallSheetCount * 3 * 12);
                _this.mesh2.scale.y = (buildingConfig.ltfrontsideWallSheetCount * 3 * 12);
                _this.mesh1.position.set(-(buildingConfig.w / 2 - buildingConfig.frontlt.cut1 + 1), buildingConfig.frontlt.legheight - (buildingConfig.ltfrontsideWallSheetCount * 3 * 12) / 2, buildingConfig.frontlt.ltowidth + 2.5);
                _this.mesh2.position.set((buildingConfig.w / 2 - buildingConfig.frontlt.cut2 + 1), buildingConfig.frontlt.legheight - (buildingConfig.ltfrontsideWallSheetCount * 3 * 12) / 2, buildingConfig.frontlt.ltowidth + 2.5);
            }
            _this.mesh1.visible = (buildingConfig.ltFrontsideWallOption == wallPartial || buildingConfig.ltFrontsideWallOption == wallClosed);
            _this.mesh2.visible = (buildingConfig.ltFrontsideWallOption == wallPartial || buildingConfig.ltFrontsideWallOption == wallClosed);
            if (buildingConfig.frwrap == "frwrap") {
                _this.mesh2.position.x = (buildingConfig.w / 2 + buildingConfig.frontlt.ltowidth + 1);
            }
            if (buildingConfig.flwrap == "flwrap") {
                _this.mesh1.position.x = -(buildingConfig.w / 2 + buildingConfig.frontlt.ltowidth + 1);
            }
            if (buildingConfig.ltFrontsideWallOption == wallopen && buildingConfig.ltfrontwainscotOption == "On" && buildingConfig.frontlt.leanTo == "frontlt") {
                _this.mesh1.scale.y = _this.mesh2.scale.y = 3 * 12;
                _this.mesh1.position.y = _this.mesh2.position.y = (3 * 12) / 2;
                _this.mesh1.visible = _this.mesh2.visible = true;
            }
        }
        if (_this.side == "Back") {
            _this.mesh1.scale.y = buildingConfig.backlt.legheight;
            _this.mesh2.scale.y = buildingConfig.backlt.legheight;
            _this.mesh1.position.set(-(buildingConfig.w / 2 - buildingConfig.backlt.cut1 + 1), buildingConfig.backlt.legheight / 2, -(buildingConfig.l + buildingConfig.backlt.ltowidth + 2.5));
            _this.mesh2.position.set((buildingConfig.w / 2 - buildingConfig.backlt.cut2 + 1), buildingConfig.backlt.legheight / 2, -(buildingConfig.l + buildingConfig.backlt.ltowidth + 2.5));
            if (buildingConfig.ltBacksideWallOption == wallPartial) {
                _this.mesh1.scale.y = (buildingConfig.ltbacksideWallSheetCount * 3 * 12);
                _this.mesh2.scale.y = (buildingConfig.ltbacksideWallSheetCount * 3 * 12);
                _this.mesh1.position.set(-(buildingConfig.w / 2 - buildingConfig.backlt.cut1 + 1), buildingConfig.backlt.legheight - (buildingConfig.ltbacksideWallSheetCount * 3 * 12) / 2, -(buildingConfig.l + buildingConfig.backlt.ltowidth + 2.5));
                _this.mesh2.position.set((buildingConfig.w / 2 - buildingConfig.backlt.cut2 + 1), buildingConfig.backlt.legheight - (buildingConfig.ltbacksideWallSheetCount * 3 * 12) / 2, -(buildingConfig.l + buildingConfig.backlt.ltowidth + 2.5));
            }
            _this.mesh1.visible = (buildingConfig.ltBacksideWallOption == wallPartial || buildingConfig.ltBacksideWallOption == wallClosed);
            _this.mesh2.visible = (buildingConfig.ltBacksideWallOption == wallPartial || buildingConfig.ltBacksideWallOption == wallClosed);
            if (buildingConfig.brwrap == "brwrap") {
                _this.mesh2.position.x = (buildingConfig.w / 2 + buildingConfig.backlt.ltowidth + 1);
            }
            if (buildingConfig.blwrap == "blwrap") {
                _this.mesh1.position.x = -(buildingConfig.w / 2 + buildingConfig.backlt.ltowidth + 1);
            }
            if (buildingConfig.ltBacksideWallOption == wallopen && buildingConfig.ltbackwainscotOption == "On" && buildingConfig.backlt.leanTo == "backlt") {
                _this.mesh1.scale.y = _this.mesh2.scale.y = 3 * 12;
                _this.mesh1.position.y = _this.mesh2.position.y = (3 * 12) / 2;
                _this.mesh1.visible = _this.mesh2.visible = true;
            }
        }
        if (_this.side == "Left") {
            _this.mesh1.scale.y = buildingConfig.leftlt.legheight;
            _this.mesh2.scale.y = buildingConfig.leftlt.legheight;
            _this.mesh1.position.set(-(buildingConfig.w / 2 + buildingConfig.leftlt.ltowidth + 2.5), buildingConfig.leftlt.legheight / 2, -buildingConfig.leftlt.cut1);
            _this.mesh2.position.set(-(buildingConfig.w / 2 + buildingConfig.leftlt.ltowidth + 2.5), buildingConfig.leftlt.legheight / 2, -(buildingConfig.l - buildingConfig.leftlt.cut2));
            if (buildingConfig.ltLeftsideWallOption == wallPartial) {
                _this.mesh1.scale.y = (buildingConfig.ltleftsideWallSheetCount * 3 * 12);
                _this.mesh2.scale.y = (buildingConfig.ltleftsideWallSheetCount * 3 * 12);
                _this.mesh1.position.set(-(buildingConfig.w / 2 + buildingConfig.leftlt.ltowidth + 2.5), buildingConfig.leftlt.legheight - (buildingConfig.ltleftsideWallSheetCount * 3 * 12) / 2, -buildingConfig.leftlt.cut1);
                _this.mesh2.position.set(-(buildingConfig.w / 2 + buildingConfig.leftlt.ltowidth + 2.5), buildingConfig.leftlt.legheight - (buildingConfig.ltleftsideWallSheetCount * 3 * 12) / 2, -(buildingConfig.l - buildingConfig.leftlt.cut2));
            }
            _this.mesh1.visible = (buildingConfig.ltLeftsideWallOption == wallPartial || buildingConfig.ltLeftsideWallOption == wallClosed);
            _this.mesh2.visible = (buildingConfig.ltLeftsideWallOption == wallPartial || buildingConfig.ltLeftsideWallOption == wallClosed);
            if (buildingConfig.ltLeftsideWallOption == wallopen && buildingConfig.ltleftwainscotOption == "On" && buildingConfig.leftlt.leanTo == "leftlt") {
                _this.mesh1.scale.y = _this.mesh2.scale.y = 3 * 12;
                _this.mesh1.position.y = _this.mesh2.position.y = (3 * 12) / 2;
                _this.mesh1.visible = _this.mesh2.visible = true;
            }
            if (buildingConfig.flwrap == "flwrap") {
                _this.mesh1.visible = false;
            }
            if (buildingConfig.blwrap == "blwrap") {
                _this.mesh2.visible = false;
            }
        }
        if (_this.side == "Right") {
            _this.mesh1.scale.y = buildingConfig.rightlt.legheight;
            _this.mesh2.scale.y = buildingConfig.rightlt.legheight;
            _this.mesh1.position.set((buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth) + 2.5, buildingConfig.rightlt.legheight / 2, -buildingConfig.rightlt.cut1);
            _this.mesh2.position.set((buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth) + 2.5, buildingConfig.rightlt.legheight / 2, -(buildingConfig.l - buildingConfig.rightlt.cut2));
            if (buildingConfig.ltRightsideWallOption == wallPartial) {
                _this.mesh1.scale.y = (buildingConfig.ltrightsideWallSheetCount * 3 * 12);
                _this.mesh2.scale.y = (buildingConfig.ltrightsideWallSheetCount * 3 * 12);
                _this.mesh1.position.set((buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth) + 2.5, buildingConfig.rightlt.legheight - (buildingConfig.ltrightsideWallSheetCount * 3 * 12) / 2, -buildingConfig.rightlt.cut1);
                _this.mesh2.position.set((buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth) + 2.5, buildingConfig.rightlt.legheight - (buildingConfig.ltrightsideWallSheetCount * 3 * 12) / 2, -(buildingConfig.l - buildingConfig.rightlt.cut2));
            }
            _this.mesh1.visible = (buildingConfig.ltRightsideWallOption == wallPartial || buildingConfig.ltRightsideWallOption == wallClosed);
            _this.mesh2.visible = (buildingConfig.ltRightsideWallOption == wallPartial || buildingConfig.ltRightsideWallOption == wallClosed);
            if (buildingConfig.ltRightsideWallOption == wallopen && buildingConfig.ltrightwainscotOption == "On" && buildingConfig.rightlt.leanTo == "rightlt") {
                _this.mesh1.scale.y = _this.mesh2.scale.y = 3 * 12;
                _this.mesh1.position.y = _this.mesh2.position.y = (3 * 12) / 2;
                _this.mesh1.visible = _this.mesh2.visible = true;
            }
            if (buildingConfig.frwrap == "frwrap") {
                _this.mesh1.visible = false;
            }
            if (buildingConfig.brwrap == "brwrap") {
                _this.mesh2.visible = false;
            }
        }
    };
    this.changeColour = function() {
        _this.mesh1.material.color = new three.Color(get_orientation_url(buildingConfig.trimColor, null, 2));
        _this.mesh2.material.color = new three.Color(get_orientation_url(buildingConfig.trimColor, null, 2));
    };
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(ltsideWallChange, this.updateMesh);
    eventHandler.addEventListener(ltendWallChange, this.updateMesh);
    eventHandler.addEventListener(trimColorChange, this.changeColour);
    eventHandler.addEventListener(ltwainscotOnChange, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(leantoOrientationChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(backleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoAdd, this.updateMesh);
    eventHandler.addEventListener(rightleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut2, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoAdd, this.updateMesh);
    eventHandler.addEventListener(leftleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(trimColorChange, this.changeColour);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function generateZigZagPoints(amount, width, height, thickness) {
    var points = [];
    for (var i = 0; i < amount; i++) {
        points.push([i * width, 0]);
        points.push([i * width + width / 2, height]);
    }
    for (var i = amount - 1; i > -1; i--) {
        points.push([i * width + width / 2, height - thickness]);
        points.push([i * width, -thickness]);
    }
    return points;
}

function loadwrapSideBrace(n, side) {
    side = side || "left";
    var _this = this;
    _this.side = side;
    this.init = function() {
        var geometry = this.getGeometry();
        var material = createSteelMaterial();
        this.mesh = new three.Mesh(geometry, material);
        this.mesh1 = new three.Mesh(geometry, material);
        _this.updateMesh();
        return this;
    };
    this.getGeometry = function() {
        if (_this.side == "right") {
            var values = new getAngle("right");
            var angle = values.angle;
            var ltRoofWidth = values.ltRoofWidth;
            var hVal = values.hVal;
            var braceLenght = 36;
            var angleVal = Math.PI - angle;
            var cosAngle = Math.cos(angleVal);
            var x = Math.sqrt((braceLenght * braceLenght) / (5 - (4 * cosAngle)));
            var p1x = buildingConfig.w / 2 + buildingConfig.rightlt.ltowidth;
            var p1y = buildingConfig.rightlt.legheight - x;
            var p2x = p1x - (Math.sin(angle) * x);
            var p2y = buildingConfig.rightlt.legheight + Math.cos(angle) * x;
            var shape = new three.Shape();
            shape.moveTo(p1x, p1y);
            shape.lineTo(p1x + 1, p1y + 1);
            shape.lineTo(p2x + 1, p2y - .5);
            shape.lineTo(p2x, p2y - 1.5);
            shape.lineTo(p1x, p1y);
            var extrudeSettings = {
                amount: 2.5,
                bevelEnabled: true,
                bevelSegments: 0,
                steps: 1,
                bevelSize: 0,
                bevelThickness: 1
            };
            var geometry = new three.ExtrudeGeometry(shape, extrudeSettings);
            computeUVs(geometry);
            return geometry
        }
        if (_this.side == "left") {
            var values = new getAngle("left");
            var angle = values.angle;
            var ltRoofWidth = values.ltRoofWidth;
            var hVal = values.hVal;
            var braceLenght = 36;
            var angleVal = Math.PI - angle;
            var cosAngle = Math.cos(angleVal);
            var x = Math.sqrt((braceLenght * braceLenght) / (5 - (4 * cosAngle)));
            var sinAngle = Math.sin(angleVal);
            var p1x = -(buildingConfig.w / 2 + buildingConfig.leftlt.ltowidth);
            var p1y = buildingConfig.leftlt.legheight - x;
            var p2x = p1x - (Math.cos(Math.PI / 2 - angle) * x);
            var p2y = buildingConfig.leftlt.legheight + Math.sin(Math.PI / 2 - angle) * x;
            var shape = new three.Shape();
            shape.moveTo(p1x, p1y);
            shape.lineTo(p1x - 1, p1y + 1);
            shape.lineTo(p2x - 1, p2y - .5);
            shape.lineTo(p2x, p2y - 1.5);
            shape.lineTo(p1x, p1y);
            var extrudeSettings = {
                amount: 2.5,
                bevelEnabled: true,
                bevelSegments: 0,
                steps: 1,
                bevelSize: 0,
                bevelThickness: 1
            };
            var geometry = new three.ExtrudeGeometry(shape, extrudeSettings);
            computeUVs(geometry);
            return geometry
        }
    };
    this.updateMesh = function() {
        _this.mesh.visible = false;
        _this.mesh1.visible = false;
        if (_this.side == "right") {
            var nos = Math.ceil((buildingConfig.rightlt.ltowidth) / (12 * 5));
            var zval = buildingConfig.rightlt.ltowidth / nos;
            var fposz = (zval * n);
            var bposz = (-(zval * n) - buildingConfig.l);
            if (buildingConfig.rightlt.leanTo == "rightlt" && buildingConfig.frwrap == "frwrap") {
                _this.mesh.visible = true;
            }
            if (buildingConfig.rightlt.leanTo == "rightlt" && buildingConfig.brwrap == "brwrap") {
                _this.mesh1.visible = true;
            }
            if (fposz >= buildingConfig.rightlt.ltowidth) {
                _this.mesh.visible = false;
            }
            if (bposz <= -buildingConfig.rightlt.ltowidth - buildingConfig.l) {
                _this.mesh1.visible = false;
            }
            _this.mesh.geometry = _this.getGeometry();
            _this.mesh1.geometry = _this.getGeometry();
            _this.mesh.position.z = (fposz - 1.25)
            _this.mesh1.position.z = (bposz - 1.25)
        }
        if (_this.side == "left") {
            var nos = Math.ceil((buildingConfig.leftlt.ltowidth / 12) / 5);
            var zval = buildingConfig.leftlt.ltowidth / nos;
            var fposz = (zval) * n;
            var bposz = (-(zval * n) - buildingConfig.l);
            if (buildingConfig.leftlt.leanTo == "leftlt" && buildingConfig.flwrap == "flwrap") {
                _this.mesh.visible = true;
            }
            if (buildingConfig.leftlt.leanTo == "leftlt" && buildingConfig.blwrap == "blwrap") {
                _this.mesh1.visible = true;
            }
            if (fposz >= buildingConfig.leftlt.ltowidth) {
                _this.mesh.visible = false;
            }
            if (bposz <= -buildingConfig.leftlt.ltowidth - buildingConfig.l) {
                _this.mesh1.visible = false;
            }
            _this.mesh.geometry = _this.getGeometry();
            _this.mesh1.geometry = _this.getGeometry();
            _this.mesh.position.z = (fposz - 1.25);
            _this.mesh1.position.z = (bposz - 1.25);
        }
    };
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoAdd, this.updateMesh);
    eventHandler.addEventListener(rightleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut1, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoAdd, this.updateMesh);
    eventHandler.addEventListener(leftleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}

function endloadwrapSideBrace(n, side) {
    side = side || "back";
    var _this = this;
    _this.side = side;
    this.init = function() {
        var geometry = this.getGeometry();
        var material = createSteelMaterial();
        this.mesh = new three.Mesh(geometry, material);
        this.mesh1 = new three.Mesh(geometry, material);
        _this.updateMesh();
        return this;
    };
    this.getGeometry = function() {
        if (_this.side == "front") {
            var values = new getEndAngle("front");
            var angle = values.angle;
            var ltRoofWidth = values.ltRoofWidth;
            var hVal = values.hVal;
            var braceLenght = 36;
            var angleVal = Math.PI - angle;
            var cosAngle = Math.cos(angleVal);
            var x = Math.sqrt((braceLenght * braceLenght) / (5 - (4 * cosAngle)));
            var p1x = 0;
            var p1y = buildingConfig.frontlt.legheight - x;
            var p2x = p1x - (Math.sin(angle) * x);
            var p2y = buildingConfig.frontlt.legheight + Math.cos(angle) * x;
            var shape = new three.Shape();
            shape.moveTo(p1x, p1y);
            shape.lineTo(p1x + 1, p1y + 1);
            shape.lineTo(p2x + 1, p2y - .5);
            shape.lineTo(p2x, p2y - 1.5);
            shape.lineTo(p1x, p1y);
            var extrudeSettings = {
                amount: 2.5,
                bevelEnabled: true,
                bevelSegments: 0,
                steps: 1,
                bevelSize: 0,
                bevelThickness: 1
            };
            var geometry = new three.ExtrudeGeometry(shape, extrudeSettings);
            computeUVs(geometry);
            return geometry
        }
        if (_this.side == "back") {
            var values = new getEndAngle("back");
            var angle = values.angle;
            var ltRoofWidth = values.ltRoofWidth;
            var hVal = values.hVal;
            var braceLenght = 36;
            var angleVal = Math.PI - angle;
            var cosAngle = Math.cos(angleVal);
            var x = Math.sqrt((braceLenght * braceLenght) / (5 - (4 * cosAngle)));
            var sinAngle = Math.sin(angleVal);
            var p1x = 0;
            var p1y = buildingConfig.backlt.legheight - x;
            var p2x = p1x - (Math.cos(Math.PI / 2 - angle) * x);
            var p2y = buildingConfig.backlt.legheight + Math.sin(Math.PI / 2 - angle) * x;
            var shape = new three.Shape();
            shape.moveTo(p1x, p1y);
            shape.lineTo(p1x - 1, p1y + 1);
            shape.lineTo(p2x - 1, p2y - .5);
            shape.lineTo(p2x, p2y - 1.5);
            shape.lineTo(p1x, p1y);
            var extrudeSettings = {
                amount: 2.5,
                bevelEnabled: true,
                bevelSegments: 0,
                steps: 1,
                bevelSize: 0,
                bevelThickness: 1
            };
            var geometry = new three.ExtrudeGeometry(shape, extrudeSettings);
            computeUVs(geometry);
            return geometry
        }
    };
    this.updateMesh = function() {
        _this.mesh.visible = false;
        _this.mesh1.visible = false;
        if (_this.side == "front") {
            var no = Math.ceil((buildingConfig.w / 12) / 5);
            var step = buildingConfig.w / no;
            var nos = Math.ceil((buildingConfig.frontlt.ltowidth) / (step));
            var zval = buildingConfig.frontlt.ltowidth / nos;
            var rposz = ((zval * n) + buildingConfig.w / 2);
            var lposz = -((zval * n) + buildingConfig.w / 2);
            if (buildingConfig.frontlt.leanTo == "frontlt" && buildingConfig.frwrap == "frwrap") {
                _this.mesh.visible = true;
            }
            if (buildingConfig.frontlt.leanTo == "frontlt" && buildingConfig.flwrap == "flwrap") {
                _this.mesh1.visible = true;
            }
            if (rposz >= buildingConfig.w / 2 + buildingConfig.frontlt.ltowidth) {
                _this.mesh.visible = false;
            }
            if (lposz <= -(buildingConfig.w / 2 + buildingConfig.frontlt.ltowidth)) {
                _this.mesh1.visible = false;
            }
            _this.mesh.geometry = _this.getGeometry();
            _this.mesh.position.x = rposz + 1.25;
            _this.mesh.position.z = buildingConfig.frontlt.ltowidth;
            _this.mesh.rotation.y = -1.57;
            _this.mesh1.geometry = _this.getGeometry();
            _this.mesh1.position.x = lposz + 1.25;
            _this.mesh1.position.z = buildingConfig.frontlt.ltowidth;
            _this.mesh1.rotation.y = -1.57;
        }
        if (_this.side == "back") {
            var no = Math.ceil((buildingConfig.w / 12) / 5);
            var step = buildingConfig.w / no;
            var nos = Math.ceil((buildingConfig.backlt.ltowidth) / (step));
            var zval = buildingConfig.backlt.ltowidth / nos;
            var rposz = ((zval * n) + buildingConfig.w / 2);
            var lposz = -((zval * n) + buildingConfig.w / 2);
            if (buildingConfig.backlt.leanTo == "backlt" && buildingConfig.brwrap == "brwrap") {
                _this.mesh.visible = true;
            }
            if (buildingConfig.backlt.leanTo == "backlt" && buildingConfig.blwrap == "blwrap") {
                _this.mesh1.visible = true;
            }
            if (rposz >= buildingConfig.w / 2 + buildingConfig.backlt.ltowidth) {
                _this.mesh.visible = false;
            }
            if (lposz <= -(buildingConfig.w / 2 + buildingConfig.backlt.ltowidth)) {
                _this.mesh1.visible = false;
            }
            _this.mesh.geometry = _this.getGeometry();
            _this.mesh.position.x = rposz + 1.25;
            _this.mesh.position.z = -buildingConfig.l - buildingConfig.backlt.ltowidth;
            _this.mesh.rotation.y = -1.57;
            _this.mesh1.geometry = _this.getGeometry();
            _this.mesh1.position.x = lposz + 1.25;
            _this.mesh1.position.z = -buildingConfig.l - buildingConfig.backlt.ltowidth;
            _this.mesh1.rotation.y = -1.57;
        }
    };
    eventHandler.addEventListener(heightChange, this.updateMesh);
    eventHandler.addEventListener(widthChange, this.updateMesh);
    eventHandler.addEventListener(lengthChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoAdd, this.updateMesh);
    eventHandler.addEventListener(rightleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut1, this.updateMesh);
    eventHandler.addEventListener(rightleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut1, this.updateMesh);
    eventHandler.addEventListener(leftleantoCut2, this.updateMesh);
    eventHandler.addEventListener(leftleantoAdd, this.updateMesh);
    eventHandler.addEventListener(leftleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(leftleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoAdd, this.updateMesh);
    eventHandler.addEventListener(frontleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut2, this.updateMesh);
    eventHandler.addEventListener(frontleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut1, this.updateMesh);
    eventHandler.addEventListener(backleantoCut2, this.updateMesh);
    eventHandler.addEventListener(backleantoAdd, this.updateMesh);
    eventHandler.addEventListener(backleantoHeightChange, this.updateMesh);
    eventHandler.addEventListener(backleantoWidthChange, this.updateMesh);
    eventHandler.addEventListener(backleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontleantoDropChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(roofStyleChange, this.updateMesh);
    eventHandler.addEventListener(frontWallChange, this.updateMesh);
    eventHandler.addEventListener(frontrightWrap, this.updateMesh);
    eventHandler.addEventListener(frontleftWrap, this.updateMesh);
    eventHandler.addEventListener(backrightWrap, this.updateMesh);
    eventHandler.addEventListener(backleftWrap, this.updateMesh);
    eventHandler.addEventListener(encloseBuildingChange, this.updateMesh);
}