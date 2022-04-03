import MockArticles from '../mock-commands/articles'
import MockTags from '../mock-commands/tags'

class Mock {

    get articles() {
        return new MockArticles();
    }

    get tags() {
        return new MockTags();
    }
}

export default new Mock();