"use strict";

module.exports = {
  async afterCreate(event) {
    const DASHBOARD_URL =
      process.env.DASHBOARD_URL === ""
        ? "http://localhost:3000"
        : process.env.DASHBOARD_URL;
    await strapi.plugins.email.services.email.send({
      to: event.result.email,
      from: "support@freecodecamp.org",
      subject: "Invitation Link",
      text: `Here is your invitation link: ${DASHBOARD_URL}/api/auth/signin`,
    });
  },
};
