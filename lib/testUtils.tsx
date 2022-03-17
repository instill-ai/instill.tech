import { NextRouter } from "next/router";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { render } from "@testing-library/react";
import { AnnouncementBarCtxProvider } from "../context/AnnouncementBarContext";
import { NextPage } from "next";
import { PageBase } from "../components/layouts/PageBase";

export function createMockRouter(router: Partial<NextRouter>): NextRouter {
  return {
    basePath: "",
    pathname: "/",
    route: "/",
    query: {},
    asPath: "/",
    back: jest.fn(),
    beforePopState: jest.fn(),
    prefetch: jest.fn(),
    push: jest.fn(),
    reload: jest.fn(),
    replace: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isLocaleDomain: false,
    isReady: true,
    defaultLocale: "en",
    domainLocales: [],
    isPreview: false,
    ...router,
  };
}

export function renderWithContext(
  ui: React.ReactElement,
  router: Partial<NextRouter>
) {
  const { rerender, ...result } = render(
    <RouterContext.Provider value={createMockRouter({ ...router })}>
      <AnnouncementBarCtxProvider>{ui}</AnnouncementBarCtxProvider>
    </RouterContext.Provider>
  );
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <RouterContext.Provider value={createMockRouter({ ...router })}>
          <AnnouncementBarCtxProvider>{rerenderUi}</AnnouncementBarCtxProvider>
        </RouterContext.Provider>
      ),
  };
}

export const mockWindowHref = (href: string) => {
  global.window = Object.create(window);
  Object.defineProperty(window, "location", {
    value: {
      href,
    },
  });
};

export const withPageBase = (page: NextPage) => {
  return <PageBase>{page}</PageBase>;
};
