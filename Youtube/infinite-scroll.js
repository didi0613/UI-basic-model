function getPageId(n) {
	return 'article-page-' + n;
}

function getArticleImage() {
	const hash = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
	const image = new Image;
	image.className = 'article-list__item__image article-list__item__image--loading';
	image.src = 'http://api.adorable.io/avatars/250/' + hash;

	image.onload = function() {
		image.classList.remove('article-list__item__image--loading');
	};

	return image;
}

function getArticle() {
	const articleImage = getArticleImage();
	const article = document.createElement('article');
	article.className = 'article-list__item';
	article.appendChild(articleImage);

	return article;
}

function getArticlePage(page, articlesPerPage = 16) {
	const pageElement = document.createElement('div');
	pageElement.id = getPageId(page);
	pageElement.className = 'article-list__page';

	while (articlesPerPage--) {
		pageElement.appendChild(getArticle());
	}

	return pageElement;
}

function fetchPage(page) {
	articleList.appendChild(getArticlePage(page));
}

function addPage(page) {
	fetchPage(page);
}

const articleList = document.getElementById('article-list');
const articleListPagination = document.getElementById('article-list-pagination');
let page = 0;

addPage(++page);

window.onscroll = function() {
	if ( window.pageYOffset < (document.body.scrollHeight - window.innerHeight)) return;
	addPage(++page);
};
