import MockArticles from './articles'
import MockTags from './tags'

class Mock {

    get articles() {
        return new MockArticles();
    }

    get tags() {
        return new MockTags();
    }
}

export default Mock;