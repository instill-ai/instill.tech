export type UserProperties = {};

export type Event =
  | "hitting_landing_page"
  | "join_discord"
  | "request_early_access"
  | "hit_newsletter_archive"
  | "hit_get_early_access_page"
  | "hit_about_page"
  | "hit_main_page"
  | "hit_cookie_policy_page"
  | "hit_privacy_policy_page"
  | "to_github"
  | "to_medium"
  | "to_blog";

export type EventProperties = {
  type: "navigation" | "critical_action";
};
