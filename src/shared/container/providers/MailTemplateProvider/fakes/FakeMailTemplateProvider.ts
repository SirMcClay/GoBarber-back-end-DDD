import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';
import IMailTenplateProvider from '../models/IMailTemplateProvider';

class FakeMailTemplateProvider implements IMailTenplateProvider {
  public async parse({ template }: IParseMailTemplateDTO): Promise<string> {
    return template;
  }
}

export default FakeMailTemplateProvider;
