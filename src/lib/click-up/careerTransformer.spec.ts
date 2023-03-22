import { transformClickUpTaskToPositionDetails } from "./clickUp";
import { ClickUpTask } from "./types";
import { expect, test } from "vitest";

const mockClickUpTask: ClickUpTask = {
  id: "2cr7au1",
  custom_id: null,
  name: "Founding Engineer (Sr. Backend Engineer)",
  text_content: null,
  description: null,
  status: {
    status: "Open",
    color: "#2ecd6f",
    type: "open",
    orderindex: 0,
  },
  orderindex: "441045.00000000000000000000000000000000",
  date_created: "1646364772102",
  date_updated: "1646651347094",
  date_closed: null,
  archived: false,
  creator: {
    id: 32447047,
    username: "Po-Chun Chiu",
    color: "#0197a7",
    email: "pochun.chiu@instill.tech",
    profilePicture:
      "https://attachments.clickup.com/profilePictures/32447047_IXI.jpg",
  },
  assignees: [],
  watchers: [],
  checklists: [],
  tags: [],
  parent: null,
  priority: null,
  due_date: null,
  start_date: null,
  points: null,
  time_estimate: null,
  custom_fields: [
    {
      id: "fddc60c5-d1ed-4a71-8d02-aa9a362d6820",
      name: "description_markdown",
      type: "text",
      type_config: {},
      date_created: "1646364834974",
      hide_from_guests: false,
      value: "This is description placeholder",
      required: false,
    },
    {
      id: "e748db03-cf61-4c4e-af5f-70f7b348560c",
      name: "location",
      type: "drop_down",
      type_config: {
        default: 0,
        placeholder: null,
        new_drop_down: true,
        options: [
          {
            id: "ecb1fd9e-6006-4086-8aa0-e4499c01543d",
            name: "Remote",
            color: null,
            orderindex: 0,
          },
        ],
      },
      date_created: "1646376488279",
      hide_from_guests: false,
      value: 0,
      required: false,
    },
    {
      id: "cc48a949-f135-48bc-ab9e-ff3025189f89",
      name: "package_tw",
      type: "short_text",
      type_config: {},
      date_created: "1646365014489",
      hide_from_guests: false,
      value: "NT$1,300,000 - 2,000,000 (TW)",
      required: false,
    },
    {
      id: "ec8e3e99-c949-458c-9fb2-4022be45399e",
      name: "package_uk",
      type: "short_text",
      type_config: {},
      date_created: "1646364911734",
      hide_from_guests: false,
      value: "Salary £35,000 - £60,000 (UK)",
      required: false,
    },
    {
      id: "72b5809c-b725-44d1-9b4f-2b8ae8b0576c",
      name: "post_date",
      type: "date",
      type_config: {},
      date_created: "1646637228056",
      hide_from_guests: false,
      value: "1646078400000",
      required: false,
    },
    {
      id: "3afa90b4-3a21-4e72-a500-ddb53e69a4b1",
      name: "slug",
      type: "short_text",
      type_config: {},
      date_created: "1646558453683",
      hide_from_guests: false,
      value: "full-stack-ai-engineer",
      required: false,
    },
    {
      id: "7895328b-825a-4de1-b6d6-feb0104de2d3",
      name: "stock_options",
      type: "short_text",
      type_config: {},
      date_created: "1646376660805",
      hide_from_guests: false,
      value: "0.1% - 0.3%",
      required: false,
    },
    {
      id: "a335016b-6bef-4f7c-9e3e-bd91382664b5",
      name: "work_type",
      type: "drop_down",
      type_config: {
        default: 0,
        placeholder: null,
        new_drop_down: true,
        options: [
          {
            id: "08a31a6b-2c7a-4509-8bd6-eae83119209d",
            name: "Full time",
            color: null,
            orderindex: 0,
          },
          {
            id: "f4a886ed-da50-4806-91e9-9eb124435d4e",
            name: "Full time contract",
            color: null,
            orderindex: 1,
          },
        ],
      },
      date_created: "1646376566325",
      hide_from_guests: false,
      value: 0,
      required: false,
    },
  ],
  dependencies: [],
  linked_tasks: [],
  team_id: "2564371",
  url: "https://app.clickup.com/t/2cr7au1",
  permission_level: "create",
  list: {
    id: "175663624",
    name: "OpenPosition",
    access: true,
  },
  project: {
    id: "74455866",
    name: "People Operation",
    hidden: false,
    access: true,
  },
  folder: {
    id: "74455866",
    name: "People Operation",
    hidden: false,
    access: true,
  },
  space: {
    id: "4534791",
  },
};

test("This should transform clickUp task into position details", () => {
  const positionDetails =
    transformClickUpTaskToPositionDetails(mockClickUpTask);

  expect(positionDetails.id).toBe("2cr7au1");
  expect(positionDetails.name).toBe("Founding Engineer (Sr. Backend Engineer)");
  expect(positionDetails.description).toBe("This is description placeholder");
  expect(positionDetails.location).toBe("Remote");
  expect(positionDetails.packageTW).toBe("NT$1,300,000 - 2,000,000 (TW)");
  expect(positionDetails.packageUK).toBe("Salary £35,000 - £60,000 (UK)");
  expect(positionDetails.postDate).toBe("1646078400000");
  expect(positionDetails.stockOptions).toBe("0.1% - 0.3%");
  expect(positionDetails.workType).toBe("Full time");
  expect(positionDetails.slug).toBe("full-stack-ai-engineer");
});
