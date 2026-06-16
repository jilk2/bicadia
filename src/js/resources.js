import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Character: new ImageSource('images/character-placeholder.png'),
    Bedroom: new ImageSource('images/background-classroom.png'),
    Textbox: new ImageSource('images/textbox.png'),
    BackgroundTopDown: new ImageSource('images/background-topdown.png')
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }