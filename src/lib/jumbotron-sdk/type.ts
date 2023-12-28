export type JumbotronRequestResponse =
  | {
      status: "success";
      data: any;
    }
  | {
      status: "error";
      error: string;
    };
