var doorDL = "door";
var doorFR = 'doorfr';
var windowDL = "window";
var rollupDL = "rollup";
var rollFR = 'rollfr';
var did = 0;
var DragableObjectmap = {};
var dragbaleObjImg = {
    "door": {
        "default": {
            img: templateUrl + "/img/addons/door_37_silver.svg"
        },
        "36x72": {
            img: templateUrl + "/img/addons/door_37_silver.svg"
        },
        "36x84": {
            img: templateUrl + "/img/addons/door_37_silver.svg"
        },
        "36x80": {
            img: templateUrl + "/img/addons/door_37_silver.svg"
        },
        "48x84": {
            img: templateUrl + "/img/addons/door_47_silver.svg"
        },
    },
    "window": {
        "default": {
            img: templateUrl + "/img/addons/Door_and_windows.svg"
        },
        "30x30": {
            img: templateUrl + "/img/addons/Door_and_windows.svg"
        },
    },
    "rollup": {
        "default": {
            img: templateUrl + "/img/addons/Rollup_doors_12_14_silver.svg"
        },
        "72x84": {
            img: templateUrl + "/img/addons/Rollup_doors_12_14_silver.svg"
        },
        "96x84": {
            img: templateUrl + "/img/addons/Rollup_doors_12_14_silver.svg"
        },
        "108x84": {
            img: templateUrl + "/img/addons/Rollup_doors_16_8_silver.svg"
        },
        "120x96": {
            img: templateUrl + "/img/addons/Rollup_doors_16_8_silver.svg"
        },
        "120X120": {
            img: templateUrl + "/img/addons/Rollup_doors_16_16_silver.svg"
        },
    },
};
var difference = function(a, b) {
    return Math.abs(a - b);
};

var font_loader = new three.FontLoader();
var geo_width;
var hel_font;
font_loader.load(templateUrl + '/fonts/helvetiker_bold.typeface.json', function(font) {
    hel_font = font;
    var geo_width = new three.TextGeometry("", {
        font: font,
        size: 2,
        height: 0.1
    });
});

function DrawLine(points) {
    var geometry = new three.Geometry();
    points.forEach(function(point) {
        geometry.vertices.push(new three.Vector3(point[0], point[1], point[2]));
    });
    geometry.dynamic = true;
    return geometry
}
$(document).on('click', '.remove_dob', function(e) {
    DragableObjectmap[parseInt($(this).attr("did"))].dispose();
    trussList.forEach(function(child) {
        child.updateMesh();
    });
    //CalculatePrice();
    //displayStatus();
});
$(document).on('click', '.move_dob', function(e) {
    drag_obj_id = parseInt($(this).attr("did"));
});

function getCornerintersection(corner_point, dir_vector) {
    var rc = new three.Raycaster();
    rc.set(corner_point, dir_vector.vector);
    var intersects = rc.intersectObjects(wallObjects);
    for (var i = 0; i < intersects.length; i++) {
        if (((intersects[i].object.wallInstance instanceof SEndWall && buildingConfig.RoofSyle == StandardRoof) || (intersects[i].object.wallInstance instanceof boxEndWall && buildingConfig.RoofSyle == AFrameRoof) || intersects[i].object.wallInstance instanceof SideWall) || (intersects[i].object.wallInstance instanceof LeantoEndWall || intersects[i].object.wallInstance instanceof LeantoSideWall)) {
            return intersects[i].object
        }
    }
}

