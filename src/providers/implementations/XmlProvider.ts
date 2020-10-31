/* eslint-disable @typescript-eslint/no-var-requires */
import { IXmlProvider } from '../IXmlProvider';

const js2xmlparser = require('js2xmlparser');

export class XmlProvider implements IXmlProvider {
  constructor(private xmlBuilder = js2xmlparser) {}

  async build(data: any, name: string): Promise<string> {
    return encodeURIComponent(
      this.xmlBuilder.parse(name, data, {
        declaration: { encoding: 'UTF-8' }
      })
    );
  }
}
