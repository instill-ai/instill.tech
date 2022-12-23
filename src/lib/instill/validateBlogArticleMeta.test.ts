import { validateBlogArticleMeta } from "./validateBlogArticleMeta";

describe("Should validate blog article meta", () => {
  test("Should correctly validate the blog article meta", () => {
    const meta = {
      title: "test article",
      lang: "en-US",
      draft: false,
      description: "test",
      publishedOn: "2022-09-22T14:26:00",
      themeImgSrc: "",
      themeImgAlt: "",
      themeImgThumbnailSrc: "",
      placeholderColor: "bg-instillYellow50",
      author: "Xiaofei Du",
      authorAvatarSrc: "/author-avatar/xiaofei-du.png",
      authorGitHubUrl: "https://github.com/xiaofei-du",
      category: "Insights",
    };

    expect(validateBlogArticleMeta("path", meta)).toBe(meta);
  });

  test("should throw title not found", () => {
    const testFunction = () => {
      const meta = {
        lang: "en-US",
        draft: false,
        description: "test",
        publishedOn: "2022-09-22T14:26:00",
        themeImgSrc: "",
        themeImgAlt: "",
        themeImgThumbnailSrc: "",
        placeholderColor: "bg-instillYellow50",
        author: "Xiaofei Du",
        authorAvatarSrc: "/author-avatar/xiaofei-du.png",
        authorGitHubUrl: "https://github.com/xiaofei-du",
        category: "insights",
      };

      validateBlogArticleMeta("path", meta);
    };

    expect(testFunction).toThrow(
      "Error occurred when validate blog article meta - missing title field at path"
    );
  });

  test("should throw lang not found", () => {
    const testFunction = () => {
      const meta = {
        title: "test article",
        draft: false,
        description: "test",
        publishedOn: "2022-09-22T14:26:00",
        themeImgSrc: "",
        themeImgAlt: "",
        themeImgThumbnailSrc: "",
        placeholderColor: "bg-instillYellow50",
        author: "Xiaofei Du",
        authorAvatarSrc: "/author-avatar/xiaofei-du.png",
        authorGitHubUrl: "https://github.com/xiaofei-du",
        category: "insights",
      };

      validateBlogArticleMeta("path", meta);
    };

    expect(testFunction).toThrow(
      "Error occurred when validate blog article meta - missing lang field at path"
    );
  });

  test("should throw draft not found", () => {
    const testFunction = () => {
      const meta = {
        title: "test article",
        lang: "en-US",
        description: "test",
        publishedOn: "2022-09-22T14:26:00",
        themeImgSrc: "",
        themeImgAlt: "",
        themeImgThumbnailSrc: "",
        placeholderColor: "bg-instillYellow50",
        author: "Xiaofei Du",
        authorAvatarSrc: "/author-avatar/xiaofei-du.png",
        authorGitHubUrl: "https://github.com/xiaofei-du",
        category: "insights",
      };

      validateBlogArticleMeta("path", meta);
    };

    expect(testFunction).toThrow(
      "Error occurred when validate blog article meta - missing draft field at path"
    );
  });

  test("should throw description not found", () => {
    const testFunction = () => {
      const meta = {
        title: "test article",
        lang: "en-US",
        draft: false,
        publishedOn: "2022-09-22T14:26:00",
        themeImgSrc: "",
        themeImgAlt: "",
        themeImgThumbnailSrc: "",
        placeholderColor: "bg-instillYellow50",
        author: "Xiaofei Du",
        authorAvatarSrc: "/author-avatar/xiaofei-du.png",
        authorGitHubUrl: "https://github.com/xiaofei-du",
        category: "insights",
      };

      validateBlogArticleMeta("path", meta);
    };

    expect(testFunction).toThrow(
      "Error occurred when validate blog article meta - missing description field at path"
    );
  });

  test("should throw publishedOn not found", () => {
    const testFunction = () => {
      const meta = {
        title: "test article",
        lang: "en-US",
        draft: false,
        description: "test",
        themeImgSrc: "",
        themeImgAlt: "",
        themeImgThumbnailSrc: "",
        placeholderColor: "bg-instillYellow50",
        author: "Xiaofei Du",
        authorAvatarSrc: "/author-avatar/xiaofei-du.png",
        authorGitHubUrl: "https://github.com/xiaofei-du",
        category: "insights",
      };

      validateBlogArticleMeta("path", meta);
    };

    expect(testFunction).toThrow(
      "Error occurred when validate blog article meta - missing publishedOn field at path"
    );
  });

  test("should throw themeImgSrc not found", () => {
    const testFunction = () => {
      const meta = {
        title: "test article",
        lang: "en-US",
        draft: false,
        description: "test",
        publishedOn: "2022-09-22T14:26:00",
        themeImgAlt: "",
        themeImgThumbnailSrc: "",
        placeholderColor: "bg-instillYellow50",
        author: "Xiaofei Du",
        authorAvatarSrc: "/author-avatar/xiaofei-du.png",
        authorGitHubUrl: "https://github.com/xiaofei-du",
        category: "insights",
      };

      validateBlogArticleMeta("path", meta);
    };

    expect(testFunction).toThrow(
      "Error occurred when validate blog article meta - missing themeImgSrc field at path"
    );
  });

  test("should throw themeImgThumbnailSrc not found", () => {
    const testFunction = () => {
      const meta = {
        title: "test article",
        lang: "en-US",
        draft: false,
        description: "test",
        publishedOn: "2022-09-22T14:26:00",
        themeImgSrc: "",
        themeImgAlt: "",
        placeholderColor: "bg-instillYellow50",
        author: "Xiaofei Du",
        authorAvatarSrc: "/author-avatar/xiaofei-du.png",
        authorGitHubUrl: "https://github.com/xiaofei-du",
        category: "insights",
      };

      validateBlogArticleMeta("path", meta);
    };

    expect(testFunction).toThrow(
      "Error occurred when validate blog article meta - missing themeImgThumbnailSrc field at path"
    );
  });

  test("should throw placeholderColor not found", () => {
    const testFunction = () => {
      const meta = {
        title: "test article",
        lang: "en-US",
        draft: false,
        description: "test",
        publishedOn: "2022-09-22T14:26:00",
        themeImgSrc: "",
        themeImgAlt: "",
        themeImgThumbnailSrc: "",
        author: "Xiaofei Du",
        authorAvatarSrc: "/author-avatar/xiaofei-du.png",
        authorGitHubUrl: "https://github.com/xiaofei-du",
        category: "insights",
      };

      validateBlogArticleMeta("path", meta);
    };

    expect(testFunction).toThrow(
      "Error occurred when validate blog article meta - missing placeholderColor field at path"
    );
  });

  test("should validate placeholderColor", () => {
    const testFunction = () => {
      const meta = {
        title: "test article",
        lang: "en-US",
        draft: false,
        description: "test",
        publishedOn: "2022-09-22T14:26:00",
        themeImgSrc: "",
        themeImgAlt: "",
        themeImgThumbnailSrc: "",
        placeholderColor: "bg-instillGrey50",
        author: "Xiaofei Du",
        authorAvatarSrc: "/author-avatar/xiaofei-du.png",
        authorGitHubUrl: "https://github.com/xiaofei-du",
        category: "insights",
      };

      validateBlogArticleMeta("path", meta);
    };

    expect(testFunction).toThrow();
  });

  test("should throw author not found", () => {
    const testFunction = () => {
      const meta = {
        title: "test article",
        lang: "en-US",
        draft: false,
        description: "test",
        publishedOn: "2022-09-22T14:26:00",
        themeImgSrc: "",
        themeImgAlt: "",
        themeImgThumbnailSrc: "",
        placeholderColor: "bg-instillYellow50",
        authorAvatarSrc: "/author-avatar/xiaofei-du.png",
        authorGitHubUrl: "https://github.com/xiaofei-du",
        category: "insights",
      };

      validateBlogArticleMeta("path", meta);
    };

    expect(testFunction).toThrow(
      "Error occurred when validate blog article meta - missing author field at path"
    );
  });

  test("should throw authorAvatarSrc not found", () => {
    const testFunction = () => {
      const meta = {
        title: "test article",
        lang: "en-US",
        draft: false,
        description: "test",
        publishedOn: "2022-09-22T14:26:00",
        themeImgSrc: "",
        themeImgAlt: "",
        themeImgThumbnailSrc: "",
        placeholderColor: "bg-instillYellow50",
        author: "Xiaofei Du",
        authorGitHubUrl: "https://github.com/xiaofei-du",
        category: "insights",
      };

      validateBlogArticleMeta("path", meta);
    };

    expect(testFunction).toThrow(
      "Error occurred when validate blog article meta - missing authorAvatarSrc field at path"
    );
  });

  test("should throw authorGitHubUrl not found", () => {
    const testFunction = () => {
      const meta = {
        title: "test article",
        lang: "en-US",
        draft: false,
        description: "test",
        publishedOn: "2022-09-22T14:26:00",
        themeImgSrc: "",
        themeImgAlt: "",
        themeImgThumbnailSrc: "",
        placeholderColor: "bg-instillYellow50",
        author: "Xiaofei Du",
        authorAvatarSrc: "/author-avatar/xiaofei-du.png",
        category: "insights",
      };

      validateBlogArticleMeta("path", meta);
    };

    expect(testFunction).toThrow(
      "Error occurred when validate blog article meta - missing authorGitHubUrl field at path"
    );
  });

  test("should throw category not found", () => {
    const testFunction = () => {
      const meta = {
        title: "test article",
        lang: "en-US",
        draft: false,
        description: "test",
        publishedOn: "2022-09-22T14:26:00",
        themeImgSrc: "",
        themeImgAlt: "",
        themeImgThumbnailSrc: "",
        placeholderColor: "bg-instillYellow50",
        author: "Xiaofei Du",
        authorAvatarSrc: "/author-avatar/xiaofei-du.png",
        authorGitHubUrl: "https://github.com/xiaofei-du",
      };

      validateBlogArticleMeta("path", meta);
    };

    expect(testFunction).toThrow(
      "Error occurred when validate blog article meta - missing category field at path"
    );
  });
});
