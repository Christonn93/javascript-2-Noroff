// Just me trying to figure out JS classes. This is never used

/**
 *
 */
class Profile {
  constructor(email, name, avatar, banner) {
    this.email = email;
    this.name = name;
    this.avatar = avatar || "/assets/img/avatar-placeholder.png";
    this.banner = banner || "/assets/img/banner-placeholder.png";
  }
}