function DragableObject(label, width, height, position) {
    var _this = this;
    this.width = width;
    this.height = height;
    this.did = ++did;
    this.label = label;
    this.dimensionGroup = new three.Group();
    this.init = function() {
        var bc = clearance;
        var clr = clearance;
        if (label != rollupDL && label != rollFR) {
            clr = 3;
            this.setClearance(clr, clr, clr, clr);
        } else {
            this.setClearance(clr, clr, clr, 0);
        }
        var geometry = new three.BoxGeometry(width, height, 3);
        var material = new three.MeshBasicMaterial({
            colorWrite: false,
            //map: texture,
            //shininess: 30,
            //metal: true,
            //wrapAround: true,
            //shading: three.FlatShading
        });
        if (label != doorFR && label != rollFR) {
            var img_url = dragbaleObjImg[label]["default"].img;
            var key = this.width.toString() + "x" + this.height.toString();
            if (key in dragbaleObjImg[label]) {
                img_url = dragbaleObjImg[label][key].img
            }
            var texture = globals.textureLoader.load(img_url);
            material.colorWrite = true;
            material.map = texture;
        }

        material.side = three.DoubleSide;
        this.mesh = new three.Mesh(geometry, material);
        var geo_wrapper = new three.BoxGeometry(width + this.lc + this.rc, height + this.tc + this.bc, 3);
        var mat_wrapper = new three.MeshBasicMaterial({
            color: 0x0000ff,
            transparent: true,
            opacity: .1
        });
        this.mesh_wrapper = new three.Mesh(geo_wrapper, mat_wrapper);
        if (label != rollupDL && label != rollFR) {
            this.mesh_wrapper.visible = false;
        }
        this.matrixAutoUpdate = true;
        var loader = new three.FontLoader();
        var mat_width = new three.MeshBasicMaterial({
            color: 0xffffff
        });
        /*
        loader.load(templateUrl + '/fonts/helvetiker_bold.typeface.json', function(font) {
            _this.font = font;
            var geo_width = new three.TextGeometry("", {
                font: font,
                size: 2,
                height: 0.1
            });
            _this.mesh_width = new three.Mesh(geo_width, mat_width);
            _this.mesh_height = new three.Mesh(geo_width, mat_width);
            _this.mesh_left = new three.Mesh(geo_width, mat_width);
            _this.mesh_bottom = new three.Mesh(geo_width, mat_width);
        });
        */
        _this.font = hel_font;
        _this.mesh_width = new three.Mesh(geo_width, mat_width);
        _this.mesh_height = new three.Mesh(geo_width, mat_width);
        _this.mesh_left = new three.Mesh(geo_width, mat_width);
        _this.mesh_bottom = new three.Mesh(geo_width, mat_width);
        var width_line_geometry = new three.Geometry();
        _this.mesh_width_line = new three.Line(width_line_geometry, mat_width);
        _this.mesh_Height_line = new three.Line(width_line_geometry, mat_width);
        _this.mesh_arrow_left = new three.Line(width_line_geometry, mat_width);
        _this.mesh_arrow_bottom = new three.Line(width_line_geometry, mat_width);
        globals.mainObj.add(_this.dimensionGroup);
        this.updateDimensionVisiblility();
        var topHColumn = new three.BoxGeometry(1, 2, 2);
        var topHColumnMaterial = createSteelMaterial();
        _this.topHColumnMesh = new three.Mesh(topHColumn, topHColumnMaterial);
        var botHColumn = new three.BoxGeometry(1, 2, 2);
        _this.botHColumnMesh = new three.Mesh(botHColumn, topHColumnMaterial);
        var leftVColumn = new three.BoxGeometry(1, height, 2);
        _this.leftVColumnMesh = new three.Mesh(leftVColumn, topHColumnMaterial);
        var rightVColumn = new three.BoxGeometry(1, height, 2);
        _this.rightVColumnMesh = new three.Mesh(leftVColumn, topHColumnMaterial);
        var trimmat = createMeshPhongMaterial(Colours[buildingConfig.trimColor].hex);
        var trimtop = new three.BoxGeometry(width + 2, 1, 1.5);
        _this.topmesh = new three.Mesh(trimtop, trimmat);
        var trimbot = new three.BoxGeometry(width + 2, 1, 1.5);
        _this.botmesh = new three.Mesh(trimbot, trimmat);
        var trimleft = new three.BoxGeometry(1, height, 1.5);
        _this.leftmesh = new three.Mesh(trimleft, trimmat);
        var trimright = new three.BoxGeometry(1, height, 1.5);
        _this.rightmesh = new three.Mesh(trimleft, trimmat);
        if (position) {
            this.setPosition(position.x, position.y, position.z, position.r)
        }
        return this
    };
    this.setClearance = function(l, r, t, b) {
        this.lc = l;
        this.rc = r;
        this.tc = t;
        this.bc = b;
    };
    this.updateWindowColumns = function() {
        var pos = null;
        if (_this.includedWall && ["Front", "Back"].includes(_this.includedWall.swid)) {
            var adjuestment = 2;
            if (_this.includedWall.swid == "Front") {
                adjuestment = -2
            }
            var lengthValue = buildingConfig.w;
            var nos = Math.ceil(lengthValue / (max_vsupport_width * 12));
            var unit_space = lengthValue / nos;
            var total_space = unit_space;
            var i = parseInt(Math.abs(_this.mesh.position.x + lengthValue / 2) / unit_space);
            var lefti = i;
            var righti = i;
            var left = -lengthValue / 2 + i * unit_space;
            var right = -lengthValue / 2 + (i + 1) * unit_space;
            if (left > _this.mesh.position.x - width / 2) {
                lefti = i - 1;
                total_space = total_space + unit_space;
            }
            if (right < _this.mesh.position.x + width / 2) {
                total_space = total_space + unit_space;
            }
            _this.topHColumnMesh.scale.x = total_space;
            _this.botHColumnMesh.scale.x = total_space;
            _this.topHColumnMesh.rotation.y = 0;
            _this.botHColumnMesh.rotation.y = 0;
            var pos = -1 * lengthValue / 2 + lefti * unit_space;
            _this.topHColumnMesh.position.set(pos + total_space / 2, _this.mesh.position.y + height / 2 + 1, _this.mesh.position.z + adjuestment);
            _this.botHColumnMesh.position.set(pos + total_space / 2, _this.mesh.position.y - height / 2 - 1, _this.mesh.position.z + adjuestment);
            _this.leftVColumnMesh.position.set(_this.mesh.position.x - width / 2 - 1.25, _this.mesh.position.y, _this.mesh.position.z + adjuestment);
            _this.rightVColumnMesh.position.set(_this.mesh.position.x + width / 2 + 1.25, _this.mesh.position.y, _this.mesh.position.z + adjuestment);
            _this.topmesh.rotation.y = 0;
            _this.botmesh.rotation.y = 0;
            var adjVal = 1;
            if (_this.includedWall.swid == "Back") {
                adjVal = -1;
            }
            _this.topmesh.position.set(_this.mesh.position.x, _this.mesh.position.y + height / 2 + .5, _this.mesh.position.z + adjVal);
            _this.botmesh.position.set(_this.mesh.position.x, _this.mesh.position.y - height / 2 - .5, _this.mesh.position.z + adjVal);
            _this.leftmesh.position.set(_this.mesh.position.x - width / 2 - .5, _this.mesh.position.y, _this.mesh.position.z + adjVal);
            _this.rightmesh.position.set(_this.mesh.position.x + width / 2 + .5, _this.mesh.position.y, _this.mesh.position.z + adjVal);
        }
        if (_this.includedWall && ["Left", "Right"].includes(_this.includedWall.swid)) {
            var adjuestment = 2;
            if (_this.includedWall.swid == "Right") {
                adjuestment = -2
            }
            var num = Math.ceil(buildingConfig.l / (5 * 12));
            var posz = (buildingConfig.l / num);
            var i = parseInt(Math.abs(-(_this.mesh.position.z) / posz));
            var left = i * -posz;
            var right = (i + 1) * -posz;
            lefti = i;
            var scaleVal = posz;
            if (left < _this.mesh.position.z + width / 2) {
                lefti = i - 1;
                scaleVal = scaleVal + posz
            }
            if (right > _this.mesh.position.z - width / 2) {
                scaleVal = scaleVal + posz
            }
            _this.topHColumnMesh.scale.x = scaleVal;
            _this.botHColumnMesh.scale.x = posz;
            _this.topHColumnMesh.rotation.y = Math.PI / 2;
            _this.botHColumnMesh.rotation.y = Math.PI / 2;
            _this.topHColumnMesh.position.set(_this.mesh.position.x + adjuestment, _this.mesh.position.y + height / 2 + 1, lefti * -posz - scaleVal / 2);
            _this.botHColumnMesh.position.set(_this.mesh.position.x + adjuestment, _this.mesh.position.y - height / 2 - 1, lefti * -posz - scaleVal / 2);
            _this.leftVColumnMesh.position.set(_this.mesh.position.x + adjuestment, _this.mesh.position.y, _this.mesh.position.z + width / 2 + 1.25);
            _this.rightVColumnMesh.position.set(_this.mesh.position.x + adjuestment, _this.mesh.position.y, _this.mesh.position.z - width / 2 - 1.25);
            var adjVal = 1;
            if (_this.includedWall.swid == "Left") {
                adjVal = -1;
            }
            _this.topmesh.rotation.y = Math.PI / 2;
            _this.botmesh.rotation.y = Math.PI / 2;
            _this.topmesh.position.set(_this.mesh.position.x + adjVal, _this.mesh.position.y + height / 2 + .5, _this.mesh.position.z);
            _this.botmesh.position.set(_this.mesh.position.x + adjVal, _this.mesh.position.y - height / 2 - .5, _this.mesh.position.z);
            _this.leftmesh.position.set(_this.mesh.position.x + adjVal, _this.mesh.position.y, _this.mesh.position.z + width / 2 + .5);
            _this.rightmesh.position.set(_this.mesh.position.x + adjVal, _this.mesh.position.y, _this.mesh.position.z - width / 2 - .5);
        }
    };
    this.validate_dop = function(isec, dir) {
        if (label != windowDL) {
            isec.point.y = this.height / 2 + this.bc;
        }
        var corners = this.get_corners(isec.point, dir);
        var cins = getCornerintersection(corners[0], dir);
        if (!cins) {
            return false
        }
        for (var i = 1; i < corners.length; i++) {
            var ncins = getCornerintersection(corners[i], dir);
            if (!ncins || cins.id != ncins.id) {
                return false
            }
        }
        return true
    };
    this.checkForCuttingTruss = function() {
        return false;
        if (label == rollupDL || label == rollFR) {
            return false;
        }
        var num = Math.ceil(buildingConfig.l / (5 * 12));
        var posz = (buildingConfig.l / num);
        var iterations;
        var ref_point;
        var posxfn;
        if (["Front", "Back"].includes(_this.includedWall.swid)) {
            ref_point = _this.mesh.position.x;
            iterations = max_vsupport_nos;
            posxfn = function(i) {
                var nos = Math.ceil(buildingConfig.w / (max_vsupport_width * 12));
                var unit_space = buildingConfig.w / nos;
                return -1 * buildingConfig.w / 2 + i * unit_space;
            }
        } else {
            ref_point = _this.mesh.position.z;
            var iterations = parseInt(lengthOptions[0] / 5) + 1;
            posxfn = function(i) {
                return (i * -posz)
            }
        }
        var lEdgeD = ref_point - _this.width / 2;
        var rEdgeD = ref_point + _this.width / 2;
        for (var i = 1; i <= iterations; i++) {
            var posx = posxfn(i);
            var lEdgeT = posx - 1.25;
            var rEdgeT = posx + 1.25;
            if (lEdgeD <= rEdgeT && rEdgeD >= lEdgeT) {
                return true;
            }
        }
        return false;
    };
    this.copyPosition = function() {
        this.oldPosition = {
            x: this.mesh.position.x,
            y: this.mesh.position.y,
            z: this.mesh.position.z,
            r: this.mesh.rotation.y
        }
    };
    this.updateMesh = function() {
        var iobj = _this.includedWall;
        var posx = _this.mesh.position.x;
        var posz = _this.mesh.position.z;
        if (!iobj) {
            return;
        }
        if (_this.mesh.rotation.y) {
            posx = iobj.position.x;
        } else {
            posz = iobj.position.z;
            if (iobj.position.x == 0 && iobj.position.y == 0 && iobj.position.z == 0) {
                posz = iobj.geometry.vertices[iobj.geometry.vertices.length - 1].z;
            }
        }
        _this.setPosition(posx, _this.mesh.position.y, posz, _this.mesh.rotation.y);
        var isec = {
            point: _this.mesh.position
        };
        var dir = getDirection(iobj);
        var p = _this.validate_dop(isec, dir);
        _this.update_dragable_dimension();
        if (!_this.validate_dop(isec, dir)) {
            _this.dispose();
            return;
        }
    };
    this.UpdateDimensionType = function(option) {
        var lengthVal = _this.height;
        var position = null;
        var rotation = null;
        var textPosition = null;
        var lineMesh = null;
        var textMesh = null;
        var txtVal = null;
        var right = _this.width / 2;
        var text_rotation = 0;
        if (!_this.includedWall) {
            return
        }
        switch (option) {
            case "width":
                lengthVal = _this.width;
                lineMesh = _this.mesh_width_line;
                textMesh = _this.mesh_width;
                var lineh = 2 + _this.mesh.position.y + _this.height / 2;
                txtVal = _this.width;
                switch (_this.includedWall.swid) {
                    case "Front":
                        position = [_this.mesh.position.x, lineh, _this.mesh.position.z + 2];
                        rotation = [0, 0, 0];
                        break;
                    case "Back":
                        position = [_this.mesh.position.x, lineh, _this.mesh.position.z - 2];
                        rotation = [0, Math.PI, 0];
                        break;
                    case "Left":
                        position = [_this.mesh.position.x - 2, lineh, _this.mesh.position.z];
                        rotation = [0, 3 * Math.PI / 2, 0];
                        break;
                    case "Right":
                        position = [_this.mesh.position.x + 2, lineh, _this.mesh.position.z];
                        rotation = [0, Math.PI / 2, 0];
                        text_rotation = Math.PI;
                        break;
                }
                textPosition = [position[0], position[1] + 2, position[2]];
                break;
            case "height":
                lengthVal = _this.height;
                lineMesh = _this.mesh_Height_line;
                textMesh = _this.mesh_height;
                txtVal = _this.height;
                right = _this.height / 2;
                switch (_this.includedWall.swid) {
                    case "Front":
                        position = [_this.mesh.position.x + _this.width / 2 + 2, _this.mesh.position.y, _this.mesh.position.z + 2];
                        rotation = [0, 0, Math.PI / 2];
                        textPosition = [position[0] + 4, position[1], position[2]];
                        break;
                    case "Back":
                        position = [_this.mesh.position.x - _this.width / 2 - 2, _this.mesh.position.y, _this.mesh.position.z - 2];
                        rotation = [0, Math.PI, Math.PI / 2];
                        textPosition = [position[0] - 4, position[1], position[2]];
                        break;
                    case "Left":
                        position = [_this.mesh.position.x - 2, _this.mesh.position.y, _this.mesh.position.z + _this.width / 2 + 2];
                        rotation = [0, -Math.PI / 2, Math.PI / 2];
                        textPosition = [position[0], position[1], position[2] + 4];
                        break;
                    case "Right":
                        position = [_this.mesh.position.x + 2, _this.mesh.position.y, _this.mesh.position.z - _this.width / 2 - 2];
                        rotation = [0, Math.PI / 2, Math.PI / 2];
                        textPosition = [position[0], position[1], position[2] - 4];
                        break;
                }
                break
        }
        var left = -right;
        var line_points = [
            [left, 2, 0],
            [left, -2, 0],
            [left, 0, 0],
            [right, 0, 0],
            [right, 2, 0],
            [right, -2, 0]
        ];
        var line = DrawLine(line_points);
        lineMesh.geometry = line;
        lineMesh.position.set(position[0], position[1], position[2]);
        lineMesh.rotation.x = rotation[0];
        lineMesh.rotation.y = rotation[1];
        lineMesh.rotation.z = rotation[2];
        textMesh.geometry = new three.TextGeometry(txtVal, {
            font: _this.font,
            size: 2.5,
            height: 0.1
        });
        textMesh.position.set(textPosition[0], textPosition[1], textPosition[2]);
        textMesh.rotation.x = rotation[0];
        textMesh.rotation.y = rotation[1];
        textMesh.rotation.z = rotation[2]
    };
    this.update_dragable_dimension = function() {
        //this.UpdateDimensionType("width");
        //this.UpdateDimensionType("height");
        this.updateDistanceType("left");
        //this.updateDistanceType("bottom");
    };
    this.updateDistanceType = function(option) {
        var arrow_length = 0;
        var arrow_pos = null;
        var rotation = [0, 0, 0];
        var textPosition = 0;
        if (!_this.includedWall) {
            return
        }
        var distance_multiplier = 1;
        var mesh_arrow = _this.mesh_arrow_left;
        var mesh_text = _this.mesh_left;
        switch (option) {
            case "left":
                switch (_this.includedWall.swid) {
                    case "Front":
                        arrow_length = difference(-buildingConfig.w / 2, (_this.mesh.position.x - _this.width / 2));
                        arrow_pos = [-buildingConfig.w / 2 + arrow_length / 2, _this.mesh.position.y, _this.mesh.position.z + 2];
                        break;
                    case "Back":
                        arrow_length = difference(buildingConfig.w / 2, (_this.mesh.position.x + _this.width / 2));
                        arrow_pos = [buildingConfig.w / 2 - arrow_length / 2, _this.mesh.position.y, _this.mesh.position.z - 2];
                        rotation = [0, Math.PI, 0];
                        break;
                    case "Left":
                        arrow_length = difference(-buildingConfig.l, (_this.mesh.position.z - _this.width / 2));
                        arrow_pos = [_this.mesh.position.x - 2, _this.mesh.position.y, -buildingConfig.l + arrow_length / 2];
                        rotation = [0, 3 * Math.PI / 2, 0];
                        //distance_multiplier = 1.05882352941;
                        break;
                    case "Right":
                        arrow_length = difference(0, (_this.mesh.position.z + _this.width / 2));
                        arrow_pos = [_this.mesh.position.x + 2, _this.mesh.position.y, -arrow_length / 2];
                        rotation = [0, Math.PI / 2, 0];
                        //distance_multiplier = 1.05882352941;
                        break;
                }
                $('#space-'+_this.did).val(Math.round(arrow_length * distance_multiplier / 12));
                textPosition = [arrow_pos[0], arrow_pos[1] + 2, arrow_pos[2]];
                break;
            case "bottom":
                var mesh_arrow = _this.mesh_arrow_bottom;
                mesh_text = _this.mesh_bottom;
                mesh_arrow.visible = false;
                mesh_text.visible = false;
                if (label == windowDL) {
                    mesh_arrow.visible = true;
                    mesh_text.visible = true;
                }
                switch (_this.includedWall.swid) {
                    case "Front":
                        arrow_length = difference(0, (_this.mesh.position.y - _this.height / 2));
                        arrow_pos = [_this.mesh.position.x, arrow_length / 2, _this.mesh.position.z + 2];
                        rotation = [0, 0, Math.PI / 2];
                        textPosition = [arrow_pos[0] + 4, arrow_pos[1], arrow_pos[2]];
                        break;
                    case "Back":
                        arrow_length = difference(0, (_this.mesh.position.y - _this.height / 2));
                        arrow_pos = [_this.mesh.position.x, arrow_length / 2, _this.mesh.position.z - 2];
                        rotation = [0, Math.PI, Math.PI / 2];
                        textPosition = [arrow_pos[0] - 4, arrow_pos[1], arrow_pos[2] - 2];
                        break;
                    case "Left":
                        arrow_length = difference(0, (_this.mesh.position.y - _this.height / 2));
                        arrow_pos = [_this.mesh.position.x - 2, arrow_length / 2, _this.mesh.position.z];
                        rotation = [0, -Math.PI / 2, Math.PI / 2];
                        textPosition = [arrow_pos[0] - 2, arrow_pos[1], arrow_pos[2] + 4];
                        break;
                    case "Right":
                        arrow_length = difference(0, (_this.mesh.position.y - _this.height / 2));
                        arrow_pos = [_this.mesh.position.x + 2, arrow_length / 2, _this.mesh.position.z];
                        rotation = [0, Math.PI / 2, Math.PI / 2];
                        textPosition = [arrow_pos[0] + 2, arrow_pos[1], arrow_pos[2] - 4];
                        break;
                }
                break
        }
        var arrow_points = [
            [arrow_length / 2, 0, 0],
            [-arrow_length / 2, 0, 0],
            [-arrow_length / 2 + 5, 5, 0],
            [-arrow_length / 2, 0, 0],
            [-arrow_length / 2 + 5, -5, 0],
        ];
        var arrowLine = DrawLine(arrow_points);
        mesh_arrow.geometry = arrowLine;
        mesh_text.rotation.x = mesh_arrow.rotation.x = rotation[0];
        mesh_text.rotation.y = mesh_arrow.rotation.y = rotation[1];
        mesh_text.rotation.z = mesh_arrow.rotation.z = rotation[2];
        mesh_arrow.position.set(arrow_pos[0], arrow_pos[1], arrow_pos[2]);
        mesh_text.geometry = new three.TextGeometry(Math.round((arrow_length) * distance_multiplier), {
            font: _this.font,
            size: 2.5,
            height: 0.1
        });
        mesh_text.position.set(textPosition[0], textPosition[1], textPosition[2]);
    };
    this.getIncludedWall = function() {
        var vo = [];
        for (var i = 0; i < wallObjects.length; i++) {
            var wo = wallObjects[i];
            if ((wo.wallInstance instanceof SideWall && _this.mesh.rotation.y) || (wo.wallInstance instanceof LeantoSideWall && _this.mesh.rotation.y)) {
                vo.push(wo)
            } else if ((_this.mesh.rotation.y == 0 && ((wo.wallInstance instanceof boxEndWall && buildingConfig.RoofSyle == AFrameRoof) || (wo.wallInstance instanceof SEndWall && buildingConfig.RoofSyle == StandardRoof))) || (_this.mesh.rotation.y == 0 && ((wo.wallInstance instanceof LeantoEndWall)))) {
                vo.push(wo)
            }
        }
        var rtval = _this.isColliding(vo);
        return rtval;
    };
    this.setPosition = function(x, y, z, r) {
        _this.mesh.position.set(x, y, z);
        _this.mesh_wrapper.position.set(x, y + (this.tc - this.bc) / 2, z + 0.5);
        if (r != undefined) {
            this.mesh.rotation.y = r;
            this.mesh_wrapper.rotation.y = r;
        }
        _this.includedWall = _this.getIncludedWall();
        _this.updateWindowColumns();
    };
    this.resetPosition = function() {
        var p = this.oldPosition;
        this.setPosition(p.x, p.y, p.z, p.r);
    };
    this.get_corners = function(point, dir) {
        var w = this.width;
        var h = this.height;
        var lowerPoint = point.y - h / 2 + 0.4;
        var upperPoint = point.y + h / 2 - 0.4;
        if (dir.rotation) {
            var px = point.x + 1;
            if (point.x < 1) {
                px = point.x - 1
            }
            return [new three.Vector3(px, lowerPoint - this.bc, point.z - w / 2 - this.lc),
                new three.Vector3(px, upperPoint + this.tc, point.z - w / 2 - this.lc),
                new three.Vector3(px, lowerPoint - this.bc, point.z + w / 2 + this.rc),
                new three.Vector3(px, upperPoint + this.tc, point.z + w / 2 + this.rc)]
        }
        var zval = point.z + 2;
        if (point.z < -10) {
            zval = point.z - 2;
        }
        return [new three.Vector3(point.x - w / 2 - this.lc, lowerPoint - this.bc, zval),
            new three.Vector3(point.x - w / 2 - this.lc, upperPoint + this.tc, zval),
            new three.Vector3(point.x + w / 2 + this.rc, lowerPoint - this.bc, zval),
            new three.Vector3(point.x + w / 2 + this.rc, upperPoint + this.bc, zval)]
    };
    this.addToScreen = function() {
        this.addedtoscreen = true;
        buildingConfig.addonsObj[label].push(this);
        DragableObjectmap[this.did] = this;
        globals.scene.add(this.mesh);
        _this.dimensionGroup.add(_this.mesh_height);
        _this.dimensionGroup.add(_this.mesh_width);
        _this.dimensionGroup.add(_this.mesh_left);
        _this.dimensionGroup.add(_this.mesh_bottom);
        _this.dimensionGroup.add(_this.mesh_width_line);
        _this.dimensionGroup.add(_this.mesh_Height_line);
        _this.dimensionGroup.add(_this.mesh_arrow_left);
        _this.dimensionGroup.add(_this.mesh_arrow_bottom);
        globals.scene.add(_this.rightVColumnMesh);
        globals.scene.add(_this.leftVColumnMesh);
        if (label == windowDL) {
            //globals.scene.add(_this.botHColumnMesh);
        }
        if (label == rollupDL || label == rollFR) {
            globals.scene.add(_this.topHColumnMesh);
        }
        globals.scene.add(_this.rightmesh);
        globals.scene.add(_this.leftmesh);
        if (label == windowDL || label == doorDL) {
            globals.scene.add(_this.botmesh);
        }
        globals.scene.add(_this.topmesh);
        var widthval = this.width + `"x`;
        var heightwal = this.height + `"`;
        if (label == "rollup" || label == rollFR) {
            widthval = this.width / 12 + `'x`;
            heightwal = this.height / 12 + `'`;
        }
        $("#" + label + "_listing").append(`<div class="row mb-3" id="did_w-` + this.did + `">
        <div class="col-6">` + widthval + heightwal + `</div>
        <div class="col-6 text-right">
          <a class="ml-3 move_dob" did="` + this.did + `"><img src="icon/icon_move.svg" height="16px"></a>
          <a class="ml-3 remove_dob" did="` + this.did + `"><img src="icon/icon_delete.svg" height="16px"></a>
        </div>
        </div>
        <div class="row mb-3" id="did_s-` + drag_obj_id + `">
        <div class="col-6">Left Dist</div>
        <div class="col-6 d-flex justify-content-end align-self-center">
          <div class="quantity d-block">
            <input type="number" id="space-`+ this.did +`" did="` + this.did + `" step="1" min="1" max="49" value="" onchange="spaceRightFrom(this)">
            <div class="quantity-nav">
            <div class="quantity-button quantity-up"></div>
            <div class="quantity-button quantity-down"></div>
            </div>
          </div>
        </div>
      </div>
      `);
    };
    this.dispose = function() {
        trussList.forEach(function(child) {
            child.updateMesh();
        });
        removefromArray(buildingConfig.addonsObj[label], _this);
        globals.scene.remove(_this.dimensionGroup);
        globals.scene.remove(_this.mesh);
        globals.scene.remove(_this.mesh_wrapper);
        globals.scene.remove(_this.rightVColumnMesh);
        globals.scene.remove(_this.leftVColumnMesh);
        globals.scene.remove(_this.botHColumnMesh);
        globals.scene.remove(_this.topHColumnMesh);
        globals.scene.remove(_this.rightmesh);
        globals.scene.remove(_this.leftmesh);
        globals.scene.remove(_this.botmesh);
        globals.scene.remove(_this.topmesh);
        _this.dimensionGroup.remove(_this.mesh_width);
        _this.dimensionGroup.remove(_this.mesh_height);
        _this.dimensionGroup.remove(_this.mesh_width_line);
        _this.dimensionGroup.remove(_this.mesh_Height_line);
        _this.dimensionGroup.remove(_this.mesh_left);
        _this.dimensionGroup.remove(_this.mesh_bottom);
        _this.dimensionGroup.remove(_this.mesh_arrow_left);
        _this.dimensionGroup.remove(_this.mesh_arrow_bottom);
        _this.mesh.geometry.dispose();
        if (_this.mesh.material.map) {
            _this.mesh.material.map.dispose();
        }
        _this.mesh.material.dispose();
        _this.mesh_wrapper.geometry.dispose();
        _this.mesh_wrapper.material.dispose();
        if (_this.mesh_width) {
            _this.mesh_width.geometry.dispose();
            _this.mesh_width.material.dispose();
        }
        _this.mesh_height.geometry.dispose();
        _this.mesh_height.material.dispose();
        _this.mesh_width_line.geometry.dispose();
        _this.mesh_width_line.material.dispose();
        _this.mesh_Height_line.geometry.dispose();
        _this.mesh_Height_line.material.dispose();
        _this.mesh_left.geometry.dispose();
        _this.mesh_left.material.dispose();
        _this.mesh_bottom.geometry.dispose();
        _this.mesh_bottom.material.dispose();
        _this.mesh_arrow_left.geometry.dispose();
        _this.mesh_arrow_left.material.dispose();
        _this.mesh_arrow_bottom.geometry.dispose();
        _this.mesh_arrow_bottom.material.dispose();
        _this.rightVColumnMesh.geometry.dispose();
        _this.rightVColumnMesh.material.dispose();
        _this.leftVColumnMesh.geometry.dispose();
        _this.leftVColumnMesh.material.dispose();
        _this.botHColumnMesh.geometry.dispose();
        _this.botHColumnMesh.material.dispose();
        _this.topHColumnMesh.geometry.dispose();
        _this.topHColumnMesh.material.dispose();
        _this.rightmesh.geometry.dispose();
        _this.rightmesh.material.dispose();
        _this.leftmesh.geometry.dispose();
        _this.leftmesh.material.dispose();
        _this.botmesh.geometry.dispose();
        _this.botmesh.material.dispose();
        _this.topmesh.geometry.dispose();
        _this.topmesh.material.dispose();
        $("#did_w-" + this.did).remove();
        $("#did_s-" + this.did).remove();
        eventHandler.removeEventListener(widthChange, _this.updateMesh, _this.did);
        eventHandler.removeEventListener(lengthChange, _this.updateMesh, _this.did);
        eventHandler.removeEventListener(heightChange, _this.updateMesh, _this.did);
        eventHandler.removeEventListener(sideWallChange, _this.delayedUpdate, _this.did);
        eventHandler.removeEventListener(frontWallChange, _this.delayedUpdate, _this.did);
        eventHandler.removeEventListener(ltsideWallChange, _this.delayedUpdate, _this.did);
        eventHandler.removeEventListener(ltendWallChange, _this.delayedUpdate, _this.did);
        eventHandler.removeEventListener(showDimensions, _this.updateDimensionVisiblility, _this.did);
        eventHandler.addEventListener(encloseBuildingChange, _this.delayedUpdate, _this.did);
        if (this.addedtoscreen) {
            collisionObjects.pop(DragableObjectmap[parseInt($(_this).attr("did"))]);
        }
        delete DragableObjectmap[parseInt($(_this).attr("did"))];
    };
    this.isColliding = function(collisionObjects) {
        var dobox = new three.Box3().setFromObject(this.mesh_wrapper);
        for (var i = 0; i < collisionObjects.length; i++) {
            var cbox = new three.Box3().setFromObject(collisionObjects[i]);
            if (dobox.intersectsBox(cbox)) {
                return collisionObjects[i];
            }
        }
        return false
    };
    this.wrapCheck = function() {
        if ((_this.includedWall.name == "ltEndwall-Front" && (buildingConfig.frwrap == "frwrap" || buildingConfig.flwrap == "flwrap")) || (_this.includedWall.name == "ltEndwall-Back" && (buildingConfig.brwrap == "brwrap" || buildingConfig.blwrap == "blwrap")) || (_this.includedWall.name == "ltSideWall-Left" && (buildingConfig.flwrap == "flwrap" || buildingConfig.blwrap == "blwrap")) || (_this.includedWall.name == "ltSideWall-Right" && (buildingConfig.frwrap == "frwrap" || buildingConfig.brwrap == "flwrap"))) {
            customAlert("cannot have Doors and windows when wrap enabled");
            _this.dispose();
        }
    };
    this.wallCheck = function() {
        if ((!_this.includedWall) || (_this.includedWall.name == "AEndWall-Back" && buildingConfig.BacksideWallOption != wallClosed) || (_this.includedWall.name == "SEndWall-Back" && buildingConfig.BacksideWallOption != wallClosed) || (_this.includedWall.name == "AEndWall-Front" && buildingConfig.FrontsideWallOption != wallClosed) || (_this.includedWall.name == "SEndWall-Front" && buildingConfig.FrontsideWallOption != wallClosed) || (_this.includedWall.name == "SideWall-Right" && buildingConfig.RightsideWallOption != wallClosed) || (_this.includedWall.name == "SideWall-Left" && buildingConfig.LeftsideWallOption != wallClosed) || (_this.includedWall.name == "SideWall-Right" && buildingConfig.rightPartial) || (_this.includedWall.name == "SideWall-Left" && buildingConfig.leftPartial) || (_this.includedWall.name == "AEndWall-Back" && buildingConfig.backPartial) || (_this.includedWall.name == "AEndWall-Front" && buildingConfig.frontPartial) || (_this.includedWall.name == "ltEndwall-Front" && buildingConfig.ltFrontsideWallOption != wallClosed) || (_this.includedWall.name == "ltEndwall-Back" && buildingConfig.ltBacksideWallOption != wallClosed) || (_this.includedWall.name == "ltSideWall-Left" && buildingConfig.ltLeftsideWallOption != wallClosed) || (_this.includedWall.name == "ltSideWall-Right" && buildingConfig.ltRightsideWallOption != wallClosed)) {
            _this.dispose();
        }
    };
    this.leantoCheck = function() {
        if ((_this.includedWall.name == "ltEndwall-Front" && (buildingConfig.frwrap == "frwrap" || buildingConfig.flwrap == "flwrap")) || (_this.includedWall.name == "ltEndwall-Back" && (buildingConfig.brwrap == "brwrap" || buildingConfig.blwrap == "blwrap")) || (_this.includedWall.name == "ltSideWall-Left" && (buildingConfig.flwrap == "flwrap" || buildingConfig.blwrap == "blwrap")) || (_this.includedWall.name == "ltSideWall-Right" && (buildingConfig.frwrap == "frwrap" || buildingConfig.brwrap == "flwrap"))) {
            _this.dispose();
        }
    };
    this.delayedUpdate = function() {
        setTimeout(function() {
            _this.updateMesh();
            _this.wallCheck();
            //_this.leantoCheck();
        }, 10);
    };
    this.updateDimensionVisiblility = function() {
        _this.dimensionGroup.visible = false;
        if (buildingConfig.showDimensions == 1) {
            _this.dimensionGroup.visible = true;
        }
    };
    this.updateColor = function() {
        _this.topmesh.material.color = new three.Color(get_orientation_url(buildingConfig.trimColor, null, 2));
        _this.botmesh.material.color = new three.Color(get_orientation_url(buildingConfig.trimColor, null, 2));
        _this.leftmesh.material.color = new three.Color(get_orientation_url(buildingConfig.trimColor, null, 2));
        _this.rightmesh.material.color = new three.Color(get_orientation_url(buildingConfig.trimColor, null, 2));
    };
    eventHandler.addEventListener(widthChange, this.delayedUpdate, this.did);
    eventHandler.addEventListener(lengthChange, this.delayedUpdate, this.did);
    eventHandler.addEventListener(heightChange, this.delayedUpdate, this.did);
    eventHandler.addEventListener(sideWallChange, this.delayedUpdate, this.did);
    eventHandler.addEventListener(frontWallChange, this.delayedUpdate, this.did);
    eventHandler.addEventListener(ltsideWallChange, this.delayedUpdate, this.did);
    eventHandler.addEventListener(ltendWallChange, this.delayedUpdate, this.did);
    eventHandler.addEventListener(encloseBuildingChange, this.delayedUpdate, this.did);
    eventHandler.addEventListener(rightleantoAdd, this.delayedUpdate, this.did);
    eventHandler.addEventListener(leftleantoAdd, this.delayedUpdate, this.did);
    eventHandler.addEventListener(frontleantoAdd, this.delayedUpdate, this.did);
    eventHandler.addEventListener(backleantoAdd, this.delayedUpdate, this.did);
    eventHandler.addEventListener(showDimensions, this.updateDimensionVisiblility, this.did);
    eventHandler.addEventListener(roofStyleChange, this.delayedUpdate, this.did);
    eventHandler.addEventListener(trimColorChange, this.updateColor, this.did);
    eventHandler.addEventListener(rightleantoWidthChange, this.delayedUpdate, this.did);
    eventHandler.addEventListener(rightleantoHeightChange, this.delayedUpdate, this.did);
    eventHandler.addEventListener(rightleantoDropChange, this.delayedUpdate, this.did);
    eventHandler.addEventListener(rightleantoCut2, this.delayedUpdate, this.did);
    eventHandler.addEventListener(rightleantoCut1, this.delayedUpdate, this.did);
    eventHandler.addEventListener(leftleantoCut2, this.delayedUpdate, this.did);
    eventHandler.addEventListener(leftleantoCut1, this.delayedUpdate, this.did);
    eventHandler.addEventListener(leftleantoWidthChange, this.delayedUpdate, this.did);
    eventHandler.addEventListener(leftleantoHeightChange, this.delayedUpdate, this.did);
    eventHandler.addEventListener(leftleantoDropChange, this.delayedUpdate, this.did);
    eventHandler.addEventListener(frontleantoHeightChange, this.delayedUpdate, this.did);
    eventHandler.addEventListener(frontleantoWidthChange, this.delayedUpdate, this.did);
    eventHandler.addEventListener(frontleantoCut2, this.delayedUpdate, this.did);
    eventHandler.addEventListener(frontleantoCut1, this.delayedUpdate, this.did);
    eventHandler.addEventListener(frontleantoDropChange, this.delayedUpdate, this.did);
    eventHandler.addEventListener(backleantoCut1, this.delayedUpdate, this.did);
    eventHandler.addEventListener(backleantoCut2, this.delayedUpdate, this.did);
    eventHandler.addEventListener(backleantoHeightChange, this.delayedUpdate, this.did);
    eventHandler.addEventListener(backleantoWidthChange, this.delayedUpdate, this.did);
    eventHandler.addEventListener(backleantoDropChange, this.delayedUpdate, this.did);
    eventHandler.addEventListener(frontrightWrap, this.delayedUpdate, this.did);
    eventHandler.addEventListener(frontleftWrap, this.delayedUpdate, this.did);
    eventHandler.addEventListener(backrightWrap, this.delayedUpdate, this.did);
    eventHandler.addEventListener(backleftWrap, this.delayedUpdate, this.did);
}

function removefromArray(array, element) {
    var index = array.indexOf(element);
    if (index != -1) {
        array.splice(index, 1);
    }
}