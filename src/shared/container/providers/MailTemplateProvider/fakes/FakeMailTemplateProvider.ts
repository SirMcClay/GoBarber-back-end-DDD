import IMailTenplateProvider from '../models/IMailTemplateProvider';

class FakeMailTemplateProvider implements IMailTenplateProvider {
  public async parse(): Promise<string> {
    return 'Mail content';
  }
}

export default FakeMailTemplateProvider;
