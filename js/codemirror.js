$(document).ready(function() {
	if($('#wpTextbox1').length) {
		var editmode;
		var locationStr = window.location.href;
		if((locationStr.endsWith('.js')) || (locationStr.includes('.js&'))) {
			editmode = 'text/javascript';
		} else if((locationStr.endsWith('.css')) || (locationStr.includes('.css&'))) {
			editmode = 'text/css';
		} else if((locationStr.endsWith('.lua')) || (locationStr.includes('.lua&'))) {
			editmode = 'text/x-lua';
		} else {
			editmode = 'text/mediawiki';
		}
		var editor = CodeMirror.fromTextArea(document.getElementById("wpTextbox1"), {
			mwextFunctionSynonyms: mw.config.get( 'liquiflowCodemirrorFunctionSynonyms' ),
			mwextTags: mw.config.get( 'liquiflowCodemirrorTags' ),
			mwextDoubleUnderscore: mw.config.get( 'liquiflowCodemirrorDoubleUnderscore' ),
			mwextUrlProtocols: mw.config.get( 'liquiflowCodemirrorUrlProtocols' ),
			mwextModes: mw.config.get( 'liquiflowCodemirrorExtModes' ),
			lineNumbers: true,
			mode: editmode,
			lineWrapping: true,
			autofocus: true,
			flattenSpans: false,
			matchBrackets: true,
			extraKeys: {
				"F11": function(cm) {
					cm.setOption("fullScreen", !cm.getOption("fullScreen"));
				},
				"Esc": function(cm) {
					if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
				}
			},
			readOnly: document.getElementById("wpTextbox1").readOnly
		});
		$('#wpTextbox1').change(function() {
			editor.setCode($(this).val());
		});
	}
});