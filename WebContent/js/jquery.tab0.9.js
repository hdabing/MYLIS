jQuery.fn.Tab = function(opt) {
    var cfg = {
        items: [{ "title": "tab", "closed": true, "icon": "", "html": "", load: "", "callback": function() { } }], //tab������
        width: 500,
        height: 500,
        tabcontentWidth: 498,
        tabWidth: 66,
        tabHeight: 25,
        tabScroll: true,
        tabScrollWidth: 19,
        tabClass: "tab",
        tabContentClass: "tab-div-content",
        tabClassOn: "on",
        tabClassOff: "off",
        tabClassClose: "close",
        tabClassInner: "inner",
        tabClassText: "text",
        tabClassScrollLeft: "scroll-left",
        tabClassScrollRight: "scroll-right",
        tabClassDiv: "tab-div",
        tabClassHtmlDiv: "tab-div-html",
        tabHtml: ""
    };
    jQuery.extend(cfg, opt);

    //�ж��ǲ��������ص�tab
    var tW = cfg.tabWidth * cfg.items.length;
    cfg.tabScroll ? tW -= cfg.tabScrollWidth * 2 : null;
    //tabDiv,��div���Զ����ӵ�
    var tab = jQuery("<div />").attr("id", "jquery_tab_div").height(cfg.tabHeight).addClass(cfg.tabClass).append("<ul />");
    //tab target content
    var tabContent = jQuery("<div />").attr("id", "jquery_tab_div_content").width(cfg.tabcontentWidth).height(cfg.height - cfg.tabHeight).addClass(cfg.tabContentClass);
    var ccW = (cfg.items.length * cfg.tabWidth) - cfg.width;
    //var tabH=jQuery("<div />").append(cfg.tabHtml).addClass(cfg.tabClassHtmlDiv).height(cfg.tabHeight);
    var tabH = "";
    var scrollTab = function(o, flag) {
        var left;
        flag ? left = Number(tab.css("left").replace("px", "")) + cfg.tabWidth : left = Number(tab.css("left").replace("px", "")) - cfg.tabWidth;
        jQuery(o).unbind("click");
        left > 0 ? left = 0 : null;
        tab.animate({ "left": left }, function() {
            var tmp_o, tmp_ccW;
            ccW < 0 ? tmp_ccW = 0 : tmp_ccW = ccW;
            if (left >= 0 || Math.abs(left) > tmp_ccW) {
                return;
            }
            jQuery(o).click(function() {
                scrollTab(this, flag);
            });
            if (jQuery(o).hasClass(cfg.tabClassScrollLeft)) {
                tmp_o = srcollRight;
                tmp_o.click(function() {
                    scrollTab(this, !flag);
                });
            }
            else {
                tmp_o = scrollLeft;
                tmp_o.click(function() {
                    scrollTab(this, !flag);
                });
            }
        });
    }
    function addTab(item) {
        //close
        var close;
        if (item.closed) {
            close = jQuery("<a class=\"" + cfg.tabClassClose + "\" onclick=\"return false;\" />").click(function() {
                //�Ƴ�titleID_ItemsԪ��
                titleID_Items = titleID_Items.replace("," + item.title, "");
                //�Ƴ���ǰ��ʾiframe
                jQuery("#iframe_" + item.title).remove();
                if (show_FrameId == "iframe_" + item.title) {
                    show_FrameId = "iframe_�˵�ҳ";
                    //��ʾ��һ��Tab
                    li_Click(jQuery("#li_�˵�ҳ"), false, true);
                }

                var _self = jQuery(this);
                //only one tab
                if (tab.find("li").length < 2) {
                    _self.remove();
                }
                else {
                    //first tab delete
                    var prev = _self.parent().prev();
                    var next = _self.parent().next();
                    _self.parent().remove();
                    ccW -= cfg.tabWidth;
                    var left = Number(tab.css("left").replace("px", ""));
                    if (left < 0) {
                        tab.animate({ "left": left + cfg.tabWidth });
                    }
                    else {
                        cfg.tabScroll && scrollLeft.unbind("click");
                    }
                    if (_self.parent().hasClass("on")) {
                        if (prev.html()) {
                            prev.click();
                        }
                        else {
                            next.click();
                        }
                    }
                    if (ccW <= cfg.tabWidth) {
                        cfg.tabScroll && srcollRight.unbind("click");
                    }
                }
            });
        }

        //�ж�title�ֳ����Ƿ����3
        var showTitle = "";
        if (item.title.length > 3) {
            showTitle = item.title.substring(0, 3) + "...";
        } else {
            showTitle = item.title;
        }
        var inner = jQuery("<a title=\"" + item.title + "\" class=\"" + cfg.tabClassInner + "\" >" + "<span class=\"" + cfg.tabClassText + "\">" + showTitle + "</span></a>");


        var li = jQuery("<li id=\"li_" + item.title + "\"></li>");
        li.addClass(cfg.tabClassOff).click(function() { li_Click(jQuery(this), false, false); }).append(close).append(inner).appendTo(tab.find("ul"));
        //���tab���¼�
        var li_Click = function(li_obj, flage, isClose) {
            var _self = jQuery(li_obj);
            if (_self.hasClass(cfg.tabClassOn)) return;
            _self.parent().find("li").removeClass().addClass(cfg.tabClassOff);
            _self.removeClass().addClass(cfg.tabClassOn);
            //�ж�����ʾhtml���뻹��ajax��������
            if (item.html) {
                //������ʾ��iframe
                if (show_FrameId != "") {
                    jQuery("#" + show_FrameId).css("display", "none");
                }
                if (flage) {
                    //���
                    tabContent.append(item.html);
                    show_FrameId = jQuery(item.html).attr("id");
                } else {
                    //����

                    //�ж��Ƿ���ִ�йرյ���
                    if (!isClose) {
                        show_FrameId = jQuery(item.html).attr("id");
                    }
                    jQuery("#" + show_FrameId).css("display", "block");
                }
            }
            else {
                if (item.load) {
                    tabContent.load(item.load);
                }
            }
            //�ص�������ʲô
            if (item.callback) item.callback(_self);
        }
        //�����¼�
        li_Click(li, true, false);
    }
    function newTab(item) {
        //cfg.items.push(item);
        var liLength = tab.find("li").length;
        var nW = liLength * cfg.tabWidth;
        ccW += cfg.tabWidth;
        //(ccW>0&&ccW<cfg.tabWidth)?ccW=cfg.tabWidth:null;
        if (nW > cfg.width) {
            if (!cfg.tabScroll) {
                cfg.tabScroll = true;
                scrollLeft = jQuery("<div class=\"" + cfg.tabClassScrollLeft + "\"></div>").click(function() {
                    scrollTab(this, true);
                });
                srcollRight = jQuery("<div class=\"" + cfg.tabClassScrollRight + "\"></div>");
                cW -= cfg.tabScrollWidth * 2;
                tabContenter.width(cW);
                scrollLeft.insertBefore(tabContenter);
                srcollRight.insertBefore(tabContenter);
            }
            addTab(item);
            //scrollLeft.click();
            scrollTab(srcollRight, false);
        }
        else {
            addTab(item);
        }
    }
    jQuery.each(cfg.items, function(i, o) {
        addTab(o);
    });
    var cW = cfg.width;
    var scrollLeft, srcollRight;

    if (cfg.tabScroll) {
        scrollLeft = jQuery("<div class=\"" + cfg.tabClassScrollLeft + "\"></div>");
        if (tW > cW) {
            srcollRight = jQuery("<div class=\"" + cfg.tabClassScrollRight + "\"></div>").click(function() {
                scrollTab(this, false);
            });
        }
        else {
            srcollRight = jQuery("<div class=\"" + cfg.tabClassScrollRight + "\"></div>");
        }
        cW -= cfg.tabScrollWidth * 2;
    }
    var container = jQuery("<div />").css({
        "overflow": "hidden",
        "position": "relative",
        "width": cfg.width,
        "height": cfg.tabHeight
    }).append(scrollLeft).append(srcollRight).addClass(cfg.tabClassDiv);
    var tabContenter = jQuery("<div />").css({
        "overflow": "hidden",
        "width": cW,
        "height": cfg.tabHeight,
        "float": "left"
    }).append(tab);
    var obj = jQuery(this).append(tabH).append(container.append(tabContenter)).append(tabContent);
    //�����һ
    tab.find("li:first").click();

    return obj.extend({ "addTab": addTab, "newTab": newTab });
};