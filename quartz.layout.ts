import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "Кто первый": '<a href="https://thecreativeact.ru" target="_blank" rel="noopener noreferrer">Кто первый</a>',
      "Телеграм-канал": "https://t.me/izumov",
      "Контакт": "mailto:izumov@thecreativeact.ru",
      //"Оферта": "https://izumov.thecreativeact.ru/docs/oferta",
      //"Политика конфиденциальности": "https://izumov.thecreativeact.ru/docs/politic",
      "Информация о сайте": "https://izumov.thecreativeact.ru/Credits"
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.TableOfContents()
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    //Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    //Component.Graph(),
    Component.DesktopOnly(Component.Explorer()),
    //Component.DesktopOnly(Component.TableOfContents()),
    //Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
