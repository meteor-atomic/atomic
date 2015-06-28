/**
 * Attach the schema
 */
_.extend(Users, {
  /**
   * Attach the schema to the server side namespace
   * @type {SimpleSchema}
   */
  schema : new SimpleSchema({
    username: {
        type: String,
        regEx: /^[a-z0-9A-Z_]{3,15}$/
    },
    emails: {
        type: [Object],

        // As we are using passwordless authentication such as google we have to make
        // this optional.
        optional: true
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
    createdAt: {
        type: Date
    },
    profile: {
      type: new SimpleSchema({
        firstName: {
          type: String,
          regEx: /^[a-zA-Z-]{2,25}$/,
          optional: true
        },
        lastName: {
          type: String,
          regEx: /^[a-zA-Z]{2,25}$/,
          optional: true
        },
        birthday: {
          type: Date,
          optional: true
        },
        gender: {
          type: String,
          allowedValues: ['Male', 'Female'],
          optional: true
        },
        organization : {
          type: String,
          regEx: /^[a-z0-9A-z .]{3,30}$/,
          optional: true
        },
        website: {
          type: String,
          regEx: SimpleSchema.RegEx.Url,
          optional: true
        },
        bio: {
          type: String,
          optional: true
        },
        country: {
          type: new SimpleSchema({
            name: {
              type: String
            },
            code: {
              type: String,
              regEx: /^[A-Z]{2}$/
            }
          }),
          optional: true
        }
      }),
      optional: true
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },

    roles: {
        type: Object,
        optional: true,
        blackbox: true
    }
  });
})

/**
 * Attach the schema to the collection for validation and sanitation.
 */
Users.collection.attachSchema(Users.schema);
