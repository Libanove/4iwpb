// Composant Sidebar réutilisable pour la barre latérale
export default {
    name: 'Sidebar',
    data() {
        return {
            motCle: '',
            dureeMin: 0,
            dureeMax: 60,
            nombreArticles: 10
        };
    },
    methods: {
        updateFilters() {
            this.$emit('filters-changed', {
                motCle: this.motCle,
                dureeMin: this.dureeMin,
                dureeMax: this.dureeMax,
                nombreArticles: this.nombreArticles
            });
        }
    },
    template: `
        <aside class="col-md-4">
            <!-- Formulaire de recherche -->
            <div class="card-body card mb-4">
                <p><b>Recherche formulaire :</b></p>
                <form class="form-control">
                    <label class="col-19 col-md-5">Mot clés :</label>
                    <input id="motInput" class="col-12 col-md-5" v-model="motCle" @input="updateFilters">
                    <div class="mb-3">
                        <label class="col-19 col-md-5">Durée Min : <span id="dureeMinValue">{{ dureeMin }}</span> min</label>
                        <input type="range" id="dureeMin" class="col-12 col-md-5" min="0" max="60" v-model.number="dureeMin" @input="updateFilters">
                    </div>
                    <div class="mb-3">
                        <label class="col-19 col-md-5">Durée Max : <span id="dureeMaxValue">{{ dureeMax }}</span> min</label>
                        <input type="range" id="dureeMax" class="col-12 col-md-5" min="0" max="60" v-model.number="dureeMax" @input="updateFilters">
                    </div>
                    <label class="col-19 col-md-5">Nombre max d'articles :</label>
                    <input type="number" id="nombreArticles" class="col-12 col-md-5" min="1" max="20" v-model.number="nombreArticles" @input="updateFilters">
                </form>
            </div>
            
            <!-- À propos -->
            <section class="card mb-4">
                <div class="card-body">
                    <h4 class="h5 mb-3">À propos</h4>
                    <p class="mb-0">Découvrez les dernières actualités et articles sur le cinéma belge et ses lieux de tournage.</p>
                </div>
            </section>
            
            <!-- Catégories -->
            <section class="card mb-4">
                <div class="card-body">
                    <h4 class="h5 mb-3">Catégories</h4>
                    <div class="list-group list-group-flush">
                        <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0">
                            Cinéma belge
                            <span class="badge bg-primary rounded-pill">12</span>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0">
                            Festivals
                            <span class="badge bg-primary rounded-pill">8</span>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0">
                            Streaming
                            <span class="badge bg-primary rounded-pill">15</span>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0">
                            Documentaires
                            <span class="badge bg-primary rounded-pill">6</span>
                        </a>
                    </div>
                </div>
            </section>
            
            <!-- Articles populaires -->
            <section class="card mb-4">
                <div class="card-body">
                    <h4 class="h5 mb-3">Articles populaires</h4>
                    <div class="list-group list-group-flush">
                        <a href="#" class="list-group-item list-group-item-action border-0">
                            <h6 class="mb-1">Les meilleurs films belges de 2024</h6>
                            <p class="mb-1 small text-muted">Une sélection des films belges qui ont marqué l'année.</p>
                            <small class="text-primary">3 jours</small>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action border-0">
                            <h6 class="mb-1">Le cinéma belge à l'international</h6>
                            <p class="mb-1 small text-muted">Comment le cinéma belge s'exporte à l'étranger.</p>
                            <small class="text-primary">5 jours</small>
                        </a>
                    </div>
                </div>
            </section>
            
            <!-- Article en vedette -->
            <section class="card mb-4 info-art">
                <div class="card-body">
                    <h4 class="h5 mb-3">Article en vedette</h4>
                    <img src="https://ecran-total.fr/wp-content/uploads/2024/03/Copyright-Cinema-Palace.jpg" class="card-img-top mb-3" alt="Box-office">
                    <span class="badge bg-danger mb-2">Box-office</span>
                    <h3 class="h5 titre-form">Le box-office belge en chiffres</h3>
                    <p class="small card-text">Analyse des performances des films belges dans les salles cette année.</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <small class="text-muted">Par Pierre Leroy • <br>15/09/2025 <br><p class="readtime">Temps de lecture : 15 min</p></small>
                        <a href="#" class="btn btn-outline-primary btn-sm">Lire</a>
                    </div>
                </div>
            </section>
            
            <!-- Newsletter -->
            <section class="card mb-4">
                <div class="card-body">
                    <h4 class="h5 mb-3">Newsletter</h4>
                    <p>Restez informé de l'actualité du cinéma belge.</p>
                    <form>
                        <input type="email" class="form-control mb-3" placeholder="Votre email">
                        <button type="submit" class="btn btn-primary w-100">S'inscrire</button>
                    </form>
                </div>
            </section>
            
            <!-- Dernières critiques -->
            <section class="card mb-4 info-art">
                <div class="card-body">
                    <h4 class="h5 mb-3">Dernières critiques</h4>
                    <img src="https://fr.web.img6.acsta.net/pictures/22/10/26/16/00/5597821.jpg" class="card-img-top mb-3" alt="Critique de film">
                    <span class="badge bg-info mb-2">Critique</span>
                    <h3 class="h5 titre-form">Close : Un chef-d'œuvre belge</h3>
                    <p class="small card-text">Une analyse approfondie du film qui a ému le monde entier.</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <small class="text-muted">Par Marc Dumont • <br>11/09/2025 <br><p class="readtime">Temps de lecture : 10 min</p></small>
                        <a href="#" class="btn btn-outline-primary btn-sm">Lire</a>
                    </div>
                </div>
            </section>
            
            <!-- Interview -->
            <section class="card mb-4 info-art">
                <div class="card-body">
                    <h4 class="h5 mb-3">Interview</h4>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6__bVGu55aiIMXZBjyt8n4sTl-bJDrOHegg&s" class="card-img-top mb-3" alt="Interview">
                    <span class="badge bg-warning mb-2">Interview</span>
                    <h3 class="h5 titre-form">Rencontre avec Joachim Lafosse</h3>
                    <p class="small card-text">Le réalisateur belge nous parle de son prochain film.</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <small class="text-muted">Par Claire Dubois • <br>09/09/2025 <br><p class="readtime">Temps de lecture : 5 min</p></small>
                        <a href="#" class="btn btn-outline-primary btn-sm">Lire</a>
                    </div>
                </div>
            </section>
        </aside>
    `
};

