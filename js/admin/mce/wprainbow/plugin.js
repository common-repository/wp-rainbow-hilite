!function(d){tinymce.PluginManager.add("wprainbow",function(u){var t,e,r=mce_wprainbow;function a(){var n=c();t.disabled(!n),t.value(u.dom.getAttrib(n,"data-language")),e&&e.disabled(!n)}function c(){return u.dom.getParent(u.selection.getNode(),"PRE")}function g(n){var e=c();u.dom.setAttrib(e,"data-language",n),d(e).attr("data-line")||d(e).attr("data-line","-1")}u.addButton("wprainbow",{type:"listbox",text:r.l10n.code_language,tooltip:r.l10n.code_language,menu_button:!0,classes:"widget btn fixed-width",onselect:function(n){g(this.value())},values:r.languages,onPostRender:function(){for(var n in t=this,u.on("nodechange",function(n){a()}),r.languages){var e=r.languages[n].value;e&&u.contentStyles.push('pre[data-language="'+e+'"]:before { content:"'+r.languages[n].text+'" }')}}}),u.addButton("wprainbow_codecontrol",{tooltip:r.l10n.code_properties,onclick:function(){var n=c(),e=d(n).attr("data-language"),t=d(n).attr("data-line")||"1",a="-1"!=t,i="wp_rainbow_code_properties";function o(n,t){var a;return"function"==typeof n.name&&n.name()==t?n:("function"==typeof n.items&&d.each(n.items(),function(n,e){if(a=o(e,t))return!1}),a)}function l(){var t;return d.each(u.windowManager.getWindows(),function(n,e){if(e.settings.id===i)return t=e,!1}),t}u.windowManager.open({id:i,title:r.l10n.code_properties,body:[{type:"listbox",name:"language",size:40,label:r.l10n.code_language,values:r.languages,value:e},{type:"checkbox",name:"enable_line_numbering",label:r.l10n.line_numbers,value:"1",checked:a,onclick:function(n){var e=d(this.getEl()).is('[aria-checked="true"]'),t=o(l(),"language"),a=o(l(),"starting_line");e&&(-1===parseInt(a.value())&&a.value(1),""===t.value()&&t.value("generic"))}},{type:"textbox",name:"starting_line",label:r.l10n.starting_line,value:t}],onsubmit:function(n){g(n.data.language);var e=-1;n.data.enable_line_numbering&&(e=Math.abs(n.data.starting_line),isNaN(e)&&(e=1)),function(n){u.dom.setAttrib(c(),"data-line",n)}(e)}})},onPostRender:function(){e=this,u.on("nodechange",function(n){a()})}})})}(jQuery);
//# sourceMappingURL=plugin.js.map