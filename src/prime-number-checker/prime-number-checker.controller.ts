import { Controller, Get , Param } from '@nestjs/common';

@Controller('prime-number-checker')
export class PrimeNumberCheckerController {
    @Get('PrimeNum/:n')
    getPrimeNum(@Param('n') n: number): string {
        if (isNaN(n) || n < 1) {
            return 'The number input must be positive!'
        }

        function isPrimeNum(num: number): boolean {
            for (let i = 2; i < num; i++ ) {
                if (num % i == 0) {
                    return false;
                }
            }
            return num > 1;
        }
        
        return JSON.stringify({
            isPrimeNum: isPrimeNum(n),
        });
    }
}