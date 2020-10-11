
const controller = function (routerElement, router, ctrlConfig, projectConfig) {
  /*
  router public methods:
  - goto(index)
  - next()
  - prev()

  - on()
  - off()

  - events: begin|end|indexChanged|nextIndex|prevIndex|stepChanged

  public properties
  - totalScenes()
  - totalSteps()
  - currentIndex()
  - currentStep()
  */
}

controller.install = Presenta => {
  Presenta.addController('starter', controller)
}

export default controller

if (typeof window !== 'undefined' && window.Presenta) {
  window.Presenta.use(controller)
}
