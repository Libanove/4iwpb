// Composant Header réutilisable
export default {
    name: 'Header',
    props: {
        currentPage: {
            type: String,
            default: 'home'
        }
    },
    template: `
        <header class="main-header">
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand" href="index.html">Bilain Jaber</a>
                    
                    <!-- Ajout couleur JS  -->
                    <div id="selecteur"></div>
                    <!--Nb article visible -->
                    <p class="art-visible"></p>
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" :class="{ active: currentPage === 'home' }" href="index.html">Accueil</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" :class="{ active: currentPage === 'articles' }" href="article.html">Articles</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" :class="{ active: currentPage === 'custom' }" href="custom.html">Personnalisation</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    `
};


