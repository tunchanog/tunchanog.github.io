for(var i = 0; i < 18; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u16'] = 'center';document.getElementById('u12_img').tabIndex = 0;
HookHover('u12', false);

u12.style.cursor = 'pointer';
$axure.eventManager.click('u12', function(e) {

if (((GetWidgetText('u9')) == ('admin@mail.com')) && ((GetWidgetText('u11')) == ('admin'))) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Agent_Home.html');

}
else
if (true) {

	SetPanelVisibility('u14','','none',500);

}
});
gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u7'] = 'top';