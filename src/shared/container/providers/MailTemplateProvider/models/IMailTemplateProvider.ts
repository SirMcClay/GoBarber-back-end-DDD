import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';

export default interface IMailTenplateProvider {
  parse(data: IParseMailTemplateDTO): Promise<string>;
}
