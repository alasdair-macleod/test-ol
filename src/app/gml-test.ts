import GML2 from 'ol/format/GML2';

export class TestClass {
  private gml2 = new GML2();

  constructor() {
     this.gml2.readFeatures(undefined);
  }
}
