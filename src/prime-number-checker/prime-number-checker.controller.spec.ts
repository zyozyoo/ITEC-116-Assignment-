import { Test, TestingModule } from '@nestjs/testing';
import { PrimeNumberCheckerController } from './prime-number-checker.controller';

describe('PrimeNumberCheckerController', () => {
  let controller: PrimeNumberCheckerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrimeNumberCheckerController],
    }).compile();

    controller = module.get<PrimeNumberCheckerController>(PrimeNumberCheckerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
