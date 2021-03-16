function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}
function placeDiv() {

	var d = document.getElementById('btnno');
	d.style.left = getRandom(0,80)+'%';
	d.style.top = getRandom(0,80)+'%';
}
function showMsg(){
	var m = document.getElementById('msg');
	var t = document.getElementById('title');

	m.style.display='block';
	t.style.display='none';
	document.getElementById('btnno').style.visibility = 'hidden';
	document.getElementById('btnsi').style.visibility = 'hidden';

}
const mouseTarget = document.getElementById('btnno');
mouseTarget.addEventListener('mouseenter', e => {
	placeDiv();
});