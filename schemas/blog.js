export default {
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Title",
    },
    {
      name: "content",
      type: "string",
      title: "Content",
    },
    {
      title: "Launch Scheduled At",
      name: "launchAt",
      type: "datetime",
      option: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
        timeStep: 5,
        calendarTodayLabel: "Today",
      },
    },
  ],
};
