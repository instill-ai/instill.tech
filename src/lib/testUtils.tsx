import { NextRouter } from "next/router";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { render } from "@testing-library/react";
import { AnnouncementBarCtxProvider } from "../contexts/AnnouncementBarContext";
import { PageBase } from "../components/layouts/PageBase";
import { ReactElement } from "react-markdown/lib/react-markdown";

export function createMockRouter(router: Partial<NextRouter>): NextRouter {
  return {
    basePath: "",
    pathname: "/",
    route: "/",
    query: {},
    asPath: "/",
    back: jest.fn(),
    beforePopState: jest.fn(),

    // This one fixed Error: Uncaught [TypeError: Cannot read property 'catch' of undefined]
    // ref: https://github.com/vercel/next.js/issues/16864#issuecomment-734333738

    prefetch: jest.fn().mockResolvedValue(undefined),
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

export const withPageBase = (page: ReactElement) => {
  return <PageBase>{page}</PageBase>;
};

export const matchMedia = () => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
};
