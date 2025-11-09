// Composant Footer réutilisable
export default {
    name: 'Footer',
    template: `
        <footer class="bg-white shadow-sm mt-5">
            <section class="container py-4">
                <section class="row">
                    <section class="col-md-4 mb-3">
                        <h5 class="text-primary mb-3">À propos</h5>
                        <p class="text-muted mb-0">Découvrez les dernières actualités du cinéma belge.</p>
                    </section>
                    <nav class="col-md-4 mb-3">
                        <h5 class="text-primary mb-3">Liens rapides</h5>
                        <ul class="list-unstyled mb-0">
                            <li><a href="index.html" class="text-muted text-decoration-none">Accueil</a></li>
                            <li><a href="article.html" class="text-muted text-decoration-none">Articles</a></li>
                            <li><a href="custom.html" class="text-muted text-decoration-none">Personnalisation</a></li>
                        </ul>
                    </nav>
                    <section class="col-md-4">
                        <h5 class="text-primary mb-3">Contact</h5>
                        <p class="text-muted mb-0">Email: contact@monsite.be<br>Tél: +32 2 123 45 67</p>
                    </section>
                </section>
                <hr class="my-4">
                <p class="text-center text-muted mb-0">&copy; 2024 Bilain Jaber. Tous droits réservés.</p>
            </section>
        </footer>
    `
};


