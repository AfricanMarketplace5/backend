exports.seed = async function (knex) {
  await knex("users").insert([
    {
      usernname: "Anastasia",
      password: "$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq",
      role_id: 1,
    },
    {
      username: "Vasilii",
      password: "$3a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq",
      role_id: 2,
    },
    {
      username: "Johanna",
      password: "$4a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq",
      role_id: 3,
    },
    {
      username: "Zach",
      password: "$5a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq",
      role_id: 4,
    },
  ]);
};