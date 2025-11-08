// Composant CardWidget réutilisable pour les widgets simples de la sidebar
export default {
    name: 'CardWidget',
    props: {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            default: ''
        },
        showNewsletter: {
            type: Boolean,
            default: false
        }
    },
    template: `
        <section class="card mb-4">
            <div class="card-body">
                <h4 class="h5 mb-3">{{ title }}</h4>
                <p class="mb-0" v-if="content && !showNewsletter">{{ content }}</p>
                <div v-if="showNewsletter">
                    <p>Restez informé de l'actualité du cinéma belge.</p>
                    <form>
                        <input type="email" class="form-control mb-3" placeholder="Votre email">
                        <button type="submit" class="btn btn-primary w-100">S'inscrire</button>
                    </form>
                </div>
            </div>
        </section>
    `
};

