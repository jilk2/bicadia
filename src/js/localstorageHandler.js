export class LocalStorageHandler {
  static saveCharacterOptions(options) {
    localStorage.clear();
    localStorage.setItem("characterOptions", options);
  }

  static saveChosenOptions(options) {
    localStorage.clear();
    localStorage.setItem("chosenCharacterOptions", options);
  }
}
