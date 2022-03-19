import { transformClickUpTaskToMemberDetails } from "../lib/clickUp";
import { IClickUpTask } from "../types/clickUp";

export const mockClickUpTask: IClickUpTask = {
  id: "240uhne",
  custom_id: null,
  name: "Ping-Lin Chang",
  text_content:
    "Name: Ping-Lin Chang\nOccupation Title: CEO\n2 Casual titles: Guitarist, Builder\nLinkedin: https://www.linkedin.com/in/pinglin\nGitHub: https://github.com/pinglin",
  description:
    "Name: Ping-Lin Chang\nOccupation Title: CEO\n2 Casual titles: Guitarist, Builder\nLinkedin: https://www.linkedin.com/in/pinglin\nGitHub: https://github.com/pinglin",
  status: {
    status: "Open",
    color: "#2ecd6f",
    type: "open",
    orderindex: 0,
  },
  orderindex: "441244.00000000000000000000000000000000",
  date_created: "1647516242482",
  date_updated: "1647589480384",
  date_closed: null,
  archived: false,
  creator: {
    id: 32437769,
    username: "Wen Chen",
    color: "#827718",
    email: "wen.chen@instill.tech",
    profilePicture:
      "https://attachments.clickup.com/profilePictures/32437769_vs7.jpg",
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
      id: "b2cb924a-0b90-49bc-8118-526a7abb4fc8",
      name: "avatar_image_desktop",
      type: "attachment",
      type_config: {},
      date_created: "1647509107118",
      hide_from_guests: false,
      value: [
        {
          id: "a197b053-1c4f-4a7b-ae24-1df30c007e96.png",
          date: "1647587854772",
          title: "pinglin-avatar-desktop.png",
          type: 11,
          source: 1,
          version: 0,
          extension: "png",
          thumbnail_small:
            "https://t2564371.p.clickup-attachments.com/t2564371/a197b053-1c4f-4a7b-ae24-1df30c007e96_small.png",
          thumbnail_medium:
            "https://t2564371.p.clickup-attachments.com/t2564371/a197b053-1c4f-4a7b-ae24-1df30c007e96_medium.png",
          thumbnail_large:
            "https://t2564371.p.clickup-attachments.com/t2564371/a197b053-1c4f-4a7b-ae24-1df30c007e96/pinglin-avatar-desktop.png",
          is_folder: null,
          mimetype: "image/png",
          hidden: false,
          parent_id: "b2cb924a-0b90-49bc-8118-526a7abb4fc8",
          size: 72878,
          total_comments: 0,
          resolved_comments: 0,
          user: {
            id: 32447047,
            username: "Po-Chun Chiu",
            email: "pochun.chiu@instill.tech",
            initials: "PC",
            color: "#0197a7",
            profilePicture:
              "https://attachments.clickup.com/profilePictures/32447047_IXI.jpg",
          },
          deleted: false,
          orientation: null,
          url: "https://t2564371.p.clickup-attachments.com/t2564371/a197b053-1c4f-4a7b-ae24-1df30c007e96/pinglin-avatar-desktop.png",
          parent_comment_type: null,
          parent_comment_parent: null,
          email_data: null,
          url_w_query:
            "https://t2564371.p.clickup-attachments.com/t2564371/a197b053-1c4f-4a7b-ae24-1df30c007e96/pinglin-avatar-desktop.png?view=open",
          url_w_host:
            "https://t2564371.p.clickup-attachments.com/t2564371/a197b053-1c4f-4a7b-ae24-1df30c007e96/pinglin-avatar-desktop.png",
        },
      ],
      required: false,
    },
    {
      id: "50f7842e-d4f0-49f4-858b-cf9647cf4231",
      name: "avatar_image_with_frame_desktop",
      type: "attachment",
      type_config: {},
      date_created: "1647509127538",
      hide_from_guests: false,
      value: [
        {
          id: "1e6a2aee-29c0-4287-ab8c-bbe730ca5918.png",
          date: "1647587889351",
          title: "pinglin-avatar-frame-desktop.png",
          type: 11,
          source: 1,
          version: 0,
          extension: "png",
          thumbnail_small:
            "https://t2564371.p.clickup-attachments.com/t2564371/1e6a2aee-29c0-4287-ab8c-bbe730ca5918_small.png",
          thumbnail_medium:
            "https://t2564371.p.clickup-attachments.com/t2564371/1e6a2aee-29c0-4287-ab8c-bbe730ca5918_medium.png",
          thumbnail_large:
            "https://t2564371.p.clickup-attachments.com/t2564371/1e6a2aee-29c0-4287-ab8c-bbe730ca5918/pinglin-avatar-frame-desktop.png",
          is_folder: null,
          mimetype: "image/png",
          hidden: false,
          parent_id: "50f7842e-d4f0-49f4-858b-cf9647cf4231",
          size: 65820,
          total_comments: 0,
          resolved_comments: 0,
          user: {
            id: 32447047,
            username: "Po-Chun Chiu",
            email: "pochun.chiu@instill.tech",
            initials: "PC",
            color: "#0197a7",
            profilePicture:
              "https://attachments.clickup.com/profilePictures/32447047_IXI.jpg",
          },
          deleted: false,
          orientation: null,
          url: "https://t2564371.p.clickup-attachments.com/t2564371/1e6a2aee-29c0-4287-ab8c-bbe730ca5918/pinglin-avatar-frame-desktop.png",
          parent_comment_type: null,
          parent_comment_parent: null,
          email_data: null,
          url_w_query:
            "https://t2564371.p.clickup-attachments.com/t2564371/1e6a2aee-29c0-4287-ab8c-bbe730ca5918/pinglin-avatar-frame-desktop.png?view=open",
          url_w_host:
            "https://t2564371.p.clickup-attachments.com/t2564371/1e6a2aee-29c0-4287-ab8c-bbe730ca5918/pinglin-avatar-frame-desktop.png",
        },
      ],
      required: false,
    },
    {
      id: "d50598c4-e19c-4a42-8e78-cbdcc29f136c",
      name: "avatar_image_with_frame_mobile",
      type: "attachment",
      type_config: {},
      date_created: "1647587669921",
      hide_from_guests: false,
      value: [
        {
          id: "2528a70b-4d07-4585-8be1-c18a92110c5b.png",
          date: "1647587897773",
          title: "pinglin-avatar-frame-mobile.png",
          type: 11,
          source: 1,
          version: 0,
          extension: "png",
          thumbnail_small:
            "https://t2564371.p.clickup-attachments.com/t2564371/2528a70b-4d07-4585-8be1-c18a92110c5b_small.png",
          thumbnail_medium:
            "https://t2564371.p.clickup-attachments.com/t2564371/2528a70b-4d07-4585-8be1-c18a92110c5b_medium.png",
          thumbnail_large:
            "https://t2564371.p.clickup-attachments.com/t2564371/2528a70b-4d07-4585-8be1-c18a92110c5b/pinglin-avatar-frame-mobile.png",
          is_folder: null,
          mimetype: "image/png",
          hidden: false,
          parent_id: "d50598c4-e19c-4a42-8e78-cbdcc29f136c",
          size: 36143,
          total_comments: 0,
          resolved_comments: 0,
          user: {
            id: 32447047,
            username: "Po-Chun Chiu",
            email: "pochun.chiu@instill.tech",
            initials: "PC",
            color: "#0197a7",
            profilePicture:
              "https://attachments.clickup.com/profilePictures/32447047_IXI.jpg",
          },
          deleted: false,
          orientation: null,
          url: "https://t2564371.p.clickup-attachments.com/t2564371/2528a70b-4d07-4585-8be1-c18a92110c5b/pinglin-avatar-frame-mobile.png",
          parent_comment_type: null,
          parent_comment_parent: null,
          email_data: null,
          url_w_query:
            "https://t2564371.p.clickup-attachments.com/t2564371/2528a70b-4d07-4585-8be1-c18a92110c5b/pinglin-avatar-frame-mobile.png?view=open",
          url_w_host:
            "https://t2564371.p.clickup-attachments.com/t2564371/2528a70b-4d07-4585-8be1-c18a92110c5b/pinglin-avatar-frame-mobile.png",
        },
      ],
      required: false,
    },
    {
      id: "0b01bcbb-93b3-4b54-b47b-29e86aeb1f84",
      name: "github_link",
      type: "short_text",
      type_config: {},
      date_created: "1647589191022",
      hide_from_guests: false,
      value: "https://github.com/pinglin",
      required: false,
    },
    {
      id: "00708bbf-01cd-4479-8768-263b98b8a8e7",
      name: "kernel_color",
      type: "short_text",
      type_config: {},
      date_created: "1647581817972",
      hide_from_guests: false,
      value: "#40A8F5",
      required: false,
    },
    {
      id: "26251cb8-3aee-48f8-a453-71c31b38b572",
      name: "kernel_color_cube_location",
      type: "short_text",
      type_config: {},
      date_created: "1647581841429",
      hide_from_guests: false,
      value: "2,3,7,8",
      required: false,
    },
    {
      id: "9e67a185-51d7-49a3-8d29-9a88b483c1da",
      name: "linkedin_link",
      type: "short_text",
      type_config: {},
      date_created: "1647588856507",
      hide_from_guests: false,
      value: "https://www.linkedin.com/in/pinglin",
      required: false,
    },
    {
      id: "a54f377d-3aeb-4520-89c7-aed6d2d55d0e",
      name: "order",
      type: "short_text",
      type_config: {},
      date_created: "1647581868464",
      hide_from_guests: false,
      value: "1",
      required: false,
    },
    {
      id: "60860922-0dff-43ed-a76c-489e37337253",
      name: "titles",
      type: "short_text",
      type_config: {},
      date_created: "1647588617113",
      hide_from_guests: false,
      value: "CEO, Guitarist, Builder",
      required: false,
    },
  ],
  dependencies: [],
  linked_tasks: [],
  team_id: "2564371",
  url: "https://app.clickup.com/t/240uhne",
  permission_level: "create",
  list: {
    id: "181513244",
    name: "TeamMembersWeb",
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

test("should transform clickUp task to members", () => {
  const member = transformClickUpTaskToMemberDetails(mockClickUpTask);

  expect(member.id).toBe("240uhne");
  expect(member.name).toBe("Ping-Lin Chang");
  expect(member.order).toBe(1);
  expect(member.titles).toStrictEqual(["CEO", "Guitarist", "Builder"]);
  expect(member.kernelColorCubeLocation).toStrictEqual(["2", "3", "7", "8"]);
  expect(member.kernelColor).toBe("#40A8F5");
  expect(member.githubLink).toBe("https://github.com/pinglin");
  expect(member.linkedinLink).toBe("https://www.linkedin.com/in/pinglin");
  expect(member.avatarDesktop).toBe(
    "https://t2564371.p.clickup-attachments.com/t2564371/a197b053-1c4f-4a7b-ae24-1df30c007e96/pinglin-avatar-desktop.png"
  );
  expect(member.avatarWithFrameDesktop).toBe(
    "https://t2564371.p.clickup-attachments.com/t2564371/1e6a2aee-29c0-4287-ab8c-bbe730ca5918/pinglin-avatar-frame-desktop.png"
  );
  expect(member.avatarWithFrameMobile).toBe(
    "https://t2564371.p.clickup-attachments.com/t2564371/2528a70b-4d07-4585-8be1-c18a92110c5b/pinglin-avatar-frame-mobile.png"
  );
});
