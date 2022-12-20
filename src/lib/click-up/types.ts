/* eslint-disable @typescript-eslint/no-explicit-any */

export type GetClickUpTasksResponse = {
  tasks: ClickUpTask[];
};

export type ClickUpTask = {
  id: string;
  custom_id?: null;
  name: string;
  text_content?: null | string;
  description?: null | string;
  status: Status;
  orderindex: string;
  date_created: string;
  date_updated: string;
  date_closed?: null;
  archived: boolean;
  creator: Creator;
  assignees?: null[] | null;
  watchers?: null[] | null;
  checklists?: null[] | null;
  tags?: null[] | null;
  parent?: null;
  priority?: null;
  due_date?: null;
  start_date?: null;
  points?: null;
  time_estimate?: null;
  custom_fields?: CustomFieldsEntity[] | null;
  dependencies?: null[] | null;
  linked_tasks?: null[] | null;
  team_id: string;
  url: string;
  permission_level: string;
  list: List;
  project: Project;
  folder: Folder;
  space: Space;
};

interface Status {
  status: string;
  color: string;
  type: string;
  orderindex: number;
}

interface Creator {
  id: number;
  username: string;
  color: string;
  email: string;
  profilePicture: string;
}

interface CustomFieldsEntity {
  id: string;
  name: string;
  type: string;
  type_config: TypeConfig;
  date_created: string;
  hide_from_guests: boolean;
  value?: string | number | IClickUpImageAttatchmentValue[];
  required: boolean;
}

interface TypeConfig {
  default?: number | null;
  placeholder?: null;
  options?: OptionsEntity[] | null;
  new_drop_down?: boolean | null;
}

interface OptionsEntity {
  id: string;
  name: string;
  color?: null;
  orderindex: number;
}

interface List {
  id: string;
  name: string;
  access: boolean;
}

interface Project {
  id: string;
  name: string;
  hidden: boolean;
  access: boolean;
}

interface Folder {
  id: string;
  name: string;
  hidden: boolean;
  access: boolean;
}

interface Space {
  id: string;
}

export interface IClickUpImageAttatchmentValue {
  id: string;
  date: string;
  title: string;
  type: number;
  source: number;
  version: number;
  extension: string;
  thumbnail_small: string;
  thumbnail_medium: string;
  thumbnail_large: string;
  is_folder: any;
  mimetype: string;
  hidden: boolean;
  parent_id: string;
  size: number;
  total_comments: number;
  resolved_comments: number;
  user: User;
  deleted: boolean;
  orientation: any;
  url: string;
  parent_comment_type: any;
  parent_comment_parent: any;
  email_data: any;
  url_w_query: string;
  url_w_host: string;
}

interface User {
  id: number;
  username: string;
  email: string;
  initials: string;
  color: string;
  profilePicture: string;
}
