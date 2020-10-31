export interface IXmlProvider {
  build(data: any, name: string): Promise<string>;
}
