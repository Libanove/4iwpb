// Point d'entrée de l'application & Composant racine
// Utilise ArticleList.js comme composant pour lister les articles

import ArticleListComponent from './Component/ArticleList.js';

document.addEventListener('DOMContentLoaded', () => {
    if (typeof Vue === 'undefined') {
        console.error('Vue.js n\'est pas chargé');
        return;
    }

    // Déterminer la page actuelle selon l'URL
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    let page = 'home';
    
    if (currentPage === 'article.html') {
        page = 'articles';
    } else if (currentPage === 'custom.html') {
        page = 'custom';
    }

    // Composant racine de l'application
    const App = {
        name: 'App',
        components: {
            ArticleList: ArticleListComponent
        },
        data() {
            return {
                currentPage: page
            };
        },
        template: `
            <div id="app">
                <ArticleList :page="currentPage" />
            </div>
        `
    };

    // Créer et monter l'application Vue
    Vue.createApp(App).mount('#vue-app');
});
