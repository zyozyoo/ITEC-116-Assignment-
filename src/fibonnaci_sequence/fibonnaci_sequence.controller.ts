import { Controller, Get, Param } from '@nestjs/common';

@Controller('fibonnaci-sequence')
export class FibonnaciSequenceController {
    @Get('fibonnaci/:n')
    fibonnaci(@Param('n') n: string): { sequence: number[] } {
        const num = parseInt(n, 10);

        if (isNaN(num) || num <= 0) {
            throw new Error('Parameter needs to be positive.');
        }

        return { sequence: this.calculatorFibonnaci(num)};

    }
    
    private calculatorFibonnaci(n: number): number[] {
        const fiboSequence = [];
        let a = 0, b = 1, temp;

        for (let i = 0; i < n; i++) {
            fiboSequence.push(a);
            temp = a;
            a = b;
            b = temp + b;
        }

        return fiboSequence;
    }
}
