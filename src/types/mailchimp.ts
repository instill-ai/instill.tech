type Recipient = {
  list_id: string;
  list_ia_active: boolean;
  list_name: string;
  segmaent_text: string;
  recipient_count: number;

  // An object representing all segmentation options. This object should contain a
  // saved_segment_id to use an existing segment, or you can create a new segment
  // by including both match and conditions options.
  segment_opts: {
    saved_segment_id: number;
    prebuilt_segment_id: string;
    match: string;
    conditions: any[];
  };
};

type Campaign = {
  id: string;
  web_id: number;
  parent_campaign_id: string;
  type: string;
  create_time: string;
  archive_url: string;
  long_archive_url: string;
  status: string;
  emails_send: number;
  send_time: string;
  content_type: string;
  needs_block_refresh: boolean;
  resendable: boolean;
  recipients: Recipient[];
  settings: {
    subject_line: string;
    preview_text: string;
    title: string;
    from_name: string;
    reply_to: string;
    use_conversation: boolean;
    to_name: string;
    folder_id: string;
    authenticate: boolean;
    auto_footer: boolean;
    inline_css: boolean;
    auto_tweet: boolean;
    auto_fb_post: boolean;
    fb_comments: boolean;
    timewarp: boolean;
    template_id: number;
    drag_and_drop: boolean;
  };
  variate_settings: {
    winning_combination_id: string;
    winning_campaign_id: string;
    winner_criteria: string;
    wait_time: number;
    text_size: number;
    subject_lines: string[];
    send_times: string[];
    from_names: string[];
    reply_to_addresses: string[];
    contents: string[];
    combinations: {
      id: string;
      subject_line: number;
      send_time: number;
      from_name: number;
      reply_to: number;
      content_description: number;
      recipients: number;
    }[];
  };
  tracking: {
    opens: boolean;
    html_clicks: boolean;
    text_clicks: boolean;
    goal_tracking: boolean;
    ecomm360: boolean;
    google_analytics: string;
    clicktale: string;
  };
  rss_opts: {
    feed_url: string;
    frequency: string;
    schedule: string;
    last_sent: string;
    constrain_rss_img: boolean;
  };
  ab_split_opts: {
    split_test: string;
    pick_winner: string;
    wait_units: string;
    wait_time: number;
    split_size: number;
    from_name_a: string;
    from_name_b: string;
    reply_email_a: string;
    reply_email_b: string;
    subject_a: string;
    subject_b: string;
    send_time_a: string;
    send_time_b: string;
    send_time_winner: string;
  };
  social_card: {
    image_url: string;
    description: string;
    title: string;
  };
  report_summary: {
    opens: number;
    unique_opens: number;
    open_rate: number;
    clicks: number;
    subscriber_clicks: number;
    click_rate: number;
    ecommerce: {
      total_orders: number;
      total_spent: number;
      total_revenue: number;
    };
  };
  delivery_status: {
    enabled: boolean;
    can_cancel: boolean;
    status: string;
    emails_sent: number;
    emails_canceled: number;
  };
  _links: {
    rel: string;
    href: string;
    method: string;
    targetSchema: string;
    schema: string;
  };
};

type ListCampaignsResponse = {
  campaigns: Campaign[];
  total_items: number;
  _links: {
    rel: string;
    href: string;
    method: string;
    targetSchema: string;
    schema: string;
  };
};

type GetCampaignContentResponse = {
  variate_contents: {
    content_label: string;
    plain_text: string;
    html: string;
  };
  plain_text: string;
  html: string;
  archive_html: string;
  _links: {
    rel: string;
    href: string;
    method: string;
    targetSchema: string;
    schema: string;
  };
};

type NewsletterPublicCampaign = {
  title: string;
  id: string;
  sendTime: string;
  plainText: string;
  html: string;
};

export type {
  Recipient,
  Campaign,
  ListCampaignsResponse,
  GetCampaignContentResponse,
  NewsletterPublicCampaign,
};
