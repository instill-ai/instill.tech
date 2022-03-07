export type TGetClickUpTasksQueryResponse = {
  tasks: IClickUpTask[];
};

export interface IClickUpTask {
  id: string;
  custom_id?: null;
  name: string;
  text_content?: null;
  description?: null;
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
}

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
  value: string | number;
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
