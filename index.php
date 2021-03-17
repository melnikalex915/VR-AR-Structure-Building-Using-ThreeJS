<html lang="en">
    <head>
        <title>Carport</title>
        <style>
            body {
                font-family: Monospace;
                background-color: #f0f0f0;
                margin: 0px;
                overflow: hidden;
                overflow-y : auto;
            }

            .caption{
                padding: 1rem;
                color: white;
                background: black;
                font-size: 2rem;
                text-align:center;
            }
        </style>
        <link rel='dns-prefetch' href='//maxcdn.bootstrapcdn.com' />
        <link rel='stylesheet' id='sfwa_cdn_fontawesome-css'  href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css?ver=2.0.3' type='text/css' media='all' />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="css/main.css" type="text/css">
        <script src="js/jquery.js"></script>
        <script src="js/popper.min.js"></script>
        <script src="https://npmcdn.com/tether@1.2.4/dist/js/tether.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/bootbox.min.js"></script>
        <script src="js/three_o.js"></script>
        <script src="js/Tween.js"></script>
    </head>
    <body>
        <div id="body" class="container-fluid">
            <div class="row">
                <div class="col-md-3 build-price-left-panel border-right px-0">
                    <div class="faq measurements">
                        <div id="accordion" role="tablist" aria-multiselectable="true">
                            <div class="card">
                                <div class="card-header bg-danger"  role="tab" id="gaugeHeader">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#backgroundCollapse" aria-expanded="true" aria-controls="backgroundCollapse" class="collapsed">
                                        <p class="mb-0 font-montserrat-medium text-white font-weight-bold"> Background</p>
                                    </a>
                                </div>
                                <div id="backgroundCollapse" class="collapse" role="tabpanel" aria-labelledby="gaugeHeader">
                                    <div class="card-block">
                                        <div class="form-group">
                                            <select id="background_option" class="form-control" name="door" style="background-image: url(icon/icon_dropdown.svg);" onchange="onbackgroundChange()">
                                                <option value="0" selected="">Green Land</option>
                                                <option value="1">Rural</option>
                                                <option value="2">Western View</option>
                                                <option value="3">Winter</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="card-header">
                                            <p class="mb-0 font-montserrat-medium"> Installation Surface</p>
                                        </div>
                                        <div class="card-block">
                                            <div class="form-check"> <label class="form-check-label"> <input type="radio" class="form-check-input" name="frameTypes" id="floorOption1" value="default" onchange="onFloorChange(this)" checked=""> <span class="radio-text pl-2"> Ground</span> </label></div>
                                            <div class="form-check"> <label class="form-check-label"> <input type="radio" class="form-check-input" name="frameTypes" id="floorOption2" value="concrete" onchange="onFloorChange(this)"> <span class="radio-text pl-2"> Concrete</span> </label></div>
                                            <div class="form-check"> <label class="form-check-label"> <input type="radio" class="form-check-input" name="frameTypes" id="floorOption3" value="alphal" onchange="onFloorChange(this)"> <span class="radio-text pl-2"> Asphalt</span> </label></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header bg-danger" role="tab" id="gaugeHeader">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#gaugeCollapse" aria-expanded="true" aria-controls="gaugeCollapse" class="collapsed">
                                        <p class="mb-0 font-montserrat-medium text-white font-weight-bold"> Gauge <span class="icon-add float-right"></span></p>
                                    </a>
                                </div>
                                <div id="gaugeCollapse" class="collapse" role="tabpanel" aria-labelledby="gaugeHeader">
                                    <div class="card-block">
                                        <select id="pcountry" class="form-control" name="pcountry" onchange="gaugeOnChange(this)" style="background-image: url(icon/icon_dropdown.svg);">
                                            <option value="12">12 Gauge (heavy duty)</option>
                                            <option value="14" selected="">14 Gauge (economical)</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header bg-danger" role="tab" id="roofStyleHeader">
                                    <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#roofStyleCollapse" aria-expanded="false" aria-controls="roofStyleCollapse">
                                        <p class="mb-0 font-montserrat-medium text-white font-weight-bold"> Roof Style <span class="icon-add float-right"></span></p>
                                    </a>
                                </div>
                                <div id="roofStyleCollapse" class="collapse" role="tabpanel" aria-labelledby="roofStyleHeader">
                                    <div class="card-block">
                                        <div class="mb-3">
                                            <span class="mb-2 d-block">Frame Type</span>
                                            <div class="form-check">
                                                <label class="form-check-label">
                                                    <input type="radio" class="form-check-input" name="frameType" id="frameType1" value="0" onchange="roofstyle_onchange(this)">
                                                    <span class="radio-text pl-2">A-Frame</span>
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <label class="form-check-label">
                                                    <input type="radio" class="form-check-input" name="frameType" id="frameType2" value="1" onchange="roofstyle_onchange(this)" checked="">
                                                    <span class="radio-text pl-2">Standard</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="">
                                            <span class="mb-2 d-block">Siding Direction</span>
                                            <div class="form-check">
                                                <label class="form-check-label">
                                                    <input type="radio" class="form-check-input" name="sidingDirection" id="sidingDirection1" value="0" onchange="orientation_onchange(this)" oninput="orientation_onchange(this)" checked="checked">
                                                    <span class="radio-text pl-2">Horizontal</span>
                                                </label>
                                            </div>
                                            <div class="form-check mb-0">
                                                <label class="form-check-label">
                                                    <input type="radio" class="form-check-input" name="sidingDirection" id="sidingDirection2" value="1" disabled="false" onchange="orientation_onchange(this)" oninput="orientation_onchange(this)">
                                                    <span class="radio-text pl-2 v-disable" style="cursor: not-allowed;">Vertical</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header bg-danger" role="tab" id="dimensionsHeader">
                                    <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#dimensionsCollapse" aria-expanded="false" aria-controls="dimensionsCollapse">
                                        <p class="mb-0 font-montserrat-medium text-white font-weight-bold"> Dimensions <span class="icon-add float-right"></span></p>
                                    </a>
                                </div>
                                <div id="dimensionsCollapse" class="collapse" role="tabpanel" aria-labelledby="dimensionsHeader">
                                    <div class="card-block">
                                        <div class="form-group row">
                                            <label for="example-text-input" class="col-6 col-form-label align-self-center">Width</label>
                                            <div class="col-6 d-flex justify-content-end">
                                                <div class="quantity d-block">
                                                    <input id="widthRange" type="number" min="12" max="30" step="2" value="12" onchange="width_range_onchange(this, event)">
                                                    <div class="quantity-nav">
                                                        <div class="quantity-button quantity-up"></div>
                                                        <div class="quantity-button quantity-down"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="" class="col-6 col-form-label align-self-center">Length</label>
                                            <div class="col-6 d-flex justify-content-end">
                                                <div class="quantity d-block">
                                                    <input type="number" id="unitLength" min="20" max="50" value="20" step="1" onchange="length_range_onchange(this)">
                                                    <div class="quantity-nav">
                                                        <div class="quantity-button quantity-up"></div>
                                                        <div class="quantity-button quantity-down"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row mb-0">
                                            <label for="" class="col-6 col-form-label align-self-center">Height</label>
                                            <div class="col-6 d-flex justify-content-end">
                                                <div class="quantity d-block">
                                                    <input type="number" id="unitHeight" min="6" max="12" step="1" value="6" onchange="height_range_onchange(this)">
                                                    <div class="quantity-nav">
                                                        <div class="quantity-button quantity-up"></div>
                                                        <div class="quantity-button quantity-down"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header bg-danger" role="tab" id="wallStyleHeader">
                                    <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#wallStyleCollapse" aria-expanded="false" aria-controls="wallStyleCollapse">
                                        <p class="mb-0 font-montserrat-medium text-white font-weight-bold"> Wall Style <span class="icon-add float-right"></span></p>
                                    </a>
                                </div>
                                <div id="wallStyleCollapse" class="collapse" role="tabpanel" aria-labelledby="wallStyleHeader">
                                    <div class="card-block">
                                        <div class="form-group row">
                                            <label for="" class="col-6 mb-0">Fully Closed</label>
                                            <div class="col-6 d-flex justify-content-end align-self-center">
                                                <div class="switch">
                                                    <input type="checkbox" id="encloseBuilding" value="Enable" onchange="encloseBuilding(this)" class="switch-input">
                                                    <label for="encloseBuilding" class="switch-button"></label>
                                                    <label for="encloseBuilding" class="switch-circle"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label id="wallStyleLeft">Left Side</label>
                                            <select id="left_wall_type_inp" class="form-control" name="wallStyle" onchange="sideWallOnchange('Left')" oninput="sideWallOnchange('Left')" style="background-image: url(icon/icon_dropdown.svg);">
                                                <option value="1">Open</option>
                                                <option value="2">Partial</option>
                                                <option value="4">Partial - (3’ from bottom)</option>
                                                <option value="0">Closed</option>
                                            </select>
                                        </div>
                                        <div id="lsideOpt" style="display: none;">
                                            <div class="form-group row">
                                                <label for="" class="col-8 col-form-label align-self-center">Number of Panels</label>
                                                <div class="col-4 d-flex justify-content-end">
                                                    <div class="quantity d-block">
                                                        <input type="number" id="partial_wall_inp_left" min="1" step="1" value="1" onchange="sideWallOnchange('Left')" oninput="sideWallOnchange('Left')" max="2">
                                                        <div class="quantity-nav">
                                                            <div class="quantity-button quantity-up"></div>
                                                            <div class="quantity-button quantity-down"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="wallStyleRight">Right Side</label>
                                            <select id="right_wall_type_inp" class="form-control" name="wallStyle" onchange="sideWallOnchange('Right')" oninput="sideWallOnchange('Right')" style="background-image: url(icon/icon_dropdown.svg);">
                                                <option value="1">Open</option>
                                                <option value="2">Partial</option>
                                                <option value="4">Partial - (3’ from bottom)</option>
                                                <option value="0">Closed</option>
                                            </select>
                                        </div>
                                        <div id="rsideOpt" style="display: none;">
                                            <div class="form-group row> <label for=" "="">
                                            Number of Panels
                                            <div class="col-4 d-flex justify-content-end">
                                                <div class="quantity d-block">
                                                    <input type="number" id="partial_wall_inp_right" min="1" step="1" value="1" onchange="sideWallOnchange('Right')" oninput="sideWallOnchange('Right')" max="2">
                                                    <div class="quantity-nav">
                                                        <div class="quantity-button quantity-up"></div>
                                                        <div class="quantity-button quantity-down"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="">
                                        <span class="mb-2 d-block">Siding Direction</span>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input type="radio" class="form-check-input" id="sidewallOrientationH" name="sidewallOrientation" value="0" onchange="sidewallOrientation_onchange(this)" checked="checked">
                                                <span class="radio-text pl-2">Horizontal</span>
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input type="radio" class="form-check-input" id="sidewallOrientationV" name="sidewallOrientation" onchange="sidewallOrientation_onchange(this)" value="1" disabled="false">
                                                <span class="radio-text pl-2 v-disable-side" style="cursor: not-allowed;">Vertical</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="form-group ">
                                        <label for="endStyleFront">Front End</label>
                                        <select id="front_wall" onchange="front_wall_onchange(this)" oninput="front_wall_onchange(this)" class="form-control" name="endStyle" style="background-image: url(icon/icon_dropdown.svg);">
                                            <option value="1">Open</option>
                                            <option value="2">Gable</option>
                                            <option value="4">Partial - (3’ from bottom)</option>
                                            <option value="0">Closed</option>
                                        </select>
                                    </div>
                                    <div class="form-group ">
                                        <label for="endStyleBack">Back End</label>
                                        <select id="back_wall" onchange="back_wall_onchange(this)" oninput="back_wall_onchange(this)" class="form-control" name="endStyle" style="background-image: url(icon/icon_dropdown.svg);">
                                            <option value="1">Open</option>
                                            <option value="2">Gable</option>
                                            <option value="4">Partial - (3’ from bottom)</option>
                                            <option value="0">Closed</option>
                                        </select>
                                    </div>
                                    <div class="">
                                        <span class="mb-2 d-block">Siding Direction</span>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input type="radio" class="form-check-input" id="endwallOrientationH" name="endwallOrientation" onchange="endwallOrientation_onchange(this)" value="0" checked="">
                                                <span class="radio-text pl-2">Horizontal</span>
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input type="radio" class="form-check-input" id="endwallOrientationV" name="endwallOrientation" onchange="endwallOrientation_onchange(this)" value="1" disabled="false">
                                                <span class="radio-text pl-2 v-disable-side" style="cursor: not-allowed;">Vertical</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header bg-danger" role="tab" id="doorsWindowsHeader">
                                <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#doorsWindowsCollapse" aria-expanded="false" aria-controls="doorsWindowsCollapse">
                                    <p class="mb-0 font-montserrat-medium text-white font-weight-bold"> Doors &amp; Windows <span class="icon-add float-right"></span></p>
                                </a>
                            </div>
                            <div id="doorsWindowsCollapse" class="collapse" role="tabpanel" aria-labelledby="doorsWindowsHeader">
                                <div class="card-block">
                                    <div class="form-group row">
                                        <label for="" class="col-6 mb-0">Dimensions</label>
                                        <div class="col-6 d-flex justify-content-end align-self-center">
                                            <div class="switch">
                                                <input type="checkbox" id="Btnswitch" onchange="dragDimensionChange(this)" class="switch-input">
                                                <label for="Btnswitch" class="switch-button"></label>
                                                <label for="Btnswitch" class="switch-circle"></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <select id="door-position" class="form-control" name="door_side" style="background-image: url(icon/icon_dropdown.svg);" onchange="selectDoorSide(value)">
                                            <option value="">--</option>
                                            <option value="0">Front End</option>
                                            <option value="1">Back End</option>
                                            <option value="2">Left Side</option>
                                            <option value="3">Right Side</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="door">Walk-In Door</label>
                                        <select id="door" class="form-control door-disable" name="door" style="background-image: url(icon/icon_dropdown.svg);" onchange="createNewDobj(value)">
                                            <option value="">--</option>
                                            <option value="{&quot;label&quot;:&quot;door&quot;,&quot;width&quot;:&quot;36&quot;,&quot;height&quot;:&quot;72&quot;}">36”x72”</option>
                                            <option value="{&quot;label&quot;:&quot;door&quot;,&quot;width&quot;:&quot;36&quot;,&quot;height&quot;:&quot;80&quot;}">36”x80”</option>
                                        </select>
                                    </div>
                                    <div id="door_listing"></div>
                                    <div class="form-group">
                                        <label for="door_frameout">Walk Frameout</label>
                                        <select id="door_frameout" class="form-control door-disable" name="door" style="background-image: url(icon/icon_dropdown.svg);" onchange="createNewDobj(value)">
                                            <option value="">--</option>
                                            <option value="{&quot;label&quot;:&quot;doorfr&quot;,&quot;width&quot;:&quot;36&quot;,&quot;height&quot;:&quot;72&quot;}">36”x72”</option>
                                            <option value="{&quot;label&quot;:&quot;doorfr&quot;,&quot;width&quot;:&quot;36&quot;,&quot;height&quot;:&quot;80&quot;}">36”x80”</option>
                                        </select>
                                    </div>
                                    <div id="doorfr_listing"></div>
                                    <div class="form-group">
                                        <label for="rollup">Garage Door</label>
                                        <select id="rollup" class="form-control door-disable" name="door" style="background-image: url(icon/icon_dropdown.svg);" onchange="createNewDobj(value)" disabled="false">
                                            <option value="">--</option>
                                            <option value="{&quot;label&quot;:&quot;rollup&quot;,&quot;width&quot;:&quot;72&quot;,&quot;height&quot;:&quot;84&quot;}">6'x7'</option>
                                            <option value="{&quot;label&quot;:&quot;rollup&quot;,&quot;width&quot;:&quot;96&quot;,&quot;height&quot;:&quot;84&quot;}">8'x7'</option>
                                            <option value="{&quot;label&quot;:&quot;rollup&quot;,&quot;width&quot;:&quot;108&quot;,&quot;height&quot;:&quot;84&quot;}">9'x7'</option>
                                            <option value="{&quot;label&quot;:&quot;rollup&quot;,&quot;width&quot;:&quot;120&quot;,&quot;height&quot;:&quot;96&quot;}">10'x8'</option>
                                            <option value="{&quot;label&quot;:&quot;rollup&quot;,&quot;width&quot;:&quot;120&quot;,&quot;height&quot;:&quot;120&quot;}">10'x10'</option>
                                        </select>
                                    </div>
                                    <div id="rollup_listing"></div>
                                    <div class="form-group">
                                        <label for="roll_frameout">Custom Frameout</label>
                                        <select id="rollfr_width" class="form-control mb-0 door-disable" style="background-image: url(icon/icon_dropdown.svg);" onchange="createCustomFrameout(value)" disabled="false">
                                            <option value="">Width</option>
                                            <option value="5">5'</option>
                                            <option value="6">6'</option>
                                            <option value="7">7'</option>
                                            <option value="8">8'</option>
                                            <option value="9">9'</option>
                                            <option value="10">10'</option>
                                            <option value="11">11'</option>
                                            <option value="12">12'</option>
                                            <option value="13">13'</option>
                                            <option value="14">14'</option>
                                            <option value="15">15'</option>
                                            <option value="16">16'</option>
                                            <option value="17">17'</option>
                                            <option value="18">18'</option>
                                            <option value="19">19'</option>
                                            <option value="20">20'</option>
                                        </select> <br>
                                        <select id="rollfr_height" class="form-control mb-0 door-disable" style="background-image: url(icon/icon_dropdown.svg);" onchange="createCustomFrameout(value)" disabled="false">
                                            <option value="">Height</option>
                                            <option value="6">5'</option>
                                            <option value="6">6'</option>
                                            <option value="7">7'</option>
                                        </select>
                                    </div>
                                    <div id="rollfr_listing"></div>
                                    <div class="form-group">
                                        <label for="window">Window</label>
                                        <select id="window" class="form-control door-disable" name="door" style="background-image: url(icon/icon_dropdown.svg);" onchange="createNewDobj(value)" disabled="false">
                                            <option value="">--</option>
                                            <option value="{&quot;label&quot;:&quot;window&quot;,&quot;width&quot;:&quot;30&quot;,&quot;height&quot;:&quot;30&quot;}">30”x30”</option>
                                        </select>
                                    </div>
                                    <div id="window_listing"></div>
                                </div>
                            </div>
                        </div>
                        <div class="card ">
                            <div class="card-header bg-danger" role="tab" id="colorOptionsHeader">
                                <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#colorOptionsCollapse" aria-expanded="false" aria-controls="colorOptionsCollapse">
                                    <p class="mb-0 font-montserrat-medium text-white font-weight-bold"> Color Options <span class="icon-add float-right"></span></p>
                                </a>
                            </div>
                            <div id="colorOptionsCollapse" class="collapse" role="tabpanel" aria-labelledby="colorOptionsHeader">
                                <div class="card-block">
                                    <div class="form-group">
                                        <label for="colorOptionsRoof">Roof</label>
                                        <select id="roofColor" onchange="roofColorOnChange(this)" class="form-control" style="background-image: url(icon/icon_dropdown.svg);">
                                            <option value="black">Black</option>
                                            <option value="evergreen">Evergreen</option>
                                            <option value="quaker-gray">Quaker Gray</option>
                                            <option value="clay">Clay</option>
                                            <option value="earthbrown" selected="">Earth Brown</option>
                                            <option value="pebble-beige">Pebble Beige</option>
                                            <option value="slateblue">Slate Blue</option>
                                            <option value="barn-red">Barn Red</option>
                                            <option value="burgundy">Burgundy</option>
                                            <option value="pewter-gray">Pewter Gray</option>
                                            <option value="rawhide">Raw Hide</option>
                                            <option value="white">White</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="colorOptionsRidgeCap">Ridge Cap</label>
                                        <select id="ridgeColor" onchange="ridgeColorOnChange(this)" class="form-control" style="background-image: url(icon/icon_dropdown.svg);">
                                            <option value="black">Black</option>
                                            <option value="evergreen">Evergreen</option>
                                            <option value="quaker-gray">Quaker Gray</option>
                                            <option value="clay">Clay</option>
                                            <option value="earthbrown" selected="">Earth Brown</option>
                                            <option value="pebble-beige">Pebble Beige</option>
                                            <option value="slateblue">Slate Blue</option>
                                            <option value="barn-red">Barn Red</option>
                                            <option value="burgundy">Burgundy</option>
                                            <option value="pewter-gray">Pewter Gray</option>
                                            <option value="rawhide">Raw Hide</option>
                                            <option value="white">White</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="colorOptionsTrim">Trim</label>
                                        <select id="trimColor" onchange="trimColorOnChange(this)" class="form-control" style="background-image: url(icon/icon_dropdown.svg);">
                                            <option value="black">Black</option>
                                            <option value="evergreen">Evergreen</option>
                                            <option value="quaker-gray">Quaker Gray</option>
                                            <option value="clay">Clay</option>
                                            <option value="earthbrown" selected="">Earth Brown</option>
                                            <option value="pebble-beige">Pebble Beige</option>
                                            <option value="slateblue">Slate Blue</option>
                                            <option value="barn-red">Barn Red</option>
                                            <option value="burgundy">Burgundy</option>
                                            <option value="pewter-gray">Pewter Gray</option>
                                            <option value="rawhide">Raw Hide</option>
                                            <option value="white">White</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="colorOptionsSideWalls">Side Walls</label>
                                        <select id="sidewallColor" onchange="sidewallColorOnChange(this)" class="form-control" style="background-image: url(icon/icon_dropdown.svg);">
                                            <option value="black">Black</option>
                                            <option value="evergreen">Evergreen</option>
                                            <option value="quaker-gray">Quaker Gray</option>
                                            <option value="clay">Clay</option>
                                            <option value="earthbrown" selected="">Earth Brown</option>
                                            <option value="pebble-beige">Pebble Beige</option>
                                            <option value="slateblue">Slate Blue</option>
                                            <option value="barn-red">Barn Red</option>
                                            <option value="burgundy">Burgundy</option>
                                            <option value="pewter-gray">Pewter Gray</option>
                                            <option value="rawhide">Raw Hide</option>
                                            <option value="white">White</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="colorOptionsEnd">End Walls</label>
                                        <select id="endwallColor" onchange="endwallColorOnChange(this)" class="form-control" style="background-image: url(icon/icon_dropdown.svg);">
                                            <option value="black">Black</option>
                                            <option value="evergreen">Evergreen</option>
                                            <option value="quaker-gray">Quaker Gray</option>
                                            <option value="clay">Clay</option>
                                            <option value="earthbrown" selected="">Earth Brown</option>
                                            <option value="pebble-beige">Pebble Beige</option>
                                            <option value="slateblue">Slate Blue</option>
                                            <option value="barn-red">Barn Red</option>
                                            <option value="burgundy">Burgundy</option>
                                            <option value="pewter-gray">Pewter Gray</option>
                                            <option value="rawhide">Raw Hide</option>
                                            <option value="white">White</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-9 px-0">
                <div class="tool-holder" id="tool-holder">
                    <button class="btn btn-info my-2 my-sm-0 ml-2 d-none" id="frontId" onclick="setFrontside(this);" style="position: absolute; top :10px; right :1rem; color: #ffffff;">Front View</button>
                    <button class="btn btn-info my-2 my-sm-0 ml-2 d-none" id="frontId" onclick="setBackside(this);" style="position: absolute; top :50px; right :1rem; color: #ffffff;">Back View</button>
                    <button class="btn btn-info my-2 my-sm-0 ml-2 d-none" id="frontId" onclick="setLeftside(this);" style="position: absolute; top :90px; right :1rem; color: #ffffff;">Left View</button>
                    <button class="btn btn-info my-2 my-sm-0 ml-2 d-none" id="frontId" onclick="setRightside(this);" style="position: absolute; top :130px; right :1rem; color: #ffffff;">Right View</button>
                    <button class="btn btn-info my-2 my-sm-0 ml-2" onclick="take_picture(this);" style="position: absolute; top :10px; right :1rem; color: #ffffff;">Get Images</button>
                </div>
                <div id="take-images" class="row" style="margin: 0px;"></div>
                <div class="tool-content d-none">
                    <ul class="list-inline d-flex flex-row mb-0 text-scrollable-x">
                        <li>
                            <h5 class="font-montserrat-medium" id="widthValue">12’</h5>
                            <p class="mb-0">Width</p>
                        </li>
                        <li>
                            <h5 class="font-montserrat-medium" id="lengthValue">20’</h5>
                            <p class="mb-0">Length</p>
                        </li>
                        <li>
                            <h5 class="font-montserrat-medium" id="heightValue">6’</h5>
                            <p class="mb-0">Height</p>
                        </li>
                        <li>
                            <h5 class="font-montserrat-medium" id="gaugeValue">14</h5>
                            <p class="mb-0">Guage</p>
                        </li>
                        <li>
                            <h5 class="font-montserrat-medium" id="doorNo">0</h5>
                            <p class="mb-0">Doors</p>
                        </li>
                        <li>
                            <h5 class="font-montserrat-medium" id="windowNo">0</h5>
                            <p class="mb-0">Windows</p>
                        </li>
                    </ul>
                </div>
                <div class="tool-descriptions d-none">
                    <div class="row m-0">
                        <div class="col-sm-12 col-md-6 col-lg-6">
                            <div class="row m-0">
                                <div class="col-sm-12 col-md-5 col-lg-5 px-0 py-2 border-right">
                                    <span class="text-danger toll-free-number" id="price_result">$1025.00</span>
                                </div>
                                <div class="col-sm-12 col-md-7 col-lg-7 px-1 py-2 align-self-center border-right">
                                    <span><b>$<span id="downpayment">102.50</span> </b>Down Payment today</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-6 px-0 py-2 align-self-center">
                            <b class="text-danger">Installation and Delivery included!</b>
                            <button class="btn btn-info my-2 my-sm-0 ml-3 request-quote-btn" onclick="displayFinalStatus()" id="onRequestFetchPrice">Request Quote</button>
                        </div>
                        <script>
                            $("#onRequestFetchPrice").click(function() {
                                setTimeout(() => {
                                    $('html,body').animate({
                                        scrollTop: $("#request-form").offset().top
                                    }, 200);
                                });
                            });
                        </script>
                    </div>
                </div>
                <div class='dragalert mx-auto alert-danger' id='dragAlert'>
                    <span><small><strong>Can not place Door/Window on here.</strong></small> </span>
                </div>
            </div>
        </div>
        </div>
        <script>
            var three = THREE;
            var insideView = true;
            var buildingConfig = null;
            var templateUrl = '/carport';
            var price_data = {
                "gauge": {
                    "14-12-20":1025, "14-12-25":1230, "14-12-30":1495, "14-12-35":1750, "14-12-40":2055, "14-12-45":2260,
                    "14-12-50":2465, "14-18-20":1225, "14-18-25":1390, "14-18-30":1645, "14-18-35":1900, "14-18-40":2465,
                    "14-18-45":2620, "14-18-50":2775, "14-20-20":1485, "14-20-25":1650, "14-20-30":2005, "14-20-35":2370,
                    "14-20-40":2975, "14-20-45":3130, "14-20-50":3285, "14-22-20":1645, "14-22-25":2010, "14-22-30":2365,
                    "14-22-35":2730, "14-22-40":3285, "14-22-45":3650, "14-22-50":4005, "14-24-20":1745, "14-24-25":2110,
                    "14-24-30":2575, "14-24-35":2930, "14-24-40":3495, "14-24-45":3850, "14-24-50":4215, "14-26-20":2365,
                    "14-26-25":2930, "14-26-30":3495, "14-26-35":4070, "14-26-40":4735, "14-26-45":5300, "14-26-50":5865,
                    "14-28-20":2465, "14-28-25":3040, "14-28-30":3605, "14-28-35":4270, "14-28-40":4935, "14-28-45":5500,
                    "14-28-50":6065, "14-30-20":2565, "14-30-25":3240, "14-30-30":3915, "14-30-35":4580, "14-30-40":5145,
                    "14-30-45":5810, "14-30-50":6485, "12-12-20":1235, "12-12-25":1490, "12-12-30":1795, "12-12-35":2110,
                    "12-12-40":2465, "12-12-45":2720, "12-12-50":2975, "12-18-20":1435, "12-18-25":1650, "12-18-30":1955,
                    "12-18-35":2260, "12-18-40":2875, "12-18-45":3080, "12-18-50":3285, "12-20-20":1745, "12-20-25":1950,
                    "12-20-30":2365, "12-20-35":2780, "12-20-40":3445, "12-20-45":3650, "12-20-50":3855, "12-22-20":1905,
                    "12-22-25":2310, "12-22-30":2725, "12-22-35":3140, "12-22-40":3755, "12-22-45":4160, "12-22-50":4575,
                    "12-24-20":2005, "12-24-25":2420, "12-24-30":2935, "12-24-35":3340, "12-24-40":3955, "12-24-45":4370,
                    "12-24-50":4785, "12-26-20":2775, "12-26-25":3430, "12-26-30":4085, "12-26-35":4740, "12-26-40":5495,
                    "12-26-45":6150, "12-26-50":6795, "12-28-20":2885, "12-28-25":3540, "12-28-30":4185, "12-28-35":4950,
                    "12-28-40":5695, "12-28-45":6350, "12-28-50":6995, "12-30-20":2985, "12-30-25":3740, "12-30-30":4495,
                    "12-30-35":5260, "12-30-40":5905, "12-30-45":6660, "12-30-50":7405 },
                "A-frame": {
                    "A-Frame_Vertical-12-20":325,"A-Frame_Vertical-12-25":425,"A-Frame_Vertical-12-30":525,
                    "A-Frame_Vertical-12-35":625,"A-Frame_Vertical-12-40":725,"A-Frame_Vertical-12-45":825,
                    "A-Frame_Vertical-12-50":925,"A-Frame_Vertical-18-20":325,"A-Frame_Vertical-18-25":425,
                    "A-Frame_Vertical-18-30":525,"A-Frame_Vertical-18-35":625,"A-Frame_Vertical-18-40":725,
                    "A-Frame_Vertical-18-45":825,"A-Frame_Vertical-18-50":925,"A-Frame_Vertical-20-20":425,
                    "A-Frame_Vertical-20-25":550,"A-Frame_Vertical-20-30":675,"A-Frame_Vertical-20-35":800,
                    "A-Frame_Vertical-20-40":925,"A-Frame_Vertical-20-45":1050,"A-Frame_Vertical-20-50":1175,
                    "A-Frame_Vertical-22-20":425,"A-Frame_Vertical-22-25":550,"A-Frame_Vertical-22-30":675,
                    "A-Frame_Vertical-22-35":800,"A-Frame_Vertical-22-40":925,"A-Frame_Vertical-22-45":1050,
                    "A-Frame_Vertical-22-50":1175,"A-Frame_Vertical-24-20":525,"A-Frame_Vertical-24-25":675,
                    "A-Frame_Vertical-24-30":825,"A-Frame_Vertical-24-35":975,"A-Frame_Vertical-24-40":1125,
                    "A-Frame_Vertical-24-45":1275,"A-Frame_Vertical-24-50":1425,"A-Frame_Vertical-26-20":575,
                    "A-Frame_Vertical-26-25":725,"A-Frame_Vertical-26-30":875,"A-Frame_Vertical-26-35":1025,
                    "A-Frame_Vertical-26-40":1175,"A-Frame_Vertical-26-45":1325,"A-Frame_Vertical-26-50":1475,
                    "A-Frame_Vertical-28-20":575,"A-Frame_Vertical-28-25":725,"A-Frame_Vertical-28-30":875,
                    "A-Frame_Vertical-28-35":1025,"A-Frame_Vertical-28-40":1175,"A-Frame_Vertical-28-45":1325,
                    "A-Frame_Vertical-28-50":1475,"A-Frame_Vertical-30-20":575,"A-Frame_Vertical-30-25":725,
                    "A-Frame_Vertical-30-30":875,"A-Frame_Vertical-30-35":1025,"A-Frame_Vertical-30-40":1175,
                    "A-Frame_Vertical-30-45":1325,"A-Frame_Vertical-30-50":1475,"A-Frame_Horizontal-12-20":100,
                    "A-Frame_Horizontal-12-25":125,"A-Frame_Horizontal-12-30":150,"A-Frame_Horizontal-12-35":175,
                    "A-Frame_Horizontal-12-40":200,"A-Frame_Horizontal-12-45":225,"A-Frame_Horizontal-12-50":250,
                    "A-Frame_Horizontal-18-20":100,"A-Frame_Horizontal-18-25":125,"A-Frame_Horizontal-18-30":150,
                    "A-Frame_Horizontal-18-35":175,"A-Frame_Horizontal-18-40":200,"A-Frame_Horizontal-18-45":225,
                    "A-Frame_Horizontal-18-50":250,"A-Frame_Horizontal-20-20":100,"A-Frame_Horizontal-20-25":125,
                    "A-Frame_Horizontal-20-30":150,"A-Frame_Horizontal-20-35":175,"A-Frame_Horizontal-20-40":200,
                    "A-Frame_Horizontal-20-45":225,"A-Frame_Horizontal-20-50":250,"A-Frame_Horizontal-22-20":100,
                    "A-Frame_Horizontal-22-25":125,"A-Frame_Horizontal-22-30":150,"A-Frame_Horizontal-22-35":175,
                    "A-Frame_Horizontal-22-40":200,"A-Frame_Horizontal-22-45":225,"A-Frame_Horizontal-22-50":250,
                    "A-Frame_Horizontal-24-20":100,"A-Frame_Horizontal-24-25":125,"A-Frame_Horizontal-24-30":150,
                    "A-Frame_Horizontal-24-35":175,"A-Frame_Horizontal-24-40":200,"A-Frame_Horizontal-24-45":225,
                    "A-Frame_Horizontal-24-50":250,"A-Frame_Horizontal-26-20":100,"A-Frame_Horizontal-26-25":125,
                    "A-Frame_Horizontal-26-30":150,"A-Frame_Horizontal-26-35":175,"A-Frame_Horizontal-26-40":200,
                    "A-Frame_Horizontal-26-45":225,"A-Frame_Horizontal-26-50":250,"A-Frame_Horizontal-28-20":100,
                    "A-Frame_Horizontal-28-25":125,"A-Frame_Horizontal-28-30":150,"A-Frame_Horizontal-28-35":175,
                    "A-Frame_Horizontal-28-40":200,"A-Frame_Horizontal-28-45":225,"A-Frame_Horizontal-28-50":250,
                    "A-Frame_Horizontal-30-20":100,"A-Frame_Horizontal-30-25":125,"A-Frame_Horizontal-30-30":150,
                    "A-Frame_Horizontal-30-35":175,"A-Frame_Horizontal-30-40":200,"A-Frame_Horizontal-30-45":225,
                    "A-Frame_Horizontal-30-50":250},
                "C_height_std":{
                    "6-20":0,"6-25":0,"6-30":0,"6-35":0,"6-40":0,"6-45":0,"6-50":0,"7-20":85,"7-25":100,"7-30":115,
                    "7-35":130,"7-40":145,"7-45":160,"7-50":175,"8-20":145,"8-25":175,"8-30":205,"8-35":235,"8-40":265,
                    "8-45":295,"8-50":325,"9-20":205,"9-25":250,"9-30":295,"9-35":340,"9-40":385,"9-45":430,"9-50":475,
                    "10-20":265,"10-25":325,"10-30":385,"10-35":445,"10-40":505,"10-45":565,"10-50":625,"11-20":325,
                    "11-25":400,"11-30":475,"11-35":550,"11-40":625,"11-45":700,"11-50":775,"12-20":385,"12-25":475,
                    "12-30":565,"12-35":655,"12-40":745,"12-45":835,"12-50":925},
                "h_closed_sides_std":{
                    "6-20":400,"6-25":485,"6-30":580,"6-35":685,"6-40":800,"6-45":860,"6-50":945,"7-20":460,"7-25":565,
                    "7-30":680,"7-35":805,"7-40":940,"7-45":1000,"7-50":1105,"8-20":525,"8-25":650,"8-30":785,"8-35":930,
                    "8-40":1085,"8-45":1150,"8-50":1275,"9-20":590,"9-25":735,"9-30":890,"9-35":1055,"9-40":1230,
                    "9-45":1300,"9-50":1445,"10-20":660,"10-25":825,"10-30":1000,"10-35":1185,"10-40":1380,"10-45":1460,
                    "10-50":1625,"11-20":730,"11-25":915,"11-30":1110,"11-35":1315,"11-40":1530,"11-45":1620,"11-50":1805,
                    "12-20":805,"12-25":1010,"12-30":1225,"12-35":1450,"12-40":1685,"12-45":1790,"12-50":1995},
                "h_closed_sides_3wide":{
                    "6-20":400,"6-25":485,"6-30":580,"6-35":686,"6-40":800,"6-45":860,"6-50":945,"7-20":460,"7-25":565,
                    "7-30":680,"7-35":805,"7-40":940,"7-45":1000,"7-50":1105,"8-20":525,"8-25":650,"8-30":786,"8-35":930,
                    "8-40":1085,"8-45":1150,"8-50":1275,"9-20":590,"9-25":735,"9-30":890,"9-35":1055,"9-40":1230,
                    "9-45":1300,"9-50":1445,"10-20":660,"10-25":825,"10-30":1000,"10-35":1185,"10-40":1380,"10-45":1460,
                    "10-50":1625,"11-20":730,"11-25":915,"11-30":1110,"11-35":1315,"11-40":1530,"11-45":1620,"11-50":1805,
                    "12-20":805,"12-25":1010,"12-30":1225,"12-35":1450,"12-40":1685,"12-45":1790,"12-50":1995},
                "v_closed_sides_std":{
                    "6-20":200,"6-25":250,"6-30":300,"6-35":350,"6-40":400,"6-45":450,"6-50":500,"7-20":200,"7-25":250,
                    "7-30":300,"7-35":350,"7-40":400,"7-45":450,"7-50":500,"8-20":200,"8-25":250,"8-30":300,"8-35":350,
                    "8-40":400,"8-45":450,"8-50":500,"9-20":200,"9-25":250,"9-30":300,"9-35":350,"9-40":400,"9-45":450,
                    "9-50":500,"10-20":200,"10-25":250,"10-30":300,"10-35":350,"10-40":400,"10-45":450,"10-50":500,
                    "11-20":200,"11-25":250,"11-30":300,"11-35":350,"11-40":400,"11-45":450,"11-50":500,"12-20":200,
                    "12-25":250,"12-30":300,"12-35":350,"12-40":400,"12-45":450,"12-50":500},
                "h_closed_ends_std":{
                    "12-6":460,"18-6":590,"20-6":645,"22-6":790,"24-6":825,"26-6":1075,"28-6":1190,"30-6":1305,"12-7":545,
                    "18-7":650,"20-7":710,"22-7":860,"24-7":905,"26-7":1160,"28-7":1280,"30-7":1400,"12-8":575,"18-8":720,
                    "20-8":785,"22-8":945,"24-8":995,"26-8":1245,"28-8":1370,"30-8":1495,"12-9":605,"18-9":800,"20-9":870,
                    "22-9":1045,"24-9":1095,"26-9":1330,"28-9":1460,"30-9":1590,"12-10":695,"18-10":890,"20-10":965,
                    "22-10":1160,"24-10":1205,"26-10":1415,"28-10":1550,"30-10":1685,"12-11":755,"18-11":990,"20-11":1070,
                    "22-11":1290,"24-11":1325,"26-11":1500,"28-11":1640,"30-11":1780,"12-12":815,"18-12":1100,"20-12":1185,
                    "22-12":1435,"24-12":1455,"26-12":1585,"28-12":1730,"30-12":1875},
                "h_closed_ends_3Wide":{
                    "12-6":460,"18-6":590,"20-6":645,"22-6":790,"24-6":825,"26-6":1075,"28-6":1190,"30-6":1305,"12-7":545,
                    "18-7":650,"20-7":710,"22-7":860,"24-7":905,"26-7":1160,"28-7":1280,"30-7":1400,"12-8":575,"18-8":720,
                    "20-8":785,"22-8":945,"24-8":995,"26-8":1245,"28-8":1370,"30-8":1495,"12-9":605,"18-9":800,"20-9":870,
                    "22-9":1045,"24-9":1095,"26-9":1330,"28-9":1460,"30-9":1590,"12-10":695,"18-10":890,"20-10":965,
                    "22-10":1160,"24-10":1205,"26-10":1415,"28-10":1550,"30-10":1685,"12-11":755,"18-11":990,"20-11":1070,
                    "22-11":1290,"24-11":1325,"26-11":1500,"28-11":1640,"30-11":1780,"12-12":815,"18-12":1100,"20-12":1185,
                    "22-12":1435,"24-12":1455,"26-12":1585,"28-12":1730,"30-12":1875},
                "v_closed_ends_std":{
                    "12-6":100,"18-6":200,"20-6":250,"22-6":300,"24-6":350,"12-7":100,"18-7":200,"20-7":250,"22-7":300,
                    "24-7":350,"12-8":100,"18-8":200,"20-8":250,"22-8":300,"24-8":350,"12-9":100,"18-9":200,"20-9":250,
                    "22-9":300,"24-9":350,"12-10":100,"18-10":200,"20-10":250,"22-10":300,"24-10":350,"12-11":100,"18-11":200,
                    "20-11":250,"22-11":300,"24-11":350,"12-12":100,"18-12":200,"20-12":250,"22-12":300,"24-12":350},
                "windows-doors":{
                    "Walk-in_Door-36-72-Endwall":250,"Walk-in_Door-36-72-Sidewall":250,"Walk-in_Door-36-80-Endwall":300,
                    "Walk-in_Door-36-80-Sidewall":300,"Walk-in_Door-36-84-Endwall":795,"Walk-in_Door-36-84-Sidewall":795,
                    "Walk-in_Door-48-84-Endwall":895,"Walk-in_Door-48-84-Sidewall":895,"Roll-up_Door-6-7-Endwall":365,
                    "Roll-up_Door-6-7-Sidewall":515,"Roll-up_Door-8-7-Endwall":500,"Roll-up_Door-8-7-Sidewall":650,
                    "Roll-up_Door-9-7-Endwall":525,"Roll-up_Door-9-7-Sidewall":675,"Roll-up_Door-10-8-Endwall":575,
                    "Roll-up_Door-10-8-Sidewall":725,"Roll-up_Door-10-10-Endwall":700,"Roll-up_Door-10-10-Sidewall":850,
                    "Windows-30-30-Endwall":150,"Windows-30-30-Sidewall":150,"Windows_on_Vertical_Sides-30-30-NA":200},
                "gable": {
                    "12-Std":200,"18-Std":200,"20-Std":200,"22-Std":200,"24-Std":200,"26-Std":300,"28-Std":300,"30-Std":300,
                    "12-Vertical":250,"18-Vertical":250,"20-Vertical":250,"22-Vertical":250,"24-Vertical":250,
                    "26-Vertical":400,"28-Vertical":400,"30-Vertical":400},
                "Addons":{
                    "Extra_Sheet_Metal--21-":105,"Extra_Sheet_Metal--26-":125,"Extra_Sheet_Metal--31-":145,
                    "Extra_Trusses-12--6":175,"Extra_Trusses-18--6":175,"Extra_Trusses-20--6":175,"Extra_Trusses-22--6":175,
                    "Extra_Trusses-24--6":175,"Extra_Trusses-26--6":275,"Extra_Trusses-28--6":275,"Extra_Trusses-30--6":275,
                    "Extra_Trusses-12--7":175,"Extra_Trusses-18--7":175,"Extra_Trusses-20--7":175,"Extra_Trusses-22--7":175,
                    "Extra_Trusses-24--7":175,"Extra_Trusses-26--7":275,"Extra_Trusses-28--7":275,"Extra_Trusses-30--7":275,
                    "Extra_Trusses-12--8":175,"Extra_Trusses-18--8":175,"Extra_Trusses-20--8":175,"Extra_Trusses-22--8":175,
                    "Extra_Trusses-24--8":175,"Extra_Trusses-26--8":275,"Extra_Trusses-28--8":275,"Extra_Trusses-30--8":275,
                    "Extra_Trusses-12--9":175,"Extra_Trusses-18--9":175,"Extra_Trusses-20--9":175,"Extra_Trusses-22--9":175,
                    "Extra_Trusses-24--9":175,"Extra_Trusses-26--9":275,"Extra_Trusses-28--9":275,"Extra_Trusses-30--9":275,
                    "Extra_Trusses-12--10":175,"Extra_Trusses-18--10":175,"Extra_Trusses-20--10":175,
                    "Extra_Trusses-22--10":175,"Extra_Trusses-24--10":175,"Extra_Trusses-26--10":275,
                    "Extra_Trusses-28--10":275,"Extra_Trusses-30--10":275,"Extra_Trusses-12--11":175,
                    "Extra_Trusses-18--11":175,"Extra_Trusses-20--11":175,"Extra_Trusses-22--11":175,
                    "Extra_Trusses-24--11":175,"Extra_Trusses-26--11":275,"Extra_Trusses-28--11":275,
                    "Extra_Trusses-30--11":275,"Extra_Trusses-12--12":175,"Extra_Trusses-18--12":175,
                    "Extra_Trusses-20--12":175,"Extra_Trusses-22--12":175,"Extra_Trusses-24--12":175,
                    "Extra_Trusses-26--12":275,"Extra_Trusses-28--12":275,"Extra_Trusses-30--12":275,
                    "Colored_Screws---":null,"Roof_insulation---":null,"Full_insulation---":null},
                "Anchors":{
                    "Concrete":0,"Mobile_Home":30,"Asphalt":30},
                "vertical_sides_3wide":{
                    "6-20":200,"6-25":275,"6-30":300,"6-35":375,"6-40":400,"6-45":475,"6-50":500,"7-20":200,"7-25":275,
                    "7-30":300,"7-35":375,"7-40":400,"7-45":475,"7-50":500,"8-20":200,"8-25":275,"8-30":300,"8-35":375,
                    "8-40":400,"8-45":475,"8-50":500,"9-20":200,"9-25":275,"9-30":300,"9-35":375,"9-40":400,"9-45":475,
                    "9-50":500,"10-20":200,"10-25":275,"10-30":300,"10-35":375,"10-40":400,"10-45":475,"10-50":500,
                    "11-20":200,"11-25":275,"11-30":300,"11-35":375,"11-40":400,"11-45":475,"11-50":500,"12-20":200,
                    "12-25":275,"12-30":300,"12-35":375,"12-40":400,"12-45":475,"12-50":500},
                "vertical_closed_ends_3wide":{
                    "6-26":400,"6-28":450,"6-30":500,"7-26":400,"7-28":450,"7-30":500,"8-26":400,"8-28":450,"8-30":500,
                    "9-26":400,"9-28":450,"9-30":500,"10-26":400,"10-28":450,"10-30":500,"11-26":400,"11-28":450,
                    "11-30":500,"12-26":400,"12-28":450,"12-30":500},
                "carport_height_3wide":{
                    "6-20":0,"6-25":0,"6-30":0,"6-35":0,"6-40":0,"6-45":0,"6-50":0,"7-20":115,"7-25":135,"7-30":155,
                    "7-35":175,"7-40":195,"7-45":215,"7-50":235,"8-20":205,"8-25":245,"8-30":285,"8-35":325,"8-40":365,
                    "8-45":405,"8-50":445,"9-20":295,"9-25":355,"9-30":415,"9-35":475,"9-40":535,"9-45":595,"9-50":655,
                    "10-20":385,"10-25":465,"10-30":545,"10-35":625,"10-40":705,"10-45":785,"10-50":865,"11-20":475,
                    "11-25":575,"11-30":675,"11-35":775,"11-40":875,"11-45":975,"11-50":1075,"12-20":565,"12-25":685,
                    "12-30":805,"12-35":925,"12-40":1045,"12-45":1165,"12-50":1285}
            };
            var price_enums = {
                "14gauge":[14],
                "12gauge":[12],
                "width":[12,18,20,22,24],
                "height":[6,7,8,9,10,11,12],
                "length":[20,25,30,35,40,45,50],
                "roof type":["A-Frame Horizontal","A-Frame Vertical"],
                "wall type":["Closed","Open"],
                "gable type":["Std","Vertical"],
                "window door type":["Door","Rollup","Wndow"],
                "anchors type":["Asphalt","Concrete","Mobile Home"],
                "3 wide width":[26,28,30],
                "all width options":[12,18,20,22,24,26,28,30]};
            var backgrounds = [
                {
                    "name":"Green Land",
                    "active":"Yes",
                    "sky": templateUrl + "/img/sky2.png",
                    "land": templateUrl + "/img/land.jpeg",
                    "defaut":"Yes"
                },
                {
                    "name":"Rural",
                    "active":"Yes",
                    "sky": templateUrl + "/img/AdobeStock.jpeg",
                    "land": templateUrl + "/img/dirttexture.png",
                    "defaut":"No"
                },
                {
                    "name":"Western View",
                    "active":"Yes",
                    "sky": templateUrl + "/img/sky2.png",
                    "land": templateUrl + "/img/rockbasetexture.png",
                    "defaut":"No"
                },
                {
                    "name":"Winter",
                    "active":"Yes",
                    "sky": templateUrl + "/img/snowmountains.png",
                    "land": templateUrl + "/img/snowtexture.png",
                    "defaut":"No"
                }];
            var defBackgroundIndex = 0;
            var color = [
                {
                    "term_id":"134373",
                    "name":"barn-red",
                    "slug":"barn-red",
                    "term_group":"0",
                    "id":"134373",
                    "hex":"#943d2c"},
                {
                    "term_id":"134368",
                    "name":"black",
                    "slug":"black",
                    "term_group":"0",
                    "id":"134368",
                    "hex":"#1e1e1e"},
                {
                    "term_id":"134374",
                    "name":"burgundy",
                    "slug":"burgundy",
                    "term_group":"0",
                    "id":"134374",
                    "hex":"#472628"},
                {
                    "term_id":"134365",
                    "name":"clay",
                    "slug":"clay",
                    "term_group":"0",
                    "id":"134365",
                    "hex":"#84755e"},
                {
                    "term_id":"134371",
                    "name":"earth-brown",
                    "slug":"earth-brown",
                    "term_group":"0",
                    "id":"134371",
                    "hex":"#513b30"},
                {
                    "term_id":"134369",
                    "name":"evergreen",
                    "slug":"evergreen",
                    "term_group":"0",
                    "id":"134369",
                    "hex":"#1f421a"},
                {
                    "term_id":"134372",
                    "name":"pebble-beige",
                    "slug":"pebble-beige",
                    "term_group":"0",
                    "id":"134372",
                    "hex":"#c6c1ad"},
                {
                    "term_id":"134375",
                    "name":"pewter-gray",
                    "slug":"pewter-gray",
                    "term_group":"0",
                    "id":"134375",
                    "hex":"#9e9e9e"},
                {
                    "term_id":"134370",
                    "name":"quaker-gray",
                    "slug":"quaker-gray",
                    "term_group":"0",
                    "id":"134370",
                    "hex":"#666666"},
                {
                    "term_id":"134376",
                    "name":"rawhide",
                    "slug":"rawhide",
                    "term_group":"0",
                    "id":"134376",
                    "hex":"#ad9762"},
                {
                    "term_id":"134367",
                    "name":"slateblue",
                    "slug":"slate-blue",
                    "term_group":"0",
                    "id":"134367",
                    "hex":"#5b7284"},
                {
                    "term_id":"134377",
                    "name":"white",
                    "slug":"white",
                    "term_group":"0",
                    "id":"134377",
                    "hex":"#d6d6d6"}];
            var footerLogo = templateUrl + "";
            price_enums['all width options'].reverse(function(a, b){return b>a;});
            price_enums['length'].reverse(function(a, b){return b>a;});
            price_enums['height'].reverse(function(a, b){return b>a;});
            var widthoptions = price_enums['all width options'];
            var lengthOptions = price_enums['length'];
            var heightOptions = price_enums['height'];

            function getcbuildingConfig(){
                var cbuildingConfig = jQuery.extend(true, {}, buildingConfig);
                delete cbuildingConfig['addonsObj'];
                for(var addonType in buildingConfig.addonsObj){
                    // buildingConfig.addons[addonType] = [];
                    cbuildingConfig.addons[addonType] = [];
                    buildingConfig.addonsObj[addonType].forEach(function(de){
                        cbuildingConfig.addons[addonType].push({
                            "w": de.width,
                            "h": de.height,

                            "wall": de.includedWall.wid,

                            "p": {
                                "x": de.mesh.position.x,
                                "y": de.mesh.position.y,
                                "z": de.mesh.position.z,
                                "r": de.mesh.rotation.y
                            }
                        });
                    })
                }
                return cbuildingConfig;
            }
        </script>
        <script src="js/custom_orbit_controls.js"></script>
        <script src="js/custom_obj_loader.js"></script>
        <script src="js/custom_store.js"></script>
        <script src="js/custom_event.js"></script>
        <script src="js/custom_hatChannel.js"></script>
        <script src="js/custom_building.js"></script>
        <script>
            init();
            animate();
            updateValue();
            loadSky();
            loadLand();
        </script>
    </body>
</html>