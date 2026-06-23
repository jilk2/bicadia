export class LocalStorageHandler {

    static saveCharacterOptions(options){
        localStorage.clear()
        localStorage.setItem("characterOptions", options)
    }
}