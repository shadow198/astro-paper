export const languages = {
    en: "English",
    zh: "中文",
};

export const defaultLang = "en";

export const ui = {
    en: {
        "nav.posts": "Posts",
        "nav.tags": "Tags",
        "nav.about": "About",
        "nav.archives": "Archives",
        "nav.search": "Search",
        "hero.greeting": "Mingalaba",
        "hero.desc":
            "AstroPaper is a minimal, responsive, accessible and SEO-friendly Astro blog theme. This theme follows best practices and provides accessibility out of the box. Light and dark mode are supported by default. Moreover, additional color schemes can also be configured.",
        "posts.featured": "Featured",
        "posts.recent": "Recent Posts",
        "posts.all": "All Posts",
        "post.prev": "Previous Post",
        "post.next": "Next Post",
    },
    zh: {
        "nav.posts": "文章",
        "nav.tags": "标签",
        "nav.about": "关于",
        "nav.archives": "归档",
        "nav.search": "搜索",
        "hero.greeting": "你好",
        "hero.desc":
            "AstroPaper 是一个极简、响应式、无障碍且 SEO 友好的 Astro 博客主题。该主题遵循最佳实践，开箱即用。默认支持深色和浅色模式，并可配置更多配色方案。",
        "posts.featured": "精选文章",
        "posts.recent": "最近发布",
        "posts.all": "所有文章",
        "post.prev": "上一篇",
        "post.next": "下一篇",
    },
} as const;

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof (typeof ui)[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    };
}

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split("/");
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslatedPath(lang: keyof typeof ui) {
    return function translatePath(path: string, l: string = lang) {
        return !path.startsWith("/")
            ? path
            : l === defaultLang
                ? path
                : `/${l}${path}`;
    };
}
