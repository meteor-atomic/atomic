## Atomic Blog

A super clean blog application built using Meteor, the blog comes with manay features including

* Administration
  * Dashboard
  * Posts
  * Comments
  * Media
  * Users
  * Settings
* Markdown
  * Posts are written in markdown and converted to html on save.
  * Markdown editor in the administration panel.
* Internationalization
* RSS Feeds
* Categories
* Tags

### Development
Atomic is still under heavy development but we are looking for members of the opensource community to help make the project production ready.

Atomic is built using only packages. similar to TelescopeJS project, this helps with project organisation, load order and namespacing. It also helps us be more open source, for example, the package `atomic:notify` is an independent package that will be published for others to use outside the project.

**Data Packages**
Data packages are small packages that create an interface with collections to help centralize the security and data integrity.

See the follwing packages for examples: `atomic:posts`, `atomic:categories`, `atomic:accounts`.

**Application Packages**
Application packages are mainly frontend applications, such as `atomic:client` and `atomic:admin`, these packages will be able to be detached from the project, useful for creating microservice application that use the same database to perform maintaince etc.

**Routing**
We have chosen to use `flow-router` and `flow-layout` as the routing package due to the common issues people have with `iron:router`.

We have extended the `flow-router` package so we can add custom functionality if required.

### Installation

**Clone the project**

`git clone git@github.com:meteor-atomic/atomic.git`

**Start the project**

`cd atomic; meteor`

Once the project is running, you can visit [http://localhost:3000](http://localhost:3000).

### License
MIT - [LICENSE.md](https://github.com/meteor-atomic/atomic/blob/master/LICENSE.md)
