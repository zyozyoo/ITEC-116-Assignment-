import { Controller, Get, Param } from '@nestjs/common';

@Controller('factorial-calculator')
export class FactorialCalculatorController {
    @Get('factorial/:n')
    factorial(@Param('n') n: number): any {
        if (isNaN(n) || n < 0) {
            throw new Error('User need to input a positive number!');   
        }
        
        function factcheck(n: number): number {
            if (n == 0) {
                return 1;
            }
            return n * factcheck(n - 1);
        }

        return {"factorial": factcheck(n)};
    }
}
