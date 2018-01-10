/* !
 * Metro UI CSS v3.0.17 (http://metroui.org.ua)
 * Copyright 2012-2017 Sergey Pimenov
 * Licensed under  ()
 */
!(function(a) {
    "function" === typeof define && define.amd ? define(["jquery"],a) : a(jQuery);
}(function(jQuery) {
    "use strict";function keyHandler(a) {
        if ("string" === typeof a.data && (a.data = {keys:a.data}),a.data && a.data.keys && "string" === typeof a.data.keys) {
            var b = a.handler,c = a.data.keys.toLowerCase().split(" ");a.handler = function(a) {
                if (this === a.target || !($.hotkeys.options.filterInputAcceptingElements && $.hotkeys.textInputTypes.test(a.target.nodeName) || $.hotkeys.options.filterContentEditable && $(a.target).attr("contenteditable") || $.hotkeys.options.filterTextInputs && $.inArray(a.target.type,$.hotkeys.textAcceptingInputTypes) > -1)) {
                    var d = "keypress" !== a.type && $.hotkeys.specialKeys[a.which],e = String.fromCharCode(a.which).toLowerCase(),f = "",g = {};$.each(["alt","ctrl","shift"],function(b,c) {
                        a[`${c}Key`] && d !== c && (f += `${c  }+`);
                    }),a.metaKey && !a.ctrlKey && "meta" !== d && (f += "meta+"),a.metaKey && "meta" !== d && f.indexOf("alt+ctrl+shift+") > -1 && (f = f.replace("alt+ctrl+shift+","hyper+")),d ? g[f + d] = !0 : (g[f + e] = !0,g[f + $.hotkeys.shiftNums[e]] = !0,"shift+" === f && (g[$.hotkeys.shiftNums[e]] = !0));for (var h = 0,i = c.length;i > h;h++) {
                        if (g[c[h]]) {
                            return b.apply(this,arguments);
                        }
                    }
                }
            };
        }
    } function handler(a) {
        var b,c = a || window.event,d = [].slice.call(arguments,1),e = 0,f = 0,g = 0,h = 0,i = 0;return a = $.event.fix(c),a.type = "mousewheel",c.wheelDelta && (e = c.wheelDelta),c.detail && (e = -1 * c.detail),c.deltaY && (g = -1 * c.deltaY,e = g),c.deltaX && (f = c.deltaX,e = -1 * f),void 0 !== c.wheelDeltaY && (g = c.wheelDeltaY),void 0 !== c.wheelDeltaX && (f = -1 * c.wheelDeltaX),h = Math.abs(e),(!lowestDelta || lowestDelta > h) && (lowestDelta = h),i = Math.max(Math.abs(g),Math.abs(f)),(!lowestDeltaXY || lowestDeltaXY > i) && (lowestDeltaXY = i),b = e > 0 ? "floor" : "ceil",e = Math[b](e / lowestDelta),f = Math[b](f / lowestDeltaXY),g = Math[b](g / lowestDeltaXY),d.unshift(a,e,f,g),($.event.dispatch || $.event.handle).apply(this,d);
    } function preCode(a) {
        var b = Array.prototype.slice.call(document.querySelectorAll(a),0);b.forEach(function(a) {
            var b = a.textContent.replace(/^[\r\n]+/,"").replace(/\s+$/g,"");if (/^\S/gm.test(b)) {
                return void(a.textContent = b);
            } for (var c,d,e,f = /^[\t ]+/gm,g = 1e3;c = f.exec(b);) {
                e = c[0].length,g > e && (g = e,d = c[0]);
            }1e3 != g && (a.textContent = b.replace(new RegExp(`^${d}`,"gm"),""));
        });
    } function touch2Mouse(a) {
        var b,c = a.changedTouches[0];switch (a.type) {
        case "touchstart":b = "mousedown";break;case "touchend":b = "mouseup";break;case "touchmove":b = "mousemove";break;default:return;
        }"mousedown" == b && (eventTimer = (new Date).getTime(),startX = c.clientX,startY = c.clientY,mouseDown = !0),"mouseup" == b && ((new Date).getTime() - eventTimer <= 500 ? b = "click" : (new Date).getTime() - eventTimer > 1e3 && (b = "longclick"),eventTimer = 0,mouseDown = !1),"mousemove" == b && mouseDown && (deltaX = c.clientX - startX,deltaY = c.clientY - startY,moveDirection = deltaX > deltaY ? "horizontal" : "vertical");var d = document.createEvent("MouseEvent");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),c.target.dispatchEvent(d),a.preventDefault();
    } var $ = jQuery;if (window.METRO_VERSION = "3.0.17","undefined" === typeof jQuery) {
        throw new Error("Metro's JavaScript requires jQuery");
    } void 0 === window.METRO_AUTO_REINIT && (window.METRO_AUTO_REINIT = !0),void 0 === window.METRO_LANGUAGE && (window.METRO_LANGUAGE = "en"),void 0 === window.METRO_LOCALE && (window.METRO_LOCALE = "EN_en"),void 0 === window.METRO_CURRENT_LOCALE && (window.METRO_CURRENT_LOCALE = "en"),void 0 === window.METRO_SHOW_TYPE && (window.METRO_SHOW_TYPE = "slide"),void 0 === window.METRO_DEBUG && (window.METRO_DEBUG = !0),void 0 === window.METRO_CALENDAR_WEEK_START && (window.METRO_CALENDAR_WEEK_START = 0),window.canObserveMutation = "MutationObserver" in window,Number.prototype.format = function(a,b,c,d) {
        var e = `\\d(?=(\\d{${  b || 3  }})+${  a > 0 ? "\\D" : "$"  })`,f = this.toFixed(Math.max(0,~~a));return (d ? f.replace(".",d) : f).replace(new RegExp(e,"g"),`$&${c || ","}`);
    },Array.prototype.shuffle = function() {
        for (var a,b,c = this.length;0 !== c;) {
            b = Math.floor(Math.random() * c),c -= 1,a = this[c],this[c] = this[b],this[b] = a;
        } return this;
    },Array.prototype.clone = function() {
        return this.slice(0);
    },Array.prototype.unique = function() {
        for (var a = this.concat(),b = 0;b < a.length;++b) {
            for (var c = b + 1;c < a.length;++c) {
                a[b] === a[c] && a.splice(c--,1);
            }
        } return a;
    },window.isTouchDevice = function() {
        return "ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    },window.METRO_LOCALES = {en:{months:["January","February","March","April","May","June","July","August","September","October","November","December","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Su","Mo","Tu","We","Th","Fr","Sa"],buttons:["Today","Clear","Cancel","Help","Prior","Next","Finish"]},fr:{months:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre","Jan","Fév","Mars","Avr","Mai","Juin","Juil","Août","Sept","Oct","Nov","Déc"],days:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Di","Lu","Ma","Me","Je","Ve","Sa"],buttons:["Aujourd'hui","Effacer","Annuler","Aide","Précedent","Suivant","Fin"]},nl:{months:["Januari","Februari","Maart","April","Mei","Juni","Juli","Augustus","September","Oktober","November","December","Jan","Feb","Mrt","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],days:["Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag","Zo","Ma","Di","Wo","Do","Vr","Za"],buttons:["Vandaag","Verwijderen","Annuleren","Hulp","Vorige","Volgende","Einde"]},ua:{months:["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень","Січ","Лют","Бер","Кві","Тра","Чер","Лип","Сер","Вер","Жов","Лис","Гру"],days:["Неділя","Понеділок","Вівторок","Середа","Четвер","П’ятниця","Субота","Нд","Пн","Вт","Ср","Чт","Пт","Сб"],buttons:["Сьогодні","Очистити","Скасувати","Допомога","Назад","Вперед","Готово"]},ru:{months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь","Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],days:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Вс","Пн","Вт","Ср","Чт","Пт","Сб"],buttons:["Сегодня","Очистить","Отменить","Помощь","Назад","Вперед","Готово"]},zhCN:{months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月","一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],days:["星期日","星期一","星期二","星期三","星期四","星期五","星期六","日","一","二","三","四","五","六"],buttons:["今日","清除","Cancel","Help","Prior","Next","Finish"]},it:{months:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre","Gen"," Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],days:["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato","Dom","Lun","Mar","Mer","Gio","Ven","Sab"],buttons:["Oggi","Cancella","Cancel","Help","Prior","Next","Finish"]},de:{months:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember","Jan","Feb","Mrz","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],days:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag","So","Mo","Di","Mi","Do","Fr","Sa"],buttons:["Heute","Zurücksetzen","Abbrechen","Hilfe","Früher","Später","Fertig"]},es:{months:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre","Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sept","Oct","Nov","Dic"],days:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Do","Lu","Mar","Mié","Jue","Vi","Sáb"],buttons:["Hoy","Limpiar","Cancel","Help","Prior","Next","Finish"]},pt:{months:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro","Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],days:["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sabado","Dom","Seg","Ter","Qua","Qui","Sex","Sab"],buttons:["Hoje","Limpar","Cancelar","Ajuda","Anterior","Seguinte","Terminar"]},pl:{months:["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień","Sty","Lut","Mar","Kwi","Maj","Cze","Lip","Sie","Wrz","Paź","Lis","Gru"],days:["Niedziela","Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota","Nd","Pon","Wt","Śr","Czw","Pt","Sob"],buttons:["Dzisiaj","Wyczyść","Anuluj","Pomoc","Poprzedni","Następny","Koniec"]},cs:{months:["Leden","Únor","Březen","Duben","Květen","Červen","Červenec","Srpen","Září","Říjen","Listopad","Prosinec","Led","Ún","Bř","Dub","Kvě","Če","Čer","Srp","Zá","Ří","Li","Pro"],days:["Neděle","Pondělí","Úterý","Středa","Čtvrtek","Pátek","Sobota","Ne","Po","Út","St","Čt","Pá","So"],buttons:["Dnes","Vyčistit","Zrušit","Pomoc","Předešlý","Další","Dokončit"]},th:{months:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม","ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],days:["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์","อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],buttons:["วันนี้","ล้าง","ยกเลิก","ช่วยเหลือ","กลับ","ต่อไป","เสร็จ"]},id:{months:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember","Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Dec"],days:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu","Mi","Se","Se","Ra","Ka","Ju","Sa"],buttons:["Hari Ini","Mengulang","Batalkan","Bantuan","Sebelumnya","Berikutnya","Selesai"]}};var dateFormat = (function() {
        var a = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,b = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,c = /[^-+\dA-Z]/g,d = function(a,b) {
            for (a = String(a),b = b || 2;a.length < b;) {
                a = `0${  a}`;
            } return a;
        };return function(e,f,g) {
            var h = dateFormat;1 !== arguments.length || "[object String]" !== Object.prototype.toString.call(e) || /\d/.test(e) || (f = e,e = void 0),e = e ? new Date(e) : new Date,f = String(h.masks[f] || f || h.masks.default),"UTC:" === f.slice(0,4) && (f = f.slice(4),g = !0);var i = window.METRO_CURRENT_LOCALE || "en",j = g ? "getUTC" : "get",k = e[`${j}Date`](),l = e[`${j}Day`](),m = e[`${j}Month`](),n = e[`${j}FullYear`](),o = e[`${j}Hours`](),p = e[`${j}Minutes`](),q = e[`${j}Seconds`](),r = e[`${j}Milliseconds`](),s = g ? 0 : e.getTimezoneOffset(),t = {d:k,dd:d(k),ddd:window.METRO_LOCALES[i].days[l],dddd:window.METRO_LOCALES[i].days[l + 7],m:m + 1,mm:d(m + 1),mmm:window.METRO_LOCALES[i].months[m],mmmm:window.METRO_LOCALES[i].months[m + 12],yy:String(n).slice(2),yyyy:n,h:o % 12 || 12,hh:d(o % 12 || 12),H:o,HH:d(o),M:p,MM:d(p),s:q,ss:d(q),l:d(r,3),L:d(r > 99 ? Math.round(r / 10) : r),t:12 > o ? "a" : "p",tt:12 > o ? "am" : "pm",T:12 > o ? "A" : "P",TT:12 > o ? "AM" : "PM",Z:g ? "UTC" : (String(e).match(b) || [""]).pop().replace(c,""),o:(s > 0 ? "-" : "+") + d(100 * Math.floor(Math.abs(s) / 60) + Math.abs(s) % 60,4),S:["th","st","nd","rd"][k % 10 > 3 ? 0 : (k % 100 - k % 10 !== 10) * k % 10]};return f.replace(a,function(a) {
                return a in t ? t[a] : a.slice(1,a.length - 1);
            });
        };
    }());dateFormat.masks = {"default":"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"},Date.prototype.format = function(a,b) {
        return dateFormat(this,a,b);
    };var widget_uuid = 0,widget_slice = Array.prototype.slice;$.cleanData = (function(a) {
        return function(b) {
            var c,d,e;for (e = 0;null != (d = b[e]);e++) {
                try {
                    c = $._data(d,"events"),c && c.remove && $(d).triggerHandler("remove");
                } catch (f) {}
            }a(b);
        };
    }($.cleanData)),$.widget = function(a,b,c) {
        var d,e,f,g,h = {},i = a.split(".")[0];return a = a.split(".")[1],d = `${i  }-${  a}`,c || (c = b,b = $.Widget),$.expr[":"][d.toLowerCase()] = function(a) {
            return !!$.data(a,d);
        },$[i] = $[i] || {},e = $[i][a],f = $[i][a] = function(a,b) {
            return this._createWidget ? void(arguments.length && this._createWidget(a,b)) : new f(a,b);
        },$.extend(f,e,{version:c.version,_proto:$.extend({},c),_childConstructors:[]}),g = new b,g.options = $.widget.extend({},g.options),$.each(c,function(a,c) {
            return $.isFunction(c) ? void(h[a] = (function() {
                var d = function() {
                        return b.prototype[a].apply(this,arguments);
                    },e = function(c) {
                        return b.prototype[a].apply(this,c);
                    };return function() {
                    var a,b = this._super,f = this._superApply;return this._super = d,this._superApply = e,a = c.apply(this,arguments),this._super = b,this._superApply = f,a;
                };
            }())) : void(h[a] = c);
        }),f.prototype = $.widget.extend(g,{widgetEventPrefix:e ? g.widgetEventPrefix || a : a},h,{constructor:f,namespace:i,widgetName:a,widgetFullName:d}),e ? ($.each(e._childConstructors,function(a,b) {
            var c = b.prototype;$.widget(`${c.namespace}.${c.widgetName}`,f,b._proto);
        }),delete e._childConstructors) : b._childConstructors.push(f),$.widget.bridge(a,f),f;
    },$.widget.extend = function(a) {
        for (var b,c,d = widget_slice.call(arguments,1),e = 0,f = d.length;f > e;e++) {
            for (b in d[e]) {
                c = d[e][b],d[e].hasOwnProperty(b) && void 0 !== c && (a[b] = $.isPlainObject(c) ? $.isPlainObject(a[b]) ? $.widget.extend({},a[b],c) : $.widget.extend({},c) : c);
            }
        } return a;
    },$.widget.bridge = function(a,b) {
        var c = b.prototype.widgetFullName || a;$.fn[a] = function(d) {
            var e = "string" === typeof d,f = widget_slice.call(arguments,1),g = this;return e ? this.each(function() {
                var b,e = $.data(this,c);return "instance" === d ? (g = e,!1) : e ? $.isFunction(e[d]) && "_" !== d.charAt(0) ? (b = e[d](...f),b !== e && void 0 !== b ? (g = b && b.jquery ? g.pushStack(b.get()) : b,!1) : void 0) : $.error(`no such method '${d}' for ${a} widget instance`) : $.error(`cannot call methods on ${a} prior to initialization; attempted to call method '${d}'`);
            }) : (f.length && (d = $.widget.extend.apply(null,[d].concat(f))),this.each(function() {
                var a = $.data(this,c);a ? (a.option(d || {}),a._init && a._init()) : $.data(this,c,new b(d,this));
            })),g;
        };
    },$.Widget = function() {},$.Widget._childConstructors = [],$.Widget.prototype = {widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget(a,b) {
        b = $(b || this.defaultElement || this)[0],this.element = $(b),this.uuid = widget_uuid++,this.eventNamespace = `.${  this.widgetName  }${this.uuid}`,this.bindings = $(),this.hoverable = $(),this.focusable = $(),b !== this && ($.data(b,this.widgetFullName,this),this._on(!0,this.element,{remove(a) {
            a.target === b && this.destroy();
        }}),this.document = $(b.style ? b.ownerDocument : b.document || b),this.window = $(this.document[0].defaultView || this.document[0].parentWindow)),this.options = $.widget.extend({},this.options,this._getCreateOptions(),a),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init();
    },_getCreateOptions:$.noop,_getCreateEventData:$.noop,_create:$.noop,_init:$.noop,destroy() {
        this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName)
            .removeData($.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace)
            .removeAttr("aria-disabled")
            .removeClass(`${this.widgetFullName}-disabled ui-state-disabled`),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus");
    },_destroy:$.noop,widget() {
        return this.element;
    },option(a,b) {
        var c,d,e,f = a;if (0 === arguments.length) {
            return $.widget.extend({},this.options);
        } if ("string" === typeof a) {
            if (f = {},c = a.split("."),a = c.shift(),c.length) {
                for (d = f[a] = $.widget.extend({},this.options[a]),e = 0;e < c.length - 1;e++) {
                    d[c[e]] = d[c[e]] || {},d = d[c[e]];
                } if (a = c.pop(),1 === arguments.length) {
                    return void 0 === d[a] ? null : d[a];
                }d[a] = b;
            } else {
                if (1 === arguments.length) {
                    return void 0 === this.options[a] ? null : this.options[a];
                }f[a] = b;
            }
        } return this._setOptions(f),this;
    },_setOptions(a) {
        var b;for (b in a) {
            this._setOption(b,a[b]);
        } return this;
    },_setOption(a,b) {
        return this.options[a] = b,"disabled" === a && (this.widget().toggleClass(`${this.widgetFullName}-disabled`,!!b),b && (this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this;
    },enable() {
        return this._setOptions({disabled:!1});
    },disable() {
        return this._setOptions({disabled:!0});
    },_on(a,b,c) {
        var d,e = this;"boolean" !== typeof a && (c = b,b = a,a = !1),c ? (b = d = $(b),this.bindings = this.bindings.add(b)) : (c = b,b = this.element,d = this.widget()),$.each(c,function(c,f) {
            function g() {
                return a || e.options.disabled !== !0 && !$(this).hasClass("ui-state-disabled") ? ("string" === typeof f ? e[f] : f).apply(e,arguments) : void 0;
            }"string" !== typeof f && (g.guid = f.guid = f.guid || g.guid || $.guid++);var h = c.match(/^([\w:-]*)\s*(.*)$/),i = h[1] + e.eventNamespace,j = h[2];j ? d.delegate(j,i,g) : b.bind(i,g);
        });
    },_off(a,b) {
        b = (b || "").split(" ").join(`${this.eventNamespace} `) + this.eventNamespace,a.unbind(b).undelegate(b),this.bindings = $(this.bindings.not(a).get()),this.focusable = $(this.focusable.not(a).get()),this.hoverable = $(this.hoverable.not(a).get());
    },_delay(a,b) {
        function c() {
            return ("string" === typeof a ? d[a] : a).apply(d,arguments);
        } var d = this;return setTimeout(c,b || 0);
    },_hoverable(a) {
        this.hoverable = this.hoverable.add(a),this._on(a,{mouseenter(a) {
            $(a.currentTarget).addClass("ui-state-hover");
        },mouseleave(a) {
            $(a.currentTarget).removeClass("ui-state-hover");
        }});
    },_focusable(a) {
        this.focusable = this.focusable.add(a),this._on(a,{focusin(a) {
            $(a.currentTarget).addClass("ui-state-focus");
        },focusout(a) {
            $(a.currentTarget).removeClass("ui-state-focus");
        }});
    },_trigger(a,b,c) {
        var d,e,f = this.options[a];if (c = c || {},b = $.Event(b),b.type = (a === this.widgetEventPrefix ? a : this.widgetEventPrefix + a).toLowerCase(),b.target = this.element[0],e = b.originalEvent) {
            for (d in e) {
                d in b || (b[d] = e[d]);
            }
        } return this.element.trigger(b,c),!($.isFunction(f) && f.apply(this.element[0],[b].concat(c)) === !1 || b.isDefaultPrevented());
    }},$.each({show:"fadeIn",hide:"fadeOut"},function(a,b) {
        $.Widget.prototype[`_${a}`] = function(c,d,e) {
            "string" === typeof d && (d = {effect:d});var f,g = d ? d === !0 || "number" === typeof d ? b : d.effect || b : a;d = d || {},"number" === typeof d && (d = {duration:d}),f = !$.isEmptyObject(d),d.complete = e,d.delay && c.delay(d.delay),f && $.effects && $.effects.effect[g] ? c[a](d) : g !== a && c[g] ? c[g](d.duration,d.easing,e) : c.queue(function(b) {
                $(this)[a](),e && e.call(c[0]),b();
            });
        };
    });var widget = $.widget;$.fn.reverse = Array.prototype.reverse,$.Metro = {hotkeys:[],initWidgets(a) {
        $.each(a,function() {
            var a = $(this),b = a.data("role").split(/\s*,\s*/);b.map(function(b) {
                try {
                    void 0 !== $.fn[b] && a.data(`${b}-initiated`) !== !0 && ($.fn[b].call(a),a.data(`${b}-initiated`,!0));
                } catch (c) {
                    window.METRO_DEBUG && console.log(c.message,c.stack);
                }
            });
        });
    },initHotkeys(a) {
        $.each(a,function() {
            var a = $(this),b = a.data("hotkey").toLowerCase();a.data("hotKeyBonded") !== !0 && ($.Metro.hotkeys.push(b),$(document).on("keyup",null,b,function() {
                return void 0 !== a ? ("A" === a[0].tagName && void 0 !== a.attr("href") && "" !== a.attr("href").trim() && "#" !== a.attr("href").trim() ? document.location.href = a.attr("href") : a.click(),!1) : void 0;
            }),a.data("hotKeyBonded",!0));
        });
    },init() {
        var a = $("[data-role]"),b = $("[data-hotkey]");$.Metro.initHotkeys(b),$.Metro.initWidgets(a);var c,d,e;d = {childList:!0,subtree:!0},e = function(a) {
            a.map(function(a) {
                if (a.addedNodes) {
                    for (var b,c,d,e,f = 0,g = a.addedNodes.length;g > f;f++) {
                        b = $(a.addedNodes[f]),d = b.find("[data-role]"),e = b.find("[data-hotkey]"),$.Metro.initHotkeys(e),c = void 0 !== b.data("role") ? $.merge(d,b) : d,c.length && $.Metro.initWidgets(c);
                    }
                }
            });
        },c = new MutationObserver(e),c.observe(document,d);
    }};var utils = {isColor(a) {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
    },isUrl() {
        return /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(this);
    },secondsToFormattedString(a) {
        var b,c,d;return b = parseInt(a / 3600) % 24,c = parseInt(a / 60) % 60,d = a % 60,`${(b ? `${b  }:` : "") + (10 > c ? `0${  c}` : c)}:${10 > d ? `0${  d}` : d}`;
    },uniqueId() {
        var a = (new Date).getTime(),b = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(b) {
            var c = (a + 16 * Math.random()) % 16 | 0;return a = Math.floor(a / 16),("x" == b ? c : 3 & c | 8).toString(16);
        });return b;
    },isTouchDevice() {
        return "ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    },arrayUnique(a) {
        for (var b = a.concat(),c = 0;c < b.length;++c) {
            for (var d = c + 1;d < b.length;++d) {
                b[c] === b[d] && b.splice(d--,1);
            }
        } return b;
    },arrayClone(a) {
        return a.slice(0);
    },arrayShuffle(a) {
        for (var b,c,d = a.length;0 !== d;) {
            c = Math.floor(Math.random() * d),d -= 1,b = a[d],a[d] = a[c],a[c] = b;
        } return a;
    },hex2rgba(a,b) {
        var c;if (b = isNaN(b) ? 1 : b,/^#([A-Fa-f0-9]{3}){1,2}$/.test(a)) {
            return c = a.substring(1).split(""),3 == c.length && (c = [c[0],c[0],c[1],c[1],c[2],c[2]]),c = `0x${  c.join("")}`,`rgba(${[c >> 16 & 255,c >> 8 & 255,255 & c].join(",")},${b})`;
        } throw new Error("Hex2rgba error. Bad Hex value");
    },random(a,b) {
        return Math.floor(Math.random() * (b - a + 1) + a);
    },isInt(a) {
        return Number(a) === a && a % 1 === 0;
    },isFloat(a) {
        return Number(a) === a && a % 1 !== 0;
    }};$.metroUtils = window.metroUtils = utils,$.easing.jswing = $.easing.swing,$.extend($.easing,{def:"easeOutQuad",swing(a,b,c,d,e) {
        return $.easing[$.easing.def](a,b,c,d,e);
    },easeInQuad(a,b,c,d,e) {
        return d * (b /= e) * b + c;
    },easeOutQuad(a,b,c,d,e) {
        return -d * (b /= e) * (b - 2) + c;
    },easeInOutQuad(a,b,c,d,e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c;
    },easeInCubic(a,b,c,d,e) {
        return d * (b /= e) * b * b + c;
    },easeOutCubic(a,b,c,d,e) {
        return d * ((b = b / e - 1) * b * b + 1) + c;
    },easeInOutCubic(a,b,c,d,e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c;
    },easeInQuart(a,b,c,d,e) {
        return d * (b /= e) * b * b * b + c;
    },easeOutQuart(a,b,c,d,e) {
        return -d * ((b = b / e - 1) * b * b * b - 1) + c;
    },easeInOutQuart(a,b,c,d,e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c;
    },easeInQuint(a,b,c,d,e) {
        return d * (b /= e) * b * b * b * b + c;
    },easeOutQuint(a,b,c,d,e) {
        return d * ((b = b / e - 1) * b * b * b * b + 1) + c;
    },easeInOutQuint(a,b,c,d,e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c;
    },easeInSine(a,b,c,d,e) {
        return -d * Math.cos(b / e * (Math.PI / 2)) + d + c;
    },easeOutSine(a,b,c,d,e) {
        return d * Math.sin(b / e * (Math.PI / 2)) + c;
    },easeInOutSine(a,b,c,d,e) {
        return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c;
    },easeInExpo(a,b,c,d,e) {
        return 0 == b ? c : d * Math.pow(2,10 * (b / e - 1)) + c;
    },easeOutExpo(a,b,c,d,e) {
        return b == e ? c + d : d * (-Math.pow(2,-10 * b / e) + 1) + c;
    },easeInOutExpo(a,b,c,d,e) {
        return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2,10 * (b - 1)) + c : d / 2 * (-Math.pow(2,-10 * --b) + 2) + c;
    },easeInCirc(a,b,c,d,e) {
        return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c;
    },easeOutCirc(a,b,c,d,e) {
        return d * Math.sqrt(1 - (b = b / e - 1) * b) + c;
    },easeInOutCirc(a,b,c,d,e) {
        return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c;
    },easeInElastic(a,b,c,d,e) {
        var f = 1.70158,g = 0,h = d;return 0 == b ? c : 1 == (b /= e) ? c + d : (g || (g = .3 * e),h < Math.abs(d) ? (h = d,f = g / 4) : f = g / (2 * Math.PI) * Math.asin(d / h),-(h * Math.pow(2,10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g)) + c);
    },easeOutElastic(a,b,c,d,e) {
        var f = 1.70158,g = 0,h = d;return 0 == b ? c : 1 == (b /= e) ? c + d : (g || (g = .3 * e),h < Math.abs(d) ? (h = d,f = g / 4) : f = g / (2 * Math.PI) * Math.asin(d / h),h * Math.pow(2,-10 * b) * Math.sin(2 * (b * e - f) * Math.PI / g) + d + c);
    },easeInOutElastic(a,b,c,d,e) {
        var f = 1.70158,g = 0,h = d;return 0 == b ? c : 2 == (b /= e / 2) ? c + d : (g || (g = .3 * e * 1.5),h < Math.abs(d) ? (h = d,f = g / 4) : f = g / (2 * Math.PI) * Math.asin(d / h),1 > b ? -.5 * h * Math.pow(2,10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) + c : h * Math.pow(2,-10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) * .5 + d + c);
    },easeInBack(a,b,c,d,e,f) {
        return void 0 == f && (f = 1.70158),d * (b /= e) * b * ((f + 1) * b - f) + c;
    },easeOutBack(a,b,c,d,e,f) {
        return void 0 == f && (f = 1.70158),d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c;
    },easeInOutBack(a,b,c,d,e,f) {
        return void 0 == f && (f = 1.70158),(b /= e / 2) < 1 ? d / 2 * b * b * (((f *= 1.525) + 1) * b - f) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c;
    },easeInBounce(a,b,c,d,e) {
        return d - $.easing.easeOutBounce(a,e - b,0,d,e) + c;
    },easeOutBounce(a,b,c,d,e) {
        return (b /= e) < 1 / 2.75 ? 7.5625 * d * b * b + c : 2 / 2.75 > b ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : 2.5 / 2.75 > b ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c;
    },easeInOutBounce(a,b,c,d,e) {
        return e / 2 > b ? .5 * $.easing.easeInBounce(a,2 * b,0,d,e) + c : .5 * $.easing.easeOutBounce(a,2 * b - e,0,d,e) + .5 * d + c;
    }}),$.hotkeys = {version:"0.8",specialKeys:{8:"backspace",9:"tab",10:"return",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",59:";",61:"=",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},shiftNums:{"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":": ","'":"\"",",":"<",".":">","/":"?","\\":"|"},textAcceptingInputTypes:["text","password","number","email","url","range","date","month","week","time","datetime","datetime-local","search","color","tel"],textInputTypes:/textarea|input|select/i,options:{filterInputAcceptingElements:!0,filterTextInputs:!0,filterContentEditable:!0}},$.each(["keydown","keyup","keypress"],function() {
        $.event.special[this] = {add:keyHandler};
    });var toFix = ["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],toBind = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel","DomMouseScroll","MozMousePixelScroll"],lowestDelta,lowestDeltaXY;if ($.event.fixHooks) {
        for (var i = toFix.length;i;) {
            $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
        }
    }$.event.special.mousewheel = {setup() {
        if (this.addEventListener) {
            for (var a = toBind.length;a;) {
                this.addEventListener(toBind[--a],handler,!1);
            }
        } else {
            this.onmousewheel = handler;
        }
    },teardown() {
        if (this.removeEventListener) {
            for (var a = toBind.length;a;) {
                this.removeEventListener(toBind[--a],handler,!1);
            }
        } else {
            this.onmousewheel = null;
        }
    }},$.fn.extend({mousewheel(a) {
        return a ? this.bind("mousewheel",a) : this.trigger("mousewheel");
    },unmousewheel(a) {
        return this.unbind("mousewheel",a);
    }}),document.addEventListener("DOMContentLoaded",function() {
        preCode("pre code, textarea");
    },!1);var hasTouch = "ontouchend" in window,eventTimer,moveDirection = "undefined",startX,startY,deltaX,deltaY,mouseDown = !1,addTouchEvents = function(a) {
            hasTouch && (a.addEventListener("touchstart",touch2Mouse,!0),a.addEventListener("touchmove",touch2Mouse,!0),a.addEventListener("touchend",touch2Mouse,!0));
        },TemplateEngine = function(a,b) {
            for (var c,d,e = /<%(.+?)%>/g,f = /(^( )?(var|if|for|else|switch|case|break|{|}|;))(.*)?/g,g = "with(obj) { var r=[];\n",h = 0,i = function(a,b) {
                return g += b ? a.match(f) ? `${a  }\n` : `r.push(${a});\n` : "" != a ? `r.push("${  a.replace(/"/g,"\\\"")  }");\n` : "",i;
            };d = e.exec(a);) {
                i(a.slice(h,d.index))(d[1],!0),h = d.index + d[0].length;
            }i(a.substr(h,a.length - h)),g = (`${g}return r.join(""); }`).replace(/[\r\t\n]/g," ");try {
                c = new Function("obj",g).apply(b,[b]);
            } catch (j) {
                console.error(`'${j.message}'`," in \n\nCode:\n",g,"\n");
            } return c;
        };window.metroTemplate = TemplateEngine,$.Template = TemplateEngine,$.widget("metro.accordion",{version:"3.0.0",options:{closeAny:!1,speed:"fast",onFrameOpen() {
        return !0;
    },onFrameOpened() {},onFrameClose() {
        return !0;
    },onFrameClosed() {}},init() {
        var a = this,b = this.element;b.on("click",".heading",function(b) {
            var c = $(this).parent();return c.hasClass("disabled") ? !1 : (c.hasClass("active") ? a._closeFrame(c) : a._openFrame(c),b.preventDefault(),void b.stopPropagation());
        });
    },_closeAllFrames() {
        var a = this,b = this.element.children(".frame.active");$.each(b,function() {
            a._closeFrame($(this));
        });
    },_openFrame(frame) {
        var o = this.options,content = frame.children(".content"),result;if ("function" === typeof o.onFrameOpen) {
            if (!o.onFrameOpen(frame)) {
                return !1;
            }
        } else if ("function" === typeof window[o.onFrameOpen]) {
            if (!window[o.onFrameOpen](frame)) {
                return !1;
            }
        } else if (result = eval(`(function(){${o.onFrameOpen}})`),!result.call(frame)) {
            return !1;
        }o.closeAny && this._closeAllFrames(),content.slideDown(o.speed),frame.addClass("active"),"function" === typeof o.onFrameOpened ? o.onFrameOpened(frame) : "function" === typeof window[o.onFrameOpened] ? window[o.onFrameOpened](frame) : (result = eval(`(function(){${o.onFrameOpened}})`),result.call(frame));
    },_closeFrame(frame) {
        var o = this.options,content = frame.children(".content"),result;if ("function" === typeof o.onFrameClose) {
            if (!o.onFrameClose(frame)) {
                return !1;
            }
        } else if ("function" === typeof window[o.onFrameClose]) {
            if (!window[o.onFrameClose](frame)) {
                return !1;
            }
        } else if (result = eval(`(function(){${o.onFrameClose}})`),!result.call(frame)) {
            return !1;
        }content.slideUp(o.speed,function() {
            frame.removeClass("active");
        }),"function" === typeof o.onFrameClosed ? o.onFrameClosed(frame) : "function" === typeof window[o.onFrameClosed] ? window[o.onFrameClosed](frame) : (result = eval(`(function(){${o.onFrameClosed}})`),result.call(frame));
    },_create() {
        var a = this,b = this.options,c = this.element;$.each(this.element.data(),function(a,c) {
            if (a in b) {
                try {
                    b[a] = $.parseJSON(c);
                } catch (d) {
                    b[a] = c;
                }
            }
        }),a.init(),c.data("accordion",this);
    },_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    }}),$.widget("metro.appbar",{version:"3.0.0",options:{flexstyle:"app-bar-menu",flexclean:!1,flextolerance:3},_create() {
        var a = this.element,b = this.options;$.each(a.data(),function(a,c) {
            if (a in b) {
                try {
                    b[a] = $.parseJSON(c);
                } catch (d) {
                    b[a] = c;
                }
            }
        }),this._initBar(),a.data("appbar",this);
    },_calculateFreeSpace() {
        var a,b,c = this,d = (this.element,this.options,0),e = 0;d = $(c.menusParent).width(),a = $(c.menusParent).children(":visible")
            .not(".app-bar-pullmenu");for (var f,g = [],h = [],i = [],j = 0,k = a.length;k > j;j++) {
            switch (f = $(a[j]).css("float")) {
            case "left":g.push(a[j]);break;case "right":h.push(a[j]);break;default:i.push(a[j]);
            }
        }h.reverse(),a = new Array,a = g.concat(i,h),a = $(a),e += parseInt($(a).first()
            .css("margin-left"));for (var j = 0,k = a.length - 1;k >= j;j++) {
            e += $(a[j]).outerWidth(),j !== k && (e += Math.max(parseInt($(a[j]).css("margin-right")),parseInt($(a[j + 1]).css("margin-left"))));
        } return e += parseInt($(a[k]).css("margin-right")),b = d - e,c.freeSpace = b,c.childrenWidth = e,c.menusParentWidth = d,b;
    },_originIndexMove(a,b) {
        var c = $(a).children()
            .filter(function() {
                return parseInt($(this).attr("data-flexorderorigin")) < parseInt($(b).attr("data-flexorderorigin"));
            });c.length > 0 ? $(c).last()
            .after(b) : (c = $(a).children()
            .filter(function() {
                return parseInt($(this).attr("data-flexorderorigin")) > parseInt($(b).attr("data-flexorderorigin"));
            }),c.length > 0 ? $(c).first()
                .before(b) : $(a).append(b));
    },_moveMenuEntry(a) {
        {var b = this;this.element,this.options;} if (a = a || "toPullMenu","toPullMenu" === a) {
            var c = $(b.allMenuEntries).not(".app-bar-pullmenu-entry")
                .last();if (0 === c.length) {
                return !1;
            } var d = $(c).parent(),e = $(b.flexVisibles).index($(c).parent()),f = $(b.pullMenu).find(".app-bar-pullmenubar")
                .eq(e);return b._originIndexMove(f,c),$(c).addClass("app-bar-pullmenu-entry"),$(f).removeClass("hidden")
                .show(),0 === $(d).children().length && $(d).addClass("hidden"),$(b.pullButton).show(),c;
        } if ("fromPullMenu" === a) {
            var g = $(b.allMenuEntries).filter(".app-bar-pullmenu-entry")
                    .first(),f = $(g).parent(),e = $(f).index(),d = $(b.flexVisibles).eq(e);return $(d).removeClass("hidden"),$(g).removeClass("app-bar-pullmenu-entry"),b._originIndexMove(d,g),0 === $(f).children().length && $(f).addClass("hidden")
                .hide(),0 === $(b.pullMenu).children(".app-bar-pullmenubar")
                .not(".hidden").length && ($(b.pullMenu).hide()
                .addClass("hidden"),$(b.pullButton).hide()),0 === g.length ? !1 : g;
        }
    },_checkMenuEntries() {
        for (var a = this,b = (this.element,this.options),c = !1,d = 0,e = a.allMenuEntries.length;e > d;d++) {
            a._calculateFreeSpace();var f = a.freeSpace;if (!(f < b.flextolerance || b.flexclean)) {
                if (a._moveMenuEntry("fromPullMenu")) {
                    c = !0;continue;
                } break;
            } if (!a._moveMenuEntry("toPullMenu")) {
                break;
            } if (c) {
                break;
            }
        }
    },resize() {
        {var a = this;this.element,this.options;}a.initiatedAsFlex && this._checkMenuEntries();
    },_initBar() {
        var a = this,b = this.element,c = this.options;a.lastFlexAction = void 0,a.pullButton = $(b).find(".app-bar-pullbutton");var d = $(b).find(".app-bar-menu");a.initiatedAsFlex = !1,c.flexclean = $(b).is("[data-flexclean='true']") || c.flexclean,c.flexstyle = $(b).attr("data-flexstyle") || c.flexstyle;var e,f;a.flexVisibles = $(),a.allMenuEntries = $(),a.menusParent = $(),a.pullMenu = $(),
        d.length > 0 && $(b).is(":not('.no-flexible')") && (a.flexVisibles = $(d).not(".no-flexible"),a.flexVisibles.length > 0 && (a.initiatedAsFlex = !0,a.flexVisibles.sort(function(a,b) {
            var c = parseInt($(a).data("flexorder")) || $(a).index() + 1,d = parseInt($(b).data("flexorder")) || $(b).index() + 1;return c - d;
        }),$(a.flexVisibles).each(function() {
                e = this,f = $(e).children(),$(f).each(function() {
                    $(this).attr("data-flexorderorigin",$(this).index()),$(this).is("[data-flexorder]") || $(this).attr("data-flexorder",$(this).index() + 1);
                }),f.sort(function(a,b) {
                    var c = parseInt($(a).data("flexorder")),d = parseInt($(b).data("flexorder"));return c - d;
                }),$(e).is("[data-flexdirection='reverse']") && f.reverse(),$.merge(a.allMenuEntries,$(f).not(".no-flexible"));
            }),a.menusParent = $(b).find(".app-bar-menu")
                .first()
                .parent(),a.pullButton.length > 0 || (a.pullButton = $("<div class=\"app-bar-pullbutton automatic\"></div>"),$(a.menusParent).append(a.pullButton)),a.pullMenu = $("<nav class=\"app-bar-pullmenu hidden\" />"),a.flexVisibles.each(function() {
                $(a.pullMenu).append($(`<ul class="app-bar-pullmenubar hidden ${c.flexstyle  }" />`));
            }),$(a.menusParent).append($("<div class=\"clearfix\" style=\"width: 0;\">")),$(a.pullMenu).addClass(`flexstyle-${c.flexstyle}`),$(a.menusParent).append(a.pullMenu),a._checkMenuEntries(),$(a.pullButton).on("click",function() {
                a = $(this).closest("[data-role=appbar]")
                    .data("appbar"),$(a.pullMenu).is(":hidden") ? ($(a.pullMenu).show(),$(a.pullMenu).find(".app-bar-pullmenubar")
                    .hide()
                    .not(".hidden")
                    .slideDown("fast")) : $(a.pullMenu).find(".app-bar-pullmenubar")
                    .not(".hidden")
                    .show()
                    .slideUp("fast",function() {
                        $(a.pullMenu).hide();
                    });
            })));
    },_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    }}),$(window).on("resize",function() {
        $("[data-role=appbar]:not(.no-flexible)").each(function() {
            $(this).data("appbar")
                .resize();
        });
    }),$(window).on("load",function() {
        $("[data-role=appbar]:not(.no-flexible)").each(function() {
            $(this).data("appbar")
                .resize();
        });
    }),$("[data-role=appbar]:not(.no-flexible) [src]").on("load",function() {
        var a = $(this).closest("[data-role=appbar]")
            .data("appbar");a.resize();
    }),$.widget("metro.audio",{version:"3.0.14",options:{src:!1,volume:.5,muted:!1,loop:!1,preload:!1,autoplay:!1,playList:!1,mode:"full",loopButton:"<span class='mif-loop'></span>",stopButton:"<span class='mif-stop'></span>",playButton:"<span class='mif-play'></span>",pauseButton:"<span class='mif-pause'></span>",muteButton:"<span class='mif-volume-mute2'></span>",shuffleButton:"<span class='mif-shuffle'></span>",nextButton:"<span class='mif-forward'></span>",prevButton:"<span class='mif-backward'></span>",randomButton:"<span class='mif-dice'></span>",playListButton:"<span class='mif-list2'></span>",volumeLowButton:"<span class='mif-volume-low'></span>",volumeMediumButton:"<span class='mif-volume-medium'></span>",volumeHighButton:"<span class='mif-volume-high'></span>"},_create() {
        {var a = this.element;this.options;} this._setOptionsFromDOM(),this._createPlayer(),this._addControls(),this._addEvents(),this._addPlayList(),this._setControlsVisibility(),a.data("audio",this);
    },_setControlsVisibility() {
        {var a = this.element;this.options;}0 == a.find(".play-list").length && (a.find(".controls .plist").hide(),a.find(".controls .next").hide(),a.find(".controls .prev").hide(),a.find(".controls .random").hide());
    },_addPlayList() {
        {var a,b,c,d,e,f,g = this,h = this.element,i = this.options;h.find("audio");} if (i.playList && void 0 != window[i.playList] && "function" === typeof window[i.playList] && (a = window[i.playList](),b = a.items,c = $("<div>").addClass("play-list-wrapper")
            .insertBefore(h.find("audio")),void 0 != a.title && (e = $("<h1>").addClass("album-title")
                .html(a.title)
                .appendTo(c)),void 0 != a.poster && (d = $("<div>").addClass("poster")
                .html($("<img>").attr("src",a.poster))
                .appendTo(c)),void 0 != a.desc && $("<div>").addClass("album-desc")
                .html(a.desc)
                .appendTo(d),f = $("<ul>").addClass("play-list")
                .appendTo(c),void 0 != b && $.each(a.items,function() {
                var a,b = this;a = $("<li>").appendTo(f),a.data("src",b.file),void 0 != b.type && a.data("type",b.type),a.html(void 0 != b.title ? b.title : b.file.replace(/^.*[\\\/]/,""));
            })),f = h.find("ul"),0 == f.length) {
            return this;
        }f.addClass("play-list");var j = f.find("li");return 0 == j.length ? this : ($.each(j,function() {
            {var a = $(this);$("<div>").addClass("progress-bar small no-margin-top")
                .data("role","progress")
                .appendTo(a)
                .hide();}a.on("click",function() {
                j.removeClass("current"),j.find(".progress-bar").hide();var b = a.data("src"),c = a.data("type");a.addClass("current"),a.find(".progress-bar").show(),h.data("current",a),g.play(b,c);
            });
        }),$(j[0]).click(),this._stop(),void h.data("current",$(j[0])));
    },_createPlayer() {
        var a = this.element,b = this.options,c = a.find("audio");a.addClass("audio-player"),a.addClass(b.mode),0 == c.length && (c = $("<audio>").appendTo(a)),$.each(["autoplay","controls","muted","loop","preload"],function() {
            c.removeAttr(this);
        }),b.src && c.attr(src,b.src),b.loop && c.attr("loop","loop"),b.preload && c.attr("preload","auto"),b.autoplay && c.attr("autoplay","autoplay"),c[0].volume = b.volume,c[0].muted = b.muted,a.data("muted",!1),a.data("duration",0),a.data("played",!1),a.data("volume",c[0].volume),a.data("current",!1);
    },_addControls() {
        var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o = this,p = this.element,q = this.options,r = p.find("audio"),s = r[0];a = $("<div>").addClass("controls")
            .appendTo(p),q.playListButton !== !1 && (n = $("<button/>").addClass("square-button control-element plist")
            .html(q.playListButton)
            .appendTo(a),n.on("click",function() {
                var a = p.find(".play-list-wrapper");return 0 == a.length ? o : void a.toggleClass("not-visible");
            })),q.loopButton !== !1 && (c = $("<button/>").addClass("square-button control-element loop")
            .html(q.loopButton)
            .appendTo(a),c.on("click",function() {
                c.toggleClass("active"),c.hasClass("active") ? r.attr("loop","loop") : r.removeAttr("loop");
            })),q.playButton !== !1 && (b = $("<button/>").addClass("square-button control-element play")
            .html(q.playButton)
            .appendTo(a),b.on("click",function() {
                o._play();
            })),q.prevButton !== !1 && (l = $("<button/>").addClass("square-button control-element prev")
            .html(q.prevButton)
            .appendTo(a),l.on("click",function() {
                o._playPrev();
            })),q.nextButton !== !1 && (k = $("<button/>").addClass("square-button control-element next")
            .html(q.nextButton)
            .appendTo(a),k.on("click",function() {
                o._playNext();
            })),q.randomButton !== !1 && (m = $("<button/>").addClass("square-button control-element random")
            .html(q.randomButton)
            .appendTo(a),m.on("click",function() {
                o._playRandom();
            })),q.stopButton !== !1 && (d = $("<button/>").addClass("square-button control-element stop")
            .html(q.stopButton)
            .appendTo(a),d.attr("disabled",!0),d.on("click",function() {
                o._stop();
            })),i = $("<div/>").addClass("control-element stream-wrapper")
            .appendTo(a),g = $("<div/>").addClass("slider stream-slider")
            .appendTo(i),g.slider({showHint:!0,animate:!1,markerColor:"bg-red",completeColor:"bg-cyan",onStartChange() {
            s.pause();
        },onChanged(a) {
            s.seekable.length > 0 && (s.currentTime = (p.data("duration") * a / 100).toFixed(0)),p.data("played") && s.currentTime >= 0 && s.play();
        }}),g.data("slider").value(0),h = $("<div/>").addClass("control-element info-box")
            .appendTo(a),h.html("00:00 / 00:00");var t = $("<div/>").addClass("place-right")
            .appendTo(a);e = $("<button/>").addClass("square-button control-element volume")
            .html(q.volumeLowButton)
            .appendTo(t),e.on("click",function() {
            var a = p.find(".volume-slider").data("slider");p.data("muted",!p.data("muted")),p.data("muted") ? (p.data("volume",s.volume),e.html(q.muteButton),a.value(0)) : (s.volume = p.data("volume"),a.value(100 * p.data("volume")),o._setupVolumeButton()),s.muted = p.data("muted");
        }),this._setupVolumeButton(),j = $("<div/>").addClass("control-element volume-wrapper")
            .appendTo(t),f = $("<div/>").addClass("slider volume-slider")
            .appendTo(j),f.slider({showHint:!0,animate:!1,markerColor:"bg-red",completeColor:"bg-green",onChange(a) {
            s.volume = a / 100,o._setupVolumeButton();
        }}),f.data("slider").value(100 * s.volume);
    },_setupVolumeButton() {
        var a = this.element,b = this.options,c = a.find("audio"),d = c[0],e = a.find(".controls"),f = e.find(".volume"),g = d.volume;f.html(g > 0 && .3 > g ? b.volumeLowButton : g >= .3 && .6 > g ? b.volumeMediumButton : g >= .6 && 1 >= g ? b.volumeHighButton : b.muteButton);
    },_addEvents() {
        var a = this,b = this.element,c = (this.options,b.find("audio")),d = c[0],e = (b.find(".controls"),b.find(".info-box"));c.on("loadedmetadata",function() {
            b.data("duration",d.duration.toFixed(0)),e.html(`00:00 / ${metroUtils.secondsToFormattedString(b.data("duration"))}`);
        }),c.on("canplay",function() {
            var b = d.buffered.length ? Math.round(Math.floor(d.buffered.end(0)) / Math.floor(d.duration) * 100) : 0;a._setBufferSize(b);
        }),c.on("progress",function() {
            var b = d.buffered.length ? Math.round(Math.floor(d.buffered.end(0)) / Math.floor(d.duration) * 100) : 0;a._setBufferSize(b);
        }),c.on("timeupdate",function() {
            if (a._setInfoData(),a._setStreamSliderPosition(),b.data("current")) {
                var c = b.data("current").find(".progress-bar")
                        .data("progress"),e = Math.round(100 * d.currentTime / b.data("duration"));c.value(e);
            }
        }),c.on("waiting",function() {}),c.on("loadeddata",function() {}),c.on("ended",function() {
            a._stop(),b.find(".play-list li").length > 0 && a._playNext();
        });
    },_setInfoData() {
        var a = this.element,b = (a[0],this.options,a.find("audio")),c = b[0],d = a.find(".controls .info-box"),e = Math.round(c.currentTime);d.html(`${metroUtils.secondsToFormattedString(e)} / ${metroUtils.secondsToFormattedString(a.data("duration"))}`);
    },_setStreamSliderPosition() {
        var a = this.element,b = (a[0],this.options,a.find("audio")),c = b[0],d = a.find(".stream-slider").data("slider"),e = Math.round(100 * c.currentTime / a.data("duration"));d.value(e);
    },_setBufferSize(a) {
        var b = this.element,c = (b[0],this.options,b.find("audio")),d = (c[0],b.find(".stream-slider").data("slider"));d.buffer(Math.round(a));
    },_play() {
        var a = this.element,b = (a[0],this.options),c = a.find("audio"),d = c[0],e = a.find(".controls .play"),f = a.find(".controls .stop");d.paused ? (e.html(b.pauseButton),d.play(),f.removeAttr("disabled"),a.data("played",!0),a.trigger("play")) : (e.html(b.playButton),d.pause(),a.data("played",!1),a.trigger("pause"));
    },_playRandom() {
        var a = this.element,b = (a[0],this.options,a.find("audio")),c = (b[0],a.find(".play-list")),d = a.find(".play-list li");if (0 == d.length) {
            return this;
        } var e = Math.floor(Math.random() * d.length) + 1,f = c.find(`li:nth-child(${e})`);f.click();
    },_playNext() {
        var a = this.element,b = (a[0],this.options,a.find("audio")),c = (b[0],a.find(".play-list")),d = a.find(".play-list li");if (0 == d.length) {
            return this;
        } var e = c.find(".current").next();0 == e.length && (e = c.find("li:nth-child(1)")),e.click();
    },_playPrev() {
        var a = this.element,b = (a[0],this.options,a.find("audio")),c = (b[0],a.find(".play-list")),d = a.find(".play-list li");if (0 == d.length) {
            return this;
        } var e = c.find(".current").prev();0 == e.length && (e = c.find("li:last-child")),e.click();
    },_stop() {
        var a = this.element,b = (a[0],this.options),c = a.find("audio"),d = c[0],e = a.find(".controls .stop"),f = a.find(".controls .play");d.pause(),d.currentTime = 0,f.html(b.playButton),e.attr("disabled","disabled"),a.data("played",!1),a.find(".stream-slider").data("slider")
            .value(0),a.trigger("stop");
    },play(a,b) {
        var c,d = this.element,e = (d[0],this.options,d.find("audio")),f = e[0];this._stop(),e.find("source").remove(),e.removeAttr("src"),c = $("<source>").attr("src",a),void 0 != b && c.attr("type",b),f.load(),c.appendTo(e),this._play();
    },pause() {
        var a = this.element,b = (a[0],this.options),c = a.find("audio"),d = c[0],e = a.find(".play");e.html(b.playButton),d.pause(),a.data("played",!1),a.trigger("pause");
    },resume() {
        var a = this.element,b = (a[0],this.options),c = a.find("audio"),d = c[0],e = a.find(".play"),f = a.find(".stop");e.html(b.pauseButton),d.play(),f.removeAttr("disabled"),a.data("played",!0),a.trigger("play");
    },stop() {
        this._stop();
    },_setOptionsFromDOM() {
        var a = this.element,b = this.options;$.each(a.data(),function(a,c) {
            if (a in b) {
                try {
                    b[a] = $.parseJSON(c);
                } catch (d) {
                    b[a] = c;
                }
            }
        });
    },_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    }}),$.widget("metro.group",{version:"3.0.0",options:{groupType:"one-state",buttonStyle:!1,onChange() {
        return !0;
    },onChanged() {}},_create() {
        var that = this,element = this.element,o = this.options,result;$.each(element.data(),function(a,b) {
            if (a in o) {
                try {
                    o[a] = $.parseJSON(b);
                } catch (c) {
                    o[a] = b;
                }
            }
        }),element.hasClass("group-of-buttons") || element.addClass("group-of-buttons");for (var buttons = element.find(".button, .toolbar-button"),i = 0;i < buttons.length;i++) {
            $(buttons[i]).data("index",i);
        }o.buttonStyle !== !1 && buttons.addClass(o.buttonStyle),element.on("click",".button, .toolbar-button",function() {
            var button = $(this),index = button.data("index");if ("function" === typeof o.onChange) {
                if (!o.onChange(index,button)) {
                    return !1;
                }
            } else if ("function" === typeof window[o.onChange]) {
                if (!window[o.onChange](index,button)) {
                    return !1;
                }
            } else if (result = eval(`(function(){${o.onChange}})`),!result.call(index,button)) {
                return !1;
            }"one-state" === o.groupType ? (buttons.removeClass("active"),$(this).addClass("active")) : $(this).toggleClass("active"),"function" === typeof o.onChanged ? o.onChanged(index,button) : "function" === typeof window[o.onChanged] ? window[o.onChanged](index,button) : (result = eval(`(function(){${o.onChanged}})`),result.call(index,button));
        }),element.data("group",this);
    },_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    }}),$.widget("metro.calendar",{version:"3.0.0",options:{format:"yyyy-mm-dd",multiSelect:!1,startMode:"day",weekStart:window.METRO_CALENDAR_WEEK_START,otherDays:!0,date:new Date,minDate:!1,maxDate:!1,preset:!1,exclude:!1,stored:!1,buttons:!0,buttonToday:!0,buttonClear:!0,syncCalenderToDateField:!0,locale:window.METRO_CURRENT_LOCALE,actions:!0,condensedGrid:!1,scheme:"default",getDates() {},dayClick() {}},_year:0,_month:0,_day:0,_today:new Date,_event:"",_mode:"day",_distance:0,_events:[],_create() {
        var a = this,b = this.element,c = this.options;$.each(b.data(),function(a,b) {
            if (a in c) {
                try {
                    c[a] = $.parseJSON(b);
                } catch (d) {
                    c[a] = b;
                }
            }
        }),"string" === typeof c.date && (c.date = new Date(c.date)),c.minDate !== !1 && "string" === typeof c.minDate && (c.minDate = new Date(`${c.minDate}T00:00:00Z`) - 864e5),c.maxDate !== !1 && "string" === typeof c.maxDate && (c.maxDate = new Date(`${c.maxDate}T00:00:00Z`)),this.locales = window.METRO_LOCALES,this._year = c.date.getFullYear(),this._distance = c.date.getFullYear() - 4,this._month = c.date.getMonth(),this._day = c.date.getDate(),this._mode = c.startMode,b.data("_storage",[]),b.data("_exclude",[]),b.data("_stored",[]),b.hasClass("calendar") || b.addClass("calendar");var d,e;c.preset && (d = /\s*,\s*/,e = c.preset.split(d),$.each(e,function() {
            void 0 !== new Date(this) && a.setDate(this);
        })),c.exclude && (d = /\s*,\s*/,e = c.exclude.split(d),$.each(e,function() {
            void 0 !== new Date(this) && a.setDateExclude(this);
        })),c.stored && (d = /\s*,\s*/,e = c.stored.split(d),$.each(e,function() {
            void 0 !== new Date(this) && a.setDateStored(this);
        })),"default" !== c.scheme && b.addClass(c.scheme),this._renderCalendar(),b.data("calendar",this);
    },_renderButtons(a) {
        var b,c,d = this.options;if (this.options.buttons) {
            var e = d.buttonToday ? `<button class='button calendar-btn-today small-button success'>${  this.locales[d.locale].buttons[0]  }</button>` : "",f = d.buttonClear ? `<button class='button calendar-btn-clear small-button warning'>${  this.locales[d.locale].buttons[1]  }</button>` : "";b = $("<div/>").addClass("calendar-row calendar-actions"),c = $("<div/>").addClass("align-center")
                .html(e + f),c.appendTo(b),b.appendTo(a);
        }
    },_renderMonth() {
        var a = this.options,b = this._year,c = this._month,d = (this._day,this._event,28);1 === c && (b % 100 !== 0 && b % 4 === 0 || b % 400 === 0) && (d = 29);var e,f,g,h,i,j = [31,d,31,30,31,30,31,31,30,31,30,31],k = j[c],l = this._dateFromNumbers(b,c + 1,1).getDay();this.element.html(""),e = $("<div/>").addClass("calendar-grid"),a.condensedGrid && e.addClass("condensed no-border"),f = $("<div/>").addClass("calendar-row no-margin"),$("<div/>").addClass("calendar-cell align-center")
            .html("<a class='btn-previous-year' href='#'>-</a>")
            .appendTo(f),$("<div/>").addClass("calendar-cell align-center")
            .html("<a class='btn-previous-month' href='#'>&#12296;</a>")
            .appendTo(f),$("<div/>").addClass("calendar-cell sel-month align-center")
            .html(`<a class='btn-select-month' href='#'>${this.locales[a.locale].months[c + 12]} ${b}</a>`)
            .appendTo(f),$("<div/>").addClass("calendar-cell align-center")
            .html("<a class='btn-next-month' href='#'>&#12297;</a>")
            .appendTo(f),$("<div/>").addClass("calendar-cell align-center")
            .html("<a class='btn-next-year' href='#'>+</a>")
            .appendTo(f),f.addClass("calendar-header").appendTo(e);var m;for (f = $("<div/>").addClass("calendar-row week-days"),h = 0;7 > h;h++) {
            a.weekStart ? (m = h + 1,7 === m && (m = 0),g = $("<div/>").addClass("calendar-cell align-center day-of-week")
                .appendTo(f),i = $("<div/>").html(this.locales[a.locale].days[m + 7])
                    .appendTo(g)) : (g = $("<div/>").addClass("calendar-cell align-center day-of-week")
                .appendTo(f),i = $("<div/>").html(this.locales[a.locale].days[h + 7])
                    .appendTo(g));
        }f.addClass("calendar-subheader").appendTo(e);var n = this._month - 1;0 > n && (n = 11);var o = j[n],p = (a.weekStart ? l + 6 : l) % 7,q = "";for (f = $("<div/>").addClass("calendar-row"),h = 0;p > h;h++) {
            a.otherDays && (q = o - (p - h - 1)),g = $("<div/>").addClass("calendar-cell empty")
                .appendTo(f),i = $("<div/>").addClass("other-day")
                .html(q)
                .appendTo(g),a.otherDays || i.css("visibility","hidden");
        } var r,s,t,u = (a.weekStart ? l + 6 : l) % 7;for (h = 1;k >= h;h++) {
            u %= 7,0 === u && (f.appendTo(e),f = $("<div/>").addClass("calendar-row")),g = $("<div/>").addClass("calendar-cell align-center day"),i = $("<div/>").appendTo(g),a.minDate !== !1 && this._dateFromNumbers(b,c + 1,h) < a.minDate || a.maxDate !== !1 && this._dateFromNumbers(b,c + 1,h) > a.maxDate ? (g.removeClass("day"),i.addClass("other-day"),t = h) : t = `<a href='#'>${  h  }</a>`,i.html(t),b === this._today.getFullYear() && c === this._today.getMonth() && this._today.getDate() === h && g.addClass("today"),r = this._dateNumberStringyFy(this._year,this._month + 1,h),this.element.data("_storage").indexOf(r) >= 0 && (s = g.find("a"),s.parent().parent()
                .addClass("selected")),this.element.data("_exclude").indexOf(r) >= 0 && (s = g.find("a"),s.parent().parent()
                .addClass("exclude")),this.element.data("_stored").indexOf(r) >= 0 && (s = g.find("a"),s.parent().parent()
                .addClass("stored")),g.appendTo(f),u++;
        } var v = "";for (h = u + 1;7 >= h;h++) {
            a.otherDays && (v = h - u),g = $("<div/>").addClass("calendar-cell empty")
                .appendTo(f),i = $("<div/>").addClass("other-day")
                .html(v)
                .appendTo(g),a.otherDays || i.css("visibility","hidden");
        }f.appendTo(e),this._renderButtons(e),e.appendTo(this.element);
    },_renderMonths() {
        var a,b,c,d,e;for (this.element.html(""),a = $("<div/>").addClass("calendar-grid"),this.options.condensedGrid && a.addClass("condensed no-border"),b = $("<div/>").addClass("calendar-row"),$("<div/>").addClass("calendar-cell sel-minus align-center")
            .html("<a class='btn-previous-year' href='#'>-</a>")
            .appendTo(b),$("<div/>").addClass("calendar-cell sel-year align-center")
                .html(`<a class='btn-select-year' href='#'>${this._year}</a>`)
                .appendTo(b),$("<div/>").addClass("calendar-cell sel-plus align-center")
                .html("<a class='btn-next-year' href='#'>+</a>")
                .appendTo(b),b.addClass("calendar-header").appendTo(a),b = $("<div/>").addClass("calendar-row"),e = 0,d = 0;12 > d;d++) {
            c = $("<div/>").addClass("calendar-cell month-cell align-center month")
                .html(`<a href='#' data-month='${d}'>${this.locales[this.options.locale].months[d + 12]}</a>`),this._month === d && (new Date).getFullYear() === this._year && c.addClass("today"),c.appendTo(b),(e + 1) % 4 === 0 && (b.appendTo(a),b = $("<div/>").addClass("calendar-row")),e += 1;
        } this._renderButtons(a),a.appendTo(this.element);
    },_renderYears() {
        var a,b,c,d,e;for (this.element.html(""),a = $("<div/>").addClass("calendar-grid"),this.options.condensedGrid && a.addClass("condensed no-border"),b = $("<div/>").addClass("calendar-row cells4"),$("<div/>").addClass("calendar-cell sel-minus align-center")
            .html("<a class='btn-previous-year' href='#'>-</a>")
            .appendTo(b),$("<div/>").addClass("calendar-cell sel-year align-center")
                .html(`<a class='btn-none-btn'>${this._distance}-${this._distance + 11}</a>`)
                .appendTo(b),$("<div/>").addClass("calendar-cell sel-plus align-center")
                .html("<a class='btn-next-year' href='#'>+</a>")
                .appendTo(b),b.addClass("calendar-header").appendTo(a),b = $("<div/>").addClass("calendar-row"),e = 0,d = this._distance;d < this._distance + 12;d++) {
            c = $("<div/>").addClass("calendar-cell year-cell align-center year")
                .html(`<a href='#' data-year='${d}'>${d}</a>`),(new Date).getFullYear() === d && c.addClass("today"),c.appendTo(b),(e + 1) % 4 === 0 && (b.appendTo(a),b = $("<div/>").addClass("calendar-row")),e += 1;
        } this._renderButtons(a),a.appendTo(this.element);
    },_renderCalendar() {
        switch (this._mode) {
        case "year":this._renderYears();break;case "month":this._renderMonths();break;default:this._renderMonth();
        } this._initButtons();
    },_initButtons() {
        var that = this,o = this.options,table = this.element.find(".calendar-grid");"day" === this._mode ? (table.find(".btn-select-month").off("click")
            .on("click",function(a) {
                a.preventDefault(),a.stopPropagation(),that._mode = "month",that._renderCalendar();
            }),table.find(".btn-previous-month").off("click")
                .on("click",function(a) {
                    that._event = "eventPrevious",a.preventDefault(),a.stopPropagation(),that._month -= 1,that._month < 0 && (that._year -= 1,that._month = 11),that._renderCalendar();
                }),table.find(".btn-next-month").off("click")
                .on("click",function(a) {
                    that._event = "eventNext",a.preventDefault(),a.stopPropagation(),that._month += 1,12 === that._month && (that._year += 1,that._month = 0),that._renderCalendar();
                }),table.find(".btn-previous-year").off("click")
                .on("click",function(a) {
                    that._event = "eventPrevious",a.preventDefault(),a.stopPropagation(),that._year -= 1,that._renderCalendar();
                }),table.find(".btn-next-year").off("click")
                .on("click",function(a) {
                    that._event = "eventNext",a.preventDefault(),a.stopPropagation(),that._year += 1,that._renderCalendar();
                }),table.find(".day a").on("click",function(e) {
                if (e.preventDefault(),e.stopPropagation(),$(this).parent()
                    .parent()
                    .hasClass("exclude")) {
                    return !1;
                } var d = new Date(that._paddy(that._year,4),that._paddy(that._month,2),that._paddy(parseInt($(this).html()),2)).format(that.options.format,null),d0 = new Date(that._paddy(that._year,4),that._paddy(that._month,2),that._paddy(parseInt($(this).html()),2));if (that.options.multiSelect ? ($(this).parent()
                    .parent()
                    .toggleClass("selected"),$(this).parent()
                        .parent()
                        .hasClass("selected") ? that._addDate(that._dateStringyFy(d0)) : that._removeDate(that._dateStringyFy(d0))) : (table.find(".day a").parent()
                    .parent()
                    .removeClass("selected"),$(this).parent()
                        .parent()
                        .addClass("selected"),that.element.data("_storage",[]),that._addDate(that._dateStringyFy(d0))),"function" === typeof o.dayClick) {
                    o.dayClick(d,d0);
                } else if ("function" === typeof window[o.dayClick]) {
                    window[o.dayClick](d,d0);
                } else {
                    var result = eval(`(function(){${o.dayClick}})`);result.call(d,d0);
                }
            })) : "month" === this._mode ? (table.find(".month a").off("click")
            .on("click",function(a) {
                that._event = "eventNext",a.preventDefault(),a.stopPropagation(),that._month = parseInt($(this).data("month")),that._mode = "day",that._renderCalendar();
            }),table.find(".btn-previous-year").off("click")
                .on("click",function(a) {
                    that._event = "eventPrevious",a.preventDefault(),a.stopPropagation(),that._year -= 1,that._renderCalendar();
                }),table.find(".btn-next-year").off("click")
                .on("click",function(a) {
                    that._event = "eventNext",a.preventDefault(),a.stopPropagation(),that._year += 1,that._renderCalendar();
                }),table.find(".btn-select-year").off("click")
                .on("click",function(a) {
                    that._event = "eventNext",a.preventDefault(),a.stopPropagation(),that._mode = "year",that._renderCalendar();
                })) : (table.find(".year a").off("click")
            .on("click",function(a) {
                that._event = "eventNext",a.preventDefault(),a.stopPropagation(),that._year = parseInt($(this).data("year")),that._mode = "month",that._renderCalendar();
            }),table.find(".btn-previous-year").off("click")
                .on("click",function(a) {
                    that._event = "eventPrevious",a.preventDefault(),a.stopPropagation(),that._distance -= 10,that._renderCalendar();
                }),table.find(".btn-next-year").off("click")
                .on("click",function(a) {
                    that._event = "eventNext",a.preventDefault(),a.stopPropagation(),that._distance += 10,that._renderCalendar();
                })),table.find(".calendar-btn-today").off("click")
            .on("click",function(a) {
                a.preventDefault(),a.stopPropagation(),that._mode = that.options.startMode,that.options.date = new Date,that._year = that.options.date.getFullYear(),that._month = that.options.date.getMonth(),that._day = that.options.date.getDate(),that._renderCalendar();
            }),table.find(".calendar-btn-clear").off("click")
            .on("click",function(a) {
                a.preventDefault(),a.stopPropagation(),that.options.date = new Date,that._year = that.options.date.getFullYear(),that._month = that.options.date.getMonth(),that._day = that.options.date.getDate(),that.element.data("_storage",[]),that._renderCalendar();
            });
    },_addDate(a) {
        var b = this.element.data("_storage").indexOf(a);0 > b && this.element.data("_storage").push(a);
    },_removeDate(a) {
        var b = this.element.data("_storage").indexOf(a);this.element.data("_storage").splice(b,1);
    },_addDateExclude(a) {
        var b = this.element.data("_exclude").indexOf(a);0 > b && this.element.data("_exclude").push(a);
    },_addDateStored(a) {
        var b = this.element.data("_stored").indexOf(a);0 > b && this.element.data("_stored").push(a);
    },_removeDateExclude(a) {
        var b = this.element.data("_exclude").indexOf(a);this.element.data("_exclude").splice(b,1);
    },_removeDateStored(a) {
        var b = this.element.data("_stored").indexOf(a);this.element.data("_stored").splice(b,1);
    },_paddy(a,b,c) {
        var d = "undefined" !== typeof c ? c : "0",e = new Array(1 + b).join(d);return (e + a).slice(-e.length);
    },_dateFromNumbers(a,b,c) {
        return new Date(`${this._paddy(a,4)}/${this._paddy(b,2)}/${this._paddy(c,2)}`);
    },_dateNumberStringyFy(a,b,c) {
        return this._dateFromNumbers(a,b,c).format("yyyy-mm-dd");
    },_dateStringyFy(a) {
        return this._dateNumberStringyFy(a.getFullYear(),a.getMonth() + 1,a.getDate());
    },setDate(a) {
        var b;a = new Date(a),b = this._dateNumberStringyFy(a.getFullYear(),a.getMonth() + 1,a.getDate()),this._addDate(b),this.options.syncCalenderToDateField && (this._year = a.getFullYear(),this._month = a.getMonth(),this._day = a.getDate()),this._renderCalendar();
    },setDateExclude(a) {
        var b;a = new Date(a),b = this._dateNumberStringyFy(a.getFullYear(),a.getMonth() + 1,a.getDate()),this._addDateExclude(b),this._renderCalendar();
    },setDateStored(a) {
        var b;a = new Date(a),b = this._dateNumberStringyFy(a.getFullYear(),a.getMonth() + 1,a.getDate()),this._addDateStored(b),this._renderCalendar();
    },getDate(a) {
        return new Date(void 0 !== a ? this.element.data("_storage")[a] : this.element.data("_storage")[0]).format(this.options.format);
    },getDates() {
        var a;return a = $.merge($.merge([],this.element.data("_storage")),this.element.data("_stored")),a.unique();
    },unsetDate(a) {
        var b;a = new Date(a),b = this._dateNumberStringyFy(a.getFullYear(),a.getMonth() + 1,a.getDate()),this._removeDate(b),this._renderCalendar();
    },unsetDateExclude(a) {
        var b;a = new Date(a),b = this._dateNumberStringyFy(a.getFullYear(),a.getMonth() + 1,a.getDate()),this._removeDateExclude(b),this._renderCalendar();
    },unsetDateStored(a) {
        var b;a = new Date(a),b = this._dateNumberStringyFy(a.getFullYear(),a.getMonth() + 1,a.getDate()),this._removeDateStored(b),this._renderCalendar();
    },_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    }}),$.widget("metro.carousel",{version:"3.0.0",options:{auto:!0,period:5e3,duration:1e3,effect:"slide",effectFunc:"linear",direction:"left",controls:!0,controlNext:!1,controlPrev:!1,markers:!0,stop:!0,width:"100%",height:!1,_slides:{},_currentIndex:0,_interval:0,_outPosition:0,_animating:!1},_create() {
        var a = this,b = this.options,c = this.element;$.each(c.data(),function(a,c) {
            if (a in b) {
                try {
                    b[a] = $.parseJSON(c);
                } catch (d) {
                    b[a] = c;
                }
            }
        }),b._slides = c.find(".slide");var d = 0;$.each(b._slides,function() {
            var a,b = $(this);a = b.outerHeight(),a > d && (d = a);
        }),c.css({width:b.width,height:b.height ? b.height : d}),b._slides.length <= 1 || (b.markers && this._markers(),b.controls && this._controls(),b.stop && c.on("mouseenter",function() {
            clearInterval(b._interval);
        }).on("mouseleave",function() {
            a.options.auto && a._autoStart();
        }),c.find(".slide").hide(),c.find(".slide:nth-child(1)").show(),b.auto && this._autoStart(),c.data("carousel",this));
    },_autoStart() {
        var a = this,b = this.options;b._interval = setInterval(function() {
            a._slideTo("left" === b.direction ? "next" : "prior");
        },b.period);
    },_slideTo(a) {
        var b,c = this.element,d = this.options,e = d._slides[d._currentIndex];switch (void 0 === a && (a = "next"),"prior" === a ? (d._currentIndex -= 1,d._currentIndex < 0 && (d._currentIndex = d._slides.length - 1),d._outPosition = this.element.width()) : "next" === a && (d._currentIndex += 1,d._currentIndex >= d._slides.length && (d._currentIndex = 0),d._outPosition = -this.element.width()),b = d._slides[d._currentIndex],this.options.effect) {
        case "switch":this._effectSwitch(e,b);break;case "slowdown":this._effectSlowdown(e,b,this.options.duration);break;case "fade":this._effectFade(e,b,this.options.duration);break;default:this._effectSlide(e,b,this.options.duration);
        }c.find(".carousel-bullets a").each(function() {
            var a = $(this).data("num");a === d._currentIndex ? $(this).addClass("bullet-on") : $(this).removeClass("bullet-on");
        });
    },_slideToSlide(a) {
        var b = this.options,c = b._slides[b._currentIndex],d = b._slides[a];if (b._currentIndex === a) {
            return !1;
        } switch (b._outPosition = a > b._currentIndex ? -this.element.width() : this.element.width(),this.options.effect) {
        case "switch":this._effectSwitch(c,d);break;case "slowdown":this._effectSlowdown(c,d);break;case "fade":this._effectFade(c,d);break;default:this._effectSlide(c,d);
        }b._currentIndex = a;
    },_controls() {
        var a,b,c = this,d = this.element,e = this.options;a = $("<span/>").addClass("carousel-switch-next")
            .html("&gt;"),b = $("<span/>").addClass("carousel-switch-prev")
            .html("&lt;"),e.controlNext && a.html(e.controlNext),e.controlPrev && b.html(e.controlPrev),a.appendTo(d),b.appendTo(d),e._slides.length > 1 ? (b.on("click",function() {
            e._animating === !1 && (c._slideTo("prior"),e._animating = !0,setTimeout(function() {
                e._animating = !1;
            },e.duration));
        }),a.on("click",function() {
                e._animating === !1 && (c._slideTo("next"),e._animating = !0,setTimeout(function() {
                    e._animating = !1;
                },e.duration));
            })) : (a.hide(),b.hide());
    },_markers() {
        var a,b,c,d = this,e = this.options;for (a = $("<div class=\"carousel-bullets\" />"),c = 0;c < e._slides.length;c++) {
            b = $(`<a class="carousel-bullet" href="javascript:void(0)" data-num="${c  }"></a>`),0 === c && b.addClass("bullet-on"),b.appendTo(a);
        }a.find("a").on("click",function(b) {
            var c = $(this),f = c.data("num");return a.find("a").removeClass("bullet-on"),c.addClass("bullet-on"),f === e._currentIndex ? !1 : (d._slideToSlide(f),b.preventDefault(),void b.stopPropagation());
        }),a.appendTo(this.element);
    },_effectSwitch(a,b) {
        $(a).hide(),$(b).css({left:0})
            .show(),this.element.css({height:$(b).outerHeight()});
    },_effectSlide(a,b) {
        var c = this.options;$(a).animate({left:c._outPosition},c.duration,c.effectFunc),$(b).css("left",-1 * c._outPosition)
            .show(),this.element.css({height:$(b).outerHeight()}),$(b).animate({left:0},c.duration,c.effectFunc);
    },_effectSlowdown(a,b) {
        var c = this.options,d = {duration:c.duration,easing:"doubleSqrt"};$.easing.doubleSqrt = function(a) {
            return Math.sqrt(Math.sqrt(a));
        },$(a).animate({left:c._outPosition},d),$(b).css("left",-1 * c._outPosition)
            .show(),this.element.css({height:$(b).outerHeight()}),$(b).animate({left:0},d);
    },_effectFade(a,b) {
        var c = this.options;$(a).fadeOut(c.duration),$(b).css({left:0})
            .fadeIn(c.duration),this.element.css({height:$(b).outerHeight()});
    },slideTo(a) {
        this._slideToSlide(a);
    },nextSlide() {
        this._slideTo("next");
    },priorSlide() {
        this._slideTo("prior");
    },_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    }}),$.widget("metro.charm",{version:"3.0.0",options:{position:"right",opacity:1,outside:!1,timeout:0,duration:400},_create() {
        var a = this.element,b = this.options;$.each(a.data(),function(a,c) {
            if (a in b) {
                try {
                    b[a] = $.parseJSON(c);
                } catch (d) {
                    b[a] = c;
                }
            }
        }),this._createCharm(),a.data("charm",this);
    },_createCharm() {
        var a = this,b = this.element,c = this.options;b.addClass("charm").addClass(`${c.position}-side`)
            .css({opacity:c.opacity})
            .hide();var d = $("<span/>").addClass("charm-closer")
            .appendTo(b);d.on("click",function() {
            a.close();
        }),c.outside === !0 && b.on("mouseleave",function() {
            a.close();
        });
    },_showCharm() {
        var a,b = this,c = this.element,d = this.options;"left" === d.position || "right" === d.position ? (a = c.outerWidth(),"left" === d.position ? c.css({left:-a,right:"auto",top:0,bottom:0}).show()
            .animate({left:0},d.duration,function() {
                c.data("displayed",!0);
            }) : c.css({right:-a,left:"auto",top:0,bottom:0}).show()
            .animate({right:0},d.duration,function() {
                c.data("displayed",!0);
            })) : (a = c.outerHeight(),"top" === d.position ? c.css({top:-a,bottom:"auto",left:0,right:0}).show()
            .animate({top:0},d.duration,function() {
                c.data("displayed",!0);
            }) : c.css({bottom:-a,top:"auto",left:0,right:0}).show()
            .animate({bottom:0},d.duration,function() {
                c.data("displayed",!0);
            })),d.timeout > 0 && (this._timeout_interval = setInterval(function() {
            c.is(":hover") || (b.close(),clearInterval(b._timeout_interval));
        },d.timeout));
    },_hideCharm() {
        var a,b = this.element,c = this.options;"left" === c.position || "right" === c.position ? (a = b.outerWidth(),"left" === c.position ? b.animate({left:-a},c.duration,function() {
            b.hide(),b.data("displayed",!1);
        }) : b.animate({right:-a},c.duration,function() {
            b.hide(),b.data("displayed",!1);
        })) : (a = b.outerHeight(),"top" === c.position ? b.animate({top:-a},c.duration,function() {
            b.hide(),b.data("displayed",!1);
        }) : b.animate({bottom:-a},c.duration,function() {
            b.hide(),b.data("displayed",!1);
        })),clearInterval(this._timeout_interval);
    },open() {
        {var a = this.element;this.options;}a.data("opened") !== !0 && (a.data("opened",!0),this._showCharm());
    },close() {
        {var a = this.element;this.options;}a.data("opened") !== !1 && (a.data("opened",!1),this._hideCharm());
    },_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    }});var metroCharm = {isOpened(a) {
        var b,c = $(a);return 0 == c.length ? (console.log(`Charm ${a} not found!`),!1) : (b = c.data("charm"),void 0 == b ? (console.log(`Element not contain role charm! Please add attribute data-role="charm" to element ${a}`),!1) : b.element.data("opened") === !0);
    },show(a,b) {
        var c,d = $(a);return 0 == d.length ? (console.log(`Charm ${a} not found!`),!1) : (c = d.data("charm"),void 0 == c ? (console.log(`Element not contain role charm! Please add attribute data-role="charm" to element ${a}`),!1) : (void 0 != b && (d.hide(),d.data("displayed",!1),d.data("opened",!1),c.options.position = b),c.open(),!1));
    },hide(a) {
        var b,c = $(a);return 0 == c.length ? (console.log(`Charm ${a} not found!`),!1) : (b = c.data("charm"),void 0 == b ? (console.log(`Element not contain role charm! Please add attribute data-role="charm" to element ${a}`),!1) : void b.close());
    },close(a) {
        return this.show(a);
    },toggle(a,b) {
        var c,d = $(a);return 0 == d.length ? (console.log(`Charm ${a} not found!`),!1) : (c = d.data("charm"),void 0 == c ? (console.log(`Element not contain role charm! Please add attribute data-role="charm" to element ${a}`),!1) : void(c.element.data("opened") === !0 ? c.close() : (void 0 != b && (d.hide(),d.data("displayed",!1),d.data("opened",!1),c.options.position = b),c.open())));
    }};$.Charm = window.metroCharm = metroCharm,window.metroCharmIsOpened = function(a) {
        var b,c = $(a);return 0 == c.length ? (console.log(`Charm ${a} not found!`),!1) : (b = c.data("charm"),void 0 == b ? (console.log(`Element not contain role charm! Please add attribute data-role="charm" to element ${a}`),!1) : b.element.data("opened") === !0);
    },window.showMetroCharm = function(a,b) {
        var c,d = $(a);return 0 == d.length ? (console.log(`Charm ${a} not found!`),!1) : (c = d.data("charm"),void 0 == c ? (console.log(`Element not contain role charm! Please add attribute data-role="charm" to element ${a}`),!1) : (void 0 != b && (d.hide(),d.data("displayed",!1),d.data("opened",!1),c.options.position = b),c.open(),!1));
    },window.hideMetroCharm = function(a) {
        var b,c = $(a);return 0 == c.length ? (console.log(`Charm ${a} not found!`),!1) : (b = c.data("charm"),void 0 == b ? (console.log(`Element not contain role charm! Please add attribute data-role="charm" to element ${a}`),!1) : void b.close());
    },window.toggleMetroCharm = function(a,b) {
        var c,d = $(a);return 0 == d.length ? (console.log(`Charm ${a} not found!`),!1) : (c = d.data("charm"),void 0 == c ? (console.log(`Element not contain role charm! Please add attribute data-role="charm" to element ${a}`),!1) : void(c.element.data("opened") === !0 ? c.close() : (void 0 != b && (d.hide(),d.data("displayed",!1),d.data("opened",!1),c.options.position = b),c.open())));
    },$.widget("metro.clock",{version:"1.0.0",options:{showTime:!0,showDate:!0,timeFormat:"24",dateFormat:"american",divider:"&nbsp;&nbsp;"},_create() {
        {var a = this,b = this.element;this.options;} this._setOptionsFromDOM(),this._tick(),this._clockInterval = setInterval(function() {
            a._tick();
        },500),b.data("clock",this);
    },_addLeadingZero(a) {
        return 10 > a && (a = `0${  a}`),a;
    },_tick() {
        var a = this.element,b = this.options,c = new Date,d = (c.getTime(),""),e = c.getHours(),f = c.getMinutes(),g = c.getSeconds(),h = c.getDate(),i = c.getMonth() + 1,j = c.getFullYear(),k = "";"12" == b.timeFormat && (k = " AM",e > 11 && (k = " PM"),e > 12 && (e -= 12),0 == e && (e = 12)),e = this._addLeadingZero(e),f = this._addLeadingZero(f),g = this._addLeadingZero(g),i = this._addLeadingZero(i),h = this._addLeadingZero(h),b.showDate && ("american" == b.dateFormat ? (d += `<span class='date-month'>${  i  }</span>`,d += "<span class='date-divider'>-</span>",d += `<span class='date-day'>${  h  }</span>`,d += "<span class='date-divider'>-</span>",d += `<span class='date-year'>${  j  }</span>`) : (d += `<span class='date-day'>${  h  }</span>`,d += "<span class='date-divider'>-</span>",d += `<span class='date-month'>${  i  }</span>`,d += "<span class='date-divider'>-</span>",d += `<span class='date-year'>${  j  }</span>`),d += b.divider),b.showTime && (d += `<span class='clock-hour'>${  e  }</span>`,d += "<span class='clock-divider'>:</span>",d += `<span class='clock-minute'>${  f  }</span>`,d += "<span class='clock-divider'>:</span>",d += `<span class='clock-second'>${  g  }</span>`),a.html(d);
    },_setOptionsFromDOM() {
        var a = this.element,b = this.options;$.each(a.data(),function(a,c) {
            if (a in b) {
                try {
                    b[a] = $.parseJSON(c);
                } catch (d) {
                    b[a] = c;
                }
            }
        });
    },_destroy() {
        clearInterval(this._clockInterval);
    },_setOption(a,b) {
        this._super("_setOption",a,b);
    }}),$.widget("metro.countdown",{version:"3.0.0",options:{stop:!1,days:!1,hours:!1,minutes:!1,seconds:!1,backgroundColor:"bg-cyan",digitColor:"fg-white",dividerColor:"fg-dark",labelColor:"fg-grayLight",labels:{days:"days",hours:"hours",minutes:"mins",seconds:"secs"},onTick() {},onStop() {}},_interval:0,_interval2:0,_alarmOn:void 0,_create() {
        var a = this,b = this.element,c = this.options;$.each(b.data(),function(a,b) {
            if (a in c) {
                try {
                    c[a] = $.parseJSON(b);
                } catch (d) {
                    c[a] = b;
                }
            }
        }),this._alarmOn = new Date,c.stop !== !1 && (this._alarmOn = new Date(c.stop));var d = 864e5,e = 36e5,f = 6e4,g = 1e3;c.days !== !1 && ("object" === typeof this._alarmOn && (this._alarmOn = this._alarmOn.getTime()),this._alarmOn = this._alarmOn + c.days * d),c.hours !== !1 && ("object" === typeof this._alarmOn && (this._alarmOn = this._alarmOn.getTime()),this._alarmOn = this._alarmOn + c.hours * e),c.minutes !== !1 && ("object" === typeof this._alarmOn && (this._alarmOn = this._alarmOn.getTime()),this._alarmOn = this._alarmOn + c.minutes * f),c.seconds !== !1 && ("object" === typeof this._alarmOn && (this._alarmOn = this._alarmOn.getTime()),this._alarmOn = this._alarmOn + c.seconds * g),this._createDigits(),b.find(".digit").text("0"),a._tick(),b.data("countdown",this);
    },_createDigits() {
        var a,b,c = this.element,d = this.options,e = ["days","hours","minutes","seconds"];e.map(function(e) {
            a = $("<div/>").addClass(`part ${e}`)
                .attr("data-day-text",d.labels[e])
                .appendTo(c),$("<div/>").addClass("digit")
                .appendTo(a),$("<div/>").addClass("digit")
                .appendTo(a),"days" === e && ($("<div/>").addClass("digit")
                .appendTo(a),$("<div/>").addClass("digit")
                    .appendTo(a)),metroUtils.isColor(d.labelColor) ? a.css({color:d.labelColor}) : a.addClass(d.labelColor),metroUtils.isColor(d.backgroundColor) ? a.find(".digit").css({background:d.backgroundColor}) : a.find(".digit").addClass(d.backgroundColor),metroUtils.isColor(d.digitColor) ? a.find(".digit").css({color:d.digitColor}) : a.find(".digit").addClass(d.digitColor),"seconds" !== e && (b = $("<div/>").addClass("divider")
                .text(":")
                .appendTo(c),metroUtils.isColor(d.dividerColor) ? b.css({color:d.dividerColor}) : b.addClass(d.dividerColor));
        });
    },_blink() {
        this.element.toggleClass("tick");
    },_tick() {
        var that = this,o = this.options,element = this.element,days = 86400,hours = 3600,minutes = 60,left,d,h,m,s;this._interval2 = setInterval(function() {
            that._blink();
        },500),this._interval = setInterval(function() {
            var result;left = Math.floor((that._alarmOn - new Date) / 1e3),0 > left && (left = 0),d = Math.floor(left / days),left -= d * days,that._update("days",d),0 === d && element.find(".part.days").addClass("disabled"),h = Math.floor(left / hours),left -= h * hours,that._update("hours",h),0 === d && 0 === h && element.find(".part.hours").addClass("disabled"),m = Math.floor(left / minutes),left -= m * minutes,that._update("minutes",m),0 === d && 0 === h && 0 === m && element.find(".part.minutes").addClass("disabled"),s = left,that._update("seconds",s),"function" === typeof o.onTick ? o.onTick(d,h,m,s) : "function" === typeof window[o.onTick] ? window[o.onTick](d,h,m,s) : (result = eval(`(function(){${o.onTick}})`),result.call(d,h,m,s)),0 === d && 0 === h && 0 === m && 0 === s && (element.find(".part").addClass("disabled"),"function" === typeof o.onStop ? o.onStop() : "function" === typeof window[o.onStop] ? window[o.onStop]() : (result = eval(`(function(){${o.onStop}})`),result.call()),that._stop("all"),that._trigger("alarm"),clearInterval(that._interval));
        },1e3);
    },_update(a,b) {
        var c = this.element;if ("days" == a) {
            var d,e,f,g,h = Math.floor(b / 1e3) % 10,i = Math.floor(b / 100) % 10,j = Math.floor(b / 10) % 10,k = b % 10;d = c.find(`.${a} .digit:eq(0)`),e = c.find(`.${a} .digit:eq(1)`),f = c.find(`.${a} .digit:eq(2)`),g = c.find(`.${a} .digit:eq(3)`),h !== parseInt(d.text()) && (d.toggleClass("scaleIn"),setTimeout(function() {
                d.text(h).toggleClass("scaleIn");
            },500)),i !== parseInt(e.text()) && (e.toggleClass("scaleIn"),setTimeout(function() {
                e.text(i).toggleClass("scaleIn");
            },500)),j !== parseInt(f.text()) && (f.toggleClass("scaleIn"),setTimeout(function() {
                f.text(j).toggleClass("scaleIn");
            },500)),k !== parseInt(g.text()) && (g.toggleClass("scaleIn"),setTimeout(function() {
                g.text(k).toggleClass("scaleIn");
            },500));
        } else {
            var l,m,n = Math.floor(b / 10) % 10,o = b % 10;l = c.find(`.${a} .digit:eq(0)`),m = c.find(`.${a} .digit:eq(1)`),o !== parseInt(m.text()) && (m.toggleClass("scaleIn"),setTimeout(function() {
                m.text(o).toggleClass("scaleIn");
            },500)),n !== parseInt(l.text()) && (l.toggleClass("scaleIn"),setTimeout(function() {
                l.text(n).toggleClass("scaleIn");
            },500));
        }
    },_stop() {
        clearInterval(this._interval),clearInterval(this._interval2);
    },_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    }}),$.widget("metro.datatable",{version:"3.0.0",options:{},_create() {
        var a = this.element,b = this.options;if ($.each(a.data(),function(a,c) {
            try {
                b[a] = $.parseJSON(c);
            } catch (d) {
                b[a] = c;
            }
        }),$().dataTable) {
            try {
                a.dataTable(b);
            } catch (c) {}
        } else {
            alert("dataTable plugin required");
        }a.data("datatable",this);
    },_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    }}),$.widget("metro.datepicker",{version:"3.0.14",options:{format:"yyyy.mm.dd",preset:!1,minDate:!1,maxDate:!1,effect:"fade",position:"bottom",locale:window.METRO_CURRENT_LOCALE,weekStart:window.METRO_CALENDAR_WEEK_START,otherDays:!1,exclude:!1,stored:!1,buttons:!1,buttonToday:!0,buttonClear:!0,condensedGrid:!1,scheme:"default",onSelect() {}},_calendar:void 0,_create() {
        var a = this,b = this.element,c = this.options,d = b.children("input"),e = b.children("button");$.each(b.data(),function(a,b) {
            if (a in c) {
                try {
                    c[a] = $.parseJSON(b);
                } catch (d) {
                    c[a] = b;
                }
            }
        }),this._createCalendar(),d.attr("readonly",!0),e.attr("type","button"),e.on("click",function(b) {
            b.stopPropagation(),"none" === a._calendar.css("display") ? a._show() : a._hide();
        }),b.on("click",function(b) {
            b.stopPropagation(),"none" === a._calendar.css("display") ? a._show() : a._hide();
        }),$("html").on("click",function() {
            $(".calendar-dropdown").hide();
        }),b.data("datepicker",this);
    },_createCalendar() {
        var _calendar,that = this,element = this.element,o = this.options;switch (_calendar = $("<div/>").css({position:"absolute",display:"none","max-width":220,"z-index":1e3})
            .addClass("calendar calendar-dropdown")
            .appendTo(element),_calendar.calendar({multiSelect:!1,format:o.format,buttons:!1,buttonToday:!1,buttonClear:!1,locale:o.locale,otherDays:o.otherDays,weekStart:o.weekStart,condensedGrid:o.condensedGrid,exclude:o.exclude,stored:o.stored,date:o.preset ? o.preset : new Date,minDate:o.minDate,maxDate:o.maxDate,scheme:o.scheme,dayClick(d,d0) {
                if (_calendar.calendar("setDate",d0),that.element.children("input[type=text]").val(d),that.element.children("input[type=text]").trigger("change",d0),that.element.children("input[type=text]").blur(),that._hide(),"function" === typeof o.onSelect) {
                    o.onSelect(d,d0);
                } else if ("function" === typeof window[o.onSelect]) {
                    window[o.onSelect](d,d0);
                } else {
                    var result = eval(`(function(){${o.onSelect}})`);result.call(d,d0);
                }
            }}),o.preset !== !1 && (_calendar.calendar("setDate",o.preset),element.find("input, .datepicker-output").val(_calendar.calendar("getDate"))),this.options.position) {
        case "top":_calendar.css({top:0 - _calendar.height(),left:0});break;default:_calendar.css({top:"100%",left:0});
        } this._calendar = _calendar;
    },_show() {
        "slide" === this.options.effect ? ($(".calendar-dropdown").slideUp("fast"),this._calendar.slideDown("fast")) : "fade" === this.options.effect ? ($(".calendar-dropdown").fadeOut("fast"),this._calendar.fadeIn("fast")) : ($(".calendar-dropdown").hide(),this._calendar.show());
    },_hide() {
        "slide" === this.options.effect ? this._calendar.slideUp("fast") : "fade" === this.options.effect ? this._calendar.fadeOut("fast") : this._calendar.hide();
    },_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    },setDate(a) {
        $.isArray(a);var b = this.element.find("input"),c = this._calendar.data("metro-calendar"),d = c.element;d.data("_storage",[]),this._calendar.calendar("setDate",a),a = this._calendar.calendar("getDate"),b.val(a);
    }}),$.widget("metro.dialog",{version:"3.0.14",options:{modal:!1,overlay:!1,overlayColor:"default",overlayClickClose:!1,type:"default",place:"center",position:"default",content:!1,hide:!1,width:"auto",height:"auto",background:"default",color:"default",closeButton:!1,windowsStyle:!1,show:!1,href:!1,contentType:"default",closeAction:!0,closeElement:".js-dialog-close",onDialogOpen() {},onDialogClose() {}},_create() {
        var a = this,b = this.element,c = this.options;$.each(b.data(),function(a,b) {
            if (a in c) {
                try {
                    c[a] = $.parseJSON(b);
                } catch (d) {
                    c[a] = b;
                }
            }
        }),this._interval = void 0,this._overlay = void 0,c.overlay && this._createOverlay(),this._createDialog(),c.closeAction === !0 && b.on("click",`.js-dialog-close${c.closeElement}`,function() {
            a.close();
        }),b.appendTo($("body")),b.data("dialog",this),c.show && this.open();
    },_createOverlay() {
        var a = (this.element,this.options),b = $("body").find(".dialog-overlay");0 === b.length && (b = $("<div/>").addClass("dialog-overlay")),a.overlayColor && (metroUtils.isColor(a.overlayColor) ? b.css({background:a.overlayColor}) : b.addClass(a.overlayColor)),this._overlay = b;
    },_createDialog() {
        var a = this,b = this.element,c = this.options;b.addClass("dialog"),"default" !== c.type && b.addClass(c.type),c.windowsStyle && (c.width = "auto",b.css({left:0,right:0})),"default" !== c.background && (metroUtils.isColor(c.background) ? b.css({background:c.background}) : b.addClass(c.background)),"default" !== c.color && (metroUtils.isColor(c.color) ? b.css({color:c.color}) : b.addClass(c.color)),b.css({width:c.width,height:c.height}),c.closeButton && $("<span/>").addClass("dialog-close-button")
            .appendTo(b)
            .on("click",function() {
                a.close();
            }),this._hide();
    },_hide() {
        var a = this.element,b = this.options;a.css({visibility:"hidden"}),b.removeOnClose === !0 && a.remove();
    },_show() {
        {var a = this.element;this.options;} this._setContent(),a.css({visibility:"visible"});
    },_setPosition() {
        var a = this.element,b = this.options,c = a.outerWidth(),d = a.outerHeight();switch (b.place) {
        case "top-left":a.css({left:0,top:0});break;case "top-right":a.css({right:0,top:0});break;case "top-center":a.css({left:($(window).width() - c) / 2,top:0});break;case "bottom-left":a.css({left:0,bottom:0});break;case "bottom-right":a.css({right:0,bottom:0});break;case "center-left":a.css({left:0,top:($(window).height() - d) / 2});break;case "center-right":a.css({right:0,top:($(window).height() - d) / 2});break;case "bottom-center":a.css({left:($(window).width() - c) / 2,bottom:0});break;default:a.css({left:b.windowsStyle === !1 ? ($(window).width() - c) / 2 : 0,top:($(window).height() - d) / 2});
        }
    },_setContent() {
        var a = this,b = this.element,c = this.options,d = $("<div>").addClass("set-dialog-content");return "video" === c.contentType && d.addClass("video-container"),c.content === !1 && c.href === !1 ? !1 : (b.children(":not(.dialog-close-button)").remove(),d.appendTo(b),c.content && (c.content instanceof jQuery ? c.content.appendTo(d) : d.html(c.content),this._setPosition()),void(c.href && $.get(c.href,function(b) {
            d.html(b),a._setPosition();
        })));
    },setContent(a) {
        this.options.contentType = "default",this.options.href = !1,this.options.content = a,this._setContent();
    },setContentHref(a) {
        this.options.contentType = "href",this.options.content = !1,this.options.href = a,this._setContent();
    },setContentVideo(a) {
        this.options.contentType = "video",this.options.content = a,this.options.href = !1,this._setContent();
    },toggle() {
        var a = this.element;a.data("opened") ? this.close() : this.open();
    },open() {
        var that = this,element = this.element,o = this.options,overlay;if (this._setPosition(),element.data("opened",!0),o.overlay && (overlay = this._overlay,overlay.appendTo("body").show(),o.overlayClickClose && overlay.on("click",function() {
            that.close();
        })),this._show(),"function" === typeof o.onDialogOpen) {
            o.onDialogOpen(element);
        } else if ("function" === typeof window[o.onDialogOpen]) {
            window[o.onDialogOpen](element);
        } else {
            var result = eval(`(function(){${o.onDialogOpen}})`);result.call(element);
        }o.hide && parseInt(o.hide) > 0 && (this._interval = setTimeout(function() {
            that.close();
        },parseInt(o.hide)));
    },close() {
        var that = this,element = this.element,o = this.options;if (clearInterval(this._interval),o.overlay && $("body").find(".dialog-overlay")
            .remove(),element.data("opened",!1),this._hide(),"function" === typeof o.onDialogClose) {
            o.onDialogClose(element);
        } else if ("function" === typeof window[o.onDialogClose]) {
            window[o.onDialogClose](element);
        } else {
            var result = eval(`(function(){${o.onDialogClose}})`);result.call(element);
        }
    },reset(a) {
        void 0 !== a && (this.options.place = a),this._setPosition();
    },_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    }});var dialog = {open(a,b,c,d) {
        var e,f = $(a);if (0 == f.length) {
            return console.log(`Dialog ${a} not found!`),!1;
        } if (e = f.data("dialog"),void 0 == e) {
            return console.log(`Element not contain role dialog! Please add attribute data-role="dialog" to element ${a}`),!1;
        } if (void 0 != c) {
            switch (d) {
            case "href":e.setContentHref(c);break;case "video":e.setContentVideo(c);break;default:e.setContent(c);
            }
        } void 0 !== b && (e.options.place = b),e.open();
    },close(a) {
        var b,c = $(a);return 0 == c.length ? (console.log(`Dialog ${a} not found!`),!1) : (b = c.data("dialog"),void 0 == b ? (console.log(`Element not contain role dialog! Please add attribute data-role="dialog" to element ${a}`),!1) : void b.close());
    },toggle(a,b,c,d) {
        var e,f = $(a);if (0 == f.length) {
            return console.log(`Dialog ${a} not found!`),!1;
        } if (e = f.data("dialog"),void 0 == e) {
            return console.log(`Element not contain role dialog! Please add attribute data-role="dialog" to element ${a}`),!1;
        } if (void 0 != c) {
            switch (d) {
            case "href":e.setContentHref(c);break;case "video":e.setContentVideo(c);break;default:e.setContent(c);
            }
        }e.element.data("opened") === !0 ? e.close() : (void 0 !== b && (e.options.place = b),e.open());
    },create(data) {
        var dlg,id,html,buttons,button;id = `dialog_id_${  (new Date).getTime()}`,dlg = $(`<div id='${id}' class='dialog dialog-ex'></div>`),void 0 !== data.title && $(`<div class='dialog-title'>${data.title}</div>`).appendTo(dlg),void 0 !== data.content && $(`<div class='dialog-content'>${data.content}</div>`).appendTo(dlg),void 0 !== data.actions && "object" === typeof data.actions && (buttons = $("<div class='dialog-actions'></div>").appendTo(dlg),$.each(data.actions,function() {
            var item = this;button = $("<button>").attr("type","button")
                .addClass("button")
                .html(item.title),void 0 !== item.cls && button.addClass(item.cls),button.appendTo(buttons),void 0 != item.onclick && button[0].addEventListener("click",function() {
                if ("function" === typeof item.onclick) {
                    item.onclick(dlg);
                } else if ("function" === typeof window[item.onclick]) {
                    window[item.onclick](dlg);
                } else {
                    var result = eval(`(function(){${item.onclick}})`);result.call(dlg);
                }
            },!0);
        })),dlg.appendTo($("body"));var dlg_options = $.extend({},{show:!0,closeAction:!0,removeOnClose:!0},void 0 != data.options ? data.options : {});return dlg.dialog(dlg_options);
    }};window.metroDialog = dialog,$.Dialog = function(a) {
        return dialog.create(a);
    },$(window).on("resize",function() {
        var a = $(".dialog");$.each(a,function() {
            var a = $(this).data("dialog"),b = a.element;b.data("opened") === !0 && a.reset();
        });
    }),$.widget("metro.donut",{version:"1.0.0",options:{size:100,radius:50,value:0,background:"#ffffff",color:"",stroke:"#d1d8e7",fill:"#49649f",fontSize:24,hole:.8,total:100,cap:"%",animate:0},_create() {
        {var a = this.element;this.options;} this._setOptionsFromDOM(),this._createDonut(),a.data("donut",this);
    },_createDonut() {
        var a = this.element,b = this.options,c = "",d = b.radius * (1 - (1 - b.hole) / 2),e = b.radius * (1 - b.hole),f = 2 * Math.PI * d,g = (`${b.value * f / b.total} ${f}`,`rotate(-90 ${b.radius},${b.radius})`),h = d * b.hole * .6;a.hasClass("donut") || a.addClass("donut"),a.css({width:b.size,height:b.size,background:b.background}),c += "<svg>",c += `   <circle class='donut-back' r='${  d  }px' cx='${  b.radius  }px' cy='${  b.radius  }px' transform='${  g  }' fill='none' stroke='${  b.stroke  }' stroke-width='${  e  }'/>`,c += `   <circle class='donut-fill' r='${  d  }px' cx='${  b.radius  }px' cy='${  b.radius  }px' transform='${  g  }' fill='none' stroke='${  b.fill  }' stroke-width='${  e  }'/>`,c += `   <text   class='donut-title' x='${  b.radius  }px' y='${  b.radius  }px' dy='${  h / 3  }px' text-anchor='middle' fill='${  b.fill  }' font-size='${  h  }px'>0${  b.cap  }</text>`,c += "</svg>",a.html(c),this.val(b.value);
    },_setValue(a) {
        var b = this.element,c = this.options;c.value = a;var d = b.find(".donut-fill"),e = b.find(".donut-title"),f = c.radius * (1 - (1 - c.hole) / 2),g = 2 * Math.PI * f,h = 1e3 * c.value / c.total / 10 + c.cap,i = `${c.value * g / c.total  } ${  g}`;d.attr("stroke-dasharray",i),e.html(h);
    },val(a) {
        var b = this,c = this.options;if (void 0 === a) {
            return c.value;
        } if (c.animate > 0) {
            var d,e = 0;d = setInterval(function() {
                b._setValue(++e),e == a && clearInterval(d);
            },c.animate);
        } else {
            this._setValue(a);
        }
    },_setOptionsFromDOM() {
        var a = this.element,b = this.options;$.each(a.data(),function(a,c) {
            if (a in b) {
                try {
                    b[a] = $.parseJSON(c);
                } catch (d) {
                    b[a] = c;
                }
            }
        });
    },_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    }}),$.widget("metro.draggable",{version:"3.0.0",options:{dragElement:null,dragArea:null,zIndex:2e3,onDragStart() {},onDragStop() {},onDragMove() {}},drag:!1,oldCursor:null,oldZindex:null,oldPosition:null,_create() {
        {var a = this.element;this.options;} this._setOptionsFromDOM(),this._createDraggable(),a.data("draggable",this);
    },_createDraggable() {
        var that = this,element = this.element,o = this.options,dragElement = o.dragElement ? element.find(o.dragElement) : element;addTouchEvents(element[0]),dragElement.on("mousedown",function(e) {
            var result,el = $(this);that.drag = !0,"function" === typeof o.onDragStart ? o.onDragStart(element) : "function" === typeof window[o.onDragStart] ? window[o.onDragStart](element) : (result = eval(`(function(){${o.onDragStart}})`),result.call(element)),that.oldCursor = el.css("cursor") ? el.css("cursor") : "default",that.oldZindex = element.css("z-index"),dragElement.css({cursor:"move"}),element.css({"z-index":o.zIndex});var dragArea = $(o.dragArea ? o.dragArea : window),os = {left:o.dragArea ? dragArea.offset().left : 0,top:o.dragArea ? dragArea.offset().top : 0},drg_h = element.outerHeight(),drg_w = element.outerWidth(),pos_y = element.offset().top + drg_h - e.pageY,pos_x = element.offset().left + drg_w - e.pageX;dragArea.on("mousemove",function(e) {
                var offset,pageX,pageY;if (!that.drag) {
                    return !1;
                }pageX = e.pageX - os.left,pageY = e.pageY - os.top;var t = pageY > 0 ? pageY + pos_y - drg_h : 0,l = pageX > 0 ? pageX + pos_x - drg_w : 0,t_delta = dragArea.innerHeight() + dragArea.scrollTop() - element.outerHeight(),l_delta = dragArea.innerWidth() + dragArea.scrollLeft() - element.outerWidth();t >= 0 && t_delta >= t && element.offset({top:t + os.top}),l >= 0 && l_delta >= l && element.offset({left:l + os.left}),offset = {left:l,top:t},"function" === typeof o.onDragMove ? o.onDragMove(element,offset) : "function" === typeof window[o.onDragMove] ? window[o.onDragMove](element,offset) : (result = eval(`(function(){${o.onDragMove}})`),result.call(element,offset));
            });
        }),dragElement.on("mouseup",function(e) {
            var result,el = $(this);that.drag = !1,dragElement.css({cursor:that.oldCursor}),element.css({"z-index":that.oldZindex,position:that.oldPosition}),"function" === typeof o.onDragStop ? o.onDragStop(element) : "function" === typeof window[o.onDragStop] ? window[o.onDragStop](element) : (result = eval(`(function(){${o.onDragStop}})`),result.call(element));
        });
    },_setOptionsFromDOM() {
        var a = this.element,b = this.options;$.each(a.data(),function(a,c) {
            if (a in b) {
                try {
                    b[a] = $.parseJSON(c);
                } catch (d) {
                    b[a] = c;
                }
            }
        });
    },_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    }}),$.widget("metro.dropdown",{version:"3.0.0",options:{effect:window.METRO_SHOW_TYPE,toggleElement:!1,noClose:!1,onDrop() {},onUp() {}},_create() {
        var a,b = this,c = this.element,d = this.options,e = this.element,f = this.name,g = this.element.parent();$.each(c.data(),function(a,b) {
            if (a in d) {
                try {
                    d[a] = $.parseJSON(b);
                } catch (c) {
                    d[a] = b;
                }
            }
        }),a = d.toggleElement ? $(d.toggleElement) : g.children(g.children(".dropdown-toggle").length > 0 ? ".dropdown-toggle" : "a:nth-child(1)"),void 0 !== METRO_SHOW_TYPE && (this.options.effect = METRO_SHOW_TYPE),a.on(`click.${f}`,function(a) {
            if (g.siblings(g[0].tagName).removeClass("active-container"),$(".active-container").removeClass("active-container"),"block" !== e.css("display") || e.hasClass("keep-open")) {
                if ($("[data-role=dropdown]").each(function(a,c) {
                    e.parents("[data-role=dropdown]").is(c) || $(c).hasClass("keep-open") || "block" !== $(c).css("display") || b._close(c);
                }),e.hasClass("horizontal")) {
                    e.css({visibility:"hidden",display:"block"});var c = $(e.children("li")[0]).outerWidth();e.css({visibility:"visible",display:"none"});var d = e.children("li").length * c + (e.children("li").length - 1);e.css("width",d);
                }b._open(e),g.addClass("active-container");
            } else {
                b._close(e);
            }a.preventDefault(),a.stopPropagation();
        }),d.noClose === !0 && c.on("click",function(a) {
            a.stopPropagation();
        }),$(e).find("li.disabled a")
            .on("click",function(a) {
                a.preventDefault();
            }),c.data("dropdown",this);
    },_open(el) {
        var parent = this.element.parent(),o = this.options,toggle = o.toggleElement ? $(o.toggleElement) : parent.children(parent.children(".dropdown-toggle").length > 0 ? ".dropdown-toggle" : "a:nth-child(1)");switch (this.options.effect) {
        case "fade":$(el).fadeIn("fast");break;case "slide":$(el).slideDown("fast");break;default:$(el).show();
        } if (this._trigger("onOpen",null,el),toggle.addClass("active-toggle"),"function" === typeof o.onDrop) {
            o.onDrop(el);
        } else if ("function" === typeof window[o.onDrop]) {
            window[o.onDrop](el);
        } else {
            var result = eval(`(function(){${o.onDrop}})`);result.call(el);
        }
    },_close(el) {
        var parent = $(el).parent(),o = this.options,toggle = o.toggleElement ? $(o.toggleElement) : parent.children(parent.children(".dropdown-toggle").length > 0 ? ".dropdown-toggle" : "a:nth-child(1)");switch (this.options.effect) {
        case "fade":$(el).fadeOut("fast");break;case "slide":$(el).slideUp("fast");break;default:$(el).hide();
        } if (this._trigger("onClose",null,el),toggle.removeClass("active-toggle"),"function" === typeof o.onUp) {
            o.onUp(el);
        } else if ("function" === typeof window[o.onUp]) {
            window[o.onUp](el);
        } else {
            var result = eval(`(function(){${o.onUp}})`);result.call(el);
        }
    },_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    }}),$(document).on("click",function() {
        $("[data-role=dropdown]").each(function(a,b) {
            if (!$(b).hasClass("keep-open") && "block" === $(b).css("display")) {
                var c = $(b).data("dropdown");c._close(b);
            }
        });
    }),$.widget("metro.fitImage",{version:"3.0.0",options:{shadow:!1,overlay:!1,type:"default",frameColor:"default",format:"hd"},_create() {
        var a,b,c,d,e,f = this.element,g = this.options,h = f.parent(),i = f.attr("src");$.each(f.data(),function(a,b) {
            if (a in g) {
                try {
                    g[a] = $.parseJSON(b);
                } catch (c) {
                    g[a] = b;
                }
            }
        }),$("<img/>").attr("src",i)
            .on("load",function() {
                a = this.width,b = this.height;
            })
            .remove();var j = $("<div/>").addClass("image-container")
                .css("width","100%")
                .appendTo(h),k = $("<div/>").addClass("frame")
                .appendTo(j);switch (c = k.innerWidth(),d = k.innerHeight(),g.format) {
        case "sd":d = 3 * c / 4;break;case "square":d = c;break;case "cycle":d = c;break;case "fill-h":d = "100%",j.css("height","100%");break;case "fill":d = "100%",j.css("height","100%");break;default:d = 9 * c / 16;
        } if (e = $("<div/>").css({width:"100%",height:d,"background-image":`url(${i})`,"background-size":"cover","background-repeat":"no-repeat","border-radius":"cycle" === g.format ? "50%" : "0"}),$(window).on("resize",function() {
            var a = k.innerWidth(),b = k.innerHeight();switch (g.format) {
            case "sd":b = 3 * a / 4;break;case "square":b = a;break;case "cycle":b = a;break;case "fill-h":b = "100%",j.css("height","100%");break;case "fill":b = "100%",j.css("height","100%");break;default:b = 9 * a / 16;
            }e.css({height:b});
        }),"default" !== g.frameColor && (metroUtils.isColor(g.frameColor) ? k.css("background-color",g.frameColor) : k.addClass(g.frameColor)),g.overlay !== !1) {
            $("<div/>").addClass("image-overlay")
                .html(g.overlay)
                .appendTo(j);
        } switch (g.shadow !== !1 && j.addClass("block-shadow"),e.appendTo(k),g.type) {
        case "diamond":j.addClass("diamond"),e.addClass("image-replacer");break;case "bordered":j.addClass("bordered");break;case "polaroid":j.addClass("polaroid");break;case "handing":j.addClass("handing");break;case "handing-ani":j.addClass("handing ani");break;case "handing-ani-hover":j.addClass("handing ani-hover");
        }j.addClass(`image-format-${g.format}`),f.remove();
    },_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    }}),$.widget("metro.fluentmenu",{version:"3.0.0",options:{onSpecialClick() {},onTabClick() {},onTabChange() {}},_create() {
        var a = this.element,b = this.options;$.each(a.data(),function(a,c) {
            if (a in b) {
                try {
                    b[a] = $.parseJSON(c);
                } catch (d) {
                    b[a] = c;
                }
            }
        }),this._createMenu(),a.data("fluentmenu",this);
    },_createMenu() {
        var that = this,element = this.element,o = this.options,active_tab = $(element.find(".tabs-holder > li.active")[0]);this.openTab(active_tab),element.on("click",".tabs-holder > li > a",function(e) {
            var a = $(this),li = a.parent("li"),result;if (li.hasClass("special")) {
                "function" === typeof o.onSpecialClick ? o.onSpecialClick(a,li) : "function" === typeof window[o.onSpecialClick] ? window[o.onSpecialClick](a,li) : (result = eval(`(function(){${o.onSpecialClick}})`),result.call(a,li));
            } else {
                var panel = $(a.attr("href"));that._hidePanels(),that._showPanel(panel),element.find(".tabs-holder > li").removeClass("active"),a.parent("li").addClass("active"),"function" === typeof o.onTabClick ? o.onTabClick(a,li) : "function" === typeof window[o.onTabClick] ? window[o.onTabClick](a,li) : (result = eval(`(function(){${o.onTabClick}})`),result.call(a,li)),"function" === typeof o.onTabChange ? o.onTabChange(a,li) : "function" === typeof window[o.onTabChange] ? window[o.onTabChange](a,li) : (result = eval(`(function(){${o.onTabChange}})`),result.call(a,li));
            }e.preventDefault();
        });
    },_hidePanels() {
        this.element.find(".tab-panel").hide();
    },_showPanel(a) {
        void 0 == a && (a = this.element.find(".tabs-holder li.active a").attr("href")),$(a).show();
    },openTab(a) {
        var b = this.element,c = (this.options,$(a.children("a").attr("href")));return 0 === c.length ? !1 : (this._hidePanels(),this._showPanel(c),b.find(".tabs-holder > li").removeClass("active"),void a.addClass("active"));
    },_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    }}),$.widget("metro.grid",{version:"3.0.0",options:{equalHeight:!0},_create() {
        var a = this,b = this.element,c = this.options;$.each(b.data(),function(a,b) {
            if (a in c) {
                try {
                    c[a] = $.parseJSON(b);
                } catch (d) {
                    c[a] = b;
                }
            }
        }),c.equalHeight && (setTimeout(function() {
            a._setEqualHeight();
        },50),$(window).on("resize",function() {
                a._setEqualHeight();
            })),b.data("grid",this);
    },_setEqualHeight() {
        var a = this.element,b = (this.options,a.find(".row"));$.each(b,function() {
            var a = $(this),b = a.children(".cell"),c = 0;b.css("min-height","0"),$.each(b,function() {
                $(this).outerHeight() > c && (c = $(this).outerHeight());
            }),b.css("min-height",c);
        });
    },_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    }}),$.widget("metro.hint",{version:"3.0.0",options:{hintPosition:"auto",hintBackground:"#FFFCC0",hintColor:"#000000",hintMaxSize:200,hintMode:"default",hintShadow:!1,hintBorder:!0,hintTimeout:0,hintTimeDelay:0,_hint:void 0},_create() {
        var a = this,b = (this.element,this.options);this.element.on("mouseenter",function(c) {
            $(".hint, .hint2").remove(),b.hintTimeDelay > 0 ? setTimeout(function() {
                a.createHint(),b._hint.show();
            },b.hintTimeDelay) : (a.createHint(),b._hint.show()),c.preventDefault();
        }),this.element.on("mouseleave",function(a) {
            b._hint.length && b._hint.hide().remove(),a.preventDefault();
        });
    },createHint() {
        var a,b = this.element,c = b.data("hint").split("|"),d = this.options;if ($.each(b.data(),function(a,b) {
            if (a in d) {
                try {
                    d[a] = $.parseJSON(b);
                } catch (c) {
                    d[a] = b;
                }
            }
        }),"TD" === b[0].tagName || "TH" === b[0].tagName) {
            var e = $("<div/>").css("display","inline-block")
                .html(b.html());b.html(e),b = e;
        } var f = c.length > 1 ? c[0] : !1,g = c.length > 1 ? c[1] : c[0];a = $("<div/>").appendTo("body"),a.addClass(2 === d.hintMode ? "hint2" : "hint"),d.hintBorder || a.addClass("no-border"),f && $("<div/>").addClass("hint-title")
            .html(f)
            .appendTo(a),$("<div/>").addClass("hint-text")
            .html(g)
            .appendTo(a),a.addClass(d.position),d.hintShadow && a.addClass("shadow"),d.hintBackground && (metroUtils.isColor(d.hintBackground) ? a.css("background-color",d.hintBackground) : a.addClass(d.hintBackground)),d.hintColor && (metroUtils.isColor(d.hintColor) ? a.css("color",d.hintColor) : a.addClass(d.hintColor)),d.hintMaxSize > 0 && a.css({"max-width":d.hintMaxSize}),"top" === d.hintPosition ? (a.addClass("top"),a.css({top:b.offset().top - $(window).scrollTop() - a.outerHeight() - 20,left:2 === d.hintMode ? b.offset().left + b.outerWidth() / 2 - a.outerWidth() / 2 - $(window).scrollLeft() : b.offset().left - $(window).scrollLeft()})) : "right" === d.hintPosition ? (a.addClass("right"),a.css({top:2 === d.hintMode ? b.offset().top + b.outerHeight() / 2 - a.outerHeight() / 2 - $(window).scrollTop() - 10 : b.offset().top - 10 - $(window).scrollTop(),left:b.offset().left + b.outerWidth() + 15 - $(window).scrollLeft()})) : "left" === d.hintPosition ? (a.addClass("left"),a.css({top:2 === d.hintMode ? b.offset().top + b.outerHeight() / 2 - a.outerHeight() / 2 - $(window).scrollTop() - 10 : b.offset().top - 10 - $(window).scrollTop(),left:b.offset().left - a.outerWidth() - 10 - $(window).scrollLeft()})) : (a.addClass("bottom"),a.css({top:b.offset().top - $(window).scrollTop() + b.outerHeight(),left:2 === d.hintMode ? b.offset().left + b.outerWidth() / 2 - a.outerWidth() / 2 - $(window).scrollLeft() : b.offset().left - $(window).scrollLeft()})),d._hint = a,d.hintTimeout > 0 && setTimeout(function() {
            d._hint.length && d._hint.hide().remove();
        },d.hintTimeout);
    },_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    }}),$.widget("metro.input",{version:"3.0.0",options:{showLabelOnValue:!1,textAutoResize:!1,textMaxHeight:0},_create() {
        var a = this.element,b = this.options;$.each(a.data(),function(a,c) {
            if (a in b) {
                try {
                    b[a] = $.parseJSON(c);
                } catch (d) {
                    b[a] = c;
                }
            }
        }),a.hasClass("file") && this._createInputFile(),a.hasClass("text") && this._createInputText(),a.hasClass("password") && this._createInputText(),a.hasClass("select") && this._createInputSelect(),a.hasClass("textarea") && this._createInputTextarea(),a.hasClass("modern") && this._createInputModern(),a.data("input",this);
    },_createInputModern() {
        var a = this.element,b = a.find("input"),c = a.find(".placeholder");"" !== b.val() && c.css({display:"none"}),b.on("blur",function() {
            c.css("" !== b.val() ? {display:"none"} : {display:"block"});
        }),b.on("focus",function() {
            c.css("" !== b.val() ? {display:"none"} : {display:"block"});
        });
    },_createInputFile() {
        var a,b,c,d = this.element;a = $("<input type='text' class='input-file-wrapper' readonly style='z-index: 1; cursor: default;'>"),b = d.children(".button"),c = d.children("input[type=\"file\"]"),c.css("z-index",0),a.insertAfter(c),c.attr("tabindex","-1"),b.attr("type","button"),a.attr("placeholder",c.attr("placeholder")),c.on("change",function() {
            var b = $(this).val();"" !== b && (a.val(b.replace(/.+[\\\/]/,"")),a.attr("title",b.replace(/.+[\\\/]/,"")));
        }),d.on("click",".button, .input-file-wrapper",function() {
            c.trigger("click");
        });
    },_createInputText() {
        var a = this.element,b = a.find(".helper-button.clear"),c = a.find(".helper-button.reveal"),d = a.find("input"),e = a.find(".helper-button"),f = a.find(".button"),g = a.find(".input-state-error, .input-state-warning, .input-state-info, .input-state-success, .input-state-required"),h = 0,i = "rtl" === a.attr("dir") || a.parents("[dir='rtl']").length > 0;$.each(f,function() {
            var a = $(this);h += a.outerWidth();
        }),i ? (d.css({"padding-left":h + 5}),g.css({left:h + 8})) : (d.css({"padding-right":h + 5}),g.css({right:h + 8})),e.attr("tabindex",-1).attr("type","button"),b && b.on("click",function() {
            d.val("").trigger("change")
                .focus();
        }),c && a.hasClass("password") && c.on("mousedown",function() {
            d.attr("type","text");
        }).on("mouseup",function() {
            d.attr("type","password").focus();
        });
    },_createInputSelect() {},_createInputTextarea() {
        var a = this.element,b = this.options,c = a.find("textarea"),d = function() {
            c.css({resize:"none","overflow-y":"hidden"}),c[0].style.height = 0;var a = c[0].scrollHeight;c[0].style.height = b.textMaxHeight > 0 ? b.textMaxHeight > a ? `${a  }px` : `${b.textMaxHeight}px` : `${a}px`;
        };b.textAutoResize && (c.on("keyup",d),c.on("keydown",d),c.on("change",d),c.on("focus",d),c.on("cut",d),c.on("paste",d),c.on("drop",d));
    },_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    }}),$.widget("metro.keypad",{version:"3.0.0",options:{target:!1,shuffle:!1,length:!1,keys:["1","2","3","4","5","6","7","8","9","0"],size:32,onKey() {},onChange() {}},_create() {
        var a = this.element,b = this.options;$.each(a.data(),function(a,c) {
            if (a in b) {
                try {
                    b[a] = $.parseJSON(c);
                } catch (d) {
                    b[a] = c;
                }
            }
        }),"string" === typeof b.keys && (b.keys = b.keys.split(",")),b.target !== !1 && (b.target = $(b.target)),this._createKeypad(),a.data("keypad",this);
    },_shuffleKeys() {
        var a = (this.element,this.options),b = a.keys.slice(0),c = this._keypad,d = b.length + 2;a.shuffle && (b = b.shuffle()),c.html("").css({width:d / 4 * a.size + 2 * (d / 4 + 1) + 2}),b.map(function(a) {
            $("<div/>").addClass("key")
                .html(a)
                .data("key",a)
                .appendTo(c);
        }),$("<div/>").addClass("key")
            .html("&larr;")
            .data("key","&larr;")
            .appendTo(c),$("<div/>").addClass("key")
            .html("&times;")
            .data("key","&times;")
            .appendTo(c);
    },_createKeypad() {
        var that = this,element = this.element,o = this.options,keypad;element.hasClass("input-control") ? (keypad = $("<div/>").addClass("keypad keypad-dropdown")
            .css({position:"absolute","z-index":1e3,display:"none"})
            .appendTo(element),o.target = element.find("input"),element.on("click",function(a) {
                "none" === keypad.css("display") ? keypad.show() : keypad.hide();var b = $(".keypad.keypad-dropdown");$.each(b,function() {
                    $(this).is(keypad) || $(this).hide();
                }),a.stopPropagation();
            }),$("html").on("click",function() {
                $(".keypad.keypad-dropdown").hide();
            })) : (keypad = element,keypad.addClass("keypad")),o.target !== !1 && $(o.target).attr("readonly",!0),"dropdown" === keypad.parent().data("role") && keypad.parent().css({top:"100%"}),this._keypad = keypad,this._shuffleKeys(),keypad.on("click",".key",function(e) {
            var key = $(this),result;if (o.target) {
                if ("&larr;" !== key.data("key") && "&times;" !== key.data("key")) {
                    if (o.length && $(o.target).val().length === o.length) {
                        return !1;
                    }$(o.target).val(`${$(o.target).val()}${key.data("key")}`);
                } else if ("&times;" === key.data("key") && $(o.target).val(""),"&larr;" === key.data("key")) {
                    var val = $(o.target).val();$(o.target).val(val.substring(0,val.length - 1));
                }o.target.trigger("change");
            }"function" === typeof o.onKey ? o.onKey(key) : "function" === typeof window[o.onKey] ? window[o.onKey](key) : (result = eval(`(function(){${o.onKey}})`),result.call(key)),"function" === typeof o.onChange ? o.onChange(o.target.val()) : "function" === typeof window[o.onChange] ? window[o.onChange](o.target.val()) : (result = eval(`(function(){${o.onChange}})`),result.call({value:o.target.val()})),o.shuffle && that._shuffleKeys(),e.preventDefault(),e.stopPropagation();
        });
    },_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    }}),$.widget("metro.listview",{version:"3.0.0",options:{onExpand() {},onCollapse() {},onActivate() {},onListClick() {}},_create() {
        var a = this.element,b = this.options;$.each(a.data(),function(a,c) {
            if (a in b) {
                try {
                    b[a] = $.parseJSON(c);
                } catch (d) {
                    b[a] = c;
                }
            }
        }),this._initList(),this._createEvents(),a.data("listview",this);
    },_initList() {
        var a = this.element,b = (this.options,a.find(".list-group"));$.each(b,function() {
            var a = $(this);a.hasClass("collapsed") && a.find(".list-group-content").hide();
        });
    },_createEvents() {
        var that = this,element = this.element,o = this.options;element.on("click",".list-group-toggle",function(e) {
            var toggle = $(this),parent = toggle.parent(),result;toggle.parent().hasClass("keep-open") || (parent.toggleClass("collapsed"),parent.hasClass("collapsed") ? (toggle.siblings(".list-group-content").slideUp("fast"),"function" === typeof o.onCollapse ? o.onCollapse(parent) : "function" === typeof window[o.onCollapse] ? window[o.onCollapse](parent) : (result = eval(`(function(){${o.onCollapse}})`),result.call(parent))) : (toggle.siblings(".list-group-content").slideDown("fast"),"function" === typeof o.onExpand ? o.onExpand(parent) : "function" === typeof window[o.onExpand] ? window[o.onExpand](parent) : (result = eval(`(function(){${o.onExpand}})`),result.call(parent))),e.preventDefault(),e.stopPropagation());
        }),element.on("click",".list",function(e) {
            var list = $(this),result;element.find(".list").removeClass("active"),list.addClass("active"),"function" === typeof o.onActivate ? o.onActivate(list) : "function" === typeof window[o.onActivate] ? window[o.onActivate](list) : (result = eval(`(function(){${o.onActivate}})`),result.call(list)),"function" === typeof o.onListClick ? o.onListClick(list) : "function" === typeof window[o.onListClick] ? window[o.onListClick](list) : (result = eval(`(function(){${o.onListClick}})`),result.call(list)),e.preventDefault(),e.stopPropagation();
        });
    },_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    }});var _notify_container = !1,_notifies = [],Notify = {_container:null,_notify:null,_timer:null,version:"3.0.0",options:{icon:"",caption:"",content:"",shadow:!0,width:"auto",height:"auto",style:!1,position:"right",timeout:3e3,keepOpen:!1,type:"default"},init(a) {
        return this.options = $.extend({},this.options,a),this._build(),this;
    },_build() {
        var a = this,b = this.options;if (this._container = _notify_container || $("<div/>").addClass("notify-container")
            .appendTo("body"),_notify_container = this._container,"" === b.content || void 0 === b.content) {
            return !1;
        } if (this._notify = $("<div/>").addClass("notify"),"default" !== b.type && this._notify.addClass(b.type),b.shadow && this._notify.addClass("shadow"),b.style && void 0 !== b.style.background && this._notify.css("background-color",b.style.background),b.style && void 0 !== b.style.color && this._notify.css("color",b.style.color),"" !== b.icon) {
            $(b.icon).addClass("notify-icon")
                .appendTo(this._notify);
        }"" !== b.caption && void 0 !== b.caption && $("<div/>").addClass("notify-title")
            .html(b.caption)
            .appendTo(this._notify),"" !== b.content && void 0 !== b.content && $("<div/>").addClass("notify-text")
            .html(b.content)
            .appendTo(this._notify);var c = $("<span/>").addClass("notify-closer")
            .appendTo(this._notify);c.on("click",function() {
            a.close(0);
        }),"auto" !== b.width && this._notify.css("min-width",b.width),"auto" !== b.height && this._notify.css("min-height",b.height),this._notify.hide().appendTo(this._container)
            .fadeIn("slow"),_notifies.push(this._notify),b.keepOpen || this.close(b.timeout);
    },close(a) {
        var b = this;return void 0 === a ? this._hide() : (setTimeout(function() {
            b._hide();
        },a),this);
    },_hide() {
        var a = this;return void 0 !== this._notify ? (this._notify.fadeOut("slow",function() {
            $(this).remove(),_notifies.splice(_notifies.indexOf(a._notify),1);
        }),this) : !1;
    },closeAll() {
        return _notifies.forEach(function(a) {
            a.hide("slow",function() {
                a.remove(),_notifies.splice(_notifies.indexOf(a),1);
            });
        }),this;
    }};return $.Notify = function(a) {
        return Object.create(Notify).init(a);
    },$.Notify.show = function(a,b,c) {
        return $.Notify({content:a,caption:b,icon:c});
    },$.widget("metro.panel",{version:"3.0.0",options:{onExpand() {},onCollapse() {}},_create() {
        var element = this.element,o = this.options;if ($.each(element.data(),function(a,b) {
            if (a in o) {
                try {
                    o[a] = $.parseJSON(b);
                } catch (c) {
                    o[a] = b;
                }
            }
        }),element.hasClass("collapsible") || element.addClass("collapsible"),element.hasClass("collapsible")) {
            var toggle = element.children(".heading"),content = element.children(".content");toggle.on("click",function() {
                var result;element.hasClass("collapsed") ? content.slideDown("fast",function() {
                    element.removeClass("collapsed"),"function" === typeof o.onExpand ? o.onExpand(element) : "function" === typeof window[o.onExpand] ? window[o.onExpand](element) : (result = eval(`(function(){${o.onExpand}})`),result.call(element));
                }) : content.slideUp("fast",function() {
                    element.addClass("collapsed"),"function" === typeof o.onCollapse ? o.onCollapse(element) : "function" === typeof window[o.onCollapse] ? window[o.onCollapse](element) : (result = eval(`(function(){${o.onCollapse}})`),result.call(element));
                });
            });
        }element.data("panel",this);
    },_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    }}),$.widget("metro.widget",{version:"1.0.0",options:{someValue:null},_create() {
        {var a = this.element;this.options;} this._setOptionsFromDOM(),a.data("widget",this);
    },_setOptionsFromDOM() {
        var a = this.element,b = this.options;$.each(a.data(),function(a,c) {
            if (a in b) {
                try {
                    b[a] = $.parseJSON(c);
                } catch (d) {
                    b[a] = c;
                }
            }
        });
    },_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    }}),$.widget("metro.popover",{version:"3.0.0",options:{popoverText:"",popoverTimeout:3e3,popoverPosition:"top",popoverBackground:"bg-cyan",popoverColor:"fg-white",popoverMode:"none",popoverShadow:!0,onPopup() {}},popover:{},_create() {
        var a = this.element;this.createPopover(),a.data("popover",this);
    },createPopover() {
        var a,b = this,c = this.options;a = this.element,$.each(a.data(),function(a,b) {
            if (a in c) {
                try {
                    c[a] = $.parseJSON(b);
                } catch (d) {
                    c[a] = b;
                }
            }
        });var d,e;switch (d = $("<div/>").addClass("popover")
            .appendTo("body")
            .hide(),$("<div/>").appendTo(d),c.popoverShadow && d.addClass("popover-shadow"),c.popoverBackground && ("#" === c.popoverBackground[0] ? d.css("background-color",c.popoverBackground) : d.addClass(c.popoverBackground)),c.popoverColor && ("#" === c.popoverColor[0] ? d.css("color",c.popoverColor) : d.addClass(c.popoverColor)),c.popoverPosition) {
        case "left":e = "marker-on-right";break;case "right":e = "marker-on-left";break;case "bottom":e = "marker-on-top";break;default:e = "marker-on-bottom";
        }d.css({position:"fixed"}),d.addClass(e),this.popover = d,this.setText(c.popoverText),a.on(c.popoverMode,function() {
            d.data("visible") || b.show();
        }),$(window).scroll(function() {
            b.popover.data("visible") && b.setPosition();
        });
    },setPosition() {
        var a = this.options,b = this.popover,c = this.element;return "top" === a.popoverPosition ? b.css({top:c.offset().top - $(window).scrollTop() - b.outerHeight() - 10,left:c.offset().left + c.outerWidth() / 2 - b.outerWidth() / 2 - $(window).scrollLeft()}) : "bottom" === a.popoverPosition ? b.css({top:c.offset().top - $(window).scrollTop() + c.outerHeight() + 10,left:c.offset().left + c.outerWidth() / 2 - b.outerWidth() / 2 - $(window).scrollLeft()}) : "right" === a.popoverPosition ? b.css({top:c.offset().top + c.outerHeight() / 2 - b.outerHeight() / 2 - $(window).scrollTop(),left:c.offset().left + c.outerWidth() - $(window).scrollLeft() + 10}) : "left" === a.popoverPosition && b.css({top:c.offset().top + c.outerHeight() / 2 - b.outerHeight() / 2 - $(window).scrollTop(),left:c.offset().left - b.outerWidth() - $(window).scrollLeft() - 10}),this;
    },setText(a) {
        this.popover.children("div").html(a);
    },show() {
        var o = this.options,popover = this.popover;this.setPosition(),popover.fadeIn(function() {
            if (popover.data("visible",!0),"function" === typeof o.onPopup) {
                o.onPopup(popover);
            } else if ("function" === typeof window[o.onPopup]) {
                window[o.onPopup](popover);
            } else {
                var result = eval(`(function(){${o.onPopup}})`);result.call(popover);
            }setTimeout(function() {
                popover.fadeOut(function() {
                    popover.data("visible",!1);
                });
            },o.popoverTimeout);
        });
    },_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    }}),$.widget("metro.preloader",{version:"3.0.0",options:{type:"ring",style:"light"},_create() {
        var a = this.element,b = this.options;$.each(a.data(),function(a,c) {
            if (a in b) {
                try {
                    b[a] = $.parseJSON(c);
                } catch (d) {
                    b[a] = c;
                }
            }
        }),this._createStructure(),a.data("preloader",this);
    },_createRing() {
        {var a,b,c,d = this.element;this.options;} for (a = 0;5 > a;a++) {
            b = $("<div/>").addClass("wrap")
                .appendTo(d),c = $("<div/>").addClass("circle")
                .appendTo(b);
        }
    },_createMetro() {
        {var a,b,c = this.element;this.options;} for (a = 0;5 > a;a++) {
            b = $("<div/>").addClass("circle")
                .appendTo(c);
        }
    },_createSquare() {
        {var a,b,c = this.element;this.options;} for (a = 0;4 > a;a++) {
            b = $("<div/>").addClass("square")
                .appendTo(c);
        }
    },_createCycle() {
        {var a,b = this.element;this.options;}a = $("<div/>").addClass("cycle")
            .appendTo(b);
    },_createStructure() {
        var a = this.element,b = this.options;switch (a.addClass(`preloader-${b.type}`),"light" !== b.style && a.addClass(`${b.style}-style`),a.html(""),b.type) {
        case "ring":this._createRing();break;case "metro":this._createMetro();break;case "square":this._createSquare();break;case "cycle":this._createCycle();
        }
    },_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    }}),$.widget("metro.presenter",{version:"3.0.0",options:{height:"200",width:"100%",effect:"random",duration:1e3,timeout:2e3,sceneTimeout:2e3,easing:"swing"},_acts:void 0,_currentAct:0,_actDone:!0,_interval:void 0,_effects:["top","bottom","left","right"],_actor_positions:[],_create() {
        var a = this.element,b = this.options;$.each(a.data(),function(a,c) {
            if (a in b) {
                try {
                    b[a] = $.parseJSON(c);
                } catch (d) {
                    b[a] = c;
                }
            }
        }),this._createPresenter(),this._showScene(),a.data("presenter",this);
    },_createPresenter() {
        var a = this.element,b = this.options,c = a.find(".act");c.hide(),this._acts = c,a.css({height:b.height,width:b.width});
    },_showScene() {
        {var a = this;this.element,this.options;} this._interval = setInterval(function() {
            a._actDone && (a._currentAct++,a._currentAct == a._acts.length && (a._currentAct = 0),a._showAct());
        },500);
    },_closeAct() {
        var a = this,b = (this.element,this.options),c = this._currentAct;setTimeout(function() {
            void 0 !== a._acts[c] && $(a._acts[c]).fadeOut(1e3,function() {
                a._actDone = !0;
            });
        },b.sceneTimeout);
    },_showAct() {
        var a,b = this,c = this.element,d = this.options,e = $(this._acts[this._currentAct]),f = e.find(".actor");this._actDone = !1,e.fadeIn(1e3),f.css({opacity:0,position:"absolute",display:"none"}),a = 0,$.each(f,function() {
            var e,g,h,i,j = $(this),k = {top:j.data("position").split(",")[0],left:j.data("position").split(",")[1]};e = void 0 !== j.data("effect") ? j.data("effect") : d.effect,"random" === e && (e = b._effects[Math.floor(Math.random() * b._effects.length)]),g = void 0 !== j.data("duration") ? j.data("duration") : d.duration,h = void 0 !== j.data("timeout") ? j.data("timeout") : d.timeout,i = void 0 !== j.data("easing") ? j.data("easing") : d.easing,"top" === e ? setTimeout(function() {
                j.css({top:-c.height(),left:k.left,display:"block"}).animate({top:k.top,left:k.left,opacity:1},g,i,function() {
                    j[0] == f[f.length - 1] && b._closeAct();
                });
            },a * h) : "bottom" === e ? setTimeout(function() {
                j.css({top:c.height(),left:k.left,display:"block"}).animate({top:k.top,left:k.left,opacity:1},g,i,function() {
                    j[0] == f[f.length - 1] && b._closeAct();
                });
            },a * h) : "left" === e ? setTimeout(function() {
                j.css({left:-c.width(),top:k.top,display:"block"}).animate({top:k.top,left:k.left,opacity:1},g,i,function() {
                    j[0] == f[f.length - 1] && b._closeAct();
                });
            },a * h) : "right" === e ? setTimeout(function() {
                j.css({left:c.width(),top:k.top,display:"block"}).animate({top:k.top,left:k.left,opacity:1},g,i,function() {
                    j[0] == f[f.length - 1] && b._closeAct();
                });
            },a * h) : setTimeout(function() {
                j.css({top:k.top,left:k.left,display:"block"}).animate({top:k.top,left:k.left,opacity:1},g,"swing",function() {
                    j[0] == f[f.length - 1] && b._closeAct();
                });
            },a * h),a++;
        });
    },_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    }}),$.widget("metro.progress",{version:"3.0.0",options:{color:"default",colors:!1,value:0,animate:!1,onProgress() {}},colorsDim:{},_create() {
        var a = this,b = this.element,c = this.options,d = b.children(".bar:last-child");if (b.hasClass("progress") || b.addClass("progress"),$.each(b.data(),function(a,b) {
            if (a in c) {
                try {
                    c[a] = $.parseJSON(b);
                } catch (d) {
                    c[a] = b;
                }
            }
        }),0 === d.length && (d = $("<div/>").addClass("bar")
                .appendTo(b)),c.colors) {
            var e = 0;$.each(c.colors,function(b,c) {
                a.colorsDim[b] = [e,c],e = c + 1;
            });
        } this.set(c.value),this.color(c.color),b.data("progress",this);
    },color(a) {
        var b = this.element,c = this.options,d = b.children(".bar:last-child"),e = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);e ? d.css({"background-color":a}) : d.removeClass(function(a,b) {
            return (b.match(/(^|\s)bg-\S+/g) || []).join(" ");
        }).addClass(a),c.color = a;
    },set(value) {
        if (void 0 === value) {
            return this.options.value;
        } var element = this.element,o = this.options,colors = this.colorsDim,bar = element.children(".bar:last-child"),that = this,gradient = [];if (!(parseInt(value) < 0)) {
            if (o.colors && $.each(colors,function(a,b) {
                return value >= b[0] && value <= b[1] ? (that.color(a),!0) : void 0;
            }),o.value = value,o.animate !== !1) {
                var ani_speed = isNaN(o.animate) ? 500 : o.animate;bar.animate({width:`${o.value}%`},ani_speed,function() {
                    if ("function" === typeof o.onProgress) {
                        o.onProgress(value);
                    } else if ("function" === typeof window[o.onProgress]) {
                        window[o.onProgress](value);
                    } else {
                        var result = eval(`(function(){${o.onProgress}})`);result.call(value);
                    }
                });
            } else if (bar.css({width:`${o.value}%`}),"function" === typeof o.onProgress) {
                o.onProgress(value);
            } else if ("function" === typeof window[o.onProgress]) {
                window[o.onProgress](value);
            } else {
                var result = eval(`(function(){${o.onProgress}})`);result.call(value);
            }
        }
    },value(a) {
        return this.set(a);
    },_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    }}),$.widget("metro.rating",{version:"3.0.0",options:{stars:5,value:0,half:!0,"static":!1,showScore:!0,scoreTitle:"Current: ",size:"default",colorRate:!1,onRate() {
        return !0;
    },onRated() {}},_value:0,_values:[],_create() {
        var a = this.element,b = this.options;$.each(a.data(),function(a,c) {
            if (a in b) {
                try {
                    b[a] = $.parseJSON(c);
                } catch (d) {
                    b[a] = c;
                }
            }
        }),this._value = parseFloat(b.value),this._values[0] = Math.ceil(1 * b.stars / 3),this._values[1] = Math.ceil(2 * b.stars / 3),this._values[2] = b.stars,this._createRating(),this._createEvents(),this._setValue(this._value),this._setScore(this._value),a.data("rating",this);
    },_createRating() {
        var a,b,c,d = this.element,e = this.options;switch (d.hasClass("rating") || d.addClass("rating"),e.size) {
        case "small":d.addClass("small");break;case "large":d.addClass("large");
        } for (e.static && d.addClass("static"),a = 0;a < e.stars;a++) {
            b = $("<span/>").addClass("star")
                .appendTo(d)
                .data("star-value",a + 1);
        }e.showScore && (c = $("<span/>").addClass("score")
            .appendTo(d));
    },_createEvents() {
        var that = this,element = this.element,o = this.options,stars;stars = element.find(".star"),stars.on("click",function(e) {
            if (o.static || element.hasClass("static") || element.data("static")) {
                return !1;
            } var result,value = $(this).data("star-value"),star = this,rating = that;if ("function" === typeof o.onRate) {
                if (!o.onRate(value,star,rating)) {
                    return !1;
                }
            } else if ("function" === typeof window[o.onRate]) {
                if (!window[o.onRate](value,star,rating)) {
                    return !1;
                }
            } else if (result = eval(`(function(){${o.onRate}})`),!result.call(value,star,rating)) {
                return !1;
            }"function" === typeof o.onRated ? o.onRated(value,star,rating) : "function" === typeof window[o.onRated] ? window[o.onRated](value,star,rating) : (result = eval(`(function(){${o.onRated}})`),result.call(value,star,rating)),that._value = $(this).data("star-value"),that._setValue(),that._setScore(),e.preventDefault(),e.stopPropagation();
        });
    },_setValue() {
        var a,b = this.options,c = this.element;if (b.stars) {
            a = c.find(".star").removeClass("on half");var d = Math.floor(this._value) - 1,e = 10 * (this._value - Math.floor(this._value)) > 0;$(a[d]).addClass("on"),$(a[d]).prevAll()
                .addClass("on"),e && $(a[d]).next()
                .addClass("on half");
        }b.colorRate && (c.removeClass("poor regular good"),this._value <= this._values[0] ? c.addClass("poor") : this._value > this._values[0] && this._value <= this._values[1] ? c.addClass("regular") : this._value > this._values[1] && c.addClass("good"));
    },_setScore() {
        var a = this._value,b = this.element,c = this.options;void 0 !== a && b.find(".score").html(c.scoreTitle + a);
    },value(a) {
        return void 0 === a ? this._value : (this._value = a,this._setValue(),this._setScore(),void 0);
    },_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    }}),$.widget("metro.select",{version:"3.0.0",options:{},_create() {
        var a = this.element,b = this.options,c = ["templateResult","templateSelection","matcher","initSelection","query"];if ($.each(a.data(),function(a,c) {
            try {
                b[a] = $.parseJSON(c);
            } catch (d) {
                b[a] = c;
            }
        }),c.map(function(a) {
                void 0 !== b[a] && (b[a] = window[b[a]]);
            }),void 0 !== b.dropdownParent && (b.dropdownParent = $(b.dropdownParent)),$().select2) {
            try {
                a.find("select").select2(b);
            } catch (d) {}
        } else {
            console.log("You are trying to use support for Select2, but the plugin is not found!");
        }a.data("select",this);
    },_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    }}),$.widget("metro.slider",{version:"3.0.14",options:{position:0,buffer:0,accuracy:0,color:"default",completeColor:"default",bufferColor:"default",markerColor:"default",colors:!1,showHint:!1,permanentHint:!1,hintPosition:"top",vertical:!1,min:0,max:100,animate:!1,minValue:0,maxValue:100,currValue:0,returnType:"value",target:!1,onStartChange() {},onChange() {},onChanged() {},onBufferChange() {},_slider:{vertical:!1,offset:0,length:0,marker:0,ppp:0,start:0,stop:0}},_create() {
        var that = this,element = this.element,o = this.options,s = o._slider;$.each(element.data(),function(a,b) {
            if (a in o) {
                try {
                    o[a] = $.parseJSON(b);
                } catch (c) {
                    o[a] = b;
                }
            }
        }),element.data("internal_id",metroUtils.uniqueId()),o.accuracy = o.accuracy < 0 ? 0 : o.accuracy,o.min = o.min < 0 ? 0 : o.min,o.min = o.min > o.max ? o.max : o.min,o.max = o.max > 100 ? 100 : o.max,o.max = o.max < o.min ? o.min : o.max,o.position = this._correctValue(element.data("position") > o.min ? element.data("position") > o.max ? o.max : element.data("position") : o.min),o.buffer = this._correctValue(element.data("buffer") > o.min ? element.data("buffer") > o.max ? o.max : element.data("buffer") : o.min),o.colors = o.colors ? o.colors.split(",") : !1,s.vertical = o.vertical,o.vertical && !element.hasClass("vertical") && element.addClass("vertical"),o.permanentHint && !element.hasClass("permanent-hint") && element.addClass("permanent-hint"),o.vertical || "bottom" !== o.hintPosition || element.addClass("hint-bottom"),o.vertical && "left" === o.hintPosition && element.addClass("hint-left"),this._createSlider(),this._initPoints(),this._placeMarker(o.position),this._showBuffer(o.buffer);var event_down = isTouchDevice() ? "touchstart" : "mousedown";o.target && "INPUT" == $(o.target)[0].tagName && $(o.target).on("keyup",function() {
            var a = void 0 !== this.value ? this.value : 0,b = Math.min(a,o.maxValue);that._placeMarker(that._realValueToValue(b));
        }),element.children(".marker").on(event_down,function(e) {
            if (that._startMoveMarker(e),"function" === typeof o.onStartChange) {
                o.onStartChange();
            } else if ("function" === typeof window[o.onStartChange]) {
                window[o.onStartChange]();
            } else {
                var result = eval(`(function(){${o.onStartChange}})`);result.call();
            }e.preventDefault(),e.stopPropagation();
        }),element.on(event_down,function(a) {
            a.preventDefault(),that._startMoveMarker(a);
        }),element.data("slider",this);
    },_startMoveMarker(e) {
        var element = this.element,o = this.options,that = this,hint = element.children(".slider-hint"),returnedValue,event_move = isTouchDevice() ? "touchmove" : "mousemove",event_up = isTouchDevice() ? "touchend" : "mouseup mouseleave";$(document).on(event_move,function(a) {
            that._movingMarker(a),element.hasClass("permanent-hint") || hint.css("display","block");
        }),$(document).on(event_up,function() {
            if ($(document).off(event_move),$(document).off(event_up),element.data("value",o.position),element.trigger("changed",o.position),element.trigger("change",o.position),returnedValue = "value" === o.returnType ? that._valueToRealValue(o.position) : o.position,element.hasClass("permanent-hint") || hint.css("display","none"),"function" === typeof o.onChanged) {
                o.onChanged(returnedValue,element);
            } else if ("function" === typeof window[o.onChanged]) {
                window[o.onChanged](returnedValue,element);
            } else {
                var result = eval(`(function(){${o.onChanged}})`);result.call(returnedValue,element);
            }
        }),this._initPoints(),this._movingMarker(e);
    },_movingMarker(ev) {
        var element = this.element,o = this.options,cursorPos,percents,valuePix,vertical = o._slider.vertical,sliderOffset = o._slider.offset,sliderStart = o._slider.start,sliderEnd = o._slider.stop,sliderLength = o._slider.length,markerSize = o._slider.marker,event = isTouchDevice() ? ev.originalEvent.touches[0] : ev.originalEvent;cursorPos = vertical ? event.pageY - sliderOffset : event.pageX - sliderOffset,sliderStart > cursorPos ? cursorPos = sliderStart : cursorPos > sliderEnd && (cursorPos = sliderEnd),valuePix = vertical ? sliderLength - cursorPos - markerSize / 2 : cursorPos - markerSize / 2,percents = this._pixToPerc(valuePix),this._placeMarker(percents),o.currValue = this._valueToRealValue(percents),o.position = percents;var returnedValue = "value" === o.returnType ? this._valueToRealValue(o.position) : o.position;if (o.target && ("INPUT" == $(o.target)[0].tagName ? $(o.target).val(returnedValue) : $(o.target).html(returnedValue),$(o.target).trigger("change",returnedValue)),"function" === typeof o.onChange) {
            o.onChange(returnedValue,element);
        } else if ("function" === typeof window[o.onChange]) {
            window[o.onChange](returnedValue,element);
        } else {
            var result = eval(`(function(){${o.onChange}})`);result.call(returnedValue,element);
        }
    },_placeMarker(a) {
        var b,c,d,e,f,g = this.options,h = 0,i = (this.element,this.element.children(".marker")),j = this.element.children(".complete"),k = this.element.children(".slider-hint"),l = this._percToPix(g.position);if (d = g.colors.length,e = g._slider.length / d,g._slider.vertical) {
            var m = this._percToPix(g.position) + g._slider.marker,n = g._slider.length - m;b = this._percToPix(a) + g._slider.marker / 2,c = g._slider.length - b,this._animate(i.css("top",n),{top:c}),this._animate(j.css("height",m),{height:b}),d && (h = Math.round(b / e) - 1,j.css("background-color",g.colors[0 > h ? 0 : h])),g.showHint && (f = this._valueToRealValue(a),k.html(f).css("top",c - i.height() / 2 - k.height() / 4));
        } else {
            b = this._percToPix(a),this._animate(i.css("left",l),{left:b}),this._animate(j.css("width",l),{width:b}),d && (h = Math.round(b / e) - 1,j.css("background-color",g.colors[0 > h ? 0 : h])),g.showHint && (f = this._valueToRealValue(a),k.html(f).css("left",b - i.width() / 2));
        }
    },_valueToRealValue(a) {
        var b,c = this.options,d = (c.maxValue - c.minValue) / 100;return b = a * d + c.minValue,Math.round(b);
    },_realValueToValue(a) {
        var b,c = this.options,d = (c.maxValue - c.minValue) / 100;return b = a / d + c.minValue,Math.round(b);
    },_animate(a,b) {
        var c = this.options;c.animate ? a.stop(!0).animate(b) : a.css(b);
    },_pixToPerc(a) {
        var b;return b = (0 > a ? 0 : a) * this.options._slider.ppp,Math.round(this._correctValue(b));
    },_percToPix(a) {
        return 0 === this.options._slider.ppp ? 0 : Math.round(a / this.options._slider.ppp);
    },_correctValue(a) {
        var b = this.options,c = b.accuracy,d = b.max,e = b.min;return 0 === c ? a : a === d ? d : a === e ? e : (a = Math.floor(a / c) * c + Math.round(a % c / c) * c,a > d ? d : e > a ? e : a);
    },_initPoints() {
        var a = this.options,b = a._slider,c = this.element;b.vertical ? (b.offset = c.offset().top,b.length = c.height(),b.marker = c.children(".marker").height()) : (b.offset = c.offset().left,b.length = c.width(),b.marker = c.children(".marker").width()),b.ppp = a.max / (b.length - b.marker),b.start = b.marker / 2,b.stop = b.length - b.marker / 2;
    },_createSlider() {
        var a,b,c,d,e,f = this.element,g = this.options;f.html(""),e = $("<div/>").addClass("slider-backside")
            .appendTo(f),a = $("<div/>").addClass("complete")
            .appendTo(f),d = $("<div/>").addClass("buffer")
            .appendTo(f),b = $("<a/>").addClass("marker")
            .appendTo(f),g.showHint && (c = $("<span/>").addClass("slider-hint")
            .appendTo(f)),"default" !== g.color && (metroUtils.isColor(g.color) ? e.css("background-color",g.color) : e.addClass(g.color)),
        "default" !== g.completeColor && (metroUtils.isColor(g.completeColor) ? a.css("background-color",g.completeColor) : a.addClass(g.completeColor)),"default" !== g.bufferColor && (metroUtils.isColor(g.bufferColor) ? d.css("background-color",g.bufferColor) : d.addClass(g.bufferColor)),"default" !== g.markerColor && (metroUtils.isColor(g.markerColor) ? b.css("background-color",g.markerColor) : b.addClass(g.markerColor));
    },value(value) {
        var element = this.element,o = this.options,returnedValue;if ("undefined" !== typeof value) {
            if (value = value > o.max ? o.max : value,value = value < o.min ? o.min : value,this._placeMarker(parseInt(value)),o.position = parseInt(value),returnedValue = "value" === o.returnType ? this._valueToRealValue(o.position) : o.position,o.target && ("INPUT" == $(o.target)[0].tagName ? $(o.target).val(returnedValue) : $(o.target).html(returnedValue),$(o.target).trigger("change",returnedValue)),"function" === typeof o.onChange) {
                o.onChange(returnedValue,element);
            } else if ("function" === typeof window[o.onChange]) {
                window[o.onChange](returnedValue,element);
            } else {
                var result = eval(`(function(){${o.onChange}})`);result.call(returnedValue,element);
            } return this;
        } return returnedValue = "value" === o.returnType ? this._valueToRealValue(o.position) : o.position;
    },_showBuffer(a) {
        var b,c,d = this.options,e = (this.element,this.element.children(".buffer"));c = d.buffer,b = 100 == a ? 99.9 : a,d._slider.vertical ? this._animate(e.css("height",`${c}%`),{height:`${b}%`}) : this._animate(e.css("width",`${c}%`),{width:`${b}%`});
    },buffer(value) {
        var element = this.element,o = this.options,returnedValue;if ("undefined" !== typeof value) {
            if (value = value > 100 ? 100 : value,value = 0 > value ? 0 : value,this._showBuffer(parseInt(value)),o.buffer = parseInt(value),returnedValue = o.buffer,"function" === typeof o.onBufferChange) {
                o.onBufferChange(returnedValue,element);
            } else if ("function" === typeof window[o.onBufferChange]) {
                window[o.onBufferChange](returnedValue,element);
            } else {
                var result = eval(`(function(){${o.onBufferChange}})`);result.call(returnedValue,element);
            } return this;
        } return returnedValue = o.buffer;
    },_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    }}),$.widget("metro.stepper",{version:"3.0.0",options:{steps:3,start:1,type:"default",clickable:!0,onStep() {},onStepClick() {}},_create() {
        var a = this.element,b = this.options,c = a.attr("id");$.each(a.data(),function(a,c) {
            if (a in b) {
                try {
                    b[a] = $.parseJSON(c);
                } catch (d) {
                    b[a] = c;
                }
            }
        }),a.hasClass("stepper") || a.addClass("stepper"),void 0 === c && (c = metroUtils.uniqueId(`${this.widgetName}_`),a.attr("id",c)),this._createStepper(),b.clickable && this._createEvents(),this._positioningSteps(),this._stepTo(b.start),a.data("stepper",this);
    },_createEvents() {
        var that = this,element = this.element,o = this.options;element.on("click","li",function(e) {
            var step = $(this).data("step");if ("function" === typeof o.onStepClick) {
                o.onStepClick(step - 1,step);
            } else if ("function" === typeof window[o.onStepClick]) {
                window[o.onStepClick](step - 1,step);
            } else {
                var result = eval(`(function(){${o.onStepClick}})`);result.call(step - 1,step);
            }element.trigger("stepclick",step);
        });
    },_createStepper() {
        var a,b,c,d = this.element,e = this.options;switch (b = $("<ul/>"),e.type) {
        case "diamond":d.addClass("diamond");break;case "cycle":d.addClass("cycle");
        } for (a = 0;a < e.steps;a++) {
            c = $("<li/>").data("step",a + 1)
                .appendTo(b);
        }b.appendTo(d);
    },_positioningSteps() {
        var a = this.element,b = (this.options,a.find("li")),c = a.width(),d = b.length - 1,e = $(b[0]).width();$.each(b,function(a,b) {
            var f = 0 === a ? 0 : (c - e) / d * a;console.log(c),$(b).animate({left:f});
        });
    },_stepTo(step) {
        var element = this.element,o = this.options,steps = element.find("li");steps.removeClass("current").removeClass("complete"),$.each(steps,function(i,s) {
            if (step - 1 > i && $(s).addClass("complete"),i === step - 1) {
                if ($(s).addClass("current"),"function" === typeof o.onStep) {
                    o.onStep(i + 1,s);
                } else if ("function" === typeof window[o.onStep]) {
                    window[o.onStep](i + 1,s);
                } else {
                    var result = eval(`(function(){${o.onStep}})`);result.call(i + 1,s);
                }
            }
        });
    },stepTo(a) {
        this._stepTo(a);
    },first() {
        var a = this.options;a.start = 1,this._stepTo(a.start);
    },last() {
        var a = this.element,b = this.options,c = a.find("li");b.start = c.length,this._stepTo(b.start);
    },next() {
        var a = this.element,b = this.options,c = a.find("li");b.start + 1 > c.length || (b.start++,this._stepTo(b.start));
    },prior() {
        var a = this.options;a.start - 1 !== 0 && (a.start--,this._stepTo(a.start));
    },_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    }}),$.widget("metro.streamer",{version:"3.0.0",options:{scrollBar:!1,meterStart:9,meterStop:19,meterInterval:20,slideToTime:"default",slideSleep:1e3,slideSpeed:1e3,onClick() {}},_create() {
        var a = this.element,b = this.options,c = a.find(".stream"),d = a.find(".event"),e = a.find(".events"),f = a.find(".events-area"),g = a.find(".event-group"),h = a.find(".event-stream");$.each(a.data(),function(a,c) {
            if (a in b) {
                try {
                    b[a] = $.parseJSON(c);
                } catch (d) {
                    b[a] = c;
                }
            }
        }),a.data("streamSelect",-1);var i,j,k,l = $("<ul/>").addClass("meter"),m = b.meterStart,n = b.meterStop,o = b.meterInterval,p = [];for (i = m;n > i;i++) {
            for (j = 0;60 > j;j += o) {
                k = `${10 > i ? `0${  i}` : i  }:${  10 > j ? `0${  j}` : j}`,$("<li/>").addClass(`js-interval-${k.replace(":","-")}`)
                    .html(`<em>${k}</em>`)
                    .appendTo(l),p.push(k);
            }
        }a.data("intervals",p),l.insertBefore(a.find(".events-grid")),a.find(".event-stream").each(function(a,b) {
            var d = 0,e = $(b).find(".event");e.each(function(a,b) {
                d += $(b).outerWidth() + parseInt($(b).css("margin-left"));
            }),$(b).css({width:d + 2 * (e.length - 1) + 1}),$(b).find(".time")
                .css("background-color",$(c[a]).css("background-color"));
        }),e.css({"overflow-x":b.scrollBar ? "scroll" : "hidden"}),a.css({height:a.find(".streams").outerHeight() + (b.scrollBar ? 20 : 0)});var q = 0;g.each(function(a,b) {
            q += $(b).outerWidth();
        }),q += 2 * (g.length - 1) + 10,f.css("width",q),d.each(function(a,b) {
            addTouchEvents(b);
        }),a.mousewheel(function(a,b) {
            var c = 50 * b;return e.scrollLeft(e.scrollLeft() - c),!1;
        }),c.each(function(b,c) {
            $(c).mousedown(function() {
                a.data("streamSelect") == b ? (d.removeClass("event-disable"),a.data("streamSelect",-1)) : (a.data("streamSelect",b),d.addClass("event-disable"),$(h[b]).find(".event")
                    .removeClass("event-disable"));
            });
        }),this._createEvents(),this.slideToTime(b.slideToTime,b.slideSleep,b.slideSpeed),a.data("streamer",this);
    },_createEvents() {
        var that = this,element = this.element,o = this.options,events = element.find(".event");events.on("click",function(e) {
            var event = $(this);if (e.ctrlKey && $(this).toggleClass("selected"),"function" === typeof o.onClick) {
                o.onClick(event);
            } else if ("function" === typeof window[o.onClick]) {
                window[o.onClick](event);
            } else {
                var result = eval(`(function(){${o.onClick}})`);result.call(event);
            }e.preventDefault();
        }),element.find(".js-go-previous-time").on("click",function() {
            var a = element.data("intervals").indexOf(element.data("current-time"));if (0 != a) {
                a--;var b = element.data("intervals")[a];that.slideToTime(b,0,o.slideSpeed);
            }
        }),element.find(".js-go-next-time").on("click",function() {
            var a = element.data("intervals").indexOf(element.data("current-time"));if (a != element.data("intervals").length - 1) {
                a++;var b = element.data("intervals")[a];that.slideToTime(b,0,o.slideSpeed);
            }
        }),element.find(".js-show-all-streams").on("click",function(a) {
            element.find(".event").removeClass("event-disable"),element.data("streamSelect",-1),a.preventDefault();
        }),element.find(".js-schedule-mode").on("click",function(a) {
            $(this).toggleClass("active"),element.data("schedule-mode",$(this).hasClass("inverse")),a.preventDefault();
        });
    },slideToTime(a,b,c) {
        var d,e,f = this,g = this.element;"default" === a ? (d = g.find(".meter li")[0],a = d.className.replace("js-interval-","").replace("-",":")) : (e = a.split(":"),1 === e[0].length && (a = `0${  a}`)),d = g.find(`.meter li.js-interval-${a.replace(":","-")}`)[0],setTimeout(function() {
            g.find(".events").animate({scrollLeft:d.offsetLeft - $(".streams").width()},c,function() {
                f._afterSlide();
            });
        },b),g.data("current-time",a);
    },_afterSlide() {},_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    }}),$.widget("metro.tabcontrol",{version:"3.0.0",options:{openTarget:!1,saveState:!1,onTabClick() {
        return !0;
    },onTabChange() {},_current:{tab:!1,frame:!1}},_create() {
        {var a,b,c,d = this.element,e = this.options,f = d.children(".tabs").find("li")
            .children("a");d.children(".frames").children("div");} if ($.each(d.data(),function(a,b) {
            if (a in e) {
                try {
                    e[a] = $.parseJSON(b);
                } catch (c) {
                    e[a] = b;
                }
            }
        }),e.saveState && void 0 !== d.attr("id") && "" !== d.attr("id").trim()) {
            var g = window.localStorage.getItem(`${d.attr("id")}-stored-tab`);g && "undefined" !== g && (a = d.find(`a[href='${g}']`),a && (b = a.attr("href"),c = b && metroUtils.isUrl(b) ? !1 : $(b),e._current.tab = a,e._current.frame = c));
        } if (e._current.tab || e.openTarget === !1 || (a = d.find(`a[href='${e.openTarget}']`),a && (b = a.attr("href"),c = b && metroUtils.isUrl(b) ? !1 : $(b),e._current.tab = a,e._current.frame = c)),e._current.tab || $.each(f,function(a,b) {
            var c = $(b),d = c.attr("href"),f = metroUtils.isUrl(d) ? !1 : $(d);c.parent().hasClass("active") && !c.parent().hasClass("disabled") && f !== !1 && (e._current.tab = c,e._current.frame = f);
        }),!e._current.tab) {
            for (var h = 0;h < f.length;h++) {
                if (!metroUtils.isUrl($(f[h]).attr("href")) && !$(f[h]).parent()
                    .hasClass("disabled")) {
                    e._current.tab = $(f[h]),e._current.frame = $($(f[h]).attr("href"));break;
                }
            }
        } this._createEvents(),this._openTab(),d.data("tabcontrol",this);
    },_hideTabs() {
        var a = this.element,b = a.outerWidth(),c = a.children(".tabs").find("li:not(.non-visible-tabs)"),d = a.children(".tabs").find(".non-visible-tabs")
            .children(".d-menu");$.each(c,function() {
            var a = $(this),c = this;if (c.offsetLeft + c.offsetWidth + 30 > b) {
                var e = a.clone(!0);e.appendTo(d),a.remove();
            }
        });
    },_openTab() {
        var a = this.element,b = this.options,c = a.children(".tabs").find("li")
                .children("a"),d = a.children(".frames").children("div");c.parent().removeClass("active"),d.hide(),b._current.tab.parent().addClass("active"),b._current.frame.show(),b.saveState && void 0 !== a.attr("id") && "" !== a.attr("id").trim() && window.localStorage.setItem(`${a.attr("id")}-stored-tab`,b._current.tab.attr("href"));
    },_createEvents() {
        var that = this,element = this.element,o = this.options,tabs = element.children(".tabs").find("li")
                .children("a"),frames = element.children(".frames").children("div");element.on("click",".tabs > li > a",function(e) {
            var result,tab = $(this),target = tab.attr("href"),frame = $(target);if (tab.parent().hasClass("disabled")) {
                return !1;
            } if ("function" === typeof o.onTabClick) {
                if (!o.onTabClick(tab)) {
                    return !1;
                }
            } else if ("function" === typeof window[o.onTabClick]) {
                if (!window[o.onTabClick](tab)) {
                    return !1;
                }
            } else if (result = eval(`(function(){${o.onTabClick}})`),!result.call(tab)) {
                return !1;
            } return metroUtils.isUrl(target) ? (window.location.href = target,!0) : (o._current.tab = tab,o._current.frame = frame,that._openTab(),"function" === typeof o.onTabChange ? o.onTabChange(tab) : "function" === typeof window[o.onTabChange] ? window[o.onTabChange](tab) : (result = eval(`(function(){${o.onTabChange}})`),result.call(tab)),e.preventDefault(),void e.stopPropagation());
        });
    },hideTab() {},showTab() {},_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    }}),$.widget("metro.tile",{version:"3.0.0",options:{effect:"slideLeft",period:4e3,duration:700,easing:"doubleSqrt",onClick() {}},_frames:{},_currentIndex:0,_interval:0,_outPosition:0,_size:{},_create() {
        var a = this.element,b = this.options;$.each(a.data(),function(a,c) {
            if (a in b) {
                try {
                    b[a] = $.parseJSON(c);
                } catch (d) {
                    b[a] = c;
                }
            }
        }),this._createTransformTile(),this._createLiveTile(),this._createEvents(),a.data("tile",this);
    },_createEvents() {
        var that = this,element = this.element,o = this.options,event = isTouchDevice() ? "touchstart" : "click";element.on(event,function(e) {
            if ("A" === element[0].tagName) {
                ;
            } else if ("function" === typeof o.onClick) {
                o.onClick(element);
            } else if ("function" === typeof window[o.onClick]) {
                window[o.onClick](element);
            } else {
                var result = eval(`(function(){${o.onClick}})`);result.call(element);
            }
        });
    },_createLiveTile() {
        var a = this,b = this.element,c = (this.options,isTouchDevice() ? "touchstart" : "mouseenter"),d = isTouchDevice() ? "touchend" : "mouseleave";return this._frames = b.find(".live-slide"),this._frames.length <= 1 ? !1 : ($.easing.doubleSqrt = function(a) {
            return Math.sqrt(Math.sqrt(a));
        },this._size = {width:b.width(),height:b.height()},b.on(c,function() {
                a.stop();
            }),b.on(d,function() {
                a.start();
            }),void this.start());
    },start() {
        var a = this;this._interval = setInterval(function() {
            a._animate();
        },this.options.period);
    },stop() {
        clearInterval(this._interval);
    },_animate() {
        var a,b = this._frames[this._currentIndex];switch (this._currentIndex += 1,this._currentIndex >= this._frames.length && (this._currentIndex = 0),a = this._frames[this._currentIndex],this.options.effect) {
        case "slideLeft":this._effectSlideLeft(b,a);break;case "slideRight":this._effectSlideRight(b,a);break;case "slideDown":this._effectSlideDown(b,a);break;case "slideUpDown":this._effectSlideUpDown(b,a);break;case "slideLeftRight":this._effectSlideLeftRight(b,a);break;default:this._effectSlideUp(b,a);
        }
    },_effectSlideLeftRight(a,b) {
        this._currentIndex % 2 === 0 ? this._effectSlideLeft(a,b) : this._effectSlideRight(a,b);
    },_effectSlideUpDown(a,b) {
        this._currentIndex % 2 === 0 ? this._effectSlideUp(a,b) : this._effectSlideDown(a,b);
    },_effectSlideUp(a,b) {
        var c = this._size.height,d = {duration:this.options.duration,easing:this.options.easing};$(a).animate({top:-c},d),$(b).css({top:c})
            .show()
            .animate({top:0},d);
    },_effectSlideDown(a,b) {
        var c = this._size.height,d = {duration:this.options.duration,easing:this.options.easing};$(a).animate({top:c},d),$(b).css({top:-c})
            .show()
            .animate({top:0},d);
    },_effectSlideLeft(a,b) {
        var c = this._size.width,d = {duration:this.options.duration,easing:this.options.easing};$(a).animate({left:-1 * c},d),$(b).css({left:c})
            .show()
            .animate({left:0},d);
    },_effectSlideRight(a,b) {
        var c = this._size.width,d = {duration:this.options.duration,easing:this.options.easing};$(a).animate({left:c},d),$(b).css({left:-c})
            .show()
            .animate({left:0},d);
    },_createTransformTile() {
        var a = this.element,b = (this.options,{w:a.width(),h:a.height()}),c = isTouchDevice() ? "touchstart" : "mousedown",d = isTouchDevice() ? "touchend" : "mouseup",e = isTouchDevice() ? "touchend" : "mouseleave";a.on(c,function(c) {
            var d = c.pageX - $(this).offset().left,e = c.pageY - $(this).offset().top,f = "top";d < 1 * b.w / 3 && (e < 1 * b.h / 2 || e > 1 * b.h / 2) ? f = "left" : d > 2 * b.w / 3 && (e < 1 * b.h / 2 || e > 1 * b.h / 2) ? f = "right" : d > 1 * b.w / 3 && d < 2 * b.w / 3 && e > b.h / 2 && (f = "bottom"),$(this).addClass(`tile-transform-${f}`),"A" === a[0].tagName && a.attr("href") && setTimeout(function() {
                document.location.href = a.attr("href");
            },500);
        }),a.on(d,function() {
            $(this).removeClass("tile-transform-left")
                .removeClass("tile-transform-right")
                .removeClass("tile-transform-top")
                .removeClass("tile-transform-bottom");
        }),a.on(e,function() {
            $(this).removeClass("tile-transform-left")
                .removeClass("tile-transform-right")
                .removeClass("tile-transform-top")
                .removeClass("tile-transform-bottom");
        });
    },_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    }}),$.widget("metro.treeview",{version:"3.0.0",options:{doubleClick:!0,onClick() {},onInputClick() {},onExpand() {},onCollapse() {}},_create() {
        var a = this.element,b = this.options;$.each(a.data(),function(a,c) {
            if (a in b) {
                try {
                    b[a] = $.parseJSON(c);
                } catch (d) {
                    b[a] = c;
                }
            }
        }),this._initTree(),this._createEvents(),a.data("treeview",this);
    },_createCheckbox(a,b) {
        var c,d,e;c = $("<label/>").addClass("input-control checkbox small-check")
            .insertBefore(a),d = $("<input/>").attr("type","checkbox")
            .appendTo(c),e = $("<span/>").addClass("check")
            .appendTo(c),void 0 !== b.data("name") && d.attr("name",b.data("name")),void 0 !== b.data("id") && d.attr("id",b.data("id")),void 0 !== b.data("checked") && d.prop("checked",b.data("checked")),void 0 !== b.data("readonly") && d.prop("disabled",b.data("readonly")),void 0 !== b.data("disabled") && (d.prop("disabled",b.data("disabled")),b.data("disabled") === !0 && b.addClass("disabled")),void 0 !== b.data("value") && d.val(b.data("value"));
    },_createRadio(a,b) {
        var c,d,e;c = $("<label/>").addClass("input-control radio small-check")
            .insertBefore(a),d = $("<input/>").attr("type","radio")
            .appendTo(c),e = $("<span/>").addClass("check")
            .appendTo(c),void 0 !== b.data("name") && d.attr("name",b.data("name")),void 0 !== b.data("id") && d.attr("id",b.data("id")),void 0 !== b.data("checked") && d.prop("checked",b.data("checked")),void 0 !== b.data("readonly") && d.prop("disabled",b.data("readonly")),void 0 !== b.data("disabled") && (d.prop("disabled",b.data("disabled")),b.data("disabled") === !0 && b.addClass("disabled")),void 0 !== b.data("value") && d.val(b.data("value"));
    },_initTree() {
        var a = this,b = this.element,c = (this.options,b.find(".leaf"));$.each(c,function() {
            {var b = $(this),c = b.parent("li"),d = b.siblings("ul");$(b.parents(".node")[0]);}"checkbox" === c.data("mode") && a._createCheckbox(b,c),"radio" === c.data("mode") && a._createRadio(b,c),d.length > 0 && (c.hasClass("node") || c.addClass("node")),c.hasClass("collapsed") && d.hide();
        });
    },_renderChecks(a) {
        var b = this.element,c = (this.options,a.is(":checked")),d = $(a.parent().parent()),e = d.children("ul").find("[type=\"checkbox\"]");e.prop("checked",c).removeClass("indeterminate"),$.each(b.find(".node[data-mode=checkbox]").reverse(),function() {
            var a = $(this),b = a.children(".input-control").find("[type=\"checkbox\"]"),c = a.children("ul").find("[type=\"checkbox\"]"),d = a.children("ul").find("[type=\"checkbox\"]:checked");b.removeClass("indeterminate"),0 === d.length ? (b.prop("checked",!1),b.removeClass("indeterminate")) : d.length > 0 && c.length > d.length && (b.prop("checked",!0),b.addClass("indeterminate"));
        });
    },_createEvents() {
        var that = this,element = this.element,o = this.options;element.on("change","input:checkbox",function() {
            that._renderChecks($(this));
        }),element.on("click","input",function() {
            var leaf = $(this),node = $(leaf.parents(".node")[0]),parent = leaf.parent("li"),check = leaf.siblings(".input-control").find("input:checkbox"),radio = leaf.siblings(".input-control").find("input:radio"),new_check_state,check_disabled;if (check.length > 0 && (new_check_state = !check.is(":checked"),check_disabled = check.is(":disabled"),check_disabled || check.prop("checked",new_check_state),that._renderChecks(check)),radio.length > 0 && (check_disabled = radio.is(":disabled"),check_disabled || radio.prop("checked",!0)),"function" === typeof o.onInputClick) {
                o.onInputClick(leaf,parent,node,that);
            } else if ("function" === typeof window[o.onInputClick]) {
                window[o.onInputClick](leaf,parent,node,that);
            } else {
                var result = eval(`(function(){${o.onInputClick}})`);result.call(leaf,parent,node,that);
            }
        }),element.on("click",".leaf",function() {
            var leaf = $(this),node = $(leaf.parents(".node")[0]),parent = leaf.parent("li");if (element.find(".leaf").parent("li")
                .removeClass("active"),parent.addClass("active"),"function" === typeof o.onClick) {
                o.onClick(leaf,parent,node,that);
            } else if ("function" === typeof window[o.onClick]) {
                window[o.onClick](leaf,parent,node,that);
            } else {
                var result = eval(`(function(){${o.onClick}})`);result.call(leaf,parent,node,that);
            }
        }),o.doubleClick && element.on("dblclick",".leaf",function(e) {
            var leaf = $(this),parent = leaf.parent("li"),node = $(leaf.parents(".node")[0]),result;return parent.hasClass("keep-open") ? !1 : (parent.toggleClass("collapsed"),parent.hasClass("collapsed") ? (parent.children("ul").fadeOut("fast"),"function" === typeof o.onCollapse ? o.onCollapse(parent,leaf,node,that) : "function" === typeof window[o.onCollapse] ? window[o.onCollapse](parent,leaf,node,that) : (result = eval(`(function(){${o.onCollapse}})`),result.call(parent,leaf,node,that))) : (parent.children("ul").fadeIn("fast"),"function" === typeof o.onExpand ? o.onExpand(parent,leaf,node,that) : "function" === typeof window[o.onExpand] ? window[o.onExpand](parent,leaf,node,that) : (result = eval(`(function(){${o.onExpand}})`),result.call(parent,leaf,node,that))),e.stopPropagation(),void e.preventDefault());
        }),element.on("click",".node-toggle",function(e) {
            var leaf = $(this).siblings(".leaf"),parent = $(this).parent("li"),node = $(leaf.parents(".node")[0]),result;return parent.hasClass("keep-open") ? !1 : (parent.toggleClass("collapsed"),parent.hasClass("collapsed") ? (parent.children("ul").fadeOut("fast"),"function" === typeof o.onCollapse ? o.onCollapse(parent,leaf,node,that) : "function" === typeof window[o.onCollapse] ? window[o.onCollapse](parent,leaf,node,that) : (result = eval(`(function(){${o.onCollapse}})`),result.call(parent,leaf,node,that))) : (parent.children("ul").fadeIn("fast"),"function" === typeof o.onExpand ? o.onExpand(parent,leaf,node,that) : "function" === typeof window[o.onExpand] ? window[o.onExpand](parent,leaf,node,that) : (result = eval(`(function(){${o.onExpand}})`),result.call(parent,leaf,node,that))),e.stopPropagation(),void e.preventDefault());
        });
    },addLeaf(a,b,c) {
        var d,e,f,g = this.element;if (a && ("LI" === a[0].tagName && a.addClass("node"),0 === a.children(".node-toggle").length && $("<span/>").addClass("node-toggle")
            .appendTo(a)),f = a ? $(a).children("ul") : g.children("ul"),0 === f.length && (f = $("<ul/>").appendTo(a ? a : g)),e = $("<li/>").appendTo(f),d = void 0 !== c && void 0 !== c.tagName ? $(`<${c.tagName}/>`).addClass("leaf")
                .appendTo(e) : $("<span/>").addClass("leaf")
                .appendTo(e),d.html(b),void 0 !== c && ($.each(c,function(a,b) {
                e.attr(`data-${a}`,b);
            }),void 0 !== c.mode)) {
            switch (c.mode) {
            case "checkbox":this._createCheckbox(d,e);break;case "radio":this._createRadio(d,e);
            }
        } return e;
    },_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    }}),$.widget("metro.validator",{version:"1.0.0",options:{showErrorState:!0,showErrorHint:!0,showRequiredState:!0,showSuccessState:!0,hintSize:0,hintBackground:"#FFFCC0",hintColor:"#000000",hideError:2e3,hideHint:5e3,hintEasing:"easeInQuad",hintEasingTime:400,hintMode:"hint",hintPosition:"right",focusInput:!0,onBeforeSubmit() {
        return !0;
    },onErrorInput() {},onSubmit() {
        return !0;
    }},_scroll:0,funcs:{required(a) {
        return "" !== a.trim();
    },minlength(a,b) {
        return void 0 == b || isNaN(b) || 0 >= b ? !1 : a.trim().length >= b;
    },maxlength(a,b) {
        return void 0 == b || isNaN(b) || 0 >= b ? !1 : a.trim().length <= b;
    },min(a,b) {
        return void 0 == b || isNaN(b) ? !1 : this.number(a) ? isNaN(a) ? !1 : Number(a) >= Number(b) : !1;
    },max(a,b) {
        return void 0 == b || isNaN(b) ? !1 : this.number(a) ? isNaN(a) ? !1 : Number(a) <= Number(b) : !1;
    },email(a) {
        return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(a);
    },url(a) {
        return /^(?:[a-z]+:)?\/\//i.test(a);
    },date(a) {
        return !("Invalid Date" === new Date(a) || isNaN(new Date(a)));
    },number(a) {
        return a - 0 == a && (`${a}`).trim().length > 0;
    },digits(a) {
        return /^\d+$/.test(a);
    },hexcolor(a) {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
    },pattern(a,b) {
        if (void 0 == b) {
            return !1;
        } var c = new RegExp(b);return c.test(a);
    }},_create() {
        var a = this.element,b = this.options;$.each(a.data(),function(a,c) {
            if (a in b) {
                try {
                    b[a] = $.parseJSON(c);
                } catch (d) {
                    b[a] = c;
                }
            }
        }),"line" !== b.hintMode && (b.hintMode = "hint2"),this._scroll = $(window).scrollTop(),this._createValidator(),a.data("validator",this);
    },_createValidator() {
        var a = this,b = this.element,c = this.options,d = b.find("[data-validate-func]");b.attr("novalidate","novalidate"),c.showRequiredState && $.each(d,function() {
            var a = $(this);a.parent().hasClass("input-control") ? a.parent().addClass("required") : a.addClass("required");
        }),d.on("focus",function() {}),$(window).scroll(function() {
            var a = $(this).scrollTop(),b = isNaN(a - this._scroll) ? 0 : a - this._scroll;$(".validator-hint.hint2:not(.line)").css({top:`-=${b}`}),this._scroll = a;
        }),b[0].onsubmit ? (this._onsubmit = b[0].onsubmit,b[0].onsubmit = null) : this._onsubmit = null,b[0].onsubmit = function() {
            return a._submit();
        };
    },_submit() {
        var that = this,element = this.element,o = this.options,inputs = element.find("[data-validate-func]"),submit = element.find(":submit").attr("disabled","disabled")
                .addClass("disabled"),result = 0;if ($(".validator-hint").hide(),inputs.removeClass("error success"),$.each(inputs,function(a,b) {
            var c = $(b);c.parent().hasClass("input-control") && c.parent().removeClass("error success");
        }),$.each(inputs,function(i,v) {
                var this_result = !0,input = $(v),func = [],arg = [];func = void 0 != input.data("validateFunc") ? String(input.data("validateFunc")).split(",") : [],$.each(func,function(a) {
                    func[a] = String(func[a]).trim();
                }),-1 !== func.indexOf("pattern") ? arg.push(String(input.data("validateArg"))) : arg = void 0 != input.data("validateArg") ? String(input.data("validateArg")).split(",") : [],$.each(func,function(a,b) {
                    if (this_result) {
                        var c = void 0 != arg[a] ? arg[a] : !1;this_result = that.funcs[b.trim()](input.val(),c);
                    }
                }),this_result || ("function" === typeof o.onErrorInput ? o.onErrorInput(input) : "function" === typeof window[o.onErrorInput] ? window[o.onErrorInput](input) : (result = eval(`(function(){${o.onErrorInput}})`),result.call(input))),!this_result && o.showErrorState && that._showError(input),!this_result && o.showErrorHint && setTimeout(function() {
                    that._showErrorHint(input);
                },100 * i),this_result && o.showSuccessState && that._showSuccess(input),!this_result && 0 == i && o.focusInput && input.focus(),result += this_result ? 0 : 1;
            }),"function" === typeof o.onBeforeSubmit) {
            result += o.onBeforeSubmit(element,result) ? 0 : 1;
        } else if ("function" === typeof window[o.onBeforeSubmit]) {
            result += window[o.onBeforeSubmit](element,result) ? 1 : 0;
        } else {
            var f0 = eval(`(function(){${o.onBeforeSubmit}})`);result += f0.call(element,result) ? 1 : 0;
        } if (0 !== result) {
            return submit.removeAttr("disabled").removeClass("disabled"),!1;
        } if ("function" === typeof o.onSubmit) {
            result = o.onSubmit(element[0]);
        } else if ("function" === typeof window[o.onSubmit]) {
            result = window[o.onSubmit](element[0]);
        } else {
            var f = eval(`(function(){${o.onSubmit}})`);result = f.call(element[0]);
        } return submit.removeAttr("disabled").removeClass("disabled"),result;
    },_showSuccess(a) {
        a.parent().hasClass("input-control") ? a.parent().addClass("success") : a.addClass("success");
    },_showError(a) {
        var b = this.options;a.parent().hasClass("input-control") ? a.parent().addClass("error") : a.addClass("error"),b.hideError && b.hideError > 0 && setTimeout(function() {
            a.parent().removeClass("error");
        },b.hideError);
    },_showErrorHint(a) {
        var b,c,d,e = this.options,f = a.data("validateHint"),g = a.data("validateHintPosition") || e.hintPosition,h = a.data("validateHintMode") || e.hintMode,i = a.data("validateHintBackground") || e.hintBackground,j = a.data("validateHintColor") || e.hintColor;return void 0 === f ? !1 : (b = $("<div/>").addClass(`${h} validator-hint`),b.html(void 0 !== f ? this._format(f,a.val()) : ""),b.css({"min-width":e.hintSize}),metroUtils.isColor(i) ? b.css("background-color",i) : b.addClass(i),metroUtils.isColor(j) ? b.css("color",j) : b.addClass(j),void("line" === h ? (b.addClass("hint2").addClass("line"),b.css({position:"relative",width:a.parent().hasClass("input-control") ? a.parent().width() : a.width(),"z-index":100}),b.appendTo(a.parent()),b.fadeIn(e.hintEasingTime,function() {
            setTimeout(function() {
                b.hide().remove();
            },e.hideHint);
        })) : (b.appendTo("body"),"right" === g ? (d = a.offset().left + a.outerWidth() + 15 - $(window).scrollLeft(),c = a.offset().top + a.outerHeight() / 2 - b.outerHeight() / 2 - $(window).scrollTop() - 10,b.addClass(g),b.css({top:c,left:$(window).width() + 100}),b.show().animate({left:d},e.hintEasingTime,e.hintEasing,function() {
            setTimeout(function() {
                b.hide().remove();
            },e.hideHint);
        })) : "left" === g ? (d = a.offset().left - b.outerWidth() - 10 - $(window).scrollLeft(),c = a.offset().top + a.outerHeight() / 2 - b.outerHeight() / 2 - $(window).scrollTop() - 10,b.addClass(g),b.css({top:c,left:-a.offset().left - b.outerWidth() - 10}),b.show().animate({left:d},e.hintEasingTime,e.hintEasing,function() {
            setTimeout(function() {
                b.hide().remove();
            },e.hideHint);
        })) : "top" === g ? (d = a.offset().left + a.outerWidth() / 2 - b.outerWidth() / 2 - $(window).scrollLeft(),c = a.offset().top - $(window).scrollTop() - b.outerHeight() - 20,b.addClass(g),b.css({top:-b.outerHeight(),left:d}).show()
            .animate({top:c},e.hintEasingTime,e.hintEasing,function() {
                setTimeout(function() {
                    b.hide().remove();
                },e.hideHint);
            })) : (d = a.offset().left + a.outerWidth() / 2 - b.outerWidth() / 2 - $(window).scrollLeft(),c = a.offset().top - $(window).scrollTop() + a.outerHeight(),b.addClass(g),b.css({top:$(window).height(),left:d}).show()
            .animate({top:c},e.hintEasingTime,e.hintEasing,function() {
                setTimeout(function() {
                    b.hide().remove();
                },e.hideHint);
            })))));
    },_format(a,b) {
        return 1 === arguments.length ? function() {
            var b = $.makeArray(arguments);return b.unshift(a),$.validator.format.apply(this,b);
        } : (arguments.length > 2 && b.constructor !== Array && (b = $.makeArray(arguments).slice(1)),b.constructor !== Array && (b = [b]),$.each(b,function(b,c) {
            a = a.replace(new RegExp(`\\{${b}\\}`,"g"),function() {
                return c;
            });
        }),a);
    },_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    }}),$.widget("metro.video",{version:"3.0.14",options:{width:"100%",videoSize:"hd",controls:!0,controlsPosition:"bottom",controlsModel:"full",loopButton:"<span class='mif-loop'></span>",stopButton:"<span class='mif-stop'></span>",playButton:"<span class='mif-play'></span>",pauseButton:"<span class='mif-pause'></span>",muteButton:"<span class='mif-volume-mute2'></span>",volumeLowButton:"<span class='mif-volume-low'></span>",volumeMediumButton:"<span class='mif-volume-medium'></span>",volumeHighButton:"<span class='mif-volume-high'></span>",screenMoreButton:"<span class='mif-enlarge'></span>",screenLessButton:"<span class='mif-shrink'></span>",fullScreenMode:"window",poster:!1,src:!1,loop:!1,preload:!1,autoplay:!1,muted:!1,volume:.5,logo:!1,controlsHide:1e3},_create() {
        {var a = this.element;this.options;} this._setOptionsFromDOM(),this._createPlayer(),this._addControls(),this._addEvents(),a.data("video",this);
    },_createPlayer() {
        var a,b = this.element,c = this.options,d = b.width(),e = b.find("video");if ("HD" == c.videoSize && "hd" == c.videoSize ? a = 9 * d / 16 : "SD" == c.videoSize && "sd" == c.videoSize && (a = 3 * d / 4),b.addClass("video-player"),b.css({height:a}),0 == e.length && (e = $("<video/>").appendTo(b)),$.each(["muted","autoplay","controls","height","width","loop","poster","preload"],function() {
            e.removeAttr(this);
        }),c.poster && e.attr("poster",c.poster),c.src) {
            if (c.src.indexOf("youtube") >= 0) {
                var f = /v=[(\w)]+/gi;f.exec(c.src)[0].substring(2);
            } else {
                e.attr("src",c.src);
            }
        }c.loop && e.attr("loop","loop"),c.preload && e.attr("preload","auto"),c.autoplay && e.attr("autoplay","autoplay"),e[0].volume = c.volume,b.data("fullScreen",!1),b.data("muted",!1),b.data("duration",0),b.data("timeInterval",void 0),b.data("played",!1),b.data("volume",e[0].volume);
    },_addEvents() {
        var a = this,b = this.element,c = (b[0],this.options),d = b.find(".controls"),e = b.find(".video-preloader"),f = (d.find(".play"),d.find(".stop"),d.find(".volume"),d.find(".full"),d.find(".volume-slider"),d.find(".stream-slider"),d.find(".info-box")),g = b.find("video"),h = g[0];g.on("loadedmetadata",function() {
            b.data("duration",h.duration.toFixed(0)),f.html(`00:00 / ${metroUtils.secondsToFormattedString(b.data("duration"))}`);
        }),g.on("canplay",function() {
            d.fadeIn(),e.hide();var b = h.buffered.length ? Math.round(Math.floor(h.buffered.end(0)) / Math.floor(h.duration) * 100) : 0;a._setBufferSize(b);
        }),g.on("progress",function() {
            var b = h.buffered.length ? Math.round(Math.floor(h.buffered.end(0)) / Math.floor(h.duration) * 100) : 0;a._setBufferSize(b);
        }),g.on("timeupdate",function() {
            a._setInfoData(),a._setStreamSliderPosition();
        }),g.on("waiting",function() {
            e.show();
        }),g.on("loadeddata",function() {
            e.hide();
        }),g.on("ended",function() {
            a._stopVideo();
        }),b.on("play",function() {
            isTouchDevice() && setTimeout(function() {
                d.fadeOut();
            },c.controlsHide);
        }),b.on("pause",function() {}),b.on("stop",function() {
            d.show();
        }),b.on("mouseenter",function() {
            setTimeout(function() {
                d.fadeIn();
            },c.controlsHide);
        }),b.on("mouseleave",function() {
            h.currentTime > 0 && setTimeout(function() {
                d.fadeOut();
            },c.controlsHide);
        }),isTouchDevice() && b.on("touchstart",function() {
            h.currentTime > 0 && setTimeout(function() {
                "none" == d.css("display") ? d.fadeIn() : d.fadeOut();
            },c.controlsHide);
        });
    },_setInfoData() {
        var a = this.element,b = (a[0],this.options,a.find("video")),c = b[0],d = a.find(".controls .info-box"),e = Math.round(c.currentTime);d.html(`${metroUtils.secondsToFormattedString(e)} / ${metroUtils.secondsToFormattedString(a.data("duration"))}`);
    },_setStreamSliderPosition() {
        var a = this.element,b = (a[0],this.options,a.find("video")),c = b[0],d = a.find(".stream-slider").data("slider");d.value(Math.round(100 * c.currentTime / a.data("duration")));
    },_setBufferSize(a) {
        var b = this.element,c = (b[0],this.options,b.find("video")),d = (c[0],b.find(".stream-slider").data("slider"));d.buffer(Math.round(a));
    },_stop() {
        var a = this.element,b = (a[0],this.options),c = a.find("video"),d = c[0],e = a.find(".controls .stop"),f = a.find(".controls .play");d.pause(),d.currentTime = 0,f.html(b.playButton),e.attr("disabled","disabled"),a.data("played",!1),a.find(".stream-slider").data("slider")
            .value(0),a.trigger("stop");
    },_play() {
        var a = this.element,b = (a[0],this.options),c = a.find("video"),d = c[0],e = a.find(".controls .play"),f = a.find(".controls .stop");d.paused ? (e.html(b.pauseButton),d.play(),f.removeAttr("disabled"),a.data("played",!0),a.trigger("play")) : (e.html(b.playButton),d.pause(),a.data("played",!1),a.trigger("pause"));
    },_addControls() {
        var a,b,c,d,e,f,g,h,i,j,k,l,m,n = this,o = this.element,p = o[0],q = this.options,r = o.find("video"),s = r[0];q.logo && (b = $("<img/>").addClass("video-logo")
            .appendTo(o),b.attr("src",q.logo)),a = $("<div/>").addClass("video-preloader")
            .attr("data-role","preloader")
            .attr("data-type","cycle")
            .attr("data-style","color")
            .appendTo(o),c = $("<div/>").addClass("controls")
            .appendTo(o),c.addClass(`position-${q.controlsPosition}`),m = $("<div/>").addClass("stream-slider-wrapper")
            .appendTo(c),j = $("<div/>").addClass("slider stream-slider")
            .appendTo(m),j.slider({showHint:!0,animate:!1,markerColor:"bg-red",completeColor:"bg-cyan",onStartChange() {
            s.pause();
        },onChanged(a) {
            s.seekable.length > 0 && (s.currentTime = (o.data("duration") * a / 100).toFixed(0)),o.data("played") && s.currentTime >= 0 && s.play();
        }}),j.data("slider").value(0),q.loopButton !== !1 && (d = $("<button/>").addClass("square-button small-button1 control-button loop no-phone")
            .html(q.loopButton)
            .appendTo(c),d.on("click",function() {
                d.toggleClass("active"),d.hasClass("active") ? r.attr("loop","loop") : r.removeAttr("loop");
            })),q.playButton !== !1 && (e = $("<button/>").addClass("square-button small-button1 control-button play")
            .html(q.playButton)
            .appendTo(c),e.on("click",function() {
                n._play();
            })),q.stopButton !== !1 && (f = $("<button/>").addClass("square-button small-button1 control-button stop no-phone")
            .html(q.stopButton)
            .appendTo(c)
            .attr("disabled","disabled"),f.on("click",function() {
                n._stop();
            })),k = $("<div/>").addClass("info-box no-small-phone")
            .appendTo(c),k.html("00:00 / 00:00"),q.screenMoreButton !== !1 && (h = $("<button/>").addClass("square-button small-button1 control-button full")
            .html(q.screenMoreButton)
            .appendTo(c),h.on("click",function() {
                o.data("fullScreen",!o.data("fullScreen")),h.html(o.data("fullScreen") ? q.screenLessButton : q.screenMoreButton),"window" === q.fullScreenMode ? o.toggleClass("full-screen") : o.data("fullScreen") ? p.requestFullscreen ? p.requestFullscreen() : p.msRequestFullscreen ? p.msRequestFullscreen() : p.mozRequestFullScreen ? p.mozRequestFullScreen() : p.webkitRequestFullscreen && p.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen(),o.data("fullScreen") ? $(document).on("keyup.metro_video_player",function(a) {
                    27 == a.keyCode && (h.html(q.screenMoreButton),o.data("fullScreen",!1),o.hasClass("full-screen") && o.removeClass("full-screen"));
                }) : $(document).off("keyup.metro_video_player");
            })),l = $("<div/>").addClass("control-slider volume-slider-wrapper place-right")
            .appendTo(c),i = $("<div/>").addClass("slider volume-slider")
            .appendTo(l),i.slider({showHint:!0,animate:!1,markerColor:"bg-red",completeColor:"bg-green",onChange(a) {
            s.volume = a / 100,n._setupVolumeButton();
        }}),i.data("slider").value(100 * s.volume),g = $("<button/>").addClass("square-button small-button1 control-button volume place-right")
            .html(q.volumeLowButton)
            .appendTo(c),g.on("click",function() {
            var a = o.find(".volume-slider").data("slider");o.data("muted",!o.data("muted")),o.data("muted") ? (o.data("volume",s.volume),g.html(q.muteButton),a.value(0)) : (s.volume = o.data("volume"),a.value(100 * o.data("volume")),n._setupVolumeButton()),s.muted = o.data("muted");
        }),this._setupVolumeButton(),c.hide();
    },_setupVolumeButton() {
        var a = this.element,b = this.options,c = a.find("video"),d = c[0],e = a.find(".controls"),f = e.find(".volume"),g = d.volume;f.html(g > 0 && .3 > g ? b.volumeLowButton : g >= .3 && .6 > g ? b.volumeMediumButton : g >= .6 && 1 >= g ? b.volumeHighButton : b.muteButton);
    },_setOptionsFromDOM() {
        var a = this.element,b = this.options;$.each(a.data(),function(a,c) {
            if (a in b) {
                try {
                    b[a] = $.parseJSON(c);
                } catch (d) {
                    b[a] = c;
                }
            }
        });
    },_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    },play(a,b) {
        var c,d = this.element,e = (this.options,d.find("video")),f = e[0];this._stop(),e.find("source").remove(),e.removeAttr("src"),c = $("<source>").attr("src",a),void 0 != b && c.attr("type",b),f.load(),c.appendTo(e),this._play();
    },stop() {
        this._stop();
    },pause() {
        var a = this.element,b = this.options,c = a.find("video"),d = c[0],e = a.find(".play");e.html(b.playButton),d.pause(),a.data("played",!1),a.trigger("pause");
    },resume() {
        var a = this.element,b = this.options,c = a.find("video"),d = c[0],e = a.find(".play"),f = a.find(".stop");e.html(b.pauseButton),d.play(),f.removeAttr("disabled"),a.data("played",!0),a.trigger("play");
    }}),$.widget("metro.window",{version:"3.0.0",options:{parent:"default",captionStyle:!1,contentStyle:!1,buttons:{btnMin:!1,btnMax:!1,btnClose:!1},title:!1,content:!1,icon:!1,type:"default",size:!1,onBtnMinClick(a) {
        a.preventDefault();
    },onBtnMaxClick(a) {
        a.preventDefault();
    },onBtnCloseClick(a) {
        a.preventDefault();
    },onShow(a) {
        a.preventDefault();
    },onHide(a) {
        a.preventDefault();
    }},_create() {
        var a = this.element,b = this.options;$.each(a.data(),function(a,c) {
            if (a in b) {
                try {
                    b[a] = $.parseJSON(c);
                } catch (d) {
                    b[a] = c;
                }
            }
        }),this._createWindow(),a.data("window",this);
    },_createWindow() {
        var a,b,c = this.element,d = this.options,e = c;e.addClass("window"),a = $("<div/>").addClass("window-caption"),b = $("<div/>").addClass("window-content"),(d.icon || d.title) && a.appendTo(e),b.appendTo(e),"object" === typeof d.size && $.each(d.size,function(a,c) {
            b.css(a,c);
        }),d.captionStyle && "object" === typeof d.captionStyle && $.each(d.captionStyle,function(b,c) {
            metroUtils.isColor(c) ? a.css(b,`${c} !important`) : a.addClass(c);
        }),d.contentStyle && "object" === typeof d.contentStyle && $.each(d.contentStyle,function(a,c) {
            metroUtils.isColor(c) ? b.css(a,`${c} !important`) : b.addClass(c);
        }),e.appendTo("default" !== d.parent ? d.parent : c.parent()),this.icon(),this.title(),this.buttons(),this.content();
    },icon() {
        var a = this.options,b = this.element.children(".window-caption"),c = b.find(".window-caption-icon");a.icon && (0 === c.length ? $("<span/>").addClass("window-caption-icon")
            .html(a.icon)
            .appendTo(b) : c.html(a.icon));
    },title() {
        var a = this.options,b = this.element.children(".window-caption"),c = b.find(".window-caption-title");a.title && (0 === c.length ? $("<span/>").addClass("window-caption-title")
            .html(a.title)
            .appendTo(b) : c.html(a.title));
    },buttons() {
        var a,b,c,d = this.options,f = this.element.children(".window-caption");if (0 !== f.length && d.buttons) {
            var g = d.buttons.btnMin,h = d.buttons.btnMax,i = d.buttons.btnClose;if (g && g !== !1) {
                if (a = $("<span/>").addClass("btn-min")
                    .appendTo(f),"object" === typeof g && a.css(g),"string" === typeof d.onBtnMinClick) {
                    var j = window[d.onBtnMinClick];a.on("click",j);
                } else {
                    a.on("click",d.onBtnMinClick(e));
                }
            } if (h && h !== !1) {
                if (b = $("<span/>").addClass("btn-max")
                    .appendTo(f),"object" === typeof h && b.css(h),"string" === typeof d.onBtnMaxClick) {
                    var k = window[d.onBtnMaxClick];b.on("click",k);
                } else {
                    b.on("click",d.onBtnMaxClick(e));
                }
            } if (i && i !== !1) {
                if (c = $("<span/>").addClass("btn-close")
                    .appendTo(f),"object" === typeof i && c.css(i),"string" === typeof d.onBtnCloseClick) {
                    var l = window[d.onBtnCloseClick];c.on("click",l);
                } else {
                    c.on("click",d.onBtnCloseClick(e));
                }
            }
        }
    },content() {
        var a = this.options,b = a.content,c = this.element.children(".window-content");if (b) {
            if (metroUtils.isUrl(b)) {
                if (b.indexOf("youtube") > -1) {
                    var d = $("<iframe>"),e = $("<div/>").addClass("video-container")
                        .appendTo(c);d.attr("src",b).attr("frameborder","0"),d.appendTo(e);
                }
            } else {
                c.html(b);
            }
        }
    },_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    }}),$.widget("metro.wizard",{version:"3.0.0",options:{stepper:!0,stepperType:"default",stepperClickable:!1,startPage:"default",finishStep:"default",locale:window.METRO_CURRENT_LOCALE,buttons:{cancel:!0,help:!0,prior:!0,next:!0,finish:!0},onCancel() {},onHelp() {},onPrior() {
        return !0;
    },onNext() {
        return !0;
    },onFinish() {},onPage() {},onStepClick() {}},_stepper:void 0,_currentStep:0,_steps:void 0,_create() {
        var that = this,element = this.element,o = this.options,steps = element.find(".step");$.each(element.data(),function(a,b) {
            if (a in o) {
                try {
                    o[a] = $.parseJSON(b);
                } catch (c) {
                    o[a] = b;
                }
            }
        }),this._steps = steps,o.stepper && (this._stepper = this._createStepper(steps.length).insertBefore(element.find(".steps"))
            .stepper({clickable:o.stepperClickable})
            .on("stepclick",function(e,s) {
                if (that.stepTo(s),"function" === typeof o.onStepClick) {
                    o.onStepClick(s);
                } else if ("function" === typeof window[o.onStepClick]) {
                    window[o.onStepClick](s);
                } else {
                    var result = eval(`(function(){${o.onStepClick}})`);result.call(s);
                }
            })),void 0 !== element.data("locale") && (o.locale = element.data("locale")),this._createEvents();var sp = "default" !== o.startPage && parseInt(o.startPage) > 1 ? o.startPage : 1;this.stepTo(sp),"string" === typeof o.onPage ? window[o.onPage](this._currentStep + 1,element) : o.onPage(this._currentStep + 1,element),element.data("wizard",this);
    },_createStepper(a) {
        var b,c = this.options;return b = $("<div/>").addClass("stepper")
            .attr("data-role","stepper")
            .attr("data-steps",a),"default" !== c.stepperType && b.addClass(c.stepperType),b;
    },_createEvents() {
        var that = this,element = this.element,o = this.options;if (o.buttons) {
            var actions = $("<div/>").addClass("actions")
                    .appendTo(element),group_left = $("<div/>").addClass("group-left")
                    .appendTo(actions),group_right = $("<div/>").addClass("group-right")
                    .appendTo(actions),cancel_button,help_button,prior_button,next_button,finish_button;o.buttons.cancel && (cancel_button = $("<button type='button'/>").addClass("btn-cancel")
                .html(window.METRO_LOCALES[o.locale].buttons[2]),"boolean" === typeof o.buttons.cancel ? cancel_button.appendTo(group_left) : (o.buttons.cancel.title && cancel_button.html(o.buttons.cancel.title),o.buttons.cancel.cls && cancel_button.addClass(o.buttons.cancel.cls),cancel_button.appendTo(o.buttons.cancel.group && "left" !== o.buttons.cancel.group ? group_right : group_left)),cancel_button.on("click",function() {
                    if ("function" === typeof o.onCancel) {
                        o.onCancel(that._currentStep + 1,element);
                    } else if ("function" === typeof window[o.onCancel]) {
                        window[o.onCancel](that._currentStep + 1,element);
                    } else {
                        var result = eval(`(function(){${o.onCancel}})`);result.call(that._currentStep + 1,element);
                    }
                })),o.buttons.help && (help_button = $("<button type='button'/>").addClass("btn-help")
                .html(window.METRO_LOCALES[o.locale].buttons[3]),"boolean" === typeof o.buttons.help ? help_button.appendTo(group_right) : (o.buttons.help.title && help_button.html(o.buttons.help.title),o.buttons.help.cls && help_button.addClass(o.buttons.help.cls),help_button.appendTo(o.buttons.help.group && "left" !== o.buttons.help.group ? group_right : group_left)),help_button.on("click",function() {
                    if ("function" === typeof o.onHelp) {
                        o.onHelp(that._currentStep + 1,element);
                    } else if ("function" === typeof window[o.onHelp]) {
                        window[o.onHelp](that._currentStep + 1,element);
                    } else {
                        var result = eval(`(function(){${o.onHelp}})`);result.call(that._currentStep + 1,element);
                    }
                })),o.buttons.prior && (prior_button = $("<button type='button'/>").addClass("btn-prior")
                .html(window.METRO_LOCALES[o.locale].buttons[4]),"boolean" === typeof o.buttons.prior ? prior_button.appendTo(group_right) : (o.buttons.prior.title && prior_button.html(o.buttons.prior.title),o.buttons.prior.cls && prior_button.addClass(o.buttons.prior.cls),prior_button.appendTo(o.buttons.prior.group && "left" !== o.buttons.prior.group ? group_right : group_left)),prior_button.on("click",function() {
                    if ("function" === typeof o.onPrior) {
                        o.onPrior(that._currentStep + 1,element) && that.prior();
                    } else if ("function" === typeof window[o.onPrior]) {
                        window[o.onPrior](that._currentStep + 1,element) && that.prior();
                    } else {
                        var result = eval(`(function(){${o.onPrior}})`);result.call(that._currentStep + 1,element) && that.prior();
                    }
                })),o.buttons.next && (next_button = $("<button type='button'/>").addClass("btn-next")
                .html(window.METRO_LOCALES[o.locale].buttons[5]),"boolean" === typeof o.buttons.next ? next_button.appendTo(group_right) : (o.buttons.next.title && next_button.html(o.buttons.next.title),o.buttons.next.cls && next_button.addClass(o.buttons.next.cls),next_button.appendTo(o.buttons.next.group && "left" !== o.buttons.next.group ? group_right : group_left)),next_button.on("click",function() {
                    if ("function" === typeof o.onNext) {
                        o.onNext(that._currentStep + 1,element) && that.next();
                    } else if ("function" === typeof window[o.onNext]) {
                        window[o.onNext](that._currentStep + 1,element) && that.next();
                    } else {
                        var result = eval(`(function(){${o.onNext}})`);result.call(that._currentStep + 1,element) && that.next();
                    }
                })),o.buttons.finish && (finish_button = $("<button type='button'/>").addClass("btn-finish")
                .html(window.METRO_LOCALES[o.locale].buttons[6]),"boolean" === typeof o.buttons.finish ? finish_button.appendTo(group_right) : (o.buttons.finish.title && finish_button.html(o.buttons.finish.title),o.buttons.finish.cls && finish_button.addClass(o.buttons.finish.cls),finish_button.appendTo(o.buttons.finish.group && "left" !== o.buttons.finish.group ? group_right : group_left)),finish_button.on("click",function() {
                    if ("function" === typeof o.onFinish) {
                        o.onFinish(that._currentStep + 1,element);
                    } else if ("function" === typeof window[o.onFinish]) {
                        window[o.onFinish](that._currentStep + 1,element);
                    } else {
                        var result = eval(`(function(){${o.onFinish}})`);result.call(that._currentStep + 1,element);
                    }
                }));
        }
    },next() {
        var element = this.element,that = this,o = this.options,new_step = this._currentStep + 1;if (new_step === this._steps.length) {
            return !1;
        } if (this._currentStep = new_step,this._steps.hide(),$(this._steps[new_step]).show(),"function" === typeof o.onPage) {
            o.onPage(that._currentStep + 1,element);
        } else if ("function" === typeof window[o.onPage]) {
            window[o.onPage](that._currentStep + 1,element);
        } else {
            var result = eval(`(function(){${o.onPage}})`);result.call(that._currentStep + 1,element);
        } void 0 !== this._stepper && this._stepper.stepper("stepTo",this._currentStep + 1);var finish = "default" === o.finishStep ? this._steps.length - 1 : o.finishStep;return new_step === finish ? this.element.find(".btn-finish").attr("disabled",!1) : this.element.find(".btn-finish").attr("disabled",!0),new_step === this._steps.length - 1 ? this.element.find(".btn-next").attr("disabled",!0) : this.element.find(".btn-next").attr("disabled",!1),new_step > 0 && this.element.find(".btn-prior").attr("disabled",!1),!0;
    },prior() {
        var element = this.element,that = this,new_step = this._currentStep - 1,o = this.options;if (0 > new_step) {
            return !1;
        } if (this._currentStep = new_step,this._steps.hide(),$(this._steps[new_step]).show(),"function" === typeof o.onPage) {
            o.onPage(that._currentStep + 1,element);
        } else if ("function" === typeof window[o.onPage]) {
            window[o.onPage](that._currentStep + 1,element);
        } else {
            var result = eval(`(function(){${o.onPage}})`);result.call(that._currentStep + 1,element);
        } void 0 !== this._stepper && this._stepper.stepper("stepTo",this._currentStep + 1);var finish = "default" === o.finishStep ? this._steps.length - 1 : o.finishStep;return new_step === finish ? this.element.find(".btn-finish").attr("disabled",!1) : this.element.find(".btn-finish").attr("disabled",!0),0 === new_step ? this.element.find(".btn-prior").attr("disabled",!0) : this.element.find(".btn-prior").attr("disabled",!1),finish > new_step && this.element.find(".btn-next").attr("disabled",!1),!0;
    },stepTo(step) {
        var element = this.element,that = this,new_step = step - 1,o = this.options;if (0 > new_step) {
            return !1;
        } if (this._currentStep = new_step,this._steps.hide(),$(this._steps[new_step]).show(),"function" === typeof o.onPage) {
            o.onPage(that._currentStep + 1,element);
        } else if ("function" === typeof window[o.onPage]) {
            window[o.onPage](that._currentStep + 1,element);
        } else {
            var result = eval(`(function(){${o.onPage}})`);result.call(that._currentStep + 1,element);
        } void 0 !== this._stepper && this._stepper.stepper("stepTo",step);var finish = "default" === o.finishStep ? this._steps.length - 1 : o.finishStep;return new_step === finish ? this.element.find(".btn-finish").attr("disabled",!1) : this.element.find(".btn-finish").attr("disabled",!0),this.element.find(".btn-next").attr("disabled",new_step >= finish),this.element.find(".btn-prior").attr("disabled",0 >= new_step),!0;
    },stepper() {
        return this._stepper;
    },_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    }}),$.widget("metro.wizard2",{version:"3.0.0",options:{start:1,finish:"default",buttonLabels:{prev:"&lt;",next:"&gt;",finish:"OK",help:"?"},onPrior() {
        return !0;
    },onNext() {
        return !0;
    },onFinish() {},onHelp() {},onPage() {}},_step:1,_steps:void 0,_create() {
        var a = this,b = this.element,c = this.options;$.each(b.data(),function(a,b) {
            if (a in c) {
                try {
                    c[a] = $.parseJSON(b);
                } catch (d) {
                    c[a] = b;
                }
            }
        }),this._step = c.start,this._steps = b.children(".step"),this._height = 0,this._width = 0,"default" === c.finish && (c.finish = this._steps.length),$.each(this._steps,function(b,c) {
            $(c).outerHeight() > a._height && (a._height = $(c).outerHeight()),$(c).hasClass("active") && (a._step = b + 1);
        }),this._width = b.innerWidth() - (24 * (this._steps.length - 1) + this._steps.length),b.children(".step").css({height:this._height + 48}),$(window).resize(function() {
            a._width = b.innerWidth() - (24 * (a._steps.length - 1) + a._steps.length),a.step(a._step);
        }),this._createActionBar(),this.step(c.start),this._placeActionBar(),b.data("wizard2",this);
    },_createActionBar() {
        var that = this,element = this.element,o = this.options,bar = $("<div/>").addClass("action-bar")
                .appendTo(element),btn_prev,btn_next,btn_help,btn_finish;btn_help = $("<button/>").html(o.buttonLabels.help)
            .addClass("button cycle-button medium-button wiz-btn-help place-left")
            .appendTo(bar),btn_finish = $("<button/>").html(o.buttonLabels.finish)
            .addClass("button cycle-button medium-button wiz-btn-finish place-right")
            .appendTo(bar),btn_next = $("<button/>").html(o.buttonLabels.next)
            .addClass("button cycle-button medium-button wiz-btn-next place-right")
            .appendTo(bar),btn_prev = $("<button/>").html(o.buttonLabels.prev)
            .addClass("button cycle-button medium-button wiz-btn-prev place-right")
            .appendTo(bar),btn_help.on("click",function() {
            if ("function" === typeof o.onHelp) {
                o.onHelp(that._step,that);
            } else if ("function" === typeof window[o.onHelp]) {
                window[o.onHelp](that._step,that);
            } else {
                var result = eval(`(function(){${o.onHelp}})`);result.call(that._step,that);
            }
        }),btn_finish.on("click",function() {
            if ("function" === typeof o.onFinish) {
                o.onFinish(that._step,that);
            } else if ("function" === typeof window[o.onFinish]) {
                window[o.onFinish](that._step,that);
            } else {
                var result = eval(`(function(){${o.onFinish}})`);result.call(that._step,that);
            }
        }),btn_prev.on("click",function() {
            if ("function" === typeof o.onPrior) {
                o.onPrior(that._step,element) && that.prior();
            } else if ("function" === typeof window[o.onPrior]) {
                window[o.onPrior](that._step,element) && that.prior();
            } else {
                var result = eval(`(function(){${o.onPrior}})`);result.call(that._step,element) && that.prior();
            }
        }),btn_next.on("click",function() {
            if ("function" === typeof o.onNext) {
                o.onNext(that._step,element) && that.next();
            } else if ("function" === typeof window[o.onNext]) {
                window[o.onNext](that._step,element) && that.next();
            } else {
                var result = eval(`(function(){${o.onNext}})`);result.call(that._step,element) && that.next();
            }
        });
    },_placeActionBar() {
        var a = this.element,b = (this.options,a.find(".action-bar")),c = a.find(".step.active"),d = c.position().left,e = c.innerWidth();b.css({left:d,width:e});
    },step(a) {
        var b = this.options;this.element.children(".step").removeClass("active prev next"),$(this.element.children(".step")[a - 1]).addClass("active")
            .css("width",this._width),this.element.children(".step.active").prevAll()
            .addClass("prev")
            .css("width",0),this.element.children(".step.active").nextAll()
            .addClass("next")
            .css("width",0),this._placeActionBar(),1 === a ? this.element.find(".wiz-btn-prev").hide() : this.element.find(".wiz-btn-prev").show(),a === this._steps.length ? this.element.find(".wiz-btn-next").hide() : this.element.find(".wiz-btn-next").show(),a !== b.finish ? this.element.find(".wiz-btn-finish").hide() : this.element.find(".wiz-btn-finish").show();
    },prior() {
        var a = this._step - 1;return 0 >= a ? !1 : (this._step = a,this.step(a),!0);
    },next() {
        var a = this._step + 1;return a > this._steps.length ? !1 : (this._step = a,this.step(a),!0);
    },_destroy() {},_setOption(a,b) {
        this._super("_setOption",a,b);
    }}),$.Metro.init();
}));
