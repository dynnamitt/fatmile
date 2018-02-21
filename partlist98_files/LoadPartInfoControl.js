function LoadPartInfoControl(parttypeid, partNo, innerHtml, shockProperties) {
    
    var ControlProperty = new Array();
    var controlPath = '';

    if (parttypeid != null && parttypeid != undefined && parttypeid != '') {

        if (parttypeid == '101508') {
            NameValue = {};
            NameValue.Name = "PartTypeID";
            NameValue.Type = "STRING";
            NameValue.Value = parttypeid;
            ControlProperty[0] = NameValue;

            controlPath = "WebControls/MWS/Product/WheelLightboxProductControl.ascx";
        }
        else if (parttypeid == '101509') {
            NameValue = {};
            NameValue.Name = "PartTypeID";
            NameValue.Type = "STRING";
            NameValue.Value = parttypeid;
            ControlProperty[0] = NameValue;

            controlPath = "WebControls/MWS/Product/TireLightboxProductControl.ascx";
        }
        else if (parttypeid == '3306') {
            NameValue = {};
            NameValue.Name = "PartTypeID";
            NameValue.Type = "STRING";
            NameValue.Value = parttypeid;
            ControlProperty[0] = NameValue;

            controlPath = "WebControls/MWS/Product/ShocksLightboxProductControl.ascx";
        }
        else if (parttypeid == '4242') {
            NameValue = {};
            NameValue.Name = "PartTypeID";
            NameValue.Type = "STRING";
            NameValue.Value = parttypeid;
            ControlProperty[0] = NameValue;

            controlPath = "WebControls/MWS/Product/LightLightboxProductControl.ascx";
        }
        else {

            NameValue = {};
            NameValue.Name = "PartTypeID";
            NameValue.Type = "STRING";
            NameValue.Value = parttypeid;
            ControlProperty[0] = NameValue;

            controlPath = "WebControls/MWS/Product/OtherPartTypesLightboxProductControl.ascx";
        }
    }
    else if (partNo != null && partNo != undefined) {
        NameValue = {};
        NameValue.Name = "PartNo";
        NameValue.Type = "STRING";
        NameValue.Value = partNo;
        ControlProperty[0] = NameValue;

        if (shockProperties != undefined && shockProperties != null) {
            NameValue = {};
            NameValue.Name = "PartTypeID";
            NameValue.Type = "INT";
            NameValue.Value = shockProperties.PartTypeID;
            ControlProperty[1] = NameValue;

            NameValue = {};
            NameValue.Name = "APQqid";
            NameValue.Type = "STRING";
            NameValue.Value = shockProperties.APQqid;
            ControlProperty[2] = NameValue;

            NameValue = {};
            NameValue.Name = "APQaid";
            NameValue.Type = "STRING";
            NameValue.Value = shockProperties.APQaid;
            ControlProperty[3] = NameValue;

            NameValue = {};
            NameValue.Name = "PQqid";
            NameValue.Type = "STRING";
            NameValue.Value = shockProperties.PQqid;
            ControlProperty[4] = NameValue;

            NameValue = {};
            NameValue.Name = "PQaid";
            NameValue.Type = "STRING";
            NameValue.Value = shockProperties.PQaid;
            ControlProperty[5] = NameValue;

            NameValue = {};
            NameValue.Name = "DualShocks";
            NameValue.Type = "BOOL";
            NameValue.Value = shockProperties.DualShocks;
            ControlProperty[6] = NameValue;
        }
        controlPath = "WebControls/MWS/Product/PartInfo.ascx";
    }

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ controlProperties: ControlProperty, controlPath: controlPath }),
        url: "/aux_incl/ajax/UserControlService.asmx/RenderUserControl",
        dataType: "json",
        async: true,
        success: function (data) {
            if (data.d != null) {
                $(innerHtml).html = '';
                $(innerHtml).html(data.d);

                var IsModal = false;
                var hdnismodal = $("#ctl00_ContentPlaceHolder1_RelatedPartTypes_ctl00_slbRelatedProducts").find(".ismodal").val();
                if (hdnismodal == 1) {
                    IsModal = true;
                }

                $("#ctl00_ContentPlaceHolder1_RelatedPartTypes_ctl00_slbRelatedProducts").parent().modal({
                    backdrop: IsModal,
                    keyboard: true,
                    show: true
                });
            }
        },
        error: function (error) {
            var exception = error.responseJSON;
            alert(exception);
        }
    });
}


//FUNTION to Load Tire Calculator Control  - Added by Femila on 3-NOV-2014
function LoadTireCalculatorControl() {
    var ControlProperty = new Array();
    var controlPath = "WebControls/MWS/Product/TireCalculator.ascx";

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ controlProperties: ControlProperty, controlPath: controlPath }),
        url: "/aux_incl/ajax/UserControlService.asmx/RenderUserControl",
        dataType: "json",
        async: true,
        success: function (data) {
            if (data.d != null) {

                var IsModal = false;
                var hdnismodal = $("#ctl00_ContentPlaceHolder1_ctl00_tireSpecLightBox").find(".ismodal").val();
                if (hdnismodal == 1) {
                    IsModal = true;
                }
                $("#ctl00_ContentPlaceHolder1_ctl00_lbContent").html(data.d);

                $("#ctl00_ContentPlaceHolder1_ctl00_tireSpecLightBox").parent().modal({
                    backdrop: IsModal,
                    keyboard: true,
                    show: true
                });
            }
        },
        error: function (error) {
            var exception = error.responseJSON;
            alert(exception);
        }
    });
}
//FUNTION to Load Wheel Finder Control - Added by Femila on 4-NOV-2014
function LoadWheelFinderControl(parttypeid, lineCode, isRPWheel) {
    
    var ControlProperty = new Array();

    if (parttypeid != null && parttypeid != '' && parttypeid != undefined) {
        NameValue = {};
        NameValue.Name = "PartTypeID";
        NameValue.Type = "INT";
        NameValue.Value = parttypeid;
        ControlProperty[0] = NameValue;
    }

    if (lineCode != null && lineCode != '' && lineCode != undefined) {
        NameValue1 = {};
        NameValue1.Name = "LineCode";
        NameValue1.Type = "STRING";
        NameValue1.Value = lineCode;
        ControlProperty[1] = NameValue1;
    }

    var controlPath = "WebControls/MWS/Product/WheelFinder.ascx";

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ controlProperties: ControlProperty, controlPath: controlPath }),
        url: "/aux_incl/ajax/UserControlService.asmx/RenderUserControl",
        dataType: "json",
        async: true,
        success: function (data) {
            if (data.d != null) {
                var IsModal = false;
                var hdnismodal = $("#ctl00_ContentPlaceHolder1_ctl00_wheelFinderLightBox").find(".ismodal").val();
                if (hdnismodal == 1) {
                    IsModal = true;
                }
                $("#ctl00_ContentPlaceHolder1_ctl00_lbContent").html(data.d);

                $("#ctl00_ContentPlaceHolder1_ctl00_wheelFinderLightBox").parent().modal({
                    backdrop: IsModal,
                    keyboard: true,
                    show: true
                });
            }
        },
        error: function (error) {
            var exception = error.responseJSON;
            alert(exception);
        }
    });

}
