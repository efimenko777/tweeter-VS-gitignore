function addMassegeAndRemove(text) {
    function getRandom(min, max) {
        let a = Math.floor(Math.random() * (max - min)) + min;
        return a;
    };
    const id = getRandom(1, 1000);
    let tweet = `<div class="wrapper-list" id="tweet-${id}">
	<img src="https://placehold.it/57/333"  alt="avatar" class="wrapper__avatar">
	<div class="wrapper__cont">
		<div class="wrapper__header">
			<p class="wrapper__title">User Name</p>
		</div>
	<p class="wrapper__text">` + text + `</p><img src="https://placehold.it/600x300" alt="" class="wrapper__img">
	<div class="wrapper__footer"><div class="wrapper__icons">
	<i class="fa fa-behance"></i><i class="fa fa-instagram"></i><i class="fa fa-linkedin"></i>
	</div>
	<time class="wrapper__date">
	${Date().slice(7, 24)}</time></div></div>
	<button class="btn" onclick="document.body.querySelector('#tweet-${id}').remove()">delete</button>
	</div>`;
    let wrap = document.getElementById('list');
    wrap.innerHTML = tweet + wrap.innerHTML;
};
module.exports = addMassegeAndRemove;