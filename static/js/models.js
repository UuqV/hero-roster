"use strict";
// To get you started
export class User {
  constructor(data) {
    this.firstName = data.first_name;
    this.pk = data.pk;
    this.relations = data.relations;
  }
}

export class Hero {
  constructor(data) {
    this.alias = data.alias;
    this.currentCity = data.current_city;
    this.debutIssue = data.debut_issue;
    this.debutYear = data.debut_year;
    this.hometown = data.hometown;
    this.name = data.name;
    this.pk = data.pk;
    this.universe = data.universe;
  }
}
