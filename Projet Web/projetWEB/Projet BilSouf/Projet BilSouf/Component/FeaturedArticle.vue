// Composant FeaturedArticle réutilisable pour les articles en vedette/critiques/interview
export default {
    name: 'FeaturedArticle',
    props: {
        title: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        imageAlt: {
            type: String,
            default: 'Article'
        },
        badge: {
            type: String,
            required: true
        },
        badgeColor: {
            type: String,
            default: 'primary'
        },
        articleTitle: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        readingTime: {
            type: Number,
            default: 0
        },
        link: {
            type: String,
            default: '#'
        }
    },
    template: `
        <section class="card mb-4 info-art">
            <div class="card-body">
                <h4 class="h5 mb-3">{{ title }}</h4>
                <img :src="image" class="card-img-top mb-3" :alt="imageAlt">
                <span :class="['badge', 'bg-' + badgeColor, 'mb-2']">{{ badge }}</span>
                <h3 class="h5 titre-form">{{ articleTitle }}</h3>
                <p class="small card-text">{{ description }}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">
                        Par {{ author }} • <br>{{ date }}<br>
                        <p class="readtime">Temps de lecture : {{ readingTime }} min</p>
                    </small>
                    <a :href="link" class="btn btn-outline-primary btn-sm">Lire</a>
                </div>
            </div>
        </section>
    `
};

