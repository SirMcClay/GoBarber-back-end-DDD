import { container } from 'tsyringe';

import IStorageProvider from './models/IStorageProvider';

import diskStorageProvider from './implementations/DiskStorageProvider';

const providers = {
  disk: diskStorageProvider,
};

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  providers.disk,
);
