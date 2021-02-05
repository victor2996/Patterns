class TrialMembership {
  constructor(name) {
    this.name = name;
    this.price = 0;
  }
}
class StandardMembership {
  constructor(name) {
    this.name = name;
    this.price = 30;
  }
}
class PremiumMembership {
  constructor(name) {
    this.name = name;
    this.price = 100;
  }
}

class MemberFactory {
  static list = {
    trial: TrialMembership,
    standard: StandardMembership,
    premium: PremiumMembership,
  };

  create(name, type = "trial") {
    const Membership = MemberFactory.list[type] || MemberFactory.list.trial;
    const member = new Membership(name);
    member.type = type;
    member.define = function () {
      console.log(
        `user ${this.name} has ${this.type} sub which cost ${this.price}$`
      );
    };
    return member;
  }
}

const factory = new MemberFactory();

const members = [
  factory.create("Alice"),
  factory.create("John", "premium"),
  factory.create("Mark", "standard"),
];

members.forEach((m) => {
  m.define();
});
