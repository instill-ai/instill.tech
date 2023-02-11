import { validateTutorialMeta } from "./validateTutorialMeta";

describe("Should validate tutorial meta", () => {
  test("Should correctly validate the tutorial meta", () => {
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
      aiTask: "ObjectDetection",
      sourceConnector: "HTTP",
      destinationConnector: "HTTP",
      useCase: "prototype",
    };

    expect(validateTutorialMeta("path", meta)).toBe(meta);
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
        aiTask: "ObjectDetection",
        sourceConnector: "HTTP",
        destinationConnector: "HTTP",
        useCase: "prototype",
      };

      validateTutorialMeta("path", meta);
    };

    expect(testFunction).toThrow(
      "Error occurred when validate tutorial meta - missing title field at path"
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
        aiTask: "ObjectDetection",
        sourceConnector: "HTTP",
        destinationConnector: "HTTP",
        useCase: "prototype",
      };

      validateTutorialMeta("path", meta);
    };

    expect(testFunction).toThrow(
      "Error occurred when validate tutorial meta - missing lang field at path"
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
        aiTask: "ObjectDetection",
        sourceConnector: "HTTP",
        destinationConnector: "HTTP",
        useCase: "prototype",
      };

      validateTutorialMeta("path", meta);
    };

    expect(testFunction).toThrow(
      "Error occurred when validate tutorial meta - missing draft field at path"
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
        aiTask: "ObjectDetection",
        sourceConnector: "HTTP",
        destinationConnector: "HTTP",
        useCase: "prototype",
      };

      validateTutorialMeta("path", meta);
    };

    expect(testFunction).toThrow(
      "Error occurred when validate tutorial meta - missing description field at path"
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
        aiTask: "ObjectDetection",
        sourceConnector: "HTTP",
        destinationConnector: "HTTP",
        useCase: "prototype",
      };

      validateTutorialMeta("path", meta);
    };

    expect(testFunction).toThrow(
      "Error occurred when validate tutorial meta - missing publishedOn field at path"
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
        aiTask: "ObjectDetection",
        sourceConnector: "HTTP",
        destinationConnector: "HTTP",
        useCase: "prototype",
      };

      validateTutorialMeta("path", meta);
    };

    expect(testFunction).toThrow(
      "Error occurred when validate tutorial meta - missing themeImgSrc field at path"
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
        aiTask: "ObjectDetection",
        sourceConnector: "HTTP",
        destinationConnector: "HTTP",
        useCase: "prototype",
      };

      validateTutorialMeta("path", meta);
    };

    expect(testFunction).toThrow(
      "Error occurred when validate tutorial meta - missing themeImgThumbnailSrc field at path"
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
        aiTask: "ObjectDetection",
        sourceConnector: "HTTP",
        destinationConnector: "HTTP",
        useCase: "prototype",
      };

      validateTutorialMeta("path", meta);
    };

    expect(testFunction).toThrow(
      "Error occurred when validate tutorial meta - missing placeholderColor field at path"
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
        aiTask: "ObjectDetection",
        sourceConnector: "HTTP",
        destinationConnector: "HTTP",
        useCase: "prototype",
      };

      validateTutorialMeta("path", meta);
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
        aiTask: "ObjectDetection",
        sourceConnector: "HTTP",
        destinationConnector: "HTTP",
        useCase: "prototype",
      };

      validateTutorialMeta("path", meta);
    };

    expect(testFunction).toThrow(
      "Error occurred when validate tutorial meta - missing author field at path"
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
        aiTask: "ObjectDetection",
        sourceConnector: "HTTP",
        destinationConnector: "HTTP",
        useCase: "prototype",
      };

      validateTutorialMeta("path", meta);
    };

    expect(testFunction).toThrow(
      "Error occurred when validate tutorial meta - missing authorAvatarSrc field at path"
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
        aiTask: "ObjectDetection",
        sourceConnector: "HTTP",
        destinationConnector: "HTTP",
        useCase: "prototype",
      };

      validateTutorialMeta("path", meta);
    };

    expect(testFunction).toThrow(
      "Error occurred when validate tutorial meta - missing authorGitHubUrl field at path"
    );
  });

  test("should throw aiTask not found", () => {
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
        sourceConnector: "HTTP",
        destinationConnector: "HTTP",
        useCase: "prototype",
      };

      validateTutorialMeta("path", meta);
    };

    expect(testFunction).toThrow(
      "Error occurred when validate tutorial meta - missing aiTask field at path"
    );
  });

  test("should throw sourceConnector not found", () => {
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
        aiTask: "ObjectDetection",
        destinationConnector: "HTTP",
        useCase: "prototype",
      };

      validateTutorialMeta("path", meta);
    };

    expect(testFunction).toThrow(
      "Error occurred when validate tutorial meta - missing sourceConnector field at path"
    );
  });

  test("should throw destinationConnector not found", () => {
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
        aiTask: "ObjectDetection",
        sourceConnector: "HTTP",
        useCase: "prototype",
      };

      validateTutorialMeta("path", meta);
    };

    expect(testFunction).toThrow(
      "Error occurred when validate tutorial meta - missing destinationConnector field at path"
    );
  });

  test("should throw useCase not found", () => {
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
        aiTask: "ObjectDetection",
        sourceConnector: "HTTP",
        destinationConnector: "HTTP",
      };

      validateTutorialMeta("path", meta);
    };

    expect(testFunction).toThrow(
      "Error occurred when validate tutorial meta - missing useCase field at path"
    );
  });
});
