import MainNavigation from './mainNavigation';

export default {
    MainNavigation: () => MainNavigation,
    PageController: () => import('./controllers/page'),
    ArticleController: () => import('./controllers/article'),
    TagController: () => import('./controllers/tag'),
    UserController: () => import('./controllers/user'),
    CategoryController: () => import('./controllers/category'),
    MediaController: () => import('./controllers/media'),
    MySettingsController: () => import('./controllers/mySettings')
};
