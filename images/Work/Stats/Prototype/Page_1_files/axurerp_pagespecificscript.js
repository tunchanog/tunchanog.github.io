for(var i = 0; i < 9; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u7'] = 'top';
u8.style.cursor = 'pointer';
$axure.eventManager.click('u8', function(e) {

if (((GetWidgetText('u2')) == ('admin')) && ((GetWidgetText('u3')) == ('admin'))) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('page2.html');

}
else
if (true) {

	SetPanelVisibility('u4','','fade',500);

}
});
gv_vAlignTable['u0'] = 'top';gv_vAlignTable['u1'] = 'top';